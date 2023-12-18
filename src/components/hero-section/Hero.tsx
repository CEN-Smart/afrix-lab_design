export default function Hero() {
  return (
    <section className='bg-hero flex flex-col justify-center items-center text-white gap-16'>
      <hgroup className='md:text-3xl lg:text-5xl leading-6 -top-16 md:top-0 relative'>
        <h1> Building</h1>
        <h1> Innovative </h1>
        <h1 className=' font-title italic font-[600] mt-1'>
          Blockchain Solutions
        </h1>
      </hgroup>
      <aside className=' self-end md:pr-[12rem] -mb-40 flex items-center'>
        <p className=' font-title italic flex flex-col leading-relaxed md:text-2xl lg:text-4xl text-white'>
          <span>Inspire</span>
          <span>Innovate</span>
          <span>Incubate</span>
        </p>
        <svg
          className=' animate-bounce'
          xmlns='http://www.w3.org/2000/svg'
          width='126'
          height='126'
          viewBox='0 0 126 126'
          fill='none'
        >
          <mask
            id='mask0_1974_466'
            style={{ maskType: 'luminance' }}
            maskUnits='userSpaceOnUse'
            x='0'
            y='0'
            width='126'
            height='126'
          >
            <path
              d='M62.9971 125.224L125.223 62.999L62.9971 0.774417L0.771503 62.999L62.9971 125.224Z'
              fill='white'
            />
          </mask>
          <g mask='url(#mask0_1974_466)'>
            <path
              d='M62.7695 92.4928L62.7695 24.8564'
              stroke='white'
              stroke-width='3.99998'
            />
            <path
              d='M40.2239 76.21C45.9512 76.21 62.7696 81.4221 62.7695 102.028'
              stroke='white'
              stroke-width='3.99998'
            />
            <path
              d='M85.3164 76.21C79.5891 76.21 62.7708 81.422 62.7708 102.028'
              stroke='white'
              stroke-width='3.99998'
            />
          </g>
        </svg>
      </aside>
    </section>
  );
}
