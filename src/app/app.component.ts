import { InternServiceService } from './intern-service.service';
import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './user-service.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  btnflag: boolean = false;
  functionData: any;
  title = 'Project2';
  product: any = [];
  formbtn: boolean;
  image = String;
  // formbtn1:boolean;

  constructor(private service2: UserServiceService) { }
  ngOnInit() {
    this.service2.name.subscribe(n => {
      this.product = n;
      this.btnflag = true;
    })
  }

  addData(value) {
    this.formbtn = false;
    this.service2.addData.next(value);
  }
  readFile(fileEvent: any) {
    const file = fileEvent.target.files[0];
    this.image = file.name;
    const maxSize = 20000000;
    const allowed_types = ['image/png', 'image/jpeg'];
    if (file.size > maxSize) {
      alert("Maximum file size must be 20 MB")
      return;
    }
    if (!_.includes(allowed_types, file.type)) {
      alert('Only Images are allowed ( JPG | PNG )');
      return false;
    }

  }

  childData(data) {
    this.formbtn = data;
  }

  closeForm() {
    this.formbtn = false;
  }

  deleteData() {
    this.btnflag = false;
    delete this.product.id;
    delete this.product.title;
    delete this.product.userId;
    delete this.product.image;
  }
}
