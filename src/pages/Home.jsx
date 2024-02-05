import React, { useState } from "react";
import { Avatar, AvatarGroup } from "rsuite";

function Home() {
  const [showOverview, setShowOverview] = useState("customer-overview");

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-4">Customers</h1>

      <div className="float-right flex items-center space-x-4">
        <div className="flex items-center ">
          <button className="flex items-center bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="fill-current text-black mr-2"
            >
              <path d="M16 4c-4.12 0-7.36 3.13-7.813 7.125a4.895 4.895 0 0 0-3.843 3.22C1.884 15.054 0 17.248 0 20c0 3.324 2.676 6 6 6h20c3.324 0 6-2.676 6-6c0-1.76-.855-3.336-2.094-4.438c-.232-3.514-3.035-6.318-6.562-6.5C22.14 6.133 19.378 4 16 4m0 2c2.762 0 4.97 1.77 5.75 4.28l.22.72H23c2.755 0 5 2.245 5 5v.5l.406.313A4.07 4.07 0 0 1 30 20c0 2.276-1.724 4-4 4H6c-2.276 0-4-1.724-4-4c0-2.02 1.45-3.588 3.28-3.906l.657-.125l.125-.658C6.362 13.964 7.556 13 9 13h1v-1c0-3.37 2.63-6 6-6m0 5.594l-.72.687l-4 4l1.44 1.44L15 15.437V22h2v-6.563l2.28 2.282l1.44-1.44l-4-4z" />
            </svg>
            Upload
          </button>
        </div>
        <button className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          Add Customer
        </button>
      </div>

      <ul className="flex items-center w-80 h-10 mt-6 ml-6 border-2 rounded-lg">
        <li
          className="p-2 text-xl whitespace-no-wrap cursor-pointer"
          onClick={() => setShowOverview("customer-overview")}
        >
          Overview
        </li>
        <li
          onClick={() => setShowOverview("table")}
          className="p-2 text-xl whitespace-no-wrap cursor-pointer"
        >
          Table
        </li>
        <li
          onClick={() => setShowOverview("list")}
          className="p-2 text-xl whitespace-no-wrap cursor-pointer"
        >
          List
        </li>
        <li className="p-2 text-xl whitespace-no-wrap">Segment</li>
      </ul>

      {showOverview === "customer-overview" && (
        <div>
          <div className="flex items-center gap-[40px]">
            {/* first */}
            <div className="w-[30%] h-[180px] border-2 flex flex-col p-[10px] justify-between rounded-lg">
              <div className="flex items-center justify-between w-full">
                <div className="h-[40px] w-[60px] border-2 flex items-center justify-center rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    className="fill-none stroke-black stroke-linecap-round stroke-linejoin-round stroke-width-2"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87m-3-12a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
                  />
                </svg>
              </div>
              <p>Total Customers</p>
              <div className="flex w-full items-center justify-between font-bold">
                <p>1220</p>
                <div className="flex items-center justify-center gap-[10px] border-2 w-[100px] h-[42px] rounded-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="48"
                      d="m112 244l144-144l144 144M256 120v292"
                    />
                  </svg>
                  <p>20%</p>
                </div>
              </div>
            </div>
            <div className="w-[30%] h-[180px] border-2 flex flex-col p-[10px] justify-between rounded-lg">
              <div className="flex items-center justify-between w-full">
                <div className="h-[40px] w-[60px] border-2 flex items-center justify-center rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="20px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12 1.25a4.75 4.75 0 1 0 0 9.5a4.75 4.75 0 0 0 0-9.5M8.75 6a3.25 3.25 0 1 1 6.5 0a3.25 3.25 0 0 1-6.5 0M12 12.25c-2.313 0-4.445.526-6.024 1.414C4.42 14.54 3.25 15.866 3.25 17.5v.102c-.001 1.162-.002 2.62 1.277 3.662c.629.512 1.51.877 2.7 1.117c1.192.242 2.747.369 4.773.369s3.58-.127 4.774-.369c1.19-.24 2.07-.605 2.7-1.117c1.279-1.042 1.277-2.5 1.276-3.662V17.5c0-1.634-1.17-2.96-2.725-3.836c-1.58-.888-3.711-1.414-6.025-1.414M4.75 17.5c0-.851.622-1.775 1.961-2.528c1.316-.74 3.184-1.222 5.29-1.222c2.104 0 3.972.482 5.288 1.222c1.34.753 1.961 1.677 1.961 2.528c0 1.308-.04 2.044-.724 2.6c-.37.302-.99.597-2.05.811c-1.057.214-2.502.339-4.476.339c-1.974 0-3.42-.125-4.476-.339c-1.06-.214-1.68-.509-2.05-.81c-.684-.557-.724-1.293-.724-2.601"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
                  />
                </svg>
              </div>
              <p>Members</p>
              <div className="flex w-full items-center justify-between font-bold">
                <p>1220</p>
                <div className="flex items-center justify-center gap-[10px] border-2 w-[100px] h-[42px] rounded-[30px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="48"
                      d="m112 244l144-144l144 144M256 120v292"
                    />
                  </svg>
                  <p>20%</p>
                </div>
              </div>
            </div>
            <div className="w-[30%] h-[180px] border-2 flex flex-col p-[10px] justify-between rounded-lg">
              <div className="flex items-center justify-between w-full">
                <div className="h-[40px] w-[60px] border-2 flex items-center justify-center rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30px"
                    height="30px"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                      <path
                        fill="currentColor"
                        fill-rule="nonzero"
                        d="M19 3a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4v1h1a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h1v-1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm-6 15h-2v1h2zm6-13H5v11h14z"
                      />
                    </g>
                  </svg>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  height="30px"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill="currentColor"
                    d="M9 15.25a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m0-5a1.249 1.249 0 1 1 2.5 0a1.25 1.25 0 1 1-2.5 0"
                  />
                </svg>
              </div>
              <p>Active Now</p>
              <div className="flex w-full items-center justify-between font-bold">
                <p>1220</p>
                <div className="flex items-center justify-center gap-[10px] rounded-[30px]">
                  <AvatarGroup spacing={6}>
                    <Avatar
                      circle
                      src="https://avatars.githubusercontent.com/u/12592949"
                      alt="@superman66"
                    />
                    <Avatar
                      circle
                      src="https://avatars.githubusercontent.com/u/8225666"
                      alt="@SevenOutman"
                    />
                    <Avatar
                      circle
                      src="https://avatars.githubusercontent.com/u/15609339"
                      alt="@hiyangguo"
                    />
                    <Avatar
                      circle
                      src="https://avatars.githubusercontent.com/u/14308293"
                      alt="@MarvelSQ"
                    />
                  </AvatarGroup>
                </div>
              </div>
            </div>
          </div>
          {/* mid-dash-board */}
          <div className="mt-[20px]">
            <div>
              <p className="font-bold text-[28px]">Customers(1,644)</p>
              <p className="text-gray-500">
                Customers that have purchased a subscription
              </p>
            </div>
            <div className="flex items-center justify-end">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 p-1 rounded"
              />
              <div className="flex items-center">
                <button className="flex items-center bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="none"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 22c-9 1-8-10 0-9C6 2 23 2 22 10c10-3 10 13 1 12m-12 4l5 4l5-4m-5-10v14"
                    />
                  </svg>
                  Export to CVS
                </button>
              </div>
            </div>
          </div>
          {/* Mid-navigation */}
          <div className="flex items-center border p-1">
            <div>
              <ul className="flex items-center space-x-1 ">
                <li className="border p-1">View All</li>
                <li className="border p-1">Your Files</li>
                <li className="border p-1">Shared Files</li>
              </ul>
            </div>
            <div className="flex items-center justify-end space-x-4 ml-auto">
              <div className="flex items-center border p-1 w-18 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="green"
                    d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"
                  />
                </svg>
                <p>Jan 1-Jan 30</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                  />
                </svg>
              </div>
              <div className="flex items-center border p-1 w-18 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 256 256"
                >
                  <path
                    fill="green"
                    d="M144 128a16 16 0 1 1-16-16a16 16 0 0 1 16 16"
                  />
                </svg>
                <p>Dashboard 2.0</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"
                  />
                </svg>
              </div>
              <div className="flex items-center">
                <button className="flex items-center bg-white hover:bg-gray-500 text-black font-bold py-2 px-4 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="black"
                      d="M10 2.5a.5.5 0 0 0-1 0V9H2.5a.5.5 0 0 0 0 1H9v6.5a.5.5 0 0 0 1 0V10h6.5a.5.5 0 0 0 0-1H10z"
                    />
                  </svg>
                  Add Files
                </button>
              </div>
            </div>
          </div>

          {/* Customer-info */}
          <div>
            <div className="flex items-center border-2">
              <input type="checkbox" className="w-[6%]" />
              <div className="flex items-center w-[20%] justify-center gap-[5px]">
                <p className="">Customer</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="black"
                    d="M4.97 13.22a.75.75 0 0 1 1.06 0L11 18.19V3.75a.75.75 0 0 1 1.5 0v14.44l4.97-4.97a.749.749 0 0 1 1.275.326a.749.749 0 0 1-.215.734l-6.25 6.25a.75.75 0 0 1-1.06 0l-6.25-6.25a.75.75 0 0 1 0-1.06"
                  />
                </svg>
              </div>
              <p className="w-[12%]">Status</p>
              <p className="w-[12%]">Plan</p>
              <p className="w-[12%]">Billing Date</p>
              <p className="w-[12%]">Lincese Use</p>
              <p className="w-[25%]">Users</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
