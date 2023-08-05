import React from 'react'
import { useForm } from 'react-hook-form';

const SingUp = () => {
   
  //  const {register,handleSubmit,formState: { errors }} = useForm();
  //   const onSubmit = (data) => console.log(data) 

    return (
    <div className="bg-White w-full h-screen  mt-[10rem]">
      <div className=" max-w-6xl mx-auto text-White flex justify-center items-center">
        <div className='relative flex h-screen w-screen flex-col md:items-center md:justify-center'>
        <form
        onSubmit={(e)=> e.preventDefault()}
        className="absolute mt-24 space-y-8 rounded bg-Background2 shadow-md px-6 py-10 md:mt-0 md:max-w-md"
      >
        <h1 className="my-6 text-2xl text-center  font-semibold text-Heading">Sing Up</h1>
        <label className="inline-block w-full">
          <input
            className="w-full rounded-lg bg-Text py-5 text-lg px-2 text-White outline-none"
            type="email"
            required
          />
        </label>
        <label className="inline-block w-full">
          <input
            className="w-full rounded-lg bg-Text py-5 text-lg px-2 text-White outline-none"
            type="password"
            required
          />
        </label>
        <button className="mt-10 w-full rounded-lg bg-primary p-4 ">Sing Up</button>
      </form>
        </div>
      </div>
       {/* <div className="relative flex h-screen w-screen flex-col md:items-center md:justify-center">
      <Link to="/">
        logo
      </Link>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="absolute mt-24 space-y-8 rounded bg-black/70 px-6 py-10 md:mt-0 md:max-w-md"
      >
        <h1 className="my-6 text-2xl  font-semibold text-white">Sing Up</h1>
        <label className="inline-block w-full">
          <input
            {...register("Email", { required: true })}
            className="w-full rounded-lg bg-[#3a3a3a] py-5 text-lg px-2 text-white outline-none"
            type="email"
          />
          {errors.Email && <p className='pt-2 text-sm text-orange-500'>This Field Is required</p>}
        </label>
        <label className="inline-block w-full">
          <input
            {...register("password", { required: true })}
            className="w-full rounded-lg bg-[#3a3a3a] py-5 text-lg px-2 text-white outline-none"
            type="password"
          />
          {errors.password && <p className='pt-2 text-sm text-orange-500'>This Field Is required</p>}
        </label>
        <button className="mt-10 w-full rounded-lg bg-[#e50914] p-4 ">Sing Up</button>
      </form>
    </div> */}
    </div>
  );
}

export default SingUp