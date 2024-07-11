import { Component, OnInit } from '@angular/core';

interface Resource {
  name: string;
  type: string;
  status: string;
  location: string;
}


@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  resources: Resource[] = [
    { name: 'Défibrillateur', type: 'Équipement médical', status: 'Disponible', location: 'Poste de secours principal' },
    { name: 'Trousse de premiers secours', type: 'Équipement médical', status: 'En utilisation', location: 'Ambulance A1' },
    { name: 'Ambulance A1', type: 'Véhicule d\'urgence', status: 'En déplacement', location: 'Route vers l\'hôpital central' },
    { name: 'Camion de pompiers F2', type: 'Véhicule d\'intervention', status: 'Disponible', location: 'Caserne de pompiers, secteur 3' },
    { name: 'Dr. Smith', type: 'Personnel médical', status: 'En service', location: 'Hôpital central' },
    { name: 'Officier de police John Doe', type: 'Personnel de sécurité', status: 'Disponible', location: 'Poste de commandement' },
    { name: 'Eau potable (1000 L)', type: 'Fourniture de secours', status: 'Disponible', location: 'Entrepôt central' },
    { name: 'Nourriture non périssable (200 rations)', type: 'Fourniture de secours', status: 'Disponible', location: 'Centre de distribution' },
    { name: 'Radio VHF', type: 'Équipement de communication', status: 'En utilisation', location: 'Poste de commandement' },
    { name: 'Téléphone satellite', type: 'Équipement de communication', status: 'Disponible', location: 'Centre de crise' }
  ];
  displayedColumns: string[] = ['name', 'type', 'status', 'location'];

  ngOnInit() {}
}