import React, { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
const CreateEvent = () => {
    const [open, setOpen] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection",
        }
    ])
    // console.log(format(date[0].startDate, 'PP').split(',')[0].split(' ').join('').reverse())
    const startDate=format(date[0].startDate, 'PP').split(',')[0].split(' ').reverse()
    console.log(startDate)
    const endDate=format(date[0].endDate, 'PP').split(',')[0].split(' ').reverse()
    return (
        <div className='bg-[#F6F2FF] min-h-screen'>
            <div className='max-w-[745px] mx-auto'>
                <h2 className='text-center text-[50px] py-20 font-bold text-[#240D57]'>Schedule a event</h2>
                <div>
                    <div>
                        <div 
                        className='flex items-center gap-5'
                        >
                            <BiCalendar 
                            className='text-[26px] text-[#8456EC]'
                            />
                            <div
                            className='border-2 border-solid border-[#8456EC] rounded-md py-[10px] px-[21px]'
                            >
                                {/* <div></div>
                                <div></div> */}
                                <span 
                                className='
                                text-[#4F4F4F] font-bold
                                '>
                                    {
                                        `${startDate} to ${endDate}`
                                    }
                                </span>
                            </div>
                            {
                                open && <span className='absolute z-10 top-[46px] md:left-[-136px] left-[-90px]'>
                                    <DateRange
                                        editableDateInputs={true}
                                        onChange={(item) => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}
                                        minDate={new Date()}
                                    // maxDate={date[0].startDate}

                                    />
                                </span>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;