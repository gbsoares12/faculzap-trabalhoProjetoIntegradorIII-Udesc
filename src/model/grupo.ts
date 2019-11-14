import { Evento } from './evento';
import { Mensagem } from './mensagem';

export interface Grupo {
    uid: string;
    titulo: string;
    imagem_url: string;
    diciplina: Evento[];
    mensagens: Mensagem[];
    usuarios: string[];
    criador: string;
}