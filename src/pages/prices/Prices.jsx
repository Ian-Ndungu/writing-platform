import React, { useState } from "react";

const Prices = () => {
    const [showSample, setShowSample] = useState("Sample");
  return (
    <>
        <div className='w-[80%] '>
            <div className="flex items-center gap-[100px] text-[#b0b9ce] text-16 font-bold">
                <p onClick={() => setShowSample("Sample")} className={showSample === "Sample" ? "text-[#0a81d1] border-b-2 border-blue-500" : ""}>Sample writing </p>
                <p onClick={() => setShowSample("Editing")} className={showSample === "Editing" ? "text-[#0a81d1] border-b-2 border-blue-500" : ""}>Editing or rewriting</p>
            </div>

            {showSample === "Sample" && (
            <div className="flex justify-between items-center text-16 border-b-2 border-gray-300 bg-white rounded-lg shadow-md h-full w-full p-[20px]">
                <div>
                    <p className="flex items-center text-16 font-bold">Price/Page*</p>
                    <p className="flex items-center text-16 font-bold">High School</p>
                    <p className="flex items-center text-16 font-bold">Undergraduate</p>
                    <p className="flex items-center text-16 font-bold">Master's</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">10+Days</p>
                    <p>$13.34</p>
                    <p>$16.00</p>
                    <p>$20.00</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">7Days</p>
                    <p>$15.00</p>
                    <p>$18.50</p>
                    <p>$23.00</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">5Days</p>
                    <p>$16.67</p>
                    <p>$21.50</p>
                    <p>$27.00</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">3Days</p>
                    <p>$20.00</p>
                    <p>$25.00</p>
                    <p>$30.00</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">2Days</p>
                    <p>$23.34</p>
                    <p>$28.50</p>
                    <p>$33.00</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">24Hrs</p>
                    <p>$26.67</p>
                    <p>$31.50</p>
                    <p>$40.00</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">8Hrs</p>
                    <p>$30.00</p>
                    <p>$36.50</p>
                    <p>$43.00</p>
                </div>
                <div>
                    <p className="flex items-center text-16 font-bold">4Hrs</p>
                    <p>$36.37</p>
                    <p>$41.50</p>
                    <p>$47.00</p>
                </div>
            </div>
            )}

            {showSample === "Editing" && (
                <div className="flex justify-between items-center text-16 border-b-2 border-gray-300 bg-white rounded-lg shadow-md h-full w-full p-[20px]">
                    <div>
                            <p className="flex items-center text-16 font-bold">Price/Page*</p>
                            <p className="flex items-center text-16 font-bold">High School</p>
                            <p className="flex items-center text-16 font-bold">Undergraduate</p>
                            <p className="flex items-center text-16 font-bold">Master's</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">10+Days</p>
                            <p>$10.00</p>
                            <p>$12.00</p>
                            <p>$15.00</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">7Days</p>
                            <p>$11.27</p>
                            <p>$13.87</p>
                            <p>$17.27</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">5Days</p>
                            <p>$12.50</p>
                            <p>$16.14</p>
                            <p>$20.27</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">3Days</p>
                            <p>$15.00</p>
                            <p>$18.37</p>
                            <p>$22.50</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">2Days</p>
                            <p>$17.50</p>
                            <p>$21.37</p>
                            <p>$24.77</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">24Hrs</p>
                            <p>$20.00</p>
                            <p>$23.64</p>
                            <p>$30.00</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">8Hrs</p>
                            <p>$22.50</p>
                            <p>$27.37</p>
                            <p>$32.27</p>
                        </div>
                        <div>
                            <p className="flex items-center text-16 font-bold">4Hrs</p>
                            <p>$27.50</p>
                            <p>$31.14</p>
                            <p>$35.27</p>
                        </div>
                </div>
            )}
            <div class="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-[40px] w-[140px] rounded-full">
                    Order an Essay
                </button>
                <div class="flex items-center mt-2">
                    <p className="font-bold text-[16px] ">We accept:</p>
                    <div class="flex items-center mt-2"> 
                        <img src="/visa-card.jpg" alt="visa-card" className="h-[58px] transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <div>
                        <img src="/apple-pay.jpg" alt="apple-pay" className="h-[58px] transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                    <div>
                        <img src="/master-card.jpg" alt="master-card" className="h-[48px] transition-all duration-300 ease-in-out hover:scale-110" />
                    </div>
                </div>
            </div>
            <div>
                <p className="flex items-center text-[16px] ">*The price indicated is the average that we recommend writers of our paper writing service charge. The final price may vary based on the complexity of the essay, academic level and your deadline.</p>
            </div>
        </div>
        <div className="flex justify-between text-white bg-[#004ca0] p-[20px] rounded">
                <div >
                    <div className="flex items-center gap-[5px] ">
                        <h2 className=" text-[28px]">All orders are secured with</h2>
                        <img src="/safe-pay.svg" alt="Safe-Pay" className=""></img>
                    </div>
                    <p>What’s SafePayments? It’s a secure payment flow designed with you in mind.</p>
                    <p>You reserve funds and release them only when you are happy <br/>
                        with result. In case of any bad experience, your money are 100% <br/>
                        refundable at any point of the order.
                    </p>
                </div>
                <div>
                    <img src="/safe-payments-steps.svg" alt="safe-payments-steps" className=""></img>
                </div>
        </div>
    </>
  )
}

export default Prices;