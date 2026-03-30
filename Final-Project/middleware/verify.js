const jwt = require("jsonwebtoken");

exports.verify = (...roles) => {
    return async (req, res, next) => {
        try {

            const token = req.headers.authorization?.split(" ")[1];

            if (!token) {
                return res.status(401).json({
                    message: "Token Missing"
                });
            }

            const decoded = jwt.verify(token, "vivekKey7260");

            // role check
            if (!roles.includes(decoded.role)) {
                return res.status(403).json({
                    message: "Access Denied"
                });
            }

            req.user = decoded ;

            
            next();

        } catch (error) {
            return res.status(401).json({
                message: "Invalid Token"
            });
        }
    }
}