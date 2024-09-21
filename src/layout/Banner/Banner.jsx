import React from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineFlashOn } from "react-icons/md";


const Banner = () => {
    const { t } = useTranslation();

    // Bütün mətnləri təkrar edəcəyimiz array yaradırıq
    const texts = [
        t("banner.one"),
        t("banner.two"),
        t("banner.three"),
        t("banner.four"),
        t("banner.five")
    ];

    return (
        <div className="marquee">
            <div className="marquee-content">
                {texts.concat(texts).map((text, index) => (
                    <p key={index}><MdOutlineFlashOn/>
                    {text}</p>
                ))}
            </div>
        </div>
    );
}

export default Banner;
