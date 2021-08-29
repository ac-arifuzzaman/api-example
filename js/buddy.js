const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayBuddies(data));
}

loadBuddies();

const displayBuddies = upatto => {
    const tottho = upatto.results;
    const bondhuDiv = document.getElementById('bondhu');
    for (const buddy of tottho) {
        console.log(buddy.gender, buddy)
        const p = document.createElement('p');
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}, Email: ${buddy.email}`;
        bondhuDiv.appendChild(p);
    }
}
