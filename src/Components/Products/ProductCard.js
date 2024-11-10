import { Button, Card, Progress } from "antd";
import { Flex } from "antd";

const ProductCard = ({ data, onClick }) => {
  return (
    <Card
      hoverable
      style={{
        width: 240,
        padding: "10px",
      }}
      cover={<img alt="example" src={data.img} height={"200px"} />}
    >
      <p style={{ margin: 0 }}>{data.productName}</p>
      <Progress
        percent={data.percent}
        percentPosition={{
          align: "start",
          type: "outer",
        }}
      />
      <div
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "8px" }}
      >
        {data.price}
      </div>
      <Flex justify={"center"}>
        <Button color="danger" variant="solid" onClick={onClick}>
          Thêm vào giỏ
        </Button>
      </Flex>
    </Card>
  );
};
export default ProductCard;
