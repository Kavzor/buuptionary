let search_btn = document.getElementById("search_random_btn");
let item_holder = document.getElementById("displayed_item");
let images = document.getElementById("images");
let npcs_check = document.getElementById('npcs_check');
let items_check = document.getElementById('items_check');

items = [];
npcs = [];

search_btn.addEventListener('click', event => {
    let entries = [];
    if (npcs_check.checked) {
        entries.concat(npcs);
    }
    if (items_check.checked) {
        entries.concat(items);
    }

    let entry = entries[Math.floor(Math.random() * entries.length)];
    item_holder.setAttribute("href", entry.url);
    item_holder.innerText = entry.url
    /*while (images.firstChild) {
        images.removeChild(images.firstChild);
    }
    item.images.forEach(image => {
        let img = document.createElement('img');
        img.setAttribute('src', "https://oldschool.runescape.wiki" + image);
        images.appendChild(img);
    });*/
});

fetch("file.json")
    .then(resp => resp.json())
    .then(data => {
        data.forEach(entry => {
            if (entry.category == 'Items') {
                items.push(entry);
            } else if (entry.category == 'Non-player characters') {
                npcs.push(entry);
            }
        })
    });

/*function loadFile() {
    var file = new XMLHttpRequest();
    file.open("GET", "file:///E:/dev/workspace/Evolve/buuptionary/file.txt");
    file.onreadystatechange = function () {
        if (file.readyState === 4) {
            if (file.status === 200 || file.status == 0) {
                items = file.responseText.split("\n");
                console.log(items);
            }
        }
    }
    file.send();
}

setTimeout(loadFile, 10);*/