'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";
export default function Advantage() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });
    const advantagesData = t('advantages.box', { returnObjects: true });
    const advantagesArray = Array.isArray(advantagesData) ? advantagesData : [];

    return (
        <div className="container">
            <div className="row  mb-4 mt-4">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 ">
                    <h2 data-aos="fade-right" className="p-3" dangerouslySetInnerHTML={{ __html: t('advantages.heading') }} />

                    <div className="advantages_div">
                        {advantagesArray.map((advantage, index) => (
                            <div data-aos="fade-up" className="advantages_list" key={index}>
                                <h4>{t(advantage.heading)}</h4>
                                <p>{t(advantage.para)}</p>
                            </div>
                        ))}
                    </div>
                    <h2 className="pt-3" dangerouslySetInnerHTML={{ __html: t('advantages.ourtip') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('advantages.para') }} />
                </div>
            </div>
        </div>
    )
}