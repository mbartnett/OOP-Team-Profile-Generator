function internCard(intern){
    return `<div class="flex-item">
<h2>${intern.name}</h2>
<h3>${intern.getRole()}</h3>
<ul>
    <li>${intern.id}</li>
    <li>${intern.email}</li>
    <li>${intern.school}</li>
</ul>
</div>`
}

module.exports = internCard
