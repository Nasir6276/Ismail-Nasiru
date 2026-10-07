"use client";

import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function ContactSection() {
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div id="contact" className="section-contact tf-spacing-4">
      <div className="tf-container">
        <div className="heading-top d-flex align-items-center justify-content-between">
          <div className="text-body-2 text_white">03</div>
        </div>
        <div className="box-contact">
          <div className="content-inner">
            <form
              className="form-contact animate__animated animate__fadeInLeft"
              onSubmit={handleSubmit}
            >
              <h4 className="text_secondary-color title">
                Need a developer for your next project?
              </h4>
              <div className="wrap-input d-grid gap_24 mb_24">
                <fieldset>
                  <label
                    className="text-body-2 text_secondary-color"
                    htmlFor="name"
                  >
                    Your name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label
                    className="text-body-2 text_secondary-color"
                    htmlFor="email"
                  >
                    Your email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </fieldset>
                <fieldset>
                  <label
                    className="text-body-2 text_secondary-color"
                    htmlFor="message"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message"
                    required
                  />
                </fieldset>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="tf-btn btn-bg-primary btn-hover-animation-fill"
              >
                <span>
                  <i className="icon-ArrowRight arr-1" />
                  <span
                    className="btn-text"
                    style={{ color: "#fff !important" }}
                  >
                    {status === "loading" ? "Sending..." : "Send"}
                  </span>
                  <FaArrowRight className="arr-2" color="#fff" />
                </span>
                <span className="bg-effect" />
              </button>

              {status === "success" && (
                <p className="text-body-2" style={{ color: "#8d0004" }}>
                  Message sent! I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="text-body-2" style={{ color: "#ff4444" }}>
                  Something went wrong. Please try again or email me directly.
                </p>
              )}
            </form>
            <div className="content">
              <div className="heading">
                <div className="title">
                  <div className="text-display-1 text_white mb_3 split-text effect-blur-fade">
                    Let&apos;s talk
                  </div>
                  <h3 className="text-border split-text split-lines-transform">
                    © Ismail Nasiru
                  </h3>
                </div>
                <p className="description text_white font2 split-text split-lines-transform">
                  Have a project in mind? I'd love to hear about it — whether
                  it's a new web app, a mobile build, or something you're still
                  figuring out the shape of.
                </p>
              </div>
              <div className="phone">
                <div className="d-flex align-items-center gap_4 text_white">
                  <i className="icon-PhoneCall" />
                  <span className="text-title">Or call me</span>
                </div>
                <div className="number text_white split-text split-lines-rotation-x">
                  (+234) 810 103 7375
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
