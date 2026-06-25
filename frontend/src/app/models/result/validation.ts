// Per-dataset validation summary attached to aggregator-sourced hits.
//
// Populated from the `validation` object the search backend merges onto each ES
// hit (sourced from the aggregator's public /api/v1/validation-stats endpoint).
// Only aggregator-registered ABCD datasets carry this; other sources (PANGAEA,
// ENA, GBIF, ...) have no validation and the card simply omits the badge.
//
// NOTE on scale: `qualityScore`, `mandatoryPercentage` and `recommendedPercentage`
// are already PERCENTAGES (0..100), not 0..1 fractions — render them directly.
export class Validation {
  status: string | null;
  isValid: boolean | null;
  qualityScore: number | null;
  mandatoryPercentage: number | null;
  recommendedPercentage: number | null;
  totalFiles: number | null;
  validFiles: number | null;
  lastValidatedAt: string | null;

  /**
   * Build a Validation from the raw backend object, or return null when there is
   * no validation payload (so callers can guard the badge with a simple truthy
   * check). Maps the aggregator's snake_case fields to camelCase.
   */
  static fromApi(raw: any): Validation | null {
    if (!raw) {
      return null;
    }
    const validation = new Validation();
    validation.status = raw.validation_status ?? null;
    validation.isValid = raw.is_valid ?? null;
    validation.qualityScore = raw.quality_score ?? null;
    validation.mandatoryPercentage = raw.mandatory_percentage ?? null;
    validation.recommendedPercentage = raw.recommended_percentage ?? null;
    validation.totalFiles = raw.total_files ?? null;
    validation.validFiles = raw.valid_files ?? null;
    validation.lastValidatedAt = raw.last_validated_at ?? null;
    return validation;
  }

  /** True when there is a numeric quality score to show on the card. */
  hasQualityScore(): boolean {
    return typeof this.qualityScore === "number";
  }
}
