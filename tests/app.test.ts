import request from "supertest";
import app from "../src/app";

test("Health check works", async () => {
  const response = await request(app.callback()).get("/api/v1/health");
  expect(response.status).toBe(200);
  expect(response.body.message).toBe("OK");
});

test("Receive url params works", async () => {
  const response = await request(app.callback()).get("/api/v1/convert/1");
  expect(response.status).toBe(200);
  expect(response.body.result).toBe("1");
});

test("Receive k number works", async () => {
  const response = await request(app.callback()).get("/api/v1/convert/250k");
  expect(response.status).toBe(200);
  expect(response.body.result).toBe("250,000");
});

test("Receive m number works", async () => {
  const response = await request(app.callback()).get("/api/v1/convert/10m");
  expect(response.status).toBe(200);
  expect(response.body.result).toBe("10,000,000");
});

test("Receive b number works", async () => {
  const response = await request(app.callback()).get("/api/v1/convert/.5b");
  expect(response.status).toBe(200);
  expect(response.body.result).toBe("500,000,000");
});
