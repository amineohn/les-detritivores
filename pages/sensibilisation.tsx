import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import fetcher from "libs/fetcher";
import Image from "next/image";

import { StoryBlok } from "libs/types";
import { richText } from "libs/storyblok";

import { Icons } from "components/icons";

const Sensibilisation: NextPage = () => {
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
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 sm:grid-cols-1 mx-5 my-2 space-x-10">
            <div className="flex flex-col space-y-2 justify-center">
              {data ? (
                <>
                  <div className="flex justify-center">
                    <Image
                      className="rounded-2xl"
                      src="/static/images/IMG_0324[736].jpg"
                      width="750"
                      height="500"
                      loading="lazy"
                      blurDataURL="/static/images/IMG_0324[736].jpg"
                      placeholder="blur"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                  <div>
                    <div className="rounded-lg w-80 bg-greenDDTV" />
                  </div>
                </>
              )}
              <span className="inline-flex space-x-2 justify-center">
                <Icons
                  icons="photo"
                  className="w-6 h-6 text-black fill-current dark:text-white"
                />
                <p className="font-normal text-base mt-0.5">
                  François Passerini
                </p>
              </span>
            </div>
            <div className="flex flex-col space-x-10 justify-between">
              {data ? (
                <>
                  <div className="space-y-4">
                    <h1 className="text-left pb-2 md:text-4xl lg:text-5xl text-2xl font-bold text-orangeDDTV -rotate-2">
                      {data?.content.titleSectionSensibilisation}
                      <div className="bg-growing-underline-black hidden">
                        &nbsp;
                      </div>
                    </h1>
                    <div className="space-y-4">
                      <p className="text-xl sm:text-md font-bold">
                        {richText(data?.content.textSensibilisation)}
                      </p>
                      <div className="flex flex-col space-y-2">
                        <p className="font-light text-xl p-4 space-y-2 pl-10">
                          {richText(data?.content.text2Sensibilisation)}
                        </p>
                        <div>
                          <p className="font-bold text-xl">
                            {richText(data?.content.gameSensibilisation)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="space-y-4">
                  <h1 className="text-left pb-2 md:text-4xl lg:text-5xl text-2xl font-bold text-orangeDDTV -rotate-2 bg-neutral-100 dark:bg-neutral-800 h-20 rounded-lg animate-pulse"></h1>
                  <br />
                  <div className="space-y-4">
                    <p className="text-xl sm:text-md font-bold bg-neutral-100 dark:bg-neutral-800 h-20 rounded-lg animate-pulse"></p>
                    <div className="flex flex-col space-y-2">
                      <p className="font-light text-xl p-4 space-y-2 pl-10 bg-neutral-100 dark:bg-neutral-800 h-40 rounded-lg animate-pulse"></p>
                      <div>
                        <p className="font-bold text-xl bg-neutral-100 dark:bg-neutral-800 h-14 rounded-lg animate-pulse"></p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Sensibilisation;
