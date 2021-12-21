import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import fetcher from "libs/fetcher";

import { StoryBlok } from "libs/types";
import { richText } from "libs/storyblok";

import { Icons } from "components/icons";
import Link from "next/link";
import Image from "next/image";

const Compost: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { data } = useSWR<StoryBlok>(`/api/storyblok`, fetcher);
  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }

    if (typeof window !== "undefined") {
      document.body.scrollTop = 0;
    }
  }, []);
  return (
    <>
      <Fade
        left={isDesktop}
        bottom={isMobile}
        duration={500}
        delay={500}
        distance="30px"
      >
        <div className="max-w-screen my-3 justify-center content-center">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 mx-5 my-2 space-y-2">
            <div className="flex flex-col space-y-4">
              {data ? (
                <>
                  <div className="space-y-4">
                    <h1 className="text-left pb-2 md:text-6xl text-2xl font-bold text-orangeDDTV -rotate-2">
                      COMPOSTAGE
                      <div className="bg-growing-underline-black hidden">
                        &nbsp;
                      </div>
                    </h1>
                    <div className="space-y-4">
                      <p className="text-xl sm:text-md font-bold">
                        {richText(data?.content.compostSecondText)}
                      </p>
                      <div className="flex flex-col space-y-2">
                        <p className="font-light text-xl p-4 space-y-2 pl-10">
                          {richText(data?.content.compostTreeText)}
                        </p>
                        <div className="inline-flex space-x-2">
                          <Icons icons="check" className="w-5 h-5" />
                          <p className="font-bold text-xl text-orangeDDTV">
                            {richText(data?.content.compostFourText)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="grid justify-center space-x-0 md:inline-flex md:space-x-2 sm:space-x-0">
                      <div className="w-60">
                        <Image
                          className="!rounded-2xl"
                          width="240"
                          height="180"
                          src="/static/images/DETRI_211007_399.jpg"
                          blurDataURL="/static/images/DETRI_211007_399.jpg"
                          placeholder="blur"
                          loading="lazy"
                        />
                      </div>
                      <div className="w-60">
                        <Image
                          className="!rounded-2xl"
                          width="240"
                          height="180"
                          src="/static/images/IMG_0553.jpg"
                          blurDataURL="/static/images/IMG_0553.jpg"
                          loading="lazy"
                          placeholder="blur"
                        />
                      </div>
                      <div className="w-60">
                        <Image
                          className="!rounded-2xl"
                          width="240"
                          height="180"
                          src="/static/images/IMG_0278.jpg"
                          blurDataURL="/static/images/IMG_0278.jpg"
                          placeholder="blur"
                          loading="lazy"
                        />
                      </div>
                    </div>
                    <span className="flex space-x-2 justify-center 2xl:justify-start xl:justify-start sm:justify-start md:justify-start">
                      <Icons
                        icons="photo"
                        className="w-6 h-6 text-black fill-current dark:text-white"
                      />
                      <p className="font-normal text-base mt-0.5">
                        François Passerini
                      </p>
                    </span>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <h1 className="text-left pb-4 md:text-6xl text-2xl font-bold text-orangeDDTV animate-pulse -rotate-2 bg-neutral-100 dark:bg-neutral-800 rounded-lg h-20"></h1>
                  <br />
                  <div className="space-y-6">
                    <p className="text-xl sm:text-md font-bold bg-neutral-100 dark:bg-neutral-800 rounded-lg h-10 animate-pulse"></p>
                    <div className="flex flex-col space-y-2">
                      <p className="font-light text-xl p-4 space-y-2 pl-10 rounded-lg animate-pulse bg-neutral-100 h-20"></p>
                      <div className="inline-flex space-x-2 rounded-lg animate-pulse bg-neutral-100 dark:bg-neutral-800">
                        <p className="font-bold text-xl text-orangeDDTV h-20"></p>
                      </div>
                    </div>
                  </div>
                  <div className="grid justify-center space-x-0 md:inline-flex md:space-x-2 sm:space-x-0">
                    <div className="w-60">
                      <div className="!rounded-2xl w-60 h-44 animate-pulse bg-neutral-100 dark:bg-neutral-800" />
                    </div>
                    <div className="w-60">
                      <div className="!rounded-2xl w-60 h-44 animate-pulse bg-neutral-100 dark:bg-neutral-800" />
                    </div>
                    <div className="w-60">
                      <div className="!rounded-2xl w-60 h-44 animate-pulse bg-neutral-100 dark:bg-neutral-800" />
                    </div>
                  </div>
                  <span className="flex space-x-2 justify-center 2xl:justify-start xl:justify-start sm:justify-start md:justify-start">
                    <p className="font-normal text-base mt-0.5 bg-neutral-100 dark:bg-neutral-800"></p>
                  </span>
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <h1 className="text-center pb-2 md:text-vw text-vw font-bold text-orangeDDTV">
                Vous souhaitez acheter du compost auprès de
                <br /> la SCIC SA LES DETRITIVORES ?
                <div className="bg-growing-underline-black hidden">&nbsp;</div>
              </h1>
              <div className="flex flex-col">
                <button className="bg-greenDDTV transition hover:bg-green-900 dark:hover:bg-orange-600 dark:bg-orangeDDTV text-white p-4 w-60 rounded-full font-normal text-xl m-auto uppercase">
                  <Link href="/devis">Commandez-le ici</Link>
                </button>
                <span className="text-center text-orangeDDTV">ou</span>
                <button className="bg-greenDDTV transition hover:bg-green-900 dark:hover:bg-orange-600 dark:bg-orangeDDTV text-white p-4 w-auto sm:w-auto xl:w-100 2xl:w-100 md:w-auto rounded-full font-normal text-md md:text-xl m-auto uppercase">
                  Retrouvez-le dans nos magasins partenaires
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Compost;
