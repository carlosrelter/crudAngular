import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';


@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos: Pensamento [] = [];

  constructor(private service: PensamentoService ) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos;
    })//a inscrição emite notificações toda vez que houver mudança
  }//é ciclo de vida do componente tudo que sera carregado quando componente for carregado


}
