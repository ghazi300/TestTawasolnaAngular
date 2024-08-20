import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import { IncidentService } from 'src/app/service/incident.service';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private map!: L.Map;

  constructor(private incidentService: IncidentService, private resourceService: ResourceService) {}

  ngOnInit(): void {
    this.initMap();
    this.loadIncidents();
    this.loadResources();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [36.8065, 10.1815], // Centre par défaut, ajustez selon vos besoins
      zoom: 8
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap'
    }).addTo(this.map);
  }

  private loadIncidents(): void {
    const markers = L.markerClusterGroup();

    this.incidentService.getIncidents().subscribe((incidents: any) => {
      incidents.forEach((incident: any) => {
        const marker = L.marker([incident.location[0], incident.location[1]], { icon: this.getIncidentIcon() });
        marker.bindPopup(`<b>${incident.title}</b><br>${incident.description}`);
        markers.addLayer(marker);
      });

      this.map.addLayer(markers);
    });
  }

  private loadResources(): void {
    const markers = L.markerClusterGroup();

    this.resourceService.getResources().subscribe((resources: any) => {
      resources.forEach((resource: any) => {
        const marker = L.marker([resource.location[0], resource.location[1]], { icon: this.getResourceIcon() });
        marker.bindPopup(`<b>${resource.name}</b><br>Type: ${resource.type}`);
        markers.addLayer(marker);
      });

      this.map.addLayer(markers);
    });
  }

  private getIncidentIcon(): L.Icon {
    return L.icon({
      iconUrl: 'assets/incident-icon.png', // Chemin vers votre icône d'incident
      iconSize: [30, 30], // Taille ajustée pour correspondre à la légende
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  }

  private getResourceIcon(): L.Icon {
    return L.icon({
      iconUrl: 'assets/resource-icon.png', // Chemin vers votre icône de ressource
      iconSize: [30, 30], // Taille ajustée pour correspondre à la légende
      iconAnchor: [15, 30],
      popupAnchor: [0, -30],
    });
  }
}
