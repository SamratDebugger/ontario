export default function Newsletter() {
  return (
    <div className="flex flex-col md:flex-row gap-10 justify-between items-center max-w-360 mx-auto py-10 px-5">
      <div className="text-center">
        <h3 className=" text-xl sm:text-2xl font-bold">
          Subscribe to our Newsletter
        </h3>
        <p>We’ll send you nice letter once per week. No spam.</p>
      </div>
      <div className="join rounded-full bg-base-100 p-2 ">
        <div>
          <label className="input rounded-full  join-item border-none">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" placeholder="mail@site.com" required />
          </label>
        </div>
        <button className="btn bg-main text-white rounded-full join-item">
          Subscribe
        </button>
      </div>
    </div>
  );
}
