import logo from './logo.svg';
import './App.css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
  
 
function App() {
  return (
    <>
    <section>
  <nav
    class=" z-[100] sticky -top-10 lg:-top-12 bg-white bg-opacity-30  backdrop-blur-md"
  >
    <div
      class="  py-3 lg:py-4 text-xs text-white text-center items-center bg-black"
    >
      <div>All India free Shipping</div>
    </div>
    <div
      class="grid grid-cols-3 gap-6 px-5 py-[18px] lg:py-[34px] lg:px-12 md:text-gray-900 text-gray-600 "
    >
      <div class="flex justify-start text-xl    items-center">
        <a href=""><i class="fa-solid fa-bars cursor-pointer " /></a>

        <div class="flex md:hidden px-4 items-center">
          <a href="http://localhost:5173/search"
            ><i class="fa-solid fa-magnifying-glass cursor-pointer " /></a
          >
        </div>
      </div>

      <div class="flex  justify-center    cursor-pointer items-center">
        <a href="http://localhost:5173/home-page">
          <img
            class=" h-4 w-auto lg:h-auto lg:w-auto "
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/KILORY_1_d81261d3-c74a-4844-8b29-f1c51b569843.png?v=1659708313&width=225"
            alt="brandLoog"
            id="landingPage"
          />
        </a>
      </div>

      <div class="flex justify-end gap-5 ">
        <div class=" gap-2   hidden lg:flex items-center">
          <span class="font-bold text-xs pl-2 cursor-pointer ">English</span>
          <svg
            role="presentation"
            focusable="false"
            width="10"
            height="7"
            class="icon icon-chevron-bottom  cursor-pointer "
            viewBox="0 0 10 7"
          >
            <path
              d="m1 1 4 4 4-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </div>

        <div class="flex gap-7 text-xl items-center">
          <div class="hidden md:flex ">
            <a href="http://localhost:5173/search"
              ><i class="fa-solid fa-magnifying-glass cursor-pointer " /></a
            >
          </div>
          <div class="hidden md:flex ">
            <a href="http://localhost:5173/login"
              ><i class="fa-regular fa-user cursor-pointer " /></a
            >
          </div>
          <div class="flex ">
            <a href="http://localhost:5173/cart"
              ><i class="fa-solid fa-bag-shopping cursor-pointer " /></a
            >
          </div>
        </div>
      </div>
    </div>
  </nav>
  <body class="bg-gray-100 ">


    

    {/* <!-- TOP BRANDS DISPLAY 1 HEADING --> */}

    <h1
      class="text-3xl font-bold text-gray-900 px-5 pt-12 pb-9 sm:text-4xl sm:font-bold sm:px-12 sm:pt-20 sm:pb-2"
    >
      SHOP BY CATEGORY
    </h1>
    <div
      class="grid grid-cols-2 gap-1 px-5 pb-4 md:grid md:grid-cols-2 md:px-12 md:gap-2 md:text-center     lg:grid lg:grid-cols-3 lg:gap-2 lg:text-center  xl:grid xl:grid-cols-4 xl:gap-2 xl:text-center xl:py-10  "
    >
      <div class="col-span-1 mb-5 h-auto w-full  overflow-hidden ">
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/07_pendant_set_1200x1400_d25dc3e0-74de-4d53-87d2-9ac926552e6f.jpg?v=1670922583&width=300"
          alt="brand1"
        />
      </div>
      <div class="col-span-1 mb-5 h-auto w-full  overflow-hidden ">
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/03_ring1200x1400_12a4bab9-126c-4792-a428-0318a45bec70.jpg?v=1670922603&width=300"
          alt="brand2"
        />
      </div>
      <div
        class="col-span-1 mb-5 h-auto w-full hidden sm:flex  overflow-hidden "
      >
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/05_necklace_1200x1400_e474b87d-5fbb-4d5e-b5ff-1acc9f38128a.jpg?v=1670922627&width=300"
          alt="brand3"
        />
      </div>
      <div
        class="col-span-1 mb-5 h-auto w-full hidden sm:flex overflow-hidden "
      >
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/05_necklace_1200x1400_e474b87d-5fbb-4d5e-b5ff-1acc9f38128a.jpg?v=1670922627&width=300"
          alt="brand4"
        />
      </div>
    </div>
    <div
      class="grid grid-cols-1 gap-2 px-5 pt-5 pb-7 md:pt-5 md:pb-12 lg:grid-cols-2 lg:gap-2 lg:px-12"
    >
      <div class="flex justify-start">
        <h1 class="text-3xl font-bold sm:text-4xl text-gray-900  ">
          COLLECTION LIST
        </h1>
      </div>

      <div
        class="flex gap-3 justify-start items-center lg:justify-end text-inline"
      >
        <h1 class="text-sm font-normal   ">View all</h1>
        <i
          class="fa-solid fa-circle-chevron-right cursor-pointer    text-xl   text-gray-300   rounded-full outline-none  normal-case ring-2 ring-transparent   transition duration-300 hover:text-black"
          id="email-icon"
        />
      </div>
    </div>

    <div
      class="col-span-1 grid grid-cols-1 gap-0 px-5 pb-7  md:pb-5 md:grid-cols-2 md:gap-5  md:px-12  items-start"
    >
      <div class="col-span-1 mb-5 h-auto w-auto relative  overflow-hidden ">
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/1229.jpg?v=1670841714&width=500"
          alt="brand1"
        />

        <div
          class="grid grid-cols-1 top-5 left-28 lg:top-5 lg:left-48 absolute "
        >
          <h1 class="text-base font-bold  text-white flex justify-center   ">
            Dancing Diamonds Collection
          </h1>
          <div class="">
            <i
              class="fa-solid fa-circle-chevron-right  flex justify-center text-4xl cursor-pointer   pt-5   text-white   rounded-full outline-none  normal-case ring-2 ring-transparent   transition duration-300 hover:text-black"
              id="email-icon"
            />
          </div>
        </div>
      </div>
      <div class="col-span-1 mb-5 h-auto w-auto relative  overflow-hidden ">
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/1229.jpg?v=1670841714&width=500"
          alt="brand2"
        />
        <div
          class="grid grid-cols-1 top-5 left-36 lg:top-5 lg:left-56 absolute "
        >
          <h1 class="text-base font-bold  text-white flex justify-center   ">
            Evil Eye Collection
          </h1>
          <div class="">
            <i
              class="fa-solid fa-circle-chevron-right  flex justify-center text-4xl cursor-pointer  pt-5    text-white  rounded-full outline-none  normal-case ring-2 ring-transparent   transition duration-300 hover:text-black"
              id="email-icon"
            />
          </div>
        </div>
      </div>
      <div class="col-span-1 mb-5 h-auto w-auto relative  overflow-hidden ">
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/1229.jpg?v=1670841714&width=500"
          alt="brand3"
        />
        <div
          class="grid grid-cols-1 top-5 left-36 lg:top-5 lg:left-56 absolute "
        >
          <h1 class="text-base font-bold  text-white flex justify-center   ">
            Pearl Collection
          </h1>
          <div class="">
            <i
              class="fa-solid fa-circle-chevron-right  flex justify-center text-4xl cursor-pointer   pt-5   text-white   rounded-full outline-none  normal-case ring-2 ring-transparent   transition duration-300 hover:text-black"
              id="email-icon"
            />
          </div>
        </div>
      </div>
      <div class="col-span-1 mb-5 h-auto w-auto relative  overflow-hidden ">
        <img
          class="h-full w-full object-cover object-center rounded-lg"
          src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/1229.jpg?v=1670841714&width=500"
          alt="brand4"
        />
        <div
          class="grid grid-cols-1 top-5 left-36 lg:top-5 lg:left-56 absolute "
        >
          <h1 class="text-base font-bold  text-white flex justify-center   ">
            Solitaire collection
          </h1>
          <div class="">
            <i
              class="fa-solid fa-circle-chevron-right  flex justify-center text-4xl cursor-pointer  pt-5    text-white  rounded-full outline-none  normal-case ring-2 ring-transparent   transition duration-300 hover:text-black"
              id="email-icon"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div
        class="grid grid-cols-1 gap-2 px-5 pb-8  lg:pb-0 lg:grid-cols-2 lg:gap-2 lg:px-12"
      >
        <div class="flex justify-start">
          <h1 class="text-3xl sm:text-4xl text-gray-900 font-bold   lg:py-10">
            BEST SELLERS
          </h1>
        </div>

        <div
          class="flex gap-3 justify-start items-center lg:justify-end text-inline"
        >
          <h1 class="text-sm font-normal  lg:py-10 ">View all</h1>
          <i
            class="fa-solid fa-circle-chevron-right  cursor-pointer  lg:py-10  text-xl   text-gray-300    rounded-full outline-none  normal-case ring-2 ring-transparent   transition duration-300 hover:text-black"
            id="email-icon"
          />
        </div>
      </div>
      <div
        class="grid grid-cols-2 gap-2  px-5 lg:px-12  items-center   lg:grid lg:grid-cols-3 lg:gap-5 lg:text-center lg:pt-4 lg:pb-10 xl:grid xl:grid-cols-4 xl:gap-6 xl:text-center  bg-gray-100"
      >
        {/* <!-- svelte-ignore a11y-no-noninteractive-tabindex --> */}
        <div>
          <div
            class=" rounded-lg bg-white  col-span-1 lg:mb-5 h-auto w-auto  overflow-hidden"
          >
            <div class="relative ">
              <a href="single-product.html" tabindex="0">
                <img
                  class="h-auto w-auto object-cover object-center"
                  src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/Home_page_02mobile_8ccd499a-03b0-464a-8441-1c1a4f86bb3d.jpg?v=1671602964&width=1200"
                  alt="Product Images"
                />
              </a>
              <div class=" ">
                <div
                  class="bg-red-600 text-white text-xs  top-2 left-2 absolute px-2 py-0.5 rounded-xl "
                >
                  Save 37%
                </div>
              </div>
              <div
                class=" transform transition-all hover:-translate-y-full opacity-0 hover:opacity-100  bottom-2 absolute "
              >
                <ul class="flex flex-wrap  text-right ">
                  <li
                    class="transform transition-all hover:scale-125 hover:rounded-full outline-none cursor-pointer normal-case bg-black text-white py-2 px-6 rounded-full text-sm font-bol mr-5"
                  >
                    <a href="cart.html" tabindex="0">+ Quick Add</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-left px-5 py-5">
              <div class="inner">
                <div class=" grid grid-cols-5">
                  <div class="col-span-4 pr-28">
                    <span class=" text-xs  text-gray-500">KILORY</span>
                  </div>
                  <div class="hidden lg:flex ">
                    <span class=" text-xs   text-black">4.0</span>
                    <i class="fas fa-star text-amber-400 text-xs" />
                  </div>
                </div>
                <h5 class="text-black text-sm font-semibold">
                  <a href="single-product.html" tabindex="0"
                    >Powerful Evil Eye Diamond Necklace</a
                  >
                </h5>
                <div class="">
                  <span class="text-xs font-semibold text-red-500"
                    >Rs. 1,699.00
                    <span
                      class="text-xs font-semibold line-through  text-gray-500"
                      >Rs. 2,699.00</span
                    >
                  </span>
                </div>
                <div class="lg:hidden flex pt-1 gap-2">
                  <span class=" text-xs   text-black">4.0</span>
                  <i class="fas fa-star text-amber-400 text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div
            class=" rounded-lg bg-white pb-10col-span-1 lg:mb-5 h-auto w-auto  overflow-hidden "
          >
            <div class="relative ">
              <a href="single-product.html" tabindex="0">
                <img
                  class="h-auto w-auto object-cover object-center "
                  src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/Home_page_02mobile_8ccd499a-03b0-464a-8441-1c1a4f86bb3d.jpg?v=1671602964&width=1200"
                  alt="Product Images"
                />
              </a>
              <div class=" ">
                <div
                  class="bg-red-600 text-white text-xs top-2 left-2 absolute px-2 py-0.5 rounded-xl "
                >
                  Save 18%
                </div>
              </div>
              <div
                class=" transform transition-all hover:-translate-y-full opacity-0 hover:opacity-100  bottom-2 absolute "
              >
                <ul class="flex flex-wrap  text-right ">
                  <li
                    class="transform transition-all hover:scale-125 hover:rounded-full outline-none cursor-pointer normal-case bg-black text-white py-2 px-6 rounded-full text-sm font-bol mr-5"
                  >
                    <a href="cart.html" tabindex="0">+ Quick Add</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-left px-5 py-5">
              <div class="inner">
                <div class=" grid grid-cols-5">
                  <div class="col-span-4 pr-28">
                    <span class=" text-xs  text-gray-500">KILORY</span>
                  </div>
                  <div class="hidden lg:flex">
                    <span class=" text-xs   text-black">4.0</span>
                    <i class="fas fa-star text-amber-400 text-xs" />
                  </div>
                </div>
                <h5 class="text-black text-sm font-semibold">
                  <a href="single-product.html" tabindex="0"
                    >Powerful Evil Eye Diamond Necklace</a
                  >
                </h5>
                <div class="">
                  <span class="text-xs font-semibold text-red-500"
                    >Rs. 1,799.00
                    <span
                      class="text-xs font-semibold line-through  text-gray-500"
                      >Rs. 2,199.00</span
                    >
                  </span>
                </div>
                <div class="lg:hidden flex pt-1 gap-2">
                  <span class=" text-xs   text-black">4.0</span>
                  <i class="fas fa-star text-amber-400 text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div
            class=" rounded-lg bg-white pb-10col-span-1 lg:mb-5 h-auto w-auto  overflow-hidden"
          >
            <div class="relative ">
              <a href="single-product.html" tabindex="0">
                <img
                  class="h-auto w-auto object-cover object-center"
                  src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/Home_page_02mobile_8ccd499a-03b0-464a-8441-1c1a4f86bb3d.jpg?v=1671602964&width=1200"
                  alt="Product Images"
                />
              </a>
              <div class=" ">
                <div
                  class="bg-red-600 text-white text-xs top-2 left-2 absolute px-2 py-0.5 rounded-xl "
                >
                  Save 10%
                </div>
              </div>
              <div
                class=" transform transition-all hover:-translate-y-full opacity-0 hover:opacity-100  bottom-2 absolute "
              >
                <ul class="flex flex-wrap  text-right ">
                  <li
                    class="transform transition-all hover:scale-125 hover:rounded-full outline-none cursor-pointer normal-case bg-black text-white py-2 px-6 rounded-full text-sm font-bol mr-5"
                  >
                    <a href="cart.html" tabindex="0">+ Quick Add</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-left px-5 py-5">
              <div class="inner">
                <div class=" grid grid-cols-5">
                  <div class="col-span-4 pr-28">
                    <span class=" text-xs   text-gray-500">KILORY</span>
                  </div>
                  <div class="hidden lg:flex">
                    <span class=" text-xs   text-black">4.0</span>
                    <i class="fas fa-star text-amber-400 text-xs" />
                  </div>
                </div>
                <h5 class="text-black text-sm font-semibold">
                  <a href="single-product.html" tabindex="0"
                    >Powerful Evil Eye Diamond Necklace</a
                  >
                </h5>
                <div class="">
                  <span class="text-xs font-semibold text-red-500"
                    >Rs. 1,799.00
                    <span
                      class="text-xs font-semibold line-through  text-gray-500"
                      >Rs. 1,999.00</span
                    >
                  </span>
                </div>
                <div class="lg:hidden flex pt-1 gap-2">
                  <span class=" text-xs   text-black">4.0</span>
                  <i class="fas fa-star text-amber-400 text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="">
          <div
            class=" rounded-lg bg-white pb-10col-span-1 lg:mb-5 h-auto w-auto  overflow-hidden"
          >
            <div class="relative ">
              <a href="single-product.html" tabindex="0">
                <img
                  class="h-auto w-auto object-cover object-center"
                  src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/Home_page_02mobile_8ccd499a-03b0-464a-8441-1c1a4f86bb3d.jpg?v=1671602964&width=1200"
                  alt="Product Images"
                />
              </a>
              <div class=" ">
                <div
                  class="bg-red-600 text-white text-xs top-2 left-2 absolute px-2 py-0.5 rounded-xl "
                >
                  Save 25%
                </div>
              </div>
              <div
                class=" transform transition-all hover:-translate-y-full opacity-0 hover:opacity-100  bottom-2 absolute "
              >
                <ul class="flex flex-wrap  text-right ">
                  <li
                    class="transform transition-all hover:scale-125 hover:rounded-full outline-none cursor-pointer normal-case bg-black text-white py-2 px-6 rounded-full text-sm font-bol mr-5"
                  >
                    <a href="cart.html" tabindex="0">+ Quick Add</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="text-left px-5 py-5">
              <div class="inner">
                <div class=" grid grid-cols-5">
                  <div class="col-span-4 pr-28">
                    <span class=" text-xs  text-gray-500">KILORY</span>
                  </div>
                  <div class="hidden lg:flex">
                    <span class=" text-xs   text-black">4.0</span>
                    <i class="fas fa-star text-amber-400 text-xs" />
                  </div>
                </div>
                <h5 class="text-black text-sm font-semibold">
                  <a href="single-product.html" tabindex="0"
                    >Powerful Evil Eye Diamond Necklace</a
                  >
                </h5>
                <div class="">
                  <span class="text-xs font-semibold text-red-500"
                    >Rs. 1,499.00
                    <span
                      class="text-xs font-semibold line-through  text-gray-500"
                      >Rs. 1,999.00</span
                    >
                  </span>
                </div>
                <div class="lg:hidden flex pt-1 gap-2">
                  <span class=" text-xs   text-black">4.0</span>
                  <i class="fas fa-star text-amber-400 text-xs" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:flex hidden">
      <div
        class="grid grid-cols-2  grid-rows-5 gap-2 lg:max-h-[900px] lg:max-w-full lg:grid lg:grid-cols-4  lg:grid-rows-3 lg:gap-5 py-5 px-5 lg:lg:px-12  "
      >
        <div class="  lg:col-span-2 lg:row-span-3  ">
          <img
            class="h-full w-full object-fill  rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/Home_page_02mobile_8ccd499a-03b0-464a-8441-1c1a4f86bb3d.jpg?v=1671602964&width=1200"
            alt=""
            id="landingPage"
          />
        </div>
        <div class=" col-span-1 row-span-1 ">
          <img
            class="h-full w-full object-cover  rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/10off_15x15_c217594b-4d03-4a60-98fa-01ab097ae3b3.jpg?v=1672387474&width=700"
            alt=""
            id="landingPage"
          />
        </div>
        <div class=" col-span-1 row-span-1 ">
          <img
            class="h-full w-full object-cover  rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/300015x15.jpg?v=1672387528&width=700"
            alt=""
            id="landingPage"
          />
        </div>
        <div class=" col-span-2 row-span-2 ">
          <img
            class="h-full w-full object-cover  rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/kilory_1000x1500_374501a9-0968-4ce4-aa79-329ed7f24fc2.jpg?v=1673415132&width=700"
            alt=""
            id="landingPage"
          />
        </div>
      </div>
    </div>
    <div class="lg:hidden flex">
      <div
        class="grid grid-cols-2  grid-rows-5 gap-2 max-h-[670px] max-w-full lg:grid lg:grid-cols-4  lg:grid-rows-3 lg:gap-5 py-5 px-5 lg:px-12 "
      >
        <div class="  col-span-2 row-span-2  rounded-lg ">
          <img
            class="rounded-lg h-full w-full object-cover "
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/Home_page_02mobile_8ccd499a-03b0-464a-8441-1c1a4f86bb3d.jpg?v=1671602964&width=1200"
            alt=""
            id="landingPage"
          />
        </div>
        <div class=" col-span-1 row-span-1 ">
          <img
            class="h-full w-full object-cover  rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/10off_15x15_c217594b-4d03-4a60-98fa-01ab097ae3b3.jpg?v=1672387474&width=600"
            alt=""
            id="landingPage"
          />
        </div>
        <div class=" col-span-1 row-span-1  ">
          <img
            class=" h-full w-full object-cover rounded-lg"
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/300015x15.jpg?v=1672387528&width=700"
            alt=""
            id="landingPage"
          />
        </div>
        <div class=" col-span-2 row-span-2 ">
          <img
            class="  h-full w-full object-cover rounded-lg "
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/kilory_1000x1500_374501a9-0968-4ce4-aa79-329ed7f24fc2.jpg?v=1673415132&width=700"
            alt=""
            id="landingPage"
          />
        </div>
      </div>
    </div>

    <div class=" py-5 rounded-lg hidden lg:flex">
      <img
        class="h-full w-full"
        src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/bracelet.jpg?v=1671255380&width=1400"
        alt=""
        id="landingPage"
      />
    </div>
    <div class=" py-5 rounded-lg lg:hidden flex">
      <img
        class="h-full w-full"
        src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/bracelet_m.jpg?v=1671255852&width=1200"
        alt=""
        id="landingPage"
      />
    </div>
    <div class="flex justify-center py-8">
      <div class="text-sm text-center">
        <p class="py-1">Let customers speak for us</p>
        <i class="fa-sharp fa-solid fa-star text-teal-600" />
        <i class="fa-sharp fa-solid fa-star text-teal-600" />
        <i class="fa-sharp fa-solid fa-star text-teal-600" />
        <i class="fa-sharp fa-solid fa-star text-teal-600" />
        <i class="fa-regular fa-star-half-stroke text-teal-600" />
        <p class="underline underline-offset-2 py-1">from 118 reviews</p>
      </div>
    </div>
    <div
      class="grid grid-cols-1 gap-0  md:grid-cols-2  lg:grid-cols-3 px-5 lg:px-12 lg:mx-12"
    >
      <div class="lg:flex md:flex hidden ">
        <div class="grid grid-cols-7  gap-0  px-3  ">
          <div class=" grid col-span-2  items-center ">
            <img
              class="h-24 w-full "
              src="https://cdn.shopify.com/s/files/1/0650/5814/4482/products/2395_56x56.jpg?v=1657885040"
              alt="Product Images"
            />
          </div>
          <div class="grid  col-span-5  px-3 py-8 items-center">
            <div class="text-sm text-center">
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />

              <h2 class="text-sm font-bold text-gray-700 py-1">
                Awesome and fast!
              </h2>
              <p class=" text-sm text-gray-500 py-1">
                Very fast delivery!!!! Wow!
              </p>
              <h2 class="text-sm font-bold text-gray-700 py-1">Ashvi Arun</h2>
              <p class=" text-sm text-gray-500  py-1">
                Three Stone Diamond Ring 01/08/2023
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:flex md:hidden flex ">
        <div class=" grid grid-cols-7  gap-0  px-3  ">
          <div class=" grid col-span-2  items-center ">
            <img
              class="h-28 lg:h-24 w-full"
              src="https://cdn.shopify.com/s/files/1/0650/5814/4482/products/2395_56x56.jpg?v=1657885040"
              alt="Product Images"
            />
          </div>
          <div class="grid  col-span-5  px-3 py-8 ">
            <div class="text-sm text-center">
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />

              <h2 class="text-sm font-bold text-gray-700 py-1">
                Fast shipper, great communication, good stuff
              </h2>
              <p class=" text-sm text-gray-500 py-1">
                The quality was great and shipped at a reasonable time. I would
                most definitely recommend this product and website!
              </p>
              <h2 class=" text-sm font-bold text-gray-700 py-1">Zoya Khan</h2>
              <p class=" text-sm text-gray-500  py-1">
                Oval Shape Sparkle Diamond Solitaire Ring 01/08/2023
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="lg:flex md:flex hidden">
        <div class="grid grid-cols-7  gap-0  px-3  ">
          <div class=" grid col-span-2  items-center ">
            <img
              class="h-24 w-full "
              src="https://cdn.shopify.com/s/files/1/0650/5814/4482/products/2395_56x56.jpg?v=1657885040"
              alt="Product Images"
            />
          </div>
          <div class="grid  col-span-5  px-3 py-8 items-center">
            <div class="text-sm text-center">
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />
              <i class="fa-sharp fa-solid fa-star text-teal-600" />

              <h2 class="text-sm font-bold text-gray-700 py-1">Unbelievable</h2>
              <p class=" text-sm text-gray-500 py-1">
                Order came on time no complaints about the order process or
                delivery.
              </p>
              <h2 class="text-sm font-bold text-gray-700  py-1">
                Shakti Gauda
              </h2>
              <p class=" text-sm text-gray-500 py-1">
                Round Shape Halo Diamond Ring 01/08/2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="grid grid-cols-1 gap-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:py-20 py-12 px-5 lg:px-12"
    >
      <div class="grid  grid-cols-2 gap-0 items-center">
        <div class="  ">
          <img
            class="h-[190px]  w-[228px] lg:h-[290px] lg:w-[349px] rounded-lg "
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/02_heading_making.jpg?v=1670832109&width=500"
            alt=""
            id="landingPage"
          />
        </div>
        <div class="    ">
          <img
            class="h-[254px]  w-[254px] lg:h-[387px] lg:w-[387px]  rounded-lg "
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/1229.jpg?v=1670841714&width=500"
            alt=""
            id="landingPage"
          />
        </div>
      </div>
      <div class="flex flex-col justify-center">
        <h2
          class=" text-center md:text-left items-center text-4xl font-bold text-gray-800"
        >
          Our Craftmanship
        </h2>
        <p
          class="text-center md:text-left items-center text-sm text-gray-700 font-normal mt-8"
        >
          We have creatvie people who works reall hard to furnish your memoravle
          product. We not just brngs joy, We build Relationships stronger and
          better with out craftmanship
        </p>
      </div>
    </div>
  </body>

  <footer class="text-gray-800 bg-white">
    <div
      class=" pt-0 pb-12 lg:flex lg:justify-between lg:gap-16 px-5 lg:px-12 lg:py-12"
    >
      <div class="py-5 lg:py-0">
        <div class="grid grid-rows-3  gap-3 items-end lg:items-start ">
          <img
            src="https://cdn.shopify.com/s/files/1/0650/5814/4482/files/KILORY_1_d81261d3-c74a-4844-8b29-f1c51b569843.png?v=1659708313&width=150"
            alt="brandLoog"
            id="landingPage"
          />
          <div class="text-xl lg:text-2xl font-bold pb-2 lg:pb-0">
            <p>Sign up for new stories and personal offers</p>
          </div>

          <div
            class=" px-5 rounded-xl bg-white flex justify-between py-2.5  content-center items-center  border-solid border-2  border-gray-500  "
          >
            <input
              class="  px-10 focus:outline-none  "
              placeholder=" example@gmail.com"
              type="text"
            />
            <i
              class="fa-solid fa-circle-chevron-right cursor-pointer pl-8 text-2xl  text-gray-300   rounded-full outline-none  normal-case ring-2 ring-transparent   transition duration-300 hover:text-black"
              id="email-icon"
            />
          </div>
        </div>
      </div>

      <div
        class="grid grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-4 sm:gap-16  "
      >
        <div class=" col-span-2  text-sm text-gray-500 font-normal">
          <h3>
            Slay your fashion game with a minimalistic set of Bracelets,
            Necklaces & Ring✨
          </h3>
          <ul>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li class="mt-6"><a href="">✔️ Premium Quality</a></li>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li class="mt-6"><a href="">✔️ Perfect For Gifting</a></li>
          </ul>
        </div>
        <div class="grid grid-row-2 gap-6">
          <h3 class=" text-sm font-bold">Our Policy</h3>
          <ul class="text-sm text-gray-500 font-normal grid grid-row-4 gap-3">
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">Privacy Policy</a></li>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">Refund Policy</a></li>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">Shipping Policy</a></li>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">Terms of Service</a></li>
          </ul>
        </div>

        <div class="grid grid-row-2 gap-6">
          <h3 class=" text-sm font-bold">Quick Link</h3>
          <ul class="text-sm text-gray-500 font-normal grid grid-row-4 gap-3 ">
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">Search</a></li>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">Contact Us</a></li>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">My Account</a></li>
            {/* <!-- svelte-ignore a11y-invalid-attribute --> */}
            <li><a href="">About us</a></li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid grid-rows-2  gap-10 px-5 lg:px-12">
      <div class=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-2 ">
        <div class=" flex justify-start">
          <i
            class="fa-brands fa-facebook-f text-2xl font-medium pr-10 cursor-pointer"
          />
          <i
            class="fa-brands fa-instagram text-2xl font-medium cursor-pointer"
          />
        </div>
        <div class=" w-full flex justify-start  md:justify-end ">
          <span class="font-bold text-xs  cursor-pointer">English</span>
          <svg
            role="presentation"
            focusable="false"
            width="10"
            height="7"
            class="icon icon-chevron-bottom cursor-pointer ml-2 mt-2 "
            viewBox="0 0 10 7"
          >
            <path
              d="m1 1 4 4 4-4"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            />
          </svg>
        </div>
      </div>
      <p class="text-xs font-normal text-gray-500 ">
        ©2023,KILORY,Powered by Shopify
      </p>
    </div>
  </footer>
  <div class=" left-2 fixed bottom-2">
    <a href="https://wa.me/+919556853896" target="_blank" rel="noreferrer"
      > <img
      class=" h-[52px] w-[52px] rounded-full  cursor-pointer"
      src="https://cdn.shopify.com/s/files/1/0070/3666/5911/files/ic-3.svg?v=1584017540/"
      alt="brandLoog"
      id="landingPage"
    />
    <div class="">
      <button
        class=" outline-none cursor-pointer normal-case     font-bol  border-2 border-gray-100    transition-all bg-white  text-black py-1 px-3  text-sm  rounded"
        data-action="write_review">Click here</button
      >
    </div>
      </a
    >
   
  </div>
  <div class="right-2 fixed bottom-9">
    <a href="" target="_blank" rel="noreferrer"
      ><img
        class=" h-[52px] w-[52px] rounded-full  cursor-pointer "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXTJIcBD2j0_i15k5gh1hiCKelVa_DJR2Hiu-SjkFUwgUtoz68Sj9ncT-ccdhFUgy7BLk&usqp=CAU"
        alt="brandLoog"
        id="landingPage"
      /></a
    >
  </div>
  <div
    class="z-[100] fixed  bottom-1 rounded right-1 bg-white  backdrop-blur-md border-solid border-2 border-gray-300 px-2 "
  >
    <body>
      <div
        id="clock"
        onload="currentTime() "
        class=" text-teal-500 text-opacity-100 text-right font-bold"
      />

      
    </body>
  </div>
</section>

    </>
  );
}

export default App;
