import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { AssignedTaskService } from 'src/app/service/assignedTask.Service';
import { Technicienservice } from 'src/app/service/technicien.service';
import { TaskService } from 'src/app/service/task.service';
import { ConfirmDialogComponent } from '../variables/popup/popup.component';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

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



export interface MaintenanceTask {
  id: string | null;
  description: string;
  priority: Priority;
  createdAt: Date;
  comments: string;
  taskStatus: TaskStatus;
  assignedTaskId?: string | null; // Nouvelle propriété optionnelle

}

export enum TaskStatus {
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}


// Define Priority in a common location
export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT'
}


export interface AssignedTask {
  id: string | null;
  maintenanceTaskId: string;
  technicienId: string[];
  taskStatus: TaskStatus;
  dateDebut: Date;
  dateFin: Date;
  equipements: string[];
}


@Component({
  selector: 'app-assignedTask',
  templateUrl: './assigned-Task.component.html',
  styleUrls: ['./assigned-Task.component.scss']
})
export class AssignedTaskComponent implements OnInit {
  assignedTasks: AssignedTask[] = [];
  techniciens: Technicien[] = [];
  tasks: MaintenanceTask[] = [];
  searchTerm: string = '';
  filteredAssignedTasks: AssignedTask[] = [];
  displayedColumns: string[] = ['id', 'description', 'techniciens', 'taskStatus', 'dateDebut', 'dateFin', 'equipements'];

  constructor(
    private assignedTaskService: AssignedTaskService,
    private technicienService: Technicienservice,
    private taskService: TaskService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllAssignedTasks();
    this.getAllTechniciens();
    this.loadAssignedTasks();
    this.loadTasks();
    this.loadTechniciens();
    if (!this.assignedTasks) {
      this.assignedTasks = [];
    }
  }

  refresh() {
    this.getAllAssignedTasks();
  }

  getAllAssignedTasks() {
    this.assignedTaskService.getAllAssignedTasks().subscribe(
      (data: AssignedTask[]) => {
        this.assignedTasks = data;
        this.filteredAssignedTasks = this.assignedTasks;
      },
      (error) => {
        console.error('Error loading assigned tasks: ', error);
      }
    );
  }
  downloadExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.assignedTasks.map(task => ({
      'ID': task.id,
      'Task Description': this.getTaskDescription(task.maintenanceTaskId),
      'Technicians': this.getTechnicienNames(task.technicienId).join(', '),
      'Status': task.taskStatus,
      'Start Date': task.dateDebut,
      'End Date': task.dateFin,
      'Equipments': task.equipements ? task.equipements.join(', ') : ''
    })));
    const workbook: XLSX.WorkBook = { Sheets: { 'AssignedTasks': worksheet }, SheetNames: ['AssignedTasks'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'assigned_tasks');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + EXCEL_EXTENSION);
  }

  getAllTechniciens() {
    this.technicienService.getAllTechniciens().subscribe(
      (data: Technicien[]) => {
        this.techniciens = data;
      },
      (error) => {
        console.error('Error loading techniciens: ', error);
      }
    );
  }
  loadAssignedTasks(): void {
    this.assignedTaskService.getAllAssignedTasks().subscribe(
      (data: AssignedTask[]) => {
        this.assignedTasks = data;
      },
      (error) => {
        console.error('Error loading assigned tasks: ', error);
      }
    );
  }

  loadTasks(): void {
    this.taskService.getAllTasks().subscribe(
      (data: MaintenanceTask[]) => {
        this.tasks = data.filter(task => !task.assignedTaskId); // Filtrer les tâches non assignées
      },
      (error) => {
        console.error('Error loading tasks: ', error);
      }
    );
  }
  

  loadTechniciens(): void {
    this.technicienService.getAllTechniciens().subscribe(
      (data: Technicien[]) => {
        this.techniciens = data;
      },
      (error) => {
        console.error('Error loading techniciens: ', error);
      }
    );
  }

  getTaskDescription(taskId: string): string {
    const task = this.tasks.find(t => t.id === taskId);
    return task ? task.description : 'Unknown';
  }

  getTechnicienNames(technicienIds: string[]): string[] {
    return technicienIds.map(id => {
      const technicien = this.techniciens.find(t => t.id === id);
      return technicien ? technicien.name : 'Unknown';
    });
  }
  getAllTasks() {
    this.taskService.getAllTasks().subscribe(
      (data: MaintenanceTask[]) => {
        this.tasks = data;
      },
      (error) => {
        console.error('Error loading tasks: ', error);
      }
    );
  }

  openDialog(): void {
    const defaultAssignedTask: AssignedTask = {
      id: null,
      maintenanceTaskId: '',
      technicienId: [],
      taskStatus: TaskStatus.PENDING,
      dateDebut: new Date(),
      dateFin: new Date(),
      equipements: []
    };

    const dialogRef = this.dialog.open(AssignedTaskDialog, {
      width: '500px',
      data: {
        assignedTask: defaultAssignedTask,
        techniciens: this.techniciens,
        tasks: this.tasks
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refresh();
      }
    });
  }

  deleteAssignedTask(id: string): void {
    const confirmDelete = confirm('Are you sure you want to delete this assigned task?');

    if (confirmDelete) {
      this.assignedTaskService.deleteAssignedTask(id).subscribe(
        (res) => {
          this.refresh();
        },
        (error) => {
          console.error('Error deleting assigned task: ', error);
        }
      );
    }
  }
}

@Component({
  selector: 'app-assigned-task-dialog',
  templateUrl: 'assigned-task-dialog.html',
})
export class AssignedTaskDialog implements OnInit {
  assignedTaskForm!: FormGroup;
  techniciens: Technicien[] = [];
  tasks: MaintenanceTask[] = [];
  assignedTasks: AssignedTask[] = []; // Add this property
  periodConflict: boolean = false;
  taskStatuses: TaskStatus[] = []; // Add this line

  constructor(
    public dialogRef: MatDialogRef<AssignedTaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: { 
      assignedTask: AssignedTask, 
      techniciens: Technicien[], 
      tasks: MaintenanceTask[],
      assignedTasks: AssignedTask[] // Update this line to include assignedTasks
    },
    private formBuilder: FormBuilder,
    private assignedTaskService: AssignedTaskService,
    private technicienService: Technicienservice,
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.tasks = this.data.tasks;
    this.techniciens = this.data.techniciens;
    this.assignedTasks = this.data.assignedTasks || []; // Ensure it is initialized
    this.taskStatuses = Object.values(TaskStatus);

    this.assignedTaskForm = this.formBuilder.group({
      description: [this.data.assignedTask?.maintenanceTaskId || '', Validators.required],
      technicienNames: [this.data.assignedTask?.technicienId || [], Validators.required],
      taskStatus: [this.data.assignedTask?.taskStatus || '', Validators.required],
      dateDebut: [this.data.assignedTask?.dateDebut || '', Validators.required],
      dateFin: [this.data.assignedTask?.dateFin || '', Validators.required],
      equipements: [this.data.assignedTask?.equipements || [], Validators.required],
      
    });
    
  }


  displayFormErrors(): void {
    Object.keys(this.assignedTaskForm.controls).forEach(key => {
      const controlErrors = this.assignedTaskForm.get(key)?.errors;
      if (controlErrors) {
        console.error(`Control: ${key}, Errors: `, controlErrors);
      }
    });
  }

