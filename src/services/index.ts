import axios from "axios";
import { htmlToJson, getFilter, generateMD5Hash } from "../helpers";
import { RaceResultModel } from "../models/race-results.model";

interface RowData {
  [key: string]: string;
}

export async function getHTML(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getDataFromHTML(
  url: string,
  options?: { driver?: string; team?: string; grand_prix?: string }
) {
  try {
    const { driver, team, grand_prix } = options || {};
    const htmlData = await getHTML(url);
    let jsonResult = htmlToJson(htmlData);
    const filterResult = getFilter(htmlData);
    jsonResult = jsonResult.filter((item) => {
      if (driver && driver != item.Winner) return false;
      if (team && team != item.Car) return false;
      if (grand_prix && grand_prix != item["Grand Prix"]) return false;
      return true;
    });
    return {
      data: jsonResult,
      filter: filterResult,
    };
  } catch (error) {
    throw error;
  }
}

export async function saveRaceResultService(
  raceResults: RowData[],
  year: string
) {
  try {
    for (const raceResult of raceResults) {
      const id = generateMD5Hash(`${raceResult["Grand Prix"]}.${year}`);
      const raceResultData = await RaceResultModel.find({ id });
      if (raceResultData.length > 0) continue; //result existed
      await RaceResultModel.create({
        id,
        grand_prix: raceResult["Grand Prix"],
        date: raceResult.Date,
        winner: raceResult.Winner,
        team: raceResult.Car,
        laps: raceResult.Laps,
        time: raceResult.Time,
      });
    }
    return;
  } catch (error) {
    throw error;
  }
}
