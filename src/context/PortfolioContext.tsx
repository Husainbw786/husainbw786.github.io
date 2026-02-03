import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PortfolioData } from "../types";

interface PortfolioContextType {
    data: PortfolioData | null;
    isLoading: boolean;
    error: Error | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<PortfolioData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://flow.sokt.io/func/scrifmnYUDgV");
                if (!response.ok) {
                    throw new Error("Failed to fetch portfolio data");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (err) {
                setError(err instanceof Error ? err : new Error("An error occurred"));
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <PortfolioContext.Provider value={{ data, isLoading, error }}>
            {children}
        </PortfolioContext.Provider>
    );
};

export const usePortfolio = () => {
    const context = useContext(PortfolioContext);
    if (context === undefined) {
        throw new Error("usePortfolio must be used within a PortfolioProvider");
    }
    return context;
};
