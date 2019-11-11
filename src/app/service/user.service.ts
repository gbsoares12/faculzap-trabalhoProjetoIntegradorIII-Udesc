import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { snapshotChanges } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userFound: string;

  constructor(private firestore: AngularFirestore) { }
  create_user(user, nome) {

    let newUser: User;
    newUser = {
      displayName: nome,
      email: user.email,
      uid: user.uid,
      photoURL: `https://randomuser.me/api/portraits/med/men/${(Math.random() * (99 - 0)).toPrecision(2)}.jpg`
    };
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("/Usuarios/alunos/usuarios_alunos/")
        .add(newUser);
    });
  }
  /*read_user: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  async read_user(uid: string) {
    var bdRef = this.firestore.collection('/Usuarios/alunos/usuarios_alunos/').ref;
    var query = await bdRef.where("uid", "==", uid)
      .get()
    if (query.empty) {
      return this.firestore.collection('/Usuarios/professores/usuarios_professores/').ref.where("uid", "==", uid).get();
    }
    return query;
  };

  /*update_user : atualiza o registro pegando o ID e chamando o método de atualização */
  update_user(recordID, record) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + recordID).update(record);
  }

  /*delete_user : chama o método de exclusão  ao registrar o ID*/
  delete_user(record_id) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + record_id).delete();
  }
}