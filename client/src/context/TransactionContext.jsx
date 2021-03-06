import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

import { contractABI, contractAddress } from "../utils/constants";

export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContext = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
    );

    console.log({ provider, signer, transactionContext });
};

export const TransactionProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const checkIfWalletIsConnected = async () => {
        if (!ethereum) return alert("Please install metamask!");

        const accounts = await ethereum.request({ method: "eth_accounts" });

        try {
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
                // getAllTransactions();
            } else {
                console.log("No accounts found!");
            }

            console.log(accounts);
        } catch (error) {
            console.log('No ethereum object.');
        }
    };

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask!");

            const accounts = await ethereum.request({
                method: "eth_requestAccounts",
            });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.");
        }
    };

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask!");

            // get the data from the form.
        } catch (error) {
            console.log(error);

            throw new Errior("No ethereum object.");
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
    });

    return (
        <TransactionContext.Provider value={{ connectWallet, currentAccount }}>
            {children}
        </TransactionContext.Provider>
    );
};
