import {
  EUCovidCertificateId,
  RevokedCertificate,
  ValidCertificate,
  ExpiredCertificate
} from "../EUCovidCertificate";

const headerData = {
  title: "title",
  subTitle: "sub title",
  logoUrl: "logoUrl"
};

export const expiredCertificate: ExpiredCertificate = {
  markdownInfo: "Markdown info",
  kind: "expired",
  headerData
};

export const revokedCertificate: RevokedCertificate = {
  id: "id" as EUCovidCertificateId,
  kind: "revoked",
  revokedOn: new Date(),
  markdownInfo: "Markdown info",
  headerData
};

export const baseValidCertificate: ValidCertificate = {
  id: "id" as EUCovidCertificateId,
  kind: "valid",
  qrCode: {
    mimeType: "image/png",
    content:
      "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"
  },
  headerData
};

export const completeValidCertificate: ValidCertificate = {
  ...baseValidCertificate,
  markdownDetails: "markdownDetails",
  markdownInfo: "markdownPreview"
};

export const validCertificateWithoutPreview: ValidCertificate = {
  ...baseValidCertificate,
  markdownDetails: "markdownDetails"
};

export const validCertificateWithoutDetails: ValidCertificate = {
  ...baseValidCertificate,
  markdownInfo: "markdownPreview"
};
