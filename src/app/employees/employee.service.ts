import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
    private listEmployees: Employee[] = [
      {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      email: 'mark@pragimtech.com',
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1988'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png'
    },
    {
      id: 2,
      name: 'Mary',
      gender: 'Female',
      phoneNumber: 2345978640,
      contactPreference: 'Phone',
      dateOfBirth: new Date('11/20/1979'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/mary.png'
    },
    {
      id: 3,
      name: 'John',
      gender: 'Male',
      phoneNumber: 5432978640,
      contactPreference: 'Phone',
      dateOfBirth: new Date('3/25/1976'),
      department: '3',
      isActive: false,
      photoPath: 'assets/images/john.png',
    }];

    getEmployees(): Employee[] {
      return this.listEmployees;
    }

    getEmployee(id: number): Employee {
      return this.listEmployees.find( e => e.id === id);
    }

    save(employee: Employee) {
      this.listEmployees.push(employee);
    }
}
