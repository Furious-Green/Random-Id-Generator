function generateRandomID() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = '';
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        id += characters[randomIndex];
    }
    return id;
}

document.getElementById('generate').addEventListener('click', function () {
    let id = generateRandomID();
    document.querySelector('#id').innerHTML = id;
    console.log(id);
});