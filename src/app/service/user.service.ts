import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userFound: string;

  constructor(private firestore: AngularFirestore) { }
  create_user(user) {
    let newUser: User;
    newUser = {
      displayName: user.displayName,
      email: user.email,
      uid: user.uid,
      photoURL: user.photoURL
    };
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("/Usuarios/alunos/usuarios_alunos/")
        .add(newUser);
    });
  }
  /*read_Icecream: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  read_user(uid: string) {  
    var bdRef = this.firestore.collection('/Usuarios/alunos/usuarios_alunos/').ref;
    var query = bdRef.where("uid", "==", uid)
      .get();
    return query;
    //query.then((snapshot) => sessionStorage.setItem("usuarioRegistrado", JSON.stringify(snapshot.docs[0].data())));
  };

  /*update_Icecream : atualiza o registro pegando o ID e chamando o método de atualização */
  update_user(recordID, record) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + recordID).update(record);
  }
  /*delete_Icecream : chama o método de exclusão  ao registrar o ID*/
  delete_user(record_id) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + record_id).delete();
  }
}