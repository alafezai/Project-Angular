
import { Post } from "src/app/help-me/post.modele";


export class PostModel implements Post{
    user: String[]=[];
    sujet: String="";
    datePost: String="";
    nbComent: number=0;
    comments: String[]=[];
    nbJaime: number=0;



    PostModel(){}

}
