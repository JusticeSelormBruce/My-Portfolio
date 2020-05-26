import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  bg = "assets/article.png";
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }


  artcle: articles[] = [
    {title: "ngx-toastr in Angular 7", description: "A step-by-step approach to install and configure ngx-toastr in your Angular 7 project", link: "https://medium.com/better-programming/ngx-toastr-in-angular-7-185ac435011e" },
    {title: "Adding Font Awesome to Laravel 5.8", description: "Today, we are going to go through a step by step approach in adding Font Awesome to Laravel 5.8 application.", link: "https://medium.com/@ewave80/adding-font-awesome-to-laravel-5-8-4dbb4ac4adfa" },
    {title: "Using Materializecss with Angular 7", description: "Sorry, No description provided for this Article", link: "https://medium.com/@ewave80/using-materializecss-with-angular-7-87a7f1a1e74d" },
    {title: "Using Semantic UI with Angular 7", description: "Sorry, No description provided for this Article", link: "https://medium.com/@ewave80/using-semantic-ui-with-angular-7-3f42af37a09f" },
  ]

}
export interface articles {
  title:string
  description: string;
  link:string;

}
