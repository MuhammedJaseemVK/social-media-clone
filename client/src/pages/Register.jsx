import React, { useState } from 'react'
import { TbSocial } from "react-icons/tb";
import { BsShare } from "react-icons/bs";
import { AiOutlineInteraction } from "react-icons/ai";
import { ImConnection } from "react-icons/im";
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { TextInput, CustomButton, Loading } from '../components';
import { BgImg } from '../assets/index';
const Register = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors } } = useForm({
      mode: "onChage"
    });

  const [errMsg, setErrMsg] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = async (data) => { }

  return (
    <div className='bg-bgColor w-full h-[100vh] flex justify-center items-center p-6'>
      <div className='w-full md:w-2/3 h-fit lg:h-full 2xl:h-5/6 py-8 lg:py-0 flex flex-row-reverse bg-primary rounded-xl overflow-hidden shadow-xl'>
        {/* LEFT */}
        <div className='w-full lg:w-1/2 h-full pt-10 2xl:px-20 flex flex-col justify-center'>
          <div className='w-full flex items-center gap-2 mb-6'>
            <div className='p-2 bg-[#065ad8] rounded text-white'>
              <TbSocial />
            </div>
            <span className='text-2xl text-[#065ad8] font-semibold'>MJ-social</span>
          </div>
          <p className='text-ascent-1 text-base font-semibold'>
            Create your account
          </p>
          <span className='text-sm mt-2 text-ascent-2'>Welcome back</span>
          <form onSubmit={handleSubmit} className='py-8 flex flex-col gap-5'>
            <div className='w-full flex flex-col md:flex-row gap-1 md:gap-2'>
              <TextInput
                name="firstName"
                placeholder="First Name"
                label="First Name"
                type="text"
                register={
                  register("firstName", {
                    required: "First Name is required"
                  })
                }
                styles="w-full"
                error={errors.firstName ? errors.firstName?.message : ""}
              />
              <TextInput
                name="lastName"
                placeholder="Last Name"
                label="Last Name"
                type="text"
                register={
                  register("lastName", {
                    required: "Last Name is required"
                  })
                }
                styles="w-full"
                error={errors.lastName ? errors.lastName?.message : ""}
              />
            </div>
            <TextInput
              name="email"
              placeholder="email@example.com"
              label="Email Address"
              type="email"
              register={
                register("email", {
                  required: "Email Adress is required"
                })
              }
              styles="w-full"
              error={errors.email ? errors.email?.message : ""}
            />
            <div className='w-full flex flex-col md:flex-row gap-1 md:gap-2'>
              <TextInput
                name="password"
                placeholder="Password"
                label="Password"
                type="password"
                styles="w-full"
                register={
                  register("password", {
                    required: "Password is required"
                  })
                }
                error={errors.password ? errors.email?.message : ""}
              />
              <TextInput
                label="Password"
                placeholder="Confirm password"
                type="password"
                styles="w-full"
                register={
                  register("cPassword", {
                    validate: (value) => {
                      const { password } = getValues();
                      if (password !== value) {
                        return "Passwords do not match"
                      }
                    }
                  })
                }
                error={errors.cPassword && errors.cPassword.type === "validate"
                  ? errors.cPassword?.message
                  : ""}
              />
            </div>

            {
              errMsg?.message && (
                <span
                  className={`text-sm ${errMsg?.status === "failed"
                    ? "text-[#f649494fe]"
                    : "text-[#2ba150fe]"
                    } mt-0.5`}
                >
                  {errMsg?.message}
                </span>
              )
            }

            {
              isSubmitting ? <Loading /> : <CustomButton
                type="submit"
                containerStyles={`inline-flex justify-center rounded-md bg-blue px-8 py-3 text-sm font-medium text-white outline-none`}
                title="Register"
              />
            }
          </form>
          <p className='text-ascent-2 text-sm text-center'>
            Already has an account?{" "}
            <Link
              to='/login'
              className='text-[#065ad8] font-semibold ml-2 cursor-pointer'
            >
              Login
            </Link>
          </p>
        </div>
        <div>

        </div>
        {/* RIGHT */}
        <div className="hidden w-1/2 h-full lg:flex flex-col items-center justify-center bg-blue">
          <div className='relative w-full flex items-center justify-center'>
            <img src={BgImg}
              alt="Bg Img"
              className='w-48 2xl:w-64 h-48 2xl:h-64 rounded-full object-cover'
            />
            <div className='absolute flex items-center gap-1 bg-white right-10 top-10 py-2 px-5 rounded-full'>
              <BsShare size={14} />
              <span className='text-xs font-medium'>Share</span>
            </div>
            <div className='absolute flex items-center gap-1 bg-white left-10 top-6 py-2 px-5 rounded-full'>
              <ImConnection />
              <span className='text-xs font-medium'>Connect</span>
            </div>
            <div className='absolute flex items-center gap-1 bg-white left-12 bottom-6 py-2 px-5 rounded-full'>
              <AiOutlineInteraction />
              <span className='text-xs font-medium'>Interact</span>
            </div>
          </div>

          <div className='mt-16 text-center'>
            <p className='text-white text-base'>
              Connect with friedns & have share for fun
            </p>
            <span className='text-sm text-white/80'>Share memories with friends and the world.</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register