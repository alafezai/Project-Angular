import { PromostionsService } from './../../services/promostions.service';
import { Component } from '@angular/core';

@Component({
  selector: 'promotion-root',
  templateUrl: 'promotion.component.html',
  styleUrls: ['promostion.component.css']
})
export class PromostionComponent {
  title = 'Promostion';

  public promostionList: any = [];
  constructor(
    private promostionService : PromostionsService,
  ){

  }

  ngOnInit(): void {
    this.promostionService.GetAllpromostions().subscribe(
      res=>this.promostionList = res
    );
  }
}
