import { Evento } from './evento';
import { Mensagem } from './mensagem';

export interface Grupo {
    uid: string;
    titulo: string;
    imagem_url: string;
    usuarios: string[];
    criador: string;
}