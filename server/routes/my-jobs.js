import express, { json } from "express";
import authorisation from "../middleware/auth.js";
import { pool } from "../utils/connection.js";

const router = express.Router();

router.get("/", authorisation, async (req, res) => {
    try {
        const user = await pool.query(
            "SELECT firstname, lastname FROM users WHERE id = $1", [req.user.id]
        );

        res.json(user.rows[0]);
    } catch (err) {
        res.status(500).json(err.message);
    }
});

export default router;