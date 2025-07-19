function getUsers() {
 return getFetch('https://jsonplaceholder.typicode.com/users')
}


function getUsersPost(userId) {
    return getFetch('https://jsonplaceholder.typicode.com/posts', {
        userId:userId
    })
}

getUsers().then(users => {
    users.forEach(user => {
        getUsersPost(user.id).then(posts => {
           console.log(user.name)
        })
    });
})

function getFetch(url, params = {}) {
      const queryString = Object.entries(params).map(param => {
    return `${param[0]}=${param[1]}`
  }).join('&')
    console.log(queryString)
    return fetch(`${url}?${queryString}`, {
        method:"GET",
        headers:{"Content-Type": "application/json" }
    }).then(res => res.json())
}

// function getFetchAxios(url, params) {
//     return axios({
//         url:url,
//         method:"GET",
//         headers:{"Content-Type": "application/json" },
//        params:params
//     })
// }