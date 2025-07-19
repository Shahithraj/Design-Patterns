function getUsers() {
    return fetch('https://jsonplaceholder.typicode.com/users',{
        method:'GET',
        headers:{"Content-Type": "application/json" }
    }).then(res => res.json())
}

function getUsersPost(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method:'GET',
        headers:{"Content-Type": "application/json" }
    }).then(res => res.json());
}

getUsers().then(users => {
    users.forEach(user => {
        getUsersPost(user.id).then(posts => {
            console.log(user.name)
        })
    });
})

/*
fetch is repeating and method and headers are same but it is also repeating
*/