import Image from 'next/image'
import CardBg from '/public/assets/images/illustration-article.svg'
import Avatar from '/public/assets/images/image-avatar.webp'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#F4D04E]">
      <div className='bg-white max-w-sm h-full text-black p-6 rounded-[20px] drop-shadow-3xl hover:drop-shadow-4xl transition-shadow border-solid border border-black cursor-pointer'>
        <span>
          <CardBg className='rounded-[10px]'/>
        </span>
        <div className='my-6'>
          <div className='py-1 px-3 bg-[#F4D04E] w-fit rounded mb-3'>
            <p> Learning </p>
          </div>
          <small className='inline-block mb-3'> Published 21 Dec, 2023 </small>
          <h1 className='hover:text-[#F4D04E] font-bold cursor-pointer mb-3'>HTML & CSS foundations</h1>
          <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
        </div>
        <figure className='flex items-center'>
          <Image
            src={Avatar}
            alt="avatar"
          />
          <figcaption> Greg Hooper</figcaption>
        </figure>
      </div>
    </main>
  )
}
