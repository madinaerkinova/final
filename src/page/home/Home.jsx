import React from "react";
import { HomeIcon } from "../../assets/home-icon";
import { LogoIcon } from "../../assets/logo-icon";
import { PerseIcon } from "../../assets/perse-icon";
import { LogoutIcon } from "../../assets/logout-icon";
import { SettingIcon } from "../../assets/setting-icon";
import { DashboardIcon } from "../../assets/dashboard-icon";
import { NotificationIcon } from "../../assets/notification-icon";
import { Message } from "../../assets/message";
import { Search } from "./components/search";
import { useGetCategory } from "../../redux/service/useGetCategory";
import { Card } from "./components/card";
import { Select, ConfigProvider, Button } from "antd";
import { useSelector } from "react-redux";
import { MiniCard } from "./components/mini-card";
export const Home = () => {
  const [tab, setTab] = React.useState(1);
  const { data } = useGetCategory(tab);
  const product = useSelector((e) => e.product);
  console.log(product?.product.length);
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="flex">
      <div className="w-[105px] py-4 flex flex-col justify-between items-center bg-primary ">
        <div>
          <LogoIcon />
        </div>
        <div>
          <HomeIcon />
        </div>
        <div>
          <PerseIcon />
        </div>
        <div>
          <DashboardIcon />
        </div>
        <div>
          <Message />
        </div>
        <div>
          <NotificationIcon />
        </div>
        <div>
          <SettingIcon />
        </div>
        <div>
          <LogoutIcon />
        </div>
      </div>
      <div className="bg-secondary px-4 py-4  w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white font-semi text-3xl mb-1">Jaegar Resto</h1>
            <p className="text-city-lights font-normal text-base">
              Tuesday, 2 Feb 2021
            </p>
          </div>
          <Search />
        </div>
        <div className="grid grid-cols-6 text-center mb-4 max-w-[600px] w-full items-center">
          <p
            className={`pb-4 text-sm font-semi cursor-pointer ${
              tab === 1
                ? "text-lava border-b-2 border-lava"
                : "text-white border-b-2 border-mountain-fig"
            }`}
            onClick={() => setTab(1)}
          >
            Hot Dishes
          </p>

          <p
            className={`pb-4 text-sm font-semibold cursor-pointer ${
              tab === 2
                ? "text-lava border-b-2 border-lava"
                : "text-white border-b-2  border-mountain-fig"
            }`}
            onClick={() => setTab(2)}
          >
            Cold Dishes
          </p>
          <p
            className={`pb-4 text-sm font-semibold cursor-pointer ${
              tab === 3
                ? "text-lava border-b-2 border-lava"
                : "text-white border-b-2  border-mountain-fig"
            }`}
            onClick={() => setTab(3)}
          >
            Soup
          </p>
          <p
            className={`pb-4 text-sm font- cursor-pointer ${
              tab === 4
                ? "text-lava border-b-2 border-lava"
                : "text-white border-b-2  border-mountain-fig"
            }`}
            onClick={() => setTab(4)}
          >
            Grill
          </p>
          <p
            className={`pb-4 text-sm font-semibold cursor-pointer ${
              tab === 5
                ? "text-lava border-b-2 border-lava"
                : "text-white border-b-2  border-mountain-fig"
            }`}
            onClick={() => setTab(5)}
          >
            Appetizer
          </p>
          <p
            className={`pb-4 text-sm font-semibold  cursor-pointer ${
              tab === 6
                ? "text-lava border-b-2 border-lava"
                : "text-white border-b-2 border-mountain-fig"
            }`}
            onClick={() => setTab(6)}
          >
            Dessert
          </p>
        </div>
        <div className="flex items-center justify-between mb-10">
          <p className="font-semibold text-xl text-white">Choose Dishes</p>
          <ConfigProvider
            theme={{
              token: {
                colorText: "#fff",
                borderRadius: 2,
                colorBorder: "#2d303e",
                colorBgContainer: "#1f1d2b",
                colorIcon: "#fff",
                colorBgElevated: "#1f1d2b",
                colorPrimaryActive: "#1f1d2b",
                colorInfoText: "#1f1d2b",
              },
            }}
          >
            <Select
              defaultValue="Dine In"
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: "jack", label: "Dine In" },
                { value: "lucy", label: "Dine In" },
                { value: "Yiminghe", label: "Dine In" },
              ]}
            />
          </ConfigProvider>
        </div>
        <div className="grid grid-cols-3 gap-6 gap-y-11">
          {data &&
            data?.product?.map((item) => <Card key={item.id} {...item} />)}
        </div>
      </div>
      <div className="w-[30%] bg-primary p-4 pr-0">
        <p className="text-white font-semibold text-xl mb-6">Orders #34562</p>
        <div className="flex items-center gap-2 mb-6">
          <p className="text-sm font-semibold text-white border border-lava px-3 py-[7px] bg-lava rounded-lg">
            Dine In
          </p>
          <p className="text-sm font-semibold text-lava border border-secondary px-3 py-[7px] bg-transparent rounded-lg">
            To Go
          </p>
          <p className="text-sm font-semibold text-lava border border-secondary px-3 py-[7px] bg-transparent rounded-lg">
            Delivery
          </p>
        </div>
        <div className="flex items-center justify-between pb-6 border-b-2 mb-6 border-secondary pr-4">
          <p className="text-white font-semibold text-base">Item</p>
          <div className="flex items-center gap-11">
            <p className="text-white font-semibold text-base">Qty</p>
            <p className="text-white font-semibold text-base">Price</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 overflow-y-scroll h-[400px] py-2 pr-4 mb-4 border-y-2 border-secondary">
          {product?.product?.length > 0 &&
            product?.product?.map((item) => (
              <MiniCard key={item.id} {...item} />
            ))}
        </div>
        <div className="pr-4 mb-2">
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm font-normal text-hazy-skies">Discount</p>
            <p className="text-base font-medium text-white">$0</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-sm font-normal text-hazy-skies">Sub total</p>
            <p className="text-base font-medium text-white">${product.price}</p>
          </div>
        </div>
        <div className="ml-16 shadow-shadowBtn inline-block">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#fff",
                borderRadius: 8,
                colorBgContainer: "#ea7c69",
                colorText: "#fff",
              },
            }}
          >
            <Button size={"large"}>Continue to Payment</Button>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};
