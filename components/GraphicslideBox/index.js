import Image from "next/image";
import { VscSearch } from "react-icons/vsc";
import { BiSave } from "react-icons/bi";
import { RiShoppingCartLine } from "react-icons/ri";
import { BsBrush } from "react-icons/bs";
import { MdFileCopy } from "react-icons/md";
import { TfiArrowsCorner } from "react-icons/tfi";

const index = () => {
  return (
    <article className="sliderItem p-2">
      <div className="flex flex-col bg-white justify-around w-[19rem] h-[32rem] rounded-2xl shadow-[5px_5px_8px_rgba(0,0,0,0.25)] hover:shadow-[5px_5px_15px_rgba(0,0,0,0.7)] transition-all duration-500">
        <div className="flex items-center justify-center">
          <Image
            className="rounded-2xl mt-3"
            alt="product Slide Image"
            width={280}
            height={160}
            src={"/images/productSlider/ganj.jpg"}
          />
        </div>
        <div className="flex flex-col items-start justify-center h-full">
          <div>
            <h3 className="text-[#656666] font-bold text-lg break-words px-4 mb-8">صفحه ساز المنتور وردپرس بهتر از کامپوزر</h3>
            <div className="container mx-auto px-2 flex items-center justify-between mt-4 mb-6">
              <div className="flex items-center justify-start gap-x-2">
                <BsBrush />
                <div>فرمت</div>
              </div>
              <p>PSD</p>
            </div>
            <div className="container mx-auto px-2 flex items-center justify-between gap-x-2 mt-4 mb-6">
              <div className="flex items-center justify-start gap-x-2">
                <TfiArrowsCorner />
                <div>ابعاد</div>
              </div>
              <p>720*1280پیکسل</p>
            </div>
            <div className="container mx-auto px-2 flex items-center justify-between gap-x-2 mt-4 mb-6">
              <div className="flex items-center justify-start gap-x-2">
                <MdFileCopy />
                <div>حجم</div>
              </div>
              <p>10 مگ</p>
            </div>
          </div>
          <div className="flex items-center justify-start gap-x-2 mt-3 mb-4 mr-3">
            <p className="px-5 py-2 bg-[#ededee] text-zinc-600 font-semibold rounded-lg">فتوشاپ</p>
            <p className="px-5 py-2 bg-[#ededee] text-zinc-600 font-semibold rounded-lg">ایلوستریتو</p>
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
