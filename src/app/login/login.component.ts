import { Component, OnInit } from '@angular/core';
import { UserData } from './userdata.model';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  password: string = '';

  constructor(private loginSvc: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    var data: UserData = new UserData();
    data.userName = this.userName;
    data.password = btoa(this.password);

    this.loginSvc.login(data).subscribe(resp =>{
      sessionStorage.setItem('ccLoginToken', new Date().toString());
      this.router.navigate(['admin']);
    }, (err) => {
      alert("Invalid Login");
    })
  }
}
