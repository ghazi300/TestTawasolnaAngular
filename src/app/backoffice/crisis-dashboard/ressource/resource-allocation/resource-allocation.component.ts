import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.css']
})
export class ResourceAllocationComponent {
  incidents = [
    { id: 1, name: 'Incident 1' },
    { id: 2, name: 'Incident 2' },
    { id: 3, name: 'Incident 3' },
  ];

  resources = [
    { name: 'Resource 1', type: 'Type A', status: 'Available' },
    { name: 'Resource 2', type: 'Type B', status: 'Unavailable' },
    { name: 'Resource 3', type: 'Type A', status: 'Available' },
  ];

  displayedColumns: string[] = ['name', 'type', 'status', 'select'];

  selectedIncident: number | null = null;

  selectResource(resource: any) {
    console.log('Selected Resource:', resource);
  }

  submitAllocation() {
    console.log('Allocation Submitted');
  }
}
