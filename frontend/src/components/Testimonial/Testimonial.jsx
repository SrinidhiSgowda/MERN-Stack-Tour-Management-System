import React from 'react';
import Slider from 'react-slick';
import ava1 from '../../assets/images/ava-1.jpg';
import ava2 from '../../assets/images/ava-2.jpg';
import ava3 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true, // Corrected typo
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Testimonial 1 */}
      <div className="testimonial py-6 px-3">
        {/* Testimonial Content */}
        <p>My parenst enjoyed the trip thoroughly . Everything was well organised and arrangements were also good . Hotel and fooding was brilliant and very tasty .</p>
        {/* Testimonial Author */}
        <div className="d-flex align-items-center gap-4 px-3">
          <img src={ava1} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Lia Franklin</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      {/* Testimonial 2 */}
      <div className="testimonial py-6 px-3">
        {/* Testimonial Content */}
        <p>It was really good and memorable trip for us..Thank you team for providing all facilities and covering all places mentioned in the package.</p>
        {/* Testimonial Author */}
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava2} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Nethra</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      {/* Testimonial 3 */}
      <div className="testimonial py-6 px-3">
        {/* Testimonial Content */}
        <p>Every thing was smooth and no issues in terms of any coordination. Well planned and suited as per our requirements</p>
        {/* Testimonial Author */}
        <div className="d-flex align-items-center gap-4 px-3">
          <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Joseph</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
     
    </Slider>
  );
};

export default Testimonial;
