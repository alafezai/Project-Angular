import { Component, OnInit } from '@angular/core';
import { UserService } from './../services/user.service';
import {User} from './../services/user.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-usercrud',
  templateUrl: './usercrud.component.html',
  styleUrls: ['./usercrud.component.css']
})
export class UsercrudComponent implements OnInit {

  users: User[] = [];
  constructor(private userService: UserService ,  private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.userService.getUsers().subscribe((data:  User[]) => {
      console.log(data);
      this. users = data;
    });
  }

  deleteUser(_id: string) {
    this. userService.deleteUser(_id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(_id: string){
    this.router.navigate(['detailsUser', _id]);
  }

  updateUser(_id: string){
    this.router.navigate(['updateUser', _id]);
  }

}
