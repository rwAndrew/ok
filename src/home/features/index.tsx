import { ChineseUI } from "./ChineseUI";
import { Dashboard } from "./Dashboard";
import { Music } from "./Music";
import { Games } from "./Games";
import clsx from "clsx";

export function Features() {
  return (
    <>
      <div className="mt-[10rem] flex flex-col gap-10 text-center sm:mt-[15rem]">
        <p
          className={clsx(
            "mx-auto w-fit bg-gradient-to-br from-orange-400 to-red-500 py-2 px-4 font-semibold text-white",
            "text-3xl sm:text-4xl",
          )}
        >
          個人網站
        </p>
        <h1 className="font-yahei text-5xl font-bold sm:text-5xl lg:text-6xl">
          "個人"
        </h1>
        <h2 className="mx-auto max-w-2xl text-xl text-secondary-light dark:text-secondary-dark">
          所以你來也不能幹嘛
        </h2>
      </div>
      <ChineseUI />
      <Games />
      <Music />
      <Dashboard />
    </>
  );
}
