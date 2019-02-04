import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../model/course';
import {MatDialog} from '@angular/material';
import {CourseDialogComponent} from '../course-dialog/course-dialog.component';

@Component({
  selector: 'app-course-card-list',
  templateUrl: './course-card-list.component.html',
  styleUrls: ['./course-card-list.component.css']
})
export class CourseCardListComponent implements OnInit {
  @Input()
  courses: Course[];
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }


  editCourse({description, longDescription, category}: Course) {
    this.dialog.open(CourseDialogComponent);
  }
}
