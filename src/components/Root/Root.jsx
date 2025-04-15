import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar";
import DynamicContainer from "../DynamicContainer/DynamicContainer";
import { NavLink, Outlet, useNavigation } from "react-router";

const Root = () => {
  // 2.1 use useNavigation() which is work as react router spinner. It will always set in this Root component where all the tags are present.
  const navigation = useNavigation();
  // 2.2
  const isNavigating = Boolean(navigation.location);
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

            {/* 2.3 apply isNavigating */}
            {isNavigating && <h4>Loading . . . </h4>}
            <Outlet></Outlet>
            {/* 2.4 Explore the useParams() in react router from module 45.7 Explore hooks useNavigate and useNavigator for router spinner */}
            {/* 2.5 Explore the Local Pending Navigation in react router which helps to show spinner in NavLink or Button.*/}
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
