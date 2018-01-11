import { Component, OnInit } from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Observable } from 'rxjs/Observable';

import { RegistroService } from './../../services/registro.service';
import { Registro } from './../../models/registro';
import { RegistroModalComponent } from './../registro-modal/registro-modal.component';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.component.html',
  styleUrls: ['./monitoramento.component.css']
})
export class MonitoramentoComponent implements OnInit {

  bsModalRef: BsModalRef;
  registros: Observable<Registro[]>;
  temp: number;

  constructor(private regService: RegistroService, private modalService: BsModalService) { }

  ngOnInit() {
    this.registros = this.regService.getRegistros();
    //this.registros.subscribe(data => console.log(data));
  }

  insert() {
    this.regService.insertRegistro(new Registro("", new Date(), this.temp));
  }

  edit(registro: Registro) {
    this.bsModalRef = this.modalService.show(RegistroModalComponent);
    this.bsModalRef.content.idReg = registro.id;
    this.bsModalRef.content.data = registro.data;
    this.bsModalRef.content.temp = registro.temp;
  }

  delete(registro: Registro) {
    this.regService.removeRegistro(registro);
  }

}
