import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnimalService } from '../animal.service';
import { HabitatService } from '../habitat.service';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
  styleUrls: ['./animal-form.component.css']
})
export class AnimalFormComponent implements OnInit {
  animalForm: FormGroup;
  habitats: any[] = [];
  animalId: string | null = null;  // Inicializamos animalId

  constructor(
    private fb: FormBuilder,
    private animalService: AnimalService,
    private habitatService: HabitatService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.animalForm = this.fb.group({
      nombre: ['', Validators.required],
      especie: ['', Validators.required],
      sexo: ['', Validators.required],
      habitatId: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadHabitats();
    this.route.params.subscribe(params => {
      this.animalId = params['id'] ? params['id'] : null;  // Verificamos si hay un ID en los parámetros
      if (this.animalId) {
        this.loadAnimal(this.animalId);
      }
    });
  }

  loadHabitats(): void {
    this.habitatService.obtenerHabitats().subscribe(habitats => {
      this.habitats = habitats;
    });
  }

  loadAnimal(id: string): void {
    this.animalService.obtenerAnimalPorId(id).subscribe(animal => {
      this.animalForm.patchValue(animal);
    });
  }

  saveAnimal(): void {
    if (this.animalForm.valid) {
      if (this.animalId) {
        this.animalService.actualizarAnimal(this.animalId, this.animalForm.value).subscribe(() => {
          this.router.navigate(['/animals']);
        });
      } else {
        this.animalService.agregarAnimal(this.animalForm.value).subscribe(() => {
          this.router.navigate(['/animals']);
        });
      }
    }
  }
}
