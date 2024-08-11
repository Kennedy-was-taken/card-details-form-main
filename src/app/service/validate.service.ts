import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  

  // card_number_content : boolean = false;
  // card_holder_content: boolean = false;
  // exp_mm_content: boolean = false;
  // exp_yy_content: boolean = false;
  // cvc_content: boolean = false;


  public checkCardName(value: string) : boolean{

    if(value.length > 5 ){
      // this.card_holder_content = true;
      return true;
    }

    else{
      // this.card_holder_content = false;
      return false;
    }

    // return this.card_holder_content;
  }

  public checkCardNumber(value: string) : boolean{
    
    if(value.length == 19){
      // this.card_number_content = true;
      return true;
    }

    else{
      // this.card_number_content = false;
      return false;
    }

    // return this.card_number_content;
  }

  public checkCardMonth(value: string) : boolean{
    
    if(value.length == 0){
      // this.exp_mm_content = false;
      return false;
    }
    
    else if(value.length <= 2){
      // this.exp_mm_content = true;
      return true;
    }

    else{
      // this.exp_mm_content = false;
      return false;
    }

    // return this.exp_mm_content;
  }

  public checkCardYear(value: string) : boolean{
    
    if(value.length == 0){
      // this.exp_mm_content = false;
      return false;
    }
    
    else if(value.length <= 2){
      // this.exp_mm_content = true;
      return true;
    }

    else{
      // this.exp_yy_content = false;
      return false;
    }

    // return this.exp_yy_content;
  }

  public checkCardcvc(value: string) : boolean{
    
    if(value.length <= 2){
      // this.cvc_content = true;
      return true;
    }

    else{
      // this.cvc_content = false;
      return false;
    }

    // return this.cvc_content;
  }


}
