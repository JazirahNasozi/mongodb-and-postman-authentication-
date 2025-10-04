const e = require("express");
const jwt = require("jsonwebtoken")


const auth = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;
        if (token) {
            decodedData = jwt.verify(token, "test");

            req.userId = decodedData?.id;
            console.log(decodedData);

        }
        next();

    } catch (error) {
        res.status(401).json({ message: "Invalid token" })

    }
}

module.exports = auth;