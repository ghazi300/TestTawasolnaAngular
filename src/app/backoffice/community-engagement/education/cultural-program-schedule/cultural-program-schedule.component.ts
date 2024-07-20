import { Component } from '@angular/core';
import dayGridPlugin from "@fullcalendar/daygrid";
import {CalendarOptions, EventInput} from "@fullcalendar/core";
import {MatDialog} from "@angular/material/dialog";
import {AddProgramDialogComponent} from "./add-program-dialog/add-program-dialog.component";
import interactionPlugin, {DateClickArg} from "@fullcalendar/interaction";
import {CulturalProgramService} from "../../../../services/services/cultural-program.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ConfirmdialogComponent} from "./confirmdialog/confirmdialog.component";

@Component({
  selector: 'app-cultural-program-schedule',
  templateUrl: './cultural-program-schedule.component.html',
  styleUrls: ['./cultural-program-schedule.component.scss']
})
export class CulturalProgramScheduleComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    events: [],
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this) // Handle event clicks
  };

  constructor(public dialog: MatDialog, private culturalProgramService: CulturalProgramService,private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.culturalProgramService.getPrograms().subscribe(programs => {
      this.calendarOptions.events = programs.map((program: any) => ({
        id: program.id,
        title: program.name,
        start: program.startDate,
        end: program.endDate
      }));
    });
  }

  handleDateClick(arg: DateClickArg): void {
    this.openAddProgramDialog(arg.dateStr);
  }

  openAddProgramDialog(date: string): void {
    const dialogRef = this.dialog.open(AddProgramDialogComponent, {
      width: '400px',
      data: { date }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newProgram: any = {
          name: result.name,
          description: result.description,
          startDate: result.startDate, // Use full date information
          endDate: result.endDate, // Use full date information
          location: result.location,
          coordinator: result.coordinator
        };


        this.culturalProgramService.addProgram(newProgram).subscribe(() => {
          const eventsArray = this.calendarOptions.events as EventInput[];
          this.calendarOptions.events = [
            ...eventsArray,
            {

              title: result.name,
              start: result.startDate,
              end: result.endDate
            }
          ];
        });
      }
    });
  }
  handleEventClick(arg: any): void {
    this.openConfirmDeleteDialog(arg.event.id);
  }


  openConfirmDeleteDialog(eventId: string): void {
    const dialogRef = this.dialog.open(ConfirmdialogComponent, {
      width: '300px',
      data: { message: 'Are you sure you want to delete this program?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.deleteProgram(eventId);
      }
    });
  }

  deleteProgram(eventId: string): void {
    this.culturalProgramService.deleteProgram(eventId).subscribe(() => {
      const eventsArray = this.calendarOptions.events as EventInput[];
      this.calendarOptions.events = eventsArray.filter(event => event.id !== eventId);
      this.snackBar.open('Program deleted successfully', 'Close', { duration: 3000 });
    });
  }
}
