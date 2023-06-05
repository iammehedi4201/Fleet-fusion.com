const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5002;
require("dotenv").config();
//middle wares
app.use(cors());
app.use(express.json());

//connect to mongoDb Database
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_user}:${process.env.DB_password}@cluster0.a5mmhss.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const carsCollection = client.db("fleetFusionCars").collection("CarsInfo");
    const orderCollection = client
      .db("fleetFusionCars")
      .collection("OrderInfo");
    //Read Data from mongoDb
    app.get("/cars", async (req, res) => {
      const query = {};
      const cursor = carsCollection.find(query);
      const cars = await cursor.toArray();
      res.send(cars);
    });

    app.get("/cars/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const user = await carsCollection.findOne(query);
      res.send(user);
    });
    // orders api
    app.get("/orders", async (req, res) => {
      //if apply qurey then
      let query = {};
      if (req.query.Email) {
        query = {
          Email: req.query.Email,
        };
      }
      const cursor = orderCollection.find(query);
      const orders = await cursor.toArray();
      res.send(orders);
    });

    app.post("/orders", async (req, res) => {
      const order = req.body;
      const result = await orderCollection.insertOne(order);
      res.send(result);
    });

    app.delete("/orders/:id", async (req, res) => {
      const id = req.params.id;
      console.log("Trying to delete :-", id);
      const query = { _id: new ObjectId(id) };
      const result = await orderCollection.deleteOne(query);
      res.send(result);
    });

    //update order
    app.get("/order/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const order = await orderCollection.findOne(query);
      res.send(order);
    });

    app.patch('/order/:id',async (req,res)=>{
              const id =req.params.id;
              const status =req.body.status
              console.log('The status is :-',status);
              const query ={_id : new ObjectId(id)}
              const updatedDoc ={
                 $set:{
                     status:status
                 }
              }
              const result = await orderCollection.updateOne(query,updatedDoc);
              res.send(result)
    })

    app.put("/order/:id", async (req, res) => {
      const id = req.params.id;
      const order = req.body;
      console.log("The order is", order);
      const filter = { _id: new ObjectId(id) };
      // this option instructs the method to create a document if no documents match the filter
      const options = { upsert: true };
      const updateOrder = {
        $set: {
          phone: order.phone,
          pickUpDate: order.pickUpDate,
          Time :order.Time,
          paymentMethod: order.paymentMethod,
          cardOwnerName: order.cardOwnerName,
          cardNumber: order.cardNumber,
          cardExpirationNumber: order.cardExpirationNumber,
        }
      };
      const result = await orderCollection.updateOne(filter,updateOrder,options)
      res.send(result)
    });
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
