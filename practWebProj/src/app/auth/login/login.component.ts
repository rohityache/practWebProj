import { CommonModule, NgStyle } from '@angular/common';
import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { FormsModule, NgControl, NgForm, NgSelectOption } from '@angular/forms';
import swal from 'sweetalert2';
import { PreventForwardDirective } from '../../directives/prevent-forward.directive';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, PreventForwardDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginComponent {
  email = '';
  password = '';
  isAdmin = false;
  isActive$ = signal<string>('InActive');

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
   
  }
}
