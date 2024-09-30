import { Nota } from './nota.model';

export interface Materia {
  nombre: string;
  semestre: string;
  notas?: Nota[];
  promedioAcumulado?: number;
  codigo: string;
}
