export class ApiClient {
    #baseUrl: string;

    constructor(basuUrl: string) {
        this.#baseUrl = basuUrl;
    }

    async get(endpoint: string) {
        try {
            const response = await this.#send(endpoint, 'GET');
            return response;
        } catch(error) {
            throw error;
        }
    }

    async #send(endpoint: string, method: string) {
        try{
            const response = await fetch(`${this.#baseUrl}${endpoint}&appid=${process.env.OPEN_WEATHER_API_KEY}`, {
                method: method
            });
            if(!response.ok) {
                throw new Error('No response!');
            }

            const data = await response.json();
            console.log(data);
            return data;
        } catch(error) {
            throw error;
        }
    }
}