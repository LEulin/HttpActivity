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
    swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        swal.fire(
          'Deleted!',
         'Id number' + ' ' + dataToDelete.id + ' ' + 'has been deleted.',
          'success'
        )
        this.httpData.deleteData(dataToDelete.id).subscribe(data => {
          (this.storage.splice(this.storage.indexOf(dataToDelete), 1));
          console.log(dataToDelete)
        })
      }else{
        swal.fire(
          'Cancelled!',
         'Id number' +  ' ' + dataToDelete.id + ' ' + 'has been cancelled to delete.',
          'success'
        )
      }
    })
  }

  update(dataToEdit) {
    swal.fire('Congrats', 'You can now edit!', 'success')
    this.updateEvent.emit(dataToEdit)
    console.log(dataToEdit)
  }
}