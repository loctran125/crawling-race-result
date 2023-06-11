import mongoose, { Schema, Document, Model } from "mongoose";
import { testConnection } from "../helpers/connections_mongodb";

interface IRaceResult extends Document {
  id: string;
  grand_prix: string;
  date: Date;
  winner: string;
  team: string;
  laps: number;
  time: string;
}

const RaceResultSchema: Schema<IRaceResult> = new Schema<IRaceResult>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  grand_prix: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  winner: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  laps: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

export const RaceResultModel: Model<IRaceResult> =
  testConnection.model<IRaceResult>("race-results", RaceResultSchema);
