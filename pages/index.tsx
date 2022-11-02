import type { NextPage } from "next"
import Head from "next/head"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Image from "next/image"
import categories from "../data"
import { Pagination } from "swiper"

const Home: NextPage = () => {
  const sideNavData = [
    {
      id: 1,
      text: "سناب شات",
      href: "https://www.snapchat.com/add/sap",
    },
    {
      id: 2,
      text: "إنستجرام",
      href: "https://instagram.com/kayalalshabab",
    },
    {
      id: 3,
      text: "واتساب",
      href: "https://api.whatsapp.com/send/?phone=966114333555",
    },
    { id: 4, text: "اتصل بنا", href: "tel:0114333555" },
  ]
  const router = useRouter()
  const [sideNav, setSideNav] = useState(false)
  const [value, setValue] = useState(1)
  const [activeCat, setActiveCat] = useState(categories[0])
  const [filteredItems, setFilteredItems] = useState(categories[0].items)

  const handleClick = (category: any) => {
    setValue(category.id)
    setActiveCat(category)
    const center = document.getElementById(`${category.id}`)
    if (category.id === 1) {
      document
        ?.getElementById("scroll")
        ?.scrollTo({ behavior: "smooth", left: 0 })
    }
    center?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    })
  }

  useEffect(() => {
    setFilteredItems(categories[value - 1].items)
  }, [value])
  useEffect(() => {
    const active = categories.find((c) => c.id === value)
    setActiveCat(active!)
  }, [value])

  // const pagination = {
  //   clickable: true,
  //   renderBullet: (index: number, className: any) => {
  //     return (
  //       <div className="sticky inset-x-0 top-0 z-100 flex flex-row-reversee justify-around transition-all shadow-sm dark:shadow-none bg-white dark:bg-gray-700">
  //         <div
  //           className="w-full flex gap-2 flex-row flex-nowrap overflow-auto"
  //           id="scroll"
  //         >
  //           {categories.map((category) => {
  //             return (
  //               <div
  //                 key={category.id}
  //                 id={`${category.id}`}
  //                 onClick={() => handleClick(category)}
  //                 className={`h-10 my-4 ${
  //                   category.id === 1 ? "mr-[1.4rem]" : "mr-1"
  //                 } py-3 px-6 rounded-full bg-primaryGreen-300 dark:bg-gray-900 hover:bg-primaryGreen-500 flex flex-row-reverse justify-center items-center cursor-pointer transition hover:text-white dark:hover:text-white active:bg-primaryGreen-500 dark:hover:bg-primaryGreen-4000 active:text-white foucs:bg-primaryGreen-400 foucs:text-white ${
  //                   category.id === value
  //                     ? "text-white bg-primaryGreen-500 dark:text-white dark:bg-primaryGreen-500"
  //                     : "text-gray-400 bg-primaryGreen-300 dark:text-primaryGreen-100"
  //                 }`}
  //               >
  //                 <span className="text-xs whitespace-nowrap font-semibold">
  //                   {category.title}
  //                 </span>
  //                 <Image
  //                   src={category.image}
  //                   alt=""
  //                   width={24}
  //                   height={24}
  //                   priority
  //                 />
  //               </div>
  //             )
  //           })}
  //         </div>
  //       </div>
  //     )
  //   },
  // }
  const pagination = {
    clickable: true,
    renderBullet: (index: number, className: any) => {
      return `<span class="${className}">
      <span className="text-xs whitespace-nowrap font-semibold">
            ${categories[index]?.title}
          </span>
          <Image
            src=${categories[index]?.image}
            alt=""
            width="24"
            height="24"
            priority
            className='z-10'
          />
      </span>`
    },
  }
  return (
    <div
      className="relative overflow-hidden max-w-md mx-auto shadow-2xl h-screen transition duration-100 dark:bg-gray-700"
      dir="rtl"
    >
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Top Nav */}
      <header
        className={`z-30 rounded-bb-xl transition duration-200 dark:bg-gray-700 dark:bg-opacity-300 relative`}
      >
        <nav className="z-30 relative App-header absolutee left-0 right-0 text-white pt-1 pr-1 rounded-bb-xl">
          <div
            className={`z-50 w-full max-w-md mx-auto h-16 top-auto bg-white rounded-t-4xl grid gap-2 grid-cols-12  place-content-center rounded-bb-xl dark:bg-gray-700 bg-opacity-50 ${
              router.pathname !== "/" && "dark:bg-opacity-50"
            }`}
          >
            <div className="col-span-9 grid grid-cols-12 justify-start items-center">
              <div
                className="col-span-10 pr-5 text-md font-semibold text-gray-500 dark:text-white overflow-y-hidden flex items-center cursor-pointer gap-2"
                onClick={() => router.push("/")}
              >
                <Image
                  src="https://new-kayal.vercel.app/_next/image?url=%2Flogo.png&w=64&q=75"
                  width={56}
                  height={57}
                  alt="main logo"
                  className="p-1 border-2 border-primaryGreen-500 bg-white rounded-xl"
                />
                <h1 className="font-extrabold flex gap-1 flex-col text-md text-primaryGreen-500 dark:text-primaryGreen-200">
                  <span className="inline-block transform translate-y-1 mx-0.5 text-brown-400">
                    خيال الشباب
                  </span>
                  <span className="font-extrabold text-md text-primaryGreen-500 dark:text-primaryGreen-200">
                    {" "}
                    kayal alshbab
                  </span>
                </h1>
              </div>
            </div>
            <div className="col-span-3 flex justify-center items-center col-startt-12">
              <div
                className="col-span-2 w-10 h-10 p-2 mxx-2 rounded-full text-black transition duration-200 dark:text-gray-100 hover:bg-gray-400 hover:bg-opacity-50 flex justify-center items-center cursor-pointer"
                onClick={() => setSideNav(true)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill=""
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    y="2"
                    width="20"
                    height="2.5"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <rect
                    y="18"
                    width="20"
                    height="2.5"
                    rx="1.5"
                    fill="currentColor"
                  />
                  <rect
                    x="4"
                    y="10"
                    width="20"
                    height="2.5"
                    rx="1.5"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Side Nav */}
      <div className="relative inset-0 flex justify-center z-102">
        <div
          className={`fixed inset-0 bg-black dark:bg-white bg-opacity-70 dark:bg-opacity-70 ${
            sideNav ? "block" : "hidden"
          }`}
          onClick={() => setSideNav(false)}
        ></div>
        <div
          className={`fixed w-[85%] top-0 right-0 bg-white flex flex-col dark:bg-gray-700 h-full transition-all duration-500 ease-out ${
            sideNav ? "left-[15%]" : "left-[100vw]"
          }`}
        >
          <button
            className={`absolute left-1.5 top-1.5 z-103 w-5 h-5 p-0.5 mx-2 rounded-full bg-gray-600 text-gray-50 hover:bg-gray-400 hover:bg-opacity-50 transform hover:rotate-180 dark:bg-gray-700 dark:text-gray-50 ${
              sideNav ? "block" : "hidden"
            }`}
            onClick={() => setSideNav(false)}
          >
            close
          </button>
          <div
            className={`bg-primaryGreen-300 w-full dark:bg-white flex items-center justify-center py-4`}
          >
            <Image src="/logo.png" alt="side nav logo" width={80} height={80} />
          </div>
          <form className={`mx-2 my-1 flex gap-2`}>
            <input
              type="text"
              placeholder="ابحث..."
              name="search"
              className="outline-primaryGreen-500 p-2 flex-grow rounded-md bg-gray-100 focus:bg-white hover:bg-gray-200"
            />
            <button
              className="py-2 px-4 rounded-md bg-primaryGreen-500 hover:bg-primaryGreen-600 text-white"
              title="البحث"
              type="submit"
            >
              search
            </button>
          </form>
          <div
            className={`flex flex-col w-full overflow-hidden rounded-md px-2 gap-1`}
            onClick={() => setSideNav(false)}
          >
            <p className="py-2.5 px-4 rounded-tr-md rounded-tl-md bg-primaryGreen-200 bg-opacity-500 text-justify text-xs text-gray-600 font-semibold">
              يحتاج البالغون إلى 2000 سعر حراري في المتوسط يومياً، وقد تختلف
              الاحتياجات الفردية من السعرات الحرارية من شخص لآخر البيانات
              التغذوية الإضافية متاحة عند الطلب .
            </p>
            {sideNavData.map((link) => (
              <a
                href={link.href}
                className="relative flex justify-between items-center py-2.5 px-4 rounded-sm transition bg-gray-100 bg-opacity-500 shadow-sm text-gray-800"
                key={link.id}
              >
                <h1 className="text-xs md:text-md text-gray-600 font-semibold">
                  {link.text}
                </h1>
              </a>
            ))}
            <div className="relative flex justify-between items-center py-3 px-4 rounded-br-md rounded-bl-md transition bg-gray-100 bg-opacity-500 shadow-sm text-gray-800">
              <h1 className="text-xs md:text-md text-gray-600 font-semibold">
                وضع نهاري
              </h1>
              <div
                className={`flex items-center p-1 rounded-full shadow-md bg-white text-gray-800`}
              >
                sun
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="container h-full overflow-y-scroll mx-auto bg-white transition duration-200 dark:bg-gray-700 dark:text-white space-y-4 shadow-2xl">
        <Swiper
          pagination={pagination}
          modules={[Pagination]}
          // onSlideChange={(swiperCore) => {
          //   const { activeIndex } = swiperCore
          //   setValue(activeIndex + 1)
          //   const center = document.getElementById(`${activeIndex + 1}`)
          //   if (activeIndex + 1 === 1) {
          //     document
          //       ?.getElementById("scroll")
          //       ?.scrollTo({ behavior: "smooth", left: 0 })
          //   }
          //   center?.scrollIntoView({
          //     behavior: "smooth",
          //     block: "center",
          //     inline: "center",
          //   })
          // }}
        >
          {categories.map((item: any, i: number) => (
            <SwiperSlide key={i}>
              <div className="relative space-y-2 flex flex-col justify-center overflow-hidden items-center pb-4">
                <div className="w-full mt-[7rem] flex flex-col gap-2 items-center">
                  {item.items.map((i: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className={`relative sm:w-11/12 w-11/12 h-28 sm:mx-1 rounded-lg grid grid-cols-12 gap-2 bg-gray-100 cursor-pointer transition duration-200 dark:bg-gray-900`}
                      >
                        <div className="relative w-full rounded-lg col-span-4 sm:col-span-3 flex items-center justify-center">
                          <Image
                            className="absolute inset-0 w-full h-full p-0.5 object-cover rounded-lg"
                            src={i.image}
                            alt="item img"
                            width={80}
                            height={80}
                            priority
                          />
                        </div>
                        <div className="w-full relative col-span-8 sm:col-span-9 space-y-1 sm:space-y-2 px-2 flex flex-col justify-between">
                          <h1 className="mt-2 text-sm text-gray-800 dark:text-white font-semibold text-primaryGreen-500">
                            {i.title}
                          </h1>
                          <p className="text-xs text-gray-800 dark:text-gray-400 overflow-hidden line-clamp-3">
                            {i.description}
                          </p>
                          <div className="flex justify-between py-2 items-center w-full">
                            {i.calories ? (
                              <span className="text-xs text-gray-800 dark:text-gray-400 ">
                                <span className="text-xs mx-0.5">
                                  سعرات حرارية :
                                </span>
                                {i.calories}
                              </span>
                            ) : (
                              ""
                            )}

                            <span className="text-sm flex items-center font-semibold self-end mr-auto">
                              {i.price}
                              <span className="text-primaryGreen-500 text-xs font-semibold mx-0.5">
                                ريال
                              </span>
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </SwiperSlide>
          ))}
          {/* {categories.map((cat) => (
          <SwiperSlide className="swiper-slide" key={cat.id}>
            {cat.title}
            {cat.items.map((item) => (
              <div key={item.id}>{item.title}</div>
            ))}
          </SwiperSlide>
        ))} */}
        </Swiper>
      </main>
    </div>
  )
}

export default Home
