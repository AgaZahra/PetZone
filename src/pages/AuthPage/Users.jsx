import React, { useRef, useState } from 'react';
import { FaGoogle, FaFacebookF, FaGithub, FaLinkedinIn, FaEyeSlash, FaEye } from 'react-icons/fa';
import { GoMail } from 'react-icons/go';
import { useDispatch } from 'react-redux';
import { addUser, loginUser } from '../../tools/slices/registerSlice';
import { useCookies } from 'react-cookie';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import 'animate.css';

const Users = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [isActive, setIsActive] = useState(false);
    const [cookies, setCookie] = useCookies(['cookie-petshop']);
    const [showPassword, setShowPassword] = useState(false);
    const [valitedPassword, setValitedPassword] = useState(false);
    const [passwordSignup, setPasswordSignup] = useState('');

    // Sign Up refs
    const fullname = useRef(null);
    const emailSignup = useRef(null);
    const passwordSignupRef = useRef(null);
    const confirePassword = useRef(null);

    // Sign In refs
    const emailSignin = useRef(null);
    const passwordSignin = useRef(null);

    const validatePassword = (password) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;
        return regex.test(password);
    };

    const registerSubmited = (e) => {
        e.preventDefault();

        const userData = {
            fullname: fullname.current?.value,
            email: emailSignup.current?.value,
            password: passwordSignupRef.current?.value,
            confirePassword: confirePassword.current?.value,
        };

        if (!userData.fullname || !userData.email || !userData.password || !userData.confirePassword) {
            Swal.fire({
                title: t('authPage.alert.warning.inputReg'),
                text: "",
                icon: "warning",
                showClass: {
                    popup: `animate__animated animate__fadeInUp animate__faster`,
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutDown animate__faster`,
                },
                customClass: {
                    popup: 'my-popup-class',
                    title: 'my-title-class',
                    confirmButton: 'my-confirm-button-class',
                },
            });
            return;
        }

        if (userData.password !== userData.confirePassword) {
            Swal.fire({
                title: t('authPage.alert.warning.pass'),
                text: "",
                icon: "warning",
                showClass: {
                    popup: `animate__animated animate__fadeInUp animate__faster`,
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutDown animate__faster`,
                },
                customClass: {
                    popup: 'my-popup-class',
                    title: 'my-title-class',
                    confirmButton: 'my-confirm-button-class',
                },
            });
            return;
        }

        if (!validatePassword(userData.password)) {
            setValitedPassword(true);
            return;
        }

        setValitedPassword(false);
        dispatch(addUser(userData));
    };

    const loginSubmited = (e) => {
        e.preventDefault();

        const loginData = {
            email: emailSignin.current?.value,
            password: passwordSignin.current?.value,
        };

        if (!loginData.email || !loginData.password) {
            Swal.fire({
                title: t('authPage.alert.warning.inputLogin'),
                text: "",
                icon: "warning",
                showClass: {
                    popup: `animate__animated animate__fadeInUp animate__faster`,
                },
                hideClass: {
                    popup: `animate__animated animate__fadeOutDown animate__faster`,
                },
                customClass: {
                    popup: 'my-popup-class',
                    title: 'my-title-class',
                    confirmButton: 'my-confirm-button-class',
                },
            });
            return;
        }

        dispatch(loginUser(loginData));
    };

    const handleRegisterClick = () => {
        setIsActive(true);
    };

    const handleLoginClick = () => {
        setIsActive(false);
    };

    return (
        <section className="auth-container">
            <div className={`container m-5 ${isActive ? "active" : ""}`}>
                {/* Sign Up */}
                <div className="form-container sign-up">
                    <form onSubmit={registerSubmited}>
                        <h1>{t('authPage.signUp')}</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FaGoogle /></a>
                            <a href="#" className="icon"><FaFacebookF /></a>
                            <a href="#" className="icon"><FaGithub /></a>
                            <a href="#" className="icon"><FaLinkedinIn /></a>
                        </div>
                        <span>{t('authPage.social')}</span>
                        <label className="form-label">{t('authPage.name')}</label>
                        <div className="form-input">
                            <input ref={fullname} type="text" placeholder={t('authPage.name')} />
                        </div>
                        <label className="form-label">{t('authPage.mail')}</label>
                        <div className="form-input">
                            <input ref={emailSignup} type="email" placeholder={t('authPage.mail')} />
                            <span><GoMail className='icon' /></span>
                        </div>
                        <label className='form-label'>{t('authPage.pass')}</label>
                        <div className="form-input">
                            <input
                                ref={passwordSignupRef}
                                type={showPassword ? 'text' : 'password'}
                                placeholder={t('authPage.pass')}
                                onChange={(e) => setPasswordSignup(e.target.value)}
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className='icon' /> : <FaEye className='icon' />}
                            </span>
                        </div>
                        <label className="form-label">{t('authPage.confirmPass')}</label>
                        <div className="form-input">
                            <input ref={confirePassword} type="password" placeholder={t('authPage.confirmPass')} />
                        </div>
                        {valitedPassword && (
                            <p className='error-password'>{t('authPage.regux')}</p>
                        )}
                        <button type="submit">{t('authPage.btnIn')}</button>
                    </form>
                </div>

                {/* Sign In */}
                <div className="form-container sign-in">
                    <form onSubmit={loginSubmited}>
                        <h1>{t('authPage.signIn')}</h1>
                        <div className="social-icons">
                            <a href="#" className="icon"><FaGoogle /></a>
                            <a href="#" className="icon"><FaFacebookF /></a>
                            <a href="#" className="icon"><FaGithub /></a>
                            <a href="#" className="icon"><FaLinkedinIn /></a>
                        </div>
                        <span>{t('authPage.social')}</span>
                        <label className="form-label">{t('authPage.mail')}</label>
                        <div className="form-input">
                            <input ref={emailSignin} type="email" placeholder={t('authPage.mail')} />
                            <span><GoMail className='icon' /></span>
                        </div>
                        <label className="form-label">{t('authPage.pass')}</label>
                        <div className="form-input">
                            <input
                                ref={passwordSignin}
                                type={showPassword ? 'text' : 'password'}
                                placeholder={t('authPage.pass')}
                                onChange={(e) => setPasswordSignin(e.target.value)} // Düzəliş edildi
                            />
                            <span onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <FaEyeSlash className='icon' /> : <FaEye className='icon' />}
                            </span>
                        </div>
                        <a href="#">{t('authPage.forget')}</a>
                        <button type="submit">{t('authPage.btnIn')}</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h1>{t('authPage.back')}</h1>
                            <p>{t('authPage.p')}</p>
                            <button onClick={handleLoginClick}>{t('authPage.btnIn')}</button>
                        </div>
                        <div className="toggle-panel toggle-right">
                            <h1>{t('authPage.hi')}</h1>
                            <p>{t('authPage.p')}</p>
                            <button onClick={handleRegisterClick}>{t('authPage.btnUp')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Users;
