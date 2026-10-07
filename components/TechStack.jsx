"use client";

export default function TechStack() {
  return (
    <div id="tech_stack" className="section-testimonial section">
      <div className="tf-container">
        <div className="heading-top d-flex align-items-center justify-content-between">
          {/* <div className="text-body-2 text_white">Testimonials</div> */}
          <div className="text-body-2 text_white">02</div>
        </div>

        <div className="heading-section mb_80">
          <div className="row">
            <div className="col-lg-8 left">
              <div className="text-display-1 text_white mb_4 split-text effect-blur-fade">
                Tech Stacks
              </div>
              {/* <h3 className="text-border split-text split-lines-transform">
                2025 / Photo
              </h3> */}
            </div>
            {/* <div className="col-lg-4 right">
              <p className="font2 desc split-text split-lines-transform">
                For me, photography isn&apos;t just a profession, it&apos;s a
                burning passion. I love transforming fleeting moments into
                beautiful, soulful, and timeless images.
              </p>
            </div> */}
          </div>
        </div>

        <div className="image-grid">
          <div className="image-grid-item">
            <img src="/images/tools/1.png" alt="" />
          </div>
          <div className="image-grid-item">
            <img src="/images/tools/2.png" alt="" />
          </div>
          <div className="image-grid-item">
            <img src="/images/tools/3.png" alt="" />
          </div>
          <div className="image-grid-item">
            <img src="/images/tools/4.png" alt="" />
          </div>
          <div className="image-grid-item">
            <img src="/images/tools/5.png" alt="" />
          </div>
          <div className="image-grid-item">
            <img src="/images/tools/6.png" alt="" />
          </div>
          <div className="image-grid-item">
            <img src="/images/tools/7.png" alt="" />
          </div>
          <div className="image-grid-item">
            <img src="/images/tools/8.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
