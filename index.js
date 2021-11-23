
let userPrompt=prompt(`Insert the initial leter of user`)

const UsersName=users.map(function (user){
    return user.name
 })

const filterUser=UsersName.filter(function (user) {
    return user[0] === `${userPrompt}`
})

console.log(UsersName);

console.log(filterUser);
