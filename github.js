class Github {
  constructor() {
    this.clientId = 'XXXXXXXXXX'
    this.clientSecret = 'XXXXXXXXXX'
  }
  async getUser(username) {
    const url = `https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`
    const profileResponse = await fetch(url)
    const profile = await profileResponse.json()
    return { profile }
  }
}
