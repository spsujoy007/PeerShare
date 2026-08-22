import SideNav from "../components/shared/SideNav";

export default function MainLayout({ children }) {
  return (
    <div className="p-10 h-screen w-full">
      <section className="flex gap-5 h-full">
        <SideNav />
        <div className="w-full h-full">
          {children}
        </div>
      </section>
    </div>
  );
}
