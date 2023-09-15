/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";
import image from "../images/desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Mastering Backend Development with Node.js",
    description: "A comprehensive guide to becoming a backend wizard with Node.js, covering everything from building APIs to database management and server optimization.",
    url: "https://example.com/backend-nodejs-guide"
  },
  {
    title: "Unlocking the Power of Azure Cloud Services",
    description: "Discover the potential of Azure cloud services and learn how to leverage them for scalability, security, and cost-efficiency in your projects.",
    url: "https://example.com/azure-cloud-services"
  },
  {
    title: "DevOps Transformation: From Deployment Stress to Seamless Pipelines",
    description: "Embark on a DevOps journey and transform your development and deployment processes with automation, continuous integration, and continuous delivery (CI/CD).",
    url : "https://example.com/devops-transformation"
  },
  {
    title: "Github Introduction",
    description:
      "A quick introduction to Github and why it is used.",
    url: "https://example.com/github-introduction",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
