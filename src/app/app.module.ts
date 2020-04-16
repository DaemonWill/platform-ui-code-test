import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { HeaderComponent } from './components/header/header.component';
import { ProviderCardComponent } from './components/provider-card/provider-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { StorageService } from './services/storage.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    ProviderCardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
