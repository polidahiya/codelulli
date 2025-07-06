"use client";
import React, { useState } from "react";
import Standardinputfield from "../_comps/Standardinputfield";
import StandardTextAreaField from "../_comps/Standardtextfield";
import Savelink from "./Savelink";

export default function Clientcomp() {
  const initialstates = {
    link: "",
    seotitle: "",
    seodescription: "",
    seokeywords: "",
    body: "",
  };

  const [data, setdata] = useState(initialstates);
  const [loading, setloading] = useState(false);
  const [message, setmessage] = useState("");

  const handleClearField = (field) =>
    setdata((prev) => ({
      ...prev,
      [field]: "",
    }));

  const handleChange = (field, value) =>
    setdata((prev) => ({
      ...prev,
      [field]: value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);

    const res = await Savelink(data);
    if (res.status == 200) setdata(initialstates);
    setmessage(res?.message);
    setloading(false);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-2 pb-20 md:p-6 bg-white space-y-6"
      >
        <Standardinputfield
          titlename="Link"
          isRequired
          value={data.link || ""}
          onchange={(e) => handleChange("link", e.target.value)}
          clear={() => handleClearField("link")}
        />
        <Standardinputfield
          titlename="Seo title"
          isRequired
          value={data.seotitle || ""}
          onchange={(e) => handleChange("seotitle", e.target.value)}
          clear={() => handleClearField("seotitle")}
        />
        <Standardinputfield
          titlename="Seo description"
          isRequired
          value={data.seodescription || ""}
          onchange={(e) => handleChange("seodescription", e.target.value)}
          clear={() => handleClearField("seodescription")}
        />
        <Standardinputfield
          titlename="Seo keywords (Seperate keywords with ,)"
          isRequired
          value={data.seokeywords || ""}
          onchange={(e) => handleChange("seokeywords", e.target.value)}
          clear={() => handleClearField("seokeywords")}
        />
        <div className="flex flex-col md:flex-row  gap-5 w-full">
          <div className="flex-1 flex flex-col items-stretch ">
            <p className="block text-sm  font-medium text-gray-600">Preview</p>
            <div
              dangerouslySetInnerHTML={{ __html: data.body || "" }}
              className="text border rounded-md mt-1 p-2 h-full"
            ></div>
          </div>
          <div className="flex-1">
            <StandardTextAreaField
              titlename="Body"
              isRequired
              value={data.body || ""}
              onchange={(e) => handleChange("body", e.target.value)}
              clear={() => handleClearField("body")}
            />
          </div>
        </div>
        <p>{message}</p>
        <div className="flex items-center justify-center gap-5">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 px-4 py-2  bg-blue-600 text-white rounded-md hover:bg-blue-700"
            aria-label="Submit"
            title="Submit"
          >
            {loading && (
              <span className="block h-5 aspect-square border-t-2 border-b-2 border-white rounded-full animate-spin"></span>
            )}
            {data._id ? "Update" : "Add"}
          </button>
          {data._id && (
            <button
              className="flex items-center justify-center gap-2 px-4 py-2  border rounded-md"
              type="button"
              onClick={() => {
                resetState();
                setdeletedimages([]);
                setshoweditform(false);
              }}
              aria-label="Cancel"
              title="Cancel"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
