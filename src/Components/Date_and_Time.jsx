import React from "react";
import Address_Input from "./Address_Input";
import Time_Schedule_Card from "./Time_Schedule_Card";

const Date_and_Time = () => {
  const cardData = [
    {
      distance: "7.16 miles",
      diagnose:
        "Quest Diagnostics - Agoura Hills Canwoo - Employer Drug Testing Not Offered",
      address: {
        area: "2039 Glenrose Ave",
        street: "Ste 101",
        country: "Altadena CA , 3566",
      },
      phone: "021524155442",
      fax: "0215245242",
    },
    {
      distance: "9.16 miles",
      diagnose:
        "Quest Diagnostics - Agoura Hills Canwoo - Employer Drug Testing Not Offered",
      address: {
        area: "Daroghawala Lahore",
        street: "Ste 8",
        country: "Pakistan",
      },
      phone: "021524155442",
      fax: "0215245242",
    },
  ];

  return (
    <div className="date_and_Time_container">
      <Address_Input
        heading="Now, let's find a location and time that works for you"
        value="Daroghawala, Lahore, Pakistan"
      />

      {cardData.map((data, index) => (
        <Time_Schedule_Card
          key={index} 
          distance={data.distance}
          diagnose={data.diagnose}
          address={data.address}
          phone={data.phone}
          fax={data.fax}
        />
      ))}
    </div>
  );
};

export default Date_and_Time;
