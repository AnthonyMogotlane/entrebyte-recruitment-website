import express, { json } from "express";
import { pool } from "../utils/connection.js";
import bcrypt from "bcrypt";
import jwtGenerator from "../utils/jwt-generator.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;
        const formData = { firstname, lastname, email, lastname };

        // Check if all fields have values
        if (!Object.values(formData).every((value) => value)) {
            return res.json({
                message: "all fields are required",
            });
        }

        const user = await pool.query("SELECT * FROM users WHERE email = $1", [email]);

        // Check if the user exist
        if (user.rows.length !== 0) {
            return res.status(500).json({ message: "user already exist" });
        }

        // Encryption user password
        const saltRound = 10;
        const salt = await bcrypt.genSalt(saltRound);
        const bcryptPassword = await bcrypt.hash(password, salt);

        // Add new user
        const newUser = await pool.query("INSERT INTO users (firstname, lastname, email, password) VALUES ($1, $2, $3, $4) RETURNING *", [firstname, lastname, email, bcryptPassword]);

        const token = jwtGenerator(newUser.rows[0].userId);


        
        res.status(200).json({token});
    } catch (err) {
        res.status(500).json({ err });
    }

});

export default router;