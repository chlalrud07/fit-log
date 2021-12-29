import { Button, Card, CardContent, CardHeader, Divider, Fab } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import ModalComponent from '../../components/ModalComponent';
import Create from './Create';
import { Link } from 'react-router-dom';

export default function Index() {

    const [isModalOpen, setModal] = useState(false)

    const onClickAddSchedule = () => {
        setModal(true);
    };

    return (
      <>
          <CardContent>
              <Link to="/exercise/Detail" style={{textDecoration: 'none'}}>
                  <Card sx={{ maxWidth: 345 }}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image="/static/images/placeholders/covers/6.jpg"
                        title="Contemplative Reptile"
                      />
                      <CardContent>
                          <Typography gutterBottom variant="h5" component="div">
                              2021.11.16 (화) PM 8:00
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                              팔, 어깨
                          </Typography>
                      </CardContent>
                  </Card>
              </Link>
          </CardContent>
          <CardContent>
              <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="/static/images/placeholders/covers/6.jpg"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                          2021.11.16 (화) PM 8:00
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                          팔, 어깨
                      </Typography>
                  </CardContent>
              </Card>
          </CardContent>
          <Fab
            sx={{ position: 'absolute', bottom: 16, right: 16 }}
            size="medium"
            color="primary"
            aria-label="add"
            onClick={onClickAddSchedule}
          >
              <AddIcon />
          </Fab>
          {isModalOpen && <ModalComponent
            isOpen={isModalOpen}
            onModalClose={() => {setModal(false)}}
            render={<Create></Create>}/>}
      </>
    );
}
