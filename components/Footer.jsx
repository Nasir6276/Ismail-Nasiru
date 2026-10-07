export default function Footer() {
  return (
    <div className="footer tf-spacing-5 pt-0">
      <div className="tf-container">
        <div className="animate__animated animate__fadeInUp">
          <img src="/images/logo/logo-3.png" alt="footer" />
        </div>
        <div className="bot d-flex justify-content-between align-items-center">
          <p className="font2 text_white animate__animated animate__fadeInUp">
            © 2026 Ismail Nasiru. All rights reserved.
          </p>
          <span className="line" />
          <p className="font2 text_white animate__animated animate__fadeInUp">
            2026 Portfolio - Developer
          </p>
          <span className="line" />
          <p className="font2 text_white animate__animated animate__fadeInUp">
            Created by{" "}
            <a href="#" className="link">
              Nasir
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
