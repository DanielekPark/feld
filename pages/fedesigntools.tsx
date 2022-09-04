import type { NextPage } from 'next'
import Image from 'next/image'
import templatemo from '/public/images/templatemo.png'
import Renderforest from '/public/images/renderforest.png'
import invisionapp from '/public/images/invisionapp.png'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Searchbar from '../components/searchbar'

const designTools = [
  {
    name: 'Templatemo',
    img: templatemo,
    details:
      'Bootstrap templates that are responsive HTML5 mobile-ready CSS layouts. Free download to use for your sites. You can freely use our templates for your commercial or personal purpose.',
    link: 'https://templatemo.com/',
  },
  {
    name: 'Renderforest',
    img: Renderforest,
    details: 'Free time-saving growth marketing tools to succeed: high quality videos, animations, mockups, logos, presentations, SMM graphics, and a professional website.',
    link: 'https://www.renderforest.com/',
  },
  {
    name: 'Invision App',
    img: invisionapp,
    details: 'Browse a library of free, high-quality UI kits, icon packs, and mockups',
    link: 'https://www.invisionapp.com/inside-design/design-resources/',
  },
]

//DESIGN RESOURCES FOR FRONT END
const FeDesignTools: NextPage = () => {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Tool Finder</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-4 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <span className='block xl:inline'>Design tools</span>
            </h1>
            <p className='mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4'>
              Design tools for developers
            </p>
            <Searchbar />
          </div>
        </div>
      </div>
      <div className='relative pt-10 pb-20 px-4 sm:px-6 lg:pt-18 lg:pb-28 lg:px-8'>
        <div className='absolute inset-0'>
          <div className='bg-white h-1/3 sm:h-2/3' />
        </div>
        <div className='relative max-w-7xl mx-auto'>
          <div className='text-center'>
            <h2 className='text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl'>
              Demos
            </h2>
          </div>
          <div className='mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none'>
            {designTools.map((item) => {
              const { name, img, details, link } = item
              return (
                <div
                  key={name}
                  className='flex flex-col rounded-lg shadow-lg overflow-hidden'
                >
                  {/* relative */}
                  <div className='flex-shrink-0 mx-auto'>
                    <Image src={img} alt='pattern' width={150} height={150} />
                  </div>
                  <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
                    <div className='flex-1 flex flex-col'>
                      <p className='text-sm font-medium text-blue-600 mt-auto'>
                        <a
                          href={link}
                          target='_blank'
                          rel='noreferrer'
                          className='hover:underline'
                        >
                          Try it
                        </a>
                      </p>
                    </div>
                    {/* absolute */}
                    <div className='mt-3 flex items-center'>
                      <div className='ml-3'>
                        <p className='text-sm font-medium text-gray-900'>
                          {details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeDesignTools