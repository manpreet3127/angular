import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyContainerComponent } from './my-container/my-container.component';
import { TopnavComponent } from './my-container/topnav/topnav.component';



@NgModule({
  declarations: [
    AppComponent,
    MyContainerComponent,
    TopnavComponent,
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:   [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
