import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {CoursesService} from '../services/courses.service';
import {ActivatedRoute} from '@angular/router';
import {Course} from '../model/course';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {LessonsDatasource} from '../services/lessons.datasource';
import {debounce, debounceTime, distinct, distinctUntilChanged, startWith, tap} from 'rxjs/operators';
import {fromEvent, merge} from 'rxjs';

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
  @ViewChild(MatSort)
  sort: MatSort;
  @ViewChild('input')
  input: ElementRef;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit() {
    this.course = this.route.snapshot.data['course'];
    // this.coursesService.findAllCoursesLessons(this.course.id)
    //   .subscribe(lessons => this.dataSource.data = lessons);
    this.dataSource = new LessonsDatasource(this.coursesService);
     this.dataSource.loadLessons(this.course.id, '', 'asc', 0, 3);
  }

  ngAfterViewInit(): void {
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex =0);
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(150),
        distinctUntilChanged(),
        tap(() => {
          this.paginator.pageIndex = 0;
          this.loadLessonsPage();
        })
      ).subscribe();
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        tap(() => this.loadLessonsPage())
      )
     /* .subscribe(() => {
        this.dataSource.loadLessons(this.course.id, '', 'asc', this.paginator.pageIndex, this.paginator.pageSize);
      })*/
      .subscribe();
  }
  loadLessonsPage() {
    this.dataSource.loadLessons(
      this.course.id, this.input.nativeElement.value, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
  }

  /*searchLessons(search: string) {
    this.dataSource.filter = search.toLowerCase().trim();
  }*/
}
