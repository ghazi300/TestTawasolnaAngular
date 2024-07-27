import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { Technicienservice } from 'src/app/service/technicien.service';
import { ConfirmDialogComponent } from '../variables/popup/popup.component';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';


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
  selector: 'app-technicien',
  templateUrl: './technicien.component.html',
  styleUrls: ['./technicien.component.scss']
})
export class TechnicienComponent {

  techniciens: Technicien[]= []; ;
  searchTerm: string = '';
  filteredTechniciens: Technicien[]= []; ;
  focus = false;
  selectedRole: string = '';
  roles = Object.values(Role); // Populate roles dropdown
  selectedAttribute: keyof Technicien = 'name'; // Utilisation de keyof pour garantir que l'attribut est valide
  selectedAttributeLabel: string = '';
  attributes: (keyof Technicien)[] = ['name', 'role', 'contactInfo', 'yearsOfExperience', 'certification', 'status']; // Liste des attributs disponibles




  constructor(
    private technicienService: Technicienservice,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAllTechniciens();
  }

  refresh() {
    this.getAllTechniciens();
  }

 

  getAllTechniciens() {
    this.technicienService.getAllTechniciens().subscribe(
      (data: any) => {
        this.techniciens = data;
        this.filteredTechniciens = this.techniciens;
      },
      (error) => {
        console.error('Error loading techniciens: ', error);
      }
    );
  }
  
  filterByAttribute(attribute: keyof Technicien, term: string) {
    term = term.toLowerCase();
    this.filteredTechniciens = this.techniciens.filter(technicien => 
      (technicien[attribute]?.toString().toLowerCase().includes(term) || term === '')
    );
  }
  

  search() {
    this.filterByAttribute(this.selectedAttribute, this.searchTerm);
  }
  
  getSequentialId(index: number): number {
    return index + 1;
  }
  openDialog(): void {
    const defaultTechnicien: Technicien = {
      id: null,
      name: '',
      role: Role.Electricien,
      status: '',
      contactInfo: '',
      yearsOfExperience: '',

      certification: '',
    };

    const dialogRef = this.dialog.open(TechnicienDialog, {
      width: '500px',
      data: defaultTechnicien,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.refresh();
    });
  }
  openEditDialog(
    id: string | null,  // Ensured id can be null
    name: string,
    role: Role,
    contactInfo: string,
    certification: string,
    yearsOfExperience: string,

    status: string
  ): void {
    const defaultTechnicien: Technicien = {
      id: id,
      name: name,
      role: role,
      contactInfo: contactInfo,
      certification: certification,
      status: status,
      yearsOfExperience:yearsOfExperience,
    };

    const dialogRef = this.dialog.open(TechnicienEditDialog, {
      width: '500px',
      data: defaultTechnicien,
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.id) {
        this.technicienService.updateTechnicien(result.id, result).subscribe(
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
  deleteTechnicien(id: string): void {
    const confirmDelete = confirm('Are you sure you want to delete this technicien?');

    if (confirmDelete) {
      this.technicienService.deleteTechnicien(id).subscribe(
        (res: any) => {
          console.log('Delete successful:', res);
          this.refresh();
        },
        (error) => {
          console.error('Error deleting technicien: ', error);
        }
      );
    }
  }
}
@Component({
  selector: 'app-technicien-dialog',
  templateUrl: 'technicien-dialog.html',
})
export class TechnicienDialog implements OnInit {
  technicienForm!: FormGroup;  // Added non-null assertion operator to indicate it will be definitely assigned
  roles = Object.values(Role);
  statuses = ['Active', 'Inactive']; // Ajoutez les statuts appropriés
  constructor(
    public dialogRef: MatDialogRef<TechnicienDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Technicien,
    private formBuilder: FormBuilder,
    private technicienService: Technicienservice,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.technicienForm = this.formBuilder.group({
      name: [this.data?.name || '', Validators.required],
      role: [this.data?.role || '', Validators.required],
      contactInfo: [this.data?.contactInfo || '', Validators.required],
      certification: [this.data?.certification || '', Validators.required],
      status: [this.data?.status || '', Validators.required],
      yearsOfExperience: [this.data?.yearsOfExperience || '', Validators.required],

    });
  }

  submit(): void {
    if (this.technicienForm.invalid) {
      return;
    }

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm addition',
        message: 'Are you sure you want to add this technicien?',
        confirmText: 'Confirm',
        confirmColor: 'primary',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const Technicien: Technicien = {
          id: this.data.id,
          name: this.technicienForm.value.name,
          role: this.technicienForm.value.role,
          contactInfo: this.technicienForm.value.contactInfo,
          certification: this.technicienForm.value.certification,
          status: this.technicienForm.value.status,
          yearsOfExperience: this.technicienForm.value.yearsOfExperience,

        };

        this.technicienService.createTechnicien(Technicien).subscribe((res: any) => {
          this.dialogRef.close();
        });
      }
    });
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
@Component({
  selector: 'app-technicien-edit-dialog',
  templateUrl: 'technicien-edit-dialog.html',
})
export class TechnicienEditDialog implements OnInit {
  technicienForm!: FormGroup;  // Added non-null assertion operator to indicate it will be definitely assigned
  roles = Object.values(Role);
  statuses = ['Active', 'Inactive']; // Ajoutez les statuts appropriés
  constructor(
    public dialogRef: MatDialogRef<TechnicienDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Technicien,
    private formBuilder: FormBuilder,
    private technicienService: Technicienservice,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.technicienForm = this.formBuilder.group({
      name: [this.data?.name || '', Validators.required],
      role: [this.data?.role || '', Validators.required],
      contactInfo: [this.data?.contactInfo || '', Validators.required],
      certification: [this.data?.certification || '', Validators.required],
      status: [this.data?.status || '', Validators.required],
      yearsOfExperience: [this.data?.yearsOfExperience || '', Validators.required],

    });
  }


  submitEdit(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        title: 'Confirm modification',
        message: 'Are you sure you want to modify this technicien?',
        confirmText: 'Confirm',
        confirmColor: 'primary',
      },
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        const updatedTechnicien: Technicien = {
          id: this.data.id,
          name: this.technicienForm.value.name,
          role: this.technicienForm.value.role,
          contactInfo: this.technicienForm.value.contactInfo,
          certification: this.technicienForm.value.certification,
          status: this.technicienForm.value.status,
          yearsOfExperience: this.technicienForm.value.yearsOfExperience,

        };

        this.dialogRef.close(updatedTechnicien);
      }
    });
  }


  onCancel(): void {
    this.dialogRef.close();
  }
}

