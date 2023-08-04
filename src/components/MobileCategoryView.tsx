import { getProducts } from "@/hooks/getProducts";
import React, { useState } from "react";
import ProductGridView from "./ProductGridView";
import ProductListView from "./ProductListView";
import Checkbox from "@/elements/Checkbox";

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

const MobileCategoryView = ({ slug }: { slug: string }) => {
  const { data, isLoading } = getProducts(slug);
  const [gridView, setGridView] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [sortingOption, setSortingOption] = useState("");
  const [toggleState, setToggleState] = useState(1);

  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<number[]>([]);
  const [excludeOutOfStock, setExcludeOutOfStock] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  const setView = () => {
    setGridView(!gridView);
  };

  const handleSortingChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortingOption(event.target.value);
  };

  const toggle = () => {
    setShowModal((prevShowModal) => !prevShowModal);
  };

  const toggleTab = (index: number): void => {
    setToggleState(index);
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

  const getUniqueBrandNames = (products: ProductType[]): string[] => {
    const brandSet = new Set<string>();
    products.forEach((product) => {
      brandSet.add(product.brand);
    });
    return Array.from(brandSet);
  };

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    setSelectedBrands(
      (prevSelectedBrands) =>
        checked
          ? [...prevSelectedBrands, value] // Add brand to the selected list
          : prevSelectedBrands.filter((brand) => brand !== value) // Remove brand from the selected list
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

  const applyFilters = (
    products: ProductType[],
    selectedBrands: string[],
    selectedRating: number[],
    selectedAvailability: boolean
  ): ProductType[] => {
    return products.filter((product) => {
      // Check if the product's brand is included in the selectedBrands array
      if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) {
        return false;
      }
  
      // Check if the product's rating is equal to or greater than the minimum selected rating
      if (
        selectedRating.length > 0 &&
        !selectedRating.some((rating) => product.rating >= rating)
      ) {
        return false;
      }
  
      // Check if the product is available based on the selectedAvailability value
      if (selectedAvailability && product.stock <= 0) {
        return false;
      }
  
      return true;
    });
  };
  

  const handleApplyFilters = () => {
    const filteredData = applyFilters(
      data?.products || [],
      selectedBrands,
      selectedRating,
      excludeOutOfStock
    );
    const sortedProducts = applySorting(filteredData, sortingOption);
    setFilteredProducts(sortedProducts);
    setShowModal(false); // Close the filter modal after applying filters
  };

  const uniqueBrands = getUniqueBrandNames(data?.products || []);
  const sortedProducts = applySorting(data?.products || [], sortingOption);

  const productsToRender = filteredProducts.length > 0 ? filteredProducts : sortedProducts;


  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="m-1.5">
          <div className="flex max-w-[1440px] w-full mx-auto">
            <div className="bg-white rounded w-full">
              <div className="p-2.5 flex flex-col gap-2.5">
                <div className="flex items-center justify-between">
                  <div className="font-medium text-lg capitalize">{slug}</div>
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
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggle}
                    className="flex items-center py-1.5 px-3 gap-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-0"
                  >
                    <div className="w-4 h-4 mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="fill-gray-700"
                        viewBox="0 0 32 32"
                      >
                        <path d="M12,25l6.67,6.67a1,1,0,0,0,.7.29.91.91,0,0,0,.39-.08,1,1,0,0,0,.61-.92V13.08L31.71,1.71A1,1,0,0,0,31.92.62,1,1,0,0,0,31,0H1A1,1,0,0,0,.08.62,1,1,0,0,0,.29,1.71L11.67,13.08V24.33A1,1,0,0,0,12,25ZM3.41,2H28.59l-10,10a1,1,0,0,0-.3.71V28.59l-4.66-4.67V12.67a1,1,0,0,0-.3-.71Z" />
                      </svg>
                    </div>
                    <div className="text-gray-900 text-sm">Filter</div>
                  </button>
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
              </div>
              <div>
                {gridView === true ? (
                  <ProductGridView products={productsToRender} />
                ) : (
                  <ProductListView products={productsToRender} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: showModal ? "block" : "none" }}
        className="fixed left-0 top-0 z-[999] h-full w-full bg-white"
      >
        <div className="flex h-full flex-col justify-between">
          <div className="py-4">
            <div className="px-4 flex items-center">
              <div onClick={toggle}>
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.556 7.847H1M7.45 1L1 7.877l6.45 6.817"
                    stroke="black"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  ></path>
                </svg>
              </div>
              <div className="text-base pl-4">Filters</div>
            </div>
          </div>
          <div className="grow">
            <div className="flex h-full flex-row">
              <div className="h-full w-36 bg-[#F5F5F5]">
                <button
                  className={
                    toggleState === 1
                      ? "w-full bg-white p-4 text-left text-sm"
                      : "w-full border-b border-[#D8D8D8] p-4 text-left text-sm font-normal"
                  }
                  onClick={() => toggleTab(1)}
                >
                  Brands
                </button>
                <button
                  className={
                    toggleState === 2
                      ? "w-full bg-white p-4 text-left text-sm"
                      : "w-full border-b border-[#D8D8D8] p-4 text-left text-sm font-normal"
                  }
                  onClick={() => toggleTab(2)}
                >
                  Customer Rating
                </button>
                <button
                  className={
                    toggleState === 3
                      ? "w-full bg-white p-4 text-left text-sm"
                      : "w-full border-b border-[#D8D8D8] p-4 text-left text-sm font-normal"
                  }
                  onClick={() => toggleTab(3)}
                >
                  Availability
                </button>
              </div>
              <div className="h-full grow">
                <div className={toggleState === 1 ? "block" : "hidden"}>
                  <div className="px-4">
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
                <div className={toggleState === 2 ? "block" : "hidden"}>
                  <div className="px-4">
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
                <div className={toggleState === 3 ? "block" : "hidden"}>
                  <div className="px-4">
                    <Checkbox
                      labelTitle="Exclude Out of Stock"
                      checked={excludeOutOfStock}
                      onChange={handleExcludeOutOfStockChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 flex justify-end">
            <button
              className="bg-[#ff5800] px-16 py-3 rounded-sm text-white text-sm"
              onClick={handleApplyFilters}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileCategoryView;
