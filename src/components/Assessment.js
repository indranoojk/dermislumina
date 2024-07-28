import React from 'react'
import Age from './Age';

const Assessment = () => {

    // const [selectedOption, setSelectedOption] = useState(null);

    // const handleOptionClick = (option) => {
    //     setSelectedOption(option);
    // }

  return (
    <>
      <div className="m-20 pt-8">
            <h1 className="text-5xl p-4 mb-6 font-medium font-serif">Skin care Assessment</h1>

            <h2 className="text-2xl pl-10">Hello friend &#128516; !!!</h2>

            <Age />
            {/* <Skintype /> */}
            {/* <Skintone /> */}

            
        </div>
    </>
  )
}

export default Assessment
