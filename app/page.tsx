// import Image from "next/image";
// import { stripe } from "@/lib/stripe";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Carousel } from "@/components/carousel";
// import { ProductList } from "@/components/product-list";
// export default async function Home() {
//   const products = await stripe.products.list({
//     expand: ["data.default_price"],
//     limit: 5,
//   });

//   return (
//     <div>
//       <section className="rounded bg-neutral-100 py-8 sm:py-12">
//         <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
//           <div className="max-w-md space-y-4">
//             <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
//               Welcome to My Ecommerce
//             </h2>
//             <p className="text-neutral-600">
//               Discover the latest products at the best prices.
//             </p>
//             <Button
//               asChild
//               variant="default"
//               className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
//             >
//               <Link
//                 href="/products"
//                 className="inline-flex items-center justify-center rounded-full px-6 py-3"
//               >
//                 Browse All Products
//               </Link>
//             </Button>
//           </div>
//           <Image
//             alt="Hero Image"
//             src={products.data[0].images[0]}
//             className="rounded"
//             width={450}
//             height={450}
//           />
//         </div>
//       </section>
//       <section className="py-8">
//         <Carousel products={products.data} />
//       </section>
//       <section>
//         <div className="pb-8">
//           <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground text-center mb-8">
//             All Products
//           </h1>
//           <ProductList products={products.data} />
//         </div>
//       </section>

//       {/* Thangka Information Section */}
//       <section className="w-full py-12 bg-gray-50">
//         <div className="w-full bg-white py-8 px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-7xl">
//             <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
//               The Art of Thangka
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">What is Thangka?</h3>
//                   <p className="text-gray-700">
//                     A thangka is a traditional Buddhist painting on cotton or silk appliqué,
//                     originating from Nepal and Tibet. These sacred artworks typically depict
//                     Buddhist deities, mandalas, or spiritual scenes, framed by brocade textiles.
//                   </p>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Sacred Symbolism</h3>
//                   <p className="text-gray-700">
//                     Every color, gesture, and element in a thangka carries deep spiritual meaning.
//                     Artists follow strict iconographic rules to maintain religious accuracy, with
//                     some paintings taking months to complete using mineral pigments and gold leaf.
//                   </p>
//                 </div>
//               </div>

//               <div className="space-y-6">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Spiritual Functions</h3>
//                   <ul className="list-disc pl-6 space-y-2 text-gray-700">
//                     <li>Meditation aids for visualizing deities</li>
//                     <li>Teaching tools for Buddhist philosophy</li>
//                     <li>Objects of devotion in rituals</li>
//                     <li>Historical records of Buddhist lineages</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h3 className="text-xl font-semibold mb-3">Historical Journey</h3>
//                   <p className="text-gray-700">
//                     Introduced to Tibet by Nepalese Princess Bhrikuti in the 7th century,
//                     thangkas evolved through cultural exchanges while maintaining their
//                     spiritual essence. Their scroll format made them ideal for nomadic monks
//                     spreading Dharma across the Himalayas.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-black text-white py-8">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               <h3 className="text-xl font-bold">ST Store</h3>
//               <p className="text-gray-400 text-sm mt-2">
//                 Preserving traditional spiritual thangka
//               </p>
//             </div>
//             <div className="flex space-x-6">
//               <Link href="/">Home</Link>
//               <Link href="/products" className="text-gray-400 hover:text-white transition">
//                 Products
//               </Link>
//               <Link href="/checkout" className="text-gray-400 hover:text-white transition">
//                 Checkout
//               </Link>
//               <Link href="/contact" className="text-gray-400 hover:text-white transition">
//                 Contact
//               </Link>
//               <div className="hidden md:flex space-x-6">

