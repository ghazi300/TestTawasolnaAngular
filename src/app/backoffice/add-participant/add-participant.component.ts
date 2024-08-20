// src/app/add-participant/add-participant.component.ts
import { Component } from '@angular/core';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/Services/participant.service';
@Component({
  selector: 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss']
})
export class AddParticipantComponent {
  participant: Participant = {
    name: '',
    age: 0,
    email: '',
    phone: '',
    address: '',
    specialNeeds: '',
    attended: false
  };

  constructor(private participantService: ParticipantService) {}

  onSubmit() {
    this.participantService.createParticipant(this.participant).subscribe(
      response => {
        console.log('Participant added successfully', response);
        // Reset the form or navigate away
      },
      error => {
        console.error('Error adding participant', error);
      }
    );
  }
}
