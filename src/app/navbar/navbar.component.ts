import { Component, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  showFiller: boolean = false;
}
