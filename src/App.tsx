import React from "react";

const projects = [

  {
    id: 1,
    title: "Similify management of all products on Amazon",
    type: "full",
    image: "img/amazonAllProductEdit.png",
    description: "This project redesigned the process of managing all products that Amazon sells. Prior to the new system, all products were edited in Excel and the worksheets were uploaded through a special portal. The new system allowed Vendor Managers make direct changes to products through a web interface, it detected errors and offered fixes, it managed vendor feeds and offered security and edits to algorithms. The time saved on common tasks resulted in over 10x improvement.",
    link: "projects/selectionCentral/index.html ",
  },



  {
    id: 2,
    title: "First mobile-centric AWS management application",
    type: "full",
    image: "img/serviceCatalogMainScreen.png",
    description: "Service Catalog is a product within AWS that is aimed at large customers that allow end users manage AWS instances. Normally, developers are responsible for managing AWS resources, but in this case, non-developers were the users. The means that it had to be intuitive and operate even on phones. This became the first AWS application to be mobile-first and offered white-labelling, progressive web-app model, branding and automatic color matching.",
     link: "projects/aws/index.html ", // No button will show
  },

  {
    id: 3,
    title: "Designing wall art printing experience",
    type: "full",
    image: "http://viladio.com/img/mobileCanvasPrinting.jpg",
    description: "Printing canvases and photo prints at Amazon scale. Customers want high quality products be delivered fast and inexpensivelly. The designed experience works on desktop and mobile and allows customers to quickly select images, visualize the end product and quickly place the printing order.",
    link: "projects/amazonPrints/index.html ",
  },

  {
    id: 4,
    title: "Scaling selling platform to enterprise level",
    type: "full",
    image: "img/governanceHero1.png",
    description: "Enterprise level applications require robust security controls, they need sharing and data isolation, audit and administration. This project was to design such enterprise features for a sales application. The challenge was to get alignment of all the teams as governance impacts all parts of the product and enables new scenarios.",
    link: "project-coming-soon.html",
  },

  {
    id: 5,
    title: "Scaling architecture for health clinics",
    type: "full",
    image: "img/userFlowModules2.png ",
    description: "Each medical clinic may have a way of handling insurance, registration or some other process. The clinical software needed changing to support such variations. I designed an architecture that allowed user flow configuration through pluggable modules, reducing development and deployment by over 3x.",
  },

  {
    id: 6,
    title: "Enabling 1.1M users access health data",
    type: "full",
    image: "img/myChartIntegration.png",
    description: "Single Sign On (SSO) project enabled over 1M users access their MyChart medical records from any device or computer. It unified several disconnected Epic systems into what users saw as a single one. The logic, the flow and the screens were designed for simple and secure access.",
  },

  {
    id: 7,
    title: "Detecting and resolving issues in records across Epic instances",
    type: "full",
    image: "img/linkingEpicRecords.png ",
    description: "One of the biggest challenges in patients accessing their medical records is to make sure the right patient accesses the right record, especially across different clinics. I designed a system that searched and analyzed records from multiple Epic instances and presetned a way to link/correct them if anomalies were detected. This halved the time spent by the providers on helping patient access their medical records.",
  },


  {
    id: 8,
    title: "Managing product features",
    type: "full",
    image: "img/settings360Hero.png",
    description: "Complex custom products usually require complex setups. I designed a Settings section to intuitively manage all parts of the product in a single location.",
  },





  {
    id: 10,
    title: "Scalable sharing architecture for sales platform",
    type: "half",
    image: "img/assignedSalesHero.png",
    description: "New architecture for accessing and sharing records at scale. The goal was achieved by improving the ownership structure and avoiding the use of additional constructs like “sharing teams” that exist in older CRMs. The new model enabled new team based selling, and many new scenarios as “pass action to the proper AE if SDR is not available”. The solution reduced the need to build custom ownership configurations for different clients.",
    link: "project-coming-soon.html",
  },
  {
    id: 11,
    title: "Adding herarchies and apps to a sales platform",
    type: "half",
    image: "img/heroScalingConfig.png ",
    description: "Design a new architecture to scale Outreach platform to include apps, hierarchical management of users, teams and access. Adding features as “apps” removes the need to have custom builds for different clients and offers a powerful model to build extensions.",
    link: "project-coming-soon.html",
  },

  {
    id: 12,
    title: "Architecting advanced search",
    type: "half",
    image: "img/heroNewFilteringOutreach.png ",
    description: "Design new search and filtering logic and UI. This allows creation of flexible and reusable logic based on roles (as “by the assigned sales agent”) instead of specifying the exact person that may change (by “John Doe”).",
  },
  {
    id: 13,
    title: "Designing infrared communication in Windows",
    type: "half",
    image: "img/windowsNetwork.png",
    description: "Designing networking communication for computer-to-computer communication over infrared links.",
    link: "",
  },

  {
    id: 14,
    title: "Granting secure access to health data",
    type: "half",
    image: "img/enablingUserVerification.png",
    description: "Designing a system to grant access to user health data required in-depth assessment of potential friction points and modalities. This project offered different ways for users to confirm their identity even without calling the clinic.",
    link: "",
  },

    {
    id: 15,
    title: "Scaling virtual visits for providers",
    type: "half",
    image: "img/patientQueueImprovementComparison.png",
    description: "Covid pandemic started. Small clinics closed, hospitals are overwhelmed, patients flock to telemedicine app and the wait times soar to over 8 hours. This is the time to redesign the platform for scale: introduce triaging, scale resources across clinics, engage doctors from home, introduce AI-based insurance processing, chatbot to answer common questions and more. The design and implementation is done within days, not weeks or months resulting in 20x scale.",
    link: "",
  },

      {
    id: 16,
    title: "Displaying clinic availability",
    type: "half",
    image: "img/clinicAvailability.png",
    description: "When a patient needs to quickly see a doctor, knowing availability in different clinics is critical. In this project I surfaced the availability of different clinics together with the location map. Having spatial visualization and directions, the user can decide on the best option.",
    link: "",
  },


  {
    id: 17,
    title: "Processing insurance and payment",
    type: "half",
    image: "img/insuranceCapture.png",
    description: "This project simplified registration process by allowing users to enter the insurance and payment information from their phones. The processing part allows proper validation and processing without the need for the clinical staff to handle insurance cards.",
    link: "",
  },

    {
    id: 18,
    title: "Selecting existing medical insurance",
    type: "half",
    image: "img/insuranceStorage.png",
    description: "This project allowed simplified using insurance especially in cases where more than on insurance is involved. The cards would be stored and even shared with linked family members and proper estimates are given. Estimated reduction is 100k per admin per clinic.",
    link: "",
  },

  {
    id: 19,
    title: "Managing and displaying sync intervals",
    type: "half",
    image: "img/filterRangeChallenge.png",
    description: "A challenge with a system that has an external sync process is the sync can be started and stopped, creating an interval after which the data is not synchronized. A creative way to ensure the sync consistency is to display this interval and make the sync process aware of that during the subsequent synchronization. This adds clarity and ease of maintenance.",
    link: "",
  },

    {
    id: 20,
    title: "Designing content governance architecture",
    type: "half",
    image: "img/contentGovernanceArchitecture.png",
    description: "Content in a sales product refers to a set of vetted templates (as sales pitches, replies) that is used by AI of the sales team. Each region may have its own set of templates/content. For companies operating in different regions or selling different products, it is imperative to use proper templates and have a system in place to manage access. The design of such system covered complex cases and made easy to create/use appropriate snippets.",
    link: "",
  },

    {
    id: 21,
    title: "Statistical visualizations",
    type: "half",
    image: "img/statsVisualization.png",
    description: "Vendor managers need at-a-glance view of how the brands they manage perform. Creative visualizaations that help drive the price/stock changes are essential for doing the job effectively.",
    link: "",
  },

    {
    id: 22,
    title: "Visualizing workflows",
    type: "half",
    image: "img/newItemWorkflow.png",
    description: "Improving a design requires an in-depth understanding the context. Here we show different ways how the new item may show up in the Amazon catalog before redesigning the experience to enter new items.",
    link: "",
  },


    {
    id: 23,
    title: "HR dashboard",
    type: "half",
    image: "img/hrDashboard.png",
    description: "This tabletop dashboard was a way to use an iPad to show relevant HR-related data. It was useful to keep track of the meetings and see upcoming events and HR queries. This was and add-on to the designed HR system.",
    link: "",
  },

    {
    id: 24,
    title: "Creative warning messages",
    type: "half",
    image: "img/progressiveWarnings.png",
    description: "Most warnings or error messages are seen as boolean values -- there's either an error or there's no error. However, most cases are more nuanced where an error can have different severity. This warning design presents five levels of warning to match the perceived severity. As a bonus, the pixelation warning is shown pixelated. ",
    link: "",
  },

    {
    id: 25,
    title: "Data sync with CRMs",
    type: "half",
    image: "img/dataSynchronization.png",
    description: "Companies rely on CRMs to manage sales records. Each CRM is customized for the client making it challenging to sync with. I designed a new CRM integration that relied on setting the sync rules and ease of debugging by showing how records flow through rule sets.",
  },



];

