import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function WorkItem({ title, description, image, link }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button
        size="small"
        href={link}
        target="_blank"
        sx={{ m: 1 }}
      >
        View Project
      </Button>
    </Card>
  );
}