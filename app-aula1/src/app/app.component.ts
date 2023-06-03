import { Component } from '@angular/core';

interface Contatos {
  nome: string,
  email: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  lista: Contatos[] = [
    {
      nome: "Jose",
      email: "jose@gmail.com"
    },
    {
      nome: "maria",
      email: "maria@gmail.com"
    },
    {
      nome: "pedro",
      email: "pedro@gmail.com"
    }
  ]

  salvar(dados: any) {
    this.lista.push(dados)
  }

  excluir(contato: Contatos) {
    let pos = this.lista.indexOf(contato)
    this.lista.splice(pos, 1)
  }

}

