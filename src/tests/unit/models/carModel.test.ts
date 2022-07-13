import { expect } from "chai";
import * as sinon from "sinon";
import { Car } from "../../../interfaces/CarInterface";
import carModel from "../../../models/carModel";

const unoComEscada: Car = {
  model: "Uno Com Escada",
  year: 2020,
  color: "azul bebe",
  status: true,
  buyValue: 2.5,
  doorsQty: 2,
  seatsQty: 4,
};

describe("Creating a car", () => {
  before(() => {
    sinon.stub(carModel, "create").resolves(unoComEscada);
  });

  after(() => {
    (carModel.create as sinon.SinonStub).restore();
  });

  it("should return a car", async () => {
    const car = await carModel.create();
    expect(car).to.be.deep.equal(unoComEscada);
  });
});
