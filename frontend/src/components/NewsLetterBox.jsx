import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandler =(e)=>{
        e.preventDefault();
        
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dignissimos aliquam blanditiis officiis quia aut tempora sint delectus cumque molestias dicta id rem porro omnis voluptatibus, alias mollitia? Animi, labore.</p>
        <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none ' required/>
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsLetterBox