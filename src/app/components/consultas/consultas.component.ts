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

  constructor(private producaService: ProducaoService) { }

  ngOnInit() {
    //this.producaService.insert();
    this.producoes = this.producaService.lista();
    this.producaService.insert();
  }

}
