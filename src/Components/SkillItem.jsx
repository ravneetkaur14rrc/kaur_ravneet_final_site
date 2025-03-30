import { Chip, Box } from '@mui/material';

export default function SkillItem({ name, level = 'intermediate' }) {
  const colorMap = {
    beginner: 'primary',
    intermediate: 'secondary',
    advanced: 'success'
  };

  return (
    <Box sx={{ m: 0.5 }}>
      <Chip
        label={name}
        color={colorMap[level]}
        variant="outlined"
      />
    </Box>
  );
}