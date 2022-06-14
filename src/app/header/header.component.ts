import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  options: FormGroup;
  constructor(fb: FormBuilder) {
    this.options = fb.group({
      bottom: 0,
      fixed: false,
      top: 0,
    });
  }

  ngOnInit(): void {
    
<<<<<<< HEAD
    console.log("abcd")
=======
>>>>>>> 05b83dedffb2aeda8dc35bbcee75f555f0628f3c
  }
}
