import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-allergy-dialog',
  templateUrl: './allergy-dialog.component.html',
  styleUrls: ['./allergy-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AllergyDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AllergyDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,) { }

  ngOnInit() {
    this.dialogRef.afterClosed().subscribe(dialogResult => {

      if ( !dialogResult  || dialogResult[0] !== 'confirm-details' ){
        return;
      }
    });
  }

  public onNoClick(): void {
    this.dialogRef.close(['cancel-details']);
  }


}
