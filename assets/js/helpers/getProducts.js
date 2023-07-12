import data from './data.js'
/*  async function getProducts(){

   try{
    const resp= await window.fetch('assets/js/helpers/data.json');
    const data=await resp.json()
    return data
  }catch(error){
    console.log(error)
  }

  
}  */

function getProducts() {
  return data
}

export default getProducts