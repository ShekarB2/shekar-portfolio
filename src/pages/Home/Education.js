import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { education } from '../../resources/education';

function Education() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div id='education'>
        <SectionTitle title="Education" />
        <div className='flex py-2 gap-20 sm:flex-col'>
        <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/4 sm:flex-row sm:overflow-x-scroll sm:w-full'>
          {education.map((education, index) => (
            <div onClick={() => {
              setSelectedItemIndex(index);
            }}
              className='cursor-pointer'
            >
              <h1 className={`text-1xl px-5
                ${selectedItemIndex === index
                  ? 'text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3'
                  : 'text-white'}`}
              >
                {education.period}
              </h1>
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-5  '>
          <h1 className="text-secondary text-2xl font-semibold">{education[selectedItemIndex].title}</h1>
          <h1 className="text-tertiary ">{education[selectedItemIndex].company}</h1>
        </div>
      </div>
    </div>
  )
}

export default Education
