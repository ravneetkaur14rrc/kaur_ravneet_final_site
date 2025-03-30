import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/work">Work</Button>
        <Button color="inherit" component={Link} to="/skills">Skills</Button>
        <Button color="inherit" component={Link} to="/resources">Resources</Button>
        <Button color="inherit" component={Link} to="/setup">Setup</Button>
      </Toolbar>
    </AppBar>
  );
}