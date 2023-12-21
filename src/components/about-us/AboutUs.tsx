import React from 'react';
import Overlay from '../overlay/Overlay';
import Button from '../buttons/Button';

export default function AboutUs() {
  return (
    <div className='relative py-10 bg__about'>
      <Overlay section='About Us'>
        <div className='flex flex-col gap-10 lg:gap-32 '>
          <hgroup className='flex justify-center text-2xl text-white md:text-3xl lg:text-4xl xl:text-5xl'>
            <h3 className=' leading-[1.1]'>
              <h4 className=' ml-[1rem] lg:ml-[7.25rem] '>
                With Emotion, Innovation,
              </h4>
              <p className=''>We Push The Boundaries</p>
              <p className=''>
                of <span className='italic font-title'>Digital Creativity</span>
              </p>
            </h3>
          </hgroup>
          <div className='flex justify-between gap-2 w-full flex-col lg:flex-row  text-[#9E9E9E]'>
            <Button
              className='self-end order-1 mt-8 shrink-0 lg:-order-1 lg:mt-0'
              icon='/images/arrow.svg'
              label='Read more'
            />
            <p className=' basis-[100%] lg:basis-1/2 flex flex-col gap-5 lg:gap-16 shrink-0  text-sm md:text-lg'>
              <span>
                At Afrix labs, products come first. sometimes that means taking
                an existing app and helping its creators make it much better
              </span>
              <span>
                Every brand has a story, from startups finding their voice to
                enterprises refining their legacy. we ensure that tale shines
                brilliantly. with a blend of rapid iteration and collaborative
                spirit, we empower you to reshape your story
              </span>
            </p>
          </div>
        </div>
      </Overlay>
    </div>
  );
}
