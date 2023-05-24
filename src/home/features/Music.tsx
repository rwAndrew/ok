import Image, { type ImageProps } from "next/image";
import { AiFillCaretRight } from "react-icons/ai";
import {
  BsMusicNoteBeamed,
  BsArrowLeft,
  BsArrowRight,
  BsArrowRightCircleFill,
} from "react-icons/bs";
import { Progress } from "../components/Progress";
import KickBack from "@static/home/songs/kick-back.jpg";
import FightSong from "@static/home/songs/eve-fight-song.jpg";
import GreenGradient from "@static/home/green-gradient.svg";
import { motion } from "framer-motion";
import Gradient from "../components/Gradient";
import clsx from "clsx";
import styles from "./music.module.css";
import LinkButton from "../components/LinkButton";

export function Music() {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4 }}
      className={clsx(
        "relative z-[2] mt-[12rem] grid grid-cols-1 gap-4 p-7 pb-0 sm:max-lg:pr-10 lg:mt-[15rem]",
        "lg:grid-cols-[1fr_0.8fr]",
        "overflow-hidden rounded-3xl bg-slate-100 dark:bg-slate-900",
      )}
    >
      <Gradient
        src={GreenGradient}
        className={clsx(
          "absolute -bottom-[400px] -left-[30%] -z-[1] w-full min-w-[800px] opacity-60",
          "lg:-top-[50%] lg:left-[40%] lg:w-[1000px] lg:opacity-80",
        )}
      />
      <Content />
      <div className="absolute top-0 right-8 z-[2] max-sm:hidden lg:right-16">
        <div className="mx-auto h-36 w-[2px] bg-gradient-to-b from-green-400 to-cyan-600" />
        <div
          className={clsx(
            "rounded-full bg-gradient-to-br from-green-400 to-cyan-600 p-4",
            "text-2xl text-white shadow-lg shadow-green-300/50",
            "lg:text-3xl",
          )}
        >
          <BsMusicNoteBeamed />
        </div>
      </div>
      <motion.div
        whileInView={{ y: 0 }}
        initial={{ y: 100 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "mt-2 -mr-[20rem] flex w-[650px] flex-col max-lg:ml-8 max-md:ml-5",
          "max-h-[10rem] lg:mt-[5rem] lg:max-h-full",
        )}
      >
        <div className={`${styles["music-player"]} mr-20`}>
          <MusicPlayer />
        </div>
        <div className={`z-[2] ${styles["play-list"]}`}>
          <Playlist />
        </div>
      </motion.div>
    </motion.div>
  );
}

function Content() {
  return (
    <div
      className={clsx(
        "flex max-w-[750px] flex-col gap-3 lg:max-w-none",
        "sm:p-5 md:p-5",
      )}
    >
      <h1 className="text-3xl font-bold sm:text-5xl">新世紀福音戰士</h1>
      <h3 className="text-lg font-bold text-secondary-light dark:text-secondary-dark sm:text-xl">
        不知道要放甚麼，再來個新世紀福音戰士好了
      </h3>
      <div className="h-stack mt-3">
      
      </div>
    </div>
  );
}

function Playlist() {
  return (
    <div className="ml-[150px] -mt-[60px] flex flex-col gap-5">
      <Song img={FightSong} duration="1:38:00">
      福音戰士新劇場版：序
      </Song>
      <Song img={KickBack} duration="2:35:00">
      福音戰士新劇場版：終
      </Song>
    </div>
  );
}

function Song({
  img,
  duration,
  children,
}: {
  img: ImageProps["src"];
  duration: string;
  children: string;
}) {
  return (
    <div className="rounded-xl bg-white p-4 shadow-md backdrop-blur-md dark:bg-black/70">
      <div className="flex flex-row gap-2">
        <Image
          className="h-16 w-16 rounded-lg bg-blue-400 object-cover"
          alt={children}
          src={img}
        />
        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-bold sm:text-xl">{children}</h3>
          <p className="text-lg text-secondary-light dark:text-secondary-dark">
            {duration}
          </p>
        </div>
      </div>
    </div>
  );
}

function MusicPlayer() {
  const greenButton = clsx(
    "rounded-full text-lg font-bold text-white p-3 bg-gradient-to-r from-green-400 to-cyan-500",
    "dark:to-cyan-500 dark:from-green-600",
  );

  return (
    <div className="flex w-full max-w-[400px] flex-col gap-3 rounded-2xl bg-white p-5 dark:bg-zinc-900">
      <div className="h-stack mb-2">
        <BsMusicNoteBeamed />
        <p className="font-bold">福音戰士新劇場版</p>
      </div>
      <Progress track="w-[66%]" />
      <div className="h-stack mt-2">
        <button aria-label="prev" className={greenButton}>
          <BsArrowLeft />
        </button>
        <div className="w-full" />
        <button className={greenButton} aria-label="play">
          <AiFillCaretRight />
        </button>
        <div className="w-full" />

        <button className={greenButton} aria-label="next">
          <BsArrowRight />
        </button>
      </div>
    </div>
  );
}
