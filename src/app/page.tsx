"use client"

import BannerCarousel from "@/components/BannerCarousel";
import CategoryProductCarousel from "@/components/CategoryProductCarousel";
import FullBannerCarousel from "@/components/FullBannerCarousel";

export default function Home() {
  return (
    <main>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="m-1.5">
          <FullBannerCarousel />
          <CategoryProductCarousel title="Laptops" categorySlug="laptops" />
          <BannerCarousel />
          <CategoryProductCarousel title="Smartphones" categorySlug="smartphones" />
          <CategoryProductCarousel title="Mens Shoes" categorySlug="mens-shoes" />
        </div>
      </div>
    </main>
  );
}
