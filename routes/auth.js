const express = require("express");
const { check } = require("express-validator");
const router = express.Router();

const authController = require("../controllers/auth");

router.get("/login", authController.getLogin);
router.get("/signup", authController.getSignup);
router.post("/login", authController.postLogin);
router.post("/logout", authController.postLogout);
router.post(
  "/signup",
  check("email").isEmail().withMessage("Enter valid Email"),
  authController.postSignup
);
router.get("/reset", authController.getReset);
router.post("/reset", authController.postReset);
router.get("/reset/:token", authController.getNewPassword);
router.post("/new-password", authController.postNewPassword);

module.exports = router;
