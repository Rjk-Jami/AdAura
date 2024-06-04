import React from 'react';
import strategy_icon from '../../../assets/b_strategy_icon.svg'
import analytics_icon from '../../../assets/analytics_icon.svg'
import campaign_icon from '../../../assets/campaign_icon.svg'
import content_creator_icon from '../../../assets/content_cretor_icon.svg'
import optimization_icon from '../../../assets/optimization_icon.svg'
import store_design_icon from '../../../assets/store_design_icon.svg'
const AboutService = () => {
    return (
        <div className='my-10 mx-10'>
            <h4 className='text-center text-md text-p'>Services</h4>
            <h1 className='text-4xl font-bold text-center my-1'>What We do</h1>
            <p className='text-center max-w-md mx-auto'>We don't just focus on one area of your business, like SEO or PPC advertising; we take a holistic view of your entire Social Media business.</p>
            <div className="mt-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                    {/* 1 */}
                    <div className=" border hover:shadow-2xl p-10 rounded-2xl">
                        <img className='text-black' src={strategy_icon} alt="" />
                        <h1 className='font-bold text-2xl my-2'>Social Media Business Strategy</h1>
                        <p className=''>The suitable business model, product, and strategy need for making business happen.</p>
                        <button className='text-p font-semibold my-2' type='button'>Learn More</button>
                    </div>
                    {/* 2 */}
                    <div className=" border hover:shadow-2xl p-10 rounded-2xl">
                        <img className='text-black' src={store_design_icon} alt="" />
                        <h1 className='font-bold text-2xl my-2'>Store Design and Development</h1>
                        <p className=''>We make a store that is optimized for better conversion, and long-term growth.</p>
                        <button className='text-p font-semibold my-2' type='button'>Learn More</button>
                    </div>
                    {/* 3 */}
                    <div className=" border hover:shadow-2xl p-10 rounded-2xl">
                        <img className='text-black' src={content_creator_icon} alt="" />
                        <h1 className='font-bold text-2xl my-2'>Sales & Brand oriented Content</h1>
                        <p className=''>Attention is a digital currency we make content to grab your business attention.</p>
                        <button className='text-p font-semibold my-2' type='button'>Learn More</button>
                    </div>
                    {/* 4 */}
                    <div className=" border hover:shadow-2xl p-10 rounded-2xl">
                        <img className='text-black' src={campaign_icon} alt="" />
                        <h1 className='font-bold text-2xl my-2'>Digital Campaign Management</h1>
                        <p className=''>A comprehensive approach to driving conversions and increasing business ROI.</p>
                        <button className='text-p font-semibold my-2' type='button'>Learn More</button>
                    </div>
                    {/* 5 */}
                    <div className=" border hover:shadow-2xl p-10 rounded-2xl">
                        <img className='text-black' src={optimization_icon} alt="" />
                        <h1 className='font-bold text-2xl my-2'>Conversion Rate Optimization</h1>
                        <p className=''>This process is increasing the percentage of conversions from a website or app.</p>
                        <button className='text-p font-semibold my-2' type='button'>Learn More</button>
                    </div>
                    {/* 6 */}
                    <div className=" border hover:shadow-2xl p-10 rounded-2xl">
                        <img className='text-black' src={analytics_icon} alt="" />
                        <h1 className='font-bold text-2xl my-2'>Data tracking and web Analytics</h1>
                        <p className=''>Informed decisions is known as data tracking, measurement, and analysis</p>
                        <button className='text-p font-semibold my-2' type='button'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutService;