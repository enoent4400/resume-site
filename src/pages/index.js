import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h1 className="mb-0">
            {config.firstName}
            <span className="text-primary">{config.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {config.address} ·{' '}
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>
          <p className="lead mb-5">
            Web Developer with experience working on both small freelance
            projects and large enterprise apps, possessing solid understanding
            of Web application architecture and development cycle. I consider
            myself platform and technology agnostic since I've dabbled with
            large number of technologies and frameworks used in modern Web
            development. I also had traumatic experiences (OSGI, AEM) ¯\_(ツ)_/¯
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Engineer</h3>
              <div className="subheading mb-3">Performance Technologies</div>
              <ul>
                <li>
                  Working on in-house automation solutions for advertising
                  industry.
                </li>
                <li>
                  Developed features and maintained several projects, with
                  responsibilities mainly on frontend.
                </li>
                <li>
                  Building a prototype for a complete rebuild of of an existing
                  legacy app.
                </li>
                <li>Techonolgies: React, Typescript, Material UI</li>
              </ul>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2020 - Present</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Software Developer</h3>
              <div className="subheading mb-3">Endava</div>
              <p>
                Working on large scale Cloud automation support platform for USA
                based client. My core activities and duties include:
                <ul>
                  <li>
                    Creating new features functionality and capabilities on
                    client's Cloud platform using Java (OSGi) and Javascript
                    (React 16, Webpack 4, Babel, ES6 and Jquery).
                  </li>
                  <li>
                    Design and implementation of the new features and
                    functionalities.
                  </li>
                  <li>Performing bug fixes and code reviews</li>
                  <li>
                    Participated in complete React front end refactoring,
                    transforming class based to functional components.
                  </li>
                  <li>
                    Gained knowledge and proficiency in Cloud based services and
                    APIs (AWS and Azure).
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018 - 2020</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Freelance Web Developer</h3>
              <p>
                Developed websites for clients and volunteering building demo
                projects and open source. Some of the key features and skills I
                gained in that period were:
                <ul>
                  <li>Tested ready-made products</li>
                  <li>
                    Corrected errors in products that did not function properly.
                  </li>
                  <li>Created websites for clients and friends</li>
                  <li>Conducted survey about the product drawbacks</li>
                  <li>
                    Participated in not yet funded start up project :
                    https://github.com/renovatebot/renovate
                  </li>
                </ul>
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2017 - 2018</span>
            </div>
          </div>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
            <div className="resume-content">
              <h3 className="mb-0">Project Assistant</h3>
              <div className="subheading mb-3">Ministry of Agriculture and Environmental Protection- Belgrade, Serbia</div>
              <p>
              Assisted on developing, maintaining and testing INZEM - Software solution that supports the complete procedure of leasing state agricultural land. I also maintained their servers.
              </p>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2015 - 2017</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
            <div className="resume-content">
              <h3 className="mb-0">Singidunum University</h3>
              <div className="subheading mb-3">Master of Informatics</div>
              <div>Contemporary Information Technologies</div>
            </div>
            <div className="resume-date text-md-right">
              <span className="text-primary">2018</span>
            </div>
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages
          </div>

          <ul className="list-inline dev-icons">
          <li className="list-inline-item">
              <i className="fab fa-js-square"></i>
            </li>
          <li className="list-inline-item">
              <i className="fab fa-java"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-python"></i>
            </li>
          </ul>

          <div className="subheading mb-3">
            Client Stack
          </div>

          <ul className="list-inline dev-icons">
          <li className="list-inline-item">
              <i className="fab fa-react"></i>
            </li>
          <li className="list-inline-item">
              <i className="fab fa-css3"></i>
            </li>
          <li className="list-inline-item">
              <i className="fab fa-npm"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-yarn"></i>
            </li>
          </ul>

          <div className="subheading mb-3">
            Server Stack
          </div>
          <ul className="list-inline dev-icons">
            <li className="list-inline-item">
              <i className="fab fa-aws"></i>
            </li>
            <li className="list-inline-item">
              <i className="fas fa-database"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-linux"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-node"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-docker"></i>
            </li>
            <li className="list-inline-item">
              <i className="fab fa-git"></i>
            </li>
          
          </ul>

          <div className="subheading mb-3">Core Competences</div>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-check"></i>
              Programming
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              Problem Solving
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
              OOP
            </li>
            <li>
              <i className="fa-li fa fa-check"></i>
             Web Application Development and Architecture
            </li>
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            <ul>
              <li>AI, Singularity, Pop Science</li>
              <li>Blockchain, Decentralised Governance and Trustless Systems</li>
            </ul> 
          </p>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="certifications"
      >
        <div className="w-100">
          <h2 className="mb-5">Certifications</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              AWS Certified Developer - Associate (2020)
            </li>
            <a href="https://www.youracclaim.com/badges/03e1f7d3-7e3c-4852-a9f6-b62040a4429b/public_url">Acclaim link</a>
            <li>
              <i className="fa-li fa fa-trophy text-warning"></i>
              6.00.1x: Introduction to Computer Science and Programming Using
Python from MITx, anonline learning initiative of the Massachusetts
Institute of Technology - (MIT, 2018) 
            </li>
            <a href="https://courses.edx.org/certificates/58c30ef33108489f96011a370d40c051">Certificate ID</a>
          </ul>
        </div>
      </section>
    </div>
  </Layout>
);

export default IndexPage;
