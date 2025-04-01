import React from "react";
import Codedisplay from "@/app/(frontend)/_globalcomps/Codedisplay";
import Image from "next/image";
import Keybutton from "@/app/(frontend)/_globalcomps/Keybutton";
import Mouseclick from "@/app/(frontend)/_globalcomps/Mouseclick";
import Link from "next/link";

function page() {
  return (
    <div className="text">
      {/* Header */}
      <header>
        <h1>Learn Web Development</h1>
        <p>Your journey to building awesome websites starts here!</p>
      </header>

      {/* Main Content */}
      <main>
        {/* Overview */}
        <section>
          <h2>Overview of Web Development</h2>
          <p>
            Web development is the art of creating websites and web
            applications. It’s split into two main areas:
            <span> Frontend</span> (what users see) and
            <span> Backend</span> (what powers the site behind the scenes).
            Together, they make the internet work!
          </p>
        </section>

        {/* Diagram */}
        {/* Frontend Section */}
        <div className="bg-bg1 p-5">
          <div>
            <h3>Frontend</h3>
            <p>Basics:</p>
            <ul>
              <li>
                HTML{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay language="html" code={codesnippets.html} />
                </div>
              </li>
              <li>
                CSS{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay language="css" code={codesnippets.css} />
                </div>
              </li>
              <li>
                JavaScript{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay
                    language="javascript"
                    code={codesnippets.javascript}
                  />
                </div>
              </li>
            </ul>
            <p>Frameworks:</p>
            <ul>
              <li>
                React{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay language="jsx" code={codesnippets.react} />
                </div>
              </li>
              <li>
                Angular{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay
                    language="javascript"
                    code={codesnippets.angular}
                  />
                </div>
              </li>
              <li>
                Vue{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay language="javascript" code={codesnippets.vue} />
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3>Backend</h3>
            <p>Technologies:</p>
            <ul>
              <li>
                Node.js{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay
                    language="javascript"
                    code={codesnippets.nodejs}
                  />
                </div>
              </li>
              <li>
                Express.js{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay
                    language="javascript"
                    code={codesnippets.express}
                  />
                </div>
              </li>
            </ul>
            <p>Databases:</p>
            <ul>
              <li>
                MongoDB{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay
                    language="javascript"
                    code={codesnippets.mongodb}
                  />
                </div>
              </li>
              <li>
                MySQL{" "}
                <span className="text-primary ml-10 peer cursor-pointer">
                  How it looks like
                </span>
                <div className="h-0 overflow-hidden opacity-0 peer-hover:h-auto peer-hover:opacity-100 duration-300">
                  <Codedisplay
                    language="javascript"
                    code={codesnippets.mysql}
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* VS Code Section */}
        <section className="mt-10">
          <h2>Where to Code: Visual Studio Code</h2>
          <Image
            src={"/webdev/lacture1.png"}
            alt="Vscode image"
            height={500}
            width={600}
            loading="lazy"
            className=""
          ></Image>
          <p>
            Visual Studio Code (VS Code) is a free, popular code editor perfect
            for web development.
          </p>
          <h3>How to Download VS Code:</h3>
          <ol>
            <li>
              Go to{" "}
              <a
                href="https://code.visualstudio.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                code.visualstudio.com
              </a>
              .
            </li>
            <li>
              Click the “Download” button for your operating system (Windows,
              macOS, or Linux).
            </li>
            <li>Run the installer and follow the prompts.</li>
          </ol>
          <Image
            src={"/webdev/vscode-setup.png"}
            alt="Vscode setup image"
            height={500}
            width={600}
            loading="lazy"
            className=""
          ></Image>
          <p className="mt-5">
            While installing vscode select all the options, this will help you
            later.
          </p>
          <h3>Once vscode is installed</h3>
          <p>follow the steps to create your first webpage</p>
          <div>
            <p>Step1: Create a folder</p>
            <p>
              {" "}
              Step2: Press <mark>Shift + Right Click</mark>
              inside the folder, and {'"'}select Open with Code{'"'}
            </p>
            <div>
              <div className="flex items-center gap-2 mt-2">
                <Keybutton text="Shift" /> +
                <Mouseclick leftclick={false} />
              </div>
              <Image
                src={"/webdev/contextmenuvscodehighlight.png"}
                alt="Windows context menu"
                height={300}
                width={200}
                loading="lazy"
                className="mt-2"
              ></Image>
            </div>
            <p>
              Step3: Create a new file {'"'}Index.html{'"'}
            </p>
            <p>
              Step4: Inside the file {'"'}Index.html{'"'} copy the following
              code. You can also get this code by just typing {"!"} followed by
              a <Keybutton text="Tab" /> or <Keybutton text="Enter" />. This is
              also called as the boiler plate code.
            </p>
            <Codedisplay language="html" code={htmlbolierplate} />
            <p>
              Step5: Replace{" "}
              <mark>
                {'"'}
                Your name here
                {'"'}
              </mark>{" "}
              with you name and save the file by pressing{" "}
              <Keybutton text="Ctrl" /> +<Keybutton text="s" />
            </p>
            <p>
              Step6: Once the file is open it an any browser and you may see
              your name there. <br /> Congratulation you have created your first
              webpage
            </p>
          </div>
        </section>
      </main>
      <Link href={"/webdev/understandinghtmlandcss"}>Next</Link>
    </div>
  );
}

const codesnippets = {
  html: `<h1>Hello, World!</h1>
<p>This is a simple HTML snippet.</p>`,

  css: `body {
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}`,

  javascript: `function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));`,

  react: `import React from "react";

function App() {
  return <h1>Hello from React!</h1>;
}

export default App;`,

  angular: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Hello from Angular!</h1>',
})
export class AppComponent {}`,

  vue: `<template>
  <h1>Hello from Vue!</h1>
</template>

<script>
export default {
  name: "HelloWorld"
};
</script>`,

  nodejs: `const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from Node.js!");
});

server.listen(3000, () => console.log("Server running on port 3000"));`,

  express: `const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(3000, () => console.log("Server running on port 3000"));`,

  mongodb: `const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectDB() {
  await client.connect();
  const db = client.db("testdb");
  console.log("Connected to MongoDB");
}

connectDB();`,

  mysql: `const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "testdb"
});

connection.connect(err => {
  if (err) throw err;
  console.log("Connected to MySQL");
});`,
};

const htmlbolierplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
  Your name here
</body>
</html>
`;

export default page;
