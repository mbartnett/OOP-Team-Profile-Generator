function managerCard(manager){
    return `
    <div class="flex-item">
    <h2>${manager.name}</h2>
    <h3><i class="fa-solid fa-mug-hot"></i> ${manager.getRole()}</h3>
    <ul>
        <li><b>ID:</b> ${manager.id}</li>
        <li><b>Email:</b> <a href="mailto:${manager.email}">${manager.email}</a></li>
        <li><b>Office number:</b> ${manager.officeNumber}</li>
    </ul>
</div>`
}

module.exports = managerCard