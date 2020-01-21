import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Info } from '../info';
import { ProjectServiceService } from '../project-service.service';
import swal from 'sweetalert2'

@Component({
  selector: 'app-editform',
  templateUrl: './editform.component.html',
  styleUrls: ['./editform.component.css']
})
export class EditformComponent implements OnInit {
  @Input() storage: Array<Info>
  @Output() deleteEvent = new EventEmitter()
  @Output() updateEvent = new EventEmitter()

  state: boolean = true;


  constructor(private httpData: ProjectServiceService) { }

  ngOnInit() {

  }

  delete(dataToDelete) {
    swal.fire('Successfully deleted!', 'Item deleted', 'success')
    for (var i = 0; i < this.storage.length; i++) {
      if (dataToDelete == this.storage[i]) {
        this.storage.splice(i, 1)
        // this.storage.length-1
      }
    }
    this.deleteEvent.emit(dataToDelete)
  }

  update(dataToEdit) {
    swal.fire('Congrats', 'You can now edit!', 'success')
    for (var i = 0; i < this.storage.length; i++) {
      if (dataToEdit == this.storage[i]) {
        this.storage.splice(i, 1)
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
      }
    }

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

    
    this.updateEvent.emit(dataToEdit)
    console.log(dataToEdit)

  }

}
