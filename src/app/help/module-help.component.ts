import { Component, OnInit } from '@angular/core';
import { PostesService } from "src/app/services/postes.service";
import { PostModel } from './post';
import { FormBuilder,FormGroup } from "@angular/forms";


@Component({
  selector: 'app-module-help',
  templateUrl: './module-help.component.html',
  styleUrls: ['./module-help.component.css']
})
export class ModuleHelpComponent implements OnInit {

  public formvalue !:FormGroup;
  public postList: any = [];
  public postMaodel: PostModel = new PostModel();
  aaa: any= [{
    "user": [
      "",
        "Ghassen Dallegi"
    ],
    "sujet": "Daily Trade",
    "datePost": "31/12/2021",
    "nbComent": 20,
    "comments": [
        "I agree",
        "i'am not okay with you",
        "is that true ? ",
        "thanks bro that seems logique"
    ],
    "nbJaime": 500
}];
constructor(
  private formBuilber : FormBuilder,
  private posteService: PostesService

) { }
  ngOnInit(): void {
    this.formvalue = this.formBuilber.group({
      sujet : ['']
    });
    this.posteService.GetAllposts().subscribe(
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
    this.posteService.CreatePost(this.postMaodel)
    .subscribe(res=>{
      alert("Post is saved succsuful");
    },
    err=>{
      console.log(err.mesage);
    })
  }

}
