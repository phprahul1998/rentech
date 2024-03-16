'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";
export default function Rethinkenergy() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });

    return (
   <div className="project-area area-padding">
    <div className="container">
        <div className="row">
            <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
             <h2  className="p-2 left-headline" dangerouslySetInnerHTML={{ __html: t('rethinkenergy.rethinkheading') }} />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="single-awesome-project">
                    <div className="awesome-img">
<Image src="img/12_Pic1.png" alt="" />

                    </div>
                </div>
            </div>

             <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="single-awesome-project">
                    <div className="awesome-img">
                                                   <Image src="img/12_Pic2.png" alt="" />

                    </div>
                </div>
            </div>


             <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="single-awesome-project">
                    <div className="awesome-img">
                                                  <Image src="img/12_Pic3.png" alt="" />

                    </div>
                </div>
            </div>


             <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-12">
                <div className="single-awesome-project">
                    <div className="awesome-img">
                       <Image src="img/12_Pic4.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
          <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12">
                        <p className="p-2" dangerouslySetInnerHTML={{ __html: t('rethinkenergy.para') }} />
            </div>
    </div>
</div>

    )
}