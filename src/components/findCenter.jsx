import React from 'react'
import { getEntry } from 'astro:content';

const { data } = await getEntry('centres', 'centres')


let { centers } = data

centers = centers?.map(center => ({
    state: center?.state,
    districts: center?.districts?.map(district => ({
        district: district?.district,
        centres: district?.centres?.map(centre => ({
            centre: centre?.centre,
        }))
    }))
}))

import { Image } from 'astro:assets'
import Section from './system/Section.astro'
import Text from './system/Text.astro'
import MultiStyleText from './system/MultiStyleText.astro'



import SearchIcon from '../icons/SearchIcon.svg'


const FindCentre = () => {
  return (
    <div class="flex flex-col gap-l items-center p-[60px] px-[90px] max-md:px-[20px] max-md:py-[40px]">
      <div data-appear id="findcentre">
          <Text type="h2" class="text-center">Our
              <br />
              <MultiStyleText
                classes={["text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary", "text-purple", "text-green-200", "text-orange-200", "text-purple", "text-primary", "text-green-200", "text-orange-200"]}
                text="Centers of Joy"
              ></MultiStyleText>
          </Text>
      </div>  
      
      <div data-appear={1} class="relative w-full max-w-[844px] gap-2 flex flex-row justify-end py-[6px]  pr-[10px] border-[1px] border-[#ddd] rounded-full" style={{
          boxShadow: '0px 1.366px 2.732px 0px rgba(0, 0, 0, 0.08), 0px 4.098px 10px 0px rgba(0, 0, 0, 0.10)'
      }}>
          <input
              class="w-full pl-[35px] max-md:pl-[20px] h-full absolute top-0 z-10 left-0 rounded-full text-[18px] max-md:text-[16px] font-bold placeholder:text-[#717171]/50 focus:outline-dotted focus:outline-primary focus:outline-[2px] focus:outline-offset-4"
              placeholder="Search by location"
              data-search-center
          />
          <button class="w-[65px] h-[65px] max-md:w-[40px] max-md:h-[40px] bg-primary rounded-full flex-shrink-0 relative z-20 flex justify-center items-center">
              <div class="w-[33px] h-[33px] relative top-[3px]">
                  <Image class="w-full h-full" src={SearchIcon} alt="Search Icon" />
              </div>
          </button>
      </div>
      <div data-appear={2} class="w-full  px-[30px] py-6 bg-white border rounded-[12px] border-black/10">
              <Text type="base">
                  <div class="font-[600] flex flex-row text-[#7b7b7b]" data-bread-crumbs>
                      <a data-bread-crumb-type="state" href="#" class="text-[#7b7b7b] [&.active]:text-[#1c1c1c] block [&.active]:underline active">Home</a>
                      <span class="mx-[10px] hidden">{'>'}</span>
                      <a data-bread-crumb-type="district" href="#" class="text-[#7b7b7b] [&.active]:text-[#1c1c1c] [&.active]:underline hidden"></a>
                      <span class="mx-[10px] hidden">{'>'}</span>
                      <a data-bread-crumb-type="center" href="#" class="text-[#7b7b7b] [&.active]:text-[#1c1c1c] [&.active]:underline hidden"></a>
                  </div>
              </Text>
          <div class="w-full h-[1px] bg-black/10 my-[10px]"></div>

          <div class="w-full flex flex-row flex-wrap gap-4 items-center" data-centres-container data-centers={JSON.stringify(centers)}>
              {centers?.map(center => (
                  <div class="relative cursor-pointer border group hover:bg-[linear-gradient(180deg,_#FFF_0%,_#FFF3F3_100%)] hover:border-red-200 border-[rgba(113,101,101,0.21)] px-7 py-[18px] rounded-[10px] w-[180px] max-md:w-[47%] h-[90px] flex flex-row items-center justify-center" data-type="state" data-id={center?.state} data-center-pill>
                      <Text type="base" class="font-[400] text-[#1c1c1c] group-hover:text-primary text-center">{center?.state}</Text>
                      <div class="w-[24px] h-[24px] transition-all duration-500 opacity-0 right-[20%] pointer-events-none absolute group-hover:right-[4%] group-hover:opacity-100">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                              <path d="M4.00049 12.9265L20.0005 12.9265M20.0005 12.9265L14.0005 6.92648M20.0005 12.9265L14.0005 18.9265" stroke="#EE7F82" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>
                      </div>
                  </div>
              ))}
          </div>
      </div>

  </div>
  )
}

export default FindCentre