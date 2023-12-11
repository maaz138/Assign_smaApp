import "dotenv/config";
import express from "express";
import { sequelize, connectDB } from "./db/config.js";
import dbinit from "./db/init.js";
import allRoutes from "./router/allRoutes.js";
import Session from "express-session";
import SequelizeStore from "connect-session-sequelize";
const PORT = process.env.PORT;
const app = express();
app.use(express.json());
connectDB();
const mySequelizeStore = SequelizeStore(Session.Store);
const mySequelizeStore1 = new mySequelizeStore({
  db: sequelize,
});

app.use(
  Session({
    secret: process.env.SESSION_SECRET,
    store: mySequelizeStore1,
    saveUninitialized: true,
    resave: false,
    proxy: false,
  })
);
mySequelizeStore1.sync({});

dbinit()
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db not synced", err));
app.use("/", allRoutes);

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`server started at http://localhost:${PORT}`);
  } else {
    console.log("server not started");
  }
});
