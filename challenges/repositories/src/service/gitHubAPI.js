export default function gitHubAPIGeneral(path) {
  return fetch(`https://api.github.com/users/dudawiltiner${path}`)
            .then(response => response.json())
            .then(response => response)
            .catch(error => error)
}

export function gitHubAPIRepository(name) {
  return fetch(`https://api.github.com/repos/dudawiltiner/${name}`)
            .then(response => response.json())
            .then(response => response)
            .catch(error => error)
}