import { InternServiceService } from './../intern-service.service';
import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.scss']
})
export class InternComponent implements OnInit {

  @Output() childToParent:EventEmitter<any>=new EventEmitter();

  showFormbtn=false;
  userdata:any=[];
  index:number;

  constructor(private service:InternServiceService, private service2:UserServiceService) {
    this.service.getData().subscribe(data=>{
      this.userdata=data.slice(0,8);
    })
  }
  showData(i){
    this.index=i;
    this.service2.name.next(this.userdata[i])
  }

  showForm(){
    this.showFormbtn=true;
    this.childToParent.emit(this.showFormbtn);
  }
  
  ngOnInit(): void {
    this.service2.addData.subscribe(n=>{
      this.userdata.push(n);
    })
   }
   
}
