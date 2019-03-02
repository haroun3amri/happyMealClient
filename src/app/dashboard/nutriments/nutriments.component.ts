import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


export interface Element {
  nutrient_name: string;
  nutrient_id: number;
  nutrient_value: number;
  Nutrient_uom: string;
  product_id: string;
}

const ELEMENT_DATA: Element[] = [
  {nutrient_id: 1, nutrient_name: 'Hydrogen', nutrient_value: 1.0079, Nutrient_uom: 'H', product_id: '45001850'},
  {nutrient_id: 2, nutrient_name: 'Helium', nutrient_value: 4.0026, Nutrient_uom: 'He', product_id: '45001850'},
  {nutrient_id: 3, nutrient_name: 'Lithium', nutrient_value: 6.941, Nutrient_uom: 'Li', product_id: '45001850'},
  {nutrient_id: 4, nutrient_name: 'Beryllium', nutrient_value: 9.0122, Nutrient_uom: 'Be', product_id: '45001850'},
  {nutrient_id: 5, nutrient_name: 'Boron', nutrient_value: 10.811, Nutrient_uom: 'B', product_id: '45001850'},
  {nutrient_id: 6, nutrient_name: 'Carbon', nutrient_value: 12.0107, Nutrient_uom: 'C', product_id: '45001850'},
  {nutrient_id: 7, nutrient_name: 'Nitrogen', nutrient_value: 14.0067, Nutrient_uom: 'N', product_id: '45001850'},
  {nutrient_id: 8, nutrient_name: 'Oxygen', nutrient_value: 15.9994, Nutrient_uom: 'O', product_id: '45001850'},
  {nutrient_id: 9, nutrient_name: 'Fluorine', nutrient_value: 18.9984, Nutrient_uom: 'F', product_id: '45001850'},
  {nutrient_id: 10, nutrient_name: 'Neon', nutrient_value: 20.1797, Nutrient_uom: 'Ne', product_id: '45001850'},
  {nutrient_id: 11, nutrient_name: 'Nitrogen', nutrient_value: 14.0067, Nutrient_uom: 'N', product_id: '45001850'},
  {nutrient_id: 12, nutrient_name: 'Oxygen', nutrient_value: 15.9994, Nutrient_uom: 'O', product_id: '45001850'},
  {nutrient_id: 13, nutrient_name: 'Fluorine', nutrient_value: 18.9984, Nutrient_uom: 'F', product_id: '45001850'},
  {nutrient_id: 14, nutrient_name: 'Neon', nutrient_value: 20.1797, Nutrient_uom: 'Ne', product_id: '45001850'},
];

@Component({
  selector: 'app-nutriments',
  templateUrl: './nutriments.component.html',
  styleUrls: ['./nutriments.component.scss']
})
export class NutrimentsComponent implements OnInit {

  displayedColumns: string[] = ['select', 'nutrient_id', 'nutrient_name', 'nutrient_value', 'Nutrient_uom', 'product_id'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);
  selection = new SelectionModel<Element>(true, []);

  ngOnInit(): void {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

}
