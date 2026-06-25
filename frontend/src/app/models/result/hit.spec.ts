import { Hit } from "./hit";
import { Validation } from "./validation";

describe("Validation model", () => {
  const rawApi = {
    identifier: "urn:gfbio.org:abcd:1_5_1",
    dataset_id: 5,
    archive_id: 1,
    validation_status: "completed",
    last_validated_at: "2026-06-24T09:06:56.827505",
    is_valid: true,
    quality_score: 87.1,
    mandatory_percentage: 100,
    recommended_percentage: 57.1,
    total_files: 1,
    valid_files: 1,
  };

  it("returns null when there is no validation payload", () => {
    expect(Validation.fromApi(null)).toBeNull();
    expect(Validation.fromApi(undefined)).toBeNull();
  });

  it("maps the aggregator snake_case fields to camelCase", () => {
    const v = Validation.fromApi(rawApi);
    expect(v).not.toBeNull();
    expect(v.status).toBe("completed");
    expect(v.isValid).toBe(true);
    expect(v.qualityScore).toBe(87.1);
    expect(v.mandatoryPercentage).toBe(100);
    expect(v.recommendedPercentage).toBe(57.1);
    expect(v.totalFiles).toBe(1);
    expect(v.validFiles).toBe(1);
    expect(v.lastValidatedAt).toBe("2026-06-24T09:06:56.827505");
  });

  it("hasQualityScore reflects whether a numeric score is present", () => {
    expect(Validation.fromApi(rawApi).hasQualityScore()).toBe(true);
    const noScore = Validation.fromApi({ validation_status: "not_validated" });
    expect(noScore.hasQualityScore()).toBe(false);
  });
});

describe("Hit validation field", () => {
  it("defaults to undefined until set", () => {
    expect(new Hit().getValidation()).toBeUndefined();
  });

  it("round-trips through the getter/setter", () => {
    const hit = new Hit();
    const v = Validation.fromApi({ quality_score: 50 });
    hit.setValidation(v);
    expect(hit.getValidation()).toBe(v);
  });

  it("accepts null for non-aggregator hits", () => {
    const hit = new Hit();
    hit.setValidation(null);
    expect(hit.getValidation()).toBeNull();
  });
});
