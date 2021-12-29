import {
  Avatar, Card, CardHeader,
  Container,
  Divider, IconButton, InputAdornment, InputBase,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText, ListSubheader, Paper, TextField,
  Typography, useTheme
} from '@mui/material';

import { styled } from '@mui/material/styles';
import AddExercisePopup from '../../components/exercise/AddExercisePopup';
const ListWrapper = styled(List)(
  () => `
      .MuiListItem-root {
        border-radius: 0;
        margin: 0;
      }
`
);

export default function Detail () {

  const theme = useTheme();
  return (
    <Card sx={{ height: '100%', overflow: 'auto' }}>
      <ListWrapper disablePadding>
        <ListSubheader>
          <Typography sx={{ py: 1.5 }} variant="h4" color="text.primary">
            2021년 12월 12일 PM 08:00
          </Typography>
        </ListSubheader>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`
              }}
            >
              C
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              color: `${theme.colors.alpha.black[100]}`
            }}
            primary="cable crunch"
            secondary="weight 10kg / count 20 / set 3"
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`
              }}
            >
              C
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              color: `${theme.colors.alpha.black[100]}`
            }}
            primary="cable crunch"
            secondary="weight 10kg / count 20 / set 3"
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemAvatar>
            <Avatar
              sx={{
                width: 38,
                height: 38,
                background: `${theme.colors.info.main}`,
                color: `${theme.palette.info.contrastText}`
              }}
            >
              C
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primaryTypographyProps={{
              variant: 'h5',
              color: `${theme.colors.alpha.black[100]}`
            }}
            primary="cable crunch"
            secondary="weight 10kg / count 20 / set 3"
          />
        </ListItem>
      </ListWrapper>
      <AddExercisePopup/>
    </Card>
  );
}
