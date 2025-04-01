import React from "react";
import Codewithoutput from "@/app/_globalcomps/Codewithoutput";

function Page() {
  return (
    <div className="text">
      <h1>Hover Effect and Animations</h1>
      <p>Let{"'"}s create something interactive.</p>

      <h2>Hover Effect</h2>
      <p>
        In HTML and CSS, <code>:hover</code> is a pseudo-class used to apply
        styles to an element when the user places their cursor over it. This is
        commonly used for interactive elements like buttons, links, and images.
      </p>

      <h3>Examples:</h3>
      <div className="flex justify-center gap-2 flex-wrap text-xs text-white cursor-pointer">
        <div className="w-32 aspect-[2/1] bg-red-500 rounded-none hover:rounded-[50px] duration-300 flex items-center justify-center text-center">
          border-radius 0 to 50px
        </div>
        <div className="w-32 aspect-[2/1] bg-red-500 hover:bg-green-500 duration-300 flex items-center justify-center text-center">
          background-color red to green
        </div>
        <div className="w-32 aspect-[2/1] bg-red-500 hover:font-black duration-300 flex items-center justify-center text-center">
          font-weight 400 to 900
        </div>
        <div className="group w-32 aspect-[2/1] bg-red-500 hover:rotate-180 duration-300 flex items-center justify-center text-center">
          <div className="group-hover:-rotate-180 duration-300">
            transform rotate 0 to 180 degrees
          </div>
        </div>
        <div className="w-32 aspect-[2/1] bg-red-500 hover:opacity-0 duration-300 flex items-center justify-center text-center">
          opacity 1 to 0
        </div>
        <div className="w-32 aspect-[2/1] bg-red-500 text-white hover:text-red-500 hover:bg-transparent hover:shadow-lg dark:shadow-white duration-300 flex items-center justify-center text-center">
          shadow, text and background changes
        </div>
      </div>

      <h3>How to do all these?</h3>
      <br />
      <li>Let{"'"}s create a box first:</li>
      <Codewithoutput
        language="html"
        code={`<style>
    .box{
      width: 100px;
      height: 100px;
      background-color: red;
      color: white;
    }
</style>
<div class="box"></div>`}
      >
        <div className="flex items-center justify-center flex-1">
          <div className="text-white bg-red-500 w-24 aspect-square"></div>
        </div>
      </Codewithoutput>

      <br />
      <li>Now add a pseudo-class:</li>
      <Codewithoutput
        language="html"
        code={`<style>
    .box{
      width: 100px;
      height: 100px;
      background-color: red;
      color: white;
    }
    .box:hover {
      border-radius: 50px;
    }
</style>
<div class="box"></div>`}
      >
        <div className="flex items-center justify-center flex-1">
          <div className="text-white bg-red-500 w-24 aspect-square hover:rounded-[50px]"></div>
        </div>
      </Codewithoutput>

      <br />
      <li>
        Add any property you want to change in the <code>.box:hover</code>{" "}
        pseudo-class to modify the element when hovered:
      </li>
      <Codewithoutput
        language="html"
        code={`<style>
    .box{
      width: 100px;
      height: 100px;
      background-color: red;
      color: white;
    }
    .box:hover {
      border-radius: 50px;
      background-color: pink;
    }
</style>
<div class="box"></div>`}
      >
        <div className="flex items-center justify-center flex-1">
          <div className="text-white bg-red-500 w-24 aspect-square hover:rounded-[50px] hover:bg-pink-500"></div>
        </div>
      </Codewithoutput>

      <br />
      <li>
        To make the hover effect smoother, you can add the{" "}
        <code>transition</code> property:
      </li>
      <Codewithoutput
        language="html"
        code={`<style>
    .box{
      width: 100px;
      height: 100px;
      background-color: red;
      color: white;
      transition: 3s;
    }
    .box:hover {
      width: 200px;
    }
</style>
<div class="box"></div>`}
      >
        <div className="flex items-center justify-center flex-1">
          <div className="text-white bg-red-500 w-24 h-24 hover:w-72 duration-[3s]"></div>
        </div>
      </Codewithoutput>
      <br />
      <li>
        Add delay in the hover effect by using the <code>transition-delay</code>{" "}
        property:
      </li>
      <Codewithoutput
        language="html"
        code={`<style>
    .box{
      width: 100px;
      height: 100px;
      background-color: red;
      color: white;
      transition: 2s;
      transition-delay: 1s;
    }
    .box:hover {
      width: 200px;
    }
</style>
<div class="box"></div>`}
      >
        <div className="flex items-center justify-center flex-1">
          <div className="text-white bg-red-500 w-24 h-24 hover:w-72 duration-[2s] delay-1000"></div>
        </div>
      </Codewithoutput>
    </div>
  );
}

export default Page;
