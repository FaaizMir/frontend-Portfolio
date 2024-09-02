// import React from 'react'

const Hero = () => {
  return (
   <>
     <div className="container mx-auto bg-purple-500">
      <section className="hero flex items-center h-screen">
        <div  className="w-1/3">
          <img src="/images/cvimage3.jpeg" alt="Your Image" className="w-2/3 rounded-full ml-16" />
          <h1 className="text-gray-800 font-serif text-2xl text-center mt-8 ">M.Faaiz Mir</h1>
        </div>

        <div className="w-2/3 pl-8">
          <h1  className="text-gray-800 text-xl mr-16 pl-10 hover:text-2xl"><em className="text-black font-semibold">React Developer</em> with a solid foundation in web development principles. Eager to apply problem-solving skills and a passion for user interfaces to contribute to a collaborative team. Proficient in React.js and committed to continuous learning.</h1>
          <br></br>
          <h1 className="text-xl font-semibold mr-16 pl-10">https://github.com/FaaizMir</h1>
        </div>
      </section>
    </div>
   </>
  )
}

export default Hero
