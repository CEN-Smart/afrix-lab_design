import React from 'react';
import Overlay from '../overlay/Overlay';
import Button from '../buttons/Button';

export default function Featuredprojects() {
  return (
    <div className=' bg__featured py-10 relative'>
      <Overlay section='Featured Projects'>
        <div className=' flex flex-col gap-32 justify-center items-center'>
          <div className='w-full max-w-[450px] h-[385px] relative '>
            <picture>
              <img
                src='/images/feature.jpeg'
                alt='Colorful Image'
                className='w-full h-full object-cover'
              />
            </picture>
            <p className=' md:bottom-[1.25rem] md:-right-12 text-white font-title  absolute'>
              Title of Project
              <span className=' absolute -top-[1.5rem] -right-[1.5rem] text-sm'>
                1/4
              </span>
            </p>
          </div>
          <div className='flex justify-between gap-2 w-full flex-col lg:flex-row  text-[#9E9E9E]'>
            <Button
              className=' self-end shrink-0 order-1 lg:-order-1 mt-8 lg:mt-0'
              icon='/images/arrow.svg'
              label='Read Case Study'
            />
            <p className=' basis-[100%] lg:basis-1/2 flex flex-col gap-16 shrink-0'>
              <span>
                <span className='text-white'>
                  Detailed description of project:
                </span>{' '}
                from startups finding their voice to enterprises refining their
                legacy. we ensure that tale shines brilliantly. with a blend of
                rapid iteration and collaborative spirit, we empower you to
                reshape your story
              </span>
            </p>
          </div>
        </div>
      </Overlay>
    </div>
  );
}
