import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {
  private apiUrl = 'http://localhost:3000/api/habitats';

  constructor(private http: HttpClient) { }

  obtenerHabitats(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  obtenerHabitatPorId(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  agregarHabitat(habitat: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, habitat);
  }

  actualizarHabitat(id: string, habitat: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, habitat);
  }

  eliminarHabitat(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
