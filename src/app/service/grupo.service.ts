import { Mensagem } from './../../model/mensagem';
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
    let gruposAtivos: Grupo[] = [];
    var bdRef = this.firestore.collection('/Grupos/').ref;
    var query = bdRef
      .where("usuarios", "array-contains", uid)
      .get();
      query.then((snapshot) => {
        snapshot.forEach((doc) => {
          gruposAtivos.push(this.criaObjGrupo(doc))
        });
      })
      return gruposAtivos;
  }

  get_grupoTitulo(tituloGrupo: string) {

  }

  criaObjGrupo(grupoDoc) {
    let newGrupo: Grupo;
    newGrupo = {
      uid: grupoDoc.id,
      titulo: grupoDoc.data().titulo,
      imagem_url: grupoDoc.data().imagem_url,
      diciplina: grupoDoc.data().diciplina,
      mensagens: grupoDoc.data().mensagens,
      uidUsuarios: grupoDoc.data().uidUsuarios
    };
    return newGrupo;
  }

  get_mensagensGrupo(idGrupo: string) {
    //let mensagensGrupo: Mensagem[] = [];

    var query = this.firestore.collection(`/Grupos/${idGrupo}/mensagens/`).snapshotChanges();

    // query.subscribe((snapshot) => {
    //   snapshot.forEach((doc) => {
    //     mensagensGrupo.push(this.criaObjMensagem(doc))
    //   });
    // });
    
    return query
  }

  criaObjMensagem(mensagemDoc){
    let newMensagem: Mensagem;
    newMensagem = {
    uid: mensagemDoc.id,
    arquivo_url: mensagemDoc.data().arquivo_url,
    data_envio: mensagemDoc.data().data_envio,
    enviado_por: mensagemDoc.data().enviado_por,
    imagem_url: mensagemDoc.data().imagem_url,
    texto: mensagemDoc.data().texto,
    };
    return newMensagem;
  }

  enviarMensagem(idGrupo: String, msg: Mensagem){
    this.firestore
        .collection(`/Grupos/${idGrupo}/mensagens/`)
        .add(msg);
  }

  /*update_grupo : atualiza o registro pegando o ID e chamando o método de atualização */
  update_grupo(recordID, record) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + recordID).update(record);
  }
  /*delete_grupo : chama o método de exclusão  ao registrar o ID*/
  delete_grupo(record_id) {
    this.firestore.doc('/Usuarios/alunos/usuarios_alunos/' + record_id).delete();
  }
  
}

