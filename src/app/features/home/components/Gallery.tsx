import { useState } from 'react';

// Assets
import imgWoods from '@assets/img_woods.jpg';
import img5Terre from '@assets/img_5terre.jpg';
import imgMountains from '@assets/img_mountains.jpg';
import imgLights from '@assets/img_lights.jpg';
import imgNature from '@assets/img_nature.jpg';
import imgSnow from '@assets/img_snow.jpg';

// MUI
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';

type GalleryProps = string[];

const images: GalleryProps = [
  imgWoods,
  img5Terre,
  imgMountains,
  imgLights,
  imgNature,
  imgSnow,
];

export default function Gallery() {
  return (
    <Grid
      container
      sx={{
        py: 3,
      }}
    >
      {images.map((image, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={2}
          sx={{
            p: 1,
          }}
        >
          <Card
            // sx={{ maxWidth: 345 }}
            key={index}
          >
            <CardActionArea>
              <CardMedia
                component='img'
                // height='140'
                image={image}
                alt='Gallery image'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  Trailer type
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
