// const COUNTERS = [
//   { count: 99, duration: 500, suffix: "%", title: "Customer satisfaction", desc: "Almost all customers are pleased with the final outcome." },
//   { count: 2000, duration: 500, suffix: "+", title: "Photo is taken", desc: "In my career, I've taken over 2,000 photos." },
//   { count: 15, duration: 500, suffix: "+", title: "Years of expertise", desc: "Photography isn't just a profession, it's a burning passion" },
// ];

import { FaArrowRight } from "react-icons/fa6";

export default function AboutSection() {
  return (
    <div
      id="about"
      className="section-about section"
      style={{ paddingTop: "60px", paddingBottom: "20px" }}
    >
      <div className="tf-container">
        <div className="heading-section d-flex justify-content-between align-items-center flex-wrap gap_24">
          <div>
            <h1 className="text_white mb_8 split-text effect-blur-fade">
              Ismail Nasiru
            </h1>
            <p className="text-body-color font2 split-text split-lines-transform">
              Hi there, I&apos;m a Full Stack Developer with 4+ years of
              experience.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="tf-btn style-border btn-hover-animation-fill"
          >
            <span>
              <i className="icon-ArrowRight arr-1" />
              <span className="btn-text">Download Resume</span>
              <FaArrowRight className="arr-2" />
            </span>
            <span className="bg-effect" />
          </a>
        </div>
      </div>
    </div>
  );
}
