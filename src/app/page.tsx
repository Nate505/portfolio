'use client'

import Marquee from "../../marquee"

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0E1219] text-white scroll-smooth">
      {/* NAVBAR */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#0E1219]/90 backdrop-blur">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <nav className="h-16 lg:h-20 grid grid-cols-5 items-center">
            <a href="#about" className="justify-self-center text-lg font-medium text-white/80 hover:text-white transition">
              About Me
            </a>

            <a href="#skills" className="justify-self-center text-lg font-medium text-white/80 hover:text-white transition">
              Skills
            </a>

            <span className="justify-self-center text-3xl sm:text-4xl font-semibold tracking-[0.4em]">
              NA
            </span>

            <a href="#hobbies" className="justify-self-center text-lg font-medium text-white/80 hover:text-white transition">
              Hobbies
            </a>

            <a href="#contact" className="justify-self-center text-lg font-medium text-white/80 hover:text-white transition">
              Contact Me
            </a>
          </nav>
        </div>
      </header>

      <main className="h-[calc(100vh-5rem)] overflow-y-scroll snap-y snap-mandatory">
        <section className="min-h-screen snap-start flex flex-col justify-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <p className="text-5xl sm:text-7xl font-semibold">Hello!</p>

          <h1 className="mt-4 text-2xl sm:text-4xl font-medium text-white/80">
            My name is <span className="text-white">Nathaniel Arifin</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg sm:text-xl text-white/70">
            I’m a student and developer who enjoys building projects and learning new things.
          </p>
        </section>

        <section
          id="about"
          className="min-h-screen snap-start flex items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-white/10"
          style={{ scrollMarginTop: '80px' }}
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold">About Me</h2>
            <p className="mt-6 max-w-3xl text-lg sm:text-xl text-white/70">
              I am an international student from Indonesia studying Computer Science in Cal Poly Pomona, entering my third and final year in Cal Poly Pomona. I enjoy a lot of things for my hobby. I have traveled to a lot of different countries before moving here back in 2018. Some places include Singapore, Japan, China, Malaysia, South Korea, and so much more!
            </p>
          </div>
        </section>

        <section
          id="skills"
          className="min-h-screen snap-start flex items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-white/10"
          style={{ scrollMarginTop: '80px' }}
        >
          <div className="w-full">
            <h2 className="text-4xl sm:text-5xl font-semibold">Skills</h2>

            <div className="mt-8">
              <Marquee />
            </div>
          </div>
        </section>
        <section
          id="hobbies"
          className="min-h-screen snap-start flex items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-white/10"
          style={{ scrollMarginTop: '80px' }}
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold">Hobbies</h2>
            <ul className="mt-6 text-lg sm:text-xl text-white/70 list-disc pl-6 space-y-3">
              <li>Gaming</li>
              <li>Learning new Things</li>
              <li>Traveling</li>
              <li>Trading Card Games</li>
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="min-h-screen snap-start flex items-center px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 border-t border-white/10"
          style={{ scrollMarginTop: '80px' }}
        >
          <div>
            <h2 className="text-4xl mb-10 sm:text-5xl font-semibold">Contact Me</h2>
              <a
                href="https://github.com/Nate505"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/github.png" alt="github logo" className="h-[10vh] w-auto block object-contain bg-white rounded-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/yourusername/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="linkedin logo" className="h-[10vh] w-auto block object-contain" />
              </a>
          </div>
        </section>
      </main>
    </div>
  )
}
