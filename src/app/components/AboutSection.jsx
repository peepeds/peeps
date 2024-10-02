"use client";
import React, { useTransition, useState } from "react";
import Link from "next/link";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="pl-2 list-disc">
        <li>Back-End</li>
        <li>AI/ML</li>
        <li>IoT</li>
        <li>C/C++</li>
        <li>SQL & Non-SQL</li>
        <li>Mobile</li>
      </ul>
    ),
  },
  {
    title: "Portfolio",
    id: "portfolio",
    content: (
      <ul className="pl-2 list-disc">
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://sorting.algo.peepeds.fun/"
          >
            Sorting Visualization
          </Link>
          <br />
          
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://sorting.peepeds.fun/"
          >
            Sorting Visualization (soon)
          </Link>
          <br />
          
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://kanban.peepeds.fun/"
          >
            Kanban Board (refactor)
          </Link>
          <br />
        </li>
        
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="pl-2 list-disc">
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://www.sololearn.com/en/certificates/CC-A7ZIGGJV"
          >
            C Intermediate
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://progate.com/course_certificate/a6c25f6arrq4yl"
          >
            Git
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://www.hackerrank.com/certificates/iframe/63e0f6f97bc6"
          >
            SQL Intermediate
          </Link>
        </li>
        <li>
          <Link
            className="text-blue-400 hover:underline"
            target="_blank"
            href="https://icpc.global/ICPCID/7OER23A3G1TT"
          >
            International Collegiate Programming Contest
          </Link>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2 xl:gap-16 sm:py-16 xl:px-16">
        <a href="https://open.spotify.com/user/31b4dr2ibn6wrtuluqemqjdix7iy">
          <img
            src="https://spotify-recently-played-readme.vercel.app/api?user=31b4dr2ibn6wrtuluqemqjdix7iy&count=7"
            alt="Spotify recently played"
            width={500}
            height={500}
          />
        </a>
        
        <div className="flex flex-col h-full mt-4 text-left md:mt-0">
          <br />
          <h2 className="mb-4 text-4xl font-bold text-blue-600">About Me</h2>
          <p className="text-base lg:text-lg">
          As a Computer Science student at Binus University, I possess strong hard and soft skills
          along with valuable organizational experience. My hard skills include proficiency in
          technical skill and DSA. On the soft skills side, I excel in effective communication,
          teamwork, and leadership, with a proven ability to adapt quickly and manage time
          efficiently. I am a quick learner and a team player who is always eager to learn new things.
            <br />
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("portfolio")}
              active={tab === "portfolio"}
            >
              {" "}
              Portfolio{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            {/* <TabButton
              selectTab={() => handleTabChange("organizations")}
              active={tab === "organizations"}
            >
              {" "}
              Organizations{" "}
            </TabButton> */}
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
