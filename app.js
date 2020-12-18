const searchUser = document.getElementById('searchUser')
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value
  const ui = new UI()
  if (userText !== '') {
    const github = new Github()
    github.getUser(userText).then((resp) => {
      if (resp.profile.message === 'Not Found') {
        ui.showAlert('User not found', 'alert alert-danger')
      } else {
        ui.showProfile(resp.profile)
        ui.showRepos(resp.repos)
      }
    })
  } else {
    ui.clearProfile()
  }
})
