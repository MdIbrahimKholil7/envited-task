import React, { useState } from 'react';
import eventImg from '../../assets/Birthday cake.png'
import { BiCalendar, } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { UseContext } from '../../App';
const Event = () => {
    const details = React.useContext(UseContext)
    const { eventDetails } = details || {}
    const [open, setOpen] = useState(false)
    const [update, setUpdate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])

    // formating date 
    const startDate = format(date[0].startDate, 'PP').split(',')[0].split(' ').reverse()
    const endDate = format(date[0].endDate, 'PP').split(',')[0].split(' ').reverse()

    const handleDate = (item) => {
        setDate([item.selection])
        setUpdate(true)
    }
    return (
        <div>
            <div className="hero min-h-screen w-full md:py-20 y-0 bg-[#fff]">
                <div className="hero-content w-full px-0 md:px-20 py-0 justify-between items-start flex-col lg:flex-row-reverse">
                    <img src={
                        eventImg
                    } className="sm:max-w-[500px] w-full sm:mx-auto  mb-10 lg:mb-0 rounded-lg shadow-2xl" alt='eventImg' />
                    <div 
                    className='px-5'
                    >
                        <h1 className="text-[28px] md:text-[48px]    font-bold">{eventDetails?.eventName}</h1>
                        <p className='py-4 font-bold text-[#828282]'>{eventDetails?.host}</p>
                        <div>
                            <div
                                className='flex items-center gap-4'
                            >
                                <BiCalendar
                                    className='text-[26px] text-[#8456EC]'
                                />
                                <div
                                    className=' py-4 relative '
                                >

                                    <p
                                        onClick={() => setOpen(!open)}
                                        className='
                                text-[#4F4F4F] font-bold cursor-pointer
                                '>
                                       {update && <p
                                       className='text-[#240D57] text-[18px]'
                                       >
                                            {
                                                update && `${startDate} 6PM`
                                            }
                                        </p>}
                                        {update && <p
                                        className='text-[#4F4F4F] text-[18px]'
                                        >
                                            {
                                                update && `${endDate} 1PM`
                                            }
                                        </p>}
                                        {!update && <p
                                         className='text-[#240D57] text-[18px]'
                                        >
                                            {
                                                 `${eventDetails?.startDate} 6PM`
                                            }
                                        </p>}
                                        {!update && <p
                                        className='text-[#4F4F4F] text-[18px]'
                                        >
                                            {
                                                 `${eventDetails?.endDate} 1PM`
                                            }
                                        </p>}
                                    </p>
                                    {
                                        open && <span className='absolute z-10 top-[66px] md:left-[-6px] left-[-90px]'>
                                            <DateRange
                                                editableDateInputs={true}
                                                onChange={(item) => handleDate(item)}
                                                moveRangeOnFirstSelection={false}
                                                ranges={date}
                                                minDate={new Date()}


                                            />
                                        </span>
                                    }
                                </div>

                            </div>
                            <div className='flex gap-4'>
                                <div>
                                    <p><HiOutlineLocationMarker
                                    className='text-[#8456EC] text-[26px]'
                                    /></p>
                                </div>
                                <div>
                                    <p className='text-[#240D57] font-bold' >Street name</p>
                                    
                                    <p
                                    className='text-[#4F4F4F] font-bold'
                                    >
                                        {
                                        eventDetails?.location
                                        }</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Event;