import { Component } from '@angular/core';
import { Personne } from '../models/personne.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  person: Personne = new Personne('', '', '', '', []);
  editMode: boolean = false;
  backupPerson: Personne = new Personne('', '', '', '', []);

  constructor(private route: ActivatedRoute, private apiSvc: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.apiSvc.getContact(id).subscribe((person: any) => {
        this.person = Personne.fromJSON(person);
        this.backupPerson = { ...this.person };
      });
    });
  }

  enableEditMode(): void {
    this.editMode = true;
  }

  disableEditMode(): void {
    this.person = { ...this.backupPerson };
    this.editMode = false;
  }

  addPropriete(): void {
    this.person.proprietes?.push({ entreprise: '', administration: '' });
  }

  deleteContact(): void {
    this.apiSvc.deleteContact(this.person._id ?? '').subscribe((response) => {
      console.log(response);
      this.router.navigate(['/']);
      alert("Suppression effectuée avec succès !")
    });
  }

  updateContact(): void {
    this.person.proprietes = this.person.proprietes?.filter(prop => prop.entreprise !== '' && prop.administration !== '');
    this.apiSvc.updateContact(this.person).subscribe((response) => {
      console.log(response);
      alert("Mise à jour effectuée avec succès !");
    });
    this.editMode = false;
  }
}
