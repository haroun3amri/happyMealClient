import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';


export interface PeriodicElement {
  name: string;
  product_id: number;
  ingredient_list: number;
  gpi_upc: string;
  shop: string;
  date_available: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {product_id: 1, name: 'Hydrogen', ingredient_list: 1.0079, gpi_upc: 'H', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 2, name: 'Helium', ingredient_list: 4.0026, gpi_upc: 'He', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 3, name: 'Lithium', ingredient_list: 6.941, gpi_upc: 'Li', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 4, name: 'Beryllium', ingredient_list: 9.0122, gpi_upc: 'Be', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 5, name: 'Boron', ingredient_list: 10.811, gpi_upc: 'B', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 6, name: 'Carbon', ingredient_list: 12.0107, gpi_upc: 'C', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 7, name: 'Nitrogen', ingredient_list: 14.0067, gpi_upc: 'N', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 8, name: 'Oxygen', ingredient_list: 15.9994, gpi_upc: 'O', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 9, name: 'Fluorine', ingredient_list: 18.9984, gpi_upc: 'F', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 10, name: 'Neon', ingredient_list: 20.1797, gpi_upc: 'Ne', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 11, name: 'Nitrogen', ingredient_list: 14.0067, gpi_upc: 'N', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 12, name: 'Oxygen', ingredient_list: 15.9994, gpi_upc: 'O', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 13, name: 'Fluorine', ingredient_list: 18.9984, gpi_upc: 'F', date_available: '28/09/2015', shop: 'shop'},
  {product_id: 14, name: 'Neon', ingredient_list: 20.1797, gpi_upc: 'Ne', date_available: '28/09/2015', shop: 'shop'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  displayedColumns: string[] = ['select', 'product_id', 'name', 'ingredient_list', 'gpi_upc', 'date_available', 'shop'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

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
