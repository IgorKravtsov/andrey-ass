import axios from 'axios'

export class SwapiApi {
  baseUrl = 'https://swapi.dev/api'

  static async getPeople() {
    const { data } = await axios.get(`${baseUrl}/people`)

    return data
  }
}
