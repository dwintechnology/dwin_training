import { Router } from "express";
import db from "../db/index.js";

const router = Router();
//post & insert ========================
router.post("/", async (req, res) => {
  try {
    res.json(await db.insert(req.body));
  } catch (error) {
    res.status(500).send("Server Error");
    console.error(error.message);
  }
});
//get & show ===========================
router.get("/:id", async (req, res) => {
  try {
    res.json(await db.show(req));
  } catch (error) {
    res.status(400).send("Not found");
    console.error(error.message);
  }
});
//upadate & put =======================
router.put("/:id", async (req, res) => {
  try {
    res.json(await db.update(req));
  } catch (error) {
    res.status(400).send("Not found");
    console.error(error.message);
  }
});
//delete==============================
router.delete("/:id", async (req, res) => {
  try {
    res.json(await db.delete(req));
  } catch (error) {
    res.status(400).send("Not found");
    console.error(error.message);
  }
});

export default router;
