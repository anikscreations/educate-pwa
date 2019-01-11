import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/shared/services/main.service';
MainService

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _mainService: MainService) { }

  async ngOnInit() {
    await this.callMainService();
  }

 async callMainService(){
   return new Promise((resolve, reject)=>{
    this._mainService.mainService()
    .subscribe((res)=>{
      console.log('Response', res);
      resolve();
    }, (err)=>{
      console.log('Err', err);
      reject(err);
    })
   }) 
  }

}
