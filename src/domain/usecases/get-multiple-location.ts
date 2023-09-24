import { Location } from "../models/location";

export type GetMultipleLocationParams = {
  ids: string;
};

export type GetMultipleLocationResponse = Location[];
