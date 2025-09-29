import React, { useEffect, useState } from 'react'
import Loading from './Loading';

export default function Orderonline() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    Name: '',
    Phone_no: '',
    Delivery_Address: '',
    Quality: ''
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { Name, Phone_no, Delivery_Address, Quality } = formData;
    const phoneNumber = '+919345263517';
    const WhatsappMessage = `** Contact Request **
      *name: ${Name}
      *Phone_no: ${Phone_no}
      *Delivery_Address: ${Delivery_Address}
      *Quality: ${Quality}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(WhatsappMessage)}`;
    window.open(whatsappUrl);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="bg-[url('/assets/images/online.jpg')] h-screen flex justify-center items-center w-full bg-no-repeat bg-center bg-cover">

        <form className='md:mt-0 mt-90 md:mb-0 mb-80 md:px-0 px-1'onSubmit={handleSubmit}>

          <div className='bg-black/70 lg:w-fit rounded-3xl lg:p-6 p-3 text-[#ff5600] '>
            <p className='lg:text-[35px] text-[20px] josefin-medium '>Meal Delivery Order Form</p>
            <p className='mb-1'>Name:</p>
            <div className='space-x-10 '>
              <input type='text' className='border-1 rounded p-1 focus:outline-0 md:mb-0 mb-2 w-full'required placeholder='Name' onChange={handleChange} value={formData.Name} id='Name' />
             
            </div>
            <div className='text-[#ff5600]'>
              <p>Phone No:</p>
              <input type="tel" className='w-full border-1 rounded focus:outline-0 p-1 ' required onChange={handleChange} value={formData.Phone_no} id='Phone_no' />
            </div>
            <div className='text-[#ff5600]'>
              <p>Delivery Address:</p>
              <input type="text" className='focus:outline-0 border-1 p-1 rounded w-full ' required onChange={handleChange} value={formData.Delivery_Address} id='Delivery_Address' />
            </div>
            <div className='p-2'>
              <div className='flex  items-center  '>
                <img src="assets/images/h2.jpg" alt="h2" className='h-30 w-30 rounded-2xl mb-1' />
                <div className='p-5'>
                  <p>Monday</p>
                  <p>$ 15.00</p>
                  <p className='mt-3'>Dish:</p>
                </div>
                <div className=''>
                  <p className=' text-[20px] mb-1'>Quality:</p>
                  <input type="tel" placeholder='Enter' className='border max-w-[70px] text-center focus:outline-0 rounded-3xl ' required onChange={handleChange} value={formData.Quality} id='Quality' />
                  <p>Vegetarian Bean Chili</p>
                </div>
              </div>
              <div className='flex  items-center  '>
                <img src="assets/images/h3.jpg" alt="h3" className='h-30 w-30 rounded-2xl mb-1' />
                <div className='p-5'>
                  <p>Monday</p>
                  <p>$ 15.00</p>
                  <p className='mt-3'>Dish:</p>
                </div>
                <div className=''>
                  <p className=' text-[20px] mb-1'>Quality:</p>
                  <input type="tel" placeholder='Enter' className='border max-w-[70px] text-center focus:outline-0 rounded-3xl ' required onChange={handleChange} value={formData.Quality} id='Quality' />
                  <p>Chicken Chili</p>
                </div>
              </div>
              <div className='flex  items-center  '>
                <img src="assets/images/h4.jpg" alt="h4" className='h-30 w-30 rounded-2xl mb-1' />
                <div className='p-5'>
                  <p>Monday</p>
                  <p>$ 15.00</p>
                  <p className='mt-3'>Dish:</p>
                </div>
                <div className=''>
                  <p className=' text-[20px] mb-1'>Quality:</p>
                  <input type="tel" placeholder='Enter' className='border max-w-[70px] text-center focus:outline-0 rounded-3xl' required onChange={handleChange} value={formData.Quality} id='Quality' />
                  <p>Smoked Honey Maple Ham</p>
                </div>
              </div>
            </div>
            <button className=' flex justify-center text-josefin-sans mx-auto' >
              <p className='bg-[#ff5600] text-white hover:bg-black/50 hover:text-[#ff5600] p-2 rounded-2xl ' >Summit Form</p>
            </button>
          </div>

        </form>
      </div>
    </div>
  )
}
