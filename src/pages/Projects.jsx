import { Link } from "react-router-dom"

import CTA from "../components/CTA"
import { projects } from "../constants"
import { github, web } from "../assets/images"
import Footer from "../components/Footer"

const Projects = () => {
  return (
    <div className="flex flex-col gap-16">
      <section className='max-container'>
        <h1 className='head-text'>
          My <span className='blue-gradient_text font-semibold drop-shawdow'>Projects</span>
        </h1>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I've embarked on numerous projects throughout the years, but these are the ones
            I hold closest to my heart. These projects are completed not too long ago, so these projects
            showcase my latest acquired skillsets.
          </p>
        </div>

        <div className='flex flex-wrap my-20 gap-20'>
          {projects.map(project => (
            <div className="lg:w-[400px] w-full" key={project.name}>
              <div className="block-container w-12 h-12">
                <div className={`btn-back rounded-xl ${project.theme}`} />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={project.iconUrl}
                    alt="Project Icon"
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col">
                <h4 className="text-2xl font-poppins font-semibold">{project.name}</h4>
                <p className="mt-2 text-slate-500">{project.description}</p>
                <div className="mt-5 flex items-center gap-2 font-poppins">
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={github}
                      alt="github"
                      className="w-6 h-6 object-contain"
                    />
                  </Link>

                  <Link
                    to={project.weblink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={web}
                      alt="web"
                      className="w-[22px] h-[22px] object-contain"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <hr className="border-slate-200" />

        <CTA />
      </section>
      <Footer />
    </div>
  )
}

export default Projects