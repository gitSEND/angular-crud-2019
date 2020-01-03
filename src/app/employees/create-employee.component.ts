import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { Employee } from '../models/employee.model';

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
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: '',
    dateOfBirth: null,
    department: '-1',
    isActive: null,
    photoPath: null
  };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'IT' },
    { id: 4, name: 'Payroll' }
  ];
  previewPhoto = false;

  constructor() {
    this.datePickerConfing = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      dateInputFormat: 'DD/MM/YYYY'
    });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit() {
  }

  saveEmployee(newEmployee: Employee): void {
    // console.log(empForm.value);
    console.log(newEmployee);

  }
}
