import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form1-step2',
  templateUrl: './form1-step2.component.html',
  styleUrls: ['./form1-step2.component.css']
})
export class Form1Step2Component implements OnInit {

  secondaryInfo : FormGroup;

  constructor(private fb: FormBuilder ){}

  ngOnInit() {
    this.secondaryInfo = this.fb.group({
        date: ['', [ Validators.required ]],
        contact: ['', [ Validators.required, Validators.minLength(9), Validators.maxLength(9) ]],
        gender:  ['other', [Validators.required]],
        interested: ''
    });
  }

  get date() { return this.secondaryInfo.get('date'); }
  get contact() { return this.secondaryInfo.get('contact'); }
  get gender() { return this.secondaryInfo.get('gender'); }
  get interested() { return this.secondaryInfo.get('interested'); }


  // onSubmit({ value, valid }: { value: RegForm, valid: boolean }) {
  onSubmit(value) {
    console.log(value);
    // console.log(this.secondaryInfo.value  )
  }


}