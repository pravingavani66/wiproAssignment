import { Component, OnInit } from '@angular/core';
import { IEmpDetails } from '../models/empDeatails.interface';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  title = 'assignment1';
  empDetails: IEmpDetails[];

  getData(){
 console.log("pravin");
  }
  constructor() { }

  ngOnInit(): void {
  }

}
