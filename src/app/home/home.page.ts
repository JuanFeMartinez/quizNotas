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
  IonSelect,
  IonSelectOption,
  IonText,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
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
    IonSelect,
    IonSelectOption,
    IonText,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
  semestreSeleccionado: string = '';
  materias: any[] = [];

  constructor() {}

  ngOnInit() {
    this.semestreSeleccionado = 'Semestre 1';  // Por defecto selecciona el primer semestre
    this.cargarMaterias(this.semestreSeleccionado);
  }

  cambiarSemestre(event: any) {
    this.semestreSeleccionado = event.detail.value;
    this.cargarMaterias(this.semestreSeleccionado);
  }

  cargarMaterias(semestre: string) {
    if (semestre === 'Semestre 1') {
      this.materias = [
        { nombre: 'Matemáticas', notas: [] },
        { nombre: 'Física', notas: [] },
      ];
    } else if (semestre === 'Semestre 2') {
      this.materias = [
        { nombre: 'Química', notas: [] },
        { nombre: 'Biología', notas: [] },
      ];
    } else {
      this.materias = [];
    }
  }
}
