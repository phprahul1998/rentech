import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { FaPlayCircle } from "react-icons/fa";

import { useTranslation } from "react-i18next";
export default function Advantage() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });
    const advantagesData = t('advantages.box', { returnObjects: true });
    const advantagesArray = Array.isArray(advantagesData) ? advantagesData : [];

    return (
        <div className="about-area bg-color area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <h2 data-aos="fade-up" className="p-3 left-headline mb-2" dangerouslySetInnerHTML={{ __html: t('advantages.heading') }} />
                    </div>
                    {advantagesArray.map((advantage, index) => (
                        <div key={index} className="col-md-12 col-sm-12 col-xs-12">
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="about-image">
                                       <Image src={`${t(advantage.image)}`} alt="" className="ab-first-img" />
                                       <Image src={`${t(advantage.thumbnail)}`} alt="" className="ab-second-img" />
                                        <a  target='_blank' href={`${t(advantage.videlink)}`} rel="noopener noreferrer" className="video-play vid-zone">
                                       <FaPlayCircle />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <div className="about-content">
                                        <h4>{t(advantage.heading)}</h4>
                                        <p dangerouslySetInnerHTML={{ __html: t(advantage.para) }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="col-md-12 col-sm-12 col-xs-12">   

                         <h2 className="pt-3" dangerouslySetInnerHTML={{ __html: t('advantages.ourtip') }} />
                    <p dangerouslySetInnerHTML={{ __html: t('advantages.para') }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
