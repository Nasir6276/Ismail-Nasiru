export default function BannerImageText() {
  return (
    <div className="banner-image-text animate__animated animate__fadeIn">
      <div className="tf-container">
        <div className="content-image">
          <img
            loading="lazy"
            width={1440}
            height={518}
            src="/images/section/Union.jpg"
            alt="Image"
          />
        </div>
        <div className="content-text">
          <div className="d-flex justify-content-end">
            <div className="box-author tf-animate-4" data-delay="0.3">
              <div className="author_avatar">
                <img
                  loading="lazy"
                  width={64}
                  height={64}
                  src="/images/avatar/avatar-8.png"
                  alt="Author"
                />
              </div>
              <div className="author_info">
                <a href="#" className="infor__name h6 link">
                  Kathryn Murphy
                </a>
                <p className="infor__duty">Photographer</p>
              </div>
            </div>
          </div>
          <div className="box-text scroll-effect">
            <h2 className="text-change-color reveal-type">
              <span className="text-lg-end d-lg-block">
                With years of hands-on experience, careful{" "}
                <br className="d-none d-xxl-block" />
              </span>
              attention to detail in every build, and the ability to{" "}
              <br className="d-none d-xxl-block" />
              solve problems, I believe I can offer you a seamless{" "}
              <br className="d-none d-xxl-block" />
              development experience and lasting works of code.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
