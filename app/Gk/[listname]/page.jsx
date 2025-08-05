import React from "react";
import Clientcomp from "./Clientcomp";

function page() {
  const data = {
    "Andhra Pradesh": "Amaravati",
    "Arunachal Pradesh": "Itanagar",
    Assam: "Dispur",
    Bihar: "Patna",
    Chhattisgarh: "Raipur",
    Goa: "Panaji",
    Gujarat: "Gandhinagar",
    Haryana: "Chandigarh",
    "Himachal Pradesh": "Shimla",
    Jharkhand: "Ranchi",
    Karnataka: "Bengaluru",
    Kerala: "Thiruvananthapuram",
    "Madhya Pradesh": "Bhopal",
    Maharashtra: "Mumbai",
    Manipur: "Imphal",
    Meghalaya: "Shillong",
    Mizoram: "Aizawl",
    Nagaland: "Kohima",
    Odisha: "Bhubaneswar",
    Punjab: "Chandigarh",
    Rajasthan: "Jaipur",
    Sikkim: "Gangtok",
    "Tamil Nadu": "Chennai",
    Telangana: "Hyderabad",
    Tripura: "Agartala",
    "Uttar Pradesh": "Lucknow",
    Uttarakhand: "Dehradun",
    "West Bengal": "Kolkata",
  };

  return (
    <div>
      <Clientcomp
        data={data}
        qline={"What is the capital of ____?"}
        title="Capital of states of India"
      />
    </div>
  );
}

export default page;
