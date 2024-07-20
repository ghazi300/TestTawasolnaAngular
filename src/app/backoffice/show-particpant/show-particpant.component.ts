import { Component, OnInit } from '@angular/core';
import { Participant } from 'src/app/models/Participant';
import { ParticipantService } from 'src/app/Services/participant.service';
import { AddParticipantComponent } from '../add-participant/add-participant.component';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-show-particpant',
  templateUrl: './show-particpant.component.html',
  styleUrls: ['./show-particpant.component.scss']
})
export class ShowParticpantComponent implements OnInit {
  participants: Participant[] = [];

  constructor(private participantService: ParticipantService , public dialog: MatDialog) { }

  ngOnInit() {
    this.participantService.getAllParticipants().subscribe(
      (data: Participant[]) => {
        this.participants = data;
      },
      (error) => {
        console.error('Error fetching participants', error);
      }
    );
  }

  showAddPartcipantForm() {
    const dialogRef = this.dialog.open(AddParticipantComponent);
  }
}
