import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from "@angular/flex-layout";
import {HttpClientModule} from "@angular/common/http";



import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {LazyLoadImageModule} from "ng-lazyload-image";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCarouselModule } from '@ngmodule/material-carousel';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PocetnaComponent } from './components/pocetna/pocetna.component';
import { PictureGalleryComponent } from './components/picture-gallery/picture-gallery.component';
import { KontaktPageComponent } from './components/kontakt-page/kontakt-page.component';
import { BootcarouselComponent } from './components/pocetna/bootcarousel/bootcarousel.component';
import { PrijavaComponentComponent } from './components/prijava-component/prijava-component.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavListComponent,
    PocetnaComponent,
    PictureGalleryComponent,
    KontaktPageComponent,
    BootcarouselComponent,
    PrijavaComponentComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule
    


  ],
  entryComponents: [],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
