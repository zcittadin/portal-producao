import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { ProducaoService } from './../../services/producao.service';
import { Producao } from '../../models/producao';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.css']
})
export class ConsultasComponent implements OnInit {

  producoes: Observable<any[]>;
  lote: string;
  bit: boolean;

  constructor(private producaoService: ProducaoService) { }

  ngOnInit() {
    this.producoes = this.producaoService.lista();
    this.producaoService.getCommand().subscribe(bit => {
      this.bit = bit;
    });
  }

  add() {
    this.producaoService.insert(this.lote);
  }

  toggleBit() {
    this.bit = !this.bit;
    this.producaoService.toggleCommand(this.bit);
  }

}
