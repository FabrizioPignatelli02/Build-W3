import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onSubmit(forms: NgForm) {
    console.log('modifica');
  }
}
