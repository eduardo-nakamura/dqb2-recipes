import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

export interface RoomRecipeList {
  name: string;
  number: string;  
  content: string;
  roomType: string;
}

const ROOM_DATA: RoomRecipeList[] = [
  {number: '001', name: 'Basic Bedroom', content:'Any Bed x 2, Any Light Source x 1',roomType:'Bedroom' },
  {number: '014', name: 'Double Bathroom', content:'Bathtubs/Showers x2, Towel Rack x2, Washtubs x2, Light Source x1',roomType:'Bathroom' },
];

@Component({
  selector: 'app-room-recipe',
  templateUrl: './room-recipe.component.html',
  styleUrls: ['./room-recipe.component.scss']
})
export class RoomRecipeComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'content', 'roomType'];
  bedroomTable = new MatTableDataSource(ROOM_DATA);
  list: any[];
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    console.log(this.bedroomTable)
    // this.bedroomTable.sort = this.sort;
  }
  applyFilter(filterValue: string) {    
    console.log(this.bedroomTable)
    this.bedroomTable.filter = filterValue.trim().toLowerCase();
  }
}
