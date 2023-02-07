import ProductSlideBox from "../ProductSlideBox";
import { HiOutlineChevronRight } from "react-icons/hi";
import { HiOutlineChevronLeft } from "react-icons/hi";
const index = () => {
  return (
    <section className="container mx-auto px-10 py-5 bg-[#818CF8]">
      <div className="flex items-center justify-between">
        <div className="border-r-4 text-white border-white pr-2 font-bold text-2xl border-solid">
          <h3>اپلیکیشن ها</h3>
        </div>
        <div className="flex text-2xl gap-x-4">
          <HiOutlineChevronRight className="bg-white text-[#5a51ff] w-10 h-10" />
          <HiOutlineChevronLeft className="bg-white" />
        </div>
      </div>
      <div className="flex items-center justify-start gap-8 flex-wrap py-8">
        <ProductSlideBox />
        <ProductSlideBox />
        <ProductSlideBox />
        <ProductSlideBox />
        <ProductSlideBox />
        <ProductSlideBox />
        <ProductSlideBox />
      </div>
    </section>
  );
};

export default index;
