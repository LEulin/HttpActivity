import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../info';
import { ProjectServiceService } from '../project-service.service';
import swal from 'sweetalert2'
import { element } from 'protractor';

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  @Input() storage: Info[]
  @Output() deleteEvent = new EventEmitter()
  @Output() updateEvent = new EventEmitter()

  state: boolean = true;


  constructor(private httpData: ProjectServiceService) { }

  ngOnInit() {

  }

  delete(dataToDelete) {
    console.log(dataToDelete)
    this.httpData.deleteData(dataToDelete.id).subscribe(data => {
      (this.storage.splice(this.storage.indexOf(dataToDelete), 1));
    })
  }
  // delete(dataId, dataToDelete) {
  //   swal.fire('Successfully deleted!', 'Item deleted', 'success')
  //   this.httpData.deleteData(dataId).subscribe(data =>{
  //     console.log(data)

  //     // this.storage = data
  //   })

  //   // console.log(dataToDelete)
  //   // for (var i = 0; i < this.storage.length; i++) {
  //   //   if (dataToDelete == this.storage[i]) {
  //   //     this.storage.splice(i, 1)
  //   //   }
  //   // }
  //   this.deleteEvent.emit(dataToDelete)
  // }

  update(dataToEdit) {
    swal.fire('Congrats', 'You can now edit!', 'success')
    this.updateEvent.emit(dataToEdit)
    console.log(dataToEdit)

  }

}

  // for (var i = 0; i < this.storage.length; i++) {
    //   if (dataToEdit == this.storage[i]) {
    //     this.storage.splice(i, 1)
           // var data = {
    //   id: this.id,
    //   name: this.nameni,
    //   email: this.emailni,
    //   phone: this.contactni
    // }
    // this.storage.forEach(Info => {
    //   if (Info.id == this.id) {
    //     this.storage[this.storage.indexOf(Info)] = data
    //   }
    // })
    //   }
    // }

    // var data = {
    //   id: this.id,
    //   name: this.nameni,
    //   email: this.emailni,
    //   phone: this.contactni
    // }
    // this.storage.forEach(Info => {
    //   if (Info.id == this.id) {
    //     this.storage[this.storage.indexOf(Info)] = data
    //   }
    // })
