// controller.ts
import { NextFunction, Request, Response } from "express";
import { RaceResultModel } from "../models/race-results.model";
import { getDataFromHTML, saveRaceResultService } from "../services";
const hostName = "https://www.formula1.com";
interface RowData {
  "Grand Prix": string;
  Date: Date;
  Winner: string;
  Car: string;
  Laps: number;
  Time: string;
}
export const getRaces = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let year = new Date().getFullYear().toString(); //2023
    const {
      year: yearFilter,
      driver,
      team,
      grand_prix,
    } = req.query as {
      year: string;
      driver: string;
      team: string;
      grand_prix: string;
    };
    if (yearFilter) {
      year = yearFilter as string;
    }
    const resource = `/en/results.html/${year}/races.html`;
    const url = `${hostName}${resource}`;

    const data = await getDataFromHTML(url, { driver, team, grand_prix });
    res.send(data);
  } catch (error) {
    next(error);
  }
};
export const saveRaceResult = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let year = new Date().getFullYear().toString(); //2023
    const { year: yearFilter } = req.query as {
      year: string;
    };
    if (yearFilter) {
      year = yearFilter as string;
    }
    const resource = `/en/results.html/${year}/races.html`;
    const url = `${hostName}${resource}`;

    const data = await getDataFromHTML(url);
    saveRaceResultService(data.data, year);
    res.sendStatus(202); //accepted
  } catch (error) {
    next(error);
  }
};
export const getDrivers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let year = new Date().getFullYear().toString(); //2023
    const resource = `/en/results.html/${year}/drivers.html`;
    const url = `${hostName}${resource}`;

    const data = await getDataFromHTML(url);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const getTeams = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let year = new Date().getFullYear().toString(); //2023
    const resource = `/en/results.html/${year}/team.html`;
    const url = `${hostName}${resource}`;

    const data = await getDataFromHTML(url);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const getDriverDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id, name } = req.params;
    const { year: yearFilter } = req.query;
    let year = new Date().getFullYear().toString(); //2023
    if (yearFilter) {
      year = yearFilter as string;
    }
    let resource = `/en/results.html/${year}/drivers`;
    if (id && name) {
      resource = `/en/results.html/${year}/drivers/${id}/${name}`;
    }
    const url = `${hostName}${resource}.html`;

    const data = await getDataFromHTML(url);
    res.send(data);
  } catch (error) {
    next(error);
  }
};

export const getTeamDetail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const { year: yearFilter } = req.query;
    let year = new Date().getFullYear().toString(); //2023
    if (yearFilter) {
      year = yearFilter as string;
    }
    let resource = `/en/results.html/${year}/team`;
    if (id) {
      resource = `/en/results.html/${year}/team/${id}`;
    }
    const url = `${hostName}${resource}.html`;

    const data = await getDataFromHTML(url);
    res.send(data);
  } catch (error) {
    next(error);
  }
};
