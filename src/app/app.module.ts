import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavitemComponent } from './navitem/navitem.component';
import { LogoComponent } from './logo/logo.component';
import { WorkitemComponent } from './workitem/workitem.component';
import {APP_BASE_HREF, NgOptimizedImage} from "@angular/common";
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavitemComponent,
    LogoComponent,
    WorkitemComponent,
    PortfolioItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/~swazin/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
