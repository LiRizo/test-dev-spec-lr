import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { ListdataService } from 'src/app/services/listdata.service';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  id: number;
  name: string;
  description: string;
  price: number;
  discount_amount: number;
  status: string;
  categories: any[];

  public lists: Array<any> = [  ];
  displayedColumns: string[] = ['id', 'name', 'price', 'status'];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public listService: ListdataService) {
    this.listService.getList().subscribe((resp: any) =>{
      console.log("see all",resp);
      this.lists = resp['data'];
      console.log('id in specific',this.lists);

    },
    (error) => console.log(error),
    )
  }

  ngOnInit(): void {
  }


}
