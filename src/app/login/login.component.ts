import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
login:FormControl|any
  constructor(private http:HttpClient, private router:Router ) { }
user:any
  ngOnInit(): void {
    this.login=new FormGroup({
      "email":new FormControl(),
      "password":new FormControl()
    })

  }
logindata(login:FormGroup){
  this.http.get("http://localhost:3000/users").subscribe((data)=>{
    this.user=data
    const users=this.user.find((a:any)=>{
      return a.email===login.value.email && a.password===login.value.password
    });
    if (users) {
      alert("welcome  "+login.value.firstname)
      localStorage.setItem("token",login.value.email)
      this.router.navigate(["listeproduit"])
    }else{
      alert("Invalid Email or password !! ")
    }
  })

}
}
