import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import * as tables from './roomObj';
@Component({
  selector: 'app-room-recipe',
  templateUrl: './room-recipe.component.html',
  styleUrls: ['./room-recipe.component.scss']
})
export class RoomRecipeComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'observation'];
  bedroomTable = new MatTableDataSource(tables.ROOM_LIST);
  list: any[];
  btnFilter =['Bedroom',
    'Bathroom','Kitchen','Private Bedroom','Bar','Toilet','Changing','Workshop','Shop','Miscelaneous','Museum','More Miscelaneous','Special'
  ] 
  // @ViewChild(MatSort, {static: true}) sort: MatSort;
  ngOnInit() {
    console.log(tables.ROOM_LIST)    
    // this.bedroomTable.sort = this.sort;
  }
  applyFilter(filterValue: string) {   

    this.bedroomTable.filter = filterValue.trim().toLowerCase();
  }
  getRecord(row){
    alert(row)
  }
}
