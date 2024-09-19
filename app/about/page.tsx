import Image from "next/image";
import { Metadata } from "next";

import Link from "@/components/ui/Link";
import Section from "@/components/Section";
import ConnectLinks from "../../components/ConnectLinks";
import Workplaces from "./components/Workplaces";
import Gallery from "./components/Gallery";

import ugentLogo from "public/work/ugent.png";

import ansolilla from "public/gallery/anso-lilla.jpg";
import gothenburg from "public/gallery/gothenburg.jpeg";
import Avatar from "@/public/avatar.png";

export const metadata: Metadata = {
  title: "About | Alexander",
  description: "Doctoral Researcher in sociolinguistics at Ghent University.",
};

export default function About() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div
        className="flex animate-in flex-col gap-6 text-secondary md:flex-row md:items-center"
        style={{ "--index": 1 } as React.CSSProperties}
      >
        <Image
          src={Avatar}
          width={85}
          height={85}
          alt="avatar"
          className="rounded-full bg-secondary"
        />
        <h1 className="animate-in text-3xl font-bold tracking-tight">
          Romeo De Timmerman
        </h1>
      </div>
      <div
        className="flex animate-in flex-col gap-16 md:gap-24"
        style={{ "--index": 3 } as React.CSSProperties}
      >
        <Section heading="About" headingAlignment="left">
          <div className="flex flex-col gap-6">
            <p className="text-justify">
              I obtained my master&apos;s degree in English and Dutch
              linguistics and literature from Ghent University in 2020. Since
              then, I have worked as a researcher on a one-year FWO-funded
              research project, and as a full-time language instructor. In
              November 2022, I started working as a doctoral researcher at Ghent
              University under supervision of Prof. Dr. Stef Slembrouck (UGent)
              and Prof. Dr. Matthias Heyman (VUB). My PhD project focuses on the
              use of African American English by contemporary blues performers,
              and the social meanings that these stylistic-linguistic practices
              generate.
            </p>
          </div>
        </Section>

        <Section heading="Connect" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>Feel free to reach out to me below!</p>
            <ul className="animated-list grid flex-grow grid-cols-1 gap-2 md:grid-cols-2">
              {ConnectLinks.map((link) => (
                <li className="col-span-1 transition-opacity" key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-grid w-full rounded-lg border border-primary p-4 no-underline transition-opacity"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{link.icon}</span>
                      {link.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="ml-auto h-5 w-5 text-secondary"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Section>

        <Section heading="Work" headingAlignment="left">
          <div className="flex w-full flex-col gap-8">
            <p>
              {new Date().getFullYear() - 2020}+ years of academic and
              professional experience.
            </p>
            <Workplaces items={workplaces} />
          </div>
        </Section>
      </div>
    </div>
  );
}

const workplaces = [
  {
    title: "Doctoral researcher",
    company: "Ghent University",
    time: "2022 -",
    imageSrc: ugentLogo,
    link: "https://www.ugent.be/en",
  },
  {
    title: "Language instructor",
    company: "Ghent University",
    time: "2021 - 2022",
    imageSrc: ugentLogo,
    link: "https://www.ugent.be/en",
  },
  {
    title: "Scientific Staff",
    company: "Ghent University",
    time: "2020 - 2022",
    imageSrc: ugentLogo,
    link: "https://www.ugent.be/en",
  },
  {
    title: "Academic Writing Tutor",
    company: "Ghent University",
    time: "2020",
    imageSrc: ugentLogo,
    link: "https://www.ugent.be/en",
  },
];
