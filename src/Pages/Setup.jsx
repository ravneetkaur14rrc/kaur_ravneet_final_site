import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function Setup() {
  return (
    <Box p={4}>
      <Typography variant="h3" gutterBottom>My Developer Setup</Typography>

      <Typography variant="h5" mt={4}>VS Code Setup</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Extensions: ESLint, Prettier, Material Icon Theme" />
        </ListItem>
      </List>

      <Typography variant="h5" mt={4}>Terminal</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Using Git Bash on Windows" />
        </ListItem>
      </List>

      <Typography variant="h5" mt={4}>Font</Typography>
      <List>
        <ListItem>
          <ListItemText primary="Fira Code (with ligatures)" />
        </ListItem>
      </List>
    </Box>
  );
}