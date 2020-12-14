import { ITdRegFront } from 'app/shared/model/servicios/td-reg-front.model';

export interface ITcManifes {
  id?: number;
  clave?: string;
  descripcion?: string;
  moral?: number;
  fisica?: number;
  isr?: number;
  iva?: number;
  generals?: ITdRegFront[];
}

export class TcManifes implements ITcManifes {
  constructor(
    public id?: number,
    public clave?: string,
    public descripcion?: string,
    public moral?: number,
    public fisica?: number,
    public isr?: number,
    public iva?: number,
    public generals?: ITdRegFront[]
  ) {}
}
