import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Personne } from './models/personne.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  getContacts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/contacts`)
      .pipe(
        catchError(this.handleError<any[]>('getContacts', []))
      );
  }

  getContact(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/contact/${id}`)
      .pipe(
        catchError(this.handleError<any>(`getContact id=${id}`))
      );
  }

  addContact(contact: Personne): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/contact`, contact, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('addContact'))
      );
  }

  updateContact(contact: Personne): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/contact/${contact._id}`, contact, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('updateContact'))
      );
  }

  deleteContact(id: string): Observable<any> {
    console.log("ID de la personne à supprimer :", id);
    return this.http.delete<any>(`${this.apiUrl}/contact/${id}`, this.httpOptions)
      .pipe(
        catchError(this.handleError<any>('deleteContact'))
      );
  }

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      return of(result as T);
    };
  }
}
