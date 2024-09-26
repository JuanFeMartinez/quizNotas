import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonList,
  IonItem,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonLabel,
  IonText,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-materias',
  templateUrl: 'materias.page.html',
  styleUrls: ['materias.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonButton,
    IonList,
    IonItem,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    RouterModule,
    CommonModule,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonText,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    FormsModule,
  ],
})
export class MateriasPage {
  nuevaMateria: string = '';
  materias: string[] = ['Matemáticas', 'Física', 'Historia'];  // Lista de materias de ejemplo
  materiaSeleccionada: string | null = null;

  constructor() {}

  // Método para agregar una nueva materia
  guardarMateria() {
    if (this.nuevaMateria.trim()) {
      this.materias.push(this.nuevaMateria);
      console.log('Materia guardada:', this.nuevaMateria);
      this.nuevaMateria = '';  // Limpiar el campo de entrada después de agregar
    }
  }

  // Método para seleccionar una materia para editar
  seleccionarMateria(materia: string) {
    this.materiaSeleccionada = materia;
  }

  // Método para actualizar una materia existente
  actualizarMateria() {
    if (this.materiaSeleccionada) {
      const index = this.materias.indexOf(this.materiaSeleccionada);
      if (index > -1) {
        this.materias[index] = this.materiaSeleccionada;
        console.log('Materia actualizada:', this.materiaSeleccionada);
        this.materiaSeleccionada = null;  // Limpiar el campo después de editar
      }
    }
  }
}
