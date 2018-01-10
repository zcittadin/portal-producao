import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Producao } from './../models/producao';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProducaoService {

  constructor(private db: AngularFireDatabase) { }

  private dbPath: string = '/producao';

  producao: AngularFireObject<Producao> = null;
  producoes: AngularFireList<Producao[]> = null;
  prods: Observable<any[]>;

  insert() {
    const dataAtual = new Date().toString();
    /*const producaoObservable = this.db.object(this.dbPath);
    producaoObservable.set({
      id: '0875',
      lote: "15/231-965",
      data: dataAtual
    });*/
    const listRef = this.db.list(this.dbPath);
    /*listRef.push({
      id: '9',
      lote: "8745-9632",
      data: dataAtual
    });*/
    //producaoObservable.remove();   
  }

  lista() {
    this.prods = this.db.list(this.dbPath).valueChanges();
    return this.prods;
  }

  getProducao(key: string): AngularFireObject<Producao> {
    this.producao = this.db.object(`${this.dbPath}/${key}`);
    return this.producao;
  }

  createProducao(producao: Producao): void {
    //this.producoes.push(producao);//.catch(error => this.handleError(error));
  }

  updateProducao(key: string, value: any): void {
    this.producoes.update(key, value).catch(error => this.handleError(error));
  }

  deleteProducao(key: string): void {
    this.producoes.remove(key).catch(error => this.handleError(error));
  }

  getProducoesList(query = {}): AngularFireList<Producao[]> {
    this.producoes = this.db.list(this.dbPath);//, {
    //query: query
    //});
    return this.producoes;
  }

  deleteAll(): void {
    this.producoes.remove().catch(error => this.handleError(error));
  }

  private handleError(error) {
    console.log(error);
  }

}
