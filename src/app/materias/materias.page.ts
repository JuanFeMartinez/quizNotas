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
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Materia } from '../models/Materia.model';  // Importamos la interfaz Materia

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
    FormsModule
  ],
})
export class MateriasPage {
  nuevaMateria: Materia = { nombre: '', semestre: '', promedioAcumulado: 0 };  // Definimos un objeto Materia
  materias: Materia[] = [];  // Usamos el modelo de Materia
  materiaSeleccionada: Materia | null = null;
  indiceSeleccionado: number | null = null;  // Índice de la materia seleccionada

  constructor() {}

  
  guardarMateria() {
    if (this.nuevaMateria.nombre.trim()) {
      this.materias.push({ ...this.nuevaMateria });  
      console.log('Materia guardada:', this.nuevaMateria);
      this.nuevaMateria = { nombre: '', semestre: '', promedioAcumulado: 0 };  
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
