import { Button, Drawer, Card, InputNumber, Flex } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
const Cart = ({ isShow, onClose, onClick, data }) => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <Drawer title="Giỏ Hàng" onClose={onClose} open={isShow}>
      {data?.map((item, idx) => {
        return (
          <Card
            key={idx}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
            }}
          >
            <Flex>
              <img
                src={item.img}
                alt="Product"
                style={{ width: 80, height: 80, marginRight: 16 }}
              />
              <div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ margin: 0 }}>{item.productName}</h4>
                  <p style={{ color: "#888", margin: "8px 0" }}>{item.price}</p>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Button
                    icon={<MinusOutlined />}
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                  />
                  <InputNumber
                    min={1}
                    value={quantity}
                    onChange={(value) => setQuantity(value)}
                    style={{ margin: "0 8px", width: 50, textAlign: "center" }}
                  />
                  <Button icon={<PlusOutlined />} onClick={increaseQuantity} />
                </div>
              </div>
            </Flex>
          </Card>
        );
      })}
      <h4>
        Total: <span style={{ color: "red" }}>$0</span>
      </h4>
      <Button
        color="danger"
        variant="solid"
        onClick={() => onClick({ quantity, id: data[0].id })}
      >
        Thanh toán
      </Button>
    </Drawer>
  );
};
export default Cart;
