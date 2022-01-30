import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Ticket
  openTicketDate!: Date;
  openTicketTime!: Time;
  closedTicketDate!: Date;
  closedTicketTime!: Time;

  // User
  userFirstName: string = '';
  userLastName: string = '';
  userPhone1:  string = '' ;
  userPhone2:  string = '' ;

  // Technician
  technicianFirstName: string = '';
  technicianLastName: string = '';
  technicianPhone1:  string = '' ;
  technicianPhone2:  string = '' ;


  clickCounter: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }


  clearAllFields() {
    console.log("clearAllFields");
  }

  countClick() {
    this.clickCounter += 1;
  }

}
