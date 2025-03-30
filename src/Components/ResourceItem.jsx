import { Card, CardContent, Typography, Button, Link } from '@mui/material';

export default function ResourceItem({ title, description, link }) {
  return (
    <Card sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ mb: 1.5 }}>
          {description}
        </Typography>
        <Link href={link} target="_blank">
          <Button size="small">Visit Resource</Button>
        </Link>
      </CardContent>
    </Card>
  );
}