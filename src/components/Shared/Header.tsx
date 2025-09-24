'use client';

import { usePathname } from "next/navigation";
import { Search, Menu, X} from "lucide-react";
import { useState } from "react";

export default function Header() {
   const [openMenu, setOpenMenu] = useState(false);
   const pathname = usePathname();

   const handleMenu = () => {
      setOpenMenu(!openMenu);
      console.log('open menu', openMenu);
   }

   const menu = [
      { name: "Destination", path: "/destination" },
      { name: "Travel Plan", path: "/travel-plan" },
      { name: "Blog", path: "/blog" },
   ]

   return (
      <header className="bg-custom-beige w-full absolute inset-x-0 top-0 z-50 py-7 px-3">
         <div className="max-w-7xl mx-auto">
            <nav className="flex justify-between items-center">
               <div>
                  <a href="/"><img src="logo-travel-wonders.svg" width="240" /></a>
               </div>
               <div className="hidden lg:block">
                  <ul className="flex gap-8 font-semibold">
                     {menu.map((item, index) => 
                        <li key={index}><a href={item.path} className={`hover:text-custom-orange ${pathname === item.path ? 'text-custom-orange' : '' }`}> {item.name}</a></li>
                     )}
                  </ul>
               </div>
               <div className="hidden lg:block hover:scale-105 transition-transform duration-200">
                  <form action="" className="flex items-center gap-2">
                     <div>
                        <Search className="w-5 h-5" />
                     </div>
                     <input type="text" className="bg-transparent hover:bg-white placeholder:text-black placeholder:font-semibold focus:outline-none rounded-md p-1 border-none" placeholder="Search" />
                  </form>
               </div>
               {/* Botão de menu hamburger */}
               <div className="lg:hidden">
               <button 
                  onClick={handleMenu} 
                  className="p-3 cursor-pointer w-10 h-10"
               >
                  <Menu size={24} />
               </button>
               </div>


            </nav>

             {/* Menu Mobile */}
            <div className={`fixed top-0 right-0 bg-custom-beige w-72 z-50 py-6 px-8 min-h-lvh lg:hidden transform transition-all duration-500 ease-in-out border-1 border-l-gray-200 shadow-lg shadow-gray-300/50  ${openMenu 
               ? 'translate-x-0 opacity-100' : 'translate-x-2 opacity-0'}`}>
               <div className="w-full flex justify-end">
                  <button onClick={() => handleMenu()}><X className="w-5 h-5 "/></button>
               </div>
               <ul className="flex flex-col gap-8 font-semibold">
                  {menu.map((item, index) => 
                     <li key={index}><a href={item.path} className={pathname === item.path ? 'text-custom-orange' : '' }> {item.name}</a></li>
                  )}
               </ul>
            </div>
         </div>
      </header>
   );
};