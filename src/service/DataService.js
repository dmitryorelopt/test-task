class DataService {
	async getTableData() {
		const response = await fetch('https://storage.googleapis.com/static-production.netcosports.com/temp/serie_a_competition.json');
		if (response.status !== 200) {
			throw new Error("Can't get data");
		}
		const responseBody = await response.json();
		return responseBody.SoccerFeed.SoccerDocument;
	}
}

export const dataService = new DataService();