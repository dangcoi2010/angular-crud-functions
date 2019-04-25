import { Component } from '@angular/core';

export class Employee {
  ID: number;
  Code: string;
  Name: string;
}

const EmployeeArray: Employee[] = [
  {ID: 1, Code: 'JT', Name: 'John Terry'},
  {ID: 2, Code: 'FT', Name: 'Fernando Torres'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeCollection = EmployeeArray;
}
