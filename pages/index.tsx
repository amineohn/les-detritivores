import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import useSWR from "swr";
import Fade from "react-reveal/Fade";
import fetcher from "libs/fetcher";
import FadeIn from "react-fade-in";
import swal from "sweetalert";

import { Content } from "libs/types";
import { useRichText } from "libs/storyblok";

import Loading from "components/Loading";
import Icons from "components/Icons";
const Home: NextPage = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    swal({
      title: "Bienvenue chez Les Détritivores !",
      icon: "/static/images/logo.png",
      text: "Psst... Notre site est en cours de développement",
    }).then(() => {});
  }, []);
  const { data } = useSWR<Content>(`/api/storyblok`, fetcher);
  return (
    <>
      {data && (
        <Fade
          left={isDesktop}
          bottom={isMobile}
          duration={500}
          delay={500}
          distance="30px"
        >
          <div className="flex flex-col justify-center px-8 my-20 overflow-hidden items-center">
            <Fade
              left={isDesktop}
              bottom={isMobile}
              duration={500}
              delay={500}
              distance="30px"
            >
              <div className="flex-col justify-center items-center text-center mb-10">
                {data ? (
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={500}
                    delay={500}
                    distance="30px"
                  >
                    <h1 className="text-center pb-2 md:text-6xl text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600 transition -rotate-2">
                      {data.content.introTitle}
                    </h1>
                  </Fade>
                ) : (
                  <>
                    <Loading />
                  </>
                )}
              </div>
              <div className="flex flex-col items-start justify-center max-w-xl lg:max-w-6xl mb-16 dark:text-white space-y-10 smph:text-xs md:px-10 lg:px-10">
                <Fade
                  left={isDesktop}
                  bottom={isMobile}
                  duration={500}
                  delay={500}
                  distance="30px"
                >
                  <p className="font-light text-xl text-center mx-0 smph:mx-4 sm:mx-12 md:mx-12">
                    {data ? useRichText(data.content.introText) : <Loading />}
                  </p>
                </Fade>
                <div className="flex justify-start sm:mx-12 md:mx-14 mx-0">
                  <div className="block md:block sm:grid lg:grid grid-flow-col lg:grid-flow-col auto-rows-max md:space-x-0 lg:space-x-32">
                    <div className="">
                      <iframe
                        src={data?.content.youtubeVideoLink}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={data?.content.youtubeTitle}
                        className="flex justify-start rounded-2xl w-72 lg:w-250 h-52 lg:h-250 md:w-96 md:h-72 sm:w-150 sm:h-150 sm:mx-12 md:mx-1 mx-16"
                      />
                    </div>
                    <div className="flex flex-col items-center justify-center w-full">
                      <h1 className="pb-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-orangeDDTV to-orange-600">
                        {data ? (
                          <FadeIn>{data?.content.usagesTitle}</FadeIn>
                        ) : (
                          <>
                            <Loading />
                          </>
                        )}
                      </h1>
                      <div className="bg-orangeDDTV rounded-full">
                        <Icons
                          icons="people"
                          className="text-white fill-current"
                        />
                      </div>
                      <div className="flex flex-col justify-center items-center space-y-2 mt-2">
                        {data ? (
                          <>
                            <span>{data?.content.restaurantTitle}</span>
                          </>
                        ) : (
                          <Loading />
                        )}
                        {data ? (
                          <>
                            <span>{data?.content.restaurantCollective}</span>
                          </>
                        ) : (
                          <Loading />
                        )}
                        {data ? (
                          <>
                            <span>{data?.content.collectivites}</span>
                          </>
                        ) : (
                          <Loading />
                        )}
                        {data ? (
                          <>
                            <span>{data?.content.particular}</span>
                          </>
                        ) : (
                          <Loading />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </Fade>
      )}
    </>
  );
};

export default Home;
