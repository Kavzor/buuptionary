let search_btn = document.getElementById("search_random_btn");
let item_holder = document.getElementById("displayed_item");
let images = document.getElementById("images");
items = [];

search_btn.addEventListener('click', event => {
    let item = items[Math.floor(Math.random() * items.length)];
    item_holder.setAttribute("href", item.url);
    item_holder.innerText = item.url
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
        items = data;
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