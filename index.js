function submitData(username, email) {
  return fetch('http://localhost:3000/users',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: `${username}`,
      email: `${email}`
    }
    )
  })
  .then(res => res.json())
  .then(json => renderInfo(json))
  .catch(err => renderError(err.message));
}

function renderInfo(json) {
  document.querySelector('body').innerHTML = `${json.id}`
}

function renderError(err) {
  document.querySelector('body').innerHTML = `${err}`
}
