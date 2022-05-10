import { Row, Col, Spin } from 'antd';

const Preloader = () => {
  return (
    <Row
      justify="center"
      style={{ height: '100%', width: '100%', top: '40%', left: '47%', position: 'absolute' }}>
      <Col span={24}>
        <Spin id="main-preloader" tip="Загрузка..." size="large" delay={300} />
      </Col>
    </Row>
  );
};

export default Preloader;
