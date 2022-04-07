import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})

export class EditEmployeeComponent implements OnInit {

  editEmployee = new FormGroup({
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

  constructor(private router: ActivatedRoute, private employee: EmployeeService, private rout: Router) { }

  ngOnInit(): void {
    console.warn(this.router.snapshot.params['id']);
    this.employee.getCurrentEmployee(this.router.snapshot.params['id']).subscribe((result: any) => {
      this.editEmployee = new FormGroup({
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        email: new FormControl(result['email']),
        address: new FormControl(result['address']),
        username: new FormControl(result['username']),
        password: new FormControl(result['password']),
        contact: new FormControl(result['contact']),
        gender: new FormControl(result['gender']),
        qualification: new FormControl(result['qualification']),
        experience: new FormControl(result['experience'])
      })
    })
  }
  collection() {
    //console.warn(this.editEmployee.value);
    this.employee.updateEmployee(this.router.snapshot.params['id'], this.editEmployee.value).subscribe((result) => {
      this.rout.navigateByUrl('list');
    })
  }
}
