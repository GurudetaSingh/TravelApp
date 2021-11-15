import React from 'react';
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import AccessTime from '@material-ui/icons/AccessTime';
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';
import { mergeClasses } from '@material-ui/styles';
import LocationOn from '@material-ui/icons/LocationOn';

// Displays details for different places
const PlaceDetails = ({ place, selected, refProp }) => {
    const clases = useStyles();

    if(selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

    return (
        <Card elevation={6}>
          <CardMedia 
            style={{ height: 350 }}
            image={place.photo ? place.photo.images.large.url : 'https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg'}
            title={place.name}
          />  
          <CardContent>
              {/* Displays name */}
              <Typography gutterBottom variant="h5">{place.name}</Typography>
              {/* Displays rating */}
              <Box display="flex" justifyContent="space-between">
                <Rating value={Number(place.rating)} readOnly />
                <Typography gutterBottom variant="subtitle1">Out of {place.num_reviews} reviews</Typography>
              </Box>
              {/* Displays price */}
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Price</Typography>
                <Typography gutterBottom variant="subtitle1">{place.price_level}</Typography>
              </Box>
              {/* Displays ranking */}
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Ranking</Typography>
                <Typography gutterBottom variant="subtitle1">{place.ranking}</Typography>
              </Box>
              {/* Displays distance */}
              <Box display="flex" justifyContent="space-between">
                <Typography variant="subtitle1">Distance</Typography>
                <Typography gutterBottom variant="subtitle1">{Math.round(place.distance * 100)/ 100} mi </Typography>
              </Box>
              {/* Displays awards */}
              {place?.awards?.map((award) => (
                  <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
                      <img src={award.images.small} alt={award.display_name} />
                      <Typography variant="subtitle2" color="textSecondary">{award.display_name}</Typography>
                  </Box>
              ))}
              {/* Displays type of cuisine for restaurants */}
              {place?.cuisine?.map(({ name }) => (
                  <Chip key={name} size="small" label={name} className={clases.chip}
                  />
              ))}
              {/* Displays address */}
              {place?.address && (
                  <Typography gutterBottom variant="subtitle2" color="textSecondary" className={clases.subtitle}>
                      <LocationOnIcon /> {place.address}
                  </Typography>
              )}
              {/* Displays phone number */}
              {place?.phone && (
                  <Typography gutterBottom variant="subtitle2" color="textSecondary" className={clases.spacing}>
                      <PhoneIcon /> {place.phone}
                  </Typography>
              )}
              {/* Displays open or not open */}
              {place?.open_now_text && (
                  <Typography gutterBottom variant="subtitle2" color="textSecondary" className={clases.spacing}>
                      <AccessTime /> {place.open_now_text}
                  </Typography>
              )}
              {/* Displays website and trip advisor */}
              <CardActions>
                  <Button size="small" color="primary" onClick={() => window.open(place.web_url, '_blank')}>
                    Trip Advisor
                  </Button>
                  <Button size="small" color="primary" onClick={() => window.open(place.website, '_blank')}>
                    Website
                  </Button>
              </CardActions>
          </CardContent>
        </Card>
    );
}

export default PlaceDetails;