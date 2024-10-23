ChainAid - On-Chain Crowdfunding Platform
Overview
ChainAid is a decentralized crowdfunding platform that allows users to create, fund, and track campaigns directly on the blockchain. 

To run this project, you need to have the following installed on your machine:

Node.js (v14.x or later)
Yarn or npm
Metamask (or any Web3-enabled wallet extension)
Thirdweb SDK (installed via npm or yarn)
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/chainaid.git
Navigate to the project directory:

bash
Copy code
cd chainaid
Install the dependencies:

bash
Copy code
yarn install
# or
npm install
Set up environment variables:

Create a .env file in the root of the project and add the following keys:

bash
Copy code
NEXT_PUBLIC_THIRDWEB_API_KEY=<Your Thirdweb API Key>
NEXT_PUBLIC_CHAIN_ID=<Your Blockchain Chain ID>
Start the development server:

bash
Copy code
yarn dev
# or
npm run dev
Open your browser and navigate to:

arduino
Copy code
http://localhost:3000