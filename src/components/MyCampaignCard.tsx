import { client } from "@/app/client";
import Link from "next/link";
import { getContract } from "thirdweb";
import { chain } from "@/app/constants/chains";
import { useReadContract } from "thirdweb/react";

type MyCampaignCardProps = {
    contractAddress: string;
};

export const MyCampaignCard: React.FC<MyCampaignCardProps> = ({ contractAddress }) => {
    const contract = getContract({
        client: client,
        chain: chain,
        address: contractAddress,
    });

    // Get Campaign Name
    const { data: name } = useReadContract({
        contract, 
        method: "function name() view returns (string)", 
        params: []
    });

    const { data: description } = useReadContract({ 
        contract, 
        method: "function description() view returns (string)", 
        params: [] 
    });

    return (
        <div className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl">
            <div>
                <h5 className="mb-2 text-2xl font-semibold text-gray-800">{name || "Loading..."}</h5>
                <p className="mb-3 text-sm text-gray-700">{description || "Loading description..."}</p>
            </div>
            <Link href={`/campaign/${contractAddress}`} passHref>
                <p className="inline-flex items-center justify-center px-4 py-2 mt-4 text-sm font-medium text-white transition-transform duration-300 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    View Campaign
                    <svg className="rtl:rotate-180 w-4 h-4 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </p>
            </Link>
        </div>
    );
};
