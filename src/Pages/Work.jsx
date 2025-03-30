import { Grid, Typography, Box} from '@mui/material';
// eslint-disable-next-line no-unused-vars
import { Card, CardContent, CardMedia } from '@mui/material';
import WorkItem from '../Components/WorkItem';
export default function Work() {
const projects = [
  {
    title: "Weather App",
    description: "A React app that fetches live weather data using APIs.",
    image: "/weather.jpeg",
    link: "https://github.com/ravneetkaur14rrc/global_weather_tracker.git"
  },

  {
    title: "Book library App",
    description: "A React-based application for browsing and managing books. Features include filtering, search, and cart functionality",
    image: "/book.jpeg",
    link: "https://github.com/ravneetkaur14rrc/Books_library.git"
  },

  {
    title: "My Portfolio Website",
    description: "Built with React and Material-UI to showcase my work.",
    image: "/portfolio.jpeg",
    link: "https://github.com/ravneetkaur14rrc/kaur_ravneet_final_site.git"
  },

];

  return (
    <Box p={4}>
      <Typography variant="h3" gutterBottom>My Projects</Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <WorkItem key={index} {...project} />
        ))}
      </Grid>
    </Box>
  );
}