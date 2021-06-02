const express = require('express');
const router = express.Router();
const employeeController = require('../controller/employeeController');


router.get('/', employeeController.employee_index);

router.get('/create', employeeController.employee_create);

router.post('/create', employeeController.employee_addTeacherFromExcel)

router.get('/:id/edit', employeeController.employee_edit);

router.put('/:id', employeeController.employee_update);

router.delete('/:id', employeeController.employee_delete);

module.exports = router;