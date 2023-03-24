import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssInputComponent } from './css-input/css-input.component';
import { CssStyledComponent } from './css-styled/css-styled.component';
import { CssOutputComponent } from './css-output/css-output.component';
import { CssLineComponent } from './css-line/css-line.component';

@NgModule({
  declarations: [
    AppComponent,
    CssInputComponent,
    CssStyledComponent,
    CssOutputComponent,
    CssLineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
