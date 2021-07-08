import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as Handsontable from 'handsontable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'invisible-project';
  baseUrl = ""
  public dataset: any;
  strict = 'id,name,int'
  public columnWidth:any;
  public rowlHeight:any;
  // header ={headers:}
  constructor(
    private http:HttpClient,
  //  public that = this
  ){

  }
  ngOnInit(){
  this.http.get<any>('api').subscribe(
    data=>{
      if(localStorage.hasOwnProperty("columns") && localStorage.hasOwnProperty("rowls")){
         this.columnWidth = JSON.parse(localStorage.getItem("columns"))
         this.rowlHeight = JSON.parse(localStorage.getItem("rowls"))
         console.log(this.rowlHeight)
      }
      else{
        let count = 1;
        let row = [];
        let col = [];
      for (let index = 0; index < data.length; index++) {
         col.push(200);
         row.push(100);
         count ++;
         
        }
         this.columnWidth = col;
         this.rowlHeight = row;
         localStorage.setItem("columns",JSON.stringify(col))
         localStorage.setItem("rowls",JSON.stringify(row))
      }
      this.dataset = data;

      console.log(data)
    }
  )
}
show(){
    console.log(this.columnWidth)
  }
  colresize(newSize,column,isDoubleClick){
    let updatedColum = JSON.parse(localStorage.getItem("columns"))
     updatedColum[column] = newSize;
    localStorage.setItem("columns",JSON.stringify(updatedColum))
  }
  rowresize(newSize,row,isDoubleClick){
    let updatedColum = JSON.parse(localStorage.getItem("rows"))
    updatedColum[row] = newSize;
   localStorage.setItem("rows",JSON.stringify(updatedColum))
  }
  delete = (index, amount,physicalRows,source)=>{
    console.log(this.dataset[index]._id)
    console.log(index)
    let newUpdate =this.dataset[index]._id
    this.http.get<any>('api/delete/'+newUpdate).subscribe(
      data=>{
        console.log(data)
      }
    )
  }
  addChild(addedSheetDisplayName){
    console.log(addedSheetDisplayName)
  }
  // addChild = (parent,element,index)=>{
  //           console.log(parent,element,index)
  // }
  // update(changes: string,source: string,data){
  //   // let dt = this.dataset
  //   console.log(changes)
  //   // return this
  // }
 
    // console.log(this.update("changes","source"))
  
    update = (change, source) => {
      let newUpdate = this.dataset[change[0][0]]._id
      this.http.post<any>('api/update/'+newUpdate,{key:change[0][1],value:change[0][3]}).subscribe(
        data=>{
          console.log(data)
        }
      )
            // console.log({id:newUpdate,key:change[0][1],value:change[0][3]})
    }
  
  
}
