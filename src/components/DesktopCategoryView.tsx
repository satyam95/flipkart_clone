
import React, { useState } from "react";

import { GetProducts } from "@/hooks/getProducts";
import Checkbox from "@/elements/Checkbox";

import ProductGridView from "./ProductGridView";
import ProductListView from "./ProductListView";
import LoadingSpinner from "./LoadingSpinner";

interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: any[];
}

const DesktopCategoryView = ({ slug }: { slug: string }) => {
  const { data, isLoading } = GetProducts(slug);
  const [gridView, setGridView] = useState(true);
  const [sortingOption, setSortingOption] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number[]>([]);
  const [excludeOutOfStock, setExcludeOutOfStock] = useState(false);

  const setView = () => {
    setGridView(!gridView);
  };

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingOption(event.target.value);
  };

  const getUniqueBrandNames = (products: ProductType[]): string[] => {
    const brandSet = new Set<string>();
    products.forEach((product) => {
      brandSet.add(product.brand);
    });
    return Array.from(brandSet);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Brand checkbox clicked!");
    const { value } = event.target;
    console.log(value);
    setSelectedBrands((prevBrands) =>
      prevBrands.includes(value)
        ? prevBrands.filter((brand) => brand !== value)
        : [...prevBrands, value]
    );
  };

  const handleRatingChange = (rating: number) => {
    setSelectedRating((prevSelectedRatings) => {
      if (prevSelectedRatings.includes(rating)) {
        // If the rating is already selected, remove it from the array
        return prevSelectedRatings.filter((r) => r !== rating);
      } else {
        // If the rating is not selected, add it to the array
        return [...prevSelectedRatings, rating];
      }
    });
  };

  const handleExcludeOutOfStockChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExcludeOutOfStock(event.target.checked);
  };

  const applyFilters = (products: ProductType[]): ProductType[] => {
    let filteredProducts = products.slice();

    // Filter based on selected brands
    if (selectedBrands.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }

    // Filter based on selected rating and above
    if (selectedRating.length > 0) {
      const highestSelectedRating = Math.max(...selectedRating);
      filteredProducts = filteredProducts.filter(
        (product) => product.rating >= highestSelectedRating
      );
    }

    if (excludeOutOfStock) {
      filteredProducts = filteredProducts.filter(
        (product) => product.stock > 0
      );
    }

    return filteredProducts;
  };

  const applySorting = (
    products: ProductType[],
    sortingOption: string
  ): ProductType[] => {
    if (sortingOption === "high") {
      return products.slice().sort((a, b) => b.price - a.price);
    } else if (sortingOption === "low") {
      return products.slice().sort((a, b) => a.price - b.price);
    } else {
      // By default, return the original order
      return products;
    }
  };

  const uniqueBrands = getUniqueBrandNames(data?.products || []);
  const filteredData = applyFilters(data?.products || []);
  const sortedProducts = applySorting(filteredData, sortingOption);

  console.log(sortedProducts);

  if (isLoading) return <LoadingSpinner />;
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <div className="m-1.5">
        <div className="flex max-w-[1440px] w-full mx-auto">
          <div className="m-1.5 bg-white rounded w-full h-full max-w-[280px]">
            <div className="p-4 border-b border-[#f0f0f0]">
              <div className="font-medium text-lg capitalize">Fliters</div>
            </div>
            <div className="p-4 border-b border-[#f0f0f0]">
              <div className="font-medium text-xs uppercase text-[#212121] mb-[5px]">
                Brands
              </div>
              <div>
                {uniqueBrands.map((brand) => (
                  <Checkbox
                    key={brand}
                    labelTitle={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                  />
                ))}
              </div>
            </div>
            <div className="p-4 border-b border-[#f0f0f0]">
              <div className="font-medium text-xs uppercase text-[#212121] mb-[5px]">
                CUSTOMER RATINGS
              </div>
              <div>
                <Checkbox
                  labelTitle="4★ & above"
                  checked={selectedRating.includes(4)}
                  onChange={() => handleRatingChange(4)}
                />
                <Checkbox
                  labelTitle="3★ & above"
                  checked={selectedRating.includes(3)}
                  onChange={() => handleRatingChange(3)}
                />
                <Checkbox
                  labelTitle="2★ & above"
                  checked={selectedRating.includes(2)}
                  onChange={() => handleRatingChange(2)}
                />
                <Checkbox
                  labelTitle="1★ & above"
                  checked={selectedRating.includes(1)}
                  onChange={() => handleRatingChange(1)}
                />
              </div>
            </div>
            <div className="p-4 border-b border-[#f0f0f0]">
              <div className="font-medium text-xs uppercase text-[#212121] mb-[5px]">
                Availability
              </div>
              <div>
                <Checkbox
                  labelTitle="Exclude Out of Stock"
                  checked={excludeOutOfStock}
                  onChange={handleExcludeOutOfStockChange}
                />
              </div>
            </div>
          </div>
          <div className="m-1.5 bg-white rounded w-full">
            <div className="px-2.5 pt-3 pb-1">
              <div className="font-medium text-lg capitalize">{slug}</div>
            </div>
            <div className="px-2.5 py-3 items-center flex justify-between border-b border-[#e0e0e0]">
              <div>
                <div className="flex items-center gap-2 py-1 px-1.5 border border-gray-400 rounded-lg">
                  <div onClick={() => setView()} className="w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        gridView === false
                          ? "fill-white bg-gray-700 p-1 rounded-sm"
                          : "fill-gray-700 p-1 rounded-sm"
                      }
                      version="1.1"
                      id="Capa_1"
                      viewBox="0 0 36.293 36.292"
                    >
                      <g>
                        <path d="M7.984,15.654v4.985c0,0.827-0.672,1.5-1.5,1.5H1.5c-0.828,0-1.5-0.673-1.5-1.5v-4.985c0-0.829,0.672-1.5,1.5-1.5h4.984   C7.312,14.154,7.984,14.827,7.984,15.654z M34.792,14.154H13.289h-0.781c-0.827,0-1.5,0.671-1.5,1.5v4.985   c0,0.827,0.673,1.5,1.5,1.5h0.781h21.504c0.828,0,1.5-0.673,1.5-1.5v-4.985C36.292,14.827,35.621,14.154,34.792,14.154z    M6.484,2.779H1.5c-0.828,0-1.5,0.671-1.5,1.5v4.985c0,0.829,0.672,1.5,1.5,1.5h4.984c0.828,0,1.5-0.671,1.5-1.5V4.279   C7.984,3.452,7.312,2.779,6.484,2.779z M34.792,2.779H13.289h-0.781c-0.827,0-1.5,0.671-1.5,1.5v4.985c0,0.829,0.673,1.5,1.5,1.5   h0.781h21.504c0.828,0,1.5-0.671,1.5-1.5V4.279C36.292,3.452,35.621,2.779,34.792,2.779z M6.484,25.53H1.5   c-0.828,0-1.5,0.671-1.5,1.5v4.984c0,0.83,0.672,1.5,1.5,1.5h4.984c0.828,0,1.5-0.67,1.5-1.5V27.03   C7.984,26.201,7.312,25.53,6.484,25.53z M34.792,25.53H13.289h-0.781c-0.827,0-1.5,0.671-1.5,1.5v4.984c0,0.83,0.673,1.5,1.5,1.5   h0.781h21.504c0.828,0,1.5-0.67,1.5-1.5V27.03C36.292,26.201,35.621,25.53,34.792,25.53z" />
                      </g>
                    </svg>
                  </div>
                  <div onClick={() => setView()} className="w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={
                        gridView === true
                          ? "fill-white bg-gray-700 p-1 rounded-sm"
                          : "fill-gray-700 p-1 rounded-sm"
                      }
                      viewBox="0 -0.5 21 21"
                      version="1.1"
                    >
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Dribbble-Light-Preview"
                          transform="translate(-219.000000, -200.000000)"
                          className={
                            gridView === true
                              ? "fill-white bg-gray-700 p-1 rounded-sm"
                              : "fill-gray-700 p-1 rounded-sm"
                          }
                        >
                          <g
                            id="icons"
                            transform="translate(56.000000, 160.000000)"
                          >
                            <path
                              d="M181.9,54 L179.8,54 C178.63975,54 177.7,54.895 177.7,56 L177.7,58 C177.7,59.105 178.63975,60 179.8,60 L181.9,60 C183.06025,60 184,59.105 184,58 L184,56 C184,54.895 183.06025,54 181.9,54 M174.55,54 L172.45,54 C171.28975,54 170.35,54.895 170.35,56 L170.35,58 C170.35,59.105 171.28975,60 172.45,60 L174.55,60 C175.71025,60 176.65,59.105 176.65,58 L176.65,56 C176.65,54.895 175.71025,54 174.55,54 M167.2,54 L165.1,54 C163.93975,54 163,54.895 163,56 L163,58 C163,59.105 163.93975,60 165.1,60 L167.2,60 C168.36025,60 169.3,59.105 169.3,58 L169.3,56 C169.3,54.895 168.36025,54 167.2,54 M181.9,47 L179.8,47 C178.63975,47 177.7,47.895 177.7,49 L177.7,51 C177.7,52.105 178.63975,53 179.8,53 L181.9,53 C183.06025,53 184,52.105 184,51 L184,49 C184,47.895 183.06025,47 181.9,47 M174.55,47 L172.45,47 C171.28975,47 170.35,47.895 170.35,49 L170.35,51 C170.35,52.105 171.28975,53 172.45,53 L174.55,53 C175.71025,53 176.65,52.105 176.65,51 L176.65,49 C176.65,47.895 175.71025,47 174.55,47 M167.2,47 L165.1,47 C163.93975,47 163,47.895 163,49 L163,51 C163,52.105 163.93975,53 165.1,53 L167.2,53 C168.36025,53 169.3,52.105 169.3,51 L169.3,49 C169.3,47.895 168.36025,47 167.2,47 M181.9,40 L179.8,40 C178.63975,40 177.7,40.895 177.7,42 L177.7,44 C177.7,45.105 178.63975,46 179.8,46 L181.9,46 C183.06025,46 184,45.105 184,44 L184,42 C184,40.895 183.06025,40 181.9,40 M174.55,40 L172.45,40 C171.28975,40 170.35,40.895 170.35,42 L170.35,44 C170.35,45.105 171.28975,46 172.45,46 L174.55,46 C175.71025,46 176.65,45.105 176.65,44 L176.65,42 C176.65,40.895 175.71025,40 174.55,40 M169.3,42 L169.3,44 C169.3,45.105 168.36025,46 167.2,46 L165.1,46 C163.93975,46 163,45.105 163,44 L163,42 C163,40.895 163.93975,40 165.1,40 L167.2,40 C168.36025,40 169.3,40.895 169.3,42"
                              id="grid-[#1526]"
                            ></path>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="sortingOptions"
                  className="block mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Select an option
                </label>
                <select
                  id="sortingOptions"
                  value={sortingOption}
                  onChange={handleSortingChange}
                  className="py-1.5 px-2 border border-gray-400 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-0"
                >
                  <option value="" disabled>
                    Select Sorting Type
                  </option>
                  <option value="high">Price High to Low</option>
                  <option value="low">Price Low to High</option>
                </select>
              </div>
            </div>
            {gridView === true ? (
              <ProductGridView products={sortedProducts} />
            ) : (
              <ProductListView products={sortedProducts} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopCategoryView;
