import React from 'react';

const menu = () => {
  return (
    <>
       <header className="flex justify-between">
        <div className="flex  ">
          <img src={Logo} alt="Logo" className="h-8 w-auto mt-5 ml-5 cursor-pointer" />
        </div>
        <nav>
          <div className="flex gap-4">
            <div className="border mt-5  bg-white rounded-full ">
              <h1 className="text-sm font-bold pl-5 pr-5 pt-3 pb-3">Log In</h1>
            </div>
            <div className="menu relative">
                <CgMenuRound className="h-6 w-6 text-black mt-5 mr-5 cursor-pointer" />
              </div>
              
          </div>
        </nav>
      </header>
    </>
  );
}

export default menu;
