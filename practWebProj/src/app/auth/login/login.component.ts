import { CommonModule, formatDate, NgStyle } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, OnInit, signal } from '@angular/core';
import { FormsModule, NgControl, NgForm, NgSelectOption } from '@angular/forms';
import swal from 'sweetalert2';
import { PreventForwardDirective } from '../../directives/prevent-forward.directive';
import { TemperaturePipe } from "../temperature.pipe";
import { filter, interval, map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, PreventForwardDirective, TemperaturePipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent implements OnInit {
 clickcount = signal(0);


  ngOnInit(): void {
    // interval(5000).pipe(
    //   //convert Date.now() to a proper date format using map()
    //   map(val => Date.now())
    // ).subscribe(val => {
    //   const date = new Date(val);
    //   console.log(formatDate(date.getTime(), 'dd/MM/yyyy', 'en-US'));
    // });
  }

  //how to convert milliseconds to date


  email = '';
  password = '';
  isAdmin = false;
  isActive$ = signal<string>('InActive');
  logout$ = signal<boolean>(false);

  public date = Date.now();

  public temperature:string = '78';

  countryList = ['india', 'nepal'];

  

  onSubmit() {
    if(this.email == 'admin@gmail.com' && this.password == 'admin123'){
      this.isAdmin = true;
      computed(()=>this.isActive$.set('active'));
    }else if(this.email == 'user@gmail.com' && this.password == 'user123'){
      alert('User Logged In !!');
    }
    else{
      this.isAdmin = false;
      computed(()=>this.isActive$.set('InActive'));
    }
    console.log(this.email);
    console.log(this.password);
    alert('Submitted: '+this.email);
    //reset the form
    this.email = '';
    this.password = '';
    this.logout$.set(true);
  }

  logout(){
    swal.fire({
      title: 'Logged out Successfully',
      icon:'info',
      confirmButtonText: 'OK',
      cancelButtonText: 'No'
    })
    this.isAdmin = false;
    computed(()=>this.isActive$.set('InActive'));
    this.logout$.set(false);
   
  }

  onClick(){
    this.clickcount.update(val => val + 1);
  }
  unClick(){
    if(this.clickcount() > 0)
      this.clickcount.update(val => val - 1);
    else
      this.clickcount.set(0);
  }
}
