const { verify } = require("jsonwebtoken");

module.exports = {
    auth: (req, res, next) => {
        try {
            let token = req.headers.token;
            if (!token)
                return res
                    .status(401)
                    .json({ msg: "NO authentication token, access denied" });

            if (!token)
                return res
                    .status(401)
                    .json({ msg: "No authentication token, access denied" });

            const verified = verify(token, process.env.JWT_SECRET); // process.env.JWT_SECRET
            if (!verified)
                return res.status(401).json({
                    msg: "Token verification failed, authorization denied",
                });
            req.user = verified;
            next();
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },
};
