import React, { useState, useEffect } from 'react';
import useScrollToTop from './useScrollToTop';

const Recommendations = () => {

    useScrollToTop();

    const [concerns, setConcerns] = useState([]);

    const selectedAge = localStorage.getItem('selectedAge');
    const selectedType = localStorage.getItem('selectedType');
    const selectedTone = localStorage.getItem('selectedTone');
    const selectedSunProtection = localStorage.getItem('selectedSunProtection');
    const selectedSleepTime = localStorage.getItem('selectedSleepTime');


    useEffect(() => {
        const storedConcerns = localStorage.getItem('skinConcerns');
        if (storedConcerns) {
          setConcerns(JSON.parse(storedConcerns));
        }
      }, []);


    const handleClickAge = () => {
        if(selectedAge === 'below 18') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Focus:</h2>
                    <p className='text-lg'>Prevention and gentle care.</p>

                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Salicylic acid</li>
                        <li>Tea tree oil</li>
                        <li>Niacinamide</li>
                        <li>Gentle hydrating agents like hyaluronic acid</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle foaming cleanser with salicylic acid.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner with niacinamide.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Lightweight, oil-free moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Spot treatment with tea tree oil for acne.
                        </li>
                    </ol>

                </div>
            )
        }

        else if(selectedAge === '18 - 24') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Focus:</h2>
                    <p className='text-lg'>Balancing and preventive care.</p>

                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Niacinamide</li>
                        <li>hyaluronic acid</li>
                        <li>AHA/BHA</li>
                        <li>antioxidants like vitamin C</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gel or foam cleanser with AHA/BHA.
                        </li>
                        <li>
                            <strong>Toner:</strong> Balancing toner with niacinamide.
                        </li>
                        <li>
                            <strong>Serum:</strong> Vitamin C serum in the morning.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Gel-based or light cream moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Night:</strong> Add retinol twice a week.
                        </li>
                    </ol>

                </div>
            )
        }

        else if(selectedAge === '25 - 34') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Focus:</h2>
                    <p className='text-lg'>Anti-aging and hydration.</p>

                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Retinol</li>
                        <li>peptides</li>
                        <li>hyaluronic acid</li>
                        <li>antioxidants</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Hydrating cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating and soothing toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Peptide or hyaluronic acid serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Cream-based moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Night:</strong> Retinol and rich moisturizer.
                        </li>
                    </ol>

                </div>
            )
        }

        else if(selectedAge === '35 - 44') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Focus:</h2>
                    <p className='text-lg'>Firming and brightening,wrinkle free </p>

                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Retinoids</li>
                        <li>peptides</li>
                        <li>hyaluronic acid</li>
                        <li>vitamin C</li>
                        <li>glycolic acid</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle cleanser with glycolic acid.
                        </li>
                        <li>
                            <strong>Toner:</strong> Brightening toner with vitamin C.
                        </li>
                        <li>
                            <strong>Serum:</strong> Retinoid serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Peptide-rich moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Night:</strong> Retinoid and hydrating mask.
                        </li>
                    </ol>

                </div>
            )
        }

        else if(selectedAge === 'above 45') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Focus:</h2>
                    <p className='text-lg'>Intense hydration and rejuvenation.</p>

                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Retinoids</li>
                        <li>peptides</li>
                        <li>ceramides</li>
                        <li>hyaluronic acid</li>
                        <li>antioxidants</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Cream cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Retinoid and peptide serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Rich cream with ceramides.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Night:</strong> Retinoid, hydrating night cream, and occasional overnight mask.
                        </li>
                    </ol>
                </div>
            )
        }
    }

    const handleClickSkintype = () => {
        if(selectedType === 'Oily') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Salicylic acid</li>
                        <li>niacinamide</li>
                        <li>tea tree oil</li>
                        <li>lightweight hydrators like hyaluronic acid.</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Foaming or gel cleanser with salicylic acid.
                        </li>
                        <li>
                            <strong>Toner:</strong> Clarifying toner with niacinamide.
                        </li>
                        <li>
                            <strong>Serum:</strong> Niacinamide serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Oil-free, lightweight moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Clay mask once a week.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedType === 'Dry and tight') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Hyaluronic acid</li>
                        <li>ceramides</li>
                        <li>glycerin</li>
                        <li>squalane</li>
                        <li>shea butter.</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Cream or hydrating cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner with hyaluronic acid.
                        </li>
                        <li>
                            <strong>Serum:</strong> Hyaluronic acid serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Rich cream with ceramides and shea butter.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Overnight hydrating mask.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedType === 'Combination') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Niacinamide</li>
                        <li>hyaluronic acid</li>
                        <li>AHA/BHA</li>
                        <li>lightweight moisturizers.</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gel cleanser with AHA/BHA.
                        </li>
                        <li>
                            <strong>Toner:</strong> Balancing toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Niacinamide serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Gel-based moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Multi-masking for different zones.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedType === 'Sensitive and Reactive') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Centella asiatica</li>
                        <li>chamomile</li>
                        <li>hyaluronic acid</li>
                        <li>ceramides</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle, non-foaming cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Soothing toner with centella asiatica.
                        </li>
                        <li>
                            <strong>Serum:</strong> Hyaluronic acid serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Ceramide-rich moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Soothing mask once a week.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedType === 'Normal') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Hyaluronic acid</li>
                        <li>niacinamide</li>
                        <li>antioxidants</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle foaming cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Hyaluronic acid or niacinamide serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Lightweight cream or gel.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Antioxidant serum.
                        </li>
                    </ol>
                </div>
            )
        }
    }

    const handleClickSkintone = () => {
        if(selectedTone === 'Fair or light') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Vitamin C</li>
                        <li>niacinamide</li>
                        <li>SPF</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle foaming cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Vitamin C serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Lightweight cream.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                    </ol>
                </div>
            )
        }
        
        else if(selectedTone === 'Medium or Wheatish') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Hyaluronic acid</li>
                        <li>niacinamide</li>
                        <li>SPF</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Niacinamide serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Hydrating cream.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedTone === 'Tan or caramel') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Vitamin C</li>
                        <li>niacinamide</li>
                        <li>SPF</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle foaming cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Vitamin C serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Lightweight cream.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedTone === 'Deep or rich') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Hyaluronic acid</li>
                        <li>niacinamide</li>
                        <li>SPF</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Niacinamide serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Hydrating cream.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                    </ol>
                </div>
            )
        }
    }

    const handleClickSun = () => {
        if(selectedSunProtection === 'Never leave the house without SPF') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps: <span className="text-lg font-normal"> Consistent SPF use, incorporating antioxidants.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Antioxidant Serum:</strong> Vitamin C or other antioxidants in the morning.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedSunProtection === 'only on sunny days') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps: <span className="text-lg font-normal"> Emphasize regular SPF and antioxidants.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Antioxidant Serum:</strong> Vitamin C in the morning.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedSunProtection === 'Occasionally') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps: <span className="text-lg font-normal"> Increase SPF usage, antioxidants.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Antioxidant Serum:</strong> Vitamin C.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedSunProtection === 'Rarely use sunscreen') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps: <span className="text-lg font-normal"> Emphasize regular SPF and antioxidants.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Antioxidant Serum:</strong> Vitamin C.
                        </li>
                    </ol>
                </div>
            )
        }
    }
    
    const handleClickSleep = () => {
        if(selectedSleepTime === 'Less than 5 hours') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps: <span className="text-lg font-normal"> Hydration, anti-fatigue ingredients.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Hydrating  Serum:</strong> Hyaluronic acid.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Rich cream.
                        </li>
                        <li>
                            <strong>Eye Cream:</strong> Anti-fatigue eye cream with caffeine.
                        </li>
                    </ol>
                    <p>Tip: Get enough sleep if possible.</p>
                </div>
            )
        }

        else if(selectedSleepTime === '5-7 hours') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps: <span className="text-lg font-normal"> Hydration, antioxidants.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Hydrating  Serum:</strong> Hyaluronic acid.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Lightweight cream.
                        </li>
                        <li>
                            <strong>Eye Cream:</strong> Hydrating eye cream.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedSleepTime === '7-9 hours') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps: <span className="text-lg font-normal"> Maintain hydration, antioxidants.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Hydrating  Serum:</strong> Hyaluronic acid.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Lightweight cream.
                        </li>
                    </ol>
                </div>
            )
        }

        else if(selectedSleepTime === 'More than 9 hours') {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Routine Steps:  <span className="text-lg font-normal"> Maintain hydration, antioxidants.</span></h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Hydrating  Serum:</strong> Hyaluronic acid.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Rich cream.
                        </li>
                        <li>
                            <strong>Eye Cream:</strong> Lightweight cream.
                        </li>
                    </ol>
                </div>
            )
        }
    }

    const handleClickSkinConcerns = () => {
        if (concerns.includes('acne')) {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Salicylic acid</li>
                        <li>benzoyl peroxide</li>
                        <li>tea tree oil</li>
                        <li>niacinamide</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Salicylic acid cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Clarifying toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Niacinamide serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Oil-free moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Spot treatment with benzoyl peroxide.
                        </li>
                    </ol>
                </div>
            )
        }

        else if (concerns.includes('fineLines')) {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Retinoids</li>
                        <li>peptides</li>
                        <li>hyaluronic acid</li>
                        <li>antioxidants</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle hydrating cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Retinoid serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Peptide-rich moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Antioxidant serum in the morning.
                        </li>
                    </ol>
                </div>
            )
        }

        else if (concerns.includes('darkSpots')) {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Vitamin C</li>
                        <li>niacinamide</li>
                        <li>AHAs</li>
                        <li>retinoids</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Brightening cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Exfoliating toner with AHA.
                        </li>
                        <li>
                            <strong>Serum:</strong> Vitamin C serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Brightening moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Retinoid treatment at night.
                        </li>
                    </ol>
                </div>
            )
        }

        else if (concerns.includes('dryness')) {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Hyaluronic acid</li>
                        <li>ceramides</li>
                        <li>glycerin</li>
                        <li>squalane</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Hydrating cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Hydrating toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Hyaluronic acid serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Rich cream.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Overnight hydrating mask.
                        </li>
                    </ol>
                </div>
            )
        }

        else if (concerns.includes('redness')) {
            return (
                <div className="p-7">
                    <h2 className='text-xl font-bold'>Ingredients:</h2>
                    <ul className='list-disc list-inside text-lg'>
                        <li>Centella asiatica</li>
                        <li>chamomile</li>
                        <li>hyaluronic acid</li>
                        <li>ceramides</li>
                    </ul>

                    <h2 className='text-xl font-bold'>Routine Steps:</h2>
                    <ol className='list-decimal list-inside text-lg'>
                        <li>
                            <strong>Cleanser:</strong> Gentle, non-foaming cleanser.
                        </li>
                        <li>
                            <strong>Toner:</strong> Soothing toner.
                        </li>
                        <li>
                            <strong>Serum:</strong> Hyaluronic acid serum.
                        </li>
                        <li>
                            <strong>Moisturizer:</strong> Ceramide-rich moisturizer.
                        </li>
                        <li>
                            <strong>SPF:</strong> Broad-spectrum SPF 30 or higher.
                        </li>
                        <li>
                            <strong>Optional:</strong> Soothing mask once a week.
                        </li>
                    </ol>
                </div>
            )
        }
    }

  return (
    <>
      <div className="pt-20 m-16">
        <h1 className="text-5xl font-bold underline underline-offset-8" style={{fontFamily: "'Cinzel', serif"}}>Recommended Skin Care:</h1>
        {/* <button className="px-2 py-2 text-2xl bg-purple-500 rounded-xl m-10" onClick={handleClick}>Get skin care Recommendations</button> */}
      </div>

        <div className="m-16 grid grid-cols-2 border-2 border-[#380967] rounded-3xl">
            <div className="p-7 bg-gradient-to-b from-pink-400 to-blue-400 rounded-l-3xl">
            <span className="text-3xl font-bold font-serif"> Recommendation based on Age: </span> <p>{handleClickAge()}</p>  <br />
            
            <span className="text-3xl font-bold font-serif"> Skin type Recommendation: </span> <p>{handleClickSkintype()}</p>    <br />
            
            <span className="text-3xl font-bold font-serif"> Skintone Recommendation: </span><p>{handleClickSkintone()}</p> <br />
            
            <span className="text-3xl font-bold font-serif"> Sun protection Recommendation: </span><p>{handleClickSun()}</p>    <br />
            
            <span className="text-3xl font-bold font-serif"> Sleep Recommendation: </span><p>{handleClickSleep()}</p>   <br />
            
            <span className="text-3xl font-bold font-serif"> Skin concern based Recommendation: </span><p>{handleClickSkinConcerns()}</p>   <br />
            </div>

            <div className="">
                <img className='rounded-r-3xl bg-repeat h-full' src="https://images.pexels.com/photos/3780104/pexels-photo-3780104.png?auto=compress&cs=tinysrgb&w=1280" alt="" />
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
