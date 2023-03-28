import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { produit } from 'src/model/produits';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
host=" http://localhost:3000/produits/"

  constructor(private Http:HttpClient) { }

  public getProducts():Observable<produit[]>
  {
    return this.Http.get<produit[]>(this.host)
  }
  public getProduitById(id:any):Observable< produit>{
    return this.Http.get<produit>(this.host+id)
  }
  public remove(id:any):Observable< void>{
    return this.Http.delete<void>(this.host+id)
  }
public addproduct(p:produit):Observable<void>{
return this.Http.post<void>(this.host,p)
}
}
