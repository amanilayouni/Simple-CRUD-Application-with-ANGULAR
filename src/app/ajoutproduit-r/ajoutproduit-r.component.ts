import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { produit } from 'src/model/produits';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-ajoutproduit-r',
  templateUrl: './ajoutproduit-r.component.html',
  styleUrls: ['./ajoutproduit-r.component.css']
})
export class AjoutproduitRComponent implements OnInit {
p:any
f:any
  constructor(private service:ProduitService,
    private route:Router,private form1:FormBuilder
    ) { 
      this.f= this.form1.group({
        id:[''],
        nom:[''],
        prix:[''],
        qte:['']
    })}

  ngOnInit(): void {
  }
  

onsubmit(){

 this.p=this.f.value;
 console.log(this.p);
 this.p.urlimg="./assets/images/"+this.p.nom.replace(" ","")+".jpg"
  this.service.addproduct(this.p).subscribe(data=>{
    alert("ajout avec succes")
  })
  this.route.navigate(['/listeproduit']).then(()=>{
    window.location.reload()
  })
}}
