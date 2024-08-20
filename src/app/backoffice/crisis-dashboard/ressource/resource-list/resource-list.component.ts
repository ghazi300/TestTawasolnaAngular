import { Component, Input, OnInit } from '@angular/core';
import { ResourceService } from 'src/app/service/resource.service';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.scss']
})
export class ResourceListComponent implements OnInit {
  @Input() resources: any[] = [];
  displayedColumns: string[] = ['name', 'type', 'availability'];

  constructor(private resourceService: ResourceService) {}

  ngOnInit() {
    this.loadResources();
  }

  loadResources(): void {
    this.resourceService.getResources().subscribe(
      (data: any[]) => {
        this.resources = data;
      },
      (error) => {
        console.error('Error fetching resources:', error);
      }
    );
  }
}
