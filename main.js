

//Selettori document (DOM)->
//inizializzazione e sellezione di elementi,in html

let nomeInput = document.querySelector('#inputName');
let telefonoInput = document.querySelector('#inputPhone');
let contactForm = document.querySelector('#contactForm')

let btnToggle = document.querySelector('#btnToggle');
let container = document.querySelector('#contactContainer');




//Lista contatti / è 1 array:

//Lista di Contatti, per esempio; 
let contacts = [

    //oppure parti con array vuoto

    {
        nome: "Anita Nagero" , telefono : "3281990000"}
,  
{
    nome: "Suocera Maria" , telefono : "+090000"
}
];



//Funzione per (stmpare i contatti)
function renderContacts() {

    //svuotare contenitore
    container.innerHTML = '';

   contacts.forEach(function (contatto, index) {
    let div = document.createElement('div');
    div.className = 'col-12 col-md-6 col-lg-4';
    div.innerHTML = `
      <div class="card h-100 shadow-sm">
        <div class="card-body">
          <h5 class="card-title">${contatto.nome}</h5>
          <p class="card-text">${contatto.telefono}</p>
          <div class="d-flex gap-2 mt-3">
            <button type="button" class="btn btn-sm btn-warning" onclick="editContact(${index})">Modifica</button>
            <button type="button" class="btn btn-sm btn-danger" onclick="deleteContact(${index})">Elimina</button>
          </div>
        </div>
      </div>
    `;
    container.appendChild(div);
  });
}



// EVENTI; CLICK BOTTONE AGGIUNGO IL CONTATTO

contactForm.addEventListener('submit',function (e) {
e.preventDefault();

  let nome = nomeInput.value.trim();
  let telefono = telefonoInput.value.trim();

  if (nome === '' || telefono === '') {
    alert('Attenzione!! Compila i campi!');
    return;
  }

    //all'array li aggiungo;

contacts.push({
   nome,
   telefono
});

 //pulisci reset_inputs
    nomeInput.value = '';
   telefonoInput.value = '';


   //aggiorna
            renderContacts();

            });

btnToggle.addEventListener('click', function () {
  container.classList.toggle('d-none');
});

    //FUNZIONE ELIMINAZIONE
//globale; x onclick
    window.deleteContact = function(index) {
   
  let conferma = confirm('Sei sicuro di voler eliminare il contatto "' + contacts[index].nome + '"?');

    if (conferma) {
    contacts.splice(index, 1);
    renderContacts();
  }
};


    //FUNZIONW MODIFICA contatto-i
window.editContact = function(index) {
let nuovoNome = prompt('Modifica il nome:', contacts[index].nome);
let nuovoTelefono = prompt('Modifica il telefono:', contacts[index].telefono);


            //CONDIZIONE PER VERIFICA; SE UTENTE HA PREMUTO; 
            if (nuovoNome !== null && nuovoTelefono !== null) {

                contacts[index].nome = nuovoNome.trim() || c
                ontacts[index].nome;
                contacts[index].telefono = nuovoTelefono.trim() || 
                contacts[index].telefono;
                renderContacts();

                
            }
        };

  
    //FINISCE LA FUNZIONE
    renderContacts();

    //Parte all'avvio; 

    