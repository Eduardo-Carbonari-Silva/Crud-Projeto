import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';
import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css']
})
export class CadastroCreateComponent implements OnInit {

  cadastro: Cadastro ={
    email: '',
    cpf: '',
    nome: '',
    dataNasc: '',
    telefone: '',
    senha: ''
  }

   constructor(private cadastroService: CadastroService, private router: Router) { }

  ngOnInit(): void {
  }

  createCadastro(): void {
    this.cadastroService.create(this.cadastro).subscribe(() =>{
      this.cadastroService.showMessege('Usuário Cadastrado!')
      this.router.navigate([''])
    })
  }

  cancelarCadastro(): void{
    this.router.navigate([''])
  }

  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])
  }

}
