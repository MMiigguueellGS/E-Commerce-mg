function localStorage (){
  const storageDOM = document.querySelector('.nav');

  function agregarDB(){      
  const script=document.createElement('script');
  script.src = "assets/js/helpers/data.js";
  document.body.appendChild(script);
  window.location.reload();
 }
  
  storageDOM.addEventListener('click',function(e){
    if(e.target.closest('.nav__local__storage')){
      agregarDB();
          
    }         
  })  
    
  }

  export default localStorage;



  