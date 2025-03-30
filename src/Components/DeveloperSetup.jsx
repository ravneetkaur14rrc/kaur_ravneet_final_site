import { List, ListItem, ListItemText, Typography } from '@mui/material';
import { Code, Computer, FontDownload } from '@mui/icons-material';

export default function DeveloperSetup() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        My Development Environment
      </Typography>

      <List>
        <ListItem>
          <Code sx={{ mr: 2 }} />
          <ListItemText primary="VS Code" secondary="With ESLint, Prettier, and Material Icon Theme" />
        </ListItem>
        <ListItem>
          <Computer sx={{ mr: 2 }} />
          <ListItemText primary="Terminal" secondary="Windows Terminal with WSL" />
        </ListItem>
        <ListItem>
          <FontDownload sx={{ mr: 2 }} />
          <ListItemText primary="Font" secondary="Fira Code (with ligatures)" />
        </ListItem>
      </List>
    </Box>
  );
}