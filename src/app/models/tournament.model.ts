export interface Tournament {
	id: string;
	nombre: string;
	modalidad: string;
	categoria: string;
	estadoConvocatoria: string;
	estadoTorneo: string;
	fechaInicio: string;
	fechaFin: string;
	numeroParticipantes: number;
	jugadoresInscritos: Array<string>[];
	rondasJugadas: Array<boolean>[];
}