import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  selectButton:any = 1;
  clicked=false;
  timeSeconds:any = 5000;
  el:any = document.getElementById("button-card");
  setStyleCss:any = 'justify-content: center; align-items: center;margin-top: 10px; width: 150px; border: 1px solid #01c38d; font-size: 16px; border-radius: 5px; background-color: transparent; padding: 5px; color: aliceblue; cursor: pointer;';

  constructor() { }

  ngOnInit(): void {
    this.setStyle;
    setInterval(() => {
        this.setTimeBox(this.selectButton=1);
    }, this.timeSeconds);
  }

  mouseEnter(){
   // this.selectButton = 1;
    setInterval(()=>{
      // this.changeStateButton(++this.stateButton);
    }, 5000)
  }

  mouseLeave(){
    //delete this.stateButton;
  }

  chevronIncDec(number:any){
    this.selectButton=number+this.selectButton;
    if(this.selectButton>=1&&this.selectButton<=5){

    }else{
      if(this.selectButton<1){
        this.selectButton=5;
        this.timeSeconds = 5000;
      }
      if(this.selectButton>5){
        this.selectButton=1;
        this.timeSeconds = 5000;
      }
    }
  }

  setTimeBox(time:any){
    this.selectButton = time;
    if(this.selectButton<=1||this.selectButton>=5){
      this.selectButton = time;
      if(this.selectButton<=1){
        this.selectButton=1;
        this.timeSeconds = 5000;
      }
      if(this.selectButton>=5){
        this.selectButton=1;
        this.timeSeconds = 5000;
      }
    }
  }

  setStyle(style:any){
    if(style==='leave'){
      this.setStyleCss = 'justify-content: center; align-items: center;margin-top: 10px; width: 150px; border: 1px solid #01c38d; font-size: 16px; border-radius: 5px; background-color: transparent; padding: 5px; color: aliceblue; cursor: pointer;'
    }
    if(style==='down'){
      this.setStyleCss = 'justify-content: center; align-items: center;margin-top: 10px; width: 150px; border: 1px solid aliceblue; font-size: 16px; border-radius: 5px; background-color: transparent; padding: 5px; color: #01c38d; cursor: pointer;'
    }
  }
}
