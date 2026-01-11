"use server";
import { InsightsResponse } from "@/types/insights";
import { MalysisResponse } from "@/types/malysis";
import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import { InsightService } from "@buf/safedep_api.connectrpc_es/safedep/services/insights/v2/insights_connect.js";
import { MalwareAnalysisService } from "@buf/safedep_api.connectrpc_es/safedep/services/malysis/v1/malysis_connect.js";
import { createPromiseClient } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";

export async function getPackageData(name: string,version: string):Promise<{insights:InsightsResponse,malysis:MalysisResponse}>{
  const transport = createConnectTransport({
    baseUrl: "https://api.safedep.io",
    httpVersion: "1.1",
    interceptors: [
      (next) => async (req) =>{
        req.header.set("authorization",process.env.SAFEDEP_API_KEY!);
        req.header.set("x-tenant-id",process.env.SAFEDEP_TENANT_ID!);
        return next(req);
      },
    ],
  });
  const insightsClient = createPromiseClient(InsightService, transport);
  const malysisClient = createPromiseClient(MalwareAnalysisService, transport);
  const [insightsRes, malysisRes] = await Promise.all([
    insightsClient.getPackageVersionInsight({
      packageVersion: {
        package: { ecosystem: Ecosystem.NPM, name },
        version,
      },
    }),
    malysisClient.queryPackageAnalysis({
      target: {
        packageVersion: {
          package: { ecosystem: Ecosystem.NPM, name },
          version,
        },
      },
    }),
  ]);
  const insights = insightsRes.toJson() as unknown as InsightsResponse;
  const malysis = malysisRes.toJson() as unknown as MalysisResponse;
  return {
    insights,
    malysis
  }
}
