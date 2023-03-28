import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 
import { Route, Router } from '@angular/router';
import { ProduitService } from '../service/produit.service';
@Component({
  selector: 'app-ajoutproduit',
  templateUrl: './ajoutproduit.component.html',
  styleUrls: ['./ajoutproduit.component.css']
})
export class AjoutproduitComponent implements OnInit {

  constructor(private service:ProduitService,
    private route:Router) { }

  ngOnInit(): void {
    if (localStorage.getItem("token")==null) {
      this.route.navigate(["login"])
        }
  }
  onsubmit(f:NgForm){
    let p = f.value;
    console.log(p);
   p.urlimg="./assets/images/"+p.nom.replace(" ","")+".jpg"
    this.service.addproduct(p).subscribe(data=>{
      alert("ajout avec succes")
    })
    this.route.navigate(['/listeproduit']).then(()=>{
      window.location.reload()
    })
  }
  

}
