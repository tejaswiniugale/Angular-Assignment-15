import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ReactiveForm';

  registerform = new FormGroup({
    fname : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
    lname : new FormControl('',[Validators.required,Validators.pattern(/^[a-zA-Z]+$/)]),
    phone : new FormControl('',[Validators.required, Validators.pattern(/^\d{10}$/)]),
    address : new FormControl('',[Validators.required,Validators.minLength(4), Validators.pattern(/^[a-zA-Z]+$/)])
  })

  getControl(name: any) : AbstractControl | null 
  {
    return this.registerform.get(name)

  }

registerFn(){
  console.log(this.registerform.value)
}

}
