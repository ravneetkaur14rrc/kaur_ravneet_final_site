import { Box, Typography, Chip } from '@mui/material';

export default function Skills() {
  return (
    <Box p={4}>
      <Typography variant="h3" gutterBottom>My Skills</Typography>

      <Typography variant="h5" mt={4}>Languages & Frameworks</Typography>
      <Box mt={2}>
        <Chip label="JavaScript" sx={{ m: 1 }} />
        <Chip label="React" sx={{ m: 1 }} />
        <Chip label="HTML/CSS" sx={{ m: 1 }} />
      </Box>

      <Typography variant="h5" mt={4}>Tools</Typography>
      <Box mt={2}>
        <Chip label="Git" sx={{ m: 1 }} />
        <Chip label="VS Code" sx={{ m: 1 }} />
        <Chip label="Docker" sx={{ m: 1 }} />
      </Box>
    </Box>
  );
}