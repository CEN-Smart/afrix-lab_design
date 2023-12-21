import arrow from '/public/images/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
import Overlay from '../overlay/Overlay';
import Button from '../buttons/Button';

export default function Footer() {
  return (
    <section className=' footer-section relative py-10 text-white '>
      <Overlay section='Footer' className='footer'>
        <section>
          <div className='footer-title md:text-3xl lg:text-5xl leading-6 relative -top-8 sm:top-0 font-body'>
            <p className='tab-space'> Ready for the,</p>
            <p>
              Next<span> big thing?</span>
            </p>
          </div>
          <div className=' footer-content'>
            <Button
              border
              className='button'
              icon='/images/arrow.svg'
              label='Get in Touch'
            />
            <div className='footer-info'>
              <h5 className='help-text font-body text-[#9E9E9E]'>
                We are ready and totally
                <br /> excited to help you.
              </h5>
              <Button
                border
                className='mobile-button'
                icon='/images/arrow.svg'
                label='Get in Touch'
              />
              <div className='footer-lists font-body'>
                <ul>
                  <Link href='#'>Quick links</Link>
                  <Link href='#'>About us</Link>
                  <Link href='#'>Products</Link>
                  <Link href='#'>Services</Link>
                  <Link href='#'>Contact us</Link>
                  <Link href='#'>Privacy Policy</Link>
                </ul>
                <ul>
                  <Link href='#'>Socials</Link>
                  <Link href='#'>Twitter</Link>
                  <Link href='#'>LinkedIn</Link>
                  <Link href='#'>github</Link>
                  <Link href='#'>Instagram</Link>
                  <Link href='#'>Terms of use</Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Overlay>
    </section>
  );
}
