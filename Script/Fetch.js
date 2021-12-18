
function fetch() {
    fetch('https://top.gg/api//bots/706144670807228568').then(response => {
        response.json().then(data => {
            return document.querySelector("h3").innerHTML = `Ayaka 1 - Server Count: ${data.server_count}`;
        });
    })
}