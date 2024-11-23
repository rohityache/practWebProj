import { Directive, ElementRef, inject, input } from '@angular/core';
import swal from 'sweetalert2';

@Directive({
  selector: 'a[appPreventForward]',
  standalone: true,
  host:{
    '(click)': 'preventForward($event)'
  }
})
export class PreventForwardDirective {
  queryParams = input('NAA',{alias:'appPreventForward'}); //used to get the query params from the tag as appPreventForward="confirm"
  constructor() { console.log('PreventForwardDirective is active!'); }
  private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);


  addressSample = this.hostElement.nativeElement.href;


  preventForward(event:MouseEvent){
    
   // console.log(this.wantToLeave2);
    const wantToLeave = window.confirm("Do you want to leave this page?");

    const address = (event.target as HTMLAnchorElement).href;
    (event.target as HTMLAnchorElement).href = address+'?confirm='+this.queryParams();
    

    if(wantToLeave){
      console.log((event.target as HTMLAnchorElement).href);
      return true;
      
    }
    
    event.preventDefault();
    return false;
  }
  

}
