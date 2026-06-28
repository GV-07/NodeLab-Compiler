import { TutorialTopic } from './cssTutorialsData';

export const MUI_TOPICS: TutorialTopic[] = [
  {
    id: 'mui-get-started',
    title: 'MUI Get Started',
    description: 'Learn how to install, import, and set up Material UI in a React project.',
    explanation: [
      'MUI is a comprehensive library of React components that implements Googles Material Design specs.',
      'To get started, install the core packages: npm install @mui/material @emotion/react @emotion/styled.',
      'Wrap your main app component in ThemeProvider to access theme configurations.'
    ],
    code: `import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Material UI Button</Button>
    </ThemeProvider>
  );
}`,
    languageId: 'react'
  },
  {
    id: 'mui-styling',
    title: 'MUI Custom Styling',
    description: 'Modifying MUI styles using the sx prop, styled() utility, and theme extensions.',
    explanation: [
      'The sx prop is a super powerful shortcut to style MUI elements directly with custom CSS tokens.',
      'The styled() utility allows you to create fully custom reusable styled wrappers (similar to styled-components).',
      'You can also customize spacing, typography scales, and primary palettes by extending the core theme object.'
    ],
    code: `import React from 'react';
import { Box, styled } from '@mui/material';

const CustomBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: '#fff',
  padding: theme.spacing(3),
  borderRadius: 8,
}));

export function Demo() {
  return (
    <CustomBox sx={{ boxShadow: 3 }}>
      Styled Box Layout
    </CustomBox>
  );
}`,
    languageId: 'react'
  },
  {
    id: 'mui-core-components',
    title: 'MUI Core Components (Buttons, Modals)',
    description: 'Using core interactive elements like Button, Dialog, Modal, and TextFields.',
    explanation: [
      'MUI provides pre-styled high-quality interactive components like Button, TextField, and Dialog.',
      'Dialog serves as a highly customizable accessible overlay for modals and warning prompts.',
      'All inputs support built-in helper text, focus transitions, and error handling states.'
    ],
    code: `import React, { useState } from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';

export default function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)} variant="outlined">Open Dialog</Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Action</DialogTitle>
        <DialogContent>Are you sure you want to proceed?</DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={() => setOpen(false)} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}`,
    languageId: 'react'
  },
  {
    id: 'mui-layouts',
    title: 'MUI Layout Containers',
    description: 'Aligning pages beautifully using Container, Grid, Stack, and Box.',
    explanation: [
      'Box is a simple, wrapper-less element targeting general structure and positioning (like div).',
      'Container limits page widths based on fixed responsive margins (xs, sm, md, lg, xl).',
      'Grid (Grid2 in newer versions) provides a highly fluid 12-column viewport system to re-arrange layouts.',
      'Stack aligns children in single-axis queues (vertical or horizontal) with custom margins.'
    ],
    code: `import React from 'react';
import { Grid, Box, Stack } from '@mui/material';

export default function GridDemo() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={8}>
        <Box bgcolor="grey.200" p={2}>Main Section (8 Columns)</Box>
      </Grid>
      <Grid item xs={12} md={4}>
        <Box bgcolor="grey.300" p={2}>Sidebar (4 Columns)</Box>
      </Grid>
    </Grid>
  );
}`,
    languageId: 'react'
  },
  {
    id: 'mui-icons-typography',
    title: 'MUI Icons & Typography',
    description: 'Applying Material Icons and maintaining typographical consistency with Typography.',
    explanation: [
      'The Typography component enforces Material typography layouts (h1, subtitle1, body2).',
      'You can map the visual styles to different HTML tags using the component prop (e.g. component="h3").',
      'The @mui/icons-material package provides thousands of vector svg icons ready to use.'
    ],
    code: `import React from 'react';
import { Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function TextDemo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <Typography variant="h4" component="h1" color="primary">
        Review Logs
      </Typography>
      <DeleteIcon color="error" />
    </div>
  );
}`,
    languageId: 'react'
  }
];
