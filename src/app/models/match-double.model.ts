export interface Match {
	readonly id: string;
	readonly torneoId: string;
	jugador1: string;
	jugador2: string;
	jugador3: string;
	jugador4: string;
	ganador: string;
	ronda: string;
	suspendido: boolean;
	marcador: {
		equipo1: Array<{ puntos: number, puntosTiebreak: number }>,
		equipo2: Array<{ puntos: number, puntosTiebreak: number }>
	}
}