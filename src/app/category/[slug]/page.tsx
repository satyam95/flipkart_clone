"use client";

import React from "react";
import DesktopCategoryView from "@/components/DesktopCategoryView";
import useViewport from "@/hooks/useViewport";
import MobileCategoryView from "@/components/MobileCategoryView";

const Category = ({ params }: { params: { slug: string } }) => {
  const categorySlug = params.slug;
  const { width } = useViewport();
  const isMobile = width > 768;

  return (
    <main>
      {isMobile ? (
        <DesktopCategoryView slug={categorySlug} />
      ) : (
        <MobileCategoryView slug={categorySlug} />
      )}
    </main>
  );
};

export default Category;
