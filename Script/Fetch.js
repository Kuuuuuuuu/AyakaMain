
function fetch() {
    setTimeout(function () {
        fetch('https://top.gg/api/bots/706144670807228568').then(response => {
            let data = response.json();
            return document.querySelector("h3").innerHTML = `Ayaka 1 - Server Count: ${data.server_count}`;
        });
    }, 1000);
}