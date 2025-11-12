import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { NgIf } from '@angular/common';
import { ApiService } from '../../services/api';
import { HttpMethod } from '../../services/http-method.enum';
import { HashingService } from '../../services/hashing';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  protected user= { 
    email: "" ,
    password: "",
  }
  private encryptedUser = {
    email: this.user.email,
    password:""
  }
  protected errorMessage: string;
  protected successMessage: string;
  private hashedPassword: string;
  public jwtToken: string;

  constructor(private router: Router, private apiService: ApiService, private hashingService: HashingService) {
    this.errorMessage = "";
    this.successMessage = "";
    this.hashedPassword = "";
    this.jwtToken = "";
  }


  async ngOnInit(){
    localStorage.removeItem('email');
    await this.apiService.sendRequest<any>(HttpMethod.GET, "/logout").then(
      async (response) => {
        console.log("Logout successful.");
      },
      (error) => {
        //TODO TODO error handling
      }
    )
      .catch((error) => {});

    this.resetBorderColor();
  }

  async login(): Promise<void> {
    if(this.user.email == "" || this.user.password == ""){
      this.errorMessage = "No username or password.";
      return;
    }

    this.encryptedUser.password = this.hashingService.hashPassword(this.user.password);
    let storedPassword="";

    await this.apiService.sendRequest<any>(HttpMethod.POST, "/login", this.encryptedUser).then(
      async (response) => {
       console.log("Login successful");
        this.hashedPassword = response.password;
      },
      (error) => {
        //TODO error handling
      }
    )
    .catch((error) => {
      this.errorMessage = "Login failed. Try again.";
    });

    try{
      if(!await this.hashingService.passwordsMatch(this.user.password, storedPassword)){
        this.errorMessage = "Login failed. Username or password are wrong.";
        return;
        }
    }
    catch(err){
      this.errorMessage = "Login data cannot be validated. Try again later.";
      return;
    }

    this.encryptedUser.password = this.hashedPassword;

    this.apiService.sendRequest<any>(HttpMethod.POST, "/auth/genToken", this.encryptedUser).then(
      (response) => {
          this.router.navigate(['/dashboard']);
          //TODO?
          //this.userService.setEmail(this.passedEmail);
      },
      (error) => {
        //TODO error handling
      }
    )
    .catch((error) => {
      console.log("User cannot be validated. Try again later. ", error);
      this.errorMessage = "Login data cannot be validated. Try again later.";
      return;
    });
  }

  async register(): Promise<void>{
    if(this.user.email == "" || this.user.password == ""){
      this.errorMessage = "No username or password.";
      return;
    }

    this.encryptedUser.password = this.hashingService.hashPassword(this.user.password);

    await this.apiService.sendRequest<any>(HttpMethod.POST, "/register", this.encryptedUser).then(
      async (response) => {
       console.log("Register successful");
       this.successMessage = "Successfully registered."
      },
      (error) => {
        //TODO error handling
      }
    )
    .catch((error) => {
      this.errorMessage = "Registration failed. Try again.";
    });

    this.apiService.sendRequest<any>(HttpMethod.POST, "/auth/genToken", this.encryptedUser).then(
      (response) => {
          this.router.navigate(['/dashboard']);
          //TODO?
          //this.userService.setEmail(this.passedEmail);
      },
      (error) => {
        //TODO error handling
      }
    )
    .catch((error) => {
      console.log("User cannot be validated. Try again later. ", error);
      this.errorMessage = "Login data cannot be validated. Try again later.";
      return;
    });
  }

  
  private changeBorderColour(colour: string, id: string){
    const input = document.getElementById(id) as HTMLInputElement;
    if(input){
      input.style.borderColor = colour;
    }
  }

  private resetBorderColor(){
    this.changeBorderColour("","email");
    this.changeBorderColour("","password");
  }

}
