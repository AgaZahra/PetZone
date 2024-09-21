import { createSlice } from "@reduxjs/toolkit";
import swal from "sweetalert";
import supabase from "../../config/supabase/supabase";

// Wishlist üçün boş başlanğıc state
const wishlistData = [];

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: wishlistData,
    reducers: {
        // Wishlist-ə məhsul əlavə etmək
        addToWishlist: (state, action) => {
            const addProductToWishlist = async () => {
                const { error } = await supabase
                    .from('wishlist') // Wishlist cədvəli
                    .insert({ user_id: action.payload.userId, product_id: action.payload.productId });
                if (error) {
                    console.log('Error adding product to wishlist:', error);
                } else {
                    swal('Product added to wishlist', '', 'success');
                }
            };
            addProductToWishlist();
        },
        
        // Wishlist-dən məhsul silmək
        removeFromWishlist: (state, action) => {
            const removeProductFromWishlist = async () => {
                const { error } = await supabase
                    .from('wishlist')
                    .delete()
                    .eq('id', action.payload.wishlistId); // Wishlist entry ID
                if (error) {
                    console.log('Error removing product from wishlist:', error);
                } else {
                    swal('Product removed from wishlist', '', 'warning');
                }
            };
            removeProductFromWishlist();
        },
        
        // İstifadəçinin wishlist-dəki məhsullarını oxumaq
        readWishlist: (state, action) => {
            return action.payload; // Wishlist məlumatlarını saxlamaq
        }
    }
});

export default wishlistSlice.reducer;
export const { addToWishlist, removeFromWishlist, readWishlist } = wishlistSlice.actions;
