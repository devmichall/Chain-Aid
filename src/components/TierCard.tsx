import { prepareContractCall, ThirdwebContract } from "thirdweb";
import { TransactionButton } from "thirdweb/react";

type Tier = {
    name: string;
    amount: bigint;
    backers: bigint;
};

type TierCardProps = {
    tier: Tier;
    index: number;
    contract: ThirdwebContract;
    isEditing: boolean;
};

export const TierCard: React.FC<TierCardProps> = ({ tier, index, contract, isEditing }) => {
    return (
        <div className="flex flex-col justify-between max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl">
            <div>
                <div className="flex flex-row justify-between items-center">
                    <p className="text-2xl font-semibold text-gray-800">{tier.name}</p>
                    <p className="text-2xl font-semibold text-gray-800">${tier.amount.toString()}</p>
                </div>
                <p className="mt-2 text-xs font-semibold text-gray-600">Total Backers: {tier.backers.toString()}</p>
            </div>

            <div className="flex flex-col mt-4 space-y-2">
                <TransactionButton
                    transaction={() => prepareContractCall({
                        contract: contract,
                        method: "function fund(uint256 _tierIndex) payable",
                        params: [BigInt(index)],
                        value: tier.amount,
                    })}
                    onError={(error) => alert(`Error: ${error.message}`)}
                    onTransactionConfirmed={async () => alert("Funded successfully!")}
                    className="w-full px-4 py-2 text-sm font-medium text-white transition duration-300 bg-gradient-to-r from-blue-600 to-teal-500 rounded-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Select
                </TransactionButton>

                {isEditing && (
                    <TransactionButton
                        transaction={() => prepareContractCall({
                            contract: contract,
                            method: "function removeTier(uint256 _index)",
                            params: [BigInt(index)],
                        })}
                        onError={(error) => alert(`Error: ${error.message}`)}
                        onTransactionConfirmed={async () => alert("Removed successfully!")}
                        className="w-full px-4 py-2 text-sm font-medium text-white transition duration-300 bg-red-600 rounded-lg hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
                    >
                        Remove
                    </TransactionButton>
                )}
            </div>
        </div>
    );
};
