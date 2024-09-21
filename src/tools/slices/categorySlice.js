import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../config/supabase/supabase";
import swal from "sweetalert";

const categoryData = [];

const categorySlice = createSlice({
  name: "category",
  initialState: categoryData,
  reducers: {
    readcategory: (state, action) => {
      return action.payload;
    },
    add: (state, action) => {
      const categoryadd = async () => {
        const { err } = await supabase
          .from("petshop-category")
          .insert(action.payload);
        if (err) {
          console.log(err);
        } else {
          swal("Category add successfully", "", "success");
          setTimeout(() => {
            window.location.assign("/categorydashboard");
          }, 2000);
        }
      };
      categoryadd();
    },
    categoryremove: (state, action) => {
      const categorydelete = async () => {
        const { err } = await supabase
          .from("petshop-category")
          .delete()
          .eq("id", action.payload);
        if (err) {
          console.log(err);
        } else {
          swal("Category was deleted", "", "warning");
          setTimeout(() => {
            window.location.assign("/categorydashboard");
          }, 2000);
        }
      };
      categorydelete();
    },
    edit: (state, action) => {
      const categoryupdate = async () => {
        const { err } = await supabase
          .from("petshop-category")
          .update(action.payload.data)
          .eq("id", action.payload.id);
        if (err) {
          console.log(err);
        } else {
          swal("Category was edited!", "", "warning");
          setTimeout(() => {
            window.location.assign("/categorydashboard");
          }, 2000);
        }
      };
      categoryupdate();
    }
  }
});

export default categorySlice.reducer;
export const { add, readcategory, categoryremove, edit } = categorySlice.actions;
