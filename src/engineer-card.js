function engineerCard(engineer){
    return `<div class="flex-item">
    <h2>${engineer.name}</h2>
    <h3>${engineer.getRole()}</h3>
    <ul>
    <li>${engineer.id}</li>
    <li>${engineer.email}</li>
    <li>${engineer.github}</li>
    </ul>
    </div>`
}
module.exports = engineerCard
