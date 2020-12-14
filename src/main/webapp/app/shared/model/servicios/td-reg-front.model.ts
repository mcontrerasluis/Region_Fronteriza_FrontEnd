import { ITcManifes } from 'app/shared/model/servicios/tc-manifes.model';
import { ITcValida } from 'app/shared/model/servicios/tc-valida.model';

export interface ITdRegFront {
  id?: number;
  region?: string;
  domicilioRegion?: string;
  sucursalRegion?: string;
  tipoImpuestod?: string;
  tipoSolicitudd?: string;
  ejerciciod?: number;
  tipoSolicitudDescripcion?: string;
  tipoSolicitudId?: number;
  tipoImpuestoDescripcion?: string;
  tipoImpuestoId?: number;
  ejercicioValor?: string;
  ejercicioId?: number;
  manifestacions?: ITcManifes[];
  validacions?: ITcValida[];
  generalId?: number;
}

export class TdRegFront implements ITdRegFront {
  constructor(
    public id?: number,
    public region?: string,
    public domicilioRegion?: string,
    public sucursalRegion?: string,
    public tipoImpuestod?: string,
    public tipoSolicitudd?: string,
    public ejerciciod?: number,
    public tipoSolicitudDescripcion?: string,
    public tipoSolicitudId?: number,
    public tipoImpuestoDescripcion?: string,
    public tipoImpuestoId?: number,
    public ejercicioValor?: string,
    public ejercicioId?: number,
    public manifestacions?: ITcManifes[],
    public validacions?: ITcValida[],
    public generalId?: number
  ) {}
}
