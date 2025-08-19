"use client";

import Image from "next/image";
import Navbar from "./sharedcomponents/Navbar";
import Footer from "./sharedcomponents/Footer";
import Button from "./sharedcomponents/Buttons";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Footer />
      <Button
        buttonText="Click Me"
        variant="primary"
        onclickHandler={() => alert('Button clicked successfully!!')}
      />
    </div>
  );
}
