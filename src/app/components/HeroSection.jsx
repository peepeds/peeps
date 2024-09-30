"use client";
import React from "react";
import Image from "next/image";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Globe } from "./Globe";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="col-span-8 text-center place-self-center sm:text-left justify-self-start"
        >
          <h1 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-7xl lg:leading-normal">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              <TypeAnimation
                sequence={[
                  "Halo",
                  2000,
                  "Hello",
                  2000,
                  "こんにちは",
                  2000,
                  "안녕하세요",
                  2000,
                  "你好",
                  2000,
                  "สวัสดี",
                  2000,
                  "नमस्ते",
                  2000,
                  "👋👋👋",
                  2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
            <br></br>
          </h1>
          <h2 className="mb-4 text-2xl font-extrabold text-gray-300 sm:text-3xl lg:text-6xl lg:leading-normal">
            Edbert Purwanto
          </h2>
          <div className="flex gap-2 mb-2 font-light text-gray-300 underline-offset-2">
            <Link
              target="_blank"
              href="https://github.com/peepeds"
              className="flex items-center gap-2 transition-colors duration-200 hover:underline hover:text-white"
            >
              <Image
                src={GithubIcon}
                alt="Github Icon"
                width={33}
                height={33}
              />
              GitHub
            </Link>
            <p className="no-underline">•</p>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/peepeds/"
              className="flex items-center gap-2 transition-colors duration-200 hover:underline hover:text-white"
            >
              <Image
                src={LinkedinIcon}
                alt="Linkedin Icon"
                width={33}
                height={33}
              />
              LinkedIn
            </Link>
          </div>
          <div>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1jJWIP3jdnrAVKJzAMI6OwSn0efrjpvVA/view?usp=share_link"
              className="inline-block w-full px-1 py-1 mt-3 text-white rounded-full sm:w-fit bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 mt-4 place-self-center lg:mt-0"
        >
          <div className="bg-transparent w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Globe />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
