
import { useState } from 'react';
import { AiOutlineExclamationCircle } from "react-icons/ai";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);
  const [electricityUse, setElectricityUse] = useState('');
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

  const handleButtonClick = (value) => {
    setFormData({ ...formData, [`step${step}`]: value });
    setTimeout(() => {
      setStep(step + 1);
    }, 1000);
  };

  const gotofirst = () => {
    setStep(1);
    setFormData([]);
    setElectricityUse('');
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

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if ((step === 5 && !electricityUse)) {
      setError('Field can\'t be empty');
    } else if (step === 9 && !postal_code) {
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
      console.log('Request sent:', info);
      setStep(step + 1); // Move to thank you message step
    }
  };

  return (
    <div className="multistep-form">
      <h2>Your PV provider check in 10 steps:</h2>
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
          <h2>{step}. Where should the PV system be installed? </h2> <span><AiOutlineExclamationCircle /></span>
          <button className="commonbtn" type="button"
            onClick={() => handleButtonClick('detached_house')}
            style={formData[`step${step}`] === 'detached_house' ? { backgroundColor: 'green' } : {}}
          >
            Detached house
        </button>
          <button className="commonbtn" type="button"
            onClick={() => handleButtonClick('Apartment_building')}
            style={formData[`step${step}`] === 'Apartment_building' ? { backgroundColor: 'green' } : {}}
          >
            Apartment building
        </button>
          <button className="commonbtn" type="button"

            onClick={() => handleButtonClick('Commercial_buildings')}
            style={formData[`step${step}`] === 'Commercial_buildings' ? { backgroundColor: 'green' } : {}}
          >
            Commercial buildings
        </button>
          <button className="commonbtn" type="button"

            onClick={() => handleButtonClick('Miscellaneous')}
            style={formData[`step${step}`] === 'Miscellaneous' ? { backgroundColor: 'green' } : {}}
          >
            Miscellaneous
        </button>
        </form>
      )}

      {step === 2 && (
        <form>
          <div>
            <h2>{step}. How much space do you have available? </h2> <span><AiOutlineExclamationCircle /></span>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('25_m2')} style={formData[`step${step}`] === '25_m2' ? { backgroundColor: 'green' } : {}}>25 m2</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('25_40_m2')} style={formData[`step${step}`] === '25_40_m2' ? { backgroundColor: 'green' } : {}}>25 - 40 m2</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('40_100_m2')} style={formData[`step${step}`] === '40_100_m2' ? { backgroundColor: 'green' } : {}}>40 - 100 m2</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('over_100_m2')} style={formData[`step${step}`] === 'over_100_m2' ? { backgroundColor: 'green' } : {}}>over 100 m2</button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>Back</button>
          </div>
        </form>
      )}


      {step === 3 && (
        <form>
          <div>
            <h2>{step}. What type of roof is it? </h2> <span><AiOutlineExclamationCircle /></span>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Flat_roof')} style={formData[`step${step}`] === 'Flat_roof' ? { backgroundColor: 'green' } : {}}>Flat roof</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Gable_roof')} style={formData[`step${step}`] === 'Gable_roof' ? { backgroundColor: 'green' } : {}}>Gable roof</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Hip_roof')} style={formData[`step${step}`] === 'Hip_roof' ? { backgroundColor: 'green' } : {}}>Hip roof</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Other')} style={formData[`step${step}`] === 'Other' ? { backgroundColor: 'green' } : {}}>Other</button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>Back</button>
          </div>
        </form>
      )}


      {step === 4 && (
        <form>
          <div>
            <h2>{step}.  In which direction is your subject facing? </h2> <span><AiOutlineExclamationCircle /></span>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('South')} style={formData[`step${step}`] === 'South' ? { backgroundColor: 'green' } : {}}>South</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('East')} style={formData[`step${step}`] === 'East' ? { backgroundColor: 'green' } : {}}>East</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('West')} style={formData[`step${step}`] === 'West' ? { backgroundColor: 'green' } : {}}>West</button>
            <button className="commonbtn" type="button" onClick={() => handleButtonClick('Southwest_southeast')} style={formData[`step${step}`] === 'Southwest_southeast' ? { backgroundColor: 'green' } : {}}>Southwest/southeast</button>
          </div>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}>Back</button>
          </div>
        </form>
      )}

      {step === 5 && (
        <form>
          <div>
            <h2>{step}.  What is your expected electricity consumption? </h2> <span><AiOutlineExclamationCircle /></span>
            <input
              type="text" className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              placeholder="electricity consumption"
              value={electricityUse}
              onChange={(e) => setElectricityUse(e.target.value)}
            />
          </div>
          <div>
            <button className="backbtn" type="button" onClick={handleBackButtonClick}>Back</button>
            <button className="nextbtn" onClick={handleNextButtonClick}>Next</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      )
      }

      {
        step === 6 && (
          <form>
            <div>
              <h2>{step}.  When would you like to implement the project? </h2> <span><AiOutlineExclamationCircle /></span>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Immediately')} style={formData[`step${step}`] === 'Immediately' ? { backgroundColor: 'green' } : {}}>Immediately</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('in 1 - 3 months')} style={formData[`step${step}`] === 'in 1 - 3 months' ? { backgroundColor: 'green' } : {}}>in 1 - 3 months</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('in 3 - 6  months')} style={formData[`step${step}`] === 'in 3 - 6  months' ? { backgroundColor: 'green' } : {}}>in 3 - 6  months</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Indefinite')} style={formData[`step${step}`] === 'Indefinite' ? { backgroundColor: 'green' } : {}}>Indefinite</button>

            </div>
            <div className="backbtn">
              <button type="button" onClick={handleBackButtonClick}>Back</button>
            </div>
          </form >
        )}

      {
        step === 7 && (
          <form>
            <div>
              <h2>{step}.Which photovoltaic system do you want?</h2> <span><AiOutlineExclamationCircle /></span>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('PV system Electricity storage including installation')} style={formData[`step${step}`] === 'PV system Electricity storage including installation' ? { backgroundColor: 'green' } : {}}>PV system <br /> Electricity storage  <br /> including installation</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('PV system Electricity storage Self-construction')} style={formData[`step${step}`] === 'PV system  Electricity storage Self-construction' ? { backgroundColor: 'green' } : {}}>
                PV system  <br />
                Electricity storage  <br /> Self-construction
          </button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Incl. Smart Energy  Management ')} style={formData[`step${step}`] === ' Incl. Smart Energy  Management ' ? { backgroundColor: 'green' } : {}}> Incl .  <br />Smart Energy  Management </button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('extension  existing PV system ')} style={formData[`step${step}`] === 'Extension  existing PV system ' ? { backgroundColor: 'green' } : {}}>Extension  existing  Incl. PV system </button>
            </div>
            <div className="backbtn">
              <button type="button" onClick={handleBackButtonClick}>Back</button>
            </div>        </form >

        )}

      {
        step === 8 && (
          <form>
            <div>
              <h2>{step}.How would you like to finance the project?</h2> <span><AiOutlineExclamationCircle /></span>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Equity capital')} style={formData[`step${step}`] === 'Equity capital' ? { backgroundColor: 'green' } : {}}>Equity capital </button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('financing')} style={formData[`step${step}`] === 'financing' ? { backgroundColor: 'green' } : {}}>Financing</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('both')} style={formData[`step${step}`] === 'both' ? { backgroundColor: 'green' } : {}}>Both</button>
              <button className="commonbtn" type="button" onClick={() => handleButtonClick('Hire purchase')} style={formData[`step${step}`] === 'Hire purchase' ? { backgroundColor: 'green' } : {}}>Hire purchase</button>
            </div>
            <div className="backbtn">
              <button type="button" onClick={handleBackButtonClick}>Back</button>
            </div>
          </form >
        )}

      {
        step === 9 && (
          <form>
            <h2>{step}.Where is your project located?</h2> <span><AiOutlineExclamationCircle /></span>
            <div className="row">
              <div className="col-3">
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={postal_code} placeholder="PLZ" onChange={(e) => setPostalcode(e.target.value)} />
              </div>

              <div className=" col-9" >
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={localtion} placeholder="Location" onChange={(e) => setLocation(e.target.value)} />
              </div>

              <div className="col-9">
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={street} placeholder="STreet" onChange={(e) => setStreet(e.target.value)} />
              </div>

              <div className="col-3">
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={streetno} placeholder="No." onChange={(e) => setstreetno(e.target.value)} />
              </div>

            </div>

            <div >
              <button className="nextbtn" onClick={handleNextButtonClick}>Next</button>
              <button className="backbtn" type="button" onClick={handleBackButtonClick}>Back</button>
            </div>

            {error && <p className="error-message">{error}</p>}
          </form >
        )}

      {
        step === 10 && (
          <form>
            <h2>{step}.Who is the offer intended for?</h2> <span><AiOutlineExclamationCircle /></span>
            <div className="row">
              <div className="col-3">
                <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={salutation} placeholder="Salutation" onChange={(e) => setSalutation(e.target.value)} />
              </div>
              <div className="row">
                <div className=" col-6" >
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={first_name} placeholder="First name" onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div className="col-6">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={last_name} placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div className="col-12">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={telephone} placeholder="Telephone" onChange={(e) => setTelephone(e.target.value)} />
                </div>

                <div className="col-12">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={email} placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="col-12">
                  <input className="w-full h-15 bg-gray-300 text-gray-900 mt-3 p-3 rounded-lg focus:outline-none focus:shadow-outline" type="text" value={whatsApp} placeholder="WhatsApp" onChange={(e) => setwhatsApp(e.target.value)} />
                </div>
              </div>
            </div>
            <div >
              <button className="backbtn" type="button" onClick={handleBackButtonClick}>Back</button>
              <button className="nextbtn" onClick={handleSendRequest}>Send request</button>
            </div>

            {error && <p className="error-message">{error}</p>}
          </form >
        )
      }

      {step === 11 && <div className="text-left">
        <h2 className="mt-4">Done!</h2> <p>Thank you very much for your inquiry and your trust!
We look forward to finding the right provider for you and
will get back to you as soon as possible! <br /><br />
          Would you like to make further inquiries? To do this,
simply click on the “Further inquiry” button.</p>
        <button className="nextbtn" onClick={gotofirst}>Further inquiry</button>

      </div>}
    </div >
  );
};

export default MultiStepForm;
