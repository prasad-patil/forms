import { User, MenuLevel2List } from './../../models/user';
import { USerService } from './../../services/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import { ThemePalette } from '@angular/material';
import { FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {

  @ViewChild(MatAccordion, { read: true, static: false }) accordion: MatAccordion;

  userDetails: User[];
  menuLevel1: any;
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;

  userForm = this.fb.group({
    menuLevel2List: this.fb.group({
      menuLevel3List: this.fb.array([
        this.fb.control('')
      ])
    })
  });
  get menuLevel3List() {
    return this.userForm.get('menuLevel2List').get('menuLevel3List') as FormArray;
  }

  addCheckBox() {
    this.menuLevel3List.push(this.fb.control(''));
  }

  private addCheckboxes(data: any) {
    data.menuLevel2List[0].menuLevel3List.forEach((o, i) => {
      const control = new FormControl(i === 0); // if first item set to true, else false
      this.menuLevel3List.push(this.fb.control(''));
    });
  }

  constructor(private userService: USerService, private fb: FormBuilder) {}

  getUserDetails() {
    this.userService.getUser().subscribe((u: User[]) => {
      this.userDetails = u;
      this.menuLevel1 = u[0];
      this.addCheckboxes(this.menuLevel1);
      console.log(this.userDetails);
    });
  }
  ngOnInit() {
    this.getUserDetails();
  }

}
