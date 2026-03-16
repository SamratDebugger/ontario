import TechCards from "./TechCards";
import TechSidebar from "./TechSidebar";
import techBlogs from "../../techBlogs.json";

export default function Technology() {
  return (
    <section className="max-w-360 mx-auto p-5  ">
      <div className="grid  sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="sm:col-span-2 grid sm:grid-cols-2 gap-5">
          {techBlogs.map((techBlog) => (
            <TechCards key={techBlog.id} techBlog={techBlog} />
          ))}
        </div>
        <div>
          <TechSidebar />
        </div>
      </div>
    </section>
  );
}
