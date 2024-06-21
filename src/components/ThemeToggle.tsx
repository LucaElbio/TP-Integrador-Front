import React from 'react';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Box from '@mui/material/Box';

interface ThemeToggleProps {
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}

const IconContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: theme.spacing(1),
}));

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, mode }) => {
  return (
    <Box display="flex" alignItems="center">
      <IconContainer>
        {mode === 'light' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconContainer>
      <Switch
        checked={mode === 'dark'}
        onChange={toggleTheme}
        name="themeToggle"
        color="default"
        inputProps={{ 'aria-label': 'toggle theme' }}
      />
    </Box>
  );
};

export default ThemeToggle;
