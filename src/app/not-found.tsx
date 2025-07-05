import { Metadata } from "next"
import NotFoundClient from "@/components/not-found/NotFoundClient";

export const metadata: Metadata = {
  title: '404: Not Found'
};

const NotFound = () => {
  return (
    <>
      <NotFoundClient />
    </>
  )
};

export default NotFound;
