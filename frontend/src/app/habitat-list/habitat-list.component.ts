import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HabitatService } from '../habitat.service';

@Component({
  selector: 'app-habitat-list',
  templateUrl: './habitat-list.component.html',
  styleUrls: ['./habitat-list.component.css']
})
export class HabitatListComponent implements OnInit {
  habitats: any[] = [];

  constructor(private router: Router, private habitatService: HabitatService) { }

  ngOnInit(): void {
    this.obtenerHabitats();
  }

  obtenerHabitats(): void {
    this.habitatService.obtenerHabitats().subscribe(data => {
      this.habitats = data;
    });
  }

  agregarHabitat(): void {
    this.router.navigate(['/agregar-habitat']);
  }

  editarHabitat(id: string): void {
    this.router.navigate(['/editar-habitat', id]);
  }

  eliminarHabitat(id: string): void {
    this.habitatService.eliminarHabitat(id).subscribe(() => {
      this.obtenerHabitats(); // Actualizar la lista después de eliminar
    });
  }
}
