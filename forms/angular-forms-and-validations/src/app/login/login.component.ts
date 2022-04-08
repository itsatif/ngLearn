import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UrlMapService } from '../url-map.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  accountDetailsForm: FormGroup;
  data:string = 'Hi iam'
  constructor(private dat:UrlMapService) { }

  ngOnInit(): void {
  }

}
