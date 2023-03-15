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
                divy.className="lol"
                body.appendChild(divy)
                item(i, bb)
            }
        }
    }
    lenny.open("GET", "/"+bb[0].value+"/"+bb[1].value);
    lenny.responseType = 'text';
    lenny.send()}
function item(i, bb) {
    const divs=document.querySelectorAll(".lol")[i]
    const Http = new XMLHttpRequest()
    Http.onreadystatechange = function() {
        if (Http.readyState === XMLHttpRequest.DONE) {
            const quals=Http.responseText.split("-")
            quals[6]="Rating: "+quals[6]+"/5"
            quals[5]="Genres: "+quals[5]
            
            
            //change the tags in el below this comment to change the tags in html. there is a second el below too.
            
            
            const el=[document.createElement("h1"),document.createElement("p"),document.createElement("p"), document.createElement("p"), document.createElement("pre")]
            const cover=document.createElement("img");
            cover.src="site/images/src/"+quals[1]
            divs.appendChild(cover)
            for (let e=2; e<7; e++){
                el[e-2].appendChild(document.createTextNode(quals[e]))
                divs.appendChild(el[e-2])
            }
        }
    }
    Http.open("GET", "/"+bb[0].value+"/"+bb[1].value+"/"+i);
    Http.responseType = 'text';
    Http.send()
}
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
                divy.className="lol"
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
    const divs=document.querySelectorAll(".lol")[i]
    const Http = new XMLHttpRequest()
    Http.onreadystatechange = function() {
        if (Http.readyState === XMLHttpRequest.DONE) {
            const quals=Http.responseText.split("-")
            quals[6]="Rating: "+quals[6]+"/5"
            quals[5]="Genres: "+quals[5]
            
             //change the tags in el below this comment to change the tags in html 
            
            const el=[document.createElement("h1"),document.createElement("p"),document.createElement("p"), document.createElement("p"), document.createElement("pre")]
            const cover=document.createElement("img");
            cover.src="site/images/src/"+quals[1]
            divs.appendChild(cover)
            for (let e=2; e<7; e++){
                el[e-2].appendChild(document.createTextNode(quals[e]))
                divs.appendChild(el[e-2])
            }
        }
    }
    Http.open("GET", "/site/items/search/"+namy+"/"+i);
    Http.responseType = 'text';
    Http.send()
}
