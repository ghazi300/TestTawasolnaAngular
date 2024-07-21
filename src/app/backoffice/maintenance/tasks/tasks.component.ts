import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/service/task.service';
import { ConfirmDialogComponent } from '../variables/popup/popup.component';

// Define the MaintenanceTask model
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


export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}
@Component({
  selector: 'app-task',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TaskComponent implements OnInit {
  tasks: MaintenanceTask[] = [];
  searchTerm: string = '';
  filteredTasks: MaintenanceTask[] = [];
  focus = false;
  priorities = Object.values(Priority);
  statusOptions = Object.values(TaskStatus);
  selectedPriority: Priority | '' = ''; // New property for priority filtering

  descriptionSearchTerm = ''; // Search input for description
  prioritySearchTerm = ''; // Search input for priority
  
  constructor(
    private taskService: TaskService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllTasks();
  }

  refresh() {
    this.getAllTasks();

  }

  getSequentialId(index: number): number {
    return index + 1;
  }
  getPriorityClass(priority: Priority): string {
    switch (priority) {
      case Priority.LOW:
        return 'text-success'; // Bootstrap success color (green)
      case Priority.MEDIUM:
        return 'text-warning'; // Bootstrap warning color (yellow)
      case Priority.HIGH:
        return 'text-orange'; // Custom color for high priority
      case Priority.URGENT:
        return 'text-danger'; // Bootstrap danger color (red)
      default:
        return '';
    }
  }


  search() {
    
this.filteredTasks= this.tasks.filter(task =>
  task.priority.toLowerCase().includes(this.searchTerm.toLowerCase())
);


  }
  
  getStatusClass(status: TaskStatus): string {
    switch (status) {
      case TaskStatus.PENDING:
        return 'text-warning'; // Bootstrap warning color (yellow)
      case TaskStatus.IN_PROGRESS:
        return 'text-primary'; // Bootstrap primary color (blue)
      case TaskStatus.COMPLETED:
        return 'text-success'; // Bootstrap success color (green)
      case TaskStatus.CANCELED:
        return 'text-danger'; // Bootstrap danger color (red)
      default:
        return '';
    }
  }

  getAllTasks() {
    this.taskService.getAllTasks().subscribe(
      (data: any) => {
        this.tasks = data;
        this.filteredTasks = this.tasks; // Initialize filteredTasks with all tasks
        console.log('Tâches chargées :', this.tasks); // Vérifiez les données initiales
      },
      (error) => {
        console.error('Erreur lors du chargement des tâches : ', error);
      }
    );
  }
  

  openDialog(): void {
    const defaultTask: MaintenanceTask = {
      id: null,
      description: '',
      priority: Priority.LOW,
      createdAt: new Date(),
      comments: '',
      taskStatus: TaskStatus.PENDING
    };

    const dialogRef = this.dialog.open(TaskDialog, {
      width: '500px',
      data: defaultTask,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refresh();
      }
    });
  }

  openEditDialog(task: MaintenanceTask): void {
    const dialogRef = this.dialog.open(TaskEditDialog, {
      width: '500px',
      data: task,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.id) {
        this.taskService.updateTask(result.id, result).subscribe(
          (res: any) => {
            console.log('Update successful:', res);
            this.refresh();
          },
          (error) => {
            console.error('Error updating task: ', error);
          }
        );
      }
    });
  }

  deleteTask(id: string): void {
    const confirmDelete = confirm('Are you sure you want to delete this task?');

    if (confirmDelete) {
      this.taskService.deleteTask(id).subscribe(
        (res: any) => {
          console.log('Delete successful:', res);
          this.refresh();
        },
        (error) => {
          console.error('Error deleting task: ', error);
        }
      );
    }
  }
}

@Component({
  selector: 'app-task-dialog',
  templateUrl: 'tasks-dialog.html',
})
export class TaskDialog implements OnInit {
  taskForm!: FormGroup;
  priorities = Object.values(Priority);
  statusOptions = Object.values(TaskStatus);
  constructor(
    public dialogRef: MatDialogRef<TaskDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MaintenanceTask,
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      description: [this.data?.description || '', Validators.required],
      priority: [this.data?.priority || Priority.LOW, Validators.required],
      createdAt: [this.data?.createdAt || new Date(), Validators.required],
      comments: [this.data?.comments || '', Validators.required],
      taskStatus: [this.data?.taskStatus || TaskStatus.PENDING, Validators.required],
    });
  }
  submit(): void {
    if (this.taskForm.invalid) {
      console.error('Form is invalid');
      return;
    }
  
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm addition',
        message: 'Are you sure you want to add this task?',
        confirmText: 'Confirm',
        confirmColor: 'primary',
      },
    });
  
    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const task: MaintenanceTask = {
          id: null,
          description: this.taskForm.value.description,
          priority: this.taskForm.value.priority,
          createdAt: this.taskForm.value.createdAt,
          comments: this.taskForm.value.comments,
          taskStatus: this.taskForm.value.taskStatus as TaskStatus, // Ensure correct type
        };
  
        console.log('Creating task:', task); // Check task values here
  
        this.taskService.createTask(task).subscribe(
          (response) => {
            console.log('Task created successfully:', response);
            this.dialogRef.close();
          },
          (error) => {
            console.error('Error creating task:', error);
          }
        );
      }
    });
  }
  
  

  onCancel(): void {
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-task-edit-dialog',
  templateUrl: 'tasks-edit-dialog.html',
})
export class TaskEditDialog implements OnInit {
  taskForm!: FormGroup;
  priorities = Object.values(Priority);
  statusOptions = Object.values(TaskStatus);
  constructor(
    public dialogRef: MatDialogRef<TaskEditDialog>,
    @Inject(MAT_DIALOG_DATA) public data: MaintenanceTask,
    private formBuilder: FormBuilder,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.taskForm = this.formBuilder.group({
      id: [this.data.id, Validators.required],
      description: [this.data.description, Validators.required],
      priority: [this.data.priority, Validators.required],
      createdAt: [this.data.createdAt, Validators.required],
      comments: [this.data.comments, Validators.required],
      taskStatus: [this.data.taskStatus, Validators.required],
    });
  }

  submitEdit(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm modification',
        message: 'Are you sure you want to modify this task?',
        confirmText: 'Confirm',
        confirmColor: 'primary',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const updatedTask: MaintenanceTask = {
          id: this.data.id,
          description: this.taskForm.value.description,
          priority: this.taskForm.value.priority,
          createdAt: this.taskForm.value.createdAt,
          comments: this.taskForm.value.comments,
          taskStatus: this.taskForm.value.taskStatus,
        };

        this.dialogRef.close(updatedTask);
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
