import { Metadata } from "next";
import HomeClient from "@/components/home/HomeClient";

export const metadata: Metadata = {
  title: 'Kyle Huang'
};

const Home = () => {
  return (
    <>
      <HomeClient />
    </>
  );
};

export default Home;