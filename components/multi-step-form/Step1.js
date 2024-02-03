'use client'
import React, { useState } from 'react';
import { useTranslation } from "react-i18next";

function Step1({ formData, setFormData }) {
    const { t } = useTranslation('en', { useSuspense: false });
    const [selectedBoxes, setSelectedBoxes] = useState([]);
    const [errorMessage, setErrorMessage] = useState(""); // Add state for error message

    const handleBoxClick = (boxValue) => {
        if (boxValue == '') {
            const newSelectedBoxes = [boxValue];
            setSelectedBoxes(newSelectedBoxes);

            // Update formData with the updated selectedBoxes array
            setFormData((prevFormData) => ({
                ...prevFormData,
                selectedBoxes: newSelectedBoxes,
            }));

            // Clear error message if a box is selected
            setErrorMessage("");
        } else {
            // Display error message if no box is selected
            setErrorMessage("Please select a box");
        }
    };
    return (
        <div className="stepform">
            <h4>{t('step1.heading', 'Default Heading')}</h4>
            <h4>{t('step1.subheading', 'Default Heading')}</h4>

            <div className="locationtype">
                {/* Map through boxes and render them with click handler */}
                {[1, 2, 3, 4].map(boxNumber => (
                    <div
                        key={boxNumber}
                        className={` box`}
                        onClick={() => handleBoxClick(`Box ${boxNumber}`)}
                    >
                        Box {boxNumber}
                    </div>
                ))}
            </div>

            {/* Display error message */}
            {errorMessage && (
                <div className="error-message">
                    {errorMessage}
                </div>
            )}
        </div>
    );
}

export default Step1;