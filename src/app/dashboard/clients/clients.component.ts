import {Component, OnInit} from '@angular/core';
import {clientssMock} from './clients';
import {FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {AllergyDialogComponent} from './allergy-dialog/allergy-dialog.component';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit {

  public clients = clientssMock;
  recipeSearch = new FormControl();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public openRecipeDetailDialog(client) {
    this.dialog.open(AllergyDialogComponent, {
      width: '1000px',
      height: '800px',
      data: {client: client}
    });
  }

}
