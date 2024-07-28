import React, { useState, useEffect } from 'react';

const Recommendations = () => {

    const [concerns, setConcerns] = useState([]);

    const selectedAge = localStorage.getItem('selectedAge');
    const selectedType = localStorage.getItem('selectedType');
    const selectedTone = localStorage.getItem('selectedTone');
    const selectedSunProtection = localStorage.getItem('selectedSunProtection');
    const selectedSleepTime = localStorage.getItem('selectedSleepTime');
    const concern1 = localStorage.getItem('concern1');


    useEffect(() => {
        const storedConcerns = localStorage.getItem('skinConcerns');
        if (storedConcerns) {
          setConcerns(JSON.parse(storedConcerns));
        }
      }, []);


    const handleClickAge = () => {
        if(selectedAge === 'below 18') {
            return "You should get proper sleep of around 7-8 hours!"
        }

        else if(selectedAge === '18 - 24') {
            return "Your sleep schedule is good!"
        }

        else if(selectedAge === '25 - 34') {
            return "Your sleep schedule is Perfect!"
        }

        else if(selectedAge === '35 - 44') {
            return "Your sleep schedule is Perfect but it will make you feel lazy!"
        }

        else if(selectedAge === 'above 45') {
            return "Your sleep schedule is Perfect but it will make you feel lazy!"
        }
    }

    const handleClickSkintype = () => {
        if(selectedType === 'Oily') {
            return "You should get proper sleep of around 7-8 hours!"
        }

        else if(selectedType === 'Dry and tight') {
            return "Your sleep schedule is good!"
        }

        else if(selectedType === 'Combination') {
            return "Your sleep schedule is Perfect!"
        }

        else if(selectedType === 'Sensitive and Reactive') {
            return "Your sleep schedule is Perfect but it will make you feel lazy!"
        }

        else if(selectedType === 'Normal') {
            return "Your sleep schedule is Perfect but it will make you feel lazy!"
        }
    }

    const handleClickSkintone = () => {
        if(selectedTone === 'Fair or light') {
            return "You should get proper sleep of around 7-8 hours!"
        }
        
        else if(selectedTone === 'Medium or Wheatish') {
            return "Your sleep schedule is good!"
        }

        else if(selectedTone === 'Tan or caramel') {
            return "Your sleep schedule is Perfect!"
        }

        else if(selectedTone === 'Deep or rich') {
            return "Your sleep schedule is Perfect but it will make you feel lazy!"
        }
    }

    const handleClickSun = () => {
        if(selectedSunProtection === 'Never leave the house without SPF') {
            return "You should get proper sleep of around 7-8 hours!"
        }

        else if(selectedSunProtection === 'only on sunny days') {
            return "Your sleep schedule is good!"
        }

        else if(selectedSunProtection === 'Occasionally') {
            return "Your sleep schedule is Perfect!"
        }

        else if(selectedSunProtection === 'Rarely use sunscreen') {
            return "Your sleep schedule is Perfect but it will make you feel lazy!"
        }
    }
    
    const handleClickSleep = () => {
        if(selectedSleepTime === 'Less than 5 hours') {
            return "You should get proper sleep of around 7-8 hours!"
        }

        else if(selectedSleepTime === '5-7 hours') {
            return "Your sleep schedule is good!"
        }

        else if(selectedSleepTime === '7-9 hours') {
            return "Your sleep schedule is Perfect!"
        }

        else if(selectedSleepTime === 'More than 9 hours') {
            return "Your sleep schedule is Perfect but it will make you feel lazy!"
        }
    }

    const handleClickSkinConcerns = () => {
        // acne, finelines, darkspots
        if (concerns.includes('acne') && concerns.includes('fineLines') && concerns.includes('darkSpots')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // acne, finelines, dryness
        else if (concerns.includes('acne') && concerns.includes('fineLines') && concerns.includes('dryness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // acne, finelines, redness
        else if (concerns.includes('acne') && concerns.includes('fineLines') && concerns.includes('redness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // acne, darkspots, dryness
        else if (concerns.includes('acne') && concerns.includes('darkSpots') && concerns.includes('dryness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // acne, darkspots, redness
        else if (concerns.includes('acne') && concerns.includes('darkSpots') && concerns.includes('redness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // acne, dryness, redness
        else if (concerns.includes('acne') && concerns.includes('dryness') && concerns.includes('redness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // finelines, darkspots, dryness
        else if (concerns.includes('fineLines') && concerns.includes('darkSpots') && concerns.includes('dryness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // finelines, darkspots, redness
        else if (concerns.includes('fineLines') && concerns.includes('darkSpots') && concerns.includes('redness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // finelines, drryness, redness
        else if (concerns.includes('fineLines') && concerns.includes('dryness') && concerns.includes('redness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }

        // darkspots, dryness, redness
        else if (concerns.includes('darkSpots') && concerns.includes('dryness') && concerns.includes('redness')) {
            return 'Your selected acne, fineLines and darkSpots as your concern';
        }
    }

  return (
    <>
      <div className="pt-20 m-16">
        <h1 className="text-4xl font-bold">Recommended Skin Care:</h1>
        {/* <button className="px-2 py-2 text-2xl bg-purple-500 rounded-xl m-10" onClick={handleClick}>Get skin care Recommendations</button> */}
      </div>

        <div className="m-16 pl-20">
            Recommendation based on Age: <p>{handleClickAge()}</p>  <br />
            Skin type Recommendation: <p>{handleClickSkintype()}</p>    <br />
            Skintone Recommendation: <p>{handleClickSkintone()}</p> <br />
            Sun protection Recommendation: <p>{handleClickSun()}</p>    <br />
            Sleep Recommendation: <p>{handleClickSleep()}</p>   <br />
            Skin concern based Recommendation: <p>{handleClickSkinConcerns()}</p>   <br />
        </div>
    </>
  )
}

export default Recommendations
