import { RequestHandler } from "express";
import { GeneralCategoryModel, SubCategoryModel } from "../models";

// CREATE GENERAL CATEGORY
export const createGeneralCategory: RequestHandler = async (req, res) => {
  const { generalCategoryName } = req.body;

  try {
    const categoryExists = await GeneralCategoryModel.find({
      generalCategoryName,
    });

    if (categoryExists.length) {
      return res.status(401).json({
        message: "category already exists",
      });
    }

    await GeneralCategoryModel.create({
      generalCategoryName,
      createdAt: new Date(),
    });

    return res.json({ message: "Successfully category added" });
  } catch (error) {
    res.json(error);
  }
};

// CREATE SUB CATEGORY
export const createSubCategory: RequestHandler = async (req, res) => {
  const { subCategoryName, generalCategoryId } = req.body;

  try {
    const categoryExists = await SubCategoryModel.find({
      subCategoryName,
      generalCategoryId,
    });

    if (categoryExists.length) {
      return res.status(401).json({
        message: "category already exists",
      });
    }

    await SubCategoryModel.create({
      subCategoryName,
      generalCategoryId,
      createdAt: new Date(),
    });

    return res.json({ message: "Successfully category added" });
  } catch (error) {
    res.json(error);
  }
};
// UPDATE SUB CATEGORY
export const updateSubCategory: RequestHandler = async (req, res) => {
  const { subCategoryName, generalCategoryId } = req.body;

  try {
    const categoryExists = await SubCategoryModel.find({
      subCategoryName,
    });
    if (!categoryExists.length) {
      return res.status(401).json({
        message: "no sub category exists. first create sub category",
      });
    }
    const categoryExistsWithGeneral = await SubCategoryModel.find({
      subCategoryName,
      generalCategoryId,
    });

    if (categoryExistsWithGeneral.length) {
      return res.status(401).json({
        message: "category already exists",
      });
    }

    await SubCategoryModel.updateOne(
      {
        subCategoryName,
      },
      { $push: { generalCategoryId: generalCategoryId }, updatedAt: new Date() }
    );

    return res.json({ message: "Successfully category updated" });
  } catch (error) {
    res.json(error);
  }
};

// GET GENERAL CATEGORY
export const getGeneralCategory: RequestHandler = async (req, res) => {
  try {
    const generalCategory = await GeneralCategoryModel.find({});

    return res.json(generalCategory);
  } catch (error) {
    res.json(error);
  }
};

// GET SUB CATEGORY
export const getSubCategory: RequestHandler = async (req, res) => {
  try {
    const subCategory = await SubCategoryModel.find({});

    return res.json(subCategory);
  } catch (error) {
    res.json(error);
  }
};
