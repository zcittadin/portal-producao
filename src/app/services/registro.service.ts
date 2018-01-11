import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

import { Registro } from './../models/registro';

@Injectable()
export class RegistroService {

  constructor(private aft: AngularFirestore) { }

  private dbPath: string = '/registros';

  registros: AngularFirestoreCollection<Registro> = this.aft.collection(this.dbPath);

  getRegistros() {
    const registros$: Observable<Registro[]> = this.registros.valueChanges();
    //collection$.subscribe(data => console.log(data));
    return registros$;
  }

  insertRegistro(registro: Registro) {
    let idRef = "";
    this.registros.add({
      id: registro.id,
      data: registro.data,
      temp: registro.temp
    }).then(snap => {
      console.log(snap);
      idRef = snap.id;
      this.registros.doc(idRef).set({
        id: idRef,
        data: registro.data,
        temp: registro.temp
      });
    })
  }

  editRegistro(registro: Registro) {
    this.registros.doc(registro.id).set({
      id: registro.id,
      data: registro.data,
      temp: registro.temp
    });
  }

  removeRegistro(registro: Registro) {
    this.registros.doc(registro.id).delete();
  }

}
