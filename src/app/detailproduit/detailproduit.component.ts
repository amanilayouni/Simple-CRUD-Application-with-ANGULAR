import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { produit } from 'src/model/produits';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-detailproduit',
  templateUrl: './detailproduit.component.html',
  styleUrls: ['./detailproduit.component.css']
})
export class DetailproduitComponent implements OnInit {
  // id!:number

//   Product:produit[]=[{id:1,nom:"pc portable",prix:1200.54,qte:100,urlimg:"assets/images/OIP.jfif" },
// {id:2,nom:"imprimante",prix:356.54478,qte:0,urlimg:"assets/images/R.jfif" },
// {id:3,nom:"smart phone",prix:700.4,qte:50,urlimg:"assets/images/R (1).jfif" }]

prod:any


  constructor( private Ar:ActivatedRoute,
               private router:Router,
               private serviceProduit:ProduitService 
    ) {

   }

  ngOnInit(): void {
      let id=this.Ar.snapshot.params['id']
    // this.Ar.paramMap.subscribe((params:any)=>{
    //   this.id=params.get('id')
   // } )
   if (localStorage.getItem("token")==null) {
    this.router.navigate(["login"])
      }

    // this.prod=this.Product.find(x=>x.id==id)
    this.serviceProduit.getProduitById(id).subscribe(data=>{
      this.prod=data
    })
    console.log(this.prod)
    }
    back(){
      this.router.navigate(["/listeproduit"])
    }

}
