import React, { useState } from "react";
import { Breadcrumb, Layout, Menu, theme, Modal } from "antd";
import ProductsList from "./Components/Products/ProductsList";
import Cart from "./Components/Cart/Cart";
const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [openCart, setOpenCart] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listCart, setListCart] = useState([]);

  const items = [
    {
      key: "1",
      label: `Trang chủ`,
    },
    {
      key: "2",
      label: `Sản phẩm`,
    },
    {
      key: "3",
      label: `Giỏ hàng`,
      onClick: () => setOpenCart(true),
    },
  ];

  const [productData, setProductData] = useState([
    {
      id: 1,
      productName: "Iphone 16",
      price: "$99.9",
      percent: 10,
      img: "/images/PEP_iphone16-ultramarine-1.png",
    },
    {
      id: 2,
      productName: "Xe Máy Điện Vinfast",
      price: "$9.9",
      percent: 70,
      img: "/images/xe-may-dien-vinfast-impes-png-2.png",
    },
    {
      id: 3,
      productName: "iPhone 16 PROMAX 1TB",
      price: "$10",
      percent: 50,
      img: "/images/iphone-16-promax-6-9inch-deserttitanium-nhistore-2.png",
    },
    {
      id: 4,
      productName: "HONDA CLICK 125",
      price: "$20",
      percent: 40,
      img: "/images/orla-beige.png",
    },
  ]);

  const onClickPay = (e) => {
    productData.map((item, idx) => {
      if (item.id === e.id) {
        item.percent = item.percent + e.quantity;
      }
      return item;
    });
    setOpenCart(false);
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{
            flex: 1,
            minWidth: 0,
          }}
        />
      </Header>
      <Content
        style={{
          padding: "0 48px",
        }}
      >
        <Breadcrumb
          style={{
            margin: "16px 0",
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Product</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <ProductsList
            productData={productData}
            onAdd={(e) => {
              setListCart([...listCart, e]);
            }}
          />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        RéPSaJ
      </Footer>
      <Cart
        isShow={openCart}
        onClose={() => setOpenCart(false)}
        data={listCart}
        onClick={onClickPay}
      />
      <Modal
        title={
          productData[0].percent >= 100
            ? `Chúc mừng khách hàng có số ID: ${Math.random()} đã trúng thưởng`
            : "Thanh Toán Thành công"
        }
        open={isModalOpen}
        onOk={handleOk}
      ></Modal>
    </Layout>
  );
};
export default App;
