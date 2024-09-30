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
  IonSelect,
  IonSelectOption,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonBackdrop,
  IonCardContent
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Materia } from '../models/materia.model';
import { MateriaNotaService } from '../services/materiasNotas.service';
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
    RouterModule, 
    CommonModule, 
    IonLabel,
    IonSelect,
    IonSelectOption,
    FormsModule,
    IonMenu,
    IonButtons,
    IonMenuButton,
    IonCardContent,
    IonBackdrop
  ],
})
export class MateriasPage {
  nuevaMateria: Materia = { nombre: '', semestre: '', codigo: '' }; 
  materias: Materia[] = [];
  materiaSeleccionada: Materia | null = null;
  indiceSeleccionado: number | null = null;
  semestres: string[] = ['Semestre 1', 'Semestre 2', 'Semestre 3', 'Semestre 4'];

  constructor(private materiaService: MateriaNotaService, private menu: MenuController) {}

  ionViewWillEnter() {
    this.materias = this.materiaService.obtenerMaterias();  
  }

  agregarMateria() {
    if (this.nuevaMateria.nombre && this.nuevaMateria.semestre && this.nuevaMateria.codigo) {
      this.materiaService.agregarMateria(this.nuevaMateria);  
      this.nuevaMateria = { nombre: '', semestre: '', codigo: '' };  
      this.materias = this.materiaService.obtenerMaterias();
    }
  }

  seleccionarMateria(materia: Materia, index: number) {
    this.materiaSeleccionada = { ...materia };
    this.indiceSeleccionado = index;
  }

  actualizarMateria() {
    if (this.materiaSeleccionada && this.indiceSeleccionado !== null) {
      this.materias[this.indiceSeleccionado] = { ...this.materiaSeleccionada };
      this.materiaService.actualizarMateria(this.indiceSeleccionado, this.materiaSeleccionada);  
      this.materiaSeleccionada = null;
      this.indiceSeleccionado = null;
    }
  }

  eliminarMateria(index: number) {
    this.materiaService.eliminarMateria(index); 
    this.materias = this.materiaService.obtenerMaterias(); 
  }

  openMenu() {
    this.menu.open(); 
  }

  irAGestionarNotas(materia: Materia) {
    this.materiaService.seleccionarMateria(materia);
  }
}

