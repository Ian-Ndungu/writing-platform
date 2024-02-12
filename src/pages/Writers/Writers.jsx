import React, { useState } from 'react';
import { Avatar } from "rsuite";

const Writers = () => {
    const [order, setOrder] = useState('');
    const [discipline, setDiscipline] = useState('');
    const [rating, setRating] = useState('');

    const handleOrderChange = (e) => {
        setOrder(e.target.value);
      };
    const handleDisciplineChange = (e) => {
        setDiscipline(e.target.value);
      };
    const handleRatingChange = (e) => {
        setRating(e.target.value);
      };
  return (
    <div className=''>
        <div className='flex justify-between w-full '>
            <div>
                <img src="/writers_count.svg" alt="writers_count" />
                <p>194 Writers active</p>
            </div>
            <div>
                <img src="/writers_online.svg" alt="writers_online" />
                <p>73 Online now</p>
            </div>
            <div>
                <img src="/quality_score.svg" alt="quality_score" />
                <p>9.6  Average quality score</p>
            </div>
        </div>
        <div className='border-2 h-[120px]'>
            {/* <div className='flex justify-between'>
                <p>Finished Orders</p>
                <p>Discipline</p>
                <p>Sorted by</p>
            </div> */}

            <div className='flex items-center justify-between'>
                <div className='flex-1'>
                    <label htmlFor="order" className="block text-gray-700">Finished Orders</label>
                    <select
                        id="orders"
                        className="form-select h-10 mt-1 block w-[60%] rounded-md border-2"
                        required
                        value={order}
                        onChange={handleOrderChange}
                    >
                        <option value="">All</option>
                        <option value="0-10">0-10</option>
                        <option value="10-50">10-50</option>
                        <option value="50-100">50-100</option>
                        <option value="100-500">100-500</option>
                        <option value="1000+">1000+</option>
                    </select>
                </div>
                <div className='flex-1'>
                    <label htmlFor="discipline" className="block text-gray-700">Discipline:</label>
                    <select
                        id="discipline"
                        className="form-select h-10 mt-1 block w-[60%] rounded-md border-2"
                        required
                        value={discipline}
                        onChange={handleDisciplineChange}
                    >
                        <option value="">All Discipline</option>
                        <option value="Art">Art</option>
                        <option value="Business and management">Business and management</option>
                        <option value="Computer science">Computer science</option>
                        <option value="Economics">Economics</option>
                        <option value="Engineering">Engineering</option>
                        <option value="English and Literature">English and Literature</option>
                        <option value="Health and Life Sciences">Health and Life Sciences</option>
                        <option value="History">History</option>
                        <option value="Humanities">Humanities</option>
                        <option value="Law">Law</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Mathematics and Statistics">Mathematics and Statistics</option>
                        <option value="Natural Science">Natural Science</option>
                        <option value="Philosophy">Philosophy</option>
                        <option value="Political Science">Political Science</option>
                        <option value="Psychology and Education">Psychology and Education</option>
                        <option value="Religion / Religion">Religion / Religion</option>
                        <option value="Social Science">Social Science</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className='flex-1'>
                    <label htmlFor="rating" className="block text-gray-700">Sorted by:</label>
                    <select
                        id="rating"
                        className="form-select h-10 mt-1 block w-[60%] rounded-md border-2"
                        required
                        value={rating}
                        onChange={handleRatingChange}
                    >
                        <option value="">Rating</option>
                        <option value="Orders">Orders</option>
                        <option value="Awards">Awards</option>
                    </select>
                </div>
            </div>

        </div>
        <div>
            <div className='mt-[50px]'><p>Showing 8 out of 50 writers</p></div>
            
            <div className='mt-[30px]' >
            
                <div className="flex items-center gap-4 border border-gray-300 h-[85px] hover:bg-gray-100 hover:shadow-md transition duration-300">
                    <Avatar
                    circle
                    size="lg"
                    src="https://avatars.githubusercontent.com/u/15609339"
                    alt="@hiyangguo"
                    />
                    <div>
                        <p className="text-[#6380d1] text-[18px] font-bold">Pro-Richie</p>
                        <div className="flex items-center">
                            <img src="/quality_score.svg" alt="quality_score" className="w-5 h-5 mr-2" />
                            <p className="text-sm">10/10</p>
                        </div>

                        
                    </div>
                    <p className="ml-[180px] font-bold">5709 Finished Orders</p>
                    <div class="flex items-center">
                        <img src="/ratings/triple10.svg" alt="triple10" class="w-12 h-12 -ml-2 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/nineplus.svg" alt="nineplus" class="w-12 h-12 -ml-4 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/punctuality_proofed.svg" alt="punctuality_proofed" class="w-12 h-12 -ml-6 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/reliability_proofed.svg" alt="reliability_proofed" class="w-12 h-12 -ml-8 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/customer_loyalty.svg" alt="customer_loyalty" class="w-12 h-12 -ml-10 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/writer_of_month.svg" alt="writer_of_month" class="w-12 h-12 -ml-12 transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>

                    <button className="rounded-full border-2 border-[#6380d1] text-[#6380d1] px-4 py-2 mt-2 ml-auto">Request Writer</button>
                </div>

                <div className="flex items-center gap-4 border border-gray-300 h-[85px] hover:bg-gray-100 hover:shadow-md transition duration-300">
                    <Avatar
                    circle
                    size="lg"
                    src="https://avatars.githubusercontent.com/u/15609339"
                    alt="@hiyangguo"
                    />
                    <div >
                        <p className="text-[#6380d1] text-[18px] font-bold">DocKamen</p>
                        <div className="flex items-center">
                            <img src="/quality_score.svg" alt="quality_score" className="w-5 h-5 mr-2" />
                            <p className="text-sm">10/10</p>
                        </div>

                    </div>

                    <p className="ml-[180px] font-bold">5709 Finished Orders</p>
                    <div class="flex items-center">
                        <img src="/ratings/triple10.svg" alt="triple10" class="w-12 h-12 -ml-2 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/nineplus.svg" alt="nineplus" class="w-12 h-12 -ml-4 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/punctuality_proofed.svg" alt="punctuality_proofed" class="w-12 h-12 -ml-6 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/reliability_proofed.svg" alt="reliability_proofed" class="w-12 h-12 -ml-8 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/customer_loyalty.svg" alt="customer_loyalty" class="w-12 h-12 -ml-10 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/writer_of_month.svg" alt="writer_of_month" class="w-12 h-12 -ml-12 transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <button className="rounded-full border-2 border-[#6380d1] text-[#6380d1] px-4 py-2 mt-2 ml-auto">Request Writer</button>

                </div>
                <div className="flex items-center gap-4 border border-gray-300 h-[85px] hover:bg-gray-100 hover:shadow-md transition duration-300">
                    <Avatar
                    circle
                    size="lg"
                    src="https://avatars.githubusercontent.com/u/15609339"
                    alt="@hiyangguo"
                    />
                    <div>
                        <p className="text-[#6380d1] text-[18px] font-bold">Erickson</p>
                        <div className="flex items-center">
                            <img src="/quality_score.svg" alt="quality_score" className="w-5 h-5 mr-2" />
                            <p className="text-sm">10/10</p>
                        </div>
                    </div>
                    <p className="ml-[180px] font-bold">5709 Finished Orders</p>
                    <div class="flex items-center">
                        <img src="/ratings/triple10.svg" alt="triple10" class="w-12 h-12 -ml-2 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/nineplus.svg" alt="nineplus" class="w-12 h-12 -ml-4 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/punctuality_proofed.svg" alt="punctuality_proofed" class="w-12 h-12 -ml-6 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/reliability_proofed.svg" alt="reliability_proofed" class="w-12 h-12 -ml-8 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/customer_loyalty.svg" alt="customer_loyalty" class="w-12 h-12 -ml-10 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/writer_of_month.svg" alt="writer_of_month" class="w-12 h-12 -ml-12 transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <button className="rounded-full border-2 border-[#6380d1] text-[#6380d1] px-4 py-2 mt-2 ml-auto">Request Writer</button>

                </div>
                <div className="flex items-center gap-4 border border-gray-300 h-[85px] hover:bg-gray-100 hover:shadow-md transition duration-300">
                    <Avatar
                    circle
                    size="lg"
                    src="https://avatars.githubusercontent.com/u/15609339"
                    alt="@hiyangguo"
                    />
                    <div>
                        <p className="text-[#6380d1] text-[18px] font-bold">NunzioLin</p>
                        <div className="flex items-center">
                            <img src="/quality_score.svg" alt="quality_score" className="w-5 h-5 mr-2" />
                            <p className="text-sm">10/10</p>
                        </div>
                    </div>
                    <p className="ml-[180px] font-bold">5709 Finished Orders</p>
                    <div class="flex items-center">
                        <img src="/ratings/triple10.svg" alt="triple10" class="w-12 h-12 -ml-2 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/nineplus.svg" alt="nineplus" class="w-12 h-12 -ml-4 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/punctuality_proofed.svg" alt="punctuality_proofed" class="w-12 h-12 -ml-6 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/reliability_proofed.svg" alt="reliability_proofed" class="w-12 h-12 -ml-8 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/customer_loyalty.svg" alt="customer_loyalty" class="w-12 h-12 -ml-10 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/writer_of_month.svg" alt="writer_of_month" class="w-12 h-12 -ml-12 transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <button className="rounded-full border-2 border-[#6380d1] text-[#6380d1] px-4 py-2 mt-2 ml-auto">Request Writer</button>

                </div>
                <div className="flex items-center gap-4 border border-gray-300 h-[85px] hover:bg-gray-100 hover:shadow-md transition duration-300">
                    <Avatar
                    circle
                    size="lg"
                    src="https://avatars.githubusercontent.com/u/15609339"
                    alt="@hiyangguo"
                    />
                    <div>
                        <p className="text-[#6380d1] text-[18px] font-bold">edna</p>
                        <div className="flex items-center">
                            <img src="/quality_score.svg" alt="quality_score" className="w-5 h-5 mr-2" />
                            <p className="text-sm">10/10</p>
                        </div>
                    </div>
                    <p className="ml-[180px] font-bold">5709 Finished Orders</p>
                    <div class="flex items-center">
                        <img src="/ratings/triple10.svg" alt="triple10" class="w-12 h-12 -ml-2 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/nineplus.svg" alt="nineplus" class="w-12 h-12 -ml-4 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/punctuality_proofed.svg" alt="punctuality_proofed" class="w-12 h-12 -ml-6 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/reliability_proofed.svg" alt="reliability_proofed" class="w-12 h-12 -ml-8 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/customer_loyalty.svg" alt="customer_loyalty" class="w-12 h-12 -ml-10 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/writer_of_month.svg" alt="writer_of_month" class="w-12 h-12 -ml-12 transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <button className="rounded-full border-2 border-[#6380d1] text-[#6380d1] px-4 py-2 mt-2 ml-auto">Request Writer</button>

                </div>
                <div className="flex items-center gap-4 border border-gray-300 h-[85px] hover:bg-gray-100 hover:shadow-md transition duration-300">
                    <Avatar
                    circle
                    size="lg"
                    src="https://avatars.githubusercontent.com/u/15609339"
                    alt="@hiyangguo"
                    />
                    <div>
                        <p className="text-[#6380d1] text-[18px] font-bold">A-Y</p>
                        <div className="flex items-center">
                            <img src="/quality_score.svg" alt="quality_score" className="w-5 h-5 mr-2" />
                            <p className="text-sm">10/10</p>
                        </div>
                    </div>
                    <p className="ml-[180px] font-bold">5709 Finished Orders</p>
                    <div class="flex items-center">
                        <img src="/ratings/triple10.svg" alt="triple10" class="w-12 h-12 -ml-2 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/nineplus.svg" alt="nineplus" class="w-12 h-12 -ml-4 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/punctuality_proofed.svg" alt="punctuality_proofed" class="w-12 h-12 -ml-6 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/reliability_proofed.svg" alt="reliability_proofed" class="w-12 h-12 -ml-8 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/customer_loyalty.svg" alt="customer_loyalty" class="w-12 h-12 -ml-10 transition-all duration-300 ease-in-out hover:scale-110" />
                        <img src="/ratings/writer_of_month.svg" alt="writer_of_month" class="w-12 h-12 -ml-12 transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <button className="rounded-full border-2 border-[#6380d1] text-[#6380d1] px-4 py-2 mt-2 ml-auto">Request Writer</button>

                </div>

                <div className='flex justify-between w-full'>
                    <div className="mt-8">

                    <button className="bg-[#0080d1] hover:bg-blue-800 text-white font-bold w-[160px] h-[43px] rounded-full mt-4">Load More</button>
                    </div>
                    <div className="flex items-center">
                        <p><a href="/" className="text-[#0080d1] ">Learn about Ratings & Rewards</a></p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#0080d1" d="M13.47 8.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H6.5a.75.75 0 0 1 0-1.5h9.69z"/></svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Writers;