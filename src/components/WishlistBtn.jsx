import React from 'react'
import { useWishlist } from 'react-use-wishlist';

const WishlistBtn = () => {
    const {addWishlistItem,removeWishlistItem,inWishlist}=useWishlist();
    const toggleWishlist =()=>{
        if(inWishlist(product.id)){
            removeWishlistItem(process);
        }
        else{
            addWishlistItem(product);
        }
    };
  return (
   <>
<button onClick={()=>toggleWishlist(myProduct)}>
    {inWishlist(myProduct)? " dolu":"bos"}

</button>
      


       
   </>
  )
}

export default WishlistBtn