// import React from 'react';

const Cards = () => {
  const arr = [
    {
      name: "Visual Creations",
      image: "images/vcreations.png", // Assuming the image path is within the "images" folder
      link: "https://visualcreations.netlify.app/",
    },
    {
      name: "Routemasters Usa",
      image: "/images/rmaster.png",
      link: "https://route-masterusa.netlify.app/",
    },
    {
      name: "OneStopShoppe",
      image: "/images/ostp.png",
      link: "https://onestopshoppe.netlify.app/",
    },
    {
        name: "React Planner",
        image: "/images/rplanner.png",
        link: "none",
      },
  ];

  return (
    <div className="grid grid-cols-3 gap-4 mt-16 ml-10 mr-10">
      {arr.map((card, index) => (
        <div
          key={index}
          className="bg-gray-300 rounded-md overflow-hidden hover:scale-110 transition duration-300 ease-in-out" // Added hover effect classes
        >
          <img src={card.image} alt={card.name} className="w-full h-40 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{card.name}</h3>
            <h3>{card.link}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;