import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import React, { FC, ReactElement, useEffect } from 'react'

const Table: FC = (data) => {

  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Name
            </th>
            <th scope='col' className='px-6 py-3'>
              Details
            </th>
            <th scope='col' className='px-6 py-3'>
              Link
            </th>
            <th scope='col' className='px-6 py-3'>
              Price
            </th>
            {/* <th scope='col' className='px-6 py-3'>
              <span className='sr-only'>Edit</span>
            </th> */}
          </tr>
        </thead>
        <tbody>
          <tr className='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Apple MacBook Pro 17
            </th>
            <td className='px-6 py-4'>Sliver</td>
            <td className='px-6 py-4'>Laptop</td>
            <td className='px-6 py-4'>$2999</td>
            <td className='px-6 py-4 text-right'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Microsoft Surface Pro
            </th>
            <td className='px-6 py-4'>White</td>
            <td className='px-6 py-4'>Laptop PC</td>
            <td className='px-6 py-4'>$1999</td>
            <td className='px-6 py-4 text-right'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Magic Mouse 2
            </th>
            <td className='px-6 py-4'>Black</td>
            <td className='px-6 py-4'>Accessories</td>
            <td className='px-6 py-4'>$99</td>
            <td className='px-6 py-4 text-right'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Google Pixel Phone
            </th>
            <td className='px-6 py-4'>Gray</td>
            <td className='px-6 py-4'>Phone</td>
            <td className='px-6 py-4'>$799</td>
            <td className='px-6 py-4 text-right'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
          <tr className='odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700'>
            <th
              scope='row'
              className='px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap'
            >
              Apple Watch 5
            </th>
            <td className='px-6 py-4'>Red</td>
            <td className='px-6 py-4'>Wearables</td>
            <td className='px-6 py-4'>$999</td>
            <td className='px-6 py-4 text-right'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                Edit
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table