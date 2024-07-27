import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Technicienservice } from 'src/app/service/technicien.service';

export interface Technicien {
  id: string | null;
  name: string;
  role: Role;
  contactInfo: string;
  yearsOfExperience: string;
  certification: string;
  status: string;
  assignedTaskId?: string[]; // Nouvelle propriété sous forme de tableau de chaînes de caractères
}


export enum Role {
  Electricien = 'Electricien',
  Other = 'Other',
  Plombier = 'Plombier',
  // Ajoutez d'autres rôles selon vos besoins
}




@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
  techniciens: Technicien[] = [];
  filteredTechniciens: Technicien[] = [];
  selectedRole: string = '';
  roles = Object.values(Role); // Populate roles dropdown
  technicienCount: number = 0;

  dateControl = new FormControl();

  constructor(private technicienService: Technicienservice) {}

  ngOnInit(): void {
    this.getAllTechniciens(); // Correctly call the method
  }

  getAllTechniciens() {
    this.technicienService.getAllTechniciens().subscribe(
      (data: Technicien[]) => {
        console.log('Data received from API:', data); // Log data received from API

        this.techniciens = data;
        this.filteredTechniciens = this.techniciens;
        this.technicienCount = this.filteredTechniciens.length; // Update the count here

        console.log('Technicien Count:', this.technicienCount); // Log the count
      },
      (error) => {
        console.error('Error loading techniciens: ', error);
      }
    );
  }
}
