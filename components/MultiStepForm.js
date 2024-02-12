
import { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import Image from 'next/image'

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);
  const [postal_code, setPostalcode] = useState('');
  const [localtion, setLocation] = useState('');
  const [street, setStreet] = useState('');
  const [streetno, setstreetno] = useState('');
  const [salutation, setSalutation] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [telephone, setTelephone] = useState('');
  const [email, setEmail] = useState('');
  const [whatsApp, setwhatsApp] = useState('');
  const [error, setError] = useState('');
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const { t } = useTranslation('en', { useSuspense: false });
  const [electricityUse, setSliderValue] = useState(50); // Initial value of the slider

  // console.log(electricityUse)
  const handleButtonClick = (value) => {
    setFormData({ ...formData, [`step${step}`]: value });
    setTimeout(() => {
      setStep(step + 1);
    }, 1000);
  };

  const gotofirst = () => {
    setStep(1);
    setFormData([]);
    setPostalcode('');
    setLocation('');
    setStreet('');
    setstreetno('');
    setSalutation('');
    setFirstName('');
    setLastName('');
    setTelephone('');
    setEmail('');
    setwhatsApp('');
    setError('');
    setSelectedButtonIndex(null);
  }

  const handleBackButtonClick = () => {
    setStep(step - 1);
  };
  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if (step === 9 && !postal_code) {
      setError('Postal code  can\'t be empty');
    }
    else if (step === 9 && !localtion) {
      setError('Location  can\'t be empty');
    }
    else if (step === 9 && !street) {
      setError('Street  can\'t be empty');
    }
    else if (step === 9 && !streetno) {
      setError('No.  can\'t be empty');
    }

    else {
      setError('');
      setFormData({ ...formData, electricityUse, localtion, street, streetno });
      setStep(step + 1);
    }
  };

  const handleSendRequest = (e) => {
    e.preventDefault();
    if (step === 10 && !salutation) {
      setError('Salutation.  can\'t be empty');
    } else if (step === 10 && !first_name) {
      setError('First name  can\'t be empty');
    } else if (step === 10 && !last_name) {
      setError('Last Name  can\'t be empty');
    } else if (step === 10 && !telephone) {
      setError('Telephone  can\'t be empty');
    }
    else if (step === 10 && !email) {
      setError('Email  can\'t be empty');
    }
    else if (step === 10 && !whatsApp) {
      setError('WhatsApp  can\'t be empty');
    } else {
      const info = [
        {
          "salutation": salutation,
          "first_name": first_name,
          "last_name": last_name,
          "telephone": telephone,
          "email": email,
          "whatsApp": whatsApp
        }
      ]
      console.log('Request sent:', formData);
      console.log('info:', info);
      setStep(step + 1); // Move to thank you message step
    }
  };
  return (
    <div className="multistep-form">
      <h2>{t('stepform.main_heading1')}</h2>
      <div className="dotted-line">
        {Array.from({ length: 10 }, (_, index) => (
          <span
            key={index}
            className={`${
              index < step ? 'completed' : ''
              } ${index === step - 1 ? 'selected' : ''}`}
          ></span>
        ))}
      </div>
      {step === 1 && (
        <form>
          <h2>{step}. {t('stepform.formdata.step1.heading')}  </h2> <span><AiOutlineExclamationCircle /></span>
          <button className="commonbtn" type="button"
            onClick={() => handleButtonClick('detached_house')}
            style={formData[`step${step}`] === 'detached_house' ? { backgroundColor: '#f18700' } : {}}
          >
            <img className="" src="/img/Detached_house.png" alt="" width={40}
              height={40} />
            {t('stepform.formdata.step1.option1')}


          </button>
          <button className="commonbtn" type="button"
            onClick={() => handleButtonClick('Apartment_building')}
            style={formData[`step${step}`] === 'Apartment_building' ? { backgroundColor: '#f18700' } : {}}
          > <img className="" src="/img/apart.png" alt="" width={40}
              height={40} />
            {t('stepform.formdata.step1.option2')}</button>
          <button className="commonbtn" type="button"

            onClick={() => handleButtonClick('Commercial_buildings')}
            style={formData[`step${step}`] === 'Commercial_buildings' ? { backgroundColor: '#f18700' } : {}}
          > <img className="" src="/img/commercial.png" alt="" width={40}
              height={40} />
            {t('stepform.formdata.step1.option3')}        </button>
          <button className="commonbtn" type="button"
            onClick={() => handleButtonClick('Miscellaneous')}
            style={formData[`step${step}`] === 'Miscellaneous' ? { backgroundColor: '#f18700' } : {}}
          > <img className="" src="/img/more.png" alt="" width={40}
              height={40} />
            {t('stepform.formdata.step1.option4')}
          </button>
        </form>
      )}

      {step === 2 && (
        <form>
          <div>
            <h2>{step}.  {t('stepform.formdata.step2.heading')} </h2> <span><AiOutlineExclamationCircle /></span>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('25_m2')} style={formData[`step${step}`] === '25_m2' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step2.option1')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('25_40_m2')} style={formData[`step${step}`] === '25_40_m2' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step2.option2')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('40_100_m2')} style={formData[`step${step}`] === '40_100_m2' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step2.option3')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('over_100_m2')} style={formData[`step${step}`] === 'over_100_m2' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step2.option4')}</button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
          </div>
        </form>
      )}


      {step === 3 && (
        <form>
          <div>
            <h2>{step}. {t('stepform.formdata.step3.heading')} </h2> <span><AiOutlineExclamationCircle /></span>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Flat_roof')} style={formData[`step${step}`] === 'Flat_roof' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step2.option1')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Gable_roof')} style={formData[`step${step}`] === 'Gable_roof' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step1.option2')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Hip_roof')} style={formData[`step${step}`] === 'Hip_roof' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step1.option3')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Other')} style={formData[`step${step}`] === 'Other' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step1.option4')}</button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
          </div>
        </form>
      )}


      {step === 4 && (
        <form>
          <div>
            <h2>{step}.   {t('stepform.formdata.step4.heading')} </h2> <span><AiOutlineExclamationCircle /></span>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('South')} style={formData[`step${step}`] === 'South' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step4.option1')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('East')} style={formData[`step${step}`] === 'East' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step4.option2')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('West')} style={formData[`step${step}`] === 'West' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step4.option3')}</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Southwest_southeast')} style={formData[`step${step}`] === 'Southwest_southeast' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step4.option4')}</button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
          </div>
        </form>
      )}

      {step === 5 && (
        <form>
          <div className="text-center">
            <h2>{step}.  {t('stepform.formdata.step5.heading')} </h2> <span><AiOutlineExclamationCircle /></span>
            <div className="range-slider-container">
              <p>{electricityUse}  kWh </p>
              <input
                type="range"
                min="0"
                max="30000"
                value={electricityUse}
                onChange={handleSliderChange}
                className="slider"

              />
            </div>
          </div>
          <div>
            <button className="backbtn" type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
            <button className="nextbtn" onClick={handleNextButtonClick}>{t('button.btnNext')}</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      )
      }

      {
        step === 6 && (
          <form>
            <div>
              <h2>{step}.   {t('stepform.formdata.step6.heading')} </h2> <span><AiOutlineExclamationCircle /></span>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Immediately')} style={formData[`step${step}`] === 'Immediately' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step6.option1')}</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('in 1 - 3 months')} style={formData[`step${step}`] === 'in 1 - 3 months' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step6.option2')}months</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('in 3 - 6  months')} style={formData[`step${step}`] === 'in 3 - 6  months' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step6.option3')} months</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Indefinite')} style={formData[`step${step}`] === 'Indefinite' ? { backgroundColor: '#f18700' } : {}}> {t('stepform.formdata.step6.option4')}</button>

            </div>
            <div className="backbtn">
              <button type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
            </div>
          </form >
        )}

      {
        step === 7 && (
          <form>
            <div>
              <h2>{step}. {t('stepform.formdata.step7.heading')}</h2> <span><AiOutlineExclamationCircle /></span>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('PV system Electricity storage including installation')} style={formData[`step${step}`] === 'PV system Electricity storage including installation' ? { backgroundColor: '#f18700' } : {}}><p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step7.option1') }} /> </button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('PV system Electricity storage Self-construction')} style={formData[`step${step}`] === 'PV system  Electricity storage Self-construction' ? { backgroundColor: '#f18700' } : {}}>
                <p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step7.option2') }} />
              </button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Incl. Smart Energy  Management ')} style={formData[`step${step}`] === ' Incl. Smart Energy  Management ' ? { backgroundColor: '#f18700' } : {}}> <p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step7.option3') }} /> </button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('extension  existing PV system ')} style={formData[`step${step}`] === 'Extension  existing PV system ' ? { backgroundColor: '#f18700' } : {}}><p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step7.option4') }} />  </button>
            </div>
            <div className="backbtn">
              <button type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
            </div>        </form >

        )}

      {
        step === 8 && (
          <form>
            <div>
              <h2>{step}. {t('stepform.formdata.step8.heading')}</h2> <span><AiOutlineExclamationCircle /></span>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Equity capital')} style={formData[`step${step}`] === 'Equity capital' ? { backgroundColor: '#f18700' } : {}}><p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step8.option1') }} />  </button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('financing')} style={formData[`step${step}`] === 'financing' ? { backgroundColor: '#f18700' } : {}}><p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step8.option2') }} /></button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('both')} style={formData[`step${step}`] === 'both' ? { backgroundColor: '#f18700' } : {}}><p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step8.option3') }} /></button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Hire purchase')} style={formData[`step${step}`] === 'Hire purchase' ? { backgroundColor: '#f18700' } : {}}><p dangerouslySetInnerHTML={{ __html: t('stepform.formdata.step8.option4') }} /></button>
            </div>
            <div className="backbtn">
              <button type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
            </div>
          </form >
        )}

      {
        step === 9 && (
          <form>
            <h2>{step}. {t('stepform.formdata.step9.heading')}</h2> <span><AiOutlineExclamationCircle /></span>
            <div className="row">
              <div className="col-3">
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={postal_code} placeholder={t('stepform.formdata.step9.postal_code')} onChange={(e) => setPostalcode(e.target.value)} />
              </div>

              <div className=" col-9" >
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={localtion} placeholder={t('stepform.formdata.step9.location')} onChange={(e) => setLocation(e.target.value)} />
              </div>

              <div className="col-9">
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={street} placeholder={t('stepform.formdata.step9.street')} onChange={(e) => setStreet(e.target.value)} />
              </div>

              <div className="col-3">
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={streetno} placeholder={t('stepform.formdata.step9.no')} onChange={(e) => setstreetno(e.target.value)} />
              </div>

            </div>

            <div >
              <button className="nextbtn" onClick={handleNextButtonClick}>{t('button.btnNext')}</button>
              <button className="backbtn" type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
            </div>

            {error && <p className="error-message">{error}</p>}
          </form >
        )}

      {
        step === 10 && (
          <form>
            <h2>{step}. {t('stepform.formdata.step10.heading')}</h2> <span><AiOutlineExclamationCircle /></span>
            <div className="row">
              <div className="col-6">
                <div className="float-left">
                  <input className="salutation"
                    type="radio"
                    id="mr"
                    name="salutation"
                    value="Mr."
                    checked={salutation === "Mr."}
                    onChange={() => setSalutation("Mr.")}
                  />
                  <label htmlFor="mr">&nbsp;&nbsp;Mr.&nbsp;&nbsp;&nbsp;</label>
                  <input className="salutation"
                    type="radio"
                    id="mrs"
                    name="salutation"
                    value="mrs"
                    checked={salutation === "mrs"}
                    onChange={() => setSalutation("mrs")}
                  />
                  <label htmlFor="Mrs.">&nbsp;Mrs.</label>
                </div>

              </div>
              <div className="row">
                <div className=" col-6" >
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={first_name} placeholder={t('stepform.formdata.step10.firstname')} onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="col-6">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={last_name} placeholder={t('stepform.formdata.step10.lastname')} onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="col-12">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={telephone} placeholder={t('stepform.formdata.step10.telephone')} onChange={(e) => setTelephone(e.target.value)} />
                </div>

                <div className="col-12">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="email" value={email} placeholder={t('stepform.formdata.step10.email')} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-12">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={whatsApp} placeholder={t('stepform.formdata.step10.whatsapp')} onChange={(e) => setwhatsApp(e.target.value)} />
                </div>
              </div>
            </div>
            <div >
              <button className="backbtn" type="button" onClick={handleBackButtonClick}>{t('button.btnBack')}</button>
              <button className="nextbtn" onClick={handleSendRequest}>{t('button.btnsendRequest')}</button>
            </div>

            {error && <p className="error-message">{error}</p>}
          </form >
        )
      }

      {step === 11 && <div className="text-left">
        <p dangerouslySetInnerHTML={{ __html: t('stepform.laststep') }} />
        <button className="nextbtn" onClick={gotofirst}>{t('button.btninquiry')}</button>

      </div>}
    </div >
  );
};

export default MultiStepForm;