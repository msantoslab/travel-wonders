'use client';

import { usePathname } from "next/navigation";

export default function Header() {
   const pathname = usePathname();

   const menu = [
      { name: "Destination", path: "/" },
      { name: "Travel Plan", path: "/travel-plan" },
      { name: "Blog", path: "/blog" },
   ]
   return (
      <header className="">
         <div className="">
            <nav>
               <div>
                  <h1>Logo</h1>
               </div>
               <div className="">
                  <ul className="">
                     {menu.map((item, index) => 
                        <li key={index}><a href={item.path}> {item.name}</a></li>
                     )}
                  </ul>
               </div>
            </nav>
         </div>
      </header>
   );
};