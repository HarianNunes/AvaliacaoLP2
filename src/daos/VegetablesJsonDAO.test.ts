import { VegetablesJsonDAO } from "./VegetablesJsonDAO";
let vegetableDAO: VegetablesJsonDAO;

describe("Tests over VegetablesJsonDAO", () => {
  beforeAll(() => {
    vegetableDAO = new VegetablesJsonDAO();
  });

  it("should return an vegetable by id", () => {
    const vegetable = vegetableDAO.findVegetableById(2);
    expect(vegetable?.id).toBe(2);
  });

  it("should return a vegetable by name", () => {
    const vegetable = vegetableDAO.findVegetableByName("Tomate");
    expect(vegetable?.name).toBe("Tomate");
  });

  it("should return a vegetable by benefits", () => {
    const vegetable = vegetableDAO.findVegetableByBenefits("Ajuda emagrecer");
    expect(vegetable?.benefits).toContain("Ajuda emagrecer");
  });
});
