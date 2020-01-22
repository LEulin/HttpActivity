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

  ngOnInit() {}

  delete(dataToDelete) {
    console.log(dataToDelete)
    this.httpData.deleteData(dataToDelete.id).subscribe(data => {
      (this.storage.splice(this.storage.indexOf(dataToDelete), 1));
    })
  }

  update(dataToEdit) {
    swal.fire('Congrats', 'You can now edit!', 'success')
    this.updateEvent.emit(dataToEdit)
    console.log(dataToEdit)
  }
}