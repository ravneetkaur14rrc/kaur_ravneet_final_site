import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 3, mt: 'auto' }}>
      <Typography variant="body2" align="center">
        © {new Date().getFullYear()} My Portfolio - Built with React
      </Typography>
    </Box>
  );
}