import { portfolioItems } from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <div id="portfolio" className="section-portfolio tf-spacing-6 section">
      <div className="tf-container">
        <div className="heading-top d-flex align-items-center justify-content-between">
          {/* <div className="text-body-2 text_white">My Projects</div> */}
          <div className="text-body-2 text_white">01</div>
        </div>
        <div className="heading-section mb_80">
          <div className="row">
            <div className="col-lg-8 left">
              <div className="text-display-1 text_white mb_4 split-text effect-blur-fade">
                Projects
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
        <div className="tf-grid-layout md-col-2 gap_8">
          {portfolioItems.map((item, i) => (
            <div className="portfolio-item" key={i}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="img-style scale-img"
              >
                <img
                  loading="lazy"
                  decoding="async"
                  width={716}
                  height={820}
                  src={item.image}
                  alt="portfolio"
                />
              </a>
              <div className="content">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h4 mb_7 link text_white"
                >
                  {item.title}
                </a>
                <ul className="list text-uppercase">
                  <li className="text-caption-1 text_primary-color">
                    {item.tool}
                  </li>
                  <li className="text-caption-1">{item.year}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
