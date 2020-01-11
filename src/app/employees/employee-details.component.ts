import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;
  // Include a private field _id to keep track of the route parameter value
  private _id: number;
  constructor(private _route: ActivatedRoute,
    private _employeeService: EmployeeService,
    private _router: Router) { }

  // Extract the route parameter value and retrieve that specific
  // empoyee details using the EmployeeService
    ngOnInit() {
    this._route.paramMap.subscribe(params => {
      this._id = +params.get('id');
      this.employee = this._employeeService.getEmployee(this._id);
    });
  }

  // Everytime this method is called the employee id value is
  // incremented by 1 and then redirected to the same route
  // but with a different id parameter value
  getNextEmployee() {
    if (this._id < 3) {
      this._id = this._id + 1;
    } else {
      this._id = 1;
    }

    this._router.navigate(['/employees', this._id], {
      queryParamsHandling: 'preserve'
    });
  }
}
