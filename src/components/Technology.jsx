import TechCards from "./TechCards";
import TechSidebar from "./TechSidebar";

export default function Technology() {
  return (
    <section className="max-w-360 mx-auto p-5  ">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 grid grid-cols-2 gap-5">
          <TechCards />
          <TechCards />
          <TechCards />
          <TechCards />
        </div>
        <div>
          <TechSidebar />
        </div>
      </div>
    </section>
  );
}
