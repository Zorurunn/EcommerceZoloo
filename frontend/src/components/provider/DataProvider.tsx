"use client";

import { api } from "@/common";
import { generalCategoryType, subCategoryType } from "@/common/types";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
type countityType = {
  countity: number;
};

type DataContextType = {
  generalCategories: generalCategoryType[] | undefined;
  subCategories: subCategoryType[] | undefined;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [generalCategories, setGeneralCategories] =
    useState<generalCategoryType[]>();
  const [subCategories, setSubCategories] = useState<subCategoryType[]>();

  // GET GENERAL CATEGORIES
  const getGeneralCategories = async () => {
    try {
      const res = await api.get("/getGeneralCategories");
      setGeneralCategories(res.data);
    } catch (error) {
      console.log("in getGeneralCategories() function error:", error);
    }
  };

  // GET SUB CATEGORIES
  const getSubCategories = async () => {
    try {
      const res = await api.get("/getSubCategories");
      setSubCategories(res.data);
    } catch (error) {
      console.log("in getSubCategories() function error:", error);
    }
  };

  useEffect(() => {
    getGeneralCategories();
    getSubCategories();
  }, [refresh]);

  return (
    <DataContext.Provider
      value={{
        generalCategories,
        subCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
