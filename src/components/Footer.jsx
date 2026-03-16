import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-base-300">
      <div className="footer sm:footer-horizontal  text-base-content p-10 max-w-360 mx-auto justify-between">
        <aside>
          <img src="/assets/images/ontario-logo.svg" alt="logo" />
          <p className="max-w-110">
            Welcome to the ONTARIO Blog WordPress Theme – your space for fresh
            ideas, insightful stories, and practical tips. Whether you’re
            looking to learn something new, spark inspiration, or simply enjoy
            thoughtful reading, you’ve come to the right place.
          </p>
          <nav>
            <h6 className="footer-title">Social</h6>
            <div className="grid grid-flow-col gap-4">
              <a>
                <FaFacebook />
              </a>
              <a>
                <FaXTwitter />
              </a>
              <a>
                <FaInstagram />
              </a>
              <a>
                <FaLinkedinIn />
              </a>
              <a>
                <FaYoutube />
              </a>
            </div>
          </nav>
        </aside>
        <nav>
          <h6 className="footer-title">Categories</h6>
          <a className="link link-hover">Digital</a>
          <a className="link link-hover">Business</a>
          <a className="link link-hover">Startups</a>
          <a className="link link-hover">Trends</a>
          <a className="link link-hover">Crypto</a>
          <a className="link link-hover">News</a>
        </nav>
        <nav>
          <h6 className="footer-title">How to find us</h6>
          <a className="link link-hover">
            27 Division St, New York, NY 10002, United States
          </a>
          <a className="link link-hover">hello@mysite.com</a>
          <a className="link link-hover">8 800 2345 234</a>
        </nav>
      </div>
    </footer>
  );
}
