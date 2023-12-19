import React from 'react';
import Overlay from '../overlay/Overlay';
import Button from '../buttons/Button';

export default function OurServices() {
  return (
    <div className=' bg__services py-10 relative'>
      <Overlay section='Our Services'>
        <div className=' flex flex-col gap-32'>
          <hgroup className=' text-white flex justify-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl '>
            <h3 className=' leading-[1.1]'>
              <h4 className=' ml-[3.2rem] lg:ml-[7.25rem] '>
                Using digital transformation
              </h4>
              <p className=''>
                of{' '}
                <span className=' font-title italic'>
                  innovate & Inspire Brands
                </span>
              </p>
            </h3>
          </hgroup>
          <div className='flex justify-end gap-2 w-full flex-col lg:flex-row  text-[#9E9E9E]'>
            <p className='  basis-[100%] lg:basis-1/2 flex flex-col gap-16 shrink-0'>
              <span>
                By combining Strategy, UI, UX, & Development best practices, we
                use cutting-edge technology to develop inspiring products that
                meet the specific purpose and needs of your target audience.
              </span>
              <span>
                No jokes, we take pride in elevating brands in unexpected ways.
                Scroll and see for yourself.
              </span>
            </p>
          </div>
        </div>
      </Overlay>
    </div>
  );
}
