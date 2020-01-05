import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  // Private backing field for the property
  private _employee: Employee;

  // This property setter is called anytime the input property changes
  // Notice the code here logs the previous and current employee names
  @Input()
  set employee(val: Employee) {
    // console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
    // console.log('Current : ' + val.name);

    console.log('employee changed from ' + JSON.stringify(this._employee) + ' to ' + JSON.stringify(val));
    this._employee = val;
  }

  // This getter is called when reading and displaying data
  get employee(): Employee {
    return this._employee;
  }

  /*Angular property setter vs ngonchanges*/
  // @Input() employeeId: number;

  private _employeeId: number;
  @Input()
  set employeeId(val: number) {
    console.log('employeeId changed from ' + JSON.stringify(this._employeeId)
      + ' to ' + JSON.stringify(val));
    this._employeeId = val;
  }
  get employeeId(): number {
    return this._employeeId;
  }


  // Parent component will use this Input property to pass
  // the employee object to which the template binds to
  /*@Input() employee: Employee;*/

  constructor() { }

  ngOnInit() {
  }

  // This life cycle hook receives SimpleChanges as an Input parameter
  // We can use it to retrieve previous and current values as shown below
  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
    /*
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;

    console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL'));
    console.log('Current : ' + currentEmployee.name);
    */

    /*Angular property setter vs ngonchanges*/
    // for (const propName of Object.keys(changes)) {

    //   const change = changes[propName];
    //   const from = JSON.stringify(change.previousValue);
    //   const to = JSON.stringify(change.currentValue);

    //   console.log(propName + ' changed from ' + from + ' to ' + to);
    // }

  }
}
