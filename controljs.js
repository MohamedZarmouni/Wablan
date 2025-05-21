 document.getElementById("button").addEventListener("click",ajouter);
 document.getElementById("btn").addEventListener("click",reinitialiser);
let cp_totale = 0;
let cp_t = 0;
 function ajouter() {
  console.log("ajouter")
  const li = document.createElement("li");
  const input = document.getElementById("inpt");
  input.placeholder = "Ajouter un tache";
  const task = input.value.trim();
  if (task === "") return;


  const sp = document.createElement("span");
  
  sp.textContent = task;
  sp.classList.add("splist");
  cp_totale++;
  const button = document.createElement("button");
  button.textContent = "Supprimer";
  button.id = "Delete";

  let iput=document.createElement("input");
  iput.type="checkbox";


  iput.addEventListener("change", function fct1() {
  if (iput.checked) {
    sp.style.textDecoration = "line-through";
    cp_t++;

  } else {
    sp.style.textDecoration = "none";
    cp_t--;
  }
  //event fonction :

});
  li.append(iput);
  li.append(sp);
  li.append(button);

  document.getElementById("stock").appendChild(li);

  input.value = "";

  button.onclick = function () {
    li.remove();
    cp_totale--;
    cp_t--;
  };


const items = document.querySelectorAll("#stock li span");
items.forEach((item) => {
    item.addEventListener("click", function () {
      let input = document.createElement("input");
      input.type = "text";
      input.value = this.textContent;
      this.textContent = "";
      this.appendChild(input);
      input.focus();
      input.addEventListener("dblclick", () => {
        this.textContent = input.value;
      });
      input.addEventListener("keydown",function (event){
        if (event.key === "Enter"){
          item.textContent = input.value ;

          
        }
      })
    });
  });


const listFiltter = document.querySelectorAll('.filtre_tache');
listFiltter[0].addEventListener("click",totale);
listFiltter[1].addEventListener("click",coure);
listFiltter[2].addEventListener("click",termine);

function totale(){
  li.style.backgroundColor = "#ff6b6b";
  input.placeholder = totalmsg+cp_totale;
}
function coure(){
  const style = window.getComputedStyle(sp);
  let cpt = cp_totale-cp_t;
  if(cpt<=-1){cpt = 0;};
  input.placeholder = courmsg+cpt;
  if (!sp.style.textDecoration.includes("line-through")){
      li.style.backgroundColor = "#f75c03";
      }
  else{
    li.style.backgroundColor="#cbf3f0";
  }}

function termine(){
  const style = window.getComputedStyle(sp);
  input.placeholder = termesg+cp_t;

  if (style.textDecoration.includes("line-through")){
      li.style.backgroundColor = "#008080";
  
    }
   else{
    li.style.backgroundColor="#cbf3f0";
  }
  }}


   function reinitialiser(){
    const input = document.getElementById("inpt");
    input.placeholder = "Ajouter un tache";
    cp_totale = 0;
   const liste = document.getElementById("stock");
   liste.innerHTML=""
   cpt_tache = 0;
   cp_coure = 0;
   cp_t = 0;
   }

function toggleMenu() {
      document.getElementById("dropdown").classList.toggle("show");
    }

 window.onclick = function(event) {
      if (!event.target.matches('.menu-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
          dropdowns[i].classList.remove("show");
        }
      }
    }


const divul = document.getElementsByClassName("ListView")[0];
const inputpece = document.getElementById("inpt")



let termesg =" Le nombre des tache Terminer est : ";
let courmsg = " Le nombre des tache qui sont en coure est : ";
let totalmsg = " Totale du tache est : "
if (window.innerWidth <= 768) {
  termesg = "les taches terminer:"
  courmsg = "les taches en coures:"
  totalmsg = "le totale tache:"
  divul.style.width = "300px";
  const items = document.querySelectorAll("ul#stock li");
  items.forEach(item => {
  item.classList.add("fonestylesp");
});

  console.log("Affiché sur un téléphone");
} else {

  divul.style.width = "800px";
  console.log("Affiché sur un ordinateur");
}

