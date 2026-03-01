import { Component } from '@angular/core';
import { Curso as CursoService } from '../../services/curso';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-curso',
  imports: [FormsModule, CommonModule],
  templateUrl: './curso.html',
  styleUrl: './curso.css',
})
export class Curso {

  constructor(public cursoService: CursoService) { }
  ngOnInit():void{
    this.getCursos(); 
 
  }
  getCursos() {
       this.cursoService.getCursos().subscribe(
      res => {
        this.cursoService.cursos = res;
        console.log(this.cursoService.cursos);
      },
      err => console.log(err)
    );
  }
}