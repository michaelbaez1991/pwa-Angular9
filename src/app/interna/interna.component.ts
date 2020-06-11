import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroupDirective, NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { ErrorStateMatcher } from '@angular/material/core';
import { Posts } from '../model/Posts';
import { RestApiService } from '../service/rest-api.service';
 
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.css']
})
export class InternaComponent implements OnInit {

  posts: Posts = new Posts();
  submitted = false;
  register: FormGroup;

  constructor(private formBuilder: FormBuilder, private restApi: RestApiService) { 
    this.register = this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    });
  }

  title = new FormControl('', [
    Validators.required
  ]);

  body = new FormControl('', [
    Validators.required
  ]);

  userId = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();
  
  get f() { 
    return this.register.controls; 
  }

  ngOnInit(): void {
  }

  guardar(){
    this.submitted = true;
    
    // stop here if form is invalid
    if (this.register.invalid) {
      alert('Debe agregar la información necesaria, para poder continuar');
      return;
    }

    this.posts.title = this.register.value.title;
    this.posts.body = this.register.value.body;
    this.posts.userId = this.register.value.userId;

    this.restApi.postItems(this.posts)
      .subscribe(
        (data: any) => {
          // this.response = data;
          alert('titulo: ' + data.title + ', cuerpo: ' + data.body + ', userId: ' + data.userId + ', idRequest: ' + data.id);
          console.log(data);
          alert('registro exitoso');
        }
      );
  }
}
