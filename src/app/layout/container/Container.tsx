// MUI
import { Box, Container as MUIContainer, useTheme } from '@mui/material';

const Container = ({
  id,
  children,
  setBgColor,
}: {
  id: string;
  children: React.ReactNode;
  setBgColor?: boolean;
}) => {
  const theme = useTheme();

  return (
    <Box
      id={id}
      sx={{ bgcolor: setBgColor ? theme.palette.background.default : null }}
    >
      <MUIContainer maxWidth='lg'>{children}</MUIContainer>
    </Box>
  );
};

export default Container;
