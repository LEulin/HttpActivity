import { Component, OnInit } from '@angular/core';
import { Data } from '../data';
import swal from 'sweetalert2';

@Component({
  selector: 'app-form-parent',
  templateUrl: './form-parent.component.html',
  styleUrls: ['./form-parent.component.css']
})
export class FormParentComponent implements OnInit {


  data: Data
  nameya: string
  emailya: string
  passwordya: string
  storage: Data[] = []

  constructor() { this.data = new Data() }

  ngOnInit() {
  }

  submit() {
    swal.fire("Successfully submitted!", "Nice One", "success");
    this.data = {
      name: this.nameya,
      email: this.emailya,
      password: btoa(this.passwordya)
    }
    this.storage.push(this.data)
    console.log(this.storage)
  }
  editedData(EditedData) {
      this.nameya = EditedData.name
      this.emailya = EditedData.email
      this.passwordya = EditedData.password
  }

}
