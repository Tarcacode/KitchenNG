import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  templateUrl: './recipe-category.component.html',
})
export class RecipeCategoryComponent {
  displayDetail: boolean = true;
  displayEdit: boolean = false;

  constructor(private _location: Location) {}

  toggleEdit(): void {
    this.displayDetail = !this.displayDetail;
    this.displayEdit = !this.displayEdit;
  }

  backClicked() {
    this._location.back();
  }
}
