export default function TechCards({ techBlog }) {
  return (
    <div className="card rounded-none  ">
      <figure className="items-start justify-start rounded-3xl">
        <div className="flex absolute gap-3 p-5 ">
          {techBlog.tags.map((tag, i) => (
            <div key={i} className="badge uppercase badge-sm bg-base-100/70">
              {tag}
            </div>
          ))}
        </div>
        <img className="w-full" src={techBlog.image} alt={techBlog.title} />
      </figure>
      <div className="card-body px-0 ">
        <h2 className="card-title">{techBlog.title}</h2>
        <p>{techBlog.description}</p>
      </div>
    </div>
  );
}
