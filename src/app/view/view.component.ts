import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  id: number
  userInfo: Array<any>= []

  constructor(
    private router: ActivatedRoute,
    private project: ProjectServiceService
    ) {}
   

  ngOnInit() {
    this.id = this.router.snapshot.params['id']
    return this.project.getID(this.id).subscribe(data => {
      this.userInfo.push(data)
    })
  }

}
