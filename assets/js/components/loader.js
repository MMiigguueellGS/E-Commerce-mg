function loader(){
  window.addEventListener('load',function(){
    const loader=document.querySelector('.loader');
    loader.classList.add('loader__hidden');
  })
}
export default loader