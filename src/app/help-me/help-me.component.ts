import { Component, OnInit } from '@angular/core';
import { Post } from './post.modele';
import { posts } from './posts-list';

@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrls: ['./help-me.component.css']
})
export class HelpMeComponent implements OnInit {

  public postList: Post[] = posts;

  constructor() { }

  ngOnInit(): void {
    console.log(this.postList)
  }

}
