import { Metadata } from "next";
import LiteratureClient from "@/components/literature/LiteratureClient";

export const metadata: Metadata = {
  title: 'Kyle Huang | Literature'
};

const Literature = () => {
  return (
    <>
      <LiteratureClient />
    </>
  );
};

export default Literature;