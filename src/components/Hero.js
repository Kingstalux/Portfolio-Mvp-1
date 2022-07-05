import React from 'react'
import WomanImg from '../assets/img/banner-woman2.webp'

export const Hero = () => {
    return (
        <section id="home" className="lg:h-{85vh} flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden">

            <div className="container mx-auto h-full">

                <div className="flex items-center h-full pt-8">

                    <div className="flex-1 flex">left</div>

                    <div className="hidden lg:flex flex-1 justify-end items-end h-full">
                        <img src={WomanImg} alt="my_picture" />
                    </div>

                </div>
            </div>

        </section>
    )
}
