import { CommonModule } from '@angular/common';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { KontaktPageComponent } from './components/kontakt-page/kontakt-page.component';
import { PictureGalleryComponent } from './components/picture-gallery/picture-gallery.component';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PrijavaComponentComponent } from './components/prijava-component/prijava-component.component';


const routes: Routes = [
 {path: 'home', component: PocetnaComponent} ,
 {path: 'galerija', component: PictureGalleryComponent},
 {path: 'kontakt', component: KontaktPageComponent },
 {path: 'login', component: PrijavaComponentComponent},
  
  
  
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
