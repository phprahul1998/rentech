// pages/index.js

import { useState } from 'react';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState('');
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);

  const handleButtonClick = (value) => {
    setFormData({ ...formData, [`step${step}`]: value });
    setTimeout(() => {
      setStep(step + 1);
    }, 1000);
  };

  const handleBackButtonClick = () => {
    setStep(step - 1);
  };

  const handleNextButtonClick = (e) => {
    e.preventDefault();
    if ((step === 5 && !name) || (step === 9 && !address)) {
      setError('Field can\'t be empty');
    } else {
      setError('');
      if (step === 5) {
        setFormData({ ...formData, name });
      }
      setStep(step + 1);
    }
  };

  const handleSendRequest = (e) => {
    e.preventDefault();
    if (step === 9 && !address) {
      setError('Field can\'t be empty');
    } else {
      setError('');
      if (step === 9) {
        setFormData({ ...formData, address });
      }
      console.log(address)
      console.log('Request sent:', formData);
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
          <h2>{step}. Where should the photovoltaic system be installed?</h2>
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
          <h2>{step}. How much space do you have available? </h2>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('25_m2')} style={formData[`step${step}`] === '25_m2' ? { backgroundColor: 'green' } : {}}>25 m2</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('25_40_m2')} style={formData[`step${step}`] === '25_40_m2' ? { backgroundColor: 'green' } : {}}>25 - 40 m2</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('40_100_m2')} style={formData[`step${step}`] === '40_100_m2' ? { backgroundColor: 'green' } : {}}>40 - 100 m2</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('over_100_m2')} style={formData[`step${step}`] === 'over_100_m2' ? { backgroundColor: 'green' } : {}}>over 100 m2</button>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}><span>Back</span></button>
          </div>
        </form>
      )}


      {step === 3 && (
        <form>
          <h2>{step}. What type of roof is it? </h2>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Flat_roof')} style={formData[`step${step}`] === 'Flat_roof' ? { backgroundColor: 'green' } : {}}>Flat roof</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Gable_roof')} style={formData[`step${step}`] === 'Gable_roof' ? { backgroundColor: 'green' } : {}}>Gable roof</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Hip_roof')} style={formData[`step${step}`] === 'Hip_roof' ? { backgroundColor: 'green' } : {}}>Hip roof</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Other')} style={formData[`step${step}`] === 'Other' ? { backgroundColor: 'green' } : {}}>Other</button>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}><span>Back</span></button>
          </div>
        </form>
      )}


      {step === 4 && (
        <form>
          <h2>{step}.  In which direction is your subject facing? </h2>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Milk')} style={formData[`step${step}`] === 'Milk' ? { backgroundColor: 'green' } : {}}>Milk</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Ost')} style={formData[`step${step}`] === 'Ost' ? { backgroundColor: 'green' } : {}}>Ost</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('West')} style={formData[`step${step}`] === 'West' ? { backgroundColor: 'green' } : {}}>West</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Southwest_southeast')} style={formData[`step${step}`] === 'Southwest_southeast' ? { backgroundColor: 'green' } : {}}>Southwest/southeast</button>
          <div className="backbtn">
            <button type="button" onClick={handleBackButtonClick}><span>Back</span></button>
          </div>
        </form>
      )}

      {step === 5 && (
        <form>
          <h2>{step}.  What is your expected electricity consumption? </h2>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div>
            <button className="backbtn" type="button" onClick={handleBackButtonClick}><span>Back</span></button>
            <button className="nextbtn" onClick={handleNextButtonClick}>Next</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      )}

      {step === 6 && (
        <form>
          <h2>{step}.  When would you like to implement the project? </h2>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Immediately')} style={formData[`step${step}`] === 'Immediately' ? { backgroundColor: 'green' } : {}}>Immediately</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('in 1 - 3 months')} style={formData[`step${step}`] === 'in 1 - 3 months' ? { backgroundColor: 'green' } : {}}>in 1 - 3 months</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('in 3 - 6  months')} style={formData[`step${step}`] === 'in 3 - 6  months' ? { backgroundColor: 'green' } : {}}>in 3 - 6  months</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('other')} style={formData[`step${step}`] === 'other' ? { backgroundColor: 'green' } : {}}>Other</button>
          <div backbtn>
            <button type="button" onClick={handleBackButtonClick}><span>Back</span></button>
          </div>
        </form>
      )}

      {step === 7 && (
        <form>
          <h2>{step}.Which photovoltaic system do you want?</h2>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('PV system Electricity storage including installation')} style={formData[`step${step}`] === 'PV system Electricity storage including installation' ? { backgroundColor: 'green' } : {}}>PV system Electricity storage including installation</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('PV system Electricity storage Self-construction')} style={formData[`step${step}`] === 'PV system Electricity storage Self-construction' ? { backgroundColor: 'green' } : {}}>
            PV system
Electricity storage Self-construction
          </button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Smart Energy  Management West')} style={formData[`step${step}`] === 'Smart Energy  Management West' ? { backgroundColor: 'green' } : {}}>Smart Energy  Management West</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('extension  existing PV system Southwest/southeast')} style={formData[`step${step}`] === 'extension  existing PV system Southwest/southeast' ? { backgroundColor: 'green' } : {}}>extension  existing PV system Southwest/southeast</button>
          <div backbtn>
            <button type="button" onClick={handleBackButtonClick}><span>Back</span></button>
          </div>        </form>

      )}

      {step === 8 && (
        <form>
          <h2>{step}.How would you like to finance the project?</h2>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('Equity capital')} style={formData[`step${step}`] === 'Equity capital' ? { backgroundColor: 'green' } : {}}>Equity capital </button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('financing')} style={formData[`step${step}`] === 'financing' ? { backgroundColor: 'green' } : {}}>Financing</button>
          <button className="commonbtn" type="button" onClick={() => handleButtonClick('both')} style={formData[`step${step}`] === 'both' ? { backgroundColor: 'green' } : {}}>Both</button>
          <div backbtn>
            <button type="button" onClick={handleBackButtonClick}><span>Back</span></button>
          </div>
        </form>
      )}

      {step === 9 && (
        <form>
          <h2>{step}.Where is your project located?</h2>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div >
            <button className="backbtn" type="button" onClick={handleBackButtonClick}><span>Back</span></button>
            <button className="nextbtn" onClick={handleNextButtonClick}>Next</button>
          </div>

          {error && <p className="error-message">{error}</p>}
        </form>
      )}

      {step === 10 && (
        <form>
          <h2>{step}.Who is the offer intended for?</h2>
          <input
            type="text"
            placeholder="Enter address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <div >
            <button className="backbtn" type="button" onClick={handleBackButtonClick}><span>Back</span></button>
            <button className="nextbtn" onClick={handleSendRequest}>Send request</button>
          </div>

          {error && <p className="error-message">{error}</p>}
        </form>
      )}

      {step === 11 && <p>Thank you for your submission!</p>}
    </div>
  );
};

export default MultiStepForm;
