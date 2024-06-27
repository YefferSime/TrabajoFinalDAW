import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimalService } from '../animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animals: any[] = [];

  constructor(private router: Router, private animalService: AnimalService) { }

  ngOnInit(): void {
    this.obtenerAnimales();
  }

  obtenerAnimales(): void {
    this.animalService.obtenerAnimales().subscribe(data => {
      this.animals = data;
    });
  }

  agregarAnimal(): void {
    this.router.navigate(['/agregar-animal']);
  }

  editarAnimal(id: string): void {
    this.router.navigate(['/editar-animal', id]);
  }

  eliminarAnimal(id: string): void {
    this.animalService.eliminarAnimal(id).subscribe(() => {
      this.obtenerAnimales(); // Actualizar la lista después de eliminar
    });
  }
}
