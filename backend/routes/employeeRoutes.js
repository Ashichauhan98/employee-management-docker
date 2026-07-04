const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Create Employee
router.post('/employees', async (req, res) => {
    try {
        const employee = new Employee(req.body);
        const savedEmployee = await employee.save();

        res.status(201).json(savedEmployee);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
// Get all employees
router.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json(employees);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
// Update Employee
router.put('/employees/:id', async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
// Delete Employee
router.delete('/employees/:id', async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);

        res.json({
            message: 'Employee deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
module.exports = router;