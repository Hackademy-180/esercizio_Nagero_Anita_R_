

//Selettori document (DOM)->
//inizializzazione e sellezione di elementi,in html

let nomeInput = document.querySelector('#inputName');
let telefonoInput = document.querySelector('#inputPhone');
let btnAdd = document.querySelector('#addBtn');
let btnToggle = document.querySelector('#btnToggle');
let container = document.querySelector('#contactContainer');


//Lista contatti / è 1 array:

//Lista di Contatti, per esempio; 
let contacts = [
    {
        nome: "Anita Nagero" , telefono : "3281990000"}
,  
{
    nome: "Suocera Maria" , telefono : "+090000"
}
];



//Funzione per (reindirizzare i contatti)
function renderContacts() {

    //svuotare contenitore
    container.innerHTML = '';

    contacts.forEach((contatto, index) =>
{
    let div = document.createElement('div');
    div.className = 'col-12 col-md-6 mb-3';
    div.innerHTML = `
       <article class="contact-card">
   
            <p> Nome: ${contatto.nome} </p>
            <p> Telefono: ${contatto.telefono} </p>
             <button class="edit-btn" onclick="editContact(${index})">Modifica contatto</button>
        <button onclick="deleteContact(${index})">Elimina</button>
     
      </article>
            `;

    container.appendChild(div);
});
}



// EVENTI; CLICK BOTTONE AGGIUNGO

btnAdd.addEventListener('click', () => {

    let nome = nomeInput.value.trim();
    let telefono = telefonoInput.value.trim();

    if ( nome === '' || telefono === '') {
        
        alert("Compila i campi!");

        return;
    }

    //all'array li aggiungo;

contacts.push({
    nome: nome,
    telefono: telefono
});



 //MOSTRA / NASCONDI

    btnToggle.addEventListener('click', () => {

        container.classList.toggle('d-none');
    });


    //FUNZIONE ELIMINAZIONE

    function deleteContact(index) {
        console.log('index:', index);
if(confirm("Sei sicuro di voler eliminare questo contatto?")){
        //RIMUOVO ELEMENT BY ARRAY
        contacts.splice(index, 1);
        

        //FINE E STAMPA F.
        renderContacts();
    }
}
   

    //FUNZIONW MODIFICA contatto-i

     function editContact(index) {
            let nuovoNome = prompt("Modifica il nome:", contacts[index].nome);
            let nuovoTelefono = prompt("Modifica il telefono:", contacts[index].telefono);

            if (nuovoNome !== null && nuovoTelefono !== null) {

                contacts[index].nome = nuovoNome.trim() || contacts[index].nome;
                contacts[index].telefono = nuovoTelefono.trim() || contacts[index].telefono;
                renderContacts();
            }
        }

   //pulisci reset_inputs
    nomeInput.value = '';
   telefonoInput.value = '';

            renderContacts();

            });
    //FINISCE LA FUNZIONE
    renderContacts();

    //Parte all'avvio; 

  