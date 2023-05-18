import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

const ProductReview = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [photo, setPhoto] = useState(null);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handlePhotoChange = (event) => {
    setPhoto(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: handle form submission
  };

  return (
    <Box sx={{ mt: 3 }}>
      <Typography variant="h6">Ürünü değerlendirin</Typography>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
          <Typography sx={{ mr: 2 }}>Puan:</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              variant={rating >= 1 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setRating(1)}
            >
              1
            </Button>
            <Button
              variant={rating >= 2 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setRating(2)}
            >
              2
            </Button>
            <Button
              variant={rating >= 3 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setRating(3)}
            >
              3
            </Button>
            <Button
              variant={rating >= 4 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setRating(4)}
            >
              4
            </Button>
            <Button
              variant={rating >= 5 ? 'contained' : 'outlined'}
              color="primary"
              onClick={() => setRating(5)}
            >
              5
            </Button>
          </Box>
        </Box>
        <Box sx={{ mt: 1 }}>
          <TextField
            id="comment"
            label="Yorum"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={comment}
            onChange={handleCommentChange}
          />
        </Box>
        <Box sx={{ mt: 1 }}>
          <input
            accept="image/*"
            id="photo"
            type="file"
            onChange={handlePhotoChange}
          />
          <label htmlFor="photo">
            <Button variant="contained" component="span">
              Fotoğraf ekle
            </Button>
          </label>
        </Box>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" type="submit">
            Gönder
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default ProductReview;