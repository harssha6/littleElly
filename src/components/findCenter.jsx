import React from 'react'
import Fuse from 'fuse.js'
import Text from './system/Text.jsx'
import MultiStyleText from './system/MultiStyleText.jsx'
import SearchIcon from '../icons/SearchIcon.svg'
import poweredBy from '../images/poweredBy.png'



const CenterPill = (props) => {
  const { onClick, label } = props
  return (
    <div onClick={onClick} className="relative cursor-pointer border group hover:bg-[linear-gradient(180deg,_#FFF_0%,_#FFF3F3_100%)] hover:border-red-200 border-[rgba(113,101,101,0.21)] px-7 py-[18px] rounded-[10px] w-[180px] max-md:w-[47%] h-[90px] flex flex-row items-center justify-center">
      <Text type="base" className="font-[400] text-[#1c1c1c] group-hover:text-primary text-center">{label}</Text>
      <div className="w-[24px] h-[24px] transition-all duration-500 opacity-0 right-[20%] pointer-events-none absolute group-hover:right-[4%] group-hover:opacity-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
          <path d="M4.00049 12.9265L20.0005 12.9265M20.0005 12.9265L14.0005 6.92648M20.0005 12.9265L14.0005 18.9265" stroke="#EE7F82" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  )
}


const FindCentre = (props) => {
  let { data } = props
  let { centers: centersData } = data

  const [centers, setCenters] = React.useState(centersData)
  const [searchQuery, setSearchQuery] = React.useState('')
  const [currentState, setCurrentState] = React.useState('')
  const [currentDistrict, setCurrentDistrict] = React.useState('')

  let baseURL = ''
  


  if (typeof window !== 'undefined') {
    baseURL = window.location.origin
  }



  const searchCentres = () => {
    const states = centers.map(center => center?.state).filter(state => state).map(item => ({ name: item, type: 'state' }))
    const districts = centers.map(center => center?.districts)
        .flat()
        .map(district => district?.district)
        .filter(district => district)
        .map(item => ({ name: item, type: 'district' }))
    const centres = centers.map(center => center?.districts).flat().map(district => district?.centres)
        .flat()
        .map(centre => centre?.centre)
        .filter(centre => centre)
        .map(item => ({ name: item, type: 'center' })) 

    const fuse = new Fuse([...states, ...districts, ...centres], {
        keys: ['name'],
        includeScore: true,
        threshold: 0.3
    })

    return fuse.search(searchQuery)

  }

  const searchResults = React.useMemo(() => {
    if (!searchQuery) return []
    return searchCentres()
  } , [searchQuery])

  

  const onPillClick = (type, name) => {

    const pillData = getPillData(type, name)
    console.log('clickk...', type, name, pillData)
    if (pillData.page && pillData.page.address) {
      if (typeof window !== 'undefined') {
        window.location.href = `${baseURL}/centre/${name}`
      }
    }

    if (type === 'state') {
        setSearchQuery('')
        setCurrentState(name)
        setCurrentDistrict('')
    } else if (type === 'district') {
        setSearchQuery('')
        setCurrentState(getState(name))
        setCurrentDistrict(name)
    }
  }

  const getState = (district) => {
    return centers.find(center => center.districts?.find(d => d.district === district))?.state
  }


  const isSearching = searchQuery !== ''

  const getPillData = (type, label) => {
    if (type === 'state') {
      const thisState = centers.find(center => center.state === label)
      return thisState
    } else if (type === 'district') {
      const thisDistrict = centers
        .map(center => center.districts)
        .flat()
        .find(district => district?.district === label)

      return thisDistrict
    } else if (type === 'center' || type === 'centre') {
      const thisCentre = centers
        .map(center => center.districts)
        .flat()
        .map(district => district?.centres)
        .flat()
        .find(centre => centre?.centre === label)
      
        return thisCentre

    }
    return {}
  }

  const getPillsData = (pills) => {
    return pills.map(pill => {
      const { type, label } = pill
      return getPillData(type, label)
    })
  }


      
  const renderPill = (pills) => {
    const pillsData = getPillsData(pills).map(pill => ({
      ...pill,
      label: pill?.centre || pill?.district || pill?.state,
      type: pill?.state
        ? 'state'
        : pill?.district
          ? 'district'
          : 'centre'
    }))

    const pillsDataGroupByPoweredByBoolean = pillsData.reduce((acc, pill) => {
      const key = pill.poweredBy ? 'poweredBy' : 'notPoweredBy'
      if (!acc[key]) {
        acc[key] = []
      }
      acc[key].push(pill)
      return acc
    }, {})

    if (searchQuery !== "") {
      return (
        <div className="flex flex-row flex-wrap gap-4 w-full items-center">
          {pills.map(pill => (
            <CenterPill onClick={() => { onPillClick(pill.type, pill.label) }} label={pill.label} />
          ))}
        </div>
      )
    }

    return (
      <div class="w-full">
      {(pillsDataGroupByPoweredByBoolean['notPoweredBy'] && (pillsDataGroupByPoweredByBoolean['notPoweredBy'].length > 0)) ? (
        <div>
          <h3 className="my-2 text-2xl font-bold capitalize py-2">Elly Centres</h3>
          <div className="flex flex-row flex-wrap gap-4 w-full items-center">
            {pillsDataGroupByPoweredByBoolean['notPoweredBy'].map((pill, i) => {
              return (
                <CenterPill onClick={() => { onPillClick(pill.type, pill.label) }} label={pill.label} />
              )
            })}
          </div>
        </div>
      ) : <div />}


      {(pillsDataGroupByPoweredByBoolean['poweredBy'] && (pillsDataGroupByPoweredByBoolean['poweredBy'].length > 0)) ? (
        <div>
          <img src={poweredBy.src} alt="Powered By" class="w-[145px] py-6" />
          <div className="flex flex-row flex-wrap gap-4 w-full items-center">
            {console.log('pillsDataGroupByPoweredByBoolean', pillsDataGroupByPoweredByBoolean['poweredBy'])}
            {pillsDataGroupByPoweredByBoolean['poweredBy'].map((pill, i) => {
              return (
                <CenterPill onClick={() => { onPillClick(pill.type, pill.label) }} label={pill.label} />
              )
            })}
          </div>
        </div>
      ) : <div />}

       
      </div>
    )
  }

  const renderCentres = (centresLabel, stage) => {
    if (stage === 'search') {
      const groupByType = searchResults.reduce((acc, result) => {
        const { type, name } = result.item
        if (!acc[type]) {
          acc[type] = []
        }
        acc[type].push(name)
        return acc
      }, {})

      const groupKeys = Object.keys(groupByType)

      return (
        <div className="w-full" data-centres-container>
          {groupKeys.map(type => (
            <div className="py-2">
              <h3 className="my-2 text-2xl font-bold capitalize">{type}</h3>
              <div className="w-full flex flex-row flex-wrap gap-4 items-center">
                {renderPill(groupByType[type].map((name, index) => ({ label: name, type })))}
              </div>
            </div>
          ))}
        </div>
      )
    }
    
    return renderPill(centresLabel)
  }

  const isStateView = !currentState && !currentDistrict && !isSearching
  const isDistrictView = currentState && !currentDistrict && !isSearching
  const isCentreView = currentDistrict && !isSearching

  let districts = centers.find(center => center?.state === currentState)?.districts || []

  let thisDistrict = districts.find(district => district?.district === currentDistrict) || { centres: []}
  let ellyCenters = thisDistrict?.centres.map(centre => centre?.centre)

  const activeBreadCrumbClass = 'text-[#1c1c1c] underline'

  console.log('isStateView' && isStateView)
  
  return (
    <div className="flex flex-col gap-l items-center p-[60px] px-[90px] max-md:px-[20px] max-md:py-[40px]">
      <div data-appear>
          <Text type="h2" className="text-center">
                 Our
              <br />
              <MultiStyleText
                classes={["text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary","text-primary", "text-purple", "text-green-200", "text-orange-200", "text-purple", "text-primary", "text-green-200", "text-orange-200"]}
                text="Centers of Joy"
              ></MultiStyleText>
          </Text>
      </div>  
      
      <div data-appear={1} className="relative w-full max-w-[844px] gap-2 flex flex-row justify-end py-[6px]  pr-[10px] border-[1px] border-[#ddd] rounded-full" style={{
          boxShadow: '0px 1.366px 2.732px 0px rgba(0, 0, 0, 0.08), 0px 4.098px 10px 0px rgba(0, 0, 0, 0.10)'
      }}>
          <input
              className="w-full pl-[35px] max-md:pl-[20px] h-full absolute top-0 z-10 left-0 rounded-full text-[18px] max-md:text-[16px] font-bold placeholder:text-[#717171]/50 focus:outline-dotted focus:outline-primary focus:outline-[2px] focus:outline-offset-4"
              placeholder="Search by location"
              type="text"
              data-search-center
              value={searchQuery}
              onChange={() => setSearchQuery(event.target.value)}
          />
          <button className="w-[65px] h-[65px] max-md:w-[40px] max-md:h-[40px] bg-primary rounded-full flex-shrink-0 relative z-20 flex justify-center items-center">
              <div className="w-[33px] h-[33px] relative top-[3px]">
                  <img className="w-full h-full" src={SearchIcon.src} alt="Search Icon" />
              </div>
          </button>
      </div>
      <div data-appear={2} class="self-start  border-[#B6B6B6] border-l-[3px] pl-6">
        <div class='p-[3px]' />
        <Text type="base" className="flex flex-row max-md:flex-col items-center max-md:items-start gap-1 max-md:gap-0"><span class="font-bold flex-shrink-0 flex flex-row max-md:flex-col gap-1">Elly Centres <span class="max-md:hidden block">-</span> </span><br class="hidden max-md:block" />Schools carry Little Elly brand and are managed by our family of franchisees.</Text>
        <div class='p-2' />
        <div class="flex flex-row items-center max-md:gap-4 max-md:flex-col max-md:items-start gap-1">
          <img src={poweredBy.src} class="h-[40px] max-md:h-[25px]" />
          <Text type="base" className="flex flex-row max-md:flex-col items-center max-md:items-start gap-1"><span class="font-bold">{' '} <span class="max-md:hidden block">-</span> </span>Schools supported by Little Elly’s curriculum and resources.</Text>
        </div>
        <div class='p-[3px]' />
      </div>


      <div data-appear={2} className="w-full  px-[30px] py-6 bg-white border rounded-[12px] border-black/10">
            {!isSearching && 
              <Text type="base">
                  <div className="font-[600] flex flex-row text-[#7b7b7b]">
                      <div 
                        onClick={() => {
                          setCurrentState('')
                          setCurrentDistrict('')
                        }}
                        className={"block cursor-pointer " + activeBreadCrumbClass}
                      >Locations</div>
                      {currentState && (
                          <>
                              <span className="mx-[10px]">{'>'}</span>
                              <div 
                                onClick={() => {
                                  setCurrentDistrict('')
                                }}
                                className={"cursor-pointer " + (isDistrictView ? activeBreadCrumbClass : '')}
                              >{currentState}</div>
                          </>
                      )}
                      {currentDistrict && (
                          <>
                              <span className="mx-[10px]">{'>'}</span>
                              <div className={"cursor-pointer " + (isCentreView ? activeBreadCrumbClass : '')}>{currentDistrict}</div>
                          </>
                      )}
                  </div>
              </Text>
            }
            {isSearching && 
              <Text type="base">
                  <div className="font-[600] flex flex-row text-[#7b7b7b]">
                      <div 
                        onClick={() => {
                          setCurrentState('')
                          setCurrentDistrict('')
                        }}
                        className={"block cursor-pointer " + (isStateView ? activeBreadCrumbClass : '')}
                      >Locations</div>
                 
                      <span className="mx-[10px]">{'>'}</span>
                      <div 
                        onClick={() => {
                          setCurrentDistrict('')
                        }}
                      >Search Results</div>

                  </div>
              </Text>
            }
          <div className="w-full h-[1px] bg-black/10 my-[10px]"></div>

          {isStateView && renderCentres(centers.map(center => ({label: center.state, type: 'state'})))}
          {isSearching && renderCentres(searchResults.map(result => ({ label: result.item?.name, type: result.item?.type })), 'search')}
          {isDistrictView && renderCentres(districts.map(district => ({ label: district.district, type: 'district' })))}
          {isCentreView && renderCentres(ellyCenters.map(centre => ({ label: centre, type: 'center' })))}
      </div>

  </div>
  )
}

export default FindCentre