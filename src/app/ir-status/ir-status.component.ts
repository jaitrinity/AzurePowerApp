import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../service/SharedService';
import { take } from 'rxjs';
import { DomSanitizer } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-ir-status',
  templateUrl: './ir-status.component.html',
  styleUrls: ['./ir-status.component.scss']
})
export class IrStatusComponent implements OnInit {
  public empId: any = "";
  public roleId: any = "";
  public irList: any = [];
  public viewIrObj: any = {};
  constructor(private route: ActivatedRoute, private router: Router, 
    private sharedService:SharedService, private sanitizer:DomSanitizer){
    this.route.queryParams.subscribe(params => {
      this.empId = params['empId'];
      localStorage.setItem("empId",this.empId)
      this.roleId = params['roleId'];
      localStorage.setItem("roleId",this.roleId)
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getIrStatus();
  }

  getIrStatus(){
    // alert(this.empId+" "+this.roleId)
    let jsonData = {
      loginEmpId: this.empId,
      loginEmpRoleId: this.roleId
    }
    this.sharedService.getIR(jsonData)
    .pipe(take(1)).subscribe({
      next: result=>{
        // console.log(result);
        this.irList = result;
      },
      error: _=>{
        
      }
    })
  }

  getIrDetails(irObj:any){
    this.viewIrObj = irObj;  
    // localStorage.setItem("irObj",JSON.stringify(irObj));
    // let irId = irObj.irId;
    // // alert(irId);
    // this.router.navigate(['/ir-details/'+irId]);
    this.openAnyModal('irDetailsModal');
  }

  downloadPdf(myPdfUrl:any, filename:any) {
    const pdfUrl = myPdfUrl;
    this.sharedService.downloadPdf(pdfUrl).subscribe((data: Blob) => {
      const downloadLink = document.createElement('a');
      downloadLink.href = window.URL.createObjectURL(data);
      downloadLink.setAttribute('download', filename+'.pdf');
      document.body.appendChild(downloadLink);
      downloadLink.click();
    });
  }

  mediaUrl: any = "";
  mediaType: any = 0;
  bigMedia(url:any,type:any){
    this.mediaUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    // alert(this.mediaUrl)
    this.mediaType = type;
    if(this.mediaType == 1){
      this.openAnyModal('bigMediaModal');
    }
    else{

    }
  }

  openAnyModal(modalId:any){
    // $("#"+modalId).modal({
    //   backdrop : 'static',
    //   keyboard : false
    // });
    $("#"+modalId).modal("show");
  }

  closeAnyModal(modalId:any){
    $("#"+modalId).modal("hide");
  }

}
