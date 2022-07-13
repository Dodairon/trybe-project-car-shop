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

describe("CarService", () => {
  describe("Create Car", () => {
    before(() => {
      sinon.stub(Model, "create").resolves({
        model: "Uno Com Escada",
        year: 2020,
        color: "azul bebe",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
        _id: "yuidsgfyudsgfasduiy12313",
        sorriso: "aparente",
      });
    });

    after(() => {
      (Model.create as SinonStub).restore();
    });
    it("create Car", async () => {
      const result = await postCar({
        model: "Uno Com Escada",
        year: 2020,
        color: "azul bebe",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
      });

      expect(result).to.be.deep.equal({
        model: "Uno Com Escada",
        year: 2020,
        color: "azul bebe",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
        _id: "yuidsgfyudsgfasduiy12313",
        sorriso: "aparente",
      });
    });
  });

  describe("get all cars", () => {
    before(() => {
      sinon.stub(Model, "find").resolves([
        {
          _id: "yuidsgfyudsgfasduiy12313",
          model: "Uno Com Escada",
          year: 2020,
          color: "azul bebe",
          buyValue: 2,
          doorsQty: 2,
          seatsQty: 4,
        },
      ]);
    });

    after(() => {
      (Model.find as SinonStub).restore();
    });
    it("return cars", async () => {
      const result = await getAllCars();

      expect(result).to.be.deep.equal([
        {
          _id: "yuidsgfyudsgfasduiy12313",
          model: "Uno Com Escada",
          year: 2020,
          color: "azul bebe",
          buyValue: 2,
          doorsQty: 2,
          seatsQty: 4,
        },
      ]);
    });
  });

  describe("get car by id", () => {
    after(() => {
      (Model.findOne as SinonStub).restore();
    });
    it("return car by id", async () => {
      sinon.stub(Model, "findOne").resolves({
        model: "Uno Com Escada",
        year: 2020,
        color: "azul bebe",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
        _id: "yuidsgfyudsgfasduiy12313",
        sorriso: "aparente",
      });
      const result = await getCarById("62c87efaf1f9d111bf4b6acc");

      expect(result).to.be.deep.equal({
        model: "Uno Com Escada",
        year: 2020,
        color: "azul bebe",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
        _id: "yuidsgfyudsgfasduiy12313",
        sorriso: "aparente",
      });
    });
  });

  describe("update a Car", () => {
    before(() => {
      sinon.stub(Model, "findByIdAndUpdate").resolves({
        _id: "yuidsgfyudsgfasduiy12313",
        model: "Uno de Firma",
        year: 2020,
        color: "Rosa Choque",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
      });
      sinon.stub(Model, "findById").resolves({
        _id: "yuidsgfyudsgfasduiy12313",
        model: "Uno de Firma",
        year: 2020,
        color: "Rosa Choque",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
      });
    });

    after(() => {
      (Model.findByIdAndUpdate as SinonStub).restore();
      (Model.findById as SinonStub).restore();
    });
    it("update", async () => {
      const result = await updateCar("yuidsgfyudsgfasduiy12313", {
        model: "Uno de Firma",
        year: 2020,
        color: "Rosa Choque",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
      });

      expect(result).to.be.deep.equal({
        _id: "yuidsgfyudsgfasduiy12313",
        model: "Uno de Firma",
        year: 2020,
        color: "Rosa Choque",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
      });
    });
  });

  describe("delete Car", () => {
    before(() => {
      sinon.stub(Model, "findOneAndDelete").resolves({
        _id: "yuidsgfyudsgfasduiy12313",
        model: "Uno de Firma",
        year: 2020,
        color: "Rosa Choque",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
      });
      sinon.stub(Model, "findById").resolves({
        _id: "yuidsgfyudsgfasduiy12313",
        model: "Uno de Firma",
        year: 2020,
        color: "Rosa Choque",
        buyValue: 2,
        doorsQty: 2,
        seatsQty: 4,
      });
    });

    after(() => {
      (Model.findOneAndDelete as SinonStub).restore();
      (Model.findById as SinonStub).restore();
    });
    it("delete car", async () => {
      const result = await deleteCar("yuidsgfyudsgfasduiy12313");

      expect(result).to.be.deep.equal({
        _id: "yuidsgfyudsgfasduiy12313",
        buyValue: 2,
        color: "Rosa Choque",
        doorsQty: 2,
        model: "Uno de Firma",
        seatsQty: 4,
        year: 2020,
      });
    });
  });
});
