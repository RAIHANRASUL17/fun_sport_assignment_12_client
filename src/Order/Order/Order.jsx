import React, { useState } from "react";
// Helmet
import { Helmet } from "react-helmet-async";
import Cover from "../../Pages/Shared/Cover/Cover";
import imgOrder from "../../assets/shop/banner2.jpg";
// tabs
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../hooks/useMenu";
import FoodCard from "../../Components/FoodCard/FoodCard";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
// TAB INDEXING
const categories = [ "salads", "pizzas", "soups", "desserts", "drinks" ];
 const {category} = useParams();
  console.log('category from or',category)
  const initialIndex = categories.indexOf(category);
  

  // const [tabIndex, setTabIndex] = useState(0);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
 console.log(menu)

  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const offers = menu.filter((item) => item.category === "offered");
  
  return (
    <>
      <Helmet>
        <title>Bistro | Order</title>
      </Helmet>
      <div>
        <Cover
          imgBack={imgOrder}
          title={"OUR SHOP"}
          subTitle={"Would you like to try a dish?"}
        ></Cover>
      </div>
      {/* TAB SECTION */}
      <div className="my-12 justify-center">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salads}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizzas}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soups}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={desserts}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Order;