function App() {
  return (
    <div className="font-sans text-gray-900">
      {/* ? Fixed Header */}
      <header className="fixed top-0 w-full bg-gray-900 text-white py-4 z-50 shadow">
        <nav className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="font-bold text-lg">Viladio</div>
          <div className="space-x-4">
            <a href="#home" className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-700 transition">Home</a>
            <a href="#projects" className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-700 transition">Projects</a>
            <a href="resume.pdf" className="border border-gray-400 px-4 py-2 rounded hover:bg-gray-700 transition">Resume</a>
          </div>
        </nav>
      </header>

      {/* ? Page Content, offset with padding to prevent content being hidden by fixed header */}
      <div className="pt-16">

        <section
          id="home"
          className="h-screen bg-fixed bg-center bg-cover flex items-center justify-center text-white"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=1600&q=80')" }}
        >
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <div className="absolute inset-0 bg-black bg-opacity-10"></div> {/* Optional overlay */}
          <h1 className="text-3xl text-center md:text-5xl font-regular bg-black/50 p-4 rounded mb-12">
            Transform complex enterprise products into scalable, easy to use solutions
          </h1>

                           <p className="text-white text-lg md:text-3xl font-light">
                Product architect. Designer. Developer. Maker. Photographer.<p/>
                    @ FinTech / Amazon / AWS / Microsoft / Healthcare
              </p>
            </div>
        </section>



        <div id="projects" className="bg-gray-300 min-h-screen px-4 py-10">
          <div className="flex flex-wrap -mx-2">


            {projects.map((project) => (
              <div key={project.id} className={`px-2 mb-12 ${
                    project.type === "full" ? "w-full" : "w-full md:w-1/2"
                  }`}>

            {/* 
            <div className="relative z-10 bg-white dark:bg-[#444] rounded-lg shadow-lg overflow-hidden p-6 h-full">
            */}

                  <div className="bg-[#fdf9f3] shadow-md rounded overflow-hidden w-full h-full flex flex-col">
                   <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto transform transition-transform duration-500 ease-in-out hover:scale-105"
                  />
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-l text-gray-600 font-semibold mb-0">{project.title}</h3>
                    <p className="text-gray-500 mb-4 text-sm tracking-tight leading-snug font-sans">{project.description}</p>

                    {/* Optional "More" Button */}
                    {project.link && (
                      <div className="mt-auto text-right">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-4 py-2 text-sm text-white bg-blue-500 rounded hover:bg-blue-700 transition"
                        >
                          More
                        </a>
                      </div>
                    )
                    }
                  </div>
                </div>
              </div>


            ))}

                   {/* Marquee border effect 
                    <div className="absolute inset-0 z-0 rounded-lg border-2 border-transparent group-hover:border-white group-hover:animate-marquee group-hover:bg-[linear-gradient(90deg,_#fff_25%,_transparent_25%,_transparent_50%,_white_50%,_white_75%,_transparent_75%,_transparent)] bg-[length:200%_200%] opacity-60 pointer-events-none" />
                  </div>
                  */}
          </div>
        </div>


    {/*
        <section id="resume" className="min-h-screen bg-yellow-100 flex items-center justify-center">
          <h2 className="text-2xl font-bold">Resume Coming Soon</h2>
        </section>
        */}
      </div>
    </div>
  );
}

export default App;