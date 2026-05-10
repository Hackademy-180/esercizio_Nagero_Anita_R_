

//Selettori document (DOM)->


let nomeInput = document.querySelector('#inputName');
let telefonoInput = document.querySelector('#inputPhone');
let btnAdd = document.querySelector('#addBtn');
let btnToggle = document.querySelector('#btnToggle');
let container = document.querySelector('#contactContainer');


//Lista contatti /array

//Lista di Contatti, per esempio; 
let contacts = [
    {
        nome: "Anita Nagero" , telefono : "3281990000"}
,  
{
    nome: "Suocera Maria" , telefono : "+09662233114"
}
];



//Funzione per avere i contatti
function renderContacts() {
    container.innerHTML = '';
    contacts.forEach((contatto, index) =>
{
    let div = document.createElement('div');




    div.className = 'col-12 col-md-6 mb-3';
    div.innerHTML = `
            <div class= "card p-3">
            <p> Nome: ${contatto.nome} </p>
            <p> Telefono: ${contatto.telefono} </p>
             <button class="btn-edit btn btn-warning btn-sm me-2" onclick="editContact(${index})">Modifica contatto</button>
        <button class="btn-delete btn btn-danger btn-sm" onclick="deleteContact(${index})">Elimina</button>
      </div
            `;

    container.appendChild(div);
});
}



//Aggiungi Eventi (Contatti!!!)

btn.addEventListener('click', () => {

    let nome = inputName.value.trim();
    let telefono = telefonoInput.value.trim();

    if ( nome === '' || telefono === '') {
        
        alert("Compila i campi!");

        return;
    }



contacts.push({
    nome: nome,
    telefono: telefono
});



//pulisci inputs
    nomeInput.value = '';
   telefonoInput.value = '';

    renderContacts();

    });

    //FUNZIONE ELIMINAZIONE

    function deleteContact(index) {

        //RIMUOVO ELEMENT BY ARRAY
        contacts.splice(index, 1);

        //FINE E STAMPA F.
        renderContacts();
    }

    //MODIFICA contatto-i

     function editContact(index) {
            let nuovoNome = prompt("Modifica il nome:", contacts[index].nome);
            let nuovoTelefono = prompt("Modifica il telefono:", contacts[index].telefono);

            if (nuovoNome !== null && nuovoTelefono !== null) {
                contacts[index].nome = nuovoNome.trim();
                contacts[index].telefono = nuovoTelefono.trim();
                renderContacts();
            }
        }

    //MOSTRA / NASCONDI

    btgToggle.addEventListener('click', () => {
        container.classList.toggle('d-none');
    });

    //FINISCE LA FUNZIONE
    renderContacts();

    //Parte all'avvio; 

  