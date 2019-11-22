import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'DialogOverviewExampleDialog',
  templateUrl: 'DialogOverviewExampleDialog.html',
  styleUrls: ['./DialogOverviewExample.css']
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: "") {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
