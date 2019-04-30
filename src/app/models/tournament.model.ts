export interface Tournament {
	id: string;
	name: string;
	modality: string;
	category: string;
	announcementStatus: string;
	tournamentStatus: string;
	beginDate: string;
	endDate: string;
	numberOfPlayers: number;
	enrolledPlayers: Array<string>[];
	playedRounds: Array<boolean>[];
}