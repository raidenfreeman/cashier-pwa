import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";

@Component({
  selector: "app-deletion-dialog",
  templateUrl: "./deletion-dialog.component.html"
})
export class DeletionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeletionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
