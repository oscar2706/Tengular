export interface Player {
	readonly id: string;
	name?: string;
	age?: number;
	tournamentsEnrolled?: Array<string>;
}