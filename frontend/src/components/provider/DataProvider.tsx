"use client";

import { api } from "@/common";
import { generalCategoryType, subCategoryType } from "@/common/types";
import { AxiosError } from "axios";
import { error } from "console";
import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { date } from "yup";

export type ProductParams = {
  productName: string;
  generalCategory: string;
  subCategory: string;
  serialNumber: number;
  price: number;
  remainQty: number;
  images: string[];
  description: string;
  productType: {
    productColor: string[];
    productSize: string[];
  };
  productTag: string;
};

export type CategoryParams = {};

type countityType = {
  countity: number;
};

type DataContextType = {
  generalCategories: generalCategoryType[] | undefined;
  subCategories: subCategoryType[] | undefined;
  createProduct: (params: ProductParams) => Promise<void>;
};

const DataContext = createContext<DataContextType>({} as DataContextType);

export const DataProvider = ({ children }: PropsWithChildren) => {
  const [refresh, setRefresh] = useState(0);
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [generalCategories, setGeneralCategories] =
    useState<generalCategoryType[]>();
  const [subCategories, setSubCategories] = useState<subCategoryType[]>();

  // POST PRODUCT

  const createProduct = async (params: ProductParams) => {
    try {
      const { data } = await api.post("/createProduct", params);
      toast.success(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data.message ?? error.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
        });
      }
    }
  };

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
        createProduct,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
