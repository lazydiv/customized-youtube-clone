import React from 'react'

const Side_Bar = (props) => {
  return (
    <aside className={`fixed top-16 md:visible ${props.md} h-screen bg-white dark:bg-black dark:bg-opacity-10 bg-opacity-30 backdrop-blur-md`} aria-label="Sidebar">
        <div className="overflow-y-auto mt-5 px-3">
            <ul className="space-y-2">
                <li>
                    <a href="#" className="flex items-center  p-2 text-base">
                        <i className="bi-house-fill text-lg mr-2 " role="img" aria-label="Youtube"></i>
                    <span className={`ml-3 ${props.show} pr-10`}>Home</span>
                    </a>
                </li>
            </ul>
            <ul className="space-y-2 ">
                <li>
                    <a href="#" className="flex items-center p-2 text-base">
                        <i className="bi-compass-fill text-lg  mr-2 " role="img" aria-label="Youtube"></i>
                    <span className={`ml-3 ${props.show}`}>Explore</span>
                    </a>
                </li>
            </ul>
            <ul className="space-y-2 ">
                <li>
                    <a href="#" className="flex items-center p-2 text-base">
                        <i className="bi-hand-thumbs-up-fill text-lg  mr-2 " role="img" aria-label="Youtube"></i>
                    <span className={`ml-3 ${props.show}`}>Liked Videos</span>
                    </a>
                </li>
            </ul>
            <ul className="space-y-2 ">
                <li>
                    <a href="#" className="flex items-center p-2 text-base">
                        <i className=" bi-collection-play-fill text-lg  mr-2 " role="img" aria-label="Youtube"></i>
                    <span className={`ml-3 ${props.show}`}>Chanels</span>
                    </a>
                </li>
            </ul>
            <ul className="mt-10">
                <li>
                    <a href="#" className="flex items-center p-2 text-base">
                        <i className="bi-box-arrow-right text-lg  mr-2 " role="img" aria-label="Youtube"></i>
                    <span className={`ml-3 ${props.show}`}>Log out</span>
                    </a>
                </li>
            </ul>
        </div>
    </aside>
  )
}

export default Side_Bar