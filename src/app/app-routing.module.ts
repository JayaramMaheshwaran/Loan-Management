import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcustomerComponent } from './addcustomer/addcustomer.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { UpdatecustomerComponent } from './updatecustomer/updatecustomer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoanComponent } from './loan/loan.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: UserLoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: RegisterComponent,
  },
  {
    path: 'newcust',
    component: AddcustomerComponent,
  },
  {
    path: 'header',
    component: HeaderComponent,
  },
  {
    path: 'loan',
    component: LoanComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home/custlist',
    component: CustomerlistComponent,
  },
  {
    path: 'custlist',
    component: CustomerlistComponent,
  },
  {
    path: 'details/:id',
    component: CustomerdetailsComponent,
  },
  {
    path: 'update/:id',
    component: UpdatecustomerComponent,
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
