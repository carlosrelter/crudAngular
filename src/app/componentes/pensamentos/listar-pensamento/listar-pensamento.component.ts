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
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService ) { }

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos)=>{
      this.listaPensamentos = listaPensamentos;
    })//a inscrição emite notificações toda vez que houver mudança
  }//é ciclo de vida do componente tudo que sera carregado quando componente for carregado

  carregarMaisPensamentos(){
    this.service.listar(this.paginaAtual)
    .subscribe(listaPensamentos => {
      this.listaPensamentos.push(...listaPensamentos);
      if(this.listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

}
