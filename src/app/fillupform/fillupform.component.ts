import { Component, OnInit, Input } from '@angular/core';
import { Info } from '../info';
import { ProjectServiceService } from '../project-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-fillupform',
  templateUrl: './fillupform.component.html',
  styleUrls: ['./fillupform.component.css']
})
export class FillupformComponent implements OnInit {

  info: Info
  id: number
  nameni: string
  emailni: string
  contactni: string
  @Input() storage: Array<Info>

  submitbutton: boolean = true
  savebutton: boolean = false


  // public apiUrl = "https://jsonplaceholder.typicode.com/users"

  constructor(private httpData: ProjectServiceService) { }

  ngOnInit() {
    this.httpData.getData().subscribe(data => this.storage = data)

  }

  submit() {
    console.log(this.savebutton);
    this.info = {
      id: this.id,
      name: this.nameni,
      email: this.emailni,
      phone: this.contactni
    }
    this.storage.push(this.info)
    if (this.savebutton) {
      this.submitbutton = true
    } else {
      this.submitbutton = true
    }
    this.savebutton = false
    swal.fire("Successfully submitted!", "Nice One", "success");

    console.log(this.storage)

    // var data = {
    //   name:this.fname
    //   }
    //   this.values.forEach(info=>{
    //   if(info.id == this.id){
    //   this.values[this.values.indexOf(info)] = data
    //   }
    //   })



    // this.storageni.push(this.info)
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
    this.id = this.id
    this.nameni = DataToEdit.name
    this.emailni = DataToEdit.email
    this.contactni = DataToEdit.phone
  }

}
