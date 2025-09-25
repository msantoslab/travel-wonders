
export default function Hero(){
   return (
      <section className="full-width bg-custom-beige bg-[url('/mapa_c.png')] bg-no-repeat bg-[position:right_center] py-7 px-8">
         <div className="max-w-7xl min-h-[690px] mx-auto flex">
            <div className="flex flex-col lg:flex-row lg:gap-6 justify-between">
               <div className="w-full flex flex-col text-center justify-center pt-9 mb-8 lg:w-1/2 lg:pr-9 lg:text-left">
                  <h1 className="text-6xl font-bold  leading-[4rem] lg:leading-[5rem] mb-5">Discover the World's <span className="text-custom-orange">Hidden</span> Wonders</h1>
                  <p className="font-semibold text-gray-800">Find unique moments and hidden gems that ignite unforgettable experiences. From rare encounters to remarkable destinations, we help you uncover the spark that turns every trip into a cherished story.</p>
               </div>

               <div className="w-full lg:w-3/5 flex flex-row gap-3 lg:gap-6 items-center">
                  <div className="">
                     <img src="https://picsum.photos/590/760" alt="Travel Image" className="rounded-lg w-[260px] h-[360px] lg:w-[270px] lg:h-[460px]" />
                  </div>
                  <div className="flex flex-col gap-3 lg:gap-6">
                     <img src="https://picsum.photos/590/760?random=1" alt="Random Travel"  className="rounded-lg w-[230px] h-[205px] lg:w-[230px] lg:h-[290px]" />
                     <img src="https://picsum.photos/590/760?random=2" alt="Random Travel"  className="rounded-lg w-[230px] h-[145px] lg:w-[230px] lg:h-[250px]"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};