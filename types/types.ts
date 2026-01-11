import { InsightsResponse } from "./insights"
import { MalysisResponse } from "./malysis";

export enum DetailsTabData{
    Overview = "Overview",
    Vulnerabilities = "Vulnerabilities",
    Versions = "Versions",
    License = "License"
}

export type packageContent ={
    insights: InsightsResponse;
    malysis: MalysisResponse
}