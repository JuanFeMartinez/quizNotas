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
import { MateriasPage } from '../materias/materias.page'; 
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

  constructor(private materiasPage: MateriasPage, private menu: MenuController) {}

  guardarNota() {
    if (this.nuevaNota.corte && this.nuevaNota.fechaEntrega && this.nuevaNota.descripcion) {
      this.materiasPage.agregarNota(this.nuevaNota);  
      this.nuevaNota = { corte: '', fechaEntrega: '', descripcion: '', nota: 0 };  
    }
  }

  seleccionarNota(nota: Nota, index: number) {
    this.notaSeleccionada = { ...nota };  
    this.indiceSeleccionado = index;  
  }

  actualizarNota() {
    if (this.notaSeleccionada && this.indiceSeleccionado !== null) {
      this.notas[this.indiceSeleccionado] = { ...this.notaSeleccionada }; 
      this.notaSeleccionada = null;  
      this.indiceSeleccionado = null;
    }
  }

  eliminarNota(nota: Nota) {
    this.notas = this.notas.filter((n) => n !== nota);  
  }
  
  openMenu() {
    this.menu.open();
  }
}