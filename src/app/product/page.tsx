import React from "react";

const products = [
  {
    image: "/pp1.avif",
    title: "Sephora",
    description: " sweet, juicy, and slightly floral scent that's similar to the smell of fresh, ripe peaches.",
  },
  {
    image: "/product2.jpg",
    title: "Brown Orchid",
    description: "Brown Orchid is a luxurious and sensual fragrance reminiscent of the iconic scents of the past. ",
  },
  {
    image: "/product3.webp",
    title: "Yellow Diamond",
    description: "A fragrance reminiscent of the magical, warm feeling of the sun on the skin and the intoxicating light of summer sunsets.",
  },
  {
    image: "/product4.webp",
    title: "Nitro Red",
    description: "It's a bold woodsy scent that's warm and spicy. Some of the notes include cherry, carnation, patchouli, rose, hyacinth, sandalwood, and Amber.",
  },
  {
    image: "/product5.avif",
    title: "Dylan purple",
    description: "This exquisite perfume is specially crafted for women who embrace their femininity and exude elegance.",
  },
  {
    image: "/product6.avif",
    title: "Jasmine",
    description: "A fragrant bouquet of jasmine in full bloom and pure white rose encounters the fresh and aromatic scent of bamboo wood.",
  },
];

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white-100 flex flex-col items-center py-10">
      <h1 className="text-5xl text-pink-900 font-bold mb-7">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="w-64 h-80 perspective-1000">
            <div className="flip-card-inner relative h-full w-full transform-style-3d transition-transform duration-700 ease-in-out group-hover:rotate-y-180">
              
              <div className="flip-card-front absolute inset-0 bg-white flex items-center justify-center shadow-lg rounded-lg backface-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              
              <div className="flip-card-back absolute inset-0 bg-pink-200 text-pink-900 p-4 rounded-lg transform rotate-y-180 backface-hidden shadow-lg flex flex-col justify-center items-center">
                <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
                <p className="text-md">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;



