import { IoMdOpen } from "react-icons/io";
import Gradient from "./components/Gradient";
import HeroGradient from "@static/hero.svg";
import Image from "next/image";
import LinkButton from "./components/LinkButton";
import clsx from "clsx";
import styles from "./hero.module.css";
import { twMerge } from "tailwind-merge";

export function Hero() {
  return (
    <div
      className={clsx(
        "relative z-[2] mt-[6rem] flex w-full flex-col gap-12 px-[1rem] md:mt-[10rem] xl:mt-[14rem]",
        "items-center text-center",
      )}
    >
      <Gradient
        src={HeroGradient}
        className="absolute -top-[200px] -right-0 -z-[1] hidden w-full min-w-[800px] lg:-right-[300px]"
      />
      <h1
        className={
          "font-yahei text-5xl font-bold min-[360px]:text-6xl sm:text-7xl xl:text-8xl"
        }
      >
        呵呵 
        <span
          className={clsx(
            "text-gradient mx-1 bg-gradient-to-r from-blue-400 via-green-300 to-blue-400 max-lg:my-2 max-lg:block",
            styles["animated-gradient"],
          )}
        >
          Andrew
        </span>
         個人網頁
      </h1>
      <h2
        className={clsx(
          "max-w-[450px] text-xl text-secondary-light dark:text-secondary-dark",
          "md:max-w-[650px] lg:text-2xl",
        )}
      >
        大大小小檔案記事都在這，你來了也沒什麼用
      </h2>
      <Buttons />
      <div className="mt=[3rem] flex w-full flex-col gap-5 md:mt-[4rem]">
        <p className="mb-3 text-lg font-semibold text-secondary-light dark:text-secondary-dark md:mb-4">
          社群/網站
        </p>
        <div
          className={clsx(
            "overflow-hidden",
            "max-md:[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
          )}
        >
          <div className={clsx(styles.servers, "inline-block max-md:w-max")}>
            <Servers />
            <Servers secondary />
          </div>
        </div>
      </div>
    </div>
  );
}

function Buttons() {
  const bn = "text-lg font-bold sm:text-lg rounded-md w-full px-6 py-3 sm:px-8";

  return (
    <div className="grid w-full max-w-[500px] grid-cols-1 gap-3 sm:w-fit sm:grid-cols-2">
      <LinkButton href="/docs" className={clsx(bn, styles["rainbow-border"])}>
      instagram
      </LinkButton>
      <LinkButton
        href="/invite"
        target="_blank"
        className={twMerge(
          "inline-flex items-center justify-center gap-2.5 bg-black text-white",
          "dark:bg-white dark:text-black",
          bn,
        )}
      >
        <IoMdOpen />
        班級網頁
      </LinkButton>
    </div>
  );
}

function Servers({ secondary }: { secondary?: boolean }) {
  return (
    <div
      className={clsx(
        "inline-flex flex-row justify-center",
        "md:max-w-[64rem] md:flex-wrap",
        secondary && "md:hidden",
      )}
    >
    </div>
  );
}

function Server({
  img,
  name,
  transparent,
}: {
  img: string;
  name: string;
  transparent?: boolean;
}) {
  return (
    <div className="h-stack mx-4 my-1 flex-shrink-0 gap-3 text-black dark:text-white">
      <Image
        alt={name}
        src={img}
        width="45"
        height="45"
        className={clsx(
          "rounded-full grayscale",
          transparent && "brightness-[0%] dark:brightness-100",
        )}
      />
      <h3 className="text-lg font-bold sm:text-xl">{name}</h3>
    </div>
  );
}
