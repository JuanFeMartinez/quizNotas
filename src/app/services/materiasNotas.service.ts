import { Injectable } from '@angular/core';
import { Materia } from '../models/materia.model';
import { Nota } from '../models/nota.model';

@Injectable({
  providedIn: 'root',
})
export class MateriaNotaService {

  seleccionarMateria(materia: Materia) {
    throw new Error('Method not implemented.');
  }
  
  private materias: Materia[] = [];

  agregarMateria(materia: Materia) {
    this.materias.push(materia);
  }

  obtenerMaterias(): Materia[] {
    return this.materias;
  }

  actualizarMateria(index: number, materia: Materia) {
    this.materias[index] = materia;
  }

  eliminarMateria(index: number) {
    this.materias.splice(index, 1);
  }

  agregarNota(index: number, nota: Nota) {
    const materia = this.materias[index];
    if (materia) {  // Asegura que materia no es undefined
      if (!materia.notas) {
        materia.notas = [];
      }
      materia.notas.push(nota);
    }
  }

  obtenerNotas(index: number): Nota[] {
    return this.materias[index]?.notas || [];  // Usa el encadenamiento opcional para evitar acceso si la materia no existe
  }

  actualizarNota(indexMateria: number, indexNota: number, notaActualizada: Nota) {
    const materia = this.materias[indexMateria];
    const notas = materia?.notas;

    if (notas && notas[indexNota]) {  // Verifica que la lista de notas y la nota específica existen
      notas[indexNota] = notaActualizada;
    } else {
      console.error('Materia o Nota no encontrada');
    }
  }

  eliminarNota(indexMateria: number, indexNota: number) {
    const materia = this.materias[indexMateria];
    const notas = materia?.notas;

    if (notas && notas[indexNota]) {  // Verifica que las notas existen y que el índice es válido
      notas.splice(indexNota, 1);
    } else {
      console.error('Materia o Nota no encontrada');
    }
  }
}

