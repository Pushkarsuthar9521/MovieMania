import Link from 'next/link';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Slider = () => {
  return (
    <div className="container mx-auto py-6">
      <Carousel
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
      >
        <div>
          <img src="/image1.jpg" alt="Image 1" />
        </div>
        <div>
          <img src="/image2.jpg" alt="Image 2" />
        </div>
        <div>
          <img src="/image3.jpg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
