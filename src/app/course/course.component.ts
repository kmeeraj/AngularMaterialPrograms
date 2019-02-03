import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
  }

}
