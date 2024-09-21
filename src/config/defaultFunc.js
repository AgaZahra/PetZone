
import supabase from "./supabase/supabase";
import { readproduct } from "../tools/slices/productSlice";
import { readregister } from "../tools/slices/registerSlice";
import store from "../tools/store/store";
import { readcategory } from "../tools/slices/categorySlice";

export const userdata = async () => {
    try {
      const { data, error } = await supabase.from('petshop-register').select();
      if (error) {
        console.log("Supabase error:", error); // Əlavə məlumat ver
      } else {
        
        store.dispatch(readregister(data));
      }
    } catch (err) {
      console.error('An unexpected error occurred:', err);
    }
  };
  

 
export const callProduct = async()=>{
  const {error,data} = await supabase.from('petshop-products').select();
  
  if (error) {
      console.log(error);
  }else{
      store.dispatch((readproduct(data)));
  }
  
}


export const callCategory = async()=>{
    const {error,data} = await supabase.from('petshop-category').select();

    if (error) {
        console.log(error);
    }else{
        
        store.dispatch((readcategory(data)));
        
    }
  }


