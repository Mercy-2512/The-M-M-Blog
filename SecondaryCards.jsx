import React from 'react'
import {Link} from 'react-router-dom';
const SecondaryCards = () => {
    const data = [
        {
            image: "./src/assets/images/sustain.jpg",
            title: "The Future of Sustainable Living: Small Steps, Big Impact",
            desc: "As our planet faces environmental challenges, the way we live today defines the world we’ll leave for future generations"
        },
        {
            image: "/src/assets/images/mindful.jpg",
            title: "Mindfulness in a Fast-Paced World: How to Stay Grounded",
            desc: "Mindfulness in a fast-paced world helps you stay grounded by fostering awareness, reducing stress, and bringing balance to your everyday life"
        },
        {
            image: "./src/assets/images/travel2.jpg",
            title: "Exploring The True Hidden Gems all over the world for travelling",
            desc: "Dreaming of an escape from the usual tourist spots? Uncover the hidden travel gems of 2024, offering unique experiences and off-the-beaten-path adventures"
        },
        {
            image: "./src/assets/images/ai.jpg",
            title: "The Rise of Artificial Intelligence(AI): Friend or Foe?",
            desc: "AI is no longer a futuristic concept it’s shaping our lives today. Delve into the rise of AI and explore whether it's shaping our future as a friend or a foe"
        },
    ]
    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-10">
            {
                data.map((card, index) => (
                    <div
  className="card bg-base-100 max-w-[280px] rounded-3xl shadow-xl flex flex-col justify-between"
  key={index}
>
  <figure>
    <img
      className="rounded-t-3xl"
      src={card.image}
      alt="Sustain"
    />
  </figure>
  <div className="card-body flex flex-col justify-between items-center p-5 relative gap-4 min-h-[300px]">
    <div className="space-y-4">
      <h2 className="card-title font-dm_sans font-semibold">{card.title}</h2>
      <p className="font-gilda font-semibold text-neutral-500 line-clamp-3">
        {card.desc}
      </p>
    </div>
    <Link to="/content" className="block mt-auto">
      <button className="px-16 py-2 rounded-xl hover:bg-black border border-black hover:text-white font-semibold">
        Explore Now
      </button>
    </Link>
  </div>
</div>

                ))
            }
        </div>
        <div className='flex mb-5 w-full justify-center items-center'>
            <Link to="/blogs">
                <button className="px-16 py-2 rounded hover:bg-black border border-black text-center hover:text-white font-semibold ">Explore More Blogs</button>
            </Link>
        </div>
        </>

    )
}

export default SecondaryCards