import express from "express";
import Item from "./@types/item";
import config from "./config";
import pool from "./db/pool";
import Query from "./utils/queryBuilder";

const app = express();
app.use(express.json());

app.listen(config.port, () => [console.log(`${config.port} listening`)]);

app.get("/items", async (req, res) => {
  const { count } = req.query;
  const parsedCount = Number(count) || 20;
  try {
    const queryBuilder = new Query();
    const query = queryBuilder.SELECT("item").LIMIT(parsedCount).end();
    const [data] = await pool.query(query);
    res.json(data);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
});

app.get("/items/:id", async (req, res) => {
  try {
    const queryBuilder = new Query();
    const query = queryBuilder.SELECT("item").WHERE("id", req.params.id).end();
    const [data] = await pool.query(query);
    res.json(data[0]);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
});

app.delete("/items/:id", async (req, res) => {
  try {
    const queryBuilder = new Query();
    const query = queryBuilder.DELETE("item").WHERE("id", req.params.id).end();
    const [data] = await pool.query(query);
    res.json(data);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
});

app.post("/items", async (req, res) => {
  try {
    const { categoryId, description, image, price, title } = req.body;
    const queryBuilder = new Query();
    const item: Item = {
      category_id: categoryId,
      description,
      image,
      price,
      title,
    };
    const query = queryBuilder.INSERT("item", item).end();
    const [data] = await pool.query(query);
    res.json(data);
  } catch (e) {
    res.status(400);
    res.json(e);
  }
});
