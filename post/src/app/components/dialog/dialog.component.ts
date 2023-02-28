import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  inputForm = new FormControl();
  subject = new BehaviorSubject<any>(null);

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
  ) {
    this.inputForm.valueChanges.subscribe(value => {
      this.subject.next(value);
    });
  }

  onSaveClick(): void {
    this.dialogRef.close(this.subject.getValue());
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
