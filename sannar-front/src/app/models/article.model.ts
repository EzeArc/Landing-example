export interface Article {
    titulo: string;
    autor: string;
    fecha: string;
    resumen: string;
    imagen: string;
    tags: string[];
  }
  
  export interface ArticlesResponse {
    ARTICULOS: { [category: string]: Article[] };
  }
  