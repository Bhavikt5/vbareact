import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";
import Heading from "./Heading";
import { useState } from "react";
const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null); // State to keep track of open FAQ by ID

  const toggleFaq = (id) => {
    if (openFaq === id) {
      setOpenFaq(null); // Close if same FAQ is clicked again
    } else {
      setOpenFaq(id); // Open the clicked FAQ
    }
  };
  const faqList = [
    {
      id: 1,
      subject: "What if we can’t afford the full payment for the course?",
      answer:
        "First an initial deposit will be paid and then the remaining amount must be paid 5 days prior to the beginning of the class",
    },
    {
      id: 2,
      subject: "What if we can’t afford the full payment for the course?",
      answer:
        "First an initial deposit will be paid and then the remaining amount must be paid 5 days prior to the beginning of the class",
    },
    {
      id: 3,
      subject: "What if we can’t afford the full payment for the course?",
      answer:
        "First an initial deposit will be paid and then the remaining amount must be paid 5 days prior to the beginning of the class",
    },
    {
      id: 4,
      subject: "What if we can’t afford the full payment for the course?",
      answer:
        "First an initial deposit will be paid and then the remaining amount must be paid 5 days prior to the beginning of the class",
    },
    {
      id: 5,
      subject: "What if we can’t afford the full payment for the course?",
      answer:
        "First an initial deposit will be paid and then the remaining amount must be paid 5 days prior to the beginning of the class",
    },
    {
      id: 6,
      subject: "What if we can’t afford the full payment for the course?",
      answer:
        "First an initial deposit will be paid and then the remaining amount must be paid 5 days prior to the beginning of the class",
    },
  ];
  return (
    <div>
      <Heading
        title={"You’ve got questions, we’ve got answers"}
        margin={"3rem 0"}
      />
      <div className="faqDiv">
        {faqList &&
          faqList.map((i) => (
            <div key={i.id} className="singlefaq">
              <div className="subject" onClick={() => toggleFaq(i.id)}>
                <h6>{i.subject}</h6>
                <FaChevronDown />
              </div>
              <p className={openFaq === i.id ? "active" : ""}>{i.answer}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Faqs;
