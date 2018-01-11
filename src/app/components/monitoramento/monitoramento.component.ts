import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { RegistroService } from './../../services/registro.service';
import { Registro } from './../../models/registro';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit {

  registros: Observable<Registro[]>;
  temp: number;

  constructor(private regService: RegistroService) { }

  ngOnInit() {
    this.registros = this.regService.getRegistros();
    //this.registros.subscribe(data => console.log(data));
  }

  insert() {
    this.regService.insertRegistro(new Registro("", new Date(), this.temp));
  }

  edit(registro: Registro) {
    this.regService.editRegistro(registro);
  }

  delete(registro: Registro) {
    this.regService.removeRegistro(registro);
  }

}
