import { useState, useEffect } from "react";
import homeData from "../data/homeData.jsx";
import Tippy from '@tippyjs/react';
import Swal from 'sweetalert2';

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const titles = homeData.typingTexts;
    const currentTitle = titles[currentIndex];

    const typeSpeed = isDeleting ? 100 : 150;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < currentTitle.length) {
          setCurrentText(currentTitle.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentIndex, isDeleting]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-white pt-20 overflow-hidden"
      data-aos-duration="1000"
      data-aos="fade-down"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12">
          
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900"
                data-aos-delay="600"
                data-aos="fade-down"
              >
                {homeData.title}
              </h1>
              <h2
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 flex items-center"
                data-aos-delay="600"
                data-aos="fade-right"
              >
                <span className="typing-text">
                  {currentText}
                  <span
                    className={`cursor ${
                      showCursor ? "opacity-100" : "opacity-0"
                    } transition-all duration-200`}
                  >
                    |
                  </span>
                </span>
              </h2>
            </div>

            <p
              className="text-lg text-gray-700 leading-relaxed max-w-lg"
              data-aos-delay="600"
              data-aos="fade-left"
            >
              {homeData.description}
            </p>

            {/* Social Media */}
            <div
              className="flex items-center space-x-4 "
              data-aos-delay="600"
              data-aos="fade-down"
            >
              <span className="text-gray-800 font-medium">
                Follow me on:
              </span>
              <div className="flex space-x-3">
                {homeData.socialMedia.map((social, index) => (
                  <Tippy content={social.platform} key={index} placement="top">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-black text-white rounded-full flex items-center shadow-lg justify-center hover:bg-gray-700 transition-all duration-300 hover:-translate-y-1"
                      aria-label={`Visit ${social.platform}`}
                    >
                      <i className={`${social.icon} text-lg`}></i>
                    </a>
                  </Tippy>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos-delay="600"
              data-aos="fade-down"
            >
              {homeData.buttons.map((btn, index) => (
                <Tippy content={btn.label} key={index} placement="top">
                  {btn.href && btn.href !== "#" ? (
                    <a
                      href={btn.href}
                      className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                        btn.type === "primary"
                          ? "bg-black text-white hover:bg-gray-800"
                          : "border-2 border-black text-black hover:bg-black hover:text-white"
                      }`}
                      target={btn.href.startsWith("http") ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                    >
                      <i
                        className={`bx ${
                          btn.type === "primary" ? "bx-download" : "bx-envelope"
                        } mr-2`}
                      />
                      {btn.label}
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        Swal.fire({
                          title: "Not Available Yet 😅",
                          text: "This feature or file is not ready yet. Please check back later!",
                          icon: "info",
                          confirmButtonColor: "#1F2937",
                          confirmButtonText: "Alright",
                        })
                      }
                      className={`inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 ${
                        btn.type === "primary"
                          ? "bg-black text-white hover:bg-gray-800"
                          : "border-2 border-black text-black hover:bg-black hover:text-white"
                      }`}
                      aria-label={btn.label}
                    >
                      <i
                        className={`bx ${
                          btn.type === "primary" ? "bx-download" : "bx-envelope"
                        } mr-2`}
                      />
                      {btn.label}
                    </button>
                  )}
                </Tippy>
              ))}
            </div>

            {/* Quick Stats */}
            <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-gray-900">
              <i className="bx bx-bar-chart-alt text-base" />
              Quick Stats:
            </h4>
            <div
            className="grid grid-cols-2 sm:grid-cols-4 text-sm text-gray-800 gap-6 mt-2"
            data-aos-delay="600"
            data-aos="fade-up"
            data-aos-offset="100"
            >

              {homeData.stats.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-black text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg shadow-lg p-2 rounded-3xl"
                >
                  <div className="text-base">
                    <i className={item.icon}></i>
                  </div>
                  <div>
                    <p className="font-bold">{item.value}</p>
                    <p className="text-xs">{item.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Profile Image */}
          <div
            className="relative flex justify-center items-center"
            data-aos-delay="600"
            data-aos="fade-up"
          >
            <div className="relative z-10">
             <img
             src={homeData.img}
             alt="Profile"
             className="max-w-full h-auto object-contain"
             />

            </div>

            {homeData.floatingIcons.map((tech, index) => {
              const positions = [
                "top-0 left-16 sm:left-20",
                "top-0 right-0",
                "bottom-0 left-8 sm:left-10",
                "bottom-8 sm:bottom-10 right-10 sm:right-12",
              ];
              return (
                <Tippy
                  key={index}
                  content={tech.label}
                  placement="top"
                  animation="shift-away"
                  delay={[0, 0]}
                >
                  <div
                    className={`absolute ${
                      positions[index % positions.length]
                    } w-12 h-12 sm:w-16 sm:h-16 bg-black text-white rounded-full drop-shadow-2xl shadow-lg flex items-center justify-center hover:scale-110 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float cursor-pointer`}
                    style={{
                      animationDelay: `${index * 0.5}s`,
                    }}
                  >
                    <i className={`${tech.icon} text-xl sm:text-2xl`}></i>
                  </div>
                </Tippy>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes float {
            0%,100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          .shadow-3xl {
            box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
          }
          .typing-text {
            display: inline-block;
          }
          .cursor {
            font-weight: 600;
            color: #1f2937;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Home;
