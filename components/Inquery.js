'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";

export default function Inquery() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });
    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                    <h2 className="pt-4" dangerouslySetInnerHTML={{ __html: t('inquery.heading') }} />
                                            

                    <p dangerouslySetInnerHTML={{ __html: t('inquery.para') }} />

                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 ">
                    <div className="row">
                        <div className="col-6">
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder={ t('person_details.firstname') }/>
                        </div>
                        <div className="col-6 mt-8">
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder={ t('person_details.lastname') }/>
                        </div>
                        <div className="mt-8">
                            <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder={ t('person_details.regarding') }/>
                        </div>
                        <div className="mt-8">
                            <textarea
                                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" placeholder={ t('person_details.yourmessage') }></textarea>
                        </div>
                        <div className="mt-8">
                            <button
                                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
{ t('person_details.sendmessage') }            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}