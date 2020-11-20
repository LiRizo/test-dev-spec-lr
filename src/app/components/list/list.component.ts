import { Component, OnInit } from '@angular/core';
import { ListdataService } from 'src/app/services/listdata.service';

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

  public option: any[] = [];
  public lists: any[] = [];
  public indexoption: number = 0;
  public selectlist: any[] = [];

  displayedColumns: string[] = ['id', 'name', 'description', 'price'];



  constructor(public listService: ListdataService) {
  listService.getList().subscribe(
    (data) => {
      this.option = data;
      console.log(data);
      this.getList(this.indexoption);

    },
    (err) => {
      console.log(err);
    }
  );
}

ngOnInit(): void {

}
getList(index: number) {
  this.lists = this.option[index]['data'];
  this.indexoption = index;
  console.log();
}

}
