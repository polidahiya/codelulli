import React from "react";
import Codedisplay from "@/app/(frontend)/_globalcomps/Codedisplay";
import Image from "next/image";

function Page() {
  return (
    <div className="text">
      <h1>How to Add Images, Videos, and Audio Files to Your Website</h1>
      <p>
        Enhancing a website with multimedia elements like images, videos, and
        audio files can significantly improve user engagement. Here’s a
        comprehensive guide on how to incorporate them into your website.
      </p>

      <h2>Adding Images</h2>
      <p>
        Images can be added using the <code>img</code> tag in HTML. Ensure that
        images are optimized for faster loading times.
      </p>
      <p>
        <strong>Example:</strong>
      </p>
      <Codedisplay language="html" code={`<img src="image.jpg"></img>`} />
      <p>Your can also write it this way.</p>
      <Codedisplay language="html" code={`<img src="image.jpg"/>`} />
      <p>
        You can also add <mark>height</mark> and <mark>width</mark> of image
        directly inside it.
      </p>
      <Codedisplay
        language="html"
        code={`<img src="image.jpg" width="300" height="200"></img>`}
      />
      <h3 className="mt-5">
        Where to get this <mark>src</mark> from?
      </h3>
      <p>
        Simply go on google {">"} Search for your image {">"} copy its{" "}
        <mark>image address</mark> {">"} and put it in the src
      </p>
      <Image
        src="/webdev/image-address-on-google.png"
        alt="image-address-on-google"
        height={1080}
        width={1920}
        loading="lazy"
      />
      <p className="mt-5">
        <strong>Example:</strong>
      </p>
      <Codedisplay
        language="html"
        code={`<img src="https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1" width="300" height="200"></img>`}
      />
      <p>
        {
          'src="https://i0.wp.com/plopdo.com/wp-content/uploads/2021/11/feature-pic.jpg?fit=537%2C322&ssl=1"'
        }
      </p>
      <p>All images have different src.</p>
      <h2 className="mt-5">
        What if the image is on your PC? How to Read a Relative Path?
      </h2>

      <h3>Understand the Current Directory {"(.)"}</h3>
      <p>A single dot {"(.)"} represents the current directory.</p>
      <p>
        <strong>Example:</strong> <code>./image.jpg</code> refers to{" "}
        <code>image.jpg</code> in the same directory as <code>index.html</code>.
      </p>
      <Codedisplay
        language="html"
        code={`/Newfolder
│── index.html
│── image.jpg  <-- Example: ./image.jpg (current directory)
`}
      />

      <h3 className="mt-5">Navigate to Parent Directory {"(..)"}</h3>
      <p>Double dots {"(..)"} move up one level in the directory structure.</p>
      <p>
        <strong>Example:</strong> <code>../image.jpg</code> refers to{" "}
        <code>image.jpg</code> in the parent directory relative to{" "}
        <code>index.html</code>.
      </p>
      <Codedisplay
        language="html"
        code={`/Newfolder
│── image.jpg  <-- Example: ../image.jpg (parent directory)
│── subdir
│   ├── index.html
`}
      />

      <h3 className="mt-5">Move Through Subdirectories</h3>
      <p>You can specify subdirectories by chaining them together.</p>
      <p>
        <strong>Example:</strong> <code>./subdir/image.jpg</code> refers to{" "}
        <code>image.jpg</code> inside <code>subdir</code> relative to{" "}
        <code>index.html</code>.
      </p>
      <Codedisplay
        language="html"
        code={`/Newfolder
│── index.html
│── subdir
│   ├── image.jpg  <-- Example: ./subdir/image.jpg (inside subdir)
`}
      />

      <h3 className="mt-5">Combining Parent and Subdirectories</h3>
      <p>
        <strong>Example:</strong> <code>../subdir/image.jpg</code> moves up one
        level and then into <code>subdir</code> to access <code>image.jpg</code>
        .
      </p>
      <Codedisplay
        language="html"
        code={`/Newfolder
│── anotherdir
│   ├── index.html
│── subdir
│   ├── image.jpg  <-- Example: ../subdir/image.jpg (moving up and into subdir)
`}
      />

      <h3 className="mt-5">Going Two Levels Down</h3>
      <p>
        Sometimes, the image might be inside a deeper folder structure.
        <strong>Example:</strong> <code>./subdir/inner/image.jpg</code> refers
        to <code>image.jpg</code> inside a nested folder relative to{" "}
        <code>index.html</code>.
      </p>
      <Codedisplay
        language="html"
        code={`/Newfolder
│── index.html
│── subdir
│   ├── inner
│   │   ├── image.jpg  <-- Example: ./subdir/inner/image.jpg (two levels down)
`}
      />

      <h2 className="mt-5">Adding Videos</h2>
      <p>
        Videos can be embedded using the <code>video</code> tag, allowing for
        better engagement.
      </p>
      <p>
        <strong>Example:</strong>
      </p>
      <Codedisplay
        language="html"
        code={`<video src="./video.mp4" width="400" height="300"></video>`}
      />

      <h2 className="mt-5">Adding Audio</h2>
      <p>
        Audio files can be embedded using the <code>audio</code> tag to enhance
        the user experience.
      </p>
      <p>
        <strong>Example:</strong>
      </p>
      <Codedisplay language="html" code={`<audio  src="./audio.mp3"></audio>`} />
    </div>
  );
}

export default Page;
