import Hero from '@/components/hero-section/Hero';
import BottomSections from '@/components/bottom-sections/BottomSections';
import AboutUs from '@/components/about-us/AboutUs';
import Featuredprojects from '@/components/featured-projects/FeaturedProjects';
import OurServices from '@/components/services/OurServices';
import ProductDesign from '@/components/services/ProductDesign';
import ScrollToTopButton from '@/components/footer-section/ScrollToTop';

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Featuredprojects />
      <OurServices />
      <ProductDesign />
      <BottomSections />
      <ScrollToTopButton />
    </>
  );
}
