const form = document.querySelector('form')
const nameInput = document.getElementById("nameInput")
const nbrInput = document.getElementById("nbrInput")
const row = document.querySelector('.row')

// form event
form.addEventListener('submit', (e) => {
     e.preventDefault()
     nameVal = nameInput.value
     nbrVal = nbrInput.value

     //YANGI ELEMENT YARATISH
    const div = document.createElement('div')
    div.classList.add('col-lg-3')
    div.innerHTML = `
    <div class="card m-1">
        <div class="card-body d-flex flex-column">
            <h5 class="card-title"><i class="bi me-2 bi-person-circle"></i>${nameVal ? nameVal : "Name not entered" }</h5>
            <p class="card-text"><i class="bi me-2 bi-telephone"></i>${nbrVal ? nbrVal : "Phone number not entered" }</p>
            <button class="btn ms-auto btn-danger" id="delete"><i class="bi bi-trash"></i> Delete</button>
        </div>
    </div>
    `
    // YARATILGAN YANGI ELEMENTNI HTML GA QO'SHISH
    row.appendChild(div)
    showAlert("Add item", "success")
    nameInput.value = ''
    nbrInput.value = ''
})

//CARDNI O'CHIRISH
document.addEventListener('click', (e)=>{
    if(e.target.classList.value == 'btn ms-auto btn-danger'){
        const deleteBtn = document.querySelector('.btn-danger')
        deleteBtn.parentElement.parentElement.parentElement.remove();
        showAlert("Remove item","danger")
    }
    
})

function showAlert(massage, type){
    const alert = document.getElementById('alert')
    const span = document.createElement('span')
    span.innerHTML = `
    <div class='alert alert-${type}' role="alert">
    ${massage}
    </div>
    `
    alert.appendChild(span)

    setTimeout(() => {
        span.remove()
    },2000 );
}