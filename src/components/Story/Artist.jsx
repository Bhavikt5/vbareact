import "./Artist.css";

const Artist = () => {
  const artistList = [
    {
      id: 1,
      nameimg: "ramanname.webp",
      image: "ramanstory.webp",
      position: "Director & Head Educator, Canada, India & Dubai",
      content:
        "Former commercial banker turned businesswoman, always on the lookout for new endeavors to launch. Visionary and the head educator of Victress Beauty. She sets high standards for the PMU education she creates, ensuring excellence in the beauty industry.",
      specialist:
        "Microblading, Ombré Powder Brows, Microshading, Brow Correction, Lip Correction and Lip Blush",
      reverse: "",
    },
    {
      id: 2,
      nameimg: "nikhilname.webp",
      image: "nikhilstory.webp",
      position: "Director & Head Educator, Canada, India & Dubai",
      content:
        "Former commercial banker turned businesswoman, always on the lookout for new endeavors to launch. Visionary and the head educator of Victress Beauty. She sets high standards for the PMU education she creates, ensuring excellence in the beauty industry.",
      specialist:
        "Microblading, Ombré Powder Brows, Microshading, Brow Correction, Lip Correction and Lip Blush",
      reverse: "reverse",
    },
    {
      id: 3,
      nameimg: "abhishekname.webp",
      image: "abhishekstory.webp",
      position: "Director & Head Educator, Canada, India & Dubai",
      content:
        "Former commercial banker turned businesswoman, always on the lookout for new endeavors to launch. Visionary and the head educator of Victress Beauty. She sets high standards for the PMU education she creates, ensuring excellence in the beauty industry.",
      specialist:
        "Microblading, Ombré Powder Brows, Microshading, Brow Correction, Lip Correction and Lip Blush",
      reverse: "",
    },
    {
      id: 4,
      nameimg: "khushbooname.webp",
      image: "khushboostory.webp",
      position: "Director & Head Educator, Canada, India & Dubai",
      content:
        "Former commercial banker turned businesswoman, always on the lookout for new endeavors to launch. Visionary and the head educator of Victress Beauty. She sets high standards for the PMU education she creates, ensuring excellence in the beauty industry.",
      specialist:
        "Microblading, Ombré Powder Brows, Microshading, Brow Correction, Lip Correction and Lip Blush",
      reverse: "reverse",
    },
    {
      id: 5,
      nameimg: "minalname.webp",
      image: "minalstory.webp",
      position: "Director & Head Educator, Canada, India & Dubai",
      content:
        "Former commercial banker turned businesswoman, always on the lookout for new endeavors to launch. Visionary and the head educator of Victress Beauty. She sets high standards for the PMU education she creates, ensuring excellence in the beauty industry.",
      specialist:
        "Microblading, Ombré Powder Brows, Microshading, Brow Correction, Lip Correction and Lip Blush",
      reverse: "",
    },
  ];
  return (
    <div className="artistMain">
      {artistList &&
        artistList.map((i) => {
          return (
            <div
              key={i.id}
              className={
                i.reverse === "reverse" ? "artistCard reverse" : "artistCard"
              }
            >
              <div className="left">
                <img src={i.nameimg} alt="name image" />
                <h5>{i.position}</h5>
                <p>{i.content}</p>
                <p className="specialist">{i.specialist}</p>
              </div>
              <div className="right">
                <img src={i.image} alt="image" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Artist;
