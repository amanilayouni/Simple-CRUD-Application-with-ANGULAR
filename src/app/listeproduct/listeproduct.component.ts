import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs';
import { produit } from 'src/model/produits';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-listeproduct',
  templateUrl: './listeproduct.component.html',
  styleUrls: ['./listeproduct.component.css']
})
export class ListeproductComponent implements OnInit {
  aff="masquer"
  product!:any[]
  Productf!:produit[]
// Product:produit[]=[{id:1,nom:"pc portable",prix:1200.54,qte:100,urlimg:"assets/images/OIP.jfif" },
// {id:2,nom:"imprimante",prix:356.54478,qte:70,urlimg:"assets/images/R.jfif" },
// {id:3,nom:"smart phone",prix:700.4,qte:50,urlimg:"assets/images/R (1).jfif" }]
  
constructor( private serviceproduit :ProduitService,private router:Router) { }

  ngOnInit(): void {
    this.getAllProduits()
    if (localStorage.getItem("token")==null) {
      this.router.navigate(["login"])
        }
  }
afficher(){
  if(this.aff=="masquer"){
    this.aff="afficher"
  }else{
    this.aff="masquer"
  }
}
set filtre(a:string){
  this.Productf=this.fil(a);
}
fil(q:string):produit[]
{
  return this.product.filter(x=>x.nom==q)
}

getAllProduits(){
this.serviceproduit.getProducts().subscribe(data=>{
  this.product=data
  this.Productf=this.product 
})
}
supprimer(id:any){
   this.serviceproduit.remove(id).subscribe(()=>this.getAllProduits())
}
}
