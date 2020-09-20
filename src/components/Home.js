import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/ServiceMktg/3000x1200_Hero-Tall_p._CB405402617_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Sky Sports fc Golden State Warriors Curry Jersey Colour Blue Size - S"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31nJYElF%2BqL.jpg"
          />
         <Product
            id="12321341"
            title="The Mamba Mentality"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51TngkrkmsL._SX414_BO1,204,203,200_.jpg"
          />
          <Product
            id="12321341"
            title="NBA 2K20 (PS4)"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81hsLCxN23L._SX679_.jpg"
          />
          <Product
            id="12321341"
            title="HUSTLE BUSTLE Kyrie Basketball Hoodie for Men and Boys Printed Basketball Tshirt and Basketball Hoodie for Men"
            price={11.96}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61KVBVJcHhL._UY741_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
