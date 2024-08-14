import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
  const skills = [
    "Spring Boot",
    "AWS",
    "Docker ",
    "Kubernetes ",
    "Jenkins ",
    "Angular ",
    "TypeScript",
    "Hibernate ",
    "MongoDB ",
    "Splunk ",
  ]
  return (
    <div id='about'>
      <SectionTitle title="About" />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[80vh] w-1/2 sm:w-full">
          <dotlottie-player src="https://lottie.host/8b900c5e-7405-4858-8c40-e922c7ff1053/U45Wzy4lO4.json"
            background="transparent"
            speed="1"
            autoplay>
          </dotlottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className="text-white">
            I am a committed Full Stack Developer with 7+ years of experience in delivering high-quality,
            scalable Java applications that address complex business needs. My expertise spans the entire software
            development lifecycle, from transforming requirements into robust solutions to deploying enterprise-level
            applications. I specialize in back-end development, leveraging Java, J2EE, Spring Boot, and Hibernate
            to design sophisticated systems and microservices architectures. Additionally, I have a proven track
            record of deploying resilient applications on AWS and Pivotal Cloud Foundry. On the front-end, I create
            responsive and engaging user interfaces using HTML5, CSS3, JavaScript, Angular, and TypeScript, ensuring
            a seamless user experience.
          </p>
          <p className='text-white'>
            Beyond development, I am proficient in cloud and DevOps practices, utilizing AWS services, Docker,
            Kubernetes, and Jenkins to automate and optimize deployment pipelines, reducing time-to-market.
            My experience extends to both SQL (Oracle, MySQL) and NoSQL (MongoDB) databases, with a strong
            focus on performance and data integrity. I am an advocate for Agile methodologies, ensuring
            continuous improvement through collaboration. Having successfully delivered projects
            across retail, finance, healthcare, and government sectors, I thrive in dynamic environments
            and am always eager to embrace new challenges and technologies.
          </p>

        </div>
      </div>

      <div className='py-5'>
        <h1 className="text-secondary text-xl font-semibold">
          Here are few technologies I have been working on recently:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div className='border border-tertiary py-3 px-10'>
              <h1 className='text-tertiary'>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
