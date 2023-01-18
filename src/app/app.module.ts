import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeproductComponent } from './listeproduct/listeproduct.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailproduitComponent } from './detailproduit/detailproduit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HttpClientModule} from '@angular/common/http';
import { AjoutproduitComponent } from './ajoutproduit/ajoutproduit.component';
import { AjoutproduitRComponent } from './ajoutproduit-r/ajoutproduit-r.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
@NgModule({
  declarations: [
    AppComponent,
    ListeproductComponent,
    NavbarComponent,
    AcceuilComponent,
    DetailproduitComponent,
    PagenotfoundComponent,
    AjoutproduitComponent,
    AjoutproduitRComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
