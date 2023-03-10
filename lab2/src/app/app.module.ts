import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SalesReportComponent } from './sales-report/sales-report.component';
import { RevenueDataComponent } from './revenue-data/revenue-data.component';
import { RevenueWidgetComponent } from './revenue-widget/revenue-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    SalesReportComponent,
    RevenueDataComponent,
    RevenueWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
