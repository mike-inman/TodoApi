import { Component, OnInit, Inject } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FetchEmployeeComponent } from '../fetchemployee/fetchemployee.component';
import { EmployeeService } from '../services/empservice.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {
  employeeForm: FormGroup;
  title: string = "Create";
  id: number;
  errorMessage: any;

  
  // this works
  //constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute) {

  //  if (this._avRoute.snapshot.params["id"]) {
  //    this.id = this._avRoute.snapshot.params["id"];
  //  }
   
  //  this.employeeForm = this._fb.group({
  //    id: 0,
  //    name: ['', [Validators.required]],
  //    gender: ['', [Validators.required]],
  //    department: ['', [Validators.required]],
  //    city: ['', [Validators.required]]
  //  })

  //}

  // this works
  constructor(private _fb: FormBuilder
    , private _avRoute: ActivatedRoute
    //, private _employeeService: EmployeeService
    , private _router: Router
  ) {

    if (this._avRoute.snapshot.params["id"]) {
      this.id = this._avRoute.snapshot.params["id"];
    }

    this.employeeForm = this._fb.group({
      id: 0,
      name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      department: ['', [Validators.required]],
      city: ['', [Validators.required]]
    })

  }


  ngOnInit() {
    if (this.id > 0) {
      this.title = "Edit";
      //this._employeeService.getEmployeeById(this.id)
      //  .subscribe(resp => this.employeeForm.setValue(resp)
      //    , error => this.errorMessage = error);
    }
  }




    save() {
    //if (!this.employeeForm.valid) {
    //  return;
    //}
    //if (this.title == "Create") {
    //  this._employeeService.saveEmployee(this.employeeForm.value)
    //    .subscribe((data) => {
    //      this._router.navigate(['/fetch-employee']);
    //    }, error => this.errorMessage = error)
    //}
    //else if (this.title == "Edit") {
    //  this._employeeService.updateEmployee(this.employeeForm.value)
    //    .subscribe((data) => {
    //      this._router.navigate(['/fetch-employee']);
    //    }, error => this.errorMessage = error)
    //}
  }

  cancel() {
    this._router.navigate(['/fetch-employee']);
  }

  get name() {
    //return this.employeeForm.get('name');
    return "NAME";
  }
  get gender() {
    //return this.employeeForm.get('gender');
    return "GENDER";
  }
  get department() {
    //return this.employeeForm.get('department');
    return "DEPARTMENT";
  }
  get city() {
    //return this.employeeForm.get('city');
    return "CITY";
  }


}
