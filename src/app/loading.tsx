export default function Loading() {
  return (
    <div className='loading__container'>
      <div className='loading__content'>
        <h2 className='mb-8'>Loading...</h2>
        <div className='loading__dots'>
          <div className='loading__dot'></div>
          <div className='loading__dot'></div>
          <div className='loading__dot'></div>
        </div>
      </div>
    </div>
  );
}
