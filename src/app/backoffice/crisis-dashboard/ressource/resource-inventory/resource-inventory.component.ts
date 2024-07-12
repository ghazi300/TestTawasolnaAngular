import { Component, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/service/resource.service'; // Adjust the path as needed

@Component({
  selector: 'app-resource-inventory',
  templateUrl: './resource-inventory.component.html',
  styleUrls: ['./resource-inventory.component.scss']
})
export class ResourceInventoryComponent implements OnInit {
  resources: any[] = [];
  isAddResourceFormVisible = false;

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.loadResources();
  }

  loadResources() {
    this.resourceService.getResources().subscribe(
      (data) => {
        this.resources = data;
      },
      (error) => {
        console.error('Error loading resources:', error);
      }
    );
  }

  showAddResourceForm() {
    this.isAddResourceFormVisible = true;
  }

  hideAddResourceForm() {
    this.isAddResourceFormVisible = false;
  }

  onResourceAdded(resource: any) {
    this.resources.push(resource); // Add the new resource to the list
    this.hideAddResourceForm();
  }
}
