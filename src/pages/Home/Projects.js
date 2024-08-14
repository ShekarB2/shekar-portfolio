import React from 'react';

function Projects() {
    const projects = [
        {
            title: "USA printing",
            url: "https://www.usaprintingtrade.com/",
            description: "USA Printing Trade offers affordable, high-quality printing services, including business cards, flyers, and banners, with quick turnaround times.",
            image: `${process.env.PUBLIC_URL}/images/p1.png`
        },
        {
            title: "Pledje",
            url: "https://pledje.com/home",
            description: "Pledje is a platform that helps users manage and track their financial pledges and commitments easily and efficiently.",
            image: `${process.env.PUBLIC_URL}/images/p2.png`
        },
        {
            title: "Mangiabiz",
            url: "https://mangiabiz.com/",
            description: "Mangia is an online platform that connects users with local restaurants, allowing them to explore menus, place orders, and enjoy delicious meals delivered straight to their doorsteps.",
            image: `${process.env.PUBLIC_URL}/images/p3.png`
        },
        {
            title: "PacDocSign",
            url: "https://pacdocsign.com/",
            description: "PacDocSign is an online platform that provides secure and efficient electronic signature solutions, allowing users to sign and manage documents digitally from anywhere.",
            image: `${process.env.PUBLIC_URL}/images/p4.png`
        },
        {
            title: "Rudis",
            url: "https://www.rudis.com/",
            description: "Rudis is a brand that offers a range of high-quality wrestling gear, including apparel, footwear, and accessories, designed for athletes and wrestling enthusiasts.",
            image: `${process.env.PUBLIC_URL}/images/p5.png`
        },
        {
            title: "20 Miles",
            url: "https://20miles.us/",
            description: "20Miles is a platform offering robust lead generation and sales engagement tools, helping businesses streamline their outreach processes and connect with potential customers effectively.",
            image: `${process.env.PUBLIC_URL}/images/p6.png`
        },
        {
            title: "DesignAShirt",
            url: "https://www.designashirt.com/",
            description: "DesignAShirt is an online platform that allows users to create and customize their own shirts, offering a wide range of styles and design options for personal or group use.",
            image: `${process.env.PUBLIC_URL}/images/p7.png`
        },
        {
            title: "Cancer Tutor",
            url: "https://www.cancertutor.com/",
            description: "Cancer Tutor is an informational resource dedicated to providing alternative and integrative cancer treatment options, offering guidance and education for those seeking non-conventional approaches to cancer care.",
            image: `${process.env.PUBLIC_URL}/images/p8.png`
        },
        {
            title: "DSL",
            url: "https://www.genevamedia.com/",
            description: "Geneva Media is a company specializing in media production and communications, offering services in video production, digital marketing, and strategic branding to help businesses effectively convey their messages.",
            image: `${process.env.PUBLIC_URL}/images/p9.png`
        },
        {
            title: "Zuri Fertility",
            url: "https://www.zurifertility.com/",
            description: "Zuri Fertility is a specialized clinic that offers comprehensive fertility treatments and reproductive health services, dedicated to helping individuals and couples achieve their family planning goals.",
            image: `${process.env.PUBLIC_URL}/images/p10.png`
        },
    ];

    return (
        <div id='projects' className="mt-10">
            <div className="flex items-center mb-4">
                <h1 className="text-3xl text-white font-semibold">Projects</h1>
                <div className="w-60 h-px sm:flex-col bg-tertiary ml-10"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="relative group overflow-hidden rounded-lg border-2 border-tertiary"
                        onClick={() => window.open(project.url, "_blank")}
                    >
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-64 object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                            <p className="text-white text-center">{project.description}</p>
                        </div>
                        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-4">
                            <button className="bg-tertiary text-white py-2 px-4 rounded">View Project</button>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
