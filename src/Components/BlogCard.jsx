import React from 'react'

function BlogCard() {
  return (
    <div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
    <div class="w-52 h-40 bg-sky-300 rounded-2xl">
      
    </div>
    <div class="">
        <p class="font-extrabold">Journey to WebDev</p>
        <p class="">So I got a knack for Web Development 
                  after I saw some really cool designs made by people
                  and also through having an interest in RDMS.
        </p>
    </div>
    <button class="bg-sky-700 font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
  </div>
  )
}

export default BlogCard