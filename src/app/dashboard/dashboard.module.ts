import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatAutocompleteModule, MatButtonToggleModule, MatCardModule,
  MatCheckboxModule, MatFormFieldModule,
  MatIconModule, MatInputModule, MatListModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableDataSource,
  MatTableModule, MatToolbarModule
} from '@angular/material';
import { AllergyComponent } from './allergy/allergy.component';
import { NutrimentsComponent } from './nutriments/nutriments.component';
import { ClientsComponent } from './clients/clients.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AllergyDialogComponent } from './clients/allergy-dialog/allergy-dialog.component';

@NgModule({
  declarations: [DashboardComponent, AllergyComponent, NutrimentsComponent, ClientsComponent, AllergyDialogComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    MatIconModule,
    MatSidenavModule,
    MatSelectModule,
    MatSortModule,
    MatTableModule,
    MatCheckboxModule,
    MatIconModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatListModule
  ],
  entryComponents: [
    AllergyDialogComponent
  ],
})
export class DashboardModule { }
