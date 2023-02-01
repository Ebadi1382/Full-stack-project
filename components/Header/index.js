"use client";
import Image from "next/image";
import Link from "next/link";
import { BsTelegram } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { BsCart3 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { useState } from "react";

const Header = () => {
  const [Flag, setFlag] = useState(false);
  return (
    <div className="container mx-auto px-10 py-3">
      <div className="flex justify-between items-start">
        <div className="flex flex-col justify-center">
          <Link href={"/"}>
            <div
              onMouseEnter={() => setFlag(true)}
              onMouseLeave={() => setFlag(false)}
              className="logo relative z-20 rounded-lg p-4 shadow-[0px_1px_10px_rgba(0,0,0,0.25)] bg-white transition-all duration-300 hover:shadow-[0px_1px_10px_rgba(0,0,0,0.6)] flex flex-col justify-center items-center"
            >
              <Image className="rounded-lg" alt="logo Image" width={100} height={100} src={"/images/HeaderLogo/logo.png"} />
              <p>فروشگاه اینترنتی لوکس کالا</p>
            </div>
          </Link>
          <div
            onMouseEnter={() => setFlag(true)}
            onMouseLeave={() => setFlag(false)}
            className={
              Flag === false
                ? "flex justify-around items-center -translate-y-14 transition-all duration-200 my-1"
                : "flex justify-around items-center translate-y-0 transition-all duration-200 my-1"
            }
          >
            <Link className="text-indigo-600 text-[1.7rem] transition-all duration-150 hover:text-orange-600 " href={"/"}>
              <BsTelegram className="text-3xl" />
            </Link>
            <Link className="text-indigo-600 text-[2.6rem] transition-all duration-150 hover:text-orange-600 " href={"/"}>
              <AiFillYoutube />
            </Link>
            <Link className="text-indigo-600 text-[2.2rem] transition-all duration-150 hover:text-orange-600 " href={"/"}>
              <AiFillTwitterCircle />
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-between w-5/6 h-[9.8rem]">
          <div className="flex justify-between items-center gap-1">
            <nav>
              <ul className="flex justify-start items-center gap-5">
                <li>
                  <Link
                    className="w-32 h-10 bg-zinc-100 rounded-md flex justify-center items-center transition-all duration-200 hover:bg-indigo-600 hover:text-yellow-500 font-medium"
                    href={"/"}
                  >
                    خانه
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 bg-zinc-100 rounded-md flex justify-center items-center transition-all duration-200 hover:bg-indigo-600 hover:text-yellow-500 font-medium"
                    href={"/"}
                  >
                    اپلیکیشن ها
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 bg-zinc-100 rounded-md flex justify-center items-center transition-all duration-200 hover:bg-indigo-600 hover:text-yellow-500 font-medium"
                    href={"/"}
                  >
                    کتاب ها
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 bg-zinc-100 rounded-md flex justify-center items-center transition-all duration-200 hover:bg-indigo-600 hover:text-yellow-500 font-medium"
                    href={"/"}
                  >
                    فایل های گرافیکی
                  </Link>
                </li>
                <li>
                  <Link
                    className="w-32 h-10 bg-zinc-100 rounded-md flex justify-center items-center transition-all duration-200 hover:bg-indigo-600 hover:text-yellow-500 font-medium"
                    href={"/"}
                  >
                    وبلاگ
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="bg-white flex flex-col justify-center gap-5 items-end">
              <div className="flex justify-start items-center gap-5">
                <p>09038320222</p>
                <div className="w-[2rem] h-[2rem] bg-zinc-300 rounded-md flex justify-center items-center rotate-[20deg]">
                  <FaPhoneAlt className="rotate-[-10deg] text-slate-600" />
                </div>
              </div>
              <div className="flex justify-start items-center gap-5">
                <p>ebadia@gmail.com</p>
                <div className="w-[2rem] h-[2rem] bg-zinc-300 rounded-md flex justify-center items-center rotate-[20deg]">
                  <MdEmail className="rotate-[-20deg] text-slate-600" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex w-9/12">
              <input
                type={"text"}
                className="absolute w-[52rem] h-16 outline-none bg-zinc-100 focus:bg-slate-400 hover:bg-slate-200 placeholder:focus:text-white transition-all duration-300 rounded-md placeholder:px-5"
                placeholder="جست و جو بین محصولات..."
              />
              <RiSearch2Line className="relative right-[785px] top-[14px] text-4xl" />
            </div>
            <div className="flex flex-row-reverse gap-3">
              <div className="flex justify-around items-center bg-[#FB923C] text-white w-48 py-2 rounded-lg">
                <p className="bg-white w-6 h-6 flex justify-center items-center text-[#FB923C] rounded-[50%]">0</p>
                <p>سبد خرید</p>
                <div className="bg-white p-3 rounded-lg">
                  <BsCart3 className="font-bold text-2xl text-[#FB923C]" />
                </div>
              </div>
              <button type="button" className="bg-zinc-400 text-white px-5 py-2 rounded-lg">
                <BsFillPersonFill className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
