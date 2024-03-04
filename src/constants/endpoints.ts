export const BASE_URL = import.meta.env.VITE_API_URL;

const productEndpoints = {
  products: BASE_URL + "/products",
  productsSearch: BASE_URL + "/products/search",
};

export default {
  productEndpoints,
};
