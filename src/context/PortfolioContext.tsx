import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { PortfolioData } from "../types";
import localData from "../data/portfolio.json";

interface PortfolioContextType {
    data: PortfolioData | null;
    isLoading: boolean;
    error: Error | null;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider = ({ children }: { children: ReactNode }) => {
    // Render instantly from the bundled copy; refresh from the API in the background.
    const [data, setData] = useState<PortfolioData | null>(localData as unknown as PortfolioData);
    const [isLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://flow.sokt.io/func/scrifmnYUDgV");
                if (!response.ok) {
                    throw new Error("Failed to fetch portfolio data");
                }
                const jsonData = await response.json();
                if (jsonData?.personal?.name) {
                    // Remote wins per key, bundled copy fills in sections the API doesn't serve yet.
                    setData({ ...(localData as unknown as PortfolioData), ...jsonData });
                }
            } catch (err) {
                // Keep showing the bundled copy
                setError(err instanceof Error ? err : new Error("An error occurred"));
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
