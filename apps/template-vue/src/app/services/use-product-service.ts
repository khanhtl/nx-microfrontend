import axios from "axios"
export function useProductService() {
  return {
    async list() {
      const res=await axios.get('https://fakestoreapi.com/products');
      return res.data;
    },
    async byId(id: any) {
      const res= await axios.get('https://fakestoreapi.com/products/' + id);
      return res.data;
    }
  }
}
