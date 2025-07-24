"use client";
import React, { useState } from "react";
import Standardinputfield from "@/app/Admin/_comps/Standardinputfield";
import { Savepost, Deletepost } from "./Savepost";
import { AppContextfn } from "@/app/Context";
import { useRouter } from "next/navigation";

export default function Clientcomp({ edit }) {
  const router = useRouter();
  const { setshowdialog } = AppContextfn();
  const initialstates = {
    link: "",
    heading: "",
    subheading: "",
    imagelink: "",
  };

  const [data, setdata] = useState(edit || initialstates);
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

    const res = await Savepost(data);
    setmessage(res?.message);
    if (res.status == 200) {
      setdata(initialstates);
    }
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
          isRequired={false}
          value={data.link || ""}
          onchange={(e) => handleChange("link", e.target.value)}
          clear={() => handleClearField("link")}
        />
        <Standardinputfield
          titlename="Heading"
          isRequired={false}
          value={data.heading || ""}
          onchange={(e) => handleChange("heading", e.target.value)}
          clear={() => handleClearField("heading")}
        />
        <Standardinputfield
          titlename="Sub Heading"
          isRequired={false}
          value={data.subheading || ""}
          onchange={(e) => handleChange("subheading", e.target.value)}
          clear={() => handleClearField("subheading")}
        />
        <Standardinputfield
          titlename="Image Link"
          isRequired={false}
          value={data.imagelink || ""}
          onchange={(e) => handleChange("imagelink", e.target.value)}
          clear={() => handleClearField("imagelink")}
        />
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
            <>
              <button
                className="flex items-center justify-center gap-2 px-4 py-2  border rounded-md"
                type="button"
                onClick={() => window.history.back()}
                aria-label="Cancel"
                title="Cancel"
              >
                Cancel
              </button>
              <button
                className="flex items-center justify-center gap-2 px-4 py-2  border rounded-md text-white bg-red-600"
                type="button"
                onClick={() =>
                  setshowdialog({
                    show: true,
                    type: false,
                    title: "Are you sure you want to delete this link ?",
                    continue: async () => {
                      const res = await Deletepost(data._id);
                      router.push("/Admin");
                    },
                  })
                }
                aria-label="Cancel"
                title="Cancel"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
}
