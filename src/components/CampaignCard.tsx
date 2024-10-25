import { client } from "@/app/client";
import Link from "next/link";
import { getContract } from "thirdweb";
import { chain } from "@/app/constants/chains";
import { useReadContract } from "thirdweb/react";

type CampaignCardProps = {
    campaignAddress: string;
};

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaignAddress }) => {
    const contract = getContract({
        client: client,
        chain: chain,
        address: campaignAddress,
    });

    // Get Campaign Name
    const { data: campaignName } = useReadContract({
        contract: contract,
        method: "function name() view returns (string)",
        params: []
    });

    // Get Campaign Description
    const { data: campaignDescription } = useReadContract({
        contract: contract,
        method: "function description() view returns (string)",
        params: []
    });

    // Goal amount of the campaign
    const { data: goal } = useReadContract({
        contract: contract,
        method: "function goal() view returns (uint256)",
        params: [],
    });

    // Total funded balance of the campaign
    const { data: balance, isLoading: isLoadingBalance } = useReadContract({
        contract: contract,
        method: "function getContractBalance() view returns (uint256)",
        params: [],
    });

    // Calculate the total funded balance percentage
    const totalBalance = balance?.toString();
    const totalGoal = goal?.toString();
    let balancePercentage = (parseInt(totalBalance as string) / parseInt(totalGoal as string)) * 100;

    // If balance is greater than or equal to goal, percentage should be 100
    if (balancePercentage >= 100) {
        balancePercentage = 100;
    }

    return (
        <div className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl">
            <div>
                {!isLoadingBalance && (
                    <div className="mb-4">
                        <div className="relative w-full h-6 bg-gray-200 rounded-full">
                            <div
                                className="h-6 rounded-full bg-gradient-to-r from-blue-600 to-teal-500 transition-all duration-500"
                                style={{ width: `${balancePercentage?.toString()}%` }}
                            >
                                <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-white">
                                    ${balance?.toString()}
                                </span>
                            </div>
                        </div>
                        <p className="mt-2 text-xs text-gray-600">
                            {balancePercentage < 100 ? `${balancePercentage.toFixed(0)}% Funded` : "Fully Funded"}
                        </p>
                    </div>
                )}
                <h5 className="mb-2 text-2xl font-semibold text-gray-800">{campaignName}</h5>
                <p className="mb-3 text-sm text-gray-700">{campaignDescription}</p>
            </div>
            <Link href={`/campaign/${campaignAddress}`} passHref>
                <p className="inline-flex items-center px-5 py-3 mt-4 text-sm font-medium text-white transition-transform duration-300 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg hover:scale-105 focus:ring-4 focus:ring-blue-300">
                    View Campaign
                    <svg
                        className="rtl:rotate-180 w-4 h-4 ml-2"
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
    );
};
