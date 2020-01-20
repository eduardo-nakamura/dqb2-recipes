import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  number: string;  
  content: string;
}

const BEDROOM_DATA: PeriodicElement[] = [
  {number: '001', name: 'Basic Bedroom', content:'Any Bed x 2, Any Light Source x 1'},

];

@Component({
  selector: 'app-room-recipe',
  templateUrl: './room-recipe.component.html',
  styleUrls: ['./room-recipe.component.scss']
})
export class RoomRecipeComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'content'];
  bedroomTable = new MatTableDataSource(BEDROOM_DATA);
  list: any[];
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  ngOnInit() {
    this.bedroomTable.sort = this.sort;
  }

}
