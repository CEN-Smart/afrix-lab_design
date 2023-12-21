import React from 'react';
import Overlay from '../overlay/Overlay';
import Button from '../buttons/Button';

export default function ProductDesign() {
  return (
    <div className=' bg__product--design py-10 relative'>
      <Overlay section='Our Services' className='bg__product--design-overlay'>
        <div className=' flex flex-col gap-10 lg:gap-32'>
          <hgroup className=' text-white flex justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl '>
            <h3 className=' leading-[1.1] font-title'>Product Design</h3>
          </hgroup>
          <div className='flex flex-col gap-4 w-full'>
            <span className='flex gap-4 flex-col md:flex-row items-center'>
              <Button label='Product' blur className='text-white w-[260px]' />
              <Button label='Web' blur className='text-white w-[260px]' />
            </span>
            <span className='flex gap-4 justify-center flex-col md:flex-row'>
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
