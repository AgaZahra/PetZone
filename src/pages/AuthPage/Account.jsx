import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../../tools/slices/registerSlice'; // Yeni bir `updateUser` action əlavə edəcəyik
import swal from 'sweetalert';
import supabase from '../../config/supabase/supabase';

const Account = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({
        fullname: '',
        birthday: '',
        tel: '',
        email: '',
        password: '',
    });

    // Refs for form fields
    const fullnameRef = useRef(null);
    const birthdayRef = useRef(null);
    const telRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(() => {
        // Fetch the user's data when the component mounts
        const fetchUserData = async () => {
            try {
                const email = localStorage.getItem('email'); // Assuming the email is stored in local storage
                const { data, error } = await supabase
                    .from('petshop-register')
                    .select()
                    .eq('email', email);

                if (error) throw error;

                if (data.length > 0) {
                    setUserData(data[0]);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                swal('Failed to load user data', '', 'error');
            }
        };

        fetchUserData();
    }, []);

    const handleUpdate = async (e) => {
        e.preventDefault();

        const updatedData = {
            fullname: fullnameRef.current?.value || userData.fullname,
            birthday: birthdayRef.current?.value || userData.birthday,
            tel: telRef.current?.value || userData.tel,
            email: emailRef.current?.value || userData.email,
            password: passwordRef.current?.value || userData.password,
        };

        // Perform validation
        if (updatedData.password.length < 6) {
            swal('Password must be at least 6 characters long', '', 'warning');
            return;
        }

        try {
            const { error } = await supabase
                .from('petshop-register')
                .upsert(updatedData, { onConflict: ['email'] });

            if (error) throw error;

            swal('Account updated successfully!', '', 'success');
        } catch (error) {
            console.error('Error updating user data:', error);
            swal('Failed to update account', '', 'error');
        }
    };

    return (
        <section className="account-container">
            <h1>Account Settings</h1>
            <form onSubmit={handleUpdate}>
                <div className="mb-3">
                    <label className="form-label">Full name</label>
                    <input
                        type="text"
                        className="form-control"
                        defaultValue={userData.fullname}
                        ref={fullnameRef}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Date of birth</label>
                    <input
                        type="date"
                        className="form-control"
                        defaultValue={userData.birthday}
                        ref={birthdayRef}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Tel</label>
                    <input
                        type="tel"
                        className="form-control"
                        defaultValue={userData.tel}
                        ref={telRef}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        defaultValue={userData.email}
                        ref={emailRef}
                        disabled
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        ref={passwordRef}
                        placeholder="Leave empty if you don't want to change"
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </section>
    );
};

export default Account;
