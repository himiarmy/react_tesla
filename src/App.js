import React from "react";
import Header from "./components/Header/Header";
import ProductsList from "./components/ProductsList/ProductsList";

const App = () => {
  let logo = "https://pngimg.com/uploads/tesla_logo/tesla_logo_PNG21.png";
  let cars = [
    {
      model: "Model S",
      image:
        "https://www.ixbt.com/img/n1/news/2021/5/3/maxresdefault_0_large.png",
      id: 1,
    },
    {
      model: "Model Y",
      image:
        "https://www.ixbt.com/img/n1/news/2021/6/4/fixed1480x800_49e59634c867add3fac8d7b9a23c2989_large.png",
      id: 2,
    },
    {
      model: "Model X",
      image: "https://electrodrivemoscow.ru/img/b3s1.jpg",
      id: 3,
    },
    {
      model: "Model 3",
      image:
        "https://www.ixbt.com/img/n1/news/2021/0/6/lhd-model-3-social_large.png",
      id: 4,
    },
  ];
  function getInfo(item) {
    console.log(item);
  }
  return (
    <div>
      <Header logo={logo} cars={cars} getInfo={getInfo}/>
      <ProductsList cars={cars} getInfo={getInfo}/>
    </div>
  );
};

export default App;
