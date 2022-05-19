import React from 'react';

import { UserOutlined } from '@ant-design/icons';
import { Card, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { useProgressiveImg } from '../../../hooks';
import { appStrings } from '../../../i18n';
import { formatListingPrice, iconColor, transformImagePath } from '../../utils';

interface Props {
  listing: {
    id: string;
    title: string;
    image: string;
    address: string;
    price: number;
    numOfGuests: number;
  };
}

const { Text, Title } = Typography;

const { LISTING_CARD: lang } = appStrings;

export const ListingCard = ({ listing }: Props) => {
  const { id, title, image, address, price, numOfGuests } = listing;
  const [src, { blur }] = useProgressiveImg(transformImagePath(image, 'h_100,w_130'), image);
  return (
    <Link to={`/listing/${id}`}>
      <Card
        hoverable
        cover={
          <div
            style={{
              backgroundImage: `url(${src})`,
              filter: blur ? 'blur(10px)' : 'none',
              transition: blur ? 'none' : 'filter 0.3s ease-out',
            }}
            className="listing-card__cover-img"
          />
        }
      >
        <div className="listing-card__details">
          <div className="listing-card__description">
            <Title level={4} className="listing-card__price">
              {formatListingPrice(price)}
              <span style={{ fontSize: '15px' }}> / {lang.day}</span>
            </Title>
            <Text strong ellipsis className="listing-card__title">
              {title}
            </Text>
            <Text ellipsis className="listing-card__address">
              {address}
            </Text>
          </div>
          <div className="listing-card__dimensions listing-card__dimensions--guests">
            <UserOutlined style={{ color: iconColor }} />
            <Text>
              {numOfGuests} {lang.guests}
            </Text>
          </div>
        </div>
      </Card>
    </Link>
  );
};
