"use client";
import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import sliderScrollFn from "@/functions/SliderScroll";
import { useRef, useState } from "react";
import styles from "./styles.module.scss";

const categoryList = [
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
  {
    name: "Ayakkabı",
  },
];

const Category = () => {
  const newsSliderRef = useRef(null);
  const [sliderIndex, setSliderIndex] = useState<number>(0);

  const nextFn = () => {
    setSliderIndex(
      sliderIndex === categoryList.length - 1
        ? categoryList.length - 1
        : sliderIndex + 1
    );
    sliderScrollFn(newsSliderRef.current!, 30, 370, 50);
  };

  const backFn = () => {
    setSliderIndex(sliderIndex === 0 ? 0 : sliderIndex - 1);
    sliderScrollFn(newsSliderRef.current!, 30, 370, -50);
  };

  return (
    <div className="flex items-center justify-center px:3 md:px-10 gap-3 md:gap-10 py-5 md:py-8 overflow-x-auto">
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          position: "relative",
        }}
      >
        <button
          className="bg-gradient-to-r from-white to-transparent w-[100px] h-[100px]"
          style={{
            position: "relative",
            left: 20,
          }}
          onClick={() => {
            backFn();
          }}
        >
          <HiChevronLeft size={40} />
        </button>
        <div id="newsSlider1" className={styles.newsSlider} ref={newsSliderRef}>
          {categoryList.map((category, index) => (
            <div
              className=" flex flex-1 border text-slate-500 rounded-full min-w-[120px] items-center justify-center cursor-pointer px-4 py-2 text-center"
              key={index}
            >
              {category.name}
            </div>
          ))}
        </div>

        <button
          className="bg-gradient-to-r  from-transparent to-white w-[100px] h-[100px]"
          style={{
            position: "relative",
            right: 20,
          }}
          onClick={() => {
            nextFn();
          }}
        >
          <HiChevronRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default Category;
