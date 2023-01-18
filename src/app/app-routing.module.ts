import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AjoutproduitRComponent } from './ajoutproduit-r/ajoutproduit-r.component';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { ListeproductComponent } from './listeproduct/listeproduct.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"listeproduit",component:ListeproductComponent},
  {path:"acceuil",component:AcceuilComponent},
  {path:"product/:id",component:DetailproduitComponent},
  {path:"", redirectTo : "/listeproduit", pathMatch:'full' },
  {path:"ajoutprod",component:AjoutproduitComponent },
  {path:"ajoutprodR",component:AjoutproduitRComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"**",component:PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
