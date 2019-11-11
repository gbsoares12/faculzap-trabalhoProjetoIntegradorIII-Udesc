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


  async get_eventosCalendario(idGrupo: String) {
    let eventos: any[] = [];
    eventos = [...eventos,{
      "title": "Wild Robert appears!!",
      "start": "2019-11-25",
      "end": "2019-11-30"
    }];
    let querySnapshot = this.firestore.collection(`/Grupos/${idGrupo}/diciplina/`).get();
    if (querySnapshot != null) {
     await querySnapshot.forEach((docSnapshot) => {
        if (!docSnapshot.empty) {
          docSnapshot.forEach((evento) => {
            eventos = [...eventos, {
              "start": new Date(evento.data().data_inicio["seconds"]* 1000),
              "end": new Date(evento.data().data_fim["seconds"]* 1000),
              "title": evento.data().nome,
            }]
          })
        }
      })
    }
    return eventos;
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
      if (!snapshot.empty) {
        snapshot.forEach((doc) => {
          gruposAtivos.push(this.criaObjGrupo(doc))
        });
      }
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
    var query = this.firestore.collection(`/Grupos/${idGrupo}/mensagens/`).snapshotChanges();
    return query
  }

  criaObjMensagem(mensagemDoc) {
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

  // formataTexto(textoMsg: String) {
  //   let stringCompleta = "";
  //   let quantidadeQuebraLinha = parseInt((textoMsg.length / 230).toPrecision(1));

  //   if (quantidadeQuebraLinha > 0) {
  //     for (let index = 0; index < quantidadeQuebraLinha; index++) {
  //       stringCompleta = textoMsg.substr(0, 230) + "\n" + textoMsg.substr(230, textoMsg.length)
  //     }
  //   }
  //   return stringCompleta === "" ? textoMsg : stringCompleta
  // }

  enviarMensagem(idGrupo: String, msg: Mensagem) {
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

