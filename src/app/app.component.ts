import { Component, NgModule } from '@angular/core';
import { ValidateService } from './service/validate.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  
  title = 'interactive-card-details-form-main';

  // labels = document.getElementsByClassName('image_front_card_number');
  // inputs = document.querySelector('#CardsNumbers');

  //ids
  card_holder_id = document.getElementById("card_holder");
  card_number_id = document.getElementById("card_number");
  exp_mm_id = document.getElementById("exp_mm");
  exp_yy_id = document.getElementById("exp_yy");
  cvc_id = document.getElementById("cvc");

  // placeholder
  card_number_placeholder = "1234 5678 9123 0000";
  card_holder_placeholder: string = "Jane Appleased";
  exp_mm_placeholder: string = '01';
  exp_yy_placeholder: string = '20';
  cvc_placeholder: string = '000';

  //content
  card_number_content: string = '';
  card_holder_content: string = '';
  exp_mm_content: string = '';
  exp_yy_content: string = '';
  cvc_content: string = '';

  //values
  card_number_value : string = "";
  card_holder_value : string = "";
  exp_mm_value : string = '';
  exp_yy_value : string = '';
  cvc_value : string = '';

  //ngModel names
  card_holder: string = '';
  card_number: string = '';
  exp_mm: string = '';
  exp_yy: string = '';
  cvc: string = '';

  //bool values
  card_number_bool : boolean = false;
  card_holder_bool: boolean = false;
  exp_mm_bool: boolean = false;
  exp_yy_bool: boolean = false;
  cvc_bool: boolean = false;
  pop_up: boolean = false;


  counter: number | undefined;

  nameMatches: string[] | undefined;
  numberMatches: string[] | undefined;
  monthMatches: string[] | undefined;
  yearMatches: string[] | undefined;
  cvcMatches: string[] | undefined;


  constructor(private validate: ValidateService) {}


  public onSubmit(): void {
    
    this.card_holder_bool = this.validate.checkCardName(this.card_holder);
    this.card_number_bool = this.validate.checkCardNumber(this.card_number);
    this.exp_mm_bool = this.validate.checkCardMonth(this.exp_mm);
    this.exp_yy_bool = this.validate.checkCardYear(this.exp_yy);
    this.cvc_bool = this.validate.checkCardCvc(this.cvc);

    if(this.card_holder_bool == false && this.card_number_bool == false && this.exp_mm_bool == false && this.exp_yy_bool == false && this.cvc_bool == false){

      this.pop_up = true;

      this.card_holder = '';
      this.card_number = '';
      this.exp_mm = '';
      this.exp_yy = '';
      this.cvc = '';
    }

    // this.validate.initValidation(this.card_holder_content, this.card_number_content, this.exp_mm_content, this.exp_yy_content, this.cvc_content);
    console.log("I was clicked");
  }

  public btnSubmit() : void{
      this.pop_up = false;
      
      this.ngOnInit();
  }

  public changeBorder(): void{

    if(this.card_number_bool == true){
      // this.card_holder_id.style.borderColor = "#a94442";
      // document.getElementById("card_holder").style.border = "#a94442";
      
      this.card_holder_id!.style.borderColor  = "#a94442";
    }

    else{
      this.card_holder_id!.style.borderColor  = "unset";
    }

    if(this.card_holder_bool == true){

      this.card_number_id!.style.borderColor  = "#a94442";
    }

    else{
      this.card_number_id!.style.borderColor  = "unset";
    }

    if(this.exp_mm_bool == true){

      this.exp_mm_id!.style.borderColor  = "#a94442";
    }

    else{
      this.exp_mm_id!.style.borderColor  = "unset";
    }

    if(this.exp_yy_bool == true){

      this.exp_yy_id!.style.borderColor  = "#a94442";
    }

    else{
      this.exp_yy_id!.style.borderColor  = "unset";
    }

    if(this.cvc_bool == true){

      this.cvc_id!.style.borderColor  = "#a94442";
    }

    else{
      this.cvc_id!.style.borderColor  = "unset";
    }
  }

  public keyFuncCardName(x: KeyboardEvent): void {
    const regex = "[a-zA-Z ]+";

    this.nameMatches = this.card_holder.match(regex) || undefined;

    if (this.nameMatches == undefined) {
      this.card_holder_value = "";
      this.card_holder = this.card_holder_value;
      this.card_holder_content = this.card_holder_placeholder;

    }

    else {
      this.card_holder_value = this.nameMatches[0];
      this.card_holder = this.nameMatches[0];
      this.card_holder_content = this.nameMatches[0];
    }

  }

  public keyFuncCardCvc(x: KeyboardEvent): void {

    const regex = "[0-9]+";

    if (this.cvc.length <= 0) {
      this.cvc_content = this.cvc_placeholder;
      this.cvc_value = "";
    }

    else if (x.key == "Backspace") {

      this.cvc_value = this.cvc;
      this.cvc_content = this.cvc_value;

    }

    else {

      this.cvcMatches = this.cvc.match(regex) || undefined;

      //resets
      if (this.cvcMatches == undefined) {
        this.cvc_value = "";
        this.cvc = this.cvc_value;
        this.cvc_content = this.cvc_placeholder;
      }

      //returns the value back to its previous value if anything but a number is captured
      else if (this.cvcMatches[0] == this.cvc_value) {
        this.cvc = this.cvc_value;
        this.cvc_content = this.cvc_value;
      }

      else {

        this.cvc_value += this.cvcMatches[0].charAt(this.cvcMatches[0].length - 1);
        this.cvc = this.cvc_value;
        this.cvc_content = this.cvc_value;

      }
    }
  }

  public keyFuncCardYear(x: KeyboardEvent): void {

    const regex = "[0-9]+";

    if (this.exp_yy.length <= 0) {
      this.exp_yy_content = this.exp_yy_placeholder;
      this.exp_yy_value = "";
    }

    else if (x.key == "Backspace") {

      this.exp_yy_value = this.exp_yy;
      this.exp_yy_content = this.exp_yy_value;

    }

    else {

      this.yearMatches = this.exp_yy.match(regex) || undefined;

      //resets
      if (this.yearMatches == undefined) {
        this.exp_yy_value = "";
        this.exp_yy = this.exp_yy_value;
        this.exp_yy_content = this.exp_yy_placeholder;
        console.log("returned");
      }

      //returns the value back to its previous value if anything but a number is captured
      else if (this.yearMatches[0] == this.exp_yy_value) {
        this.exp_yy = this.exp_yy_value;
        this.exp_yy_content = this.exp_yy_value;
      }

      else {

        this.exp_yy_value += this.yearMatches[0].charAt(this.yearMatches[0].length - 1);
        this.exp_yy = this.exp_yy_value;
        this.exp_yy_content = this.exp_yy_value;

      }
    }
  }

  public keyFuncCardMonth(x: KeyboardEvent): void {

    const regex = "[0-9]+";

    if (this.exp_mm.length <= 0) {
      this.exp_mm_content = this.exp_mm_placeholder;
      this.exp_mm_value = "";
    }

    else if (x.key == "Backspace") {

      this.exp_mm_value = this.exp_mm;
      this.exp_mm_content = this.exp_mm_value;

    }

    else {

      this.monthMatches = this.exp_mm.match(regex) || undefined;

      //resets
      if (this.monthMatches == undefined) {
        this.exp_mm_value = "";
        this.exp_mm = this.exp_mm_value;
        this.exp_mm_content = this.exp_mm_placeholder;
      }

      //returns the value back to its previous value if anything but a number is captured
      else if (this.monthMatches[0] == this.exp_mm_value) {
        this.exp_mm = this.exp_mm_value;
        this.exp_mm_content = this.exp_mm_value;
      }

      else {

        this.exp_mm_value += this.monthMatches[0].charAt(this.monthMatches[0].length - 1);

        //checks to see if the month isn't larger than 12
        if (parseInt(this.exp_mm_value) > 12) {

          this.exp_mm_value = "12";
          this.exp_mm = this.exp_mm_value;
          this.exp_mm_content = this.exp_mm_value;
        }

        else {
          this.exp_mm = this.exp_mm_value;
          this.exp_mm_content = this.exp_mm_value;
        }

      }
    }

  }

  public keyFuncCardNumber(x: KeyboardEvent): void {

    const regex = "[0-9 ]+";

    if (this.card_number.length <= 0) {
      this.card_number_content = this.card_number_placeholder;
      this.card_number_value = "";
    }

    else if (x.key == "Backspace") {

      if (this.card_number_content.charAt(this.card_number_content.length - 2) == " ") //checks if the last character is a space
      {
        this.card_number_value = this.card_number_value.slice(0, -2)
        this.card_number = this.card_number_value;
        this.card_number_content = this.card_number_value;
      }

      else {
        this.card_number_value = this.card_number;
        this.card_number_content = this.card_number_value;
      }

    }

    else {

      this.numberMatches = this.card_number.match(regex) || undefined;

      //resets
      if (this.numberMatches == undefined) {
        this.card_number_value = "";
        this.card_number = this.card_number_value;
        this.card_number_content = this.card_number_placeholder;
      }

      //returns the value back to its previous value if anything but a number is captured
      else if (this.numberMatches[0] == this.card_number_value) {
        this.card_number = this.card_number_value;
        this.card_number_content = this.card_number_value;
      }

      //adds a space after the 4th, 10th and 15th Character
      else if (this.numberMatches[0].length == 5 || this.numberMatches[0].length == 10 || this.numberMatches[0].length == 15) {
        this.card_number_value += " " + this.numberMatches[0].charAt(this.numberMatches[0].length - 1);
        this.card_number = this.card_number_value;
        this.card_number_content = this.card_number_value;
      }

      else {
        this.card_number_value += this.numberMatches[0].charAt(this.numberMatches[0].length - 1);
        this.card_number = this.card_number_value;
        this.card_number_content = this.card_number_value;
      }

    }

  }

  public initCardCapture(key: string): void {
    this.counter = 1;
    this.card_number_value = key;
    this.card_number_content = this.card_number_value;
  }

  public ngOnInit() {

    this.card_number_content = this.card_number_placeholder;

    this.card_holder_content = this.card_holder_placeholder;

    this.cvc_content = this.cvc_placeholder;

    this.exp_yy_content = this.exp_yy_placeholder;

    this.exp_mm_content = this.exp_mm_placeholder;

  }

}
