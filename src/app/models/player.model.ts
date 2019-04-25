export interface Player {
	readonly id: string;
	nombre?: string;
	edad?: number;
	torneosInscritos?: Array<string>;
}