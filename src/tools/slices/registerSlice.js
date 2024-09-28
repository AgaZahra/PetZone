import { createSlice } from "@reduxjs/toolkit";
import supabase from "../../config/supabase/supabase";
import Swal from 'sweetalert2';
import 'animate.css';

const registerSlice = createSlice({
  name: "registers",
  initialState: [],
  reducers: {
    readregister: (state, action) => {
      return action.payload;
    },
    addUser: (state, action) => {
      const { fullname, email, password, confirePassword } = action.payload;

      const registerNewUser = async () => {
        // Password validation
        if (password !== confirePassword) {
          Swal.fire({
            title: "Password is not equal!",
            icon: "error",
          });
          return;
        }

        try {
          const { data, error: selectError } = await supabase.from("petshop-register").select();
          if (selectError) throw selectError;

          if (!data.find((user) => user.email === email)) {
            const { error: insertError } = await supabase.from("petshop-register").insert({
              fullname,
              email,
              password,
            });

            if (insertError) throw insertError;

            Swal.fire({
              title: "New account has been created!",
              icon: "success",
            });

            setTimeout(() => {
              window.location.assign("/login");
            }, 2000);
          } else {
            Swal.fire({
              title: "This email is already registered!",
              icon: "error",
            });
          }
        } catch (error) {
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
          });
          console.error(error);
        }
      };

      registerNewUser();
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;

      const loginUser = async () => {
        try {
          const { data, error: selectError } = await supabase.from("petshop-register").select();
          if (selectError) throw selectError;

          const userfiltered = data.find((p) => p.email === email);
          if (!userfiltered || userfiltered.password.trim() !== password.trim()) {
            Swal.fire({
              title: "Email or password is wrong!",
              icon: "error",
            });
            return;
          }

          Swal.fire({
            title: "Login is successful!",
            icon: "success",
          });

          setTimeout(() => {
            window.location.assign('/'); 
          }, 2000);
          localStorage.setItem('username', userfiltered.fullname);
        } catch (error) {
          Swal.fire({
            title: "Something went wrong!",
            icon: "error",
          });
          console.error(error);
        }
      };

      loginUser();
    }
  },
});

// Export actions
export const { addUser, readregister, loginUser } = registerSlice.actions;

export default registerSlice.reducer;
