import React from 'react';
import Overlay from '../overlay/Overlay';
import Button from '../buttons/Button';

export default function WebDesign() {
  return (
    <div className=' bg__web--design py-10 relative'>
      <Overlay section='Our Services' className='bg__web--design-overlay'>
        <div className=' flex flex-col gap-10 lg:gap-32'>
          <hgroup className=' text-white flex justify-center  '>
            <h3 className=' leading-[1.7] italic text-2xl md:text-4xl lg:text-[48px] font-title'>
              Web Development
            </h3>
          </hgroup>
          <div className='flex flex-col gap-4 w-full'>
            <span className='flex gap-4 max-md:flex-col items-center'>
              <Button label='Product' blur className='text-white w-[260px]' />
              <Button label='Web' blur className='text-white w-[260px]' />
            </span>
            <span className='flex gap-4 justify-center max-md:flex-col'>
              <Button
                label='Mobile'
                blur
                className='text-white w-[260px] md:w-[130px]'
              />
              <Button
                label='App'
                blur
                className='text-white w-[260px] md:w-[130px]'
              />
              <Button
                label='UX/UI'
                blur
                className='text-white w-[260px] md:w-[130px]'
              />
            </span>
          </div>
        </div>
      </Overlay>
    </div>
  );
}
