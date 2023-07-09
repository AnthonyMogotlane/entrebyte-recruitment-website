import express, { json } from "express";
import { pool } from "../utils/connection.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwt-generator.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { email, password } = req.body;
        const formData = { email, password };

        // Check if all fields have values
        if (!Object.values(formData).every((value) => value)) {
            return res.json({
                message: "all fields are required",
            });
        }

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        // Check if the user exist
        if (user.rows.length === 0) {
            return res.status(500).json({ message: "email or password incorrect" });
        }

        // Compare user password
        const validPassword = await bcrypt.compare(password, user.rows[0].password);
        if(!validPassword) {
            return res.status(500).json({ message: "email or password incorrect" });
        }
        
        const token = jwtGenerator(user.rows[0].id);

        res.status(200).json({ token });
    } catch (err) {
        res.status(500).json(err.message);
    }

});

export default router;