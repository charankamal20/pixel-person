"use client";
import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import Header from "./header";
import { ArrowRight, Bot, Code, VenetianMask } from "lucide-react";
import { SmoothScrollHero } from "./parallax-section";
import { ShuffleGrid } from "./try-section";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const LandingPage = () => {
  const [selected, setSelected] = useState<ToggleOptionsType>("small");
  const [selectedTransparency, setSelectedTransparency] =
    useState<ToggleOptionsType>("small");

  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch the generated image
  const fetchGeneratedImage = async () => {
    setLoading(true);
    try {
      const baseurl =
        localStorage.getItem("url") + "/generate-image" ||
        "https://cc86-104-155-238-132.ngrok-free.app" + "/generate-image";

      let newurl = baseurl;
      if (selectedTransparency === "large") {
        if (newurl === baseurl) {
          newurl += "?transparent=true";
        } else {
          newurl += "&transparent=true";
        }
      }

      if (selected === "large") {
        if (newurl === baseurl) {
          newurl += "?size=large";
        } else {
          newurl += "&size=large";
        }
      }

      console.log("baseurl: ", newurl);
      const response = await fetch(newurl, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "69420",
        }),
      });
      if (!response.ok) {
        throw new Error("Failed to fetch image");
      }
      // Get the image as a blob
      const blob = await response.blob();
      // Create a URL for the blob and update state
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    } catch (error) {
      console.error("Error fetching the image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative flex h-full min-h-screen flex-col items-center pt-16 px-3 gap-8 lg:px-5">
      <Header />
      <section className="w-full flex flex-col gap-3 lg:gap-5 md:grid md:grid-cols-2">
        <a
          href="https://www.kaggle.com/code/classikh/avatar-gan"
          className="bg-[#e1e4ea] text-black flex items-center transition-all h-16 sm:h-20 md:h-20 lg:h-20 gap-2 group lg:gap-4 pr-3 sm:pr-4 rounded-lg relative group/banner hover:opacity-95 p-4 cursor-pointer"
        >
          <Code className="text-black" />
          <div>
            <h2 className="font-semibold ">View Source Code</h2>
            <p className="text-neutral-700 font-normal text-base">
              This is a completely Open Source AI service.
            </p>
          </div>

          <ArrowRight className="text-black transition-all duration-500 ease-in-out group-hover:-translate-x-1 ml-auto" />
        </a>
        <button
          onClick={() => {
            document.getElementById("try")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-accent flex items-center  transition-all h-16 sm:h-20 md:h-20 lg:h-20 gap-2 group lg:gap-4 pr-3 sm:pr-4 rounded-lg relative group/banner p-4 cursor-pointer hover:opacity-95 text-white"
        >
          <Bot className="text-white" />
          <div className="text-left">
            <h2 className="font-semibold ">Try it Yourself!</h2>
            <p className="text-neutral-200 font-normal  text-base">
              We provide a simple API to get started.{" "}
            </p>
          </div>

          <ArrowRight className="text-white transition-all duration-500 ease-in-out group-hover:-translate-x-1 ml-auto" />
        </button>
      </section>
      <section className="w-full relative">
        <div className="absolute top-0 w-full h-40 bg-gradient-to-b from-[#0a0a0a] to-transparent"></div>
        <div className="relative">
          {/* <ParallaxScrollDemo /> */}
          <SmoothScrollHero />
        </div>
      </section>
      <section
        id="try"
        className="bg-[#e1e4ea] flex justify-center items-center h-screen w-full"
      >
        <div className="w-full text-black grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
          <div>
            <span className="block mb-4 text-xs md:text-sm text-accent font-medium">
              Try it Yourself
            </span>
            <h3 className="text-4xl md:text-6xl font-semibold">
              Create Your Unique Avatar in Seconds
            </h3>
            <p className="text-base md:text-lg text-slate-700 my-4 md:my-6">
              Generate unique, cartoon-style avatars effortlessly with our
              cutting-edge API. Perfect for apps, games, or just adding a
              personal touch to your digital presence.
            </p>
            <button
              onClick={fetchGeneratedImage}
              disabled={loading}
              className="bg-accent text-white font-medium py-2 px-4 transition-all hover:bg-black duration-500 flex gap-x-2 items-center justify-center active:scale-95"
            >
              <VenetianMask className="text-white" />
              {loading && <span>Generating...</span>}
              {!loading && <span>Generate a Unique Avatar</span>}
            </button>
            <div className="grid grid-cols-2">
              <div
                className={`flex py-4 justify-start items-center gap-x-2 transition-colors ${
                  selected === "small" ? "" : ""
                }`}
              >
                <div className="inline">Transparency:</div>
                <SliderToggleTransparency
                  selected={selectedTransparency}
                  setSelected={setSelectedTransparency}
                />
              </div>
              <div
                className={`flex py-4 justify-start items-center gap-x-2 transition-colors ${
                  selected === "small" ? "" : ""
                }`}
              >
                <div className="inline">Image Size:</div>
                <SliderToggle selected={selected} setSelected={setSelected} />
              </div>
            </div>
          </div>
          <CardPulseBorder image={imageUrl || ""} />
        </div>
      </section>
      <footer className="w-full">
        <div className="w-full bg-[#0a0a0a] text-white pt-24 pb-4 flex flex-col items-center justify-center gap-4">
          <div className="grid pb-16 grid-cols-2 w-full mx-auto max-w-6xl ">
            <div>
              <div className="mr-4 md:flex mb-4">
                <Link
                  className="font-normal flex space-x-2 items-center mr-4 text-lg text-accent py-1 relative z-20"
                  href="/"
                >
                  <span className="font-medium text-white">pixel_person</span>
                </Link>
              </div>
              <div className="-mt-2 text-neutral-300 text-sm">
                Project Submission for Neural Networks Course
              </div>
              <div className="items-start mt-10">
                <div className="flex col-start-3 items-start justify-end space-y-4 flex-col mt-4">
                  <h3>
                    Created By <b className="text-accent">Charan Kamal Singh</b>
                  </h3>
                  <Link
                    target="_blank"
                    className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                    href="https://www.kaggle.com/code/classikh/avatar-gan"
                  >
                    Kaggle
                  </Link>
                  <Link
                    target="_blank"
                    className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                    href="https://github.com/charankamal20"
                  >
                    GitHub
                  </Link>
                  <Link
                    target="_blank"
                    className="transition-colors hover:text-black text-muted dark:text-muted-dark dark:hover:text-neutral-400 text-xs sm:text-sm"
                    href="https://www.linkedin.com/in/charankamal20"
                  >
                    LinkedIn
                  </Link>
                </div>
              </div>
            </div>

            <ShuffleGrid />
          </div>
          <p className="text-xs">© 2024 PixelPerson. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
};

const CardPulseBorder = ({ image }: { image: string }) => {
  return (
    <div className="relative mx-auto h-48 w-48">
      <div className="absolute top-0 flex w-full justify-center">
        <div className="left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000" />
      </div>
      {image ? (
        <Image
          height={400}
          width={400}
          src={image}
          alt="Avatar"
          className="rounded-lg h-full w-full object-cover"
        />
      ) : (
        <div className="h-full w-full border flex justify-center items-center border-gray-300">
          <p className="text-sm text-gray-500 text-center">
            Click on Generate Avatar Button
          </p>
        </div>
      )}
    </div>
  );
};

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

type ToggleOptionsType = "small" | "large";
type ToggleOptionsTransparency = "small" | "large";

const SliderToggle = ({
  selected,

  setSelected,
}: {
  selected: ToggleOptionsType;

  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "small" ? "text-white" : "text-black"
        }`}
        onClick={() => {
          setSelected("small");
        }}
      >
        <span className="relative z-10">Small</span>
      </button>

      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "large" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSelected("large");
        }}
      >
        <span className="relative z-10">Large</span>
      </button>

      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "large" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

const SliderToggleTransparency = ({
  selected,

  setSelected,
}: {
  selected: ToggleOptionsType;

  setSelected: Dispatch<SetStateAction<ToggleOptionsType>>;
}) => {
  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "small" ? "text-white" : "text-black"
        }`}
        onClick={() => {
          setSelected("small");
        }}
      >
        <span className="relative z-10">Off</span>
      </button>

      <button
        className={`${TOGGLE_CLASSES} ${
          selected === "large" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setSelected("large");
        }}
      >
        <span className="relative z-10">On</span>
      </button>

      <div
        className={`absolute inset-0 z-0 flex ${
          selected === "large" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default LandingPage;
