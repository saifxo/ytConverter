import React, { useEffect, useState } from "react";
import Map from "./Map";

const Hero = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.ipbase.com/v1/json");
        const data = await response.json();
        console.log(data);
        setLocationData(data);
        if (data) {
          setLoading(false);
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col lg:flex-row px-20 justify-between  items-center w-full pt-36 ">
      <div className="flex flex-col text-left h-full  justify-center items-center w-full gap-4 ">
        <div className="px-8 flex flex-col bg-white shadow-2xl gap-1 py-5 w-full rounded-lg">
          <div className="flex  gap-10  justify-start items-center ">
            <p className="text-4xl font-bold text-blue-600 underline ">
              Your IP Address
            </p>
            <div className="flex flex-row items-center justify-start gap-3 pt-1">
              <img src="/arrow.png" alt="arrow" className="w-8 h-8 invert" />

              {!loading ? (
                <div>
                  <p className="font-semibold  text-2xl">{locationData?.ip}</p>
                </div>
              ) : (
                <div>
                  <p className="animate-pulse">Loading</p>
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 pt-12">
            {/* <div className="flex pt-12 flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-between gap-2">
                <img src="/isp.png" alt="isp" className="w-6 h-6" />
                <p className="font-semibold">ISP</p>
              </div>
              {!loading ? (
                <div>
                  <p>{locationData?.isp}</p>
                </div>
              ) : (
                <div>
                  <p className="animate-pulse">Loading...</p>
                </div>
              )}
            </div> */}
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-between gap-2">
                <img src="/org.png" alt="isp" className="w-6 h-6" />
                <p className="font-semibold">Time Zone</p>
              </div>

              {!loading ? (
                <div>
                  <p className="">{locationData?.time_zone}</p>
                </div>
              ) : (
                <div>
                  <p className="animate-pulse">Loading...</p>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-between gap-2">
                <img src="/country.png" alt="isp" className="w-6 h-6" />
                <p className="font-semibold">Country</p>
              </div>

              {!loading ? (
                <div>
                  <p className="">{locationData?.country_name}</p>
                </div>
              ) : (
                <div>
                  <p className="animate-pulse">Loading...</p>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-between gap-2">
                <img src="/city.png" alt="isp" className="w-6 h-6" />
                <p className="font-semibold">City</p>
              </div>

              {!loading ? (
                <div>
                  <p className="">{locationData?.city}</p>
                </div>
              ) : (
                <div>
                  <p className="animate-pulse">Loading...</p>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-between gap-2">
                <img src="/zip.png" alt="isp" className="w-6 h-6" />
                <p className="font-semibold">Zip Code</p>
              </div>

              {!loading ? (
                <div>
                  <p className="">{locationData?.zip_code}</p>
                </div>
              ) : (
                <div>
                  <p className="animate-pulse">Loading...</p>
                </div>
              )}
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-between gap-2">
                <img src="/region.png" alt="isp" className="w-6 h-6" />
                <p className="font-semibold">Region</p>
              </div>

              {!loading ? (
                <div>
                  <p className="">{locationData?.region_name}</p>
                </div>
              ) : (
                <div>
                  <p className="animate-pulse">Loading...</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-full h-full">
        <div className="rounded-md bg-white w-[70%] shadow-xl">
          <div>
            {loading ? (
              <p>Loading...</p>
            ) : (
              <div className="w-full h-full">
                <Map
                  latitude={locationData?.latitude}
                  longitude={locationData?.longitude}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
