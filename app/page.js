import MainSlider from "../components/MainSlider";
import ProductSlider from "../components/ProductSlider"
const page = () => {
  return (
    <div>
      <main className=" ">
        <section>
        <MainSlider />
        </section>
        <section className="mt-12">
        <ProductSlider />
        </section>
      </main>
    </div>
  );
};

export default page;
