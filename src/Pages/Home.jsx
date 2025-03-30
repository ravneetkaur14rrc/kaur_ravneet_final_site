import { Typography, Box, Avatar } from '@mui/material';

export default function Home() {
  return (
    <Box textAlign="center" p={5}>
      <Avatar
        alt="Ravneet Kaur"
        src="/profile.jpg"
        sx={{ width: 150, height: 150, margin: 'auto' }}
      />
      <Typography variant="h3" gutterBottom>Ravneet Kaur</Typography>
      <Typography variant="h5" color="text.secondary">Full Stack Web Developer</Typography>
      <Typography variant="body1" mt={2}>
        Hello! I'm a student studying web development at Red River Polytechnic College.This portfolio showcases my coursework.
      </Typography>
    </Box>
  );
}