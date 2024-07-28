import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function SkinConcerns() {
  const [concerns, setConcerns] = useState([]);
  const [error, setError] = useState(null);

  const options = [
    { value: 'acne', label: 'Acne or breakouts' },
    { value: 'fineLines', label: 'Fine lines and wrinkles' },
    { value: 'darkSpots', label: 'Dark spots or pigmentation or uneven skin tone' },
    { value: 'dryness', label: 'Dryness or flakiness' },
    { value: 'redness', label: 'Redness or sensitivity' },
  ];

  const handleSelect = (value) => {
    if (concerns.includes(value)) {
      setConcerns(concerns.filter((concern) => concern !== value));
    } else if (concerns.length < 3) {
      setConcerns([...concerns, value]);
    } else {
      setError('You can select up to 3 skin concerns.');
    }
  };


  useEffect(() => {
    // Store concerns in localStorage when component unmounts
    return () => {
      localStorage.setItem('skinConcerns', JSON.stringify(concerns));
    };
  }, [concerns]);

  return (
    <div className="m-20 pt-8">
            <h1 className="text-5xl p-4 mb-6 font-medium font-serif">Skin care Assessment</h1>
            <div className="text-center p-8 rounded-lg mb-10 relative">
                <img className='w-full h-[630px] object-cover rounded-3xl blur-[1px]' src="https://images.pexels.com/photos/6476116/pexels-photo-6476116.jpeg?auto=compress&cs=tinysrgb&w=1280" alt="" />
                <div className="w-96 grid gap-5 p-2 ml-[33%] top-16 rounded-2xl absolute">
                    <h3 className='text-4xl font-bold text-white'>What are your top skin concerns?</h3>
                    <p className="text-base">[ You can select up to 3. ]</p>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <ul>
                        {options.map((option, index) => (
                            <li
                                key={index}
                                className={`mb-2 px-2 py-3 bg-[#eb9ce5] cursor-pointer rounded-md text-xl hover:bg-[#fffefe] ${
                                concerns.includes(option.value)? 'bg-[#fffefe]' : ''
                                }`}
                                onClick={() => handleSelect(option.value)}
                            >
                                <span className="text-lg">{option.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <Link to="/recommendations">
                    <div className="px-3 py-1 text-3xl -mt-24 absolute ml-[44%] bg-pink-700 rounded-2xl text-white">
                        <span> Next &rarr; </span>
                    </div>
                </Link>

            </div>
        

      {/* <p className="text-lg font-bold">Selected concerns:</p>
      <ul>
        {concerns.map((concern, index) => (
          <li key={index} className="mb-2">
            <span className="text-lg">{options.find((option) => option.value === concern).label}</span>
          </li>
        ))}
      </ul> */}


            <Link to="/sleeptime">
                <div className="text-2xl pl-20 -mt-14">
                    <span> &larr; Back</span>
                </div>
            </Link>

    </div>
  );
}

export default SkinConcerns;