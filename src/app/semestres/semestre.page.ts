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
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-semestre',
  templateUrl: 'semestre.page.html',
  styleUrls: ['semestre.page.scss'],
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
    FormsModule,
  ],
})
export class SemestrePage implements OnInit {
  semestreSeleccionado: string = '';
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

  constructor() {}

  ngOnInit() {
    this.semestreSeleccionado = 'Semestre 1'; 
    this.cargarMaterias(this.semestreSeleccionado);
  }

  cambiarSemestre(semestre: string) {
    this.semestreSeleccionado = semestre;
    this.cargarMaterias(this.semestreSeleccionado);  // Esta función cargará las materias según el semestre
  }

  cargarMaterias(semestre: string) {
    // Aquí llamas a los archivos externos que se encargarán de cargar las materias y notas
    // Esto es solo un placeholder; en realidad llamarías a otro servicio o componente.
    console.log(`Cargar materias para: ${semestre}`);
  }
}