function internCard(intern){
    return `<div class="flex-item">
<h2>${intern.name}</h2>
<h3><i class="fa-solid fa-user-graduate"></i> ${intern.getRole()}</h3>
<ul>
    <li><b>ID:</b> ${intern.id}</li>
    <li><b>Email:</b> <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li><b>School:</b> ${intern.school}</li>
</ul>
</div>`
}

module.exports = internCard
