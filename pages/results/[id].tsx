import type { NextPage } from 'next'
import useSWR from 'swr'
import React, { useState, useEffect, FC, useRef } from 'react'
import Footer from '../../components/footer'
// import Error from '../components/error'
import Nav from '../../components/Nav'
import { useRouter } from 'next/router'
import { fetcher } from '../../utils/fetcher'

const SearchLinks = () => {
  const [searchItem, setSearchItem] = useState<string>('')
  const [results, setResults] = useState<any[]>([])
  const router = useRouter()
  const {query, asPath, } = router
  const {id} = query

  const { data, error } = useSWR(`/api/results/${id}`, fetcher)

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
  }   

  const search = () => {
    // e.preventDefault()
    // const input = e.target as typeof e.target & {
    //   value: string
    // 
    if(searchItem.length < 1) return

    //ENCODE URL
    const encoded = encodeURIComponent(searchItem)
    router.push(
      {
        pathname: `/results/${encoded}`,
        query: {tags: encoded}
      },
      undefined,
      {shallow: true}
    )
  }
  

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => { 
    const input = e.currentTarget.value
    setSearchItem(input)
  }


  // const fetchData = async () => {
  //   try {
  //     if(!id) return
  //     const res = await fetch(`/api/results/${id}`)
  //     const data = await res.json()
  //     setResults(data)
  //   }catch(err){
  //     console.log(err)
  //   }
  // }

  // useEffect(() => {
  //   fetchData()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])

  return (
    <>
      <Nav />
      <div className='bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24'>
        <div className='relative max-w-xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
              Find a link
            </h2>
            <p className='mt-4 text-lg leading-6 text-gray-500'>
              Results
            </p>
          </div>
          <div className='mt-12'>
            <div
              className='grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div className='sm:col-span-2'>
                {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label> */}
                <div className='flex items-center justify-center'>
                  <form onSubmit={(e) => handleSubmit(e)} className='flex border-2 rounded'>
                    <input
                      type='text'
                      className='px-4 py-2 w-80'
                      placeholder='Search...' 
                      onChange={(e) => handleChange(e)}
                      value={searchItem}
                    />
                    <button
                      type='submit'
                      onClick={search} className='flex items-center justify-center px-4 border-l'>
                      <svg
                        className='w-6 h-6 text-gray-600'
                        fill='currentColor'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                      >
                        <path d='M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z' />
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RESULTS */}

      <Footer />
    </>
  )
}
export default SearchLinks  

// const handleChange = (e: React.ChangeEvent) => {
  //   e.preventDefault()
  //   const input = e.target as typeof e.target & {
  //     value: string
  //   }

  //   if(input.value.length < 1) return

  //   if(e.key === 'Enter'){
  //     const searchVal = input.value
  //     const encoded = encodeURIComponent(searchVal)
  //     router.push(
  //       {
  //         pathname: `/results/${encoded}`,
  //         query: {tags: encoded}
  //       },
  //       undefined,
  //       {shallow: true}
  //     )
  //   }
  // }
//Create layout component
//https://medium.com/nextjs/how-to-build-a-layout-in-nextjs-80d28d571673

//fix the query string format