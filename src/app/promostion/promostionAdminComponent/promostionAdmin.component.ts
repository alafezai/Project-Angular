import { Component } from '@angular/core';
import { PromostionsService } from 'src/app/services/promostions.service';

@Component({
  selector: 'promotionadmin-root',
  templateUrl: 'promotionAdmin.Component.html',
  styleUrls: ['promostionAdmin.component.css']
})
export class PromostionAdminComponent {
  public promostionList: any = [];
  constructor(
    private promostionService : PromostionsService
  ) { }

  ngOnInit(): void {
  this.promostionService.GetAllpromostions().subscribe(
    res=>this.promostionList = res
  )
  }
}
