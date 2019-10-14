import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Grupo } from '../../model/grupo';
import { User } from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  userCurrent: User;
  constructor(private firestore: AngularFirestore) {
    this.userCurrent = JSON.parse(sessionStorage.getItem('userSession'));
  }

  create_grupo(grupo) {
    let newGrupo: Grupo;
    newGrupo = {
      uid: grupo.uid,
      titulo: grupo.titulo,
      imagem_url: grupo.imagem_url,
      diciplina: grupo.diciplina,
      mensagens: grupo.mensagens,
      uidUsuarios: grupo.uidUsuarios
    };
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection("/Grupos/")
        .add(newGrupo).then((_) => resolve(newGrupo)).catch((e) => { reject(e) });
    });
  }

  /*read_grupo: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  read_grupo(uid: string) {
    var bdRef = this.firestore.collection('/Grupos/').ref;
    var query = bdRef
      .where("usuarios", "array-contains", uid)
      .get();
    return query;
  };

  get_grupoTitulo(tituloGrupo: string){
    
  }

  get_mensagensGrupo(idDoc: string) {
    var query = this.firestore.collection(`/Grupos/${idDoc}/mensagens/`).get();
    return query;
  }

  /*update_grupo : atualiza o registro pegando o ID e chamando o método de atualização */
  update_grupo(recordID, record) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + recordID).update(record);
  }
  /*delete_grupo : chama o método de exclusão  ao registrar o ID*/
  delete_grupo(record_id) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + record_id).delete();
  }

  criaObjGrupo(grupoDoc) {
    let newGrupo: Grupo;
    newGrupo = {
      uid: grupoDoc.uid,
      titulo: grupoDoc.titulo,
      imagem_url: grupoDoc.imagem_url,
      diciplina: grupoDoc.diciplina,
      mensagens: grupoDoc.mensagens,
      uidUsuarios: grupoDoc.uidUsuarios
    };
    return newGrupo;
  }
}
