export default function Webdesign() {
  return (
    <section className='bg-about min-h-screen grid place-items-center text-white'>
      <div className='container relative'>
        <div className=''>
          <p className='absolute top-[-280px] left-[-75px] web-dev-services'>
            Our Services
          </p>
          <p className='absolute top-[-150px] left-[430px] md:text-3xl lg:text-5xl italic font-[500]'>
            {' '}
            Web Development
          </p>
        </div>
        <div className='web-dev-services items-center relative'>
          <div className='web-dev-services flex items-center gap-8 my-2 '>
            <div className='absolute top-[-90px] left-[350px] p-3 backdrop-blur-md w-[260px] text-center rounded-lg'>
              Product
            </div>
            <div className='absolute top-[-90px] left-[625px] p-3 backdrop-blur-md w-[260px]  text-center rounded-lg'>
              Web
            </div>
          </div>
          <div className='web-dev-services  gap-8 flex items-center justify-center text-center relative'>
            <div className='absolute top-[-40px] left-[400px] p-3 backdrop-blur-md w-[130px] h-[40px] rounded-lg'>
              Mobile
            </div>
            <div className='absolute top-[-40px] left-[550px] p-3 backdrop-blur-md w-[130px] h-[40px] rounded-lg'>
              App
            </div>
            <div className='absolute top-[-40px] left-[700px] p-3 backdrop-blur-md w-[130px] h-[40px] rounded-lg'>
              UX/UI
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
