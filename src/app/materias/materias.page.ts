import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonInput,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonLabel,
  IonCardContent,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Materia } from '../models/materia.model';  // Importamos la interfaz Materia

@Component({
  selector: 'app-materias',
  templateUrl: 'materias.page.html',
  styleUrls: ['materias.page.scss'],
  standalone: true,
  imports: [
    IonInput, 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonList, 
    IonItem, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    RouterModule, 
    CommonModule, 
    IonLabel,
    IonSelect,
    IonSelectOption,
    FormsModule
  ],
})
export class MateriasPage {
  nuevaMateria: Materia = { nombre: '', semestre: '', promedioAcumulado: 0 };  // Definimos un objeto Materia
  materias: Materia[] = [];  // Usamos el modelo de Materia
  materiaSeleccionada: Materia | null = null;
  indiceSeleccionado: number | null = null;  // Índice de la materia seleccionada
  semestres: string[] = [
    'Semestre 1',
    'Semestre 2', 
    'Semestre 3', 
    'Semestre 4', 
    'Semestre 5', 
    'Semestre 6', 
    'Semestre 7', 
    'Semestre 8', 
    'Semestre 9'
  ];
  constructor() {}

  
  guardarMateria() {
    if (this.nuevaMateria.nombre && this.nuevaMateria.semestre) {
      this.materias.push({ ...this.nuevaMateria }); // Guardamos solo el semestre seleccionado
      this.nuevaMateria = { nombre: '', semestre: '' }; // Reseteamos el formulario
    }
  }
  
  seleccionarMateria(materia: Materia, index: number) {
    this.materiaSeleccionada = { ...materia };  
    this.indiceSeleccionado = index;  
  }

  actualizarMateria() {
    if (this.materiaSeleccionada && this.indiceSeleccionado !== null) {
      this.materias[this.indiceSeleccionado] = { ...this.materiaSeleccionada };  
      console.log('Materia actualizada:', this.materiaSeleccionada);
      this.materiaSeleccionada = null;  
      this.indiceSeleccionado = null;  
    }
  }

  eliminarMateria(materia: Materia) {
    this.materias = this.materias.filter((m) => m !== materia);  
    console.log('Materia eliminada:', materia);
  }
}
