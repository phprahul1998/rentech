'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";
export default function Rethinkenergy() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });

    return (
        <div className="container">
            <div className="row  mb-4">
                <div data-aos="fade-up"
                    data-aos-duration="3000" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 rethink ">
                    <div className="">
                        <h2 className="text-white p-3">
                            {t('rethinkenergy.rethinkheading')}
                        </h2>
                    </div>
                </div>
                <div data-aos="fade-left" className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <h2 className="p-2">{t('rethinkenergy.subheading')}</h2>
                    <p className="p-2" dangerouslySetInnerHTML={{ __html: t('rethinkenergy.para') }} />
                </div>
            </div>
        </div>
    )
}