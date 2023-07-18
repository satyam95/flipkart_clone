"use client";

import BannerCarousel from "@/components/BannerCarousel";
import CategoryProductCarousel from "@/components/CategoryProductCarousel";
import FullBannerCarousel from "@/components/FullBannerCarousel";

export default function Home() {

  return (
    <main>
      <div className="max-w-[1440px] w-full mx-auto">
        <div className="m-1.5">
          <FullBannerCarousel />
          <CategoryProductCarousel />
          <BannerCarousel />
          <CategoryProductCarousel />
          <CategoryProductCarousel />
        </div>
      </div>
      
    </main>
  );
}
