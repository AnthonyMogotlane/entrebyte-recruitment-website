import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const authorisation = async (req, res, next) => {
    try {
        const jwtToken = req.header("token");

        if(!jwtToken) {
            return res.status(403).json({message: "not authorised"})
        }

        const payload = jwt.verify(jwtToken, process.env.JWT_SECRET);
        console.log(payload);
        req.user = payload.user;

        next();
    } catch (err) {
        res.status(403).json({message: "not authorised"})
    }

}

export default authorisation;