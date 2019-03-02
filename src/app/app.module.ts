import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SharedModule} from './shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {
  MatCheckboxModule,
  MatDrawer,
  MatDrawerContainer, MatIconModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard/dashboard.component';
import {NutrimentsComponent} from './dashboard/nutriments/nutriments.component';
import {ClientsComponent} from './dashboard/clients/clients.component';
import {DashboardModule} from './dashboard/dashboard.module';

const appRoutes: Routes = [
  { path: 'produits',   component: DashboardComponent },
  { path: 'nutriments',   component: NutrimentsComponent },
  { path: 'clients',   component: ClientsComponent },



];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
