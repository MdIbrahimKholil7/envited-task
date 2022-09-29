import React, { useState } from 'react';
import { BiCalendar, BiRightArrowAlt } from 'react-icons/bi';
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
// import TimePicker from 'react-time-picker-input'
// import "react-time-picker-input/dist/components/TimeInput.css"
import { UseContext } from '../../App';
import { useNavigate } from 'react-router-dom';
const CreateEvent = () => {
    const details = React.useContext(UseContext)
    const {setEventDetails}=details ||{}
    const [open, setOpen] = useState(false)
    const [value, onChange] = useState(new Date());
    const navigate=useNavigate()
    const [eventName, setEventName] = useState('')
    const [host, setHost] = useState('')
    const [location, setLocation] = useState('')
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

    const handleForm = (e) => {
        e.preventDefault()
       
        setEventDetails({
            eventName,
            host,
            location,
            startDate,
            endDate
        })

        navigate('/event')
    }

    return (
        <div className='bg-[#F6F2FF] min-h-screen pb-20'>
            <div className='md:max-w-[745px] w-full mx-auto'>
                <h2 className='text-center md:text-[50px] text-[28px] py-20 font-bold text-[#240D57]'>Schedule a event</h2>
                <div>
                    <div className='flex justify-center '>
                        <div
                            className='flex items-center gap-5'
                        >
                            <BiCalendar
                                className='text-[26px] text-[#8456EC]'
                            />
                            <div
                                className='border-2 border-solid border-[#8456EC] rounded-md py-[10px] px-[21px] relative '
                            >

                                <span
                                    onClick={() => setOpen(!open)}
                                    className='
                                text-[#4F4F4F] font-bold cursor-pointer
                                '>
                                    {
                                        `${startDate} to ${endDate}`
                                    }
                                </span>
                                {
                                    open && <span className='absolute z-10 top-[46px] md:left-[-136px] left-[-90px]'>
                                        <DateRange
                                            editableDateInputs={true}
                                            onChange={(item) => setDate([item.selection])}
                                            moveRangeOnFirstSelection={false}
                                            ranges={date}
                                            minDate={new Date()}


                                        />
                                    </span>
                                }
                            </div>

                        </div>
                      
                    </div>
                    <div>
                        <div className='md:px-20 px-4'>

                            <div className="card px-10 flex-shrink-0 mt-20 w-full shadow-2xl bg-base-100">
                                <p className='text-center mt-7 text-2xl font-bold text-[#240D57]'>Please Enter Your Event Details</p>
                                <form 
                                onSubmit={handleForm}
                                >
                                    <div className="card-body">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Event Name</span>
                                            </label>
                                            <input
                                                onChange={(e) => setEventName(e.target.value)}
                                                required type="text" placeholder="Event name" className="input input-bordered" />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Host Name</span>
                                            </label>
                                            <input
                                                onChange={(e) => setHost(e.target.value)}
                                                required type="text" placeholder="Host name" className="input input-bordered" />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Location</span>
                                            </label>
                                            <input
                                                onChange={(e) => setLocation(e.target.value)}
                                                required type="text" placeholder="Location" className="input input-bordered" />

                                        </div>
                                        <div className="form-control mt-6">
                                            <button className="btn bg-[#8456EC] text-white hover:bg-[#8456EC]">Next <span>
                                                <BiRightArrowAlt className='text-[26px]' />
                                            </span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default CreateEvent;