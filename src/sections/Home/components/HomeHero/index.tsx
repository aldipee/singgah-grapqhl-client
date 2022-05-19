import React from 'react';

import { Card, Col, Input, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { appStrings } from '../../../../i18n';
import dubaiImage from '../../assets/dubai.jpg';
import londonImage from '../../assets/london.jpg';
import newYorkImage from '../../assets/new-york.jpg';
import taipeiImage from '../../assets/taipei.jpg';

interface Props {
  onSearch: (value: string) => void;
}

const { Search } = Input;
const { Title } = Typography;

const {
  HOME: { HERO: lang },
} = appStrings;

export const HomeHero = ({ onSearch }: Props) => {
  return (
    <div className="home-hero">
      <div className="home-hero__search">
        <Title className="home-hero__title">{lang.title}</Title>
        <Search
          placeholder="Search 'Yogyakarta'"
          size="large"
          enterButton
          className="home-hero__search-input"
          onSearch={onSearch}
        />
      </div>
      <Row gutter={12} className="home-hero__cards">
        <Col md={6} xs={12}>
          <Link to="/listings/Bali, Indonesia">
            <Card
              cover={
                <img
                  src="https://a.cdn-hotels.com/gdcs/production143/d1112/c4fedab1-4041-4db5-9245-97439472cf2c.jpg"
                  alt={lang.dubai}
                />
              }
            >
              Bali
            </Card>
          </Link>
        </Col>

        <Col md={6} xs={0}>
          <Link to="/listings/jakarta">
            <Card
              cover={
                <img
                  src="https://www.jakarta-tourism.go.id/uploads/slideshow/615ab8c2db234.jpg"
                  alt={lang.london}
                />
              }
            >
              Jakarta
            </Card>
          </Link>
        </Col>

        <Col md={6} xs={12}>
          <Link to="/listings/surabaya">
            {' '}
            <Card
              cover={
                <img
                  src="https://img.idxchannel.com/media/500/images/idx/2021/05/20/kota-surabaya.jpg"
                  alt={lang.newYork}
                />
              }
            >
              Surabaya
            </Card>
          </Link>
        </Col>

        <Col md={6} xs={0}>
          <Link to="/listings/yogyakarta">
            <Card
              cover={
                <img
                  src="https://asset.kompas.com/crops/43BL_Jv4whTBdcNNbDwb7HFF_Fo=/0x0:1000x667/750x500/data/photo/2020/03/10/5e677a1b83e8d.jpg"
                  alt={lang.taipei}
                />
              }
            >
              Yogyakarta
            </Card>
          </Link>
        </Col>
      </Row>
      <Row gutter={12} className="home-hero__cards">
        <Col md={6} xs={12}>
          <Link to="/listings/semarang">
            <Card
              cover={
                <img
                  src="https://thumbs.dreamstime.com/b/lawang-sewu-thousand-doors-56962580.jpg"
                  alt={lang.dubai}
                />
              }
            >
              Semarang
            </Card>
          </Link>
        </Col>

        <Col md={6} xs={0}>
          <Link to="/listings/salatiga">
            <Card
              cover={
                <img
                  src="https://img.okezone.com/content/2021/07/21/408/2443961/wisata-salatiga-kekinian-instagramable-bisa-camping-hingga-selfie-cantik-0TMDBF4nE1.JPG"
                  alt={lang.london}
                />
              }
            >
              Salatiga
            </Card>
          </Link>
        </Col>

        <Col md={6} xs={12}>
          <Link to="/listings/malang">
            {' '}
            <Card
              cover={
                <img
                  src="http://4.bp.blogspot.com/-1M4cNLmyMvI/UTNPOEJCpPI/AAAAAAAACXk/VMFaaCyFGBA/s1600/Tugu+Kota+Malang+saat+senja3+%25281024x683%2529.jpg"
                  alt={lang.newYork}
                />
              }
            >
              Malang
            </Card>
          </Link>
        </Col>

        <Col md={6} xs={0}>
          <Link to="/listings/lombok">
            <Card
              cover={
                <img
                  src="https://1.bp.blogspot.com/-TPAK3b5Zk8I/WB3rGWhz56I/AAAAAAAAAFY/g2CO394OW9AmkOs7rIyz-Utq0nuRFIoigCLcB/s1600/lombok.jpg"
                  alt={lang.taipei}
                />
              }
            >
              Lombok
            </Card>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
