import {
  Stack,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Pagination,
  Box
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Centered = styled(Stack)`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;

const ArticleViewer = ({ data }) => {
  const [page, setPage] = useState(1);
  const currentIndex = 2 * page - 2;
  const prev = data[currentIndex];
  const next = data[currentIndex + 1];
  
  const handleChange = (e, number) => {
    setPage(number);
  }

  const count = Math.round(data.length / 2);

  return (
    <Centered gap={2} justifyContent='center'>
      <Stack direction="row" gap={2}>
        <Card sx={{ width: 400 }}>
          <CardActionArea>
            <CardMedia sx={{ height: 250 }} image={prev.urlToImage} />
          </CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {prev.source.name}
            </Typography>
            <Typography variant="h6" color="GrayText">
              {prev.title}
            </Typography>
          </CardContent>
        </Card>

        <Card sx={{ width: 400, minHeight: 430 }}>
          <CardActionArea>
            <CardMedia sx={{ height: 250 }} image={next.urlToImage} />
          </CardActionArea>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              {next.source.name}
            </Typography>
            <Typography variant="h6" color="GrayText">
              {next.title}
            </Typography>
          </CardContent>
        </Card>
      </Stack>

      <Stack mt={2} justifyContent='center'>
        <Pagination
          page={page}
          sx={{display: 'contents', '.MuiPagination-ul': {
            justifyContent: 'center'
          }}}
          onChange={handleChange}
          count={count} 
          color="primary"
          boundaryCount={2} 
        />
      </Stack>
    </Centered>
  );
};

export default ArticleViewer;
