import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent {
  addPersonForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private router: Router) {
    this.addPersonForm = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      proprietes: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  get proprietes(): FormArray {
    return this.addPersonForm.get('proprietes') as FormArray;
  }

  addFields(): void {
    const fieldGroup = this.fb.group({
      entreprise: [''],
      administration: ['']
    });
    this.proprietes.push(fieldGroup);
  }

  removeFields(index: number): void {
    this.proprietes.removeAt(index);
  }

  onSubmit(): void {
    if (this.addPersonForm.valid) {
      console.log(this.addPersonForm.value);
      this.addPersonForm.value.proprietes = this.addPersonForm.value.proprietes.filter((prop: { entreprise: string; administration: string; }) => prop.entreprise !== '' && prop.administration !== '');
      console.log(this.addPersonForm.value);
      this.apiService.addContact(this.addPersonForm.value).subscribe(
        (response) => {
          console.log(response);
          this.addPersonForm.reset();
          this.router.navigate(['/']);
        }
      );
    }
  }
}
