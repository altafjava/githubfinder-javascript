const searchUser = document.getElementById('searchUser')
searchUser.addEventListener('keyup', (e) => {
  const userText = e.target.value
  if (userText !== '') {
    const github = new Github()
    github.getUser(userText).then((resp) => {
      if (resp.profile.message === 'Not Found') {
        console.log('show alert')
      } else {
        console.log(resp)
      }
    })
  }
})
