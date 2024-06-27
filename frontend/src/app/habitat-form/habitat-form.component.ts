import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HabitatService } from '../habitat.service';

@Component({
  selector: 'app-habitat-form',
  templateUrl: './habitat-form.component.html',
  styleUrls: ['./habitat-form.component.css']
})
export class HabitatFormComponent implements OnInit {
  habitatForm: FormGroup;
  habitatId: string | undefined;

  constructor(
    private fb: FormBuilder,
    private habitatService: HabitatService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.habitatForm = this.fb.group({
      nombre: ['', Validators.required],
      ubicacion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.habitatId = params['id'];
      if (this.habitatId) {
        this.loadHabitat(this.habitatId);
      }
    });
  }

  loadHabitat(id: string): void {
    this.habitatService.obtenerHabitatPorId(id).subscribe(habitat => {
      this.habitatForm.patchValue(habitat);
    });
  }

  saveHabitat(): void {
    if (this.habitatForm.valid) {
      if (this.habitatId) {
        this.habitatService.actualizarHabitat(this.habitatId, this.habitatForm.value).subscribe(() => {
          this.router.navigate(['/habitats']);
        });
      } else {
        this.habitatService.agregarHabitat(this.habitatForm.value).subscribe(() => {
          this.router.navigate(['/habitats']);
        });
      }
    }
  }
}
