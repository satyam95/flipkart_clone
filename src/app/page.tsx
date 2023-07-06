import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Checkbox from "@/elements/Checkbox";

export default function Home() {
  return (
    <main>
      <div className="flex max-w-[1440px] w-full mx-auto">
        <div className="m-1.5 bg-white rounded w-full h-full max-w-[280px]">
          <div className="p-4 border-b border-[#f0f0f0]">
            <div className="font-medium text-lg capitalize">Fliters</div>
          </div>
          <div className="p-4 border-b border-[#f0f0f0]">
            <div className="font-medium text-xs uppercase text-[#212121] mb-[5px]">
              Title
            </div>
            <div>
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>
          </div>
          <div className="p-4 border-b border-[#f0f0f0]">
            <div className="font-medium text-xs uppercase text-[#212121] mb-[5px]">
              Title
            </div>
            <div>
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>
          </div><div className="p-4 border-b border-[#f0f0f0]">
            <div className="font-medium text-xs uppercase text-[#212121] mb-[5px]">
              Title
            </div>
            <div>
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>
          </div><div className="p-4 border-b border-[#f0f0f0]">
            <div className="font-medium text-xs uppercase text-[#212121] mb-[5px]">
              Title
            </div>
            <div>
              <Checkbox />
              <Checkbox />
              <Checkbox />
              <Checkbox />
            </div>
          </div>
        </div>
        <div className="m-1.5 bg-white rounded w-full">
          <div className="flex flex-wrap">
            {products.map((product) => (
              <div className="w-1/2 md:w-3/12">
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  brand={product.brand}
                  category={product.category}
                  thumbnail={product.thumbnail}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
