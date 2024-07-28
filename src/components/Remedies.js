import React from 'react'
import SkinConcerns from './SkinConcerns'

const Remedies = () => {
  return (
    <>
        <div className="flex">
            <img className='w-[25%]' src="https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

            <img className='w-[25%]' src="https://images.pexels.com/photos/461337/pexels-photo-461337.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

            <img className='w-[25%]' src="https://images.pexels.com/photos/4004122/pexels-photo-4004122.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

            <img className='w-[25%]' src="https://images.pexels.com/photos/4198714/pexels-photo-4198714.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />

        </div>
      

        <div className="ml-4">
            <h1 className="text-6xl p-5" style={{fontFamily: "'Cinzel', serif"}}>Home Remedies for Radiant Skin</h1>
            <p className="text-xl pl-8">Welcome to our guide on achieving glowing, healthy skin with natural home remedies. These simple, effective solutions use ingredients you likely already have in your kitchen. Let's dive into some of the best remedies for various skin concerns.</p>

            <div className="pr-20 mb-10">
                <h3 className="text-4xl p-5 font-serif">1. Honey and Lemon Mask</h3>
                <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 1 tablespoon of honey, 1 teaspoon of lemon juice</p>
                <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Honey is a natural humectant that helps keep your skin moisturized, while lemon is rich in vitamin C, which brightens the skin and helps fade dark spots.</p>
                <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Mix honey and lemon juice in a bowl. Apply the mixture to your face, avoiding the eye area. Leave it on for 15-20 minutes, then rinse off with warm water. Use this mask once a week for best results.</p>
            </div>

            <div className="pr-20 mb-10">
                <h3 className="text-4xl p-5 font-serif">2. Aloe Vera Gel</h3>
                <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> Fresh aloe vera leaf</p>
                <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Aloe vera is renowned for its soothing and healing properties. It hydrates the skin, reduces inflammation, and can help with sunburns and acne.</p>
                <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Cut an aloe vera leaf and extract the gel. Apply the gel directly to your face and let it sit for 10-15 minutes. Rinse with cool water. Use this remedy daily for smooth, supple skin.</p>
            </div>

            <div className="pr-20 mb-10">
                <h3 className="text-4xl p-5 font-serif">3. Turmeric and Yogurt Pack</h3>
                <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 1 teaspoon of turmeric powder, 2 tablespoons of yogurt</p>
                <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Turmeric has anti-inflammatory and antibacterial properties, which help to clear acne and reduce redness. Yogurt contains lactic acid that gently exfoliates and moisturizes the skin.</p>
                <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Combine turmeric powder and yogurt to form a paste. Apply the mixture to your face and let it sit for 10-15 minutes. Rinse off with lukewarm water. Use this pack once or twice a week for a radiant complexion.</p>
            </div>

            <div className="pr-20 mb-10">
                <h3 className="text-4xl p-5 font-serif">4. Oatmeal and Milk Scrub</h3>
                <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 2 tablespoons of oatmeal, 2 tablespoons of milk</p>
                <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Oatmeal acts as a gentle exfoliant, removing dead skin cells and unclogging pores. Milk contains lactic acid, which softens and brightens the skin.</p>
                <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Mix oatmeal and milk to create a paste. Gently massage the mixture onto your face in circular motions for a few minutes. Rinse with warm water. Use this scrub once a week to maintain smooth, clear skin.</p>
            </div>

            <div className="pr-20 mb-10">
                <h3 className="text-4xl p-5 font-serif">5. Cucumber and Rose Water Toner</h3>
                <p className="text-xl pl-12"><span className='font-bold'>Ingredients:</span> 1 cucumber, 2 tablespoons of rose water</p>
                <p className="text-xl pl-12"><span className='font-bold'>Benefits:</span> Cucumber has cooling and hydrating properties, while rose water soothes and tones the skin.</p>
                <p className="text-xl pl-12"><span className='font-bold'>Instructions:</span> Blend the cucumber and strain the juice. Mix the cucumber juice with rose water. Apply the toner to your face using a cotton pad. This toner can be used daily for refreshing and toning your skin.</p>
            </div>

        </div>
        
            <div className="pr-20 ml-10 p-5">
                <h2 className="text-3xl font-semibold">Final Tips:</h2>
                <ul className='text-2xl'>
                    <li> &rarr; Always do a patch test before trying any new remedy to ensure you don't have an allergic reaction.</li>
                    <li> &rarr; Maintain a consistent skincare routine for best results.</li>
                    <li> &rarr; Stay hydrated and eat a balanced diet to support your skin from within.</li>
                </ul>
                <p className='text-xl p-2'> Embrace these natural remedies to enhance your skincare routine and achieve a healthy, glowing complexion. Your skin will thank you for it!</p>
            </div>

    </>
  )
}

export default Remedies
