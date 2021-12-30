import { Cadastro } from './cadastro.model';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  baseUrl = "http://localhost:3000/login"

  constructor(private snackbar: MatSnackBar, private http: HttpClient) { }

  showMessege(msg: string): void{
    this.snackbar.open(msg, 'x',{
      duration: 6000,
      verticalPosition: "top"
    })
  }

  create(cadastro: Cadastro): Observable<Cadastro>{
    return this.http.post<Cadastro>(this.baseUrl, cadastro)
  }

  read(): Observable<Cadastro[]>{
    return this.http.get<Cadastro[]>(this.baseUrl)
  }

  readById(id: number):  Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Cadastro>(url)
  }

  updateCadastro(cadastro: Cadastro): Observable<Cadastro>{
    const url = `${this.baseUrl}/${cadastro.id}`
    return this.http.put<Cadastro>(url, cadastro)
  }

  deleteCadastro(id: number):  Observable<Cadastro>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Cadastro>(url)
  }
}

