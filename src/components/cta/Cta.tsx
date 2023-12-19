export default function Cta() {
  return (
    <section className=' cta-section min-h-screen grid place-items-center text-white'>
      <div className='overlay'>
        <h5 className='font-body'>CTA</h5>
        <div className='cta-content'>
          <h1 className='md:text-3xl lg:text-5xl leading-6 relative -top-8 sm:top-0 font-body'>
            Where <span className=' italics'>difference</span> is the standard, chose <strong>AFRIX LABS</strong>
          </h1>
          <button className='flex-shrink-0 bg-cta hover:bg-ctahover transition duration-300 px-5 py-2 rounded-[12px]'>
            Say hello (email icon)
          </button>
        </div>
       
      </div>
    </section>
  );
}
