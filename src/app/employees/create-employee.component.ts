import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // gender = 'male';
  // isActive = true;
  // department = '3';
  dateOfBirth: Date = new Date(1989, 7, 15);
  datePickerConfing: Partial<BsDatepickerConfig>;
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  constructor() {
    this.datePickerConfing = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false, minDate: new Date(2019, 0, 1), maxDate: new Date(2019, 11, 31),
      dateInputFormat: 'DD/MM/YYYY'
    });
  }
  ngOnInit() {
  }

  saveEmployee(empForm: NgForm): void {
    // console.log(empForm.value);
    console.log(empForm);

  }
}
