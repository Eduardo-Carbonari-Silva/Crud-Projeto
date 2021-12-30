import { ActivatedRoute, Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Component, OnInit } from '@angular/core';
import { Cadastro } from '../cadastro.model';


@Component({
  selector: 'app-cadastro-delete',
  templateUrl: './cadastro-delete.component.html',
  styleUrls: ['./cadastro-delete.component.css']
})
export class CadastroDeleteComponent implements OnInit {

  cadastro: Cadastro;

  constructor(private cadastroService: CadastroService,
              private router: Router,
              private route: ActivatedRoute
    ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cadastroService.readById(id).subscribe(cadastro =>{
      this.cadastro = cadastro;
    })
  }

  deletarCadastro(): void{
    this.cadastroService.deleteCadastro(this.cadastro.id).subscribe(() => {
      this.cadastroService.showMessege('Cadastro Deletado')
      this.router.navigate(['/cadastro/tabela'])
    })
  }

  cancelarCadastro(): void{
    this.router.navigate(['/cadastro'])

  }

  tabelasCadastro(): void{
    this.router.navigate(['/cadastro/tabela'])

  }

}
