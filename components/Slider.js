'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";
import MultiStepForm from '/components/MultiStepForm';

export default function Slider() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });

    return (
        <div className="imageSlider">
            <div className="container-fluid overlay">
                <div className="row p-6">
                    <div className="col-md-5">
                        {/*<div data-aos="fade-up" className="homepage ">
                            <h1 className="">{t('home.main_heading', 'Default Heading')}</h1>
                            <p className="">
                                {t('home.main_desc', 'Default Heading')}
                            </p>
                        </div>*/}
                    </div>
                    <div className="col-md-7 MultiStepForm">
                        <MultiStepForm />

                    </div>
                </div>
            </div>
        </div>
    )
}