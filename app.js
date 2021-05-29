let search_btn = document.getElementById("search_random_btn");
search_btn.addEventListener('click', event => checkPage("", ""))

let categories = ['items', 'non-player characters']

var options = {
    host: 'oldschool.runescape.wiki',
    path: '/w/Special:Random/main'
}


function checkPage(category, url) {
    if (categories.includes(category.toLowerCase())) {
        console.log(url);
    }
    else {
        findPage(checkPage);
    }
}

function findPage(callback) {
    axios.get("https://oldschool.runescape.wiki/w/Special:Random/main", { headers: { "Access-Control-Allow-Origin": "*" } })
        .then(resp => console.log(resp));
    /*var request = http.request(options, function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            let doc = new jsdom.JSDOM(data);
            let category = doc.window.document.querySelector('#mw-normal-catlinks ul');
            console.log(category)
            callback(category.firstChild.textContent, res.responseUrl)
        });
    });
    request.on('error', function (e) {
        console.log(e.message);
    });
    request.end();*/
}