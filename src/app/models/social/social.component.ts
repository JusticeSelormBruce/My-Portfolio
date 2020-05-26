import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css'],
})
export class SocialComponent implements OnInit {
  Medium = 'assets/social/medium.png';
  MediumLink = 'https://medium.com/@ewave80';
  Google = 'assets/social/google.png';
  GoogleLink =
    'https://www.google.com/search?q=bruce+justice+selorm&oq=&sourceid=chrome&ie=UTF-8';
  Stack = 'assets/social/stack.png';
  StackLink = 'https://stackoverflow.com/users/10083866/bruce-justice-selorm';
  Linkedin = 'assets/social/linkedin.png';
  LinkedinLink = 'https://www.linkedin.com/in/ewave-tech/';
  Twitter = 'assets/social/twitter.png';
  TwitterLink = 'https://twitter.com/bruce_selorm';
  Facebook = 'assets/social/facebook.png';
  FacebookLink = 'https://www.facebook.com/selorm.bruce';
  constructor() {}

  ngOnInit(): void {}
}
