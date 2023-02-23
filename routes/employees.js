const express = require('express');
const router = express.Router();
const Employee = require('../models/employees');

//Getting all employees
router.get("/", async (req, res) => {
    try {
        const employees = await Employee.find();
        res.send(employees);
    } catch (error) {
        res.status(500).res.json({ message: error.message })
    }
})
//Getting one employee
router.get("/:id", getEmployee, (req, res) => {
    res.json(res.employee);
})
//Creating One employee
router.post("/", async (req, res) => {
    const employee = new Employee({
        ...req.body
    });
    try {
        const newEmployee = await employee.save();
        res.status(201).json(newEmployee)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
//Updating One employee
router.patch("/:id", getEmployee, async (req, res) => {
    if(req.body.firstName != null) {
        res.employee.firstName = req.body.firstName;
    }
    if(req.body.lastName != null) {
        res.employee.lastName = req.body.lastName;
    }
    if(req.body.startDate != null) {
        res.employee.startDate = req.body.startDate;
    }
    if(req.body.department != null) {
        res.employee.department = req.body.department;
    }
    if(req.body.birthDate != null) {
        res.employee.birthDate = req.body.birthDate;
    }
    if(req.body.street != null) {
        res.employee.street = req.body.street;
    }
    if(req.body.city != null) {
        res.employee.city = req.body.city;
    }
    if(req.body.state != null) {
        res.employee.state = req.body.state;
    }
    if(req.body.postalZip != null) {
        res.employee.postalZip = req.body.postalZip;
    }

    try {
        const updatedEmployee = await res.employee.save();
        res.json(updatedEmployee);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})
//Deleting one employee
router.delete("/:id", getEmployee, async (req, res) => {
    try {
        await res.employee.remove();
        res.json({ message: "Deleted Employee" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

async function getEmployee(req, res, next) {
    let employee;
    try {
        employee = await Employee.findById(req.params.id);
        if (employee == null) {
            return res.status(404).json({ message: "Cannot find employee" })
        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }

    res.employee = employee
    next()
}

module.exports = router;