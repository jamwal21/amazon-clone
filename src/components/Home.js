import React from "react";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel className="home__image" infiniteLoop useKeyboardArrows autoPlay showIndicators={false} showStatus={false} showThumbs={false} interval={2000} >

        <img
          // className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/3000x1200_Hero-Tall_p._CB405402617_.jpg"
          alt=""
        />
        <img
          // className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/hero_sep/Echo_dot_Testimonial_2x._CB406079151_.jpg"
          alt=""
        />
        <img
          // className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/september/GWbanners/DesktopHero_3000x1200._CB403958842_.jpg"
          alt=""
        />
        <img
          // className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/prime/primedeals/PSW_PC_2x_English_Illustration._CB422946464_.jpg"
          alt=""
        />
        </Carousel>

        <div className="home__row">
          <Product
            id="1"
            title="Sky Sports fc Golden State Warriors Curry Jersey Colour Blue Size - S"
            price={111.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31nJYElF%2BqL.jpg"
          />
         <Product
            id="2"
            title="The Mamba Mentality : Kobe Bryant!!"
            price={50.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51TngkrkmsL._SX414_BO1,204,203,200_.jpg"
          />
          <Product
            id="3"
            title="Pandemic P-Jersey plus shooting on SALE"
            price={0}
            rating={1}
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfW-lkpQWCCFoIN1znZqvdQBdl5jwuEUsrqQ&usqp=CAU"
          />
          <Product
            id="4"
            title="The incredible story of Kyrie Irving – one of basketball’s greatest players!"
            price={30}
            rating={5}
            image="https://m.media-amazon.com/images/I/51MJ0OCl4-L.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="5"
            title="The Banyan Tee The Vampire Diaries Hoodie Cotton Hoodies"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41Zr%2BewWmHL._UX679_.jpg"
          />
          <Product
            id="6"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={2}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="7"
            title="Akelepan Ki Inteha (Hindi) Paperback – 1 January 2018"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51XNNgREScL._SX346_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="8"
            title="The Sun Underground & All The Colors In Between Kindle Edition "
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/51jWLB9NmYL.jpg"
          />
          <Product
            id="9"
            title="NBA 2K20 (PS4) : Anthony Davis-Rise of star "
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81hsLCxN23L._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
