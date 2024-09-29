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
import { Nota } from '../models/nota.model';  // Importamos la interfaz Nota

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
    FormsModule
  ],
})
export class NotasPage {
  nuevaNota: Nota = { corte: '', fechaEntrega: '', nota: undefined };  // Definimos un objeto Nota
  notas: Nota[] = [];  // Usamos el modelo de Nota
  notaSeleccionada: Nota | null = null;
  indiceSeleccionado: number | null = null;  // Índice de la nota seleccionada
  cortes: string[] = [
    '1er Corte 20%', 
    '2do Corte 20% (Parcial)', 
    '3er Corte 20%', 
    'Corte Final 40% (Parcial Final)'
  ];  // Lista de cortes predefinidos

  constructor() {}

  guardarNota() {
    if (this.nuevaNota.corte && this.nuevaNota.fechaEntrega) {
      this.notas.push({ ...this.nuevaNota });  // Guardamos la nota ingresada
      this.nuevaNota = { corte: '', fechaEntrega: '',nota: undefined };  // Reseteamos el formulario
    }
  }

  seleccionarNota(nota: Nota, index: number) {
    this.notaSeleccionada = { ...nota };  // Creamos una copia para editar
    this.indiceSeleccionado = index;  // Guardamos el índice de la nota seleccionada
  }

  actualizarNota() {
    if (this.notaSeleccionada && this.indiceSeleccionado !== null) {
      this.notas[this.indiceSeleccionado] = { ...this.notaSeleccionada };  // Actualizamos la nota seleccionada
      this.notaSeleccionada = null;  // Reseteamos el formulario
      this.indiceSeleccionado = null;
    }
  }

  eliminarNota(nota: Nota) {
    this.notas = this.notas.filter((n) => n !== nota);  // Eliminamos la nota
  }
}