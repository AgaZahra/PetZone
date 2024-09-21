import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import supabase from "../../config/supabase/supabase";

const productData = [];

const productSlice = createSlice({
    name: "products",
    initialState: productData,
    reducers: {
        readproduct: (state, action) => {
            return action.payload;
        },
        add: (state, action) => {
            const productadd = async () => {
                const { error } = await supabase
                    .from('petshop-products')
                    .insert(action.payload);
                if (error) {
                    console.log(error);
                } else {
                    swal('Product added successfully', '', 'success');
                    setTimeout(() => {
                        window.location.assign("/addproduct");
                    }, 2000);
                }
            };
            productadd();
        },
        productremove: (state, action) => {
            const productdelete = async () => {
                const { error } = await supabase
                    .from('petshop-products')
                    .delete()
                    .eq('id', action.payload);
                if (error) {
                    console.log(error);
                } else {
                    swal('Product was deleted', '', 'warning');
                    setTimeout(() => {
                        window.location.assign("/productdashboard");
                    }, 2000);
                }
            };
            productdelete();
        },
        edit: (state, action) => {
            const productupdate = async () => {
                // Supabase sorğusu vasitəsilə məlumatları yeniləmək
                const { error } = await supabase
                    .from('petshop-products')
                    .update(action.payload.data) // yenilənmiş məlumatlar
                    .eq('id', action.payload.id); // redaktə edilən məhsulun ID-si

                if (error) {
                    console.log(error);
                } else {
                    swal('Product updated successfully', '', 'success');
                    setTimeout(() => {
                        window.location.assign("/productdashboard");
                    }, 2000);
                }
            };
            productupdate();
        },
        // Yeni stok yeniləmə funksiyası
        updatestock: (state, action) => {
            const updateStock = async () => {
                const { error } = await supabase
                    .from('petshop-products')
                    .update({ stock: action.payload.newStock }) // Yenilənmiş stok miqdarı
                    .eq('id', action.payload.id); // Məhsulun ID-si

                if (error) {
                    console.log(error);
                } else {
                    swal('Stock updated successfully', '', 'success');
                }
            };
            updateStock();
        }
    }
});

export default productSlice.reducer;
export const { add, readproduct, productremove, edit, updatestock } = productSlice.actions;
