class Github {
  constructor() {
    this.clientId = 'XXXXXXXXXX'
    this.clientSecret = 'XXXXXXXXXX'
  }
  async getUser(username) {
    const profileUrl = `https://api.github.com/users/${username}?client_id=${this.clientId}&client_secret=${this.clientSecret}`

    const reposUrl = `https://api.github.com/users/${username}/repos?per_page=5&sort=created-asc&client_id=${this.clientId}&client_secret=${this.clientSecret}`

    const profileResponse = await fetch(profileUrl)
    const profile = await profileResponse.json()
    const reposResponse = await fetch(reposUrl)
    const repos = await reposResponse.json()
    return { profile, repos }
  }
}
