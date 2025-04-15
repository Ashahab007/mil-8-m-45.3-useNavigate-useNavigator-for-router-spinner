import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import DynamicContainer from "../DynamicContainer/DynamicContainer";
import { NavLink, Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className="flex justify-center gap-4">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/post">Post</NavLink>
        </div>
        <div className="flex justify-center gap-12">
          <aside>
            <SideBar></SideBar>
          </aside>
          <section>
            {/* <DynamicContainer></DynamicContainer> */}
            <Outlet></Outlet>
          </section>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Root;
