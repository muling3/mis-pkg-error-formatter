// @mis/error-formatter — STUB.
// Production: RFC 7807 problem-details exception filter with correlation_id.
// PoC: plain shaping helper.
export const PACKAGE = "@mis/error-formatter";

export interface ProblemDetails {
  type: string;
  title: string;
  status: number;
  detail?: string;
  correlation_id?: string;
}

export function toProblemDetails(
  status: number,
  title: string,
  detail?: string,
): ProblemDetails {
  return { type: "about:blank", title, status, detail };
}

export function banner(): string {
  return `[${PACKAGE}] stub loaded`;
}
