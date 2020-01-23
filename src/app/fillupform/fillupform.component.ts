import { Component, OnInit} from '@angular/core';
import { Info } from '../info';
import { ProjectServiceService } from '../project-service.service';
import swal from 'sweetalert2';

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
    this.httpData.addData(obj).subscribe(data => {
      var last_index = this.info[this.info.length - 1].id
      data.id = + last_index + 1
      this.info.push(data)
    })
    swal.fire("Successfully submitted!", "Nice One", "success");
  }

  deletedData() {
    this.id = null
    this.nameni = null
    this.emailni = null
    this.contactni = null
    swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Fields are cleared!',
      showConfirmButton: false,
      timer: 1500
    })
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

  update(){
    if(this.nameni == null || this.emailni == null || this.contactni == null){
      swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Fields are empty!',
        text: 'Nothing to save!',
        showConfirmButton: false,
        timer: 1500
      })
    }else{
      this.info.forEach(element => {
        if (element.id == this.id) {
          this.httpData.updateData(this.id).subscribe(data => {
            element.name = this.nameni
            element.email = this.emailni
            element.phone = this.contactni
            console.log(JSON.stringify(data))
          })
          this.savebutton = false
          this.submitbutton = true
        }
      });
      swal.fire("Successfully edited!", "Nice One", "success");
    }
  }
}
