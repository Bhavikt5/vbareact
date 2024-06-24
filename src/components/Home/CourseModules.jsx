import { useEffect } from "react";
import "./CourseModule.css";
import Heading from "./Heading";

const CourseModule = ({ modules }) => {
  useEffect(() => {
    const tabs = document.querySelectorAll(".tab_btn");
    const all_content = document.querySelectorAll(".content");

    console.log(tabs);

    tabs.forEach((tab, index) => {
      tab.addEventListener("mouseenter", () => {
        tabs.forEach((tab) => {
          tab.classList.remove("active");
        });
        tab.classList.add("active");

        all_content.forEach((content) => {
          content.classList.remove("active");
        });

        all_content[index].classList.add("active");
      });
    });
  }, []);

  return (
    <div className="courseModule">
      <Heading title={modules} margin={"4rem 0 0"} />
      <section id="moduleParent">
        <div className="innerRight">
          <div className="tab_box">
            <div className="tab_btn active">
              <img
                src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/icon01.png.webp"
                // style="height: 40px; width: auto"
                style={{ height: "40px", width: "auto" }}
                alt="smp"
              />
              <h3>EYEBROWS</h3>
            </div>
            <div className="tab_btn">
              <img
                src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/icon02.png.webp"
                // style="height: 40px; width: auto"
                style={{ height: "40px", width: "auto" }}
                alt="smp"
              />
              <h3>EYELASHES</h3>
            </div>
            <div className="tab_btn">
              <img
                src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/icon03.png.webp"
                // style="height: 40px; width: auto"
                style={{ height: "40px", width: "auto" }}
                alt="smp"
              />
              <h3>LIPS</h3>
            </div>
            <div className="tab_btn">
              <img
                src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/icon04.png.webp"
                // style="height: 40px; width: auto"
                style={{ height: "40px", width: "auto" }}
                alt="smp"
              />
              <h3>SMP</h3>
            </div>
            <div className="tab_btn">
              <img
                src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/derma.png.webp"
                style={{ height: "40px", width: "auto" }}
                alt="smp"
              />
              <h3>DERMAPLANING</h3>
            </div>
          </div>
          <div className="tab_content">
            <div className="content active">
              <div className="cardStack">
                <div className="card">
                  <h2>Full Brow Course</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    22nd to 26th July 2024
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Delhi
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Khushboo Bhimani</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Khushboo.jpeg-removebg-preview.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
                <div className="card">
                  <h2>Full Brow Course</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    23rd to 27th July 2024
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Mumbai
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Abhishek Chavan</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Abhishek.jpeg-removebg-preview.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>

                <div className="card">
                  <h2>Ombre Powder Brows</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    13th to 16th July 2024
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/canada-flag-icon-1.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Vancouver
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Raman Chohan</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Raman.jpeg-removebg-preview.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="cardStack">
                <div className="card">
                  <h2>Lash lift</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    Coming Soon
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Mumbai
                  </p>
                  <a href="#" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Jinisha Bhanushali</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2024/06/jinisha_png-removebg-preview.png"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
                <div className="card">
                  <h2>Eyelashes</h2>
                  <p className="desc">Coming Soon</p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Mumbai
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Jinisha Bhanushali</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2024/06/jinisha_png-removebg-preview.png"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="cardStack">
                <div className="card">
                  <h2>Lip Blush and Lip Neutralization</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    27th July to 30th July
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Delhi
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Khushboo Bhimani</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Khushboo.jpeg-removebg-preview.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
                <div className="card">
                  <h2>Full Lip Course</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    27th July to 30th July
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Mumbai
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Khushboo Bhimani</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Khushboo.jpeg-removebg-preview.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
                <div className="card">
                  <h2>Full Lip Course</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    28th July to 31st July
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Delhi
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Abhishek Chavan</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Abhishek.jpeg-removebg-preview.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
                <div className="card">
                  <h2>Lip Blush and Lip Neutralization</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    14th to 18th August 2024
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/canada-flag-icon-1.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Vancouver
                  </p>
                  <a href="#" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Raman Chohan</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Raman.jpeg-removebg-preview.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="cardStack">
                <div className="card jayCard">
                  <h2>SMP</h2>
                  <p className="desc">
                    Heres what you will learn:
                    <br />
                    - Alternative hairloss procedures.
                    <br />
                    - The science behind the scalps skin.
                    <br />
                    - How to treat scars.
                    <br />
                    - Density procedures on male and female clients.
                    <br />
                    - Differences between various hair types.
                    <br />
                    <br />
                    - Contra indications.
                    <br />
                    - Client consultation.
                    <br />- Hands on live model training.
                  </p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    Coming Soon
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/india-flag-icon.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Mumbai
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Jay Grewal</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/09/image-15.png"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
              </div>
            </div>
            <div className="content">
              <div className="cardStack">
                <div className="card">
                  <h2>Dermaplaning</h2>
                  <p className="desc"></p>
                  <p className="date">
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/10/healthicons_i-schedule-school-date-time.svg"
                      alt="calender"
                      className="iconImg"
                    />
                    Coming Soon
                  </p>
                  <p>
                    <img
                      src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/12/canada-flag-icon-1.svg"
                      alt="flag"
                      className="iconImg"
                    />
                    Vancouver
                  </p>
                  <a href="" className="spotBtn popmake-1494">
                    Reserve Your Spot
                  </a>
                  <div className="artistDiv">
                    <p className="artistName">Caitlin</p>
                  </div>

                  <img
                    src="https://www.victressbeautyacademy.com/wp-content/uploads/2023/11/Caitlin.jpeg-removebg-preview-e1701176661994.webp"
                    alt="artist"
                    className="artistImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseModule;
