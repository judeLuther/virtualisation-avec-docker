import { Component, OnInit } from '@angular/core';
import { Personne } from '../models/personne.model';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  contactsAll: Personne[] = [];
  contacts: Personne[] = [];
  filterForm: FormGroup;

  constructor(private api: ApiService, private fb: FormBuilder) {
    this.filterForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      entrprise: [''],
      administration: ['']
    });
    this.getContacts();
  }

  ngOnInit() {
    this.initFilterForm();
    this.getContacts();
  }

  initFilterForm() {
    this.filterForm = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      entrprise: [''],
      administration: ['']
    });
  }

  applyFilter() {
    const nonEmptyFields = this.getNonEmptyFields();
    console.log(nonEmptyFields);
    console.log(this.contactsAll);
    this.contacts = this.contactsAll.filter(person => {
      return Object.keys(nonEmptyFields).every(key => {
        const value = nonEmptyFields[key]?.toLowerCase();
        if (key === 'entreprise') {
          return person.proprietes?.some(p => p.entreprise.toLowerCase().includes(value));
        }
        if (key === 'administration') {
          return person.proprietes?.some(p => p.administration.toLowerCase().includes(value));
        }
        if (this.getValue(key, person) !== '') {
          return this.getValue(key, person).toLowerCase().includes(value);
        }
        return false;
      });
    });
    console.log('fin');
  }

  getNonEmptyFields(): { [key: string]: string } {
    const values = this.filterForm.value;
    return Object.keys(values)
      .filter(key => values[key]?.trim() !== '')
      .reduce((acc, key) => ({ ...acc, [key]: values[key] }), {});
  }

  clearFilter() {
    this.initFilterForm();
    this.contacts = JSON.parse(JSON.stringify(this.contactsAll));
  }


  getContacts() {
    this.api.getContacts().subscribe(contacts => {
      this.contactsAll = contacts
      this.contacts = JSON.parse(JSON.stringify(this.contactsAll));
      console.log(this.contactsAll);
      console.log(this.contacts);
    });
  }

  public getValue(key: string, personne: Personne): string {
    if (key === 'nom') {
      return personne.nom;
    } else if (key === 'prenom') {
      return personne.prenom;
    } else if (key === 'email') {
      return personne.email;
    }
    return '';
  }
}
