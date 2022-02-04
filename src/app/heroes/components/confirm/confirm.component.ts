import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styles: [`
   .center {
     text-align: center
   }
  
  `
  ]
})
export class ConfirmComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmComponent> ) { }

  ngOnInit(): void {
  }

  delete() {
    this.dialogRef.close(true);
  }

  cancel() {
    this.dialogRef.close();
  }

}
