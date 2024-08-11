import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  public checkCardName(value: string) : boolean{

    if(value.length <= 3 ){
      
      return true;
    }

    else{
      return false;
    }

  }

  public checkCardNumber(value: string) : boolean{
    
    if(value.length < 19){
      return true;
    }

    else{
      return false;
    }
  }

  public checkCardMonth(value: string) : boolean{
    
    if(value.length == 0){
      console.log(value);
      console.log(value.length);
      return true;
    }

    else{
      return false;
    }

  }

  public checkCardYear(value: string) : boolean{
    
    if(value.length == 0){
      return true;
    }

    else{
      return false;
    }
  }

  public checkCardCvc(value: string) : boolean{
    
    if(value.length <= 2){
      return true;
    }

    else{
      return false;
    }
  }

}
