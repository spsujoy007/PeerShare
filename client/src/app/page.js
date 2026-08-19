
import HomePage from "./components/Home/Home";
import Navbar from "./components/shared/Navbar";
import SideNav from "./components/shared/SideNav";

export default function Home() {
  return (
    <div className="p-10 h-screen">
      <section className="flex gap-5 md:h-[95%]">
        <SideNav></SideNav>
        <HomePage></HomePage>
      </section>
    </div>
  );
}
