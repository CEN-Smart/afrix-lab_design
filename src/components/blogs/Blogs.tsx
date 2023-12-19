import arrow from '/public/images/arrow.svg';
import Image from 'next/image';
import Link from 'next/link';
// import arrow from '/images/arrow.svg';

const data = [
  {
    title: 'Key Factors to consider when choosing a UX design Agency',
    img: '/images/blog1.png',
    link: '#',
    cat1: 'UX/UI',
    cat2: 'Web Design',
    year: '2023',
  },
  {
    title: 'Key Factors to consider when choosing a UX design Agency',
    img: '/images/blog2.png',
    link: '#',
    cat1: 'UX/UI',
    cat2: 'Web Design',
    year: '2023',
  },
];

export default function Blogs() {
  return (
    <section className=' blog-section min-h-screen grid place-items-center text-white font-body'>
      <div className='overlay'>
        <h5 className='font-body'>Blogs</h5>
        <div className='blog-content'>
          <section className='blog-section-1'>
            {data.map((item, index) => (
              <div className='blog-item' key={index}>
                <Image
                  src={item.img}
                  alt={item.title}
                  width="329"
                  height="324"
                  className='blog-img'
                />
                <div className='blog-info'>
                  <div className='blog-cat'>
                    <span>{item.cat1}</span>
                    <span>{item.year}</span>
                    <span>{item.cat2}</span>
                  </div>
                  <p className='blog-title font-body'>
                    {item.title}
                  </p>          
                    <Link href={item.link} className='blog-link'>
                      Read
                      <Image src={arrow} alt='arrow' width={32} height={18} />                  
                    </Link>                  
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}