  validatePeriod(): boolean {
    const dateDebut = this.assignedTaskForm.value.dateDebut;
    const dateFin = this.assignedTaskForm.value.dateFin;
    const selectedTechnicienNames = this.assignedTaskForm.value.technicienNames;
    const selectedTechniciens = this.techniciens.filter(tech => selectedTechnicienNames.includes(tech.name));
  
    if (!this.assignedTasks) {
      console.error('assignedTasks is not initialized.');
      return false;
    }
  
    for (let technicien of selectedTechniciens) {
      for (let taskId of technicien.assignedTaskId || []) {
        const task = this.assignedTasks.find(t => t.id === taskId);
        if (task && (
          (dateDebut >= task.dateDebut && dateDebut <= task.dateFin) ||
          (dateFin >= task.dateDebut && dateFin <= task.dateFin) ||
          (dateDebut <= task.dateDebut && dateFin >= task.dateFin)
        )) {
          return false; // Conflict found
        }
      }
    }
    return true; // No conflict
  }
  
  

  submit(): void {
    if (this.assignedTaskForm.invalid) {
      console.warn('Form is invalid');
      this.displayFormErrors();
      return;
    }

    if (!this.validatePeriod()) {
      this.periodConflict = true;
      return;
    }

    this.periodConflict = false;

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm addition',
        message: 'Are you sure you want to add this assigned task?',
        confirmText: 'Confirm',
        confirmColor: 'primary',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const selectedTask = this.tasks.find(task => task.description === this.assignedTaskForm.value.description);
        const selectedTechnicienNames = this.assignedTaskForm.value.technicienNames;
        const selectedTechniciens = this.techniciens.filter(tech => selectedTechnicienNames.includes(tech.name));

        if (!selectedTask) {
          console.error('Selected task not found.');
          return;
        }

        const newAssignedTask: AssignedTask = {
          id: null,
          maintenanceTaskId: selectedTask.id!,
          technicienId: selectedTechniciens.map(tech => tech.id!),
          taskStatus: this.assignedTaskForm.value.taskStatus,
          dateDebut: this.assignedTaskForm.value.dateDebut,
          dateFin: this.assignedTaskForm.value.dateFin,
          equipements: this.assignedTaskForm.value.equipements,
        };

        this.assignedTaskService.createAssignedTask(newAssignedTask).subscribe(
          (createdAssignedTask: AssignedTask) => {
            selectedTask.assignedTaskId = createdAssignedTask.id!;
            selectedTask.taskStatus = TaskStatus.IN_PROGRESS;
            this.taskService.updateTask(selectedTask.id!, selectedTask).subscribe(
              () => console.log(`Task ${selectedTask.id} status updated to IN_PROGRESS`),
              (error) => console.error('Error updating task status: ', error)
            );

            selectedTechniciens.forEach(technicien => {
              technicien.assignedTaskId = [...(technicien.assignedTaskId || []), createdAssignedTask.id!];
              technicien.status = 'Inactive';
              this.technicienService.updateTechnicien(technicien.id!, technicien).subscribe(
                () => console.log(`Technicien ${technicien.name} updated with assignedTaskId ${createdAssignedTask.id} and status Inactive`),
                (error) => console.error('Error updating technicien: ', error)
              );
            });

            this.dialogRef.close();
          },
          (error) => {
            console.error('Error creating assigned task: ', error);
          }
        );
      }
    });
  }

  deleteAssignedTask(id: string): void {
    const confirmDelete = confirm('Are you sure you want to delete this assigned task?');

    if (confirmDelete) {
      const assignedTechniciens = this.techniciens.filter(tech => tech.assignedTaskId?.includes(id));

      this.assignedTaskService.deleteAssignedTask(id).subscribe(
        () => {
          assignedTechniciens.forEach(technicien => {
            technicien.assignedTaskId = technicien.assignedTaskId?.filter(taskId => taskId !== id) || [];
            this.technicienService.updateTechnicien(technicien.id!, technicien).subscribe(
              () => console.log(`Technicien ${technicien.name} updated, removed assignedTaskId`),
              (error) => console.error('Error updating technicien: ', error)
            );
          });
        },
        (error) => {
          console.error('Error deleting assigned task: ', error);
        }
      );
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
