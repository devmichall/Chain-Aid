"use client";

import { ConnectButton, lightTheme } from "thirdweb/react";
import { client } from "./client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex">
      <div className="relative isolate px-6 pt-5 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Join Newsletter.
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Here <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
              CHAINAIDS CAMPAIGNS
            </h1>
            <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
              ChainAid is a decentralized crowdfunding platform on MOVE VM that
              allows users to create, fund and track campaigns directly on the
              blockchain.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <ConnectButton
                client={client}
                theme={lightTheme()}
                detailsButton={{
                  style: {
                    maxHeight: "50px",
                  },
                }}
              />
              <Link href={`/campaigns`} passHref={true}>
                <p className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Explore Campaigns
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative isolate px-6 pt-5 lg:px-8 justify-center">
        <div className="py-32 sm:py-48 lg:py-56">
          <img
            src="/chainaidimage.png"
            alt="ChainAid Landing"
            width={500}
            height={300}
            className="rounded-lg "
          />
        </div>
      </div>
      <div className="relative isolate px-6 pt-5 lg:px-8 justify-center">
        <div className="py-32 sm:py-48 lg:py-56">
          <img
            src="/ChainAidLanding.png"
            alt="ChainAid Landing"
            width={500}
            height={300}
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
}
