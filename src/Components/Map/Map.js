import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./Map.css";
import useGeoLocation from "../../Hooks/useGeolocation";
import RoutingControl from "../RoutingControl/RoutingControl";

const Map = () => {
  const position = [23.746640828661445, 90.4283764417992];
  //this is location for show my live location and location place name
  const [location, placeName] = useGeoLocation();
  return (
    <div className="map-section">
      <MapContainer center={position} zoom={14} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* showing the user live location and placeName */}
        {location.loaded && !location.error && (
          <Marker
            position={[location.coordinates.lat, location.coordinates.lng]}
          >
            <Popup>{placeName}</Popup>
          </Marker>
        )}

        {/* <LeafletGeocoder /> */}
        <RoutingControl></RoutingControl>
      </MapContainer>
    </div>
  );
};

let DefaultIcon = L.icon({
  iconUrl: require("./red.png"),
  iconSize: [25, 41],
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default Map;
