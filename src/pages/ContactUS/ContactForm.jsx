import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const ContactForm = () => {
    const { t } = useTranslation();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [errors, setErrors] = useState({}); // Xəta mesajları üçün

    const validateForm = () => {
        let formErrors = {};

        if (!firstName) formErrors.firstName = `${t('contact.form.error')}`;
        if (!lastName) formErrors.lastName = `${t('contact.form.error')}`;
        if (!email) formErrors.email = `${t('contact.form.error')}`;
        if (!phoneNumber) formErrors.phoneNumber = `${t('contact.form.error')}`;
        if (!message) formErrors.message = `${t('contact.form.error')}`;

        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setSubmitted(true);
            setErrors({});

            // Form məlumatlarını yalnız hər şey düzgün olduqda sıfırla
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhoneNumber('');
            setMessage('');
        } else {
            setErrors(formErrors);
            setSubmitted(false);
        }
    };

    return (
        <div className='my-container'>
            <form onSubmit={handleSubmit} className="contact-form">
                <div className="input-group">
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder={t('contact.form.name')}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className={errors.firstName ? 'input-field error' : 'input-field'}
                        />
                        {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="text"
                            placeholder={t('contact.form.lastName')}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className={errors.lastName ? 'input-field error' : 'input-field'}
                        />
                        {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                    </div>
                </div>
                <div className="input-group">
                    <div className="input-wrapper">
                        <input
                            type="email"
                            placeholder={t('contact.form.email')}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={errors.email ? 'input-field error' : 'input-field'}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    <div className="input-wrapper">
                        <input
                            type="tel"
                            placeholder={t('contact.form.number')}
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className={errors.phoneNumber ? 'input-field error' : 'input-field'}
                        />
                        {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
                    </div>
                </div>
                <textarea
                    placeholder={t('contact.form.message')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="textarea-field"
                />
                <button type="submit" className="btn">
                    {t('contact.form.btn')}
                </button>

                {/* Şərti olaraq uğursuz bildiriş mesajını göstər */}
                {Object.keys(errors).length > 0 && !submitted && (
                    <div className="error-message-box">
                        <p>{t('contact.form.errMes')}</p>
                    </div>
                )}

                {/* Şərti olaraq uğurlu bildiriş mesajını göstər */}
                {submitted && (
                    <div className="success-message">
                        <p>{t('contact.form.succes')}</p>
                    </div>
                )}
            </form>
        </div>
    );
};

export const Address = () => {
    const { t } = useTranslation();

    return (
        <div className="address">
            <ul className='list-group'>
                <li>
                    <IoLocationOutline className='icon' />
                    <div className="content">
                        <h4>{t('contact.form.address')}</h4>
                        <p>{t('contact.form.addDesc')}</p>
                    </div>
                </li>
                <li>
                    <FaPhoneAlt className='icon' />
                    <div className="content">
                        <h4>{t('contact.form.span')}</h4>
                        <p>000-123-456-789 / 000-897-654-321</p>
                    </div>
                </li>
                <li>
                    <IoMailOutline className='icon' />
                    <div className="content">
                        <h4>{t('contact.form.email')}</h4>
                        <p>{t('contact.form.emailDesc')}</p>
                    </div>
                </li>
                <li>
                    <MdOutlineCalendarMonth className='icon' />
                    <div className="content">
                        <h4>{t('contact.form.open')}</h4>
                        <p>{t('contact.form.openDesc')}</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
