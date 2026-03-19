import { useOnIntersect } from "../../../Intersect";
import { ProjectCardType } from "../../../models/projectCardType";
import ProjectCard from "./ProjectCard";
import {
  Header,
  ProjectsInnerContainer,
  ProjectsOuterContainer,
  SubHeader,
} from "./ProjectsStyled";

const Projects: React.FC = () => {
  const [hiddenRef, isIntersecting] = useOnIntersect();

  const projectInformation: ProjectCardType[] = [
    {
      projectName: "SmartPlates",
      image: "/smartPlates.png",
      description:
        "Full stack application using Typescript, ReactJS, and ASP.NET to create and manage recipes, meal plans, and grocery lists.",
      sourceCodeUrl: "https://github.com/Neeki-Askari/SmartPlates",
    },
    {
      projectName: "Med-Buddy",
      image: "/med-buddy.png",
      description:
        "Full stack web application equipped with OAuth, PostgreSQL, and ReactJS to allow users to easily manage their medications in one place.",
      sourceCodeUrl: "https://github.com/Neeki-Askari/med-buddy",
    },
    {
      projectName: "HyperLoop API",
      image: "/hyperloop-tech.png",
      description:
        "Backend API for an e-commerce site that efficiently handles ETL (Extract, Transform, Load) on large datasets and optimizes SQL queries for latency.",
      sourceCodeUrl: "https://github.com/Neeki-Askari/Hyperloop-API",
    },
  ];
  return (
    <ProjectsOuterContainer
      ref={hiddenRef}
      className={`projects ${isIntersecting ? "fadeIn" : "hidden"}`}
    >
      <Header>Personal Projects</Header>
      <SubHeader>
        Click on each project to view more details on GitHub
      </SubHeader>
      <ProjectsInnerContainer>
        {projectInformation.map((project, i) => {
          return (
            <div key={i}>
              <ProjectCard project={project} />
            </div>
          );
        })}
      </ProjectsInnerContainer>
    </ProjectsOuterContainer>
  );
};

export default Projects;
