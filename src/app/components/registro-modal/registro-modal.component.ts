import { Registro } from './../../models/registro';
import { Component, TemplateRef, OnInit } from "@angular/core";
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { RegistroService } from '../../services/registro.service';

@Component({
  selector: 'registro-modal',
  moduleId: module.id,
  templateUrl: './registro-modal.component.html',
  styleUrls: ['./registro-modal.component.css']
})

export class RegistroModalComponent implements OnInit {

  reg: Registro;
  idReg: string;
  data: Date;
  temp: number;

  constructor(public bsModalRef: BsModalRef, private regService: RegistroService) { }

  ngOnInit() { }

  salvar() {
    this.reg = new Registro(this.idReg, this.data, this.temp);
    this.regService.editRegistro(this.reg);
    this.bsModalRef.hide();
  }
}