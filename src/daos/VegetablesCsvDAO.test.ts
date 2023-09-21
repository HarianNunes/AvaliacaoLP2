import { VegetablesCsvDAO } from "./VegetablesCsvDAO";
let vegetableDAO: VegetablesCsvDAO;
describe("VegetablesCsvDAO", () => {
  beforeAll(() => {
    vegetableDAO = new VegetablesCsvDAO();
  });

  it("should return an vegetable by id", () => {
    const vegetable = vegetableDAO.findVegetableById(2);
    expect(vegetable?.id).toBe(2);
  });

  it("should return a vegetable by name", () => {
    const vegetable = vegetableDAO.findVegetableByName("Cebolinha");
    expect(vegetable?.name).toBe("Cebolinha");
  });

  it("should return a vegetable by benefits", () => {
    const vegetable = vegetableDAO.findVegetableByBenefits("Possui o cálcio");
    expect(vegetable?.benefits).toContain("Possui o cálcio");
  });
});
