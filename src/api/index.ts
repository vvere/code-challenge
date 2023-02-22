import axios from "axios";

export interface RequestDescription {
  consumes: string[];
  description: string;
  operationId: string;
  parameters: {
    description: string;
    in: string;
    name: string;
    required: boolean;
  }[];
  produces: string[];
  responses: Record<number, { description: string }>;
  security: any[];
  summary: string;
  tags: string[];
}

export type RequestType = "post" | "get" | "delete" | "put";

export type PathObject = Record<RequestType, RequestDescription>;

export interface SwaggerDataInfo {
  contact: { email: string };
  description: string;
  license: { name: string; url: string };
  termsOfService: string;
  title: string;
  version: string;
}

export interface SwaggerData {
  basePath: string;
  definitions: Record<any, any>;
  externalDocs: Record<any, any>;
  host: string;
  info: SwaggerDataInfo;
  paths: Record<string, PathObject>;
  schemes: string[];
  securityDefinitions: Record<any, any>;
  swagger: string;
  tags: Record<any, any>[];
}

export const BASE_URL = "https://petstore.swagger.io/v2/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export const fetchSwaggerInfo = async () =>
  await axiosInstance.get<SwaggerData>("swagger.json");
