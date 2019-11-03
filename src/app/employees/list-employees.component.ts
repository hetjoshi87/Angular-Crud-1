import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  employees: Employee[];
  filteredEmployees: Employee[];
  private _searchTerm: string;

  get searchTerm(): string{
    return this._searchTerm;
  }

  set searchterm(value: string){
      this._searchTerm = value;
      this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string){
       return this.employees.filter(employee => employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);

    }

  constructor(private _employeeService: EmployeeService, private _router: Router) { }

  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  onClick(employeeId: number) {
      this._router.navigate(['/employees', employeeId]);
  }

  changeEmployeeName(){
    this.employees[0].name = 'Jordan';
    this.filteredEmployees = this.filterEmployees(this.searchTerm);
  }

}
