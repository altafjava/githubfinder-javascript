class UI {
  constructor() {
    this.profile = document.getElementById('profile')
  }

  showProfile(user) {
    this.profile.innerHTML = `
      <div class="car card-body-mb-3">
        <div class="row">
          <div class="col-md-3">
            <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
            <a href="${user.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-block mb-3"
              >View Profile</a
            >
          </div>
          <div class="col-md-9">
            <div class="mb-3">
              <span class="badge badge-info p-2">Public Repos: ${user.public_repos}</span>
              <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
              <span class="badge badge-primary p-2">Followers: ${user.followers}</span>
              <span class="badge badge-success p-2">Following: ${user.following}</span>
            </div>
            <ul class="list-group">
              <li class="list-group-item">Company: ${user.company}</li>
              <li class="list-group-item">Website: ${user.blog}</li>
              <li class="list-group-item">Location: ${user.location}</li>
              <li class="list-group-item">Member Since: ${user.created_at}</li>
            </ul>
          </div>
        </div>
      </div>
    `
  }
}
