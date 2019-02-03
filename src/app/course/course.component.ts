import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {Observable} from 'rxjs';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {LessonsDatasource} from '../services/lessons.datasource';
import {startWith, tap} from 'rxjs/operators';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit , AfterViewInit {
  course: Course;
  // dataSource = new MatTableDataSource([]);
  dataSource: LessonsDatasource;
  displayedColumns = ['seqNo', 'description', 'duration'];
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    // this.coursesService.findAllCoursesLessons(this.course.id)
    //   .subscribe(lessons => this.dataSource.data = lessons);
    this.dataSource = new LessonsDatasource(this.coursesService);
    // this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit(): void {
    this.paginator.page
      .pipe(
        startWith(null),
        tap(() => {
          this.dataSource.loadLessons(this.course.id, '', 'asc', this.paginator.pageIndex, this.paginator.pageSize);
        })
      )
     /* .subscribe(() => {
        this.dataSource.loadLessons(this.course.id, '', 'asc', this.paginator.pageIndex, this.paginator.pageSize);
      })*/
      .subscribe();
  }

  /*searchLessons(search: string) {
    this.dataSource.filter = search.toLowerCase().trim();
  }*/
}
