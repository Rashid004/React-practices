/** @format */

function Card({ imageSrc, ShoesName }) {
  return (
    <div class="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
      <div class="rounded-md border">
        <img
          src={imageSrc}
          alt="Laptop"
          class="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
        />
        <div class="p-4">
          <h1 class="inline-flex items-center text-lg font-semibold">
            {ShoesName}
          </h1>
          <p class="mt-3 text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <div class="mt-4">
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Sneakers
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Nike
            </span>
            <span class="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
              #Airmax
            </span>
          </div>
          <div class="mt-3 flex items-center space-x-2">
            <span class="block text-sm font-semibold">Colors : </span>
            <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-red-400"></span>
            <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-purple-400"></span>
            <span class="block h-4 w-4 rounded-full border-2 border-gray-300 bg-orange-400"></span>
          </div>
          <div class="mt-5 flex items-center space-x-2">
            <span class="block text-sm font-semibold">Size : </span>
            <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              8 UK
            </span>
            <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              9 UK
            </span>
            <span class="block cursor-pointer rounded-md border border-gray-300 p-1 px-2 text-xs font-medium">
              10 UK
            </span>
          </div>
          <button
            type="button"
            class="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
