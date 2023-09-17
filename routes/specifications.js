const express = require("express");
const router = express.Router();


const {
  createSpecification,
  getAllSpecifications,
} = require("../controllers/specificationsController");


router.post("/1", createSpecification);


router.get("/2", getAllSpecifications);

module.exports = router;
