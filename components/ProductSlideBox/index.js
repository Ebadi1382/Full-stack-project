import Image from "next/image";
import { VscSearch } from "react-icons/vsc";
import { BiSave } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";

const index = () => {
  return (
    <article className="sliderItem p-2">
      <div className="flex flex-col bg-white justify-around w-[19rem] h-[23rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] transition-all duration-500">
        <div className="flex items-start justify-center h-full">
          <Image
            className="rounded-tl-2xl rounded-tr-2xl"
            alt="product Slide Image"
            width={310}
            height={160}
            src={"/images/productSlider/ganj.jpg"}
          />
        </div>
        <div className="flex flex-col items-start justify-center h-full">
          <div className="mr-3">
            <h3 className="text-[#656666] font-bold text-lg">کتاب گنج-نوشته جلال آل احمد</h3>
            <div className="flex items-center gap-x-2 mt-4 mb-6">
              <p className="py-2 px-3 bg-[#F4F4F5] rounded-lg">رمان</p>
              <p className="py-2 px-3 bg-[#F4F4F5] rounded-lg">الیف شافاک</p>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-x-2 mr-3">
              <VscSearch className="p-2 w-10 h-10 rounded-lg bg-[#E4E4E7]" />
              <BiSave className="p-2 w-10 h-10 rounded-lg bg-[#E4E4E7]" />
            </div>
            <div className="flex items-center justify-end w-full gap-x-2">
              <RiShoppingCartLine className="bg-[#FB923C] p-2 w-10 h-10 rounded-lg text-white" />
              <p className="bg-[#A3A3A3] px-5 py-2 rounded-tr-lg rounded-br-lg text-white font-bold">2000 تومان</p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default index;
