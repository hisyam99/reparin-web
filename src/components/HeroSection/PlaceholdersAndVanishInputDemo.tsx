"use client";

import { PlaceholdersAndVanishInput } from "../ui/placeholders-and-vanish-input";
import { motion } from "framer-motion";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "Jasa perbaikan laptop terbaik di kota malang",
    "Servis LCD HP Samsung di kota Batu",
    "Servis PC di kota Surabaya",
    "Install Ulang Windows disekitar UMM Kampus 3",
    "Flash ulang firmware hp di sekitar kampus UB",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.querySelector("input");
    if (input) {
      const searchTerm = input.value;
      console.log("submitted");
      window.location.href = `/dashboard/services?query=${encodeURIComponent(
        searchTerm
      )}`;
    }
  };

  return (
    <div className="justify-center items-center px-4">
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="div"
      >
        <h2 className="text-4xl font-bold">Ketik, Cari, Temukan !</h2>
        <p className="text-lg font-normal">
          Jasa servis terbaik dimulai dari sini !
        </p>
      </motion.div>
      <br />
      <PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />
    </div>
  );
}
