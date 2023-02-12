import MainSlider from "../components/MainSlider";
import ProductSlider from "../components/ProductSlider";
import BannerSection from "../components/BannerSection";
import GraphicCategories from "../components/GraphicCategories";
import GraphicSlider from "../components/GraphicSlider"
const page = () => {
  return (
    <div>
      <main>
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
        <section className="mt-12">
          <GraphicCategories />
        </section>
        <section className="mt-12">
          <GraphicSlider />
        </section>
      </main>
    </div>
  );
};

export default page;
