import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProductsById } from '../../redux/detailSlice';
import {
  Container,
  ImageContainer,
  Image,
  DetailsContainer,
  Title,
  Description,
  Price,
  Category,
  Rate,
} from './styles/details';

const Details = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const detailsReducer = useSelector((state) => state.detailsReducer);
  const { singleProduct: product } = detailsReducer;
  const { isActive: isOpen } = useSelector((state) => state.homeReducer);
  const {
    category, description, image, price, rating, title,
  } = product;
  const productId = pathname.split('/')[3];

  useEffect(() => {
    dispatch(getProductsById(productId));
  }, [dispatch, productId]);

  return (
    <Container isActive={isOpen}>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <DetailsContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>
          Price: $
          {price}
        </Price>
        <Rate>
          Rate:
          {rating?.rate}
        </Rate>
        <Category>
          Category:
          {category}
        </Category>
      </DetailsContainer>
    </Container>
  );
};

export default Details;
