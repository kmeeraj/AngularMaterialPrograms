import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {MatTableDataSource} from '@angular/material';
import {LessonsDatasource} from '../services/lessons.datasource';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  // dataSource = new MatTableDataSource([]);
  dataSource: LessonsDatasource;
  displayedColumns = ['seqNo', 'description', 'duration'];
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    // this.coursesService.findAllCoursesLessons(this.course.id)
    //   .subscribe(lessons => this.dataSource.data = lessons);
    this.dataSource = new LessonsDatasource(this.coursesService);
    this.dataSource.loadLessons(this.course.id, 'Hello', 'desc', 0, 3);
  }

  /*searchLessons(search: string) {
    this.dataSource.filter = search.toLowerCase().trim();
  }*/
}
