import { Injectable } from '@angular/core';
import { User } from '../../model/user';
import { AngularFirestore } from '@angular/fire/firestore/firestore';
import { CollectionReference, QuerySnapshot, DocumentSnapshot } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userFound: string;

  constructor(private firestore: AngularFirestore) { }
  async create_user(user, nome, bdRef: CollectionReference) {

    if (bdRef === null) {
      bdRef = this.firestore
        .collection("/Usuarios/alunos/usuarios_alunos/").ref;
    }
    let newUser: User;
    newUser = {
      displayName: nome,
      email: user.email,
      uid: user.uid,
      photoURL: `https://randomuser.me/api/portraits/med/men/${(Math.floor(Math.random() * (99 - 0)))}.jpg`
    };
    return (await bdRef.add(newUser)).get();
  }


  /*read_user: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  async read_user(uid: string) {

    let arrayResult = []; // [0] user, [1] bdref, [2] uidDocument
    let bdRef: CollectionReference;
    let queryProf: QuerySnapshot<any>;
    let queryAluno: QuerySnapshot<any>;

    bdRef = this.firestore.collection('/Usuarios/alunos/usuarios_alunos/').ref;
    queryAluno = await bdRef.where("uid", "==", uid).get()
    if (queryAluno.empty) {
      bdRef = this.firestore.collection('/Usuarios/professores/usuarios_professores/').ref;
      queryProf = await bdRef.where("uid", "==", uid).get();
    }

    if (!queryAluno.empty) {
      queryAluno.forEach((docSnapshot) => {
        arrayResult[0] = this.montaObjUser(docSnapshot);
        arrayResult[1] = bdRef;
        arrayResult[2] = docSnapshot.id
      });
    } else if (!queryProf.empty) {
      queryProf.forEach((docSnapshot) => {
        arrayResult[0] = this.montaObjUser(docSnapshot);
        arrayResult[1] = bdRef;
        arrayResult[2] = docSnapshot.id
      });
    }
    return arrayResult;
  };

  montaObjUser(docSnapshot: any) {
    let newUser: User;
    newUser = {
      displayName: docSnapshot.data().displayName,
      email: docSnapshot.data().email,
      uid: docSnapshot.data().uid,
      photoURL: docSnapshot.data().photoURL
    };
    return newUser;
  }

  /*update_user : atualiza o registro pegando o ID e chamando o método de atualização */
  update_user(recordID, record) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + recordID).update(record);
  }

  /*delete_user : chama o método de exclusão  ao registrar o ID*/
  delete_user(record_id) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + record_id).delete();
  }
}