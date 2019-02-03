import {DataSource} from '@angular/cdk/table';
import {Lesson} from '../model/lesson';
import {CollectionViewer} from '@angular/cdk/collections';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {CoursesService} from './courses.service';
import {catchError} from 'rxjs/operators';

export class LessonsDatasource implements DataSource<Lesson> {

  private lessonSubject = new BehaviorSubject<Lesson[]>([]);
  constructor(private  courseService: CoursesService) {

  }
  connect(collectionViewer: CollectionViewer): Observable<Lesson[] | ReadonlyArray<Lesson>> {
    return this.lessonSubject.asObservable();
  }
  loadLessons(courseId: number, filter: string, sortDirection: string, pageIndex: number, pageSize: number) {
    this.courseService.findLessons(courseId, filter, sortDirection, pageIndex, pageSize)
      .pipe(
        catchError(() => of([]))
      )
      .subscribe(lessons => this.lessonSubject.next(lessons));
  }
  disconnect(collectionViewer: CollectionViewer): void {
    this.lessonSubject.complete();
  }

}
