function modal(db){
const productsDOM=document.querySelector('.products__container');
const modalDOM = document.querySelector('.modal');
function printModal(elem){
  let htmlModal='';

    htmlModal=`
        <div class="modal-content">
          <h2>${elem.name}</h2>
          <p>${elem.description}</p>
        </div>
    `
   ;
   modalDOM.innerHTML=htmlModal;
  
}

function openModal(elem) {
 
    console.log(elem.description)
  
  printModal(elem);
  modalDOM.style.display = 'block';
}

function closeModal() {
  modalDOM.style.display = 'none';
}

productsDOM.addEventListener('click', function(e){
  if(e.target.closest('.info-btn')){
    const id = +e.target.closest('.info-btn').dataset.id;
    const productFinded=db.find(prod=>prod.id===id)

    openModal(productFinded);
  }
  });

  modalDOM.addEventListener('click', closeModal);
}

export default modal;