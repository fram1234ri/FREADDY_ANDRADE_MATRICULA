import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso as CursoModel } from '../models/curso';

@Injectable({
  providedIn: 'root',
})
export class Curso {

  URL_API = 'http://localhost:8080/api/curso';

  constructor( private http: HttpClient ) { }
  cursos : CursoModel[] = [];

  getCursos() {
    return this.http.get<CursoModel[]>(this.URL_API);
  }
}
