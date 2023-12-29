import Overlay from '../overlay/Overlay';
import { MdOutlineMarkEmailRead } from 'react-icons/md';

export default function Cta() {
  return (
    <section className=' cta-section relative py-10  text-white'>
      <Overlay section='CTA' className='cta flex flex-col justify-center '>
        <div className='cta-content flex flex-col items-center'>
          <h1 className='md:text-3xl lg:text-5xl leading-6 relative -top-8 sm:top-0 font-body uppercase'>
            Where <span className=' italics font-title'>difference</span>{' '}
            <span className='uppercase'>is the standard, choose</span>{' '}
            <span className='text-white'>AFRIX LABS</span>
          </h1>
          <button className='flex-shrink-0 bg-cta hover:bg-ctahover focus:outline-2 focus:outline focus:outline-emerald-500 focus:outline-offset-1 transition duration-300 px-5 py-2 rounded-[12px]'>
            Say hello <MdOutlineMarkEmailRead />
          </button>
        </div>
      </Overlay>
    </section>
  );
}
