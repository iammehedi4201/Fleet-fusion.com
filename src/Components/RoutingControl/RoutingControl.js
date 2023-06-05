import React, { useContext, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet/dist/leaflet.css";
import { Locationcontext } from "../../Pages/BookingProcess/BookingProcess";

const RoutingControl = () => {
    const map = useMap();
    const routingControlRef = useRef(null);
    const markerRef = useRef(null);
  
    const { pickupPlace, destinationPlace } = useContext(Locationcontext);
  
  
    const [pickupLatLng, setPickupLatLng] = useState(null);
    const [destinationLatLng, setDestinationLatLng] = useState(null);
  
    console.log("The pickupLatlng is :-", pickupLatLng);
  
    useEffect(() => {
      const fetchLatLng = async (place, setLatLng) => {
        const apiKey = "e16171bb732c4d82b1bfe075d57ea900";
        const response = await fetch(
          `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            place
          )}&key=${apiKey}`
        );
        const data = await response.json();
        if (data.results.length > 0) {
          const { lat, lng } = data.results[0].geometry;
          setLatLng([lat, lng]);
        }
      };
  
      if (pickupPlace) {
        fetchLatLng(pickupPlace, setPickupLatLng);
      }
      if (destinationPlace) {
        fetchLatLng(destinationPlace, setDestinationLatLng);
      }
    }, [pickupPlace, destinationPlace]);
  
    useEffect(() => {
      if (!routingControlRef.current) {
        routingControlRef.current = L.Routing.control({
          waypoints: [],
          routeWhileDragging: false,
          geocoder: L.Control.Geocoder.nominatim(),
          addWaypoints: true,
          draggableWaypoints: false,
          fitSelectedRoutes: true,
          showAlternatives: true,
        }).addTo(map);
  
        markerRef.current = L.marker([0, 0]).addTo(map); // Initialize marker with dummy coordinates
  
        routingControlRef.current.on("routesfound", (e) => {
          console.log("The routes are:", e);
          e.routes[0].coordinates.forEach((c, i) => {
            setTimeout(() => {
              markerRef.current.setLatLng([c.lat, c.lng]);
            }, 1000 * i);
          });
        });
      }
      
      if (destinationLatLng && pickupLatLng) {
        routingControlRef.current.setWaypoints([
          L.latLng(pickupLatLng[0], pickupLatLng[1]), // starting point
          L.latLng(destinationLatLng[0], destinationLatLng[1]), // destination point
        ]);
      } else {
        routingControlRef.current.setWaypoints([]);
      }
    }, [map, destinationLatLng, pickupLatLng]);
  
    return null;
  };

export default RoutingControl;