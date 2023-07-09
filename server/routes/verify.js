import express, { json } from "express";
import authorisation from "../middleware/auth.js";

const router = express.Router();

router.get("/", authorisation, (req, res) => {
    try {
        res.json(true);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

export default router;