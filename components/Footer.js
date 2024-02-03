'use client'
import { useEffect, useState } from 'react';
import Link from "next/link";
import Image from 'next/image'
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t, i18n } = useTranslation('en', { useSuspense: false });
    return (
        <div className="footer">
                <div className="content ">
                    <div className="p-4 text-center">
                        <p  dangerouslySetInnerHTML={{ __html: t('footer.para') }} />
                    </div>
                </div>
        </div>
    )
}