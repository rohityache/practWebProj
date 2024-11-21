import { Directive } from '@angular/core';
import swal from 'sweetalert2';

@Directive({
  selector: 'a[appPreventForward]',
  standalone: true,
  host:{
    '(click)': 'preventForward($event)'
  }
})
export class PreventForwardDirective {
  constructor() { console.log('PreventForwardDirective is active!'); }


  preventForward(event:MouseEvent){
   // console.log(this.wantToLeave2);
    const wantToLeave = window.confirm("Do you want to leave this page?");
    if(wantToLeave){
      return true;
    }
    
    event.preventDefault();
    return false;
  }
  

}
