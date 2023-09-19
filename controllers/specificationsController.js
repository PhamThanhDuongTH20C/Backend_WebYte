// Import the Specifications model
const Specifications = require("../model/specifications");
const express = require("express");
const router = express.Router();
// Controller for creating a new specification
exports.createSpecification = async (req, res) => {
    try {
        const { skuprofile, title, content } = req.body;
        const specification = new Specifications({ skuprofile, title, content });
        await specification.save();
        res.status(201).json(specification);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
};

// Controller for getting all specifications
exports.getAllSpecifications = async (req, res) => {
    try {
        const specifications = await Specifications.find();
        res.json(specifications);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
};
