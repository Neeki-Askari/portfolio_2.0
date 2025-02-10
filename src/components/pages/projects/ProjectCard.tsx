import * as React from 'react';
import {useContext} from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ProjectCardType } from '../../../models/projectCardType';
import { CardStyled } from './ProjectsStyled';
import { ThemeContext, ThemeContextValues } from '../../../context/themeContext';

const ProjectCard: React.FC<{project: ProjectCardType}> = ({project}) => {
  const {theme} = useContext(ThemeContext) as ThemeContextValues;

  return (
    <CardStyled theme={theme}>
      <CardMedia
        sx={{ height: 140 }}
        image={project.image}
        title={project.projectName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.projectName}
        </Typography>
        <Typography variant="body2">
          {project.description}
        </Typography>
      </CardContent>
        <Button size="small" href={project.sourceCodeUrl}>GitHub</Button>
    </CardStyled>
  );
}

export default ProjectCard;