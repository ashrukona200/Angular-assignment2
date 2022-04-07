import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {

  addEmployee = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    address: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
    contact: new FormControl(''),
    gender: new FormControl(''),
    qualification: new FormControl(''),
    experience: new FormControl('')
  })

  constructor(private employee: EmployeeService, private rout: Router) { }

  ngOnInit(): void {
  }

  collectEmployee() {
    this.employee.saveEmployee(this.addEmployee.value).subscribe((result) => {
      this.addEmployee.reset({});
      this.rout.navigateByUrl('list');
    })
    //console.warn(this.addEmployee.value);
  }
}
