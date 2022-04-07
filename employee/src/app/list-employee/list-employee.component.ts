import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})

export class ListEmployeeComponent implements OnInit {

  constructor(private employee: EmployeeService) { }

  collection: any = [];

  ngOnInit(): void {
    this.employee.getList().subscribe((result) => {
      console.warn(result);
      this.collection = result;
    })
  }

  deleteEmployee(item: any) {
    if (confirm("Do you want to delete?")) {
      for (const obj in this.collection) {
        if (String(this.collection[obj].id) === String(item)) {
          this.collection.splice(Number(obj), 1)
        }
      }
      this.employee.deleteEmployee(item).subscribe((result: any): any => {
        console.warn("Result : ", result);
      })
    }
  }
}
