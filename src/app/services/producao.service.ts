import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Producao } from './../models/producao';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProducaoService {

  constructor(private db: AngularFireDatabase) { }

  private dbPath: string = '/producao';
  private dbCommand: string = '/comandos';

  producao: AngularFireObject<Producao> = null;
  producoes: AngularFireList<Producao[]> = null;
  prods: Observable<any[]>;

  commandObj: AngularFireObject<boolean> = null;
  bit: Observable<boolean>;

  myProd: Producao;

  insert(lote: string) {
    const dataAtual = new Date().toString();
    const listRef = this.db.list(this.dbPath);
    listRef.push({
      id: '8',
      lote: lote,
      data: dataAtual
    });
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
    //producaoObservable.remove();   
  }
  deleteProducao(key: string): void {
    this.producoes.remove(key).catch(error => this.handleError(error));
  }
  getProducoesList(query = {}): AngularFireList<Producao[]> {
    this.producoes = this.db.list(this.dbPath);
    return this.producoes;
  }
  deleteAll(): void {
    this.producoes.remove().catch(error => this.handleError(error));
  }
  private handleError(error) {
    console.log(error);
  }

  toggleCommand(bit: boolean) {
    const commandRef = this.db.object(this.dbCommand);
    commandRef.set(bit);
  }
  
  getCommand() {
    this.commandObj = this.db.object(this.dbCommand);
    return this.commandObj.valueChanges();
  }

}
