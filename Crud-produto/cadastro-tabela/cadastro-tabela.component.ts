import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-tabela',
  templateUrl: './cadastro-tabela.component.html',
  styleUrls: ['./cadastro-tabela.component.css']
})
export class CadastroTabelaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  Cadastrar(): void{
    this.router.navigate(['/cadastro'])
  }

  Home(): void{
    this.router.navigate([''])
  }

  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
  }

}
