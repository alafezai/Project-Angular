import { Component, OnInit } from '@angular/core';
import { Post } from './post.modele';
import { posts } from './posts-list';
import { PostesService } from "src/app/services/postes.service";
import { PostModel } from './post';

import { FormBuilder,FormGroup } from "@angular/forms";
@Component({
  selector: 'app-help-me',
  templateUrl: './help-me.component.html',
  styleUrls: ['./help-me.component.css']
})
export class HelpMeComponent implements OnInit {
  public formvalue !:FormGroup;
  public postList: any = [];
  public postMaodel: PostModel = new PostModel();
  aaa: any= [{
    "user": [
        "https://scontent.ftun8-1.fna.fbcdn.net/v/t1.18169-1/p320x320/20992891_260662094438794_8554973283897729879_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=7206a8&_nc_ohc=ilCRgwtoosoAX8IHkCi&_nc_ht=scontent.ftun8-1.fna&oh=7a22e2b59792601de83464d07feb0769&oe=61C69929",
        "Ala fezai"
    ],
    "sujet": "Understand how computers work from inside out Understand how computers  work from inside out Understand how computers work from inside out Understand how computers work from inside out",
    "datePost": "21/10/2021",
    "nbComent": 34,
    "comments": [
        "Understand how computers work from inside out",
        "Understand basic concepts of software programming (in Java, Python, PHP)",
        "Fundamentals of databases, mobile apps and cloud computing",
        "Write basic software programs and applications"
    ],
    "nbJaime": 54
}];

  constructor(
    private formBuilber : FormBuilder,
    private postesService: PostesService

  ) { }

  ngOnInit(): void {
    this.formvalue = this.formBuilber.group({
      sujet : ['']
    });
    this.postesService.GetAllposts().subscribe(
      res=>this.postList = res
    )
    console.log(this.postList)
  }


  savePost(){
   this.postMaodel.sujet = this.formvalue.value.sujet;
    // this.postMaodel.user=[];
    // this.postMaodel.comments=[];
    // this.postMaodel.datePost ="";
    // this.postMaodel.nbComent=0;
    // this.postMaodel.nbJaime=0;
    // this.postMaodel.sujet="";

    //this.postesService.CreatePost(this.aaa)
    this.postesService.CreatePost(this.postMaodel)
    .subscribe(res=>{
      alert("Post is saved succsuful");
    },
    err=>{
      console.log(err.mesage);
    })
  }


}
