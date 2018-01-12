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
  led: boolean;
  button: boolean;
  counter: number;

  constructor(private producaoService: ProducaoService) { }

  ngOnInit() {
    this.producoes = this.producaoService.lista();
    this.producaoService.getCommand().subscribe(bit => {
      this.led = bit;
    });
    this.producaoService.getButtonStatus().subscribe(bit => {
      this.button = bit;
    });
    this.producaoService.getCounter().subscribe(value => {
      this.counter = value;
    });
  }

  add() {
    this.producaoService.insert(this.lote);
  }

  toggleLed() {
    this.led = !this.led;
    this.producaoService.toggleCommand(this.led);
  }

}
