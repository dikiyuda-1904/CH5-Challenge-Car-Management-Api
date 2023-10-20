const router = require("express").Router();

const Car = require("../controllers/carController");

const upload = require("../middlewares/uploader");
const autentikasi = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");

router.post(
  "/",
  autentikasi,
  checkRole(["Admin", "SuperAdmin"]),
  upload.single("image"),
  Car.createCar
);
router.get("/", autentikasi, Car.findCars);
router.get("/:id", Car.findCarById);
router.patch(
  "/:id",
  autentikasi,
  checkRole(["Admin", "SuperAdmin"]),
  Car.updateCar
);
router.delete(
  "/:id",
  autentikasi,
  checkRole(["Admin", "SuperAdmin"]),
  Car.deleteCar
);

module.exports = router;
