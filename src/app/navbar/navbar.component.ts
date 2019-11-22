import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material';
import {MatMenuModule} from '@angular/material';
import { Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DialogOverviewExampleDialog} from './DialogOverviewExampleDialog'


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
animal: string;
  name: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogOverviewExampleDialog, {
    });
  }
}



