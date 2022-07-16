import { expect } from "chai";
import { Model } from "mongoose";
import sinon, { SinonStub } from "sinon";

import {
  postCar,
  getAllCars,
  getCarById,
  updateCar,
  deleteCar,
} from "../../../services/carService";

const unoComEscada = {
  model: "Uno Com Escada",
  year: 2020,
  color: "azul bebe",
  buyValue: 2,
  doorsQty: 2,
  seatsQty: 4,
  _id: "yuidsgfyudsgfasduiy12313",
};

const unoDeFirma = {
  model: "Uno de Firma",
  year: 2020,
  color: "Rosa Choque",
  buyValue: 2,
  doorsQty: 2,
  seatsQty: 4,
  _id: "yuidsgfyudsgfasduiy12313",
};

describe("CarService", () => {
  describe("Create Car", () => {
    before(() => {
      sinon.stub(Model, "create").resolves(unoComEscada);
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });
    it("create Car", async () => {
      const result = await postCar(unoComEscada);
      expect(result).to.be.deep.equal(unoComEscada);
    });
  });

  describe("get all cars", () => {
    before(() => {
      sinon.stub(Model, "find").resolves([unoComEscada]);
    });

    after(() => {
      (Model.find as SinonStub).restore();
    });
    it("return cars", async () => {
      const result = await getAllCars();

      expect(result).to.be.deep.equal([unoComEscada]);
    });
  });

  describe("get car by id", () => {
    before(() => {
      sinon.stub(Model, "findOne").resolves(unoComEscada);
    });
    after(() => {
      (Model.findOne as SinonStub).restore();
    });
    it("return car by id", async () => {
      const result = await getCarById("yuidsgfyudsgfasduiy12313");

      expect(result).to.be.deep.equal(unoComEscada);
    });
  });

  describe("update a Car", () => {
    before(() => {
      sinon.stub(Model, "findByIdAndUpdate").resolves(unoDeFirma);
      sinon.stub(Model, "findById").resolves(unoDeFirma);
    });

    after(() => {
      (Model.findByIdAndUpdate as SinonStub).restore();
      (Model.findById as SinonStub).restore();
    });
    it("update", async () => {
      const result = await updateCar("yuidsgfyudsgfasduiy12313", unoDeFirma);

      expect(result).to.be.deep.equal(unoDeFirma);
    });
  });

  describe("delete Car", () => {
    before(() => {
      sinon.stub(Model, "findOneAndDelete").resolves(unoDeFirma);
      sinon.stub(Model, "findById").resolves(unoDeFirma);
    });

    after(() => {
      (Model.findOneAndDelete as SinonStub).restore();
      (Model.findById as SinonStub).restore();
    });
    it("delete car", async () => {
      const result = await deleteCar("yuidsgfyudsgfasduiy12313");

      expect(result).to.be.deep.equal(unoDeFirma);
    });
  });
});
