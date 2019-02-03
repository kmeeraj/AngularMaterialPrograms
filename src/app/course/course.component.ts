import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  dataSource = new MatTableDataSource([]);
  displayedColumns = ['seqNo', 'description', 'duration'];
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    this.coursesService.findAllCoursesLessons(this.course.id)
      .subscribe(lessons => this.dataSource.data = lessons);
  }

}
