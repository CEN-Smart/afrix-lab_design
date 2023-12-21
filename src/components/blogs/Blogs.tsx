// import arrow from '/public/images/arrow.svg';
import Overlay from '../overlay/Overlay';
import Button from '../buttons/Button';
import Image from 'next/image';

type Data = {
  [key: string]: string;
};

const data: Data[] = [
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
    <section className=' blog-section text-white font-body relative py-10'>
      <Overlay section='Blogs' className='blogs'>
        <section className='blog-section-1'>
          {data.map(item => (
            <div className='blog-item' key={item.title}>
              <Image
                src={item.img}
                alt={item.title}
                width='329'
                height='324'
                className='blog-img'
              />
              <div className='blog-info'>
                <div className='blog-cat'>
                  <span>{item.cat1}</span>
                  <span>{item.year}</span>
                  <span>{item.cat2}</span>
                </div>
                <p className='blog-title font-body'>{item.title}</p>
                <Button
                  className='blog-link'
                  icon='/images/arrow.svg'
                  label='Read'
                />
              </div>
            </div>
          ))}
        </section>
      </Overlay>
    </section>
  );
}
