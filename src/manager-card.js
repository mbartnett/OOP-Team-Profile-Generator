function managerCard(manager){
    return `<div class="flex-item">
    <h2>${manager.name}</h2>
    <h3>${manager.getRole()}</h3>
    <ul>
        <li>${manager.id}</li>
        <li>${manager.email}</li>
        <li>${manager.officeNumber}</li>
    </ul>
</div>`
}

module.exports = managerCard