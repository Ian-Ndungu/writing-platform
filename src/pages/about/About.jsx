import React from 'react'

const About = () => {
  return (
    <div className='mt-[120px]'>
        <div>
            <div className="w-full bg-yellow-600 flex justify-between p-10">
                <h1>About Us:</h1>
                <button className="bg-yellow-600 hover:bg-yellow-700 border-2 text-white w-[180px] h-[44px] font-bold rounded">Log In</button>
            </div>
            <div className="w-full   flex justify-between mt-[140px] mb-[24px] px-[20px]">
                <div className="w-[50%]">
                    <img src="/aboutus-1.a6619af6.svg" alt="screen" />
                </div>
                <div className="w-[40%]">
                    <p>
                        TopRatedWriters is an academic writing assistance company. We provide our help to the numerous clients looking for a professional writing service.
                        Our company was founded in 2024, when academic writing organizations just started to emerge. Since that time, we have grown from a small startup into a considerable enterprise. 
                        Our care for writers, aspiration for constant perfection, and focus on developing trustworthy relations are what make TopRatedWriters the best workplace for freelance writers from all over the world.
                    </p>
                </div>
            </div>
            
            <div className="w-full   flex justify-between mt-[140px] mb-[24px] px-[20px]">
                <div className="w-[50%]">
                    <p>
                        Our company’s long-term goal is to become the quality standard in the market of<br />
                        custom academic writing services. In particular, we strive for:<br />
                    </p>
                    <ul className='list-disc text-decoration ml-8'>
                            <li>Development of high-quality products</li> 
                            <li>Writing authentic, non-plagiarized papers</li> 
                            <li>Timely delivery of customers’ orders</li> 
                            <li>Providing our writers with a variety of options for professional development</li> 
                            <li>Creating a positive public image.</li> 
                    </ul>
                    <p>
                        We seek to gain our writers’ support in achieving these goals through teamwork. We also<br />
                        aspire to maintain the win-win system of responsibilities between the company and the <br />
                        freelancers’ team. Such a close partnership helps TopRatedWriters maintain the top position <br />
                        among the world enterprises.<br />
                    </p>
                    <p>
                        Our company appreciates its employees and values our continued partnership through <br />
                        understanding and following the common principles of the company. Our progress is demonstrated through:<br />
                    </p>
                    <ul className='list-disc text-decoration ml-8'>
                        <li>Innovation</li>
                        <li>Collaboration</li>
                        <li>Mutual respect</li>
                        <li>Development</li>
                        <li>Quality</li>
                    </ul>
                </div>
                <div className="w-[40%]" >
                    <img src="/about-image1.jpg" alt="about"  />
                </div>
            </div>
            <div className="w-full   flex justify-between mt-[140px] mb-[24px] px-[20px]">
                <div className="w-[40%]">
                    <img src='writer-4.4f789090.svg' alt='writer'/>
                </div>
                <div>
                    <h1>What We Do?</h1>
                    <p>
                        Our company offers a wide range of topics for writers. If you are an expert on the health <br />
                        industry or a history fan, you may enjoy writing articles or research papers on nursing or <br />
                        historical events. We deal with research papers, essays, creative writing, as well as <br />
                        dissertation chapters. <br />
                        As a newcomer, you may start exploring our writing platform by choosing short-term <br />
                        papers about the effects of global warming, political debates, the best types of <br />
                        leadership practices, mathematical projects, etc., moving slowly towards complicated <br />
                        assignments and research papers that require more effort but bring more remuneration as well. <br />

                        Freelance writing job is about discovering your strengths and talents and making them <br />
                        work with the customers’ demands. We will help you reveal your writing potential!
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About;