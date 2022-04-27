import express from "express";
import Item from "./@types/item";
import config from "./config";
import pool from "./db/pool";
import Query from "./utils/queryBuilder";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.listen(config.port, () => [console.log(`${config.port} listening`)]);

app.get("/categories", async (req, res) => {
  try {
    const query = `SELECT category from category`;
    const [data] = (await pool.query(query)) as any;
    res.json(data.map((data) => data.category));
  } catch (e) {
    res.status(400).json({ message: "error" });
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const query = `SELECT category from category WHERE id=${id}`;
    const [data] = await pool.query(query);
    res.json(data[0].category);
  } catch (e) {
    res.status(400).json({ message: "invalid category" });
  }
});

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
    const { category_id, description, image, price, title } = req.body;
    const queryBuilder = new Query();
    const item: Item = {
      category_id,
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
