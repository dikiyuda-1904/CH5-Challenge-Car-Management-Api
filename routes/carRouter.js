const router = require("express").Router();

const Car = require("../controllers/carController");

const upload = require("../middlewares/uploader");
const authenticate = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.post(
  "/",
  authenticate,
  checkRole("Admin", "SuperAdmin"),
  upload.single("image"),
  Car.createCar
);
router.get("/", authenticate, Car.findCars);
router.get("/:id", Car.findCarById);
router.patch(
  "/:id",
  authenticate,
  checkRole("Admin", "SuperAdmin"),
  upload.single("image"),
  Car.updateCar
);
router.delete(
  "/:id",
  authenticate,
  checkRole("Admin", "SuperAdmin"),
  Car.deleteCar
);

module.exports = router;
