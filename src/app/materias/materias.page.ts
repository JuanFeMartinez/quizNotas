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
  IonSelectOption,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonBackdrop
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Materia } from '../models/materia.model';  
import { Nota } from '../models/nota.model';  
import { MenuController } from '@ionic/angular';

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
    FormsModule,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonBackdrop
  ],
})
export class MateriasPage {
  nuevaMateria: Materia = { nombre: '', semestre: '', notas: [], promedioAcumulado: 0 };  // Ahora con notas
  materias: Materia[] = [];  
  materiaSeleccionada: Materia | null = null;
  indiceSeleccionado: number | null = null;  
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

  // Nueva lógica para almacenar notas temporalmente
  nuevasNotas: Nota[] = [];

  constructor(private menu: MenuController) {}

  // Método para guardar la materia
  guardarMateria() {
    if (this.nuevaMateria.nombre && this.nuevaMateria.semestre) {
      this.nuevaMateria.notas = [...this.nuevasNotas];  // Asociamos las notas
      this.materias.push({ ...this.nuevaMateria });
      this.nuevaMateria = { nombre: '', semestre: '', notas: [], promedioAcumulado: 0 };
      this.nuevasNotas = [];  // Reiniciamos las notas
    }
  }

  seleccionarMateria(materia: Materia, index: number) {
    this.materiaSeleccionada = { ...materia };
    this.indiceSeleccionado = index;
  }

  actualizarMateria() {
    if (this.materiaSeleccionada && this.indiceSeleccionado !== null) {
      this.materias[this.indiceSeleccionado] = { ...this.materiaSeleccionada };
      this.materiaSeleccionada = null;
      this.indiceSeleccionado = null;
    }
  }

  eliminarMateria(materia: Materia) {
    this.materias = this.materias.filter((m) => m !== materia);
  }

  // Método para guardar las notas desde el componente de notas
  agregarNota(nota: Nota) {
    this.nuevasNotas.push(nota);  // Añadimos las nuevas notas a la materia actual
  }
  
  openMenu() {
    this.menu.open();
  }
}
