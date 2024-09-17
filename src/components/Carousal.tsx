import Slider from 'react-slick';
import product_img_1 from '../assets/product_img_1.png';
import product_img_2 from '../assets/product_img_2.png';
import product_img_3 from '../assets/product_img_3.png';
import product_img_4 from '../assets/product_img_4.png';
import product_img_5 from '../assets/product_img_5.png';
import '../styles/carousal.css';


function CustomPaging() {
  const images = [product_img_1, product_img_2, product_img_3, product_img_4, product_img_5];

  const settings = {
    customPaging: function(i: number) {
      return (
        <a>
          <img 
            src={images[i]} 
            alt={`Thumbnail ${i + 1}`} 
          />
        </a>
      );
    },
    arrows: false,
    dots: true,
    fade: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="slider-container" style={{ textAlign: 'center', padding: '20px' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img 
              src={image} 
              alt={`Slide ${index + 1}`} 
              style={{ width: '650px', height: 'auto', margin: '0 auto'}} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomPaging;
