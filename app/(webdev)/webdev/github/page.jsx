import React from "react";
import Image from "next/image";
import Link from "next/link";

function page() {
  return (
    <div className="text">
      <h1 className="!mb-0">GitHub: A Beginner’s Guide</h1>
      <p>
        Lets make your website accessible to your friends and family over the
        internet.
      </p>

      <h2>What is GitHub?</h2>
      <p>
        GitHub is a platform for hosting and managing code using Git. It allows
        developers to collaborate, track changes, and deploy projects
        efficiently.
      </p>

      <h2>Getting Started with GitHub</h2>
      <ul>
        <li>
          <strong>Sign Up:</strong> Go to{" "}
          <a href="https://github.com/">GitHub</a> and create an account.
        </li>
        <Image
          src={"/webdev/githubhomepage.png"}
          alt="Github-homepage"
          height={600}
          width={600}
          loading="lazy"
          className="w-full"
        ></Image>
        <li>
          <strong>
            Install Git {"("}Optional but recommended{")"} {"("}Not for
            beginners{")"}:
          </strong>
        </li>
        <p>
          Download and install Git from{" "}
          <a href="https://git-scm.com/">git-scm.com</a>. Set up your Git
          username and email: git config --global user.name {'"'}Your Name{'"'}{" "}
          git config --global user.email {'"'}youremail@example.com{'"'}
        </p>
      </ul>

      <h2>Creating a GitHub Repository</h2>
      <ol>
        <li>
          Go to <a href="https://github.com/">GitHub</a> and log in.
        </li>
        <li>
          Click the {'"'}+{'"'} icon (top right) → {'"'}New repository{'"'}.
        </li>
        <div className="flex items-start gap-2">
          <Image
            src={"/webdev/githubnewbutton.jpg"}
            alt="Github-new-repo-button"
            height={100}
            width={320}
            loading="lazy"
            className="w-80"
          ></Image>
          <Image
            src={"/webdev/githubnewbutton2.jpg"}
            alt="Github-new-dropdown-menu"
            height={320}
            width={310}
            loading="lazy"
            className="w-80"
          ></Image>
        </div>
        <li>Enter a repository name and description.</li>
        <li>Choose Public or Private visibility.</li>
        <Image
          src={"/webdev/githubnewrepo.jpg"}
          alt="Github-new-repo-page"
          height={720}
          width={830}
          loading="lazy"
          className="w-full"
          quality={100}
        ></Image>
        <li>Click “Create repository”.</li>
      </ol>

      <h2>Uploading Files Manually to GitHub</h2>
      <ol>
        <li>Open your repository.</li>
        <li>Click “Add file” → “Upload files”.</li>
        <Image
          src={"/webdev/girthubuploadfilebutton.jpg"}
          alt="Github-upload-file-button"
          height={720}
          width={830}
          loading="lazy"
          className="w-full"
          quality={100}
        ></Image>
        <li>
          Drag and drop your files or click “Choose your files” to select them.
        </li>
        <li>Click “Commit changes” to upload.</li>
      </ol>

      <h2>Hosting Your Website Using GitHub Pages</h2>
      <ol>
        <li>
          Upload your project (Ensure you have an <code>index.html</code> file).
        </li>
        <li>
          Go to <strong>Settings</strong> of your repository.
        </li>
        <Image
          src={"/webdev/githubsettingbutton.jpg"}
          alt="Github-setting-button"
          height={44}
          width={720}
          loading="lazy"
          className="w-full"
          quality={100}
        ></Image>
        <li>
          Navigate to the <strong>Pages</strong> section.
        </li>
        <Image
          src={"/webdev/githubpagesbutton.jpg"}
          alt="Github-pages-button"
          height={315}
          width={288}
          loading="lazy"
          className="w-full md:w-72"
          quality={100}
        ></Image>
        <li>
          Under <strong>Branch</strong>, select <code>main</code> (or{" "}
          <code>master</code>) and click <strong>Save</strong>.
        </li>
        <Image
          src={"/webdev/githubpagessavebutton.jpg"}
          alt="Github-pages-save-button"
          height={318}
          width={720}
          loading="lazy"
          className="w-full"
          quality={100}
        ></Image>
        <li>Wait a few minutes, refresh and your site will be live at:</li>
        <p>
          <code>https://yourusername.github.io/repository-name/</code>
        </p>
      </ol>

      <p>Now, your website is hosted for free using GitHub Pages! 🚀</p>
      <p>
        Share the link of your website with your friends, here is the link of
        one of my fun project,{" "}
        <Link
          href="https://space-shooting.vercel.app/"
          target="_blank"
          rel="noopener"
          prefetch={false}
        >
          Visit
        </Link>
        .
      </p>
      <p>Try not to loose😉.</p>
    </div>
  );
}

export default page;
