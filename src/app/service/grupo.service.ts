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

  async get_todos_usuarios_alunos(uidUserCurrent: string) {
    let usuariosAlunos: any[] = [];
    let querySnapshot = this.firestore.collection("/Usuarios/alunos/usuarios_alunos/").get();
    await querySnapshot.forEach((snapshot) => {
      if (!snapshot.empty) {
        snapshot.forEach((aluno) => {
          if (aluno.data().uid !== uidUserCurrent) {
            usuariosAlunos = [...usuariosAlunos, {
              "nome": aluno.data().displayName,
              "uid": aluno.data().uid,
            }]
          }
        })
      }
    })
    return usuariosAlunos;
  }

  async get_todos_usuarios_professores(uidUserCurrent: string) {
    let usuariosProfessores: any[] = [];
    let querySnapshot = this.firestore.collection("/Usuarios/professores/usuarios_professores/").get();
    await querySnapshot.forEach((snapshot) => {
      if (!snapshot.empty) {
        snapshot.forEach((professor) => {
          if (professor.data().uid !== uidUserCurrent) {
            usuariosProfessores = [...usuariosProfessores, {
              "nome": professor.data().displayName,
              "uid": professor.data().uid,
            }]
          }
        })
      }
    })
    return usuariosProfessores;
  }

  async get_eventosCalendario(idGrupo: String) {
    let eventos: any[] = [];
    let querySnapshot = this.firestore.collection(`/Grupos/${idGrupo}/diciplina/`).get();
    if (querySnapshot != null) {
      await querySnapshot.forEach((docSnapshot) => {
        if (!docSnapshot.empty) {
          docSnapshot.forEach((evento) => {
            eventos = [...eventos, {
              "start": new Date(evento.data().data_inicio["seconds"] * 1000),
              "end": new Date(evento.data().data_fim["seconds"] * 1000),
              "title": evento.data().nome,
            }]
          })
        }
      })
    }
    return eventos;
  }

  create_grupo(grupo): boolean {
    this.firestore
      .collection("/Grupos/")
      .add(grupo).then((resultSnapshot) => {
        resultSnapshot.get().then((resultDocument) => {
          if (resultDocument.exists) {
            return true;
          } else {
            return false;
          }
        })
      });
    return false;
  }


  /*read_grupo: Chama o método snapshotChanges , que obterá registros e também será registrado para receber atualizações */
  read_grupo(uid: string) {
    let gruposAtivos: Grupo[] = [];
    var bdRef = this.firestore.collection('/Grupos/').ref;
    var query = bdRef
      .where("usuarios", "array-contains", uid);
    return query;
  }

  async get_grupoTitulo(uidGrupo: string) {
    return this.firestore.doc(`/Grupos/${uidGrupo}`).get();
  }

  criaObjGrupo(grupoDoc) {
    let newGrupo: Grupo;
    newGrupo = {
      uid: grupoDoc.id,
      titulo: grupoDoc.data().titulo,
      imagem_url: grupoDoc.data().imagem_url,
      diciplina: grupoDoc.data().diciplina,
      mensagens: grupoDoc.data().mensagens,
      usuarios: grupoDoc.data().uidUsuarios,
      criador: grupoDoc.data().criador
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
      foto_enviado_por: mensagemDoc.data().foto_enviado_por
    };
    return newMensagem;
  }

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
  delete_grupo(idGrupo) {
    this.firestore.doc(`/Grupos/${idGrupo}`).delete();
  }

}

