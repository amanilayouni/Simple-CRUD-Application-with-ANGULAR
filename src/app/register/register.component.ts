import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormControl|any
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.register=new FormGroup({
      "firstname":new FormControl(),
      "lastname":new FormControl(),
      "email":new FormControl(),
      "password":new FormControl()
    })
  }
  registerdata(register:FormGroup){
   this.http.post<any>("http://localhost:3000/users",register.value).subscribe((data)=>{
    alert("user added with sucsses")
    this.router.navigate(["login"])
   })
  }
}
