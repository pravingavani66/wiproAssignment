import { Component, OnInit } from '@angular/core';
import { IEmpDetails } from '../models/empDeatails.interface';
import { employees } from "../../assets/data (1).js";
import { isConstructSignatureDeclaration } from 'typescript';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss']
})
export class EmpDetailsComponent implements OnInit {
  title = 'assignment1';
  empDetails: IEmpDetails[];
  searchData: string;
  allempDetails:IEmpDetails[];
  domeDetails:IEmpDetails[];
  depData = [
    { name: 'Departments', value: ''},
    { name: 'Computer', value: 'Computer'},
    { name: 'Physics', value: 'Physics'},
    { name: 'Chemistry', value: 'Chemistry'}
  ];
  sortData=[
    {name: 'Sort By',value: ''},
    {name: 'NAME(A-Z)',value: 'a-z'},
    {name: 'NAME(Z-A)',value: 'z-a'},
    {name: 'AGE',value: 'age'},
    {name: 'EMAIL',value: 'email'}
  ]
  allDepData=[...this.depData];
  selectedDep='Computer';
  selectedSort= 'a-z'
  constructor() { 
    this.empDetails = [
      {
        name: "Employee One",
        age: 40,
        email: "one@gmail.com",
        departments: ["Computer", "Physics"],
      },
      {
        name: "Employee Two",
        age: 10,
        email: "Two@gmail.com",
        departments: ["Computer"],
      },
      {
        name: "Employee Three",
        age: 10,
        email: "Three@gmail.com",
        departments: ["Physics", "Chemistry"],
      },
      {
        name: "Employee Four",
        age: 60,
        email: "Four@gmail.com",
        departments: ["Chemistry", "Physics"],
      },
      {
        name: "Employee Five",
        age: 70,
        email: "Five@gmail.com",
        departments: ["Computer", "Physics", "Chemistry"],
      },
      {
        name: "Employee Six",
        age: 70,
        email: "Six@gmail.com",
        departments: ["Computer", "Physics"],
      },
    ];
    this.allempDetails = [...this.empDetails];
  
  }
  //search data by name /email
  filterData() {
    this.domeDetails = this.allempDetails.filter((item) =>
      item.name.toLowerCase().includes(this.searchData.toLowerCase()) ||
      item.email.toLowerCase().includes(this.searchData.toLowerCase())
    );
  }
  //get data from array when button is clicked with all checkbox 
  getData(){
    if(this.searchData){
      this.filterData();
      this.empDetails =  this.domeDetails.filter((item) =>
    item.departments.includes(this.selectedDep));
   
    }else if(this.searchData === ''&& this.selectedSort ===''&& this.selectedDep ===''){
      this.empDetails=this.allempDetails;
     
     }else{
      this.SortData();
      this. selectedDepData();
    }
  }
  //sort data to sort dropdown 
  SortData(){
          if(this.searchData){
            this.getData();
          }
          else if(this.selectedSort == 'a-z'){
            this.domeDetails = this.allempDetails.sort((a,b)=>a.name.localeCompare(b.name));
          } else if(this.selectedSort == 'z-a'){
            this.domeDetails = this.allempDetails.sort((a,b)=>b.name.localeCompare(a.name));
          }else if(this.selectedSort == 'age'){
            this.domeDetails = this.allempDetails.sort((a,b)=> a.age -b.age);
          }else if(this.selectedSort == 'email'){
            this.domeDetails = this.allempDetails.sort((a,b)=>a.email.localeCompare(b.email));
          }
      }
  //sort data to department dropdown
  selectedDepData(){
      if(this.searchData){
        this.getData();
      }else{
        this.empDetails = this.allempDetails.filter((item) =>
        item.departments.includes(this.selectedDep));
        this.SortData();
      }  
  }
  // reset and reload the table
  resetData(){
    this.searchData = '';
    this.selectedSort ='';
    this.selectedDep = '';
    this.getData();
  }
  ngOnInit(): void {
    this.getData();
  
  }

}
