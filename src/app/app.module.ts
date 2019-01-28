import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { ContactsComponent } from './contacts/contacts.component';
import {FormsModule} from '@angular/forms';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ContactsComponent,
    GalleryComponent,
    DataEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
