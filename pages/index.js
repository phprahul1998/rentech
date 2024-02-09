import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import MultiStepForm from '../components/MultiStepForm';
import Rethinkenergy from '../components/Rethinkenergy';
import Advantage from '../components/Advantage';
import Inquery from '../components/Inquery';
import Footer from '../components/Footer';

export default function Home() {
  const { t } = useTranslation('en', { useSuspense: false });

  return (
    <div className="sectionData">
      <div className="container">
        <div className="row homepage">
          <div className="col-md-12">
            <div className="homepage">
              <h1 className="">{t('home.main_heading', 'Default Heading')}</h1>
              <p className="">
                {t('home.main_desc', 'Default Heading')}
              </p>
            </div>
          </div>
          <div className="col-md-12 MultiStepForm">
            <MultiStepForm />

          </div>
        </div>
      </div>
      <Rethinkenergy />
      <Advantage />
      <Inquery />
      <Footer />
    </div>
  )
}
