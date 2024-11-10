import ProductCard from "./ProductCard";
import { Col, Row } from "antd";


const ProductsList = ({ onAdd, productData }) => {
  return (
    <Row gutter={4}>
      {productData?.map((item, index) => (
        <Col span={4} key={index}>
          <ProductCard data={item} onClick={() => onAdd(item)} />
        </Col>
      ))}
    </Row>
  );
};
export default ProductsList;