//         </div>
//             </div>
//           </div>
//           <div className="border-t border-gray-800 mt-6 pt-6 text-center text-gray-400 text-sm">
//             <p>© {new Date().getFullYear()} ST Store. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
import Image from "next/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { ProductList } from "@/components/product-list";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 20,
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="rounded-lg bg-gradient-to-r from-neutral-50 to-neutral-100 py-12 sm:py-16 md:py-20">
        <div className="container mx-auto grid grid-cols-1 items-center justify-items-center gap-10 px-6 sm:px-8 md:grid-cols-2 lg:px-12">
          <div className="max-w-lg space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
              Discover Authentic Thangka Art
            </h1>
            <p className="text-lg text-neutral-600 md:text-xl">
              Sacred Buddhist paintings crafted with traditional techniques and
              spiritual devotion.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-lg font-medium transition-colors duration-200"
            >
              <Link href="/products">Explore Our Collection</Link>
            </Button>
          </div>
          <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-xl shadow-xl">
            <Image
              alt="Featured Thangka Art"
              src={products.data[0].images[0]}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Featured Collections
          </h2>
          <Carousel products={products.data} />
        </div>
      </section>

      {/* All Products Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Sacred Art Collection
          </h2>
          <ProductList products={products.data} />
        </div>
      </section>

      {/* Thangka Information Section */}
      <section className="w-full py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 sm:p-10 lg:p-12">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              The Sacred Art of Thangka
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-700">
                    What is Thangka?
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Thangka paintings are intricate Buddhist artworks on cotton
                    or silk, originating from the Himalayan regions. These
                    sacred scroll paintings serve as visual representations of
                    Buddhist teachings, depicting deities, mandalas, and
                    spiritual narratives with meticulous detail and profound
                    symbolism.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-700">
                    Sacred Symbolism
                  </h3>
                  {/* <p className="text-gray-700 leading-relaxed">
                    Every element in a thangka - from the deities&apos; postures to the color palette - embodies deep spiritual meaning. 
                    Master artisans follow centuries-old iconometric guidelines, using natural mineral pigments and genuine gold leaf 
                    to create these devotional works that often require months of dedicated craftsmanship.
                  </p> */}
                  <p className="text-gray-700 leading-relaxed">
                    Every element in a thangka - from the deities&apos; postures
                    to the color palette - embodies deep spiritual meaning.
                    Master artisans follow centuries-old iconometric guidelines,
                    using natural mineral pigments and genuine gold leaf to
                    create these devotional works that often require months of
                    dedicated craftsmanship.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-700">
                    Spiritual Functions
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>
                        Meditation aids for visualizing enlightened beings
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>
                        Teaching tools illustrating Buddhist cosmology
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Sacred objects for ritual ceremonies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span>Historical records of spiritual lineages</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-amber-700">
                    Historical Journey
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    With roots in 7th century Nepal, thangka painting flourished
                    through cultural exchanges along the Silk Road. The portable
                    scroll format made these sacred artworks ideal for nomadic
                    monks spreading Dharma across the Himalayan plateau,
                    preserving spiritual traditions through generations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-amber-500">
                Sacred Thangka Art
              </h3>
              <p className="text-gray-400 mb-4 leading-relaxed">
                Preserving ancient Buddhist art traditions with authenticity and
                devotion.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/share/1BgumDdvfR/"
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/david187in?igsh=MWM1OWxnMmlrMWlnNA=="
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Shop</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    All Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    Best Sellers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Information
              </h3>
              {/* <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Blog</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Shipping Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Returns & Exchanges</Link></li>
              </ul> */}
              <ul className="space-y-2">
                <li className="text-gray-400">AboutUs</li>
                <li className="text-gray-400">Blog</li>
                <li className="text-gray-400">Shipping</li>
                <li className="text-gray-400">Return</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">US</li>
                <li className="text-gray-400">6362270697</li>
                <li className="text-gray-400">Lamasaphal123@gamil.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Sacred Thangka Art. All rights
              reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-amber-500 text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-gray-500 hover:text-amber-500 text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
