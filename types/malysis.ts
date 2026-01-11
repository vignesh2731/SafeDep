export type Ecosystem ="ECOSYSTEM_NPM"| "ECOSYSTEM_PYPI"| "ECOSYSTEM_GO"| "ECOSYSTEM_MAVEN"| string;

export interface PackageRef{
  ecosystem: Ecosystem;
  name: string;
}

export interface PackageVersionRef{
  package: PackageRef;
  version: string;
}

export interface MalysisFile{
  key: string;
  origin: string;
  sha256: string;
  derivedExtension: string;
  size: string;
}


export type ConfidenceLevel ="CONFIDENCE_LOW"|"CONFIDENCE_MEDIUM"| "CONFIDENCE_HIGH"| string;

export interface Inference{
  confidence: ConfidenceLevel;
  summary: string;
  details: string;
}

export interface DownloadMetrics{
  daily: string;
  weekly: string;
  monthly: string;
  total: string;
  updatedAt: string;
}

export interface PackageMetrics{
  downloads: DownloadMetrics;
  maintainersCount: string;
}


export interface Publisher {
  name: string;
  email?: string;
}


export interface MalysisReport{
  packageVersion: PackageVersionRef;
  target: {
    origin: string;
    sha256: string;
  };
  fileSystem: {
    files: MalysisFile[];
  };
  analyzedAt: string;
  inference: Inference;
  reportId: string;
  packageMetrics: PackageMetrics;
  publishers: Publisher[];
}

export interface MalysisResponse{
  analysisId: string;
  status: string;
  report: MalysisReport;
}
