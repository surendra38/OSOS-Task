import { InternServiceService } from './intern-service.service';
import { Component, OnInit} from '@angular/core';
import { UserServiceService } from './user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  btnflag:boolean=false;
  functionData:any;
  title = 'Project2';
  product:any=[];
  formbtn:boolean;
  image=String;
  // formbtn1:boolean;
 
  constructor(private service2:UserServiceService){ }
  ngOnInit() {
    this.service2.name.subscribe(n=>{
      this.product=n;
      this.btnflag=true;
    })
  }
  
  addData(value){
    this.formbtn=false;
    this.service2.addData.next(value);
  }
  readFile(fileEvent: any) {
    const file = fileEvent.target.files[0];
    this.image=file.name;
    console.log('size', file.size);
    console.log('type', file.type);
    console.log(file);
    console.log(this.image);
    console.log(fileEvent.target.files.length);
    console.log(file.size);
    
  }

  childData(data){
    this.formbtn=data;
  }

  closeForm(){
    this.formbtn=false;
  }

  deleteData(){
    this.btnflag=false;
    delete this.product.id;
    delete this.product.title;
    delete this.product.userId;
    delete this.product.image;
  }
}
