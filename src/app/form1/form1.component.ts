import { Component, OnInit, HostListener, ElementRef, ViewChild} from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbDatepicker } from '@ng-bootstrap/ng-bootstrap'
import { Form1 } from './form1.model';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
  user : FormGroup;


  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.user = this.fb.group({
      name: ['', [ Validators.required, Validators.minLength(3) ]],
      email: ['', [ Validators.required, Validators.email ]],
      address: ['', [ Validators.required, Validators.minLength(10), Validators.maxLength(100) ]]
    });
  }

  get name() { return this.user.get('name'); }
  get email() { return this.user.get('email'); }
  get address() { return this.user.get('address'); }
  
  onSubmit({ value, valid }/*: { value: RegForm, valid: boolean }*/) {
    console.log(value, valid);
  }

}
