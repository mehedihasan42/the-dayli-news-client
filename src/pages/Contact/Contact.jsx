import React from 'react';

const Contact = () => {
    return (
        <div className='border border-black m-6 pt-4'>
       <div className='lg:flex justify-center lg:space-x-10 space-y-2'>
         <div data-aos="fade-down-right" className='bg-white p-4 rounded text-center'>
             <p>Phone</p>
             <p>01777349196</p>
         </div>
         <div data-aos="fade-down" className='bg-white p-4 rounded text-center'>
             <p>Email</p>
             <p>dewan.mehedi.01@gmail.com</p>
         </div>
         <div data-aos="fade-down-left" className='bg-white p-4 rounded text-center'>
             <p>Adress</p>
             <p>Dhaka,Bangladesh</p>
         </div>
       </div>
         
          <div className="hero w-full">
     <div className="hero-content w-full">
       <div className="card flex-shrink-0 w-full">
         <form action='https://formspree.io/f/xoqoanpp' method='POST' className="card-body">
          <div className='grid space-y-2 lg:grid-cols-2'>
          <div className="form-control lg:my-2">
             <input name='name' type="text" placeholder="Enter Name" className="input input-bordered lg:mx-2" required/>
           </div>
           <div className="form-control lg:my-2">
             <input name='email'  type="email" placeholder="Enter Email" className="input input-bordered" required/>
           </div>
           <div className="form-control lg:mx-2">
             <input name='number' type="number" placeholder="Enter Phone Number" className="input input-bordered" required/>
           </div>
           <div className="form-control">
             <input name='subject' type="text" placeholder="Enter Subject" className="input input-bordered" required/>
           </div>
          </div>
           <div className="form-control">
             <input name='message' type="text" placeholder="Message" className="input input-bordered h-28" required/>
           </div>
           <div className="form-control mt-6">
             <button type='submit' className="btn btn-outline btn-neutral lg:w-96 mx-auto">Submit Message</button>
           </div>
         </form>
       </div>
     </div>
   </div>
</div>  
    );
};

export default Contact;