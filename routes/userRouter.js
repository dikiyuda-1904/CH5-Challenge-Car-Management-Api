const router = require("express").Router();

const User = require("../controllers/userController");

const authenticate = require("../middlewares/authenticate");
const checkRole = require("../middlewares/checkRole");
const checkId = require("../middlewares/checkId");

router.get("/", authenticate, User.findUsers);
router.get("/:id", authenticate, User.findUserById);

router.patch(
  "/admin/:id",
  authenticate,
  checkRole("SuperAdmin"),
  checkId,
  User.updateUser
);
router.patch("/member/:id", authenticate, checkId, User.updateUser);

router.delete(
  "/admin/:id",
  authenticate,
  checkRole("SuperAdmin"),
  checkId,
  User.deleteUser
);
router.delete("/member/:id", authenticate, checkId, User.deleteUser);

module.exports = router;
