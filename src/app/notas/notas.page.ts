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
    this.obtenerNotas();
  }

  obtenerNotas() {
    const indiceMateria = 0; 
    this.notas = this.materiaService.obtenerNotas(indiceMateria); 
  }

  guardarNota() {
    if (this.nuevaNota.corte && this.nuevaNota.fechaEntrega && this.nuevaNota.descripcion) {
      const indiceMateria = 0; 
      this.materiaService.agregarNota(indiceMateria, this.nuevaNota);  
      this.nuevaNota = { corte: '', fechaEntrega: '', descripcion: '', nota: 0 };
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
      this.obtenerNotas();
    }
  }

  eliminarNota(nota: Nota, indexNota: number) {
    const indiceMateria = 0; 
    this.materiaService.eliminarNota(indiceMateria, indexNota);
    this.obtenerNotas();
  }

  openMenu() {
    this.menu.open();
  }
}
