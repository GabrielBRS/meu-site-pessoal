import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model-card',
  templateUrl: './model-card.component.html',
  styleUrls: ['./model-card.component.scss']
})
export class ModelCardComponent implements OnInit {

  @Input() title:any;
  @Input() subTitle:any;
  @Input() imgSrc:any;
  @Input() hrefSrc:any;
  @Input() orientatioShadowBox:any;
  shadowBoxLeft:any = "encolhido-shadow-box-left";
  shadowBoxCenter:any = "encolhido-shadow-box-center";
  shadowBoxRight:any = "encolhido-shadow-box-right";
  shadowBoxNumber:any = 1;

  constructor() { }

  ngOnInit(): void {
    this.changeBoxShadow();
  }

  changeBoxShadow(){
    setInterval(()=>{
      this.infinityLoop(this.shadowBoxNumber++)
    },600);
  }

  infinityLoop(shadowBoxNumber:any){
    if (shadowBoxNumber <= 0 || shadowBoxNumber >= 3) {
      this.shadowBoxNumberReset();
    }
    if(shadowBoxNumber===1){
      this.shadowBoxLeft = "encolhido-shadow-box-left";
      this.shadowBoxCenter = "encolhido-shadow-box-center";
      this.shadowBoxRight = "encolhido-shadow-box-right";
    }
    if(shadowBoxNumber===2){
      this.shadowBoxLeft = "normal-shadow-box-left";
      this.shadowBoxCenter = "normal-shadow-box-center";
      this.shadowBoxRight = "normal-shadow-box-right";
    }
    if(shadowBoxNumber===3){
      this.shadowBoxLeft = "expandido-shadow-box-left";
      this.shadowBoxCenter = "expandido-shadow-box-center";
      this.shadowBoxRight = "expandido-shadow-box-right";
    }
    //console.log(this.shadowBoxNumber, this.shadowBoxCenter, "shadow "+this.orientatioShadowBox)
  }

  shadowBoxNumberReset(){
    this.shadowBoxNumber=1;
  }

  returnBox():any{

       if(this.orientatioShadowBox==="left"){
         return this.shadowBoxLeft;
       }

      if(this.orientatioShadowBox==="center"){
        return this.shadowBoxCenter;
       }

       if(this.orientatioShadowBox==="right"){
        return this.shadowBoxRight;
       }

  }


}
