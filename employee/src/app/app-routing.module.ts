import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';

const routes: Routes = [
  {
    component: AddEmployeeComponent,
    path: 'add'
  },
  {
    component: EditEmployeeComponent,
    path: 'edit/:id'
  },
  {
    component: EditEmployeeComponent,
    path: 'edit'
  },
  {
    component: ListEmployeeComponent,
    path: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
