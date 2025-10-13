// // export const navData = [
// //   {
// //     name: "Face",
// //     subcategories: [
// //       { name: "Face Wash", slug: "face-wash" },
// //       { name: "Sunscreen", slug: "sunscreen" },
// //       { name: "Face Mask", slug: "face-mask" },
// //     ],
// //   },
// //   {
// //     name: "Hair",
// //     subcategories: [
// //       { name: "Shampoo", slug: "shampoo" },
// //       { name: "Conditioner", slug: "conditioner" },
// //       { name: "Hair Oil", slug: "hair-oil" },
// //     ],
// //   },
// //   {
// //     name: "Body",
// //     subcategories: [
// //       { name: "Body Lotion", slug: "body-lotion" },
// //       { name: "Body Wash", slug: "body-wash" },
// //     ],
// //   },
// // ];

// // // data/navData.ts
// // export const navData = [
// //   {
// //     name: "Face",
// //     link: "/product-category/skin",
// //     subcategories: [
// //       { name: "Face Wash", slug: "face-wash" },
// //       { name: "Sunscreen", slug: "sunscreen" },
// //       { name: "Face Cream", slug: "face-cream" },
// //       { name: "Serum", slug: "serum" },
// //       { name: "Sheet Mask", slug: "sheet-mask" },
// //     ],
// //   },
// //   {
// //     name: "Hair",
// //     link: "/product-category/hair",
// //     subcategories: [
// //       { name: "Hair Oil", slug: "hair-oil" },
// //       { name: "Shampoo", slug: "shampoo" },
// //       { name: "Conditioner", slug: "conditioner" },
// //       { name: "Hair Mask", slug: "hair-mask" },
// //     ],
// //   },
// //   {
// //     name: "Makeup",
// //     link: "/product-category/makeup-products",
// //     subcategories: [
// //       { name: "Lipstick", slug: "lipstick" },
// //       { name: "Kajal", slug: "kajal" },
// //       { name: "Foundation", slug: "foundation" },
// //       { name: "Compact", slug: "compact" },
// //     ],
// //   },
// //   {
// //     name: "Baby",
// //     link: "/product-category/for-babies",
// //     subcategories: [
// //       { name: "Baby Shampoo", slug: "baby-shampoo" },
// //       { name: "Baby Lotion", slug: "baby-body-lotion" },
// //       { name: "Baby Oil", slug: "baby-oil" },
// //       { name: "Diaper Cream", slug: "diaper-rash-cream" },
// //     ],
// //   },
// //   {
// //     name: "Body",
// //     link: "/product-category/body",
// //     subcategories: [
// //       { name: "Body Wash", slug: "body-wash" },
// //       { name: "Body Lotion", slug: "body-lotion" },
// //       { name: "Body Scrub", slug: "body-scrub" },
// //     ],
// //   },
// // ];

// export const navData = [
//   {
//     title: "Face",
//     link: "/face",
//     subcategories: [
//       { name: "Face Wash", link: "/face/face-wash" },
//       { name: "Sunscreen", link: "/face/sunscreen" },
//       { name: "Moisturizer", link: "/face/moisturizer" },
//     ],
//   },
//   {
//     title: "Hair",
//     link: "/hair",
//     subcategories: [
//       { name: "Shampoo", link: "/hair/shampoo" },
//       { name: "Conditioner", link: "/hair/conditioner" },
//     ],
//   },
//   {
//     title: "Body",
//     link: "/body",
//     subcategories: [
//       { name: "Body Lotion", link: "/body/lotion" },
//       { name: "Body Wash", link: "/body/wash" },
//     ],
//   },
//   {
//     title: "Baby",
//     link: "/baby",
//     subcategories: [
//       { name: "Baby Lotion", link: "/baby/lotion" },
//       { name: "Baby Shampoo", link: "/baby/shampoo" },
//     ],
//   },
// ];

// src/data/navData.js
export const subCategories = {
  face: [
    { name: "Face Wash", slug: "face-wash" },
    { name: "Sunscreen", slug: "sunscreen" },
    { name: "Moisturizer", slug: "moisturizer" },
    { name: "Face Mask", slug: "face-mask" },
  ],
  hair: [
    { name: "Shampoo", slug: "shampoo" },
    { name: "Conditioner", slug: "conditioner" },
    { name: "Hair Oil", slug: "hair-oil" },
    { name: "Hair Serum", slug: "hair-serum" },
  ],
  body: [
    { name: "Body Wash", slug: "body-wash" },
    { name: "Body Lotion", slug: "body-lotion" },
    { name: "Scrub", slug: "scrub" },
  ],
  baby: [
    { name: "Baby Shampoo", slug: "baby-shampoo" },
    { name: "Baby Lotion", slug: "baby-lotion" },
    { name: "Wipes", slug: "wipes" },
  ],
  makeup: [
    { name: "BB Cream", slug: "bb-cream" },
    { name: "Foundation", slug: "foundation" },
    { name: "Lip Balm", slug: "lip-balm" },
  ],
  combos: [
    { name: "Face Combo", slug: "face-combo" },
    { name: "Hair Combo", slug: "hair-combo" },
  ],
  "new-launches": [{ name: "Latest Products", slug: "latest" }],
  ingredients: [
    { name: "Vitamin C", slug: "vitamin-c" },
    { name: "Tea Tree", slug: "tea-tree" },
  ],
  "all-products": [{ name: "View All", slug: "" }],
  blog: [{ name: "Beauty Tips", slug: "beauty-tips" }],
  "plant-goodness": [{ name: "About", slug: "about" }],
  "store-locator": [{ name: "Find Store", slug: "find-store" }],
};
