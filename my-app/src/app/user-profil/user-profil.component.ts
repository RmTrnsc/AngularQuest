import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profil',
  templateUrl: './user-profil.component.html',
  styleUrls: ['./user-profil.component.css']
})
export class UserProfilComponent implements OnInit {

  User = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : '',
    img : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };
 
 
  
  
  constructor() { }

  ngOnInit() {
  }

}
