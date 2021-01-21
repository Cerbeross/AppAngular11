import { Component, OnInit } from '@angular/core';
import { Ejercicio } from '../ejercicio';
import {EjercicioService} from '../ejercicio.service';
@Component({
  selector: 'app-ejercicios',
  templateUrl: './ejercicios.component.html',
  styleUrls: ['./ejercicios.component.css'],
})
export class EjerciciosComponent implements OnInit {
  ejercicios!: Ejercicio[];
  ejercicioSeleccionado!: Ejercicio;


  constructor(
    private ejercicioService:EjercicioService
  ) {}


  getEjercicios():void{
    this.ejercicioService.getEjercicios().subscribe(ejercicios=>this.ejercicios=ejercicios);
  }

  ngOnInit(): void {
    this.getEjercicios();

  }

  onselectEjercicio(ejercicio: Ejercicio): void {
    this.ejercicioSeleccionado = ejercicio;
  }
}
