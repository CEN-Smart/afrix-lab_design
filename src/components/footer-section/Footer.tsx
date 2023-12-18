import arrow from "../../../public/images/arrow.svg"
import Image from 'next/image';
// import arrow from '/images/arrow.svg';
export default function Footer() {
  return (
    <section className=' footer-section min-h-screen grid place-items-center text-white'>
      <div className='overlay'>
        <h5 className='font-body h5'>Footer</h5>
        <section>
          <div className='footer-title md:text-3xl lg:text-5xl leading-6 relative -top-8 sm:top-0 font-body'>
            <p className='tab-space'> Ready for the,</p>
            <p>
              Next<span className=' italic font'> big thing?</span>
            </p>
          </div>
          <div className=' footer-content'>
            <button className='button'>
              Get in Touch
              <Image src={arrow} alt='arrow' width='32' height='18' />
            </button>
            <div className="footer-info">
              <h5 className='help-text font-body'>
                We are ready and totally
                <br /> excited to help you.
              </h5>
            <div className='footer-lists font-body'>
              <ul>
                <h5>Quick links</h5>
                <li>About us</li>
                <li>Products</li>
                <li>Services</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
              </ul>
              <ul>
                <h5>Socials</h5>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>github</li>
                <li>Instagram</li>
                <li>Terms of use</li>
              </ul>
            </div>
          </div>
          </div>
        </section>
      </div>
    </section>
  );
}
