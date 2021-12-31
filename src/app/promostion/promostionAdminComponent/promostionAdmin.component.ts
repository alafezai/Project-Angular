import { PromostionModele } from './../promostionmodel';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PromostionsService } from 'src/app/services/promostions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'promotionadmin-root',
  templateUrl: 'promotionAdmin.Component.html',
  styleUrls: ['promostionAdmin.component.css']
})
export class PromostionAdminComponent {
  public formaddd!: FormGroup;
  public formedit!: FormGroup;
  public promostionList: any = [];
  public promoMaodel: PromostionModele = new PromostionModele();
  constructor(
    private promostionService : PromostionsService,
    private formBuilber : FormBuilder

  ) { }

  ngOnInit(): void {
  this.promostionService.GetAllpromostions().subscribe(
    res=>this.promostionList = res
  );

  this.formaddd = this.formBuilber.group({
    nameed :[''],
    soci : [''],
    enable :[''],
    promoprice :[''],

  });
  this.formedit = this.formBuilber.group({
    nameed :[''],
    soci : [''],
    enable :[''],
    promoprice :[''],

  });

  }


  refreshHome(){
    this.promostionService.GetAllpromostions().subscribe(
      res=>this.promostionList = res
    )
  }




  public id!: string;

  onedit(promo: any){
    this.id  = promo._id;
   this.formedit.controls['nameed'].setValue(promo.name);
   this.formedit.controls['soci'].setValue(promo.socite);
   this.formedit.controls['enable'].setValue(promo.enable);
   this.formedit.controls['promoprice'].setValue(promo.promoprice);

  }



  onConfirmedupadate(){
    this.promoMaodel.name = this.formedit.value.nameed;
    this.promoMaodel.socite = this.formedit.value.soci;
    this.promoMaodel.enable = this.formedit.value.enable;
    this.promoMaodel.promoprice = this.formedit.value.promoprice;

    this.promostionService.updatepromostion(this.id,this.promoMaodel).subscribe(
      res=>{
        console.log("done")
        this.alertsuccupadet();
        this.refreshHome();
      },
      err=>{console.log("ererererer")}
    )
    // console.log(this.id)
  }


  deletemesseg(promo : any){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.promostionService.DeletePromostion(promo._id).subscribe(
          res=>{console.log("delete Sucsseful");
          this.refreshHome();},
          err=>{console.log(err)}
        )
        Swal.fire(
          'Deleted!',
          'Your Promotion has been deleted.',
          'success'
        )
      }
    })
  }


  onsave(){
    this.promoMaodel.name = this.formaddd.value.nameed;
    this.promoMaodel.socite = this.formaddd.value.soci;
    this.promoMaodel.enable = this.formaddd.value.enable;
    this.promoMaodel.promoprice = this.formaddd.value.promoprice;
    console.log(this.formaddd)

    this.promostionService.CreatePromostion(this.promoMaodel).subscribe(
      res=>{this.alertsucc();this.refreshHome();},
      err=>{console.log("mouch mrigla")}
    )

  }

  alertsucc(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Promotion save success',
      showConfirmButton: false,
      timer: 3000
    })
  }

  alertsuccupadet(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Promotion save success',
      showConfirmButton: false,
      timer: 3000
    })
  }

}
