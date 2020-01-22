import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info';
import { ProjectServiceService } from '../project-service.service';
import swal from 'sweetalert2';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

@Component({
  selector: 'app-fillupform',
  templateUrl: './fillupform.component.html',
  styleUrls: ['./fillupform.component.css']
})
export class FillupformComponent implements OnInit {

  info: Info[] = []

  datani : Info
  data: any
  id: number
  nameni: string
  emailni: string
  contactni: string
  storage: Array<Info>

  

  submitbutton: boolean = true
  savebutton: boolean = false

  constructor(private httpData: ProjectServiceService) { }

  ngOnInit() {
    this.httpData.getData().subscribe(data => this.info = data)
  }

  submit() {
    var obj = {
      id: this.id,
      name: this.nameni,
      email: this.emailni,
      phone: this.contactni
    }
    swal.fire("Successfully submitted!", "Nice One", "success");
    this.httpData.addData(obj).subscribe(data => {
      var last_index = this.info[this.info.length - 1].id
      data.id = + last_index + 1
      this.info.push(data)
    })

    /////this is for the save method
    // if(){

    // }else{}  

    // if (this.submitbutton === true) {
    //   console.log("this is for submit", this.info)
    //   this.data = new Info
    //   this.data.id = this.info[this.info.length - 1].id + 1
    //   this.data.name = this.nameni
    //   this.data.email = this.emailni
    //   this.data.phone = this.contactni
    //   this.info.push(this.data)
    //   swal.fire("Successfully submitted!", "Nice One", "success");
    //   console.log("is Edited")
    //   // this.data = new Info
    // } else {
    //   console.log("this is for update")
    //   // this.info.values.name
    //   this.info.forEach(element => {
    //     if (element.id === this.id) {
    //       element.name = this.nameni
    //       element.email = this.emailni
    //       element.phone = this.contactni
    //       console.log("Nigana ba ka?")
    //     }
    //     console.log(element)

    //   })
    //   this.submitbutton = true
    //   this.savebutton = false
    //   swal.fire("Successfully edited!", "Nice One", "success");
    // }
  }

  deletedData() {
    this.id = null
    this.nameni = null
    this.emailni = null
    this.contactni = null
  }

  updatedData(DataToEdit) {

    this.savebutton = true
    this.submitbutton = false
    this.id = DataToEdit.id
    this.nameni = DataToEdit.name
    this.emailni = DataToEdit.email
    this.contactni = DataToEdit.phone

    console.log(DataToEdit)

  }

  test(){
    this.info.forEach(element => {
        if (element.id == this.id) {
          this.httpData.updateData(this.id).subscribe(data => {
            element.name = this.nameni
            element.email = this.emailni
            element.phone = this.contactni
            console.log(JSON.stringify(data))
          })
        }
      });
  }

}
