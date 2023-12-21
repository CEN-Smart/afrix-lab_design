import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not__found--container'>
      <div className='not__found--content'>
        <h2>Oops! Page not found.</h2>
        <h1 className=' text-[140px] md:text-[160px]'>404</h1>
        <p>We can&apos;t find the page you&apos;re looking for.</p>
        <Link
          className='bg-[#e55039aa] inline-block px-6 py-3 rounded-[25px] mt-2 uppercase text-[#fff]  hover:bg-[#e55039] transition duration-300 ease-in-out'
          href='/'
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
