import { ReactElement } from 'react'

export const Header = () :ReactElement => {
    const options = [
        { link: '/home', label: 'Home' },
        { link: '/about', label: 'About' },
        { link: '/services', label: 'Services' },
        { link: '/contact', label: 'Contact' },
    ]


  return (

    <div className="flex justify-between p-4 items-center" >
        <a href='/home' className='text-4xl'>
            <span className="text-black font-bold">UPC</span>
            <span className='text-secondary font-bold'>Link</span>
        </a>

        <div className="grow mx-[10%] justify-around flex ">
            {
                options.map((option, index) => {
                    return (
                        <a key={index} href={option.link} className='p-4 hover:text-secondary rounded-md transition-colors' >
                            {option.label}
                        </a>
                    )
                })
            }

        </div>


    </div>
  )
}