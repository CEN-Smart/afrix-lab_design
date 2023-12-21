import Blogs from '../blogs/Blogs';
import Cta from '../cta/Cta';
import Footer from '../footer-section/Footer';

export default function BottomSections() {
  return (
    <section className='bottom-sections'>
      <Blogs />
      <Cta />
      <Footer />
    </section>
  );
}
