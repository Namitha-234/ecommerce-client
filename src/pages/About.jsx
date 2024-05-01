import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Shopify"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to Shopify, where convenience meets quality. Our mission is
            simple: to provide you with a seamless online shopping experience,
            offering a curated selection of premium products that cater to your
            diverse needs and tastes. From fashion to electronics, home
            essentials to gifts, we've got you covered. Our user-friendly
            platform ensures hassle-free browsing, secure transactions, and
            prompt delivery to your doorstep. But Shopify is
            more than just a marketplace; it's a community of like-minded
            individuals sharing their passions and discoveries. Join us in
            exploring endless possibilities and elevating your shopping
            experience. Welcome to the future of online retail.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
