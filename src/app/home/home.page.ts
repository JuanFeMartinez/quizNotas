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
  IonBackdrop
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuController } from '@ionic/angular'; // Añadir IonMenuController

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
    IonText,
    IonBackdrop,
    FormsModule,
  ],
})
export class HomePage implements OnInit {
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

  constructor(private menuCtrl: MenuController) {} // Añadir IonMenuController al constructor

  ngOnInit() {
    this.semestreSeleccionado = 'Semestre 1'; 
    this.cargarMaterias(this.semestreSeleccionado);
  }

  cambiarSemestre(semestre: string) {
    this.semestreSeleccionado = semestre;
    this.cargarMaterias(this.semestreSeleccionado);  // Esta función cargará las materias según el semestre
  }

  cargarMaterias(semestre: string) {
    console.log(`Cargar materias para: ${semestre}`);
  }

  // Gestionar el foco al abrir el menú
  openMenu() {
    this.menuCtrl.open();
    setTimeout(() => {
      const firstFocusableElement = document.querySelector('ion-button');
      firstFocusableElement?.focus();  // Poner el foco en el primer botón del menú.
    }, 100);
  }

  // Cerrar el menú
  closeMenu() {
    this.menuCtrl.close();
  }
}
