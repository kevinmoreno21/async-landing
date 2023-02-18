import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(urlApi){
    const response = await fetch(urlApi);
    const data = await response.json();
    return data;
}

const anotherFunction = async (urlApi) => {
    try {
        const products = await fetchData(`${urlApi}/products`);	
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);	
        console.log(products);
        console.log(product.title);
        console.log(category.name);
        console.log('After data');
    } catch (error) {
        console.error('Another Function Error', error);
    }
}

anotherFunction(API);

 async function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      
      throw new Error('API Not Found');
    }
  }
  
  console.log(await runCode());