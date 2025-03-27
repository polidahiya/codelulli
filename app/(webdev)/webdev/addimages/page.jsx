import React from "react";
import Codedisplay from "@/app/_globalcomps/Codedisplay";
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
      <h3 className="mt-5">What if the image is on you pc?</h3>

      <h2>Adding Videos</h2>
      <p>
        Videos can be embedded using the <code>video</code> tag, allowing for
        better engagement.
      </p>
      <p>
        <strong>Example:</strong>
      </p>
      <Codedisplay
        language="html"
        code={`<video src="video.mp4" width="400" height="300" controls></video>`}
      />

      <h2>Adding Audio</h2>
      <p>
        Audio files can be embedded using the <code>audio</code> tag to enhance
        the user experience.
      </p>
      <p>
        <strong>Example:</strong>
      </p>
      <Codedisplay language="html" code={`<audio  src="audio.mp3"></audio>`} />
    </div>
  );
}

export default Page;
