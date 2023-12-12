import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  logInForm!:FormGroup;

  constructor(private fb:FormBuilder, private route:Router, private sharedService:SharedService, private router:Router){}

  ngOnInit(){
    this.createForm();
  }
  createForm(){
    this.logInForm = this.fb.group({
      "userName" : ['',[Validators.required]],
      "email" : ['',[Validators.required]],
      "password" : ['',[Validators.required]]
    })
  }

  users = [
    {userName : 'Tony Stark' ,email : 'ironman@gmail.com', password:'ironman@3000'},
    {userName : 'Chris Evans' ,email : 'Cap@gmail.com', password: 'Avenger'}
  ]

  get email(){
    return this.logInForm.get('email')
  }
  get password(){
    return this.logInForm.get('password')
  }
  get userName(){
    return this.logInForm.get('userName')
  }

  logIn(){
    console.log(this.logInForm.value)
  }
  sendUserName!:any;

   verifyUser(){

  //   let matchFound = false;
  //   for(let user of this.users){
  //     if(user.userName == this.logInForm.controls['userName'].value && user.email == this.logInForm.controls['email'].value && user.password == this.logInForm.controls['password'].value){
  //       matchFound = true;
  //         this.sendUserName = this.logInForm.controls['userName'].value;
  //         this.route.navigate(['/home'],{queryParams:{name:this.sendUserName}});
  //     }
  //  }
  //  if(!matchFound){
  //   alert("Enter Correct Credentials!")
  //  }

// method 2

  let temp:any = this.users.filter((user:any)=>{
    return ((user.userName == (this.logInForm.controls['userName'].value) && user.email == (this.logInForm.controls['email'].value) && user.password == (this.logInForm.controls['password'].value)));
  })

  this.sendUserName = temp[0].userName;
  this.router.navigate(['/home'],{queryParams : {name:this.sendUserName}})

}



}
