import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';
const resources = [
  {
    title: "React Documentation",
    image: "/favicon.ico",
    summary: "Official React learning guide.",
    link: "https://reactjs.org/docs"
  },
  {
    title: "MDN Web Docs",
    image: "/mdn logo.jpeg",
    summary: "Best resource for HTML, CSS, and JavaScript.",
    link: "https://developer.mozilla.org"
  }
];

export default function Resources() {
  return (
    <Box p={4}>
      <Typography variant="h3" gutterBottom>Learning Resources</Typography>
      <Grid container spacing={4}>
        {resources.map((resource, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card>
              <CardMedia component="img" height="140" image={resource.image} />
              <CardContent>
                <Typography variant="h5">{resource.title}</Typography>
                <Typography variant="body2">{resource.summary}</Typography>
                <Button href={resource.link} target="_blank">Visit</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}