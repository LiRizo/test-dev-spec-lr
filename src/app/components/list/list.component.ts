import { Component, OnInit } from '@angular/core';
import { ListdataService } from 'src/app/services/listdata.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {



  public lists: Array<any> = [];

  columndefs : any[] = [
   'id: number',
   'name: string',
   'description: string',
   'price: number',
   'discount_amount: number',
   'status: string',
   'categories: any[]',
  ];

  constructor(public listService: ListdataService) {
    this.listService.getList().subscribe((data: any) =>{
      console.log("see all",data);
      this.lists = data[1];
      console.log('id in specific',data['data'][5]);
    },
    (error) => console.log(error),
    )
  }

  ngOnInit(): void {
  }


}
