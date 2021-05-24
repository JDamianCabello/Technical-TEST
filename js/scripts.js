const selectDate = document.querySelector("#selectDate");
const loader = document.querySelector(".loader");
const content = document.querySelector(".content");
const reloadBtn = document.querySelector("#reload");

window.addEventListener("load", function(){
    if ("radios" in localStorage) {
        paintData(JSON.parse(localStorage.getItem('radios')))
    }else{
        loadData();
    }

});

function loadData(){
    fetch('/scripts/getData.php')
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('radios',JSON.stringify(data));
        paintData(data);
      });
}

selectDate.addEventListener('change',(e) => {
    let radios = document.querySelector("#maxRadiosDay");
    radios.textContent = e.target.value === '-1' ? 'Nada seleccionado' : e.target.value;
});

reloadBtn.addEventListener('click', () =>{
    content.classList.add("hide");
    loader.classList.remove("hide");
    loadData();
});



function paintData(data){

    let maxRadios = document.querySelector("#maxRadios");
    maxRadios.textContent = data[data.length - 1].max_listeners;

    let totalData = document.querySelector("#totalData");
    totalData.textContent = data.length;

    let oldData = document.querySelector("#oldData");
    oldData.textContent = data.sort((a,b) => a.ts < b.ts ? -1 : 1)[0].ts ?? "No hay registros";

    data.forEach(element => {
        selectDate.add(new Option(element.ts, element.max_listeners));
    });
    oldData.textContent = data.sort((a,b) => a.ts < b.ts ? -1 : 1)[0].ts ?? "No hay registros";

    loader.classList.add("hide");
    content.classList.remove("hide");
}
