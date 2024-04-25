import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../service/SharedService';
import {Location} from '@angular/common';

@Component({
  selector: 'app-ir-details',
  templateUrl: './ir-details.component.html',
  styleUrls: ['./ir-details.component.scss']
})
export class IrDetailsComponent implements OnInit {
  public irId: any = "";
  public empId: any = "";
  public roleId: any = "";
  public irObj: any = {};
  constructor(private activeRoute: ActivatedRoute, private location: Location,
    private sharedService:SharedService
  ){
    this.empId = localStorage.getItem("empId");
    this.roleId = localStorage.getItem("roleId");
    this.irObj =  localStorage.getItem("irObj");
    this.irObj = JSON.parse(this.irObj);
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.activeRoute.paramMap.subscribe(param =>{
      this.irId = param.get("irId");
      this.getIrDetails();
    });
  }

  getIrDetails(){
    let jsonData = {
      loginEmpId: this.empId,
      loginEmpRoleId: this.roleId,
      irId: this.irId
    }
    // console.log(jsonData)
  }

  goToBack(){
    this.location.back();
  }

}
