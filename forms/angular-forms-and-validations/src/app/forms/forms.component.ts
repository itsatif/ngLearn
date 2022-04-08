import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Country } from '../validators/country.model';
import { ParentErrorStateMatcher, PasswordValidator } from '../validators/password.validator';
import { PhoneValidator } from '../validators/phone.validator';
import { UsernameValidator } from '../validators/username.validator';
import { FullnameValidator } from '../validators/fullname.validator';
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';
import { default as rollupMoment} from 'moment';
import { UrlMapService } from '../url-map.service';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-forms-page',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  minDate = new Date(1990,12);
  maxDate = new Date(); 
  userDetailsForm: FormGroup;
  accountDetailsForm: FormGroup;
  Data=[];
  matchingPasswordsGroup: FormGroup;
  countryPhoneGroup: FormGroup;
  ans:string = 'Hi i am'
  parentErrorStateMatcher = new ParentErrorStateMatcher();
  display= false;
  otherGender:any;
  other(e){
    let val = e.source.value;
    console.log(val);
    
    if(val === "Other"){
      this.display = !this.display;
    }
  }
  genders = [
    "Male",
    "Female",
    "Other"
  ];

  countries = [
    new Country('IN', 'India'),
    new Country('US', 'United States'),
    new Country('UK', 'United Kingdom')
  ];


  validation_messages = {
    'fullname': [
      { type: 'required', message: 'Full name is required' },
      { type: 'pattern', message: 'Name is not in valid Format'}
    ],
    'bio': [
      { type: 'maxlength', message: 'Bio cannot be more than 256 characters long' },
    ],
    'gender': [
      { type: 'required', message: 'Please select your gender' },
    ],
    'birthday': [
      { type: 'required', message: 'Please insert your birthday' },
    ],
    'phone': [
      { type: 'required', message: 'Phone is required' },
      { type: 'validCountryPhone', message: 'Phone incorrect for the country selected' }
    ]
  };

  account_validation_messages = {
    'username': [
      { type: 'required', message: 'Username is required' },
      { type: 'minlength', message: 'Username must be at least 5 characters long' },
      { type: 'maxlength', message: 'Username cannot be more than 25 characters long' },
      { type: 'pattern', message: 'Your username must contain only numbers and letters' },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    'email': [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid email' }
    ],
    'confirm_password': [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Password mismatch' }
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minlength', message: 'Password must be at least 5 characters long' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number' }
    ],
    'terms': [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  }

  constructor(private fb: FormBuilder,private user :UrlMapService,private dat : UrlMapService) {
    this.user.getData().subscribe(res=> {
      for(const item in res){
        this.Data.push(res[item].name);
      }
      console.log(this.Data);
      of(res).pipe(map(x=>x)).subscribe(v=>console.log(v));
    });
    this.dat.setData(this.ans);
   }

  ngOnInit() {
    this.createForms();
  }

  createForms() {
    // matching passwords validation
    this.matchingPasswordsGroup = new FormGroup({
      password: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      confirm_password: new FormControl('', Validators.required)
    }, (formGroup: FormGroup) => {
      return PasswordValidator.areEqual(formGroup);
    });

    // country & phone validation
    let country = new FormControl(this.countries[0], Validators.required);

    let phone = new FormControl('', {
      validators: Validators.compose([
        Validators.required,
        PhoneValidator.validCountryPhone(country)
      ])
    });

    this.countryPhoneGroup = new FormGroup({
      country: country,
      phone: phone
    });
    const validatorString = '^[a-zA-Z,.!?\\s-]*$'
    // user details form validations
    this.userDetailsForm = this.fb.group({
      fullname: new FormControl('',Validators.compose([
        FullnameValidator.validFullname,
        Validators.maxLength(25),
        Validators.minLength(4),
        Validators.pattern(validatorString),
        Validators.required
      ])),
      bio: ["", Validators.maxLength(256)],
      birthday: ['', Validators.required],
      gender: new FormControl(this.genders[0], Validators.required),
      countryPhone: this.countryPhoneGroup
    });


    // user links form validations
    this.accountDetailsForm = this.fb.group({
      username: new FormControl('', Validators.compose([
       UsernameValidator.validUsername,
       Validators.maxLength(25),
       Validators.minLength(5),
       Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
       Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      matchingPasswords: this.matchingPasswordsGroup,
      terms: new FormControl(false, Validators.pattern('true'))
    })

  }

  onSubmitAccountDetails(value: any){
    console.log(value);
  }

  onSubmitUserDetails(value: any){
    console.log(value);
  }

}
