import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';

function MainForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        gender: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const prevStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const renderStep = () => {
        switch (currentStep) {
            case 1:
                return <Step1 formData={formData} setFormData={setFormData} />;
            case 2:
                return <Step2 formData={formData} setFormData={setFormData} />;
            case 3:
                return <Step3 formData={formData} setFormData={setFormData} />;
            case 4:
                return <Step4 formData={formData} />;
            default:
                return null;
        }
    };

    return (
        <div className="finalstepform">
            <form>
                {renderStep()}
                <div className="mt-3">
                    {currentStep > 1 && (
                        <button
                            type="button"
                            className="btn btn-secondary me-2"
                            onClick={prevStep}
                        >
                            Previous
            </button>
                    )}
                    {currentStep < 4 && (
                        <button
                            type="button"
                            className="btn btn-primary d-none"
                            onClick={nextStep}
                        >
                            Next
            </button>
                    )}
                </div>
            </form>
        </div>
    );
}

export default MainForm;