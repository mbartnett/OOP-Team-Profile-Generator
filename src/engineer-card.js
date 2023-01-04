function engineerCard(engineer){
    return `<div class="flex-item">
    <h2>${engineer.name}</h2>
    <h3><i class="fa-solid fa-glasses"></i> ${engineer.getRole()}</h3>
    <ul>
    <li><b>ID:</b> ${engineer.id}</li>
    <li><b>Email</b>: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li><b>Github:</b> <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></li>
    </ul>
    </div>`
}
module.exports = engineerCard
