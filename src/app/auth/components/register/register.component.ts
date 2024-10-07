import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-register',
  standalone: true, // Declare this component as standalone
  imports: [ ReactiveFormsModule, NzFormModule, NzInputModule, NzButtonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm! : FormGroup;

  constructor(private fb: FormBuilder,) {}

    ngOnInit() {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
      this.registerForm = this.fb.group({
        email :[null, [Validators.email, Validators.required]],
        password : [null, [Validators.required]],
        name : [null, [Validators.required]]
      })
    }

}
