import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Angular',
      modelo: 'modelo3'
    },
    {
      conteudo: 'passo informações para componente filho',
      autoria: 'componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'minha propriedade é decorada com @Input',
      autoria: 'componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, teste aleatorio, ',
      autoria: 'Angular',
      modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
