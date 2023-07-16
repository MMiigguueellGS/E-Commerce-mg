const ls = window.localStorage

function darkMode(){
  const header = document.querySelector('.header')

  if(ls.getItem('dark')){
    document.body.classList.add('dark')
  }

    header.addEventListener('click',function(e){
      if(e.target.closest('.nav__sun_')){
        document.body.classList.toggle('dark')        
        if(document.body.classList.contains('dark')){
          ls.setItem('dark','dark')
        }else {        
          ls.removeItem('dark')
        }
      }
    // bgDark();
    })
}

export default darkMode

