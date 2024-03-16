'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";
import { GiConvergenceTarget } from "react-icons/gi";

export default function Ourservice() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });

    return (
        <div className=" area-padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 col-sm-4 col-xs-12">
                        <div className="left-headline">
                            <h3>Tionscal helping clients in a variety of fields to<span className="color"> improve their productivity.</span></h3>
                            <p>Our consultants opt in to the projects they genuinely want to work on, committing wholeheartedly to delivering.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-8 col-xs-12">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-services">
                                    <div className="well-icon">
                                        <GiConvergenceTarget />
                                    </div>
                                    <div className="well-content">
                                        <h2>Service 2</h2>
                                        <p>Dummy text is also used to demonstrate the appearance of different.
                                            Dummy text is also used to demonstrate the appearance of different.
                                            Dummy text is also used to demonstrate the appearance of different.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-services">
                                    <div className="well-icon">
                                        <GiConvergenceTarget />
                                    </div>
                                    <div className="well-content">
                                        <h2>Service 2</h2>
                                        <p>Dummy text is also used to demonstrate the appearance of different.
                                            Dummy text is also used to demonstrate the appearance of different.
                                            Dummy text is also used to demonstrate the appearance of different.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}