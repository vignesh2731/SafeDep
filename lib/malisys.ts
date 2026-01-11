import { Ecosystem } from "@buf/safedep_api.bufbuild_es/safedep/messages/package/v1/ecosystem_pb.js";
import { MalwareAnalysisService } from "@buf/safedep_api.connectrpc_es/safedep/services/malysis/v1/malysis_connect.js";
import { createPromiseClient, Interceptor } from "@connectrpc/connect";
import { createConnectTransport } from "@connectrpc/connect-node";

function authenticationInterceptor(
  token: string,
  tenant: string
): Interceptor {
  return (next) => async (req) => {
    req.header.set("authorization", token);
    req.header.set("x-tenant-id", tenant);
    return next(req);
  };
}

function getTransport() {
  const token = process.env.SAFEDEP_API_KEY;
  const tenantId = process.env.SAFEDEP_TENANT_ID;

  if (!token) {
    throw new Error("SAFEDEP_API_KEY is required");
  }

  if (!tenantId) {
    throw new Error("SAFEDEP_TENANT_ID is required");
  }

  return createConnectTransport({
    baseUrl: "https://api.safedep.io",
    httpVersion: "1.1",
    interceptors: [authenticationInterceptor(token, tenantId)],
  });
}

export async function fetchPackageMalysis(
  name: string,
  version: string,
  ecosystem: Ecosystem = Ecosystem.NPM
) {
  const transport = getTransport();

  const client = createPromiseClient(
    MalwareAnalysisService,
    transport
  );

  const res = await client.queryPackageAnalysis({
    target: {
      packageVersion: {
        package: {
          ecosystem,
          name,
        },
        version,
      },
    },
  });
  return res.toJson();
}
