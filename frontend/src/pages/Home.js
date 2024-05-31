import React from 'react'
import "../styles/Home.css"
import { Container, Row, Col } from 'reactstrap'
import heroImg from "../assets/images/hero-img01.jpg"
import heroImg02 from "../assets/images/hero-img02.jpg"
import heroVideo from "../assets/images/hero-video.mp4"
import worldImg from "../assets/images/world.png"
import experienceImg from '../assets/images/experience.png'
import Subtitle from '../shared/Subtitle'
import SearchBar from '../shared/SearchBar'
import ServiceList from '../services/ServiceList'
import FeaturedTourList from '../components/Featured-tour/FeaturedTourList'
import MasonryImagesGallery from '../components/Image gallery/MasonryImagesGallery'
import Testimonials from '../components/Testimonial/Testimonial'
import Newsletter from '../shared/Newsletter'
const Home = () => {
  return (
   <>
   {/*=======================hero section start=====================*/}
  <section>
    <Container>
      <Row>
        <Col lg="6">
          <div className='hero__content'>
          <div className='hero__subtitle d-flex align-items-center'>
              <Subtitle Subtitle={'Know Before You Go'}/>
              <img src={worldImg} alt=' '/>
          </div>
          <h1>Travelling opens the door to creating <span className="highlight">memories.</span></h1>
          <p>Traveling also contributes to our overall well-being. Taking a break from our daily routines and immersing ourselves in new surroundings rejuvenates our mind, 
            body, and spirit. Whether it's lounging on a pristine beach, practicing yoga in a serene setting, or hiking in nature's embrace, travel offers us a chance to recharge and find inner peace.</p>
          </div>
        </Col>

        <Col lg="2">
          <div className="hero__img-box" >
            <img src={heroImg} alt=' '/>
          </div>
         
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-4">
            <video src={heroVideo} alt=' ' controls/>
          </div>
        </Col>
        <Col lg="2">
        <div className="hero__img-box mt-5">
            <img src={heroImg02} alt=' '/>
          </div>
        </Col>
        <SearchBar/>
      </Row>
    </Container>
  </section>
  {/*=======================hero section end=====================*/}
   {/*=======================hero service start=====================*/}
   <section>
   <Container>
    <Row>
      <Col lg='3'>
        <h5 className='services__subtitle'>What we serve</h5>
        <h2 className='services__title'>We offer our best services</h2>
      </Col>
      <ServiceList/>
    </Row>
   </Container>
   </section>
    {/*=======================hero services end=====================*/}
   {/*=======================hero featured section start=====================*/}
   <section>
    <Container>
      <Row>
        <Col lg='12' className='mb-5'>
          <Subtitle Subtitle={"Explore"}/>
          <h2 className='featured__tour-title'>Our featured tours</h2>
        </Col>
        <FeaturedTourList/>
      </Row>
    </Container>
   </section>
    {/*=======================hero featured section end=====================*/}
     {/*=======================expirence section start=====================*/}
     <section>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="experience__content">
              <Subtitle Subtitle={'Experience'}/>
              <h2>with our all expirence <br /> we will serve you</h2>
              <p>Adventure awaits beyond the horizon; go explore and find your story..
                <br />
                The world is vast, and each journey is a chapter waiting to be written.
                </p>
              

            </div>
            <div className="counter__wrapper d-flex align-items-center gap-5">
              <div className="counter__box">
                <span>12k+</span>
                <h6>Successful trip</h6>
              </div>

              <div className="counter__box">
                <span>2k+</span>
                <h6>Regular clients</h6>
              </div>

              <div className="counter__box">
                <span>15</span>
                <h6>Years expirence</h6>
              </div>

            </div>
          </Col>
          <Col lg='6'>
            <div className="experience__img">
              <img src={experienceImg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>

     </section>


      {/*=======================expirence section end=====================*/}

      {/*=======================gallery section start=====================*/}
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customers  tour gallery
              </h2>
            </Col>
            <Col lg ='12'>
              <MasonryImagesGallery/>

            </Col>
          </Row>
        </Container>
      </section>

            {/*=======================gallery section end=====================*/}

             {/*====================== testimonial section start=====================*/}

             <section>
              <Container>
                <Row>
                  <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'} />
                    <h2 className="testimonial__title">What our fans say about us</h2>
                  </Col>
                  <Col lg='12'>
                    <Testimonials/>
                  </Col>
                </Row>
              </Container>
             </section>


             {/*====================== testimonial section end=====================*/}
             <Newsletter/>

   </>
  )
}

export default Home