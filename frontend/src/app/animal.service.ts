import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {
  private apiUrl = 'http://localhost:3000/api/animals';

  constructor(private http: HttpClient) { }

  obtenerAnimales(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerAnimalPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  agregarAnimal(animal: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, animal);
  }

  actualizarAnimal(id: string, animal: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, animal);
  }

  eliminarAnimal(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
