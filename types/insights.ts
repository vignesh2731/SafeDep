import type { PackageRef,PackageVersionRef } from "./malysis";


export interface Dependency{
  package: PackageRef;
  version: string;
}
  
export type VulnerabilityIdType ="VULNERABILITY_IDENTIFIER_TYPE_GHSA"| "VULNERABILITY_IDENTIFIER_TYPE_CVE"| string;
export type SeverityType ="TYPE_CVSS_V3"| "TYPE_CVSS_V4"| string;
export type RiskLevel ="RISK_LOW"| "RISK_MEDIUM"| "RISK_HIGH"| "RISK_CRITICAL"| string;
  
export interface VulnerabilityIdentifier{
  type: VulnerabilityIdType;
  value: string;
}

export interface VulnerabilitySeverity{
  type: SeverityType;
  score: string;
  risk?: RiskLevel;
}

export interface Vulnerability{
  id: VulnerabilityIdentifier;
  summary: string;
  aliases?: VulnerabilityIdentifier[];
  related?: { value: string }[];
  severities?: VulnerabilitySeverity[];
  publishedAt: string;
  modifiedAt: string;
}

export interface ProjectInsight{
  project: {
    type: string;
    name: string;
    url: string;
  };
  stars: string;
  forks: string;
  issues: { open: string };
  scorecard: {
    date: string;
    score: number;
    repo: { name: string; commit: string };
    checks: {
      name: string;
      score?: number;
      reason: string;
      documentation: {
        url: string;
        description: string;
      };
    }[];
  };
}


export interface DependencyGraph{
  dependencies: {
    packageVersion: PackageVersionRef;
    relation: string;
  }[];
  dependencyRelations: {
    from?: number;
    to: number;
    requirement: string;
  }[];
}

export interface InsightsResponse{
  packageVersion: PackageVersionRef;
  insight: {
    dependencies: Dependency[];
    vulnerabilities: Vulnerability[];
    projectInsights: ProjectInsight[];
    licenses: { licenses: { licenseId: string }[] };
    packagePublishedAt: string;
    registries: string[];
    availableVersions: {
      version: string;
      publishedAt: string;
      defaultVersion?: true;
    }[];
    dependencyGraph: DependencyGraph;
  };
}
