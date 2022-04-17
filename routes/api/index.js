const router = require("express").Router();
const userRoutes = require("./userRoutes");

router.use("/thoughts", thoughtRoutes);
router.use("/users", userRoutes);

module.exports = router;
