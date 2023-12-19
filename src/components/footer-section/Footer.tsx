import arrow from "/public/images/arrow.svg"
import Image from 'next/image';
import Link from 'next/link';
// import arrow from '/images/arrow.svg';
export default function Footer() {
  return (
    <section className=' footer-section min-h-screen grid place-items-center text-white'>
      <div className='overlay'>
        <h5 className='font-body '>Footer</h5>
        <section>
          <div className='footer-title md:text-3xl lg:text-5xl leading-6 relative -top-8 sm:top-0 font-body'>
            <p className='tab-space'> Ready for the,</p>
            <p>
              Next<span className=' italics'> big thing?</span>
            </p>
          </div>
          <div className=' footer-content'>
            <button className='button'>
              Get in Touch
              <Image src={arrow} alt='arrow' width='32' height='18' />
            </button>
            <div className='footer-info'>
              <h5 className='help-text font-body'>
                We are ready and totally
                <br /> excited to help you.
              </h5>
              <div className='footer-lists font-body'>
                <ul>
                  <Link href="#">Quick links</Link>
                 <Link href="#">About us</Link>
                 <Link href="#">Products</Link>
                 <Link href="#">Services</Link>
                 <Link href="#">Contact us</Link>
                 <Link href="#">Privacy Policy</Link>
                </ul>
                <ul>
                  <Link href="#">Socials</Link>
                 <Link href="#">Twitter</Link>
                 <Link href="#">LinkedIn</Link>
                 <Link href="#">github</Link>
                 <Link href="#">Instagram</Link>
                 <Link href="#">Terms of use</Link>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
