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
  ],
})
export class HomePage implements OnInit {
  semestres: string[] = ['2023-1', '2023-2', '2024-1', '2024-2'];
  semestreSeleccionado: string = '';
  materias: any[] = [];

  constructor() {}

  ngOnInit() {

    this.semestreSeleccionado = this.semestres[0];
    this.cargarMaterias(this.semestreSeleccionado);
  }


  cambiarSemestre(event: any) {
    this.semestreSeleccionado = event.detail.value;
    this.cargarMaterias(this.semestreSeleccionado);
  }

 
  cargarMaterias(semestre: string) {

    if (semestre === '2023-1') {
      this.materias = [
        { nombre: 'Matemáticas', notas: [] },
        { nombre: 'Física', notas: [] },
      ];
    } else if (semestre === '2023-2') {
      this.materias = [
        { nombre: 'Química', notas: [] },
        { nombre: 'Biología', notas: [] },
      ];
    } else {
      this.materias = []; 
    }
  }
}
