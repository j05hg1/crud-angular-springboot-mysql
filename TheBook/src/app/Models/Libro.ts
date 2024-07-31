import { Categoria } from "./Categoria";

export interface Libro {
    id: number;
    titulo: string;
    autor: string;
    id_categoria: number;
    categoria: Categoria;
}