import MainSlider from "../components/MainSlider";
import ProductSlider from "../components/ProductSlider"
import BannerSection from "../components/BannerSection"
const page = () => {
  return (
    <div>
      <main className=" ">
        <section>
        <MainSlider />
        </section>
        <section className="mt-12">
        <ProductSlider title="اپلیکیشن ها" />
        </section>
        <section className="mt-12">
        <BannerSection />
        </section>
        <section className="mt-12">
        <ProductSlider title="کتاب ها" />
        </section>
      </main>
    </div>
  );
};

export default page;
