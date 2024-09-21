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
      const registerNewUser = async () => {
        const { fullname,  email, password, confirePassword } = action.payload;
        // Password validation
        if (password !== confirePassword) {
          Swal.fire({
            title: "Password is not equal!",
            text: "",
            icon: "error",
            showClass: {
                popup: `animate__animated animate__fadeInUp animate__faster`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOutDown animate__faster`
            },
            customClass: {
                popup: 'my-popup-class',
                title: 'my-title-class',
                confirmButton: 'my-confirm-button-class'
            }
        });
          return;
        }

        try {
          const { data, error: selectError } = await supabase.from("petshop-register").select();
          if (selectError) {
            throw selectError;
          }

          if (!data.find((user) => user.email === email)) {
            const { error: insertError } = await supabase.from("petshop-register").insert({
              fullname,
              email,
              password,
            });

            if (insertError) {
              throw insertError;
            } else {
              Swal.fire({
                title: "New account has been created!",
                text: "",
                icon: "success",
                showClass: {
                    popup: `animate__animated animate__fadeInUp animate__faster`
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutDown animate__faster`
                },
                customClass: {
                    popup: 'my-popup-class',
                    title: 'my-title-class',
                    confirmButton: 'my-confirm-button-class'
                }
            });

              setTimeout(() => {
                window.location.assign("/");
              }, 2000);
            }
          } else {
            Swal.fire({
              title: "This email is already registered!",
              text: "",
              icon: "error",
              showClass: {
                  popup: `animate__animated animate__fadeInUp animate__faster`
              },
              hideClass: {
                  popup: `animate__animated animate__fadeOutDown animate__faster`
              },
              customClass: {
                  popup: 'my-popup-class',
                  title: 'my-title-class',
                  confirmButton: 'my-confirm-button-class'
              }
          });
          }
        } catch (error) {
          Swal.fire({
            title: "Something went wrong!",
            text: "",
            icon: "error",
            showClass: {
                popup: `animate__animated animate__fadeInUp animate__faster`
            },
            hideClass: {
                popup: `animate__animated animate__fadeOutDown animate__faster`
            },
            customClass: {
                popup: 'my-popup-class',
                title: 'my-title-class',
                confirmButton: 'my-confirm-button-class'
            }
        });
          console.error(error);
        }
      };

      registerNewUser();
    },
    loginUser: (state, action) => {
        const loginUser = async () => {
          const { email, password } = action.payload;
  
          try {
            const { data, error: selectError } = await supabase.from("petshop-register").select();
            if (selectError) {
              throw selectError;
            }
  
            const userfiltered = data.find((p) => p.email === email);
            if (!userfiltered) {
              Swal.fire({
                title: "Email or password is wrong!",
                text: "",
                icon: "error",
                showClass: {
                    popup: `animate__animated animate__fadeInUp animate__faster`
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutDown animate__faster`
                },
                customClass: {
                    popup: 'my-popup-class',
                    title: 'my-title-class',
                    confirmButton: 'my-confirm-button-class'
                }
            });
            } else {
              if (userfiltered.password.trim() === password.trim())  {
                Swal.fire({
                  title: "Login is successful!",
                  text: "",
                  icon: "success",
                  showClass: {
                      popup: `animate__animated animate__fadeInUp animate__faster`
                  },
                  hideClass: {
                      popup: `animate__animated animate__fadeOutDown animate__faster`
                  },
                  customClass: {
                      popup: 'my-popup-class',
                      title: 'my-title-class',
                      confirmButton: 'my-confirm-button-class'
                  }
              });
                setTimeout(() => {
                    window.location.assign('/'); 
                  }, 2000);
                localStorage.setItem('username', userfiltered.fullname);
              } else {
                Swal.fire({
                  title: "Email or password is wrong!",
                  text: "",
                  icon: "error",
                  showClass: {
                      popup: `animate__animated animate__fadeInUp animate__faster`
                  },
                  hideClass: {
                      popup: `animate__animated animate__fadeOutDown animate__faster`
                  },
                  customClass: {
                      popup: 'my-popup-class',
                      title: 'my-title-class',
                      confirmButton: 'my-confirm-button-class'
                  }
              });
              }
            }
          } catch (error) {
            Swal.fire({
              title: "Something went wrong!",
              text: "",
              icon: "error",
              showClass: {
                  popup: `animate__animated animate__fadeInUp animate__faster`
              },
              hideClass: {
                  popup: `animate__animated animate__fadeOutDown animate__faster`
              },
              customClass: {
                  popup: 'my-popup-class',
                  title: 'my-title-class',
                  confirmButton: 'my-confirm-button-class'
              }
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
