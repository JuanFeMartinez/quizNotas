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
import { Nota } from '../models/nota.model';
import { MateriaNotaService } from '../services/materiasNotas.service'; 
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-notas',
  templateUrl: 'notas.page.html',
  styleUrls: ['notas.page.scss'],
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
export class NotasPage {
  nuevaNota: Nota = { corte: '', fechaEntrega: '', descripcion: '', nota: undefined };
  notas: Nota[] = [];
  notaSeleccionada: Nota | null = null;
  indiceSeleccionado: number | null = null;
  cortes: string[] = [
    '1er Corte 20%', 
    '2do Corte 20% (Parcial)', 
    '3er Corte 20%', 
    'Corte Final 40% (Parcial Final)'
  ];

  constructor(private materiaService: MateriaNotaService, private menu: MenuController) {}

  ngOnInit() {
    // Inicializa las notas desde el servicio
    this.obtenerNotas();
  }

  obtenerNotas() {
    const indiceMateria = 0; // Supongamos que tienes el índice de la materia seleccionada
    this.notas = this.materiaService.obtenerNotas(indiceMateria); 
  }

  guardarNota() {
    if (this.nuevaNota.corte && this.nuevaNota.fechaEntrega && this.nuevaNota.descripcion) {
      const indiceMateria = 0; 
      this.materiaService.agregarNota(indiceMateria, this.nuevaNota);  
      this.nuevaNota = { corte: '', fechaEntrega: '', descripcion: '', nota: 0 };
      
      // Después de guardar la nota, actualiza la lista de notas
      this.obtenerNotas();
    }
  }

  seleccionarNota(nota: Nota, index: number) {
    this.notaSeleccionada = { ...nota };
    this.indiceSeleccionado = index;
  }

  actualizarNota() {
    if (this.notaSeleccionada && this.indiceSeleccionado !== null) {
      const indiceMateria = 0; 
      this.materiaService.actualizarNota(indiceMateria, this.indiceSeleccionado, this.notaSeleccionada); 
      this.notaSeleccionada = null;
      this.indiceSeleccionado = null;

      // Después de actualizar, refresca la lista de notas
      this.obtenerNotas();
    }
  }

  eliminarNota(nota: Nota, indexNota: number) {
    const indiceMateria = 0; 
    this.materiaService.eliminarNota(indiceMateria, indexNota);
    
    // Después de eliminar, refresca la lista de notas
    this.obtenerNotas();
  }

  openMenu() {
    this.menu.open();
  }
}
