
export default function Hero(){
   return (
      <section className="full-width bg-custom-beige bg-[url('/map.png')] bg-no-repeat bg-[position:right_center] py-7 px-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-12 items-center min-h-[600px]">
               <div className="col-span-2 text-center mt-12 lg:text-left">
                  <h1 className="text-6xl font-bold  leading-[4rem] lg:leading-[5rem] mb-5">Discover the World's <span className="text-custom-orange">Hidden</span> Wonders</h1>
                  <p className="font-semibold text-gray-800">Find unique moments and hidden gems that ignite unforgettable experiences. From rare encounters to remarkable destinations, we help you uncover the spark that turns every trip into a cherished story.</p>
               </div>

               <div className="col-span-3 grid grid-cols-2 grid-rows-[250px_210px] gap-2 lg:gap-12 lg:p-6 lg:mt-12 ">
                  <div className="row-span-2 lg:py-8">
                     <img src="https://picsum.photos/590/760" alt="Travel Image" className="w-full h-full object-cover rounded-lg" />
                  </div>
                  
                  <div>
                     <img src="https://picsum.photos/590/500?random=1" alt="Random Travel"  className="w-full h-full object-cover rounded-lg" />
                  </div>
                  <div>
                     <img src="https://picsum.photos/590/400?random=2" alt="Random Travel"  className="w-full h-full  object-cover rounded-lg"/>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};