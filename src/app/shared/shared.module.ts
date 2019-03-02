import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatExpansionModule, MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule, MatSelectModule, MatSidenavModule, MatSnackBarModule, MatSortModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


const appRoutes: Routes = [

];

@NgModule({
  declarations: [MenuComponent, SideNavComponent],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatDialogModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule, MatSnackBarModule, MatSelectModule,
    MatSortModule,
    MatTableModule
  ],
  exports: [
    MenuComponent,
    SideNavComponent
  ],
})
export class SharedModule { }
