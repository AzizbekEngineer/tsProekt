import React from "react";
import Job from "./components/job/Job";
import Service from "./components/service/Service";
import News from "./components/news";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Category from "./components/category/Category";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Category />
      <Service />
      <Job />
      <News />
      <Footer />
    </div>
  );
};

export default App;
