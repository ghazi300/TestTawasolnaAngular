import { Component } from '@angular/core';

@Component({
  selector: 'app-resource-inventory',
  templateUrl: './resource-inventory.component.html',
  styleUrls: ['./resource-inventory.component.scss']
})
export class ResourceInventoryComponent {
  isAddResourceFormVisible = false;

  showAddResourceForm() {
    this.isAddResourceFormVisible = true;
  }

  hideAddResourceForm() {
    this.isAddResourceFormVisible = false;
  }

  onResourceAdded(resource: any) {
    // Logic to handle the newly added resource
    console.log('Resource added:', resource);
    this.hideAddResourceForm();
  }
}
