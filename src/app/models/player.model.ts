export interface Player {
	readonly id: string;
	name?: string;
	age?: number;
	tournamentsEnrolled?: Array<string>;
}

export interface PlayerFromAPI {
	player_name: string;
	current_rank: number;
	player_country: string;
	player_points: number;
	prev_rank: number;
	flag_url?: string;
}