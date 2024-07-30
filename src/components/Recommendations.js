import React, { useState, useEffect } from 'react';
import useScrollToTop from './useScrollToTop';

const Recommendations = () => {

    useScrollToTop();

    const selectedAge = localStorage.getItem('selectedAge');
    const selectedConcern = localStorage.getItem('selectedConcern');

    const handleClickResults = () => {
        if (selectedAge === 'below 18' && selectedConcern === 'acne') {
            return (
                <div className="p-7">
                    <h2 className='text-4xl font-bold'>Skincare Routine:</h2>
                    <div className="p-3">
                    <h2 className='text-2xl font-bold'>Morning Routine:</h2>
                      <ol className='list-decimal list-inside text-lg p-3'>
                          <li>
                              <strong>Cleanser:</strong> Cleanse with a gentle foaming cleanser containing salicylic acid to remove oil and impurities.
                          </li>
                          <li>
                              <strong>Toner:</strong> Apply a hydrating toner with niacinamide to balance the skin and reduce inflammation.
                          </li>
                          <li>
                              <strong>Moisturizer:</strong> Use a lightweight, oil-free moisturizer to hydrate.
                          </li>
                          <li>
                              <strong>SPF:</strong> Apply Broad-spectrum SPF 30 or higher.
                          </li>
                          <li>
                            If needed, apply a spot treatment with tea tree oil to acne-prone areas.
                          </li>
                      </ol>
                    <h2 className='text-2xl font-bold'>Night Routine:</h2>
                      <ol className='list-decimal list-inside text-lg p-3'>
                          <li>
                          Repeat the morning routine.
                          </li>
                          <li>
                          If acne is severe, use a benzoyl peroxide-based spot treatment.
                          </li>
                      </ol>
                      <div className="text-lg">
                      <strong>Key Ingredients: </strong> Salicylic acid, niacinamide, tea tree oil, gentle hydrating agents. <br />
                      <strong>Focus: </strong> Prevention, gentle care, and acne control. <br />
                      <strong>Additional Tips: </strong> Prevention, gentle care, and acne control. <br />
                      <ul className='list-disc list-inside'>
                        <li>Prioritize a healthy lifestyle.</li>
                        <li>Get enough  sleep and nutrition.</li>
                        <li>Avoid visiting polluted areas.</li>
                      </ul>
                      </div>
                      </div>

                </div>
            )
          } 
          
          else if (selectedAge === 'below 18' && selectedConcern === 'fineLines') {
            return <p>Combination 2: below 18 - fineLines</p>;
          } 
          
          else if (selectedAge === 'below 18' && selectedConcern === 'darkSpots') {
            return <p>Combination 3: below 18 - darkSpots</p>;
          } 
          
          else if (selectedAge === 'below 18' && selectedConcern === 'dryness') {
            return <p>Combination 4: below 18 - dryness</p>;
          } 
          
          else if (selectedAge === 'below 18' && selectedConcern === 'redness') {
            return <p>Combination 5: below 18 - redness</p>;
          } 
          
          else if (selectedAge === '18-24' && selectedConcern === 'acne') {
            return <p>Combination 6: 18-24 - acne</p>;
          } 
          
          else if (selectedAge === '18-24' && selectedConcern === 'fineLines') {
            return <p>Combination 7: 18-24 - fineLines</p>;
          } 
          
          else if (selectedAge === '18-24' && selectedConcern === 'darkSpots') {
            return <p>Combination 8: 18-24 - darkSpots</p>;
          } 
          
          else if (selectedAge === '18-24' && selectedConcern === 'dryness') {
            return <p>Combination 9: 18-24 - dryness</p>;
          } 
          
          else if (selectedAge === '18-24' && selectedConcern === 'redness') {
            return <p>Combination 10: 18-24 - redness</p>;
          } 
          
          else if (selectedAge === '25-34' && selectedConcern === 'acne') {
            return <p>Combination 11: 25-34 - acne</p>;
          } 
          
          else if (selectedAge === '25-34' && selectedConcern === 'fineLines') {
            return <p>Combination 12: 25-34 - fineLines</p>;
          } 
          
          else if (selectedAge === '25-34' && selectedConcern === 'darkSpots') {
            return <p>Combination 13: 25-34 - darkSpots</p>;
          } 
          
          else if (selectedAge === '25-34' && selectedConcern === 'dryness') {
            return <p>Combination 14: 25-34 - dryness</p>;
          } 
          
          else if (selectedAge === '25-34' && selectedConcern === 'redness') {
            return <p>Combination 15: 25-34 - redness</p>;
          } 
          
          else if (selectedAge === '35-44' && selectedConcern === 'acne') {
            return <p>Combination 16: 35-44 - acne</p>;
          } 
          
          else if (selectedAge === '35-44' && selectedConcern === 'fineLines') {
            return <p>Combination 17: 35-44 - fineLines</p>;
          } 
          
          else if (selectedAge === '35-44' && selectedConcern === 'darkSpots') {
            return <p>Combination 18: 35-44 - darkSpots</p>;
          } 
          
          else if (selectedAge === '35-44' && selectedConcern === 'dryness') {
            return <p>Combination 19: 35-44 - dryness</p>;
          } 
          
          else if (selectedAge === '35-44' && selectedConcern === 'redness') {
            return <p>Combination 20: 35-44 - redness</p>;
          } 
          
          else if (selectedAge === 'above 45' && selectedConcern === 'acne') {
            return <p>Combination 21: above 45 - acne</p>;
          } 
          
          else if (selectedAge === 'above 45' && selectedConcern === 'fineLines') {
            return <p>Combination 22: above 45 - fineLines</p>;
          } 
          
          else if (selectedAge === 'above 45' && selectedConcern === 'darkSpots') {
            return <p>Combination 23: above 45 - darkSpots</p>;
          } 
          
          else if (selectedAge === 'above 45' && selectedConcern === 'dryness') {
            return <p>Combination 24: above 45 - dryness</p>;
          } 
          
          else if (selectedAge === 'above 45' && selectedConcern === 'redness') {
            return <p>Combination 25: above 45 - redness</p>;
          } 
          
          else {
            return <p>No Recommendations found!</p>;
          }
    }

  return (
    <>
      <div className="pt-20 m-16">
        <h1 className="text-5xl font-bold underline underline-offset-8" style={{fontFamily: "'Cinzel', serif"}}>Recommended Skin Care:</h1>
      </div>

        <div className=" m-16 rounded-3xl text-center text-white" style={{backgroundImage: `url(${'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1280'})`}}>

              <div className="">
                <p>{handleClickResults()}</p>   <br />
              </div>
            </div>

        <div className="m-16 ">
            <h1 className="text-3xl text-green-600 font-bold ">TRENDING SKINCARE ROUNTINE THAT CAN BE USED ON DAILY BASIS 😊:-</h1>
            <div className="m-5 p-5 rounded-3xl bg-yellow-500">
                <h2 className="text-2xl font-bold">Morning Routine:</h2>
                <p className="p-5 text-lg">
                    <ul className='list-decimal list-inside'>
                        <li>Cleanser:- Gentle foaming cleanser with a low pH.</li>
                        <li>Toner:- Hydrating toner with hyaluronic acid.</li>
                        <li>Essence:- Hydrating essence with fermented ingredients (e.g., galactomyces).</li>
                        <li>Serum:- Vitamin C or niacinamide serum.</li>
                        <li>Moisturizer:- Lightweight moisturizer with ceramides.</li>
                        <li>Sunscreen:- Broad-spectrum SPF 50+.</li>
                    </ul>
                </p>
            </div>
            <div className="m-5 p-5 rounded-3xl text-white bg-blue-900">
                <h2 className="text-2xl font-bold">Night Routine:</h2>
                <p className="p-5 text-lg">
                    <ul className='list-decimal list-inside'>
                        <li>Cleanser:- Oil cleanser (double cleanse with a foam cleanser if needed).</li>
                        <li>Toner:- Hydrating toner.</li>
                        <li>Essence:- Hydrating essence.</li>
                        <li>Serum:- Treatment serum based on skin concern (e.g., retinoid, peptides).</li>
                        <li>Sheet Mask:- 2-3 times a week for added hydration and treatment.</li>
                        <li>Moisturizer:- Rich moisturizer or sleeping pack.</li>
                    </ul>
                </p>
            </div>

            <div className="text-center p-10">
                <h2 className="text-xl">SPECIAL NOTE BECAUSE WE CARE ABOUT YOU😊:- </h2>
                <p className="font-semibold text-2xl" style={{fontFamily: "'Cinzel', serif"}}>“Remember FRIEND , consistency is key, and always patch-test new products and ingredients to ensure they work well with your skin….”</p>
            </div>
        </div>

    </>
  )
}

export default Recommendations
