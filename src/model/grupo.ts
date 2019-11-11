import { Evento } from './evento';
import { Mensagem } from './mensagem';
import { User } from './user';

export interface Grupo {

    uid: string;
    titulo: string;
    imagem_url: string;
    diciplina: Evento[];
    mensagens: Mensagem[];
    usuarios: string[];
}