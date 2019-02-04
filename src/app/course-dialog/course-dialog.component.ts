import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Course} from '../model/course';
import {FormBuilder, FormGroup, Validator, Validators} from '@angular/forms';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.css']
})
export class CourseDialogComponent implements OnInit {

  form: FormGroup;
  description: string;
  longDescription: string;

  constructor(
    fb: FormBuilder,
    private dialog: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) {description, longDescription, category}: Course) {
    this.description = description;
    this.longDescription = longDescription;
    this.form = fb.group({
      description : [description, Validators.required]
    });
  }

  ngOnInit() {
  }

  close() {
    this.dialog.close();
  }
}
