const body=document.querySelector(".hello");

function clack(){
    while (body.hasChildNodes()){
        body.removeChild(body.childNodes[0])
    }
    const lenny = new XMLHttpRequest()
    const bb=document.querySelectorAll(".choices");
    lenny.onreadystatechange = function() {
        if (lenny.readyState === XMLHttpRequest.DONE) {
            let q=((lenny.responseText-1)+1)
            for (let i=0; i<q; i+=1){
                let divy=document.createElement("div")
                divy.className="container"
                body.appendChild(divy)
                item(i, bb)
            }
        }
    }
    lenny.open("GET", "/"+bb[0].value+"/"+bb[1].value);
    lenny.responseType = 'text';
    lenny.send()}
function item(i, bb) {
    const divs=document.querySelectorAll(".container")[i]
    const Http = new XMLHttpRequest()
    Http.onreadystatechange = function() {
        if (Http.readyState === XMLHttpRequest.DONE) {
            const quals=Http.responseText.split("-")
            quals[4]+="/5"
            quals[3]="Genres: "+quals[3]
            const el=[document.createElement("h1"),document.createElement("p"), document.createElement("p"), document.createElement("pre")]
            for (let e=1; e<5; e++){
                el[e-1].appendChild(document.createTextNode(quals[e]))
                divs.appendChild(el[e-1])
            }
        }
    }
    Http.open("GET", "/"+bb[0].value+"/"+bb[1].value+"/"+i);
    Http.responseType = 'text';
    Http.send()
}
//TODO! put the same html file under multiple genres and use the path to get the right files
function search(){
    while (body.hasChildNodes()){
        body.removeChild(body.childNodes[0])
    }
    const lenny = new XMLHttpRequest()
    const nami=document.querySelector(".search").value
    if (nami.trim()===""){document.querySelector(".search").value=""; return}
    lenny.onreadystatechange = function() {
        if (lenny.readyState === XMLHttpRequest.DONE) {
            let q=((lenny.responseText-1)+1)
            for (let i=0; i<q; i+=1){
                let divy=document.createElement("div")
                divy.className="container"
                body.appendChild(divy)
                searchitem(i, nami)
            }
            document.querySelector(".search").value="";
        }
    }
    lenny.open("GET", "/site/len/search/"+nami);
    lenny.responseType = 'text';
    lenny.send()
}
function searchitem(i, namy) {
    const divs=document.querySelectorAll(".container")[i]
    const Http = new XMLHttpRequest()
    Http.onreadystatechange = function() {
        if (Http.readyState === XMLHttpRequest.DONE) {
            const quals=Http.responseText.split("-")
            quals[4]="Rating: "+quals[4]+"/5"
            quals[3]="Genres: "+quals[3]
            const el=[document.createElement("h1"),document.createElement("p"), document.createElement("p"), document.createElement("pre")]
            for (let e=1; e<5; e++){
                el[e-1].appendChild(document.createTextNode(quals[e]))
                divs.appendChild(el[e-1])
            }
        }
    }
    Http.open("GET", "/site/items/search/"+namy+"/"+i);
    Http.responseType = 'text';
    Http.send()
}