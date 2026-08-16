export const getProductData = async (url) => {
  const response = await fetch(url);
  const products = await response.text();
  console.log(products);
  return products;
};

export default getProductData;
