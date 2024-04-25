import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constant } from "../constant/Constant";

@Injectable({ providedIn: 'root'})
export class SharedService{
    public appUrl = Constant.phpServiceURL;
    constructor(private http: HttpClient){}

    public getData(jsonData : any, selectType:any) : Observable<any>{
        return this.http.post<any>(this.appUrl+"getData.php?selectType="+selectType,jsonData);
    }

    public getIR(jsonData : any) : Observable<any>{
        return this.http.post<any>(this.appUrl+"getIR.php",jsonData);
    }

    public getIrDetails(jsonData : any) : Observable<any>{
        return this.http.post<any>(this.appUrl+"getIrDetails.php",jsonData);
    }

    public downloadPdf(pdfUrl: string) {
        return this.http.get(pdfUrl, { responseType: 'blob' });
    }
    
}