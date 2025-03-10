import { SelectParams } from "@/models";
import { faker } from "@faker-js/faker";
import { images } from "./images";

export const bannerProducts = [
  {
    id: 1,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
  {
    id: 2,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
  {
    id: 3,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
  {
    id: 4,
    name: faker.commerce.productName(),
    image: faker.image.avatar(),
    description: faker.lorem.paragraph(2),
    price: faker.commerce.price({ min: 100, max: 200, dec: 0, symbol: "$" }),
    weight: "200gr / 600 cal",
  },
];

export const deliverySteps = [
  {
    id: 1,
    image: images.goicuon,
    name: "Chọn thức ăn",
    description: faker.lorem.paragraph(1),
    time: 0.5,
  },
  {
    id: 2,
    image: images.foodDelivery,
    name: "Giao hàng hoặc Mua mang về",
    description: faker.lorem.paragraph(1),
    time: 1.5,
  },
  {
    id: 3,
    image: images.foodPackage,
    name: "Thưởng thức món ăn",
    description: faker.lorem.paragraph(1),
    time: 2.5,
  },
];

export const specialOffers = [
  {
    id: "1",
    name: faker.commerce.productName(),
    images: [images.productRv1.src],
    time: 0.5,
  },
  {
    id: "2",
    name: faker.commerce.productName(),
    images: [images.productRv1.src],
    time: 1.5,
  },
  {
    id: "3",
    name: faker.commerce.productName(),
    images: [images.productRv1.src],
    time: 2.5,
  },
];

export const menuInformations = [
  {
    id: 1,
    description: "Over 40 Pizza Flavours",
    img: images.goicuon,
  },
  {
    id: 2,
    description: "Over 40 Pizza Flavours",
    img: images.deliveryTime,
  },
  {
    id: 3,
    description: "Safe and Secure Delivery",
    img: images.deliveryMan,
  },
  {
    id: 4,
    description: "For Special Orders Call: 0123 456 789",
    img: images.serving,
  },
];

export const paymentMethods = [
  {
    id: 1,
    img: images.acbLogo,
    name: "banking",
  },
  {
    id: 2,
    img: images.momoLogo,
    name: "momo",
  },
  {
    id: 3,
    img: images.codLogo,
    name: "COD",
  },
];

export const genders: SelectParams[] = [
  {
    id: 1,
    name: "Nam",
    value: "Nam",
  },
  {
    id: 2,
    name: "Nữ",
    value: "Nữ",
  },
];

export const tabs = [
  {
    id: "1",
    label: "Profile",
    value: "1",
  },
  {
    id: "2",
    label: "Orders",
    value: "2",
  },
  {
    id: "3",
    label: "Tracking",
    value: "3",
  },
  {
    id: "4",
    label: "Addresses",
    value: "4",
  },
];

export const deliveryTrackingSteps = [
  {
    id: 1,
    statusValue: "We are preparing your order. Please chill out😚",
    statusCode: 1,
  },
  {
    id: 2,
    statusValue: "Your order is on the way🥳. Please wait...",
    statusCode: 2,
  },
  {
    id: 3,
    statusValue: "Your order was completed🥳",
    statusCode: 3,
  },
  {
    id: 4,
    statusValue: "Cancelled",
    statusCode: 4,
  },
];

export const userDrawer = [
  {
    id: 1,
    route: "/user/profile",
    name: "your profile",
  },
  {
    id: 2,
    route: "/user/settings",
    name: "settings",
  },
  {
    id: 3,
    route: "/user/order-list",
    name: "your orders",
  },
  {
    id: 4,
    route: "/user/order-detail",
    name: "order detail",
  },
  {
    id: 5,
    route: "/user/invoice",
    name: "order invoice",
  },
];
