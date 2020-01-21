import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../data';
import swal from 'sweetalert2'


@Component({
    selector: 'app-form-child',
    templateUrl: './form-child.component.html',
    styleUrls: ['./form-child.component.css']
})
export class FormChildComponent implements OnInit {

    @Input() data: Array<Data>;
    @Output() dataEvent = new EventEmitter();


    constructor() { }

    ngOnInit() {
    }

    Edit(dataToEdit) {
        swal.fire('Congrats', 'You can now edit!', 'success')
        for (var i = 0; i < this.data.length; i++) {
          if (dataToEdit == this.data[i]) {
            this.data.splice(i, 1)}}
        this.dataEvent.emit(dataToEdit)

    }
}
