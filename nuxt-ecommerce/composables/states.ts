// type FilteredProductsType = {
//   id: number;
//   title: string;
//   price: string;
//   category: string;
//   description: string;
//   image: string;
// };

export const useProducts = () => useState('products', () => []);
export const useFilteredProducts = () => useState('filteredProducts', () => []);
export const useCategory = () => useState('category', () => []);

// export const useGetProducts = async () => {
//   const apiUrl = process.env.API_BASE_URL;
//   // const { data } = await useFetch(url.API_BASE_URL || "");
//   // const { data } = await useFetch(`${apiUrl}`);
//   const { data, status } = await useFetch('https://fakestoreapi.com/products');
//   try {
//     return { data, status };
//   } catch (error) {
//     console.log(error);
//   }
// };
