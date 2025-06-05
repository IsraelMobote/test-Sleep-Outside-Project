

const baseURL = import.meta.env.VITE_SERVER_URL

async function convertToJson(res) {
  const data = await res.json();
  if (res.ok) {
    return data;
  } else {
    throw { name: 'servicesError', message: data };
  }
}



export default class ExternalServices {

  async getData(category) {
    const response = await fetch(`${baseURL}products/search/${category}`);
    const data = await convertToJson(response);
    return data.Result;
  }
  async findProductById(id) {
    const product = await fetch(`${baseURL}product/${id}`);
    const ExternalServices = await convertToJson(product);
    return ExternalServices.Result;
  }
}

export async function checkoutData(payload) {
  console.log(payload);

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  }

  const result = await fetch(`${baseURL}checkout/`, options);
  return convertToJson(result);
}