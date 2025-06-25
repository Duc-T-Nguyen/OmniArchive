import type { NextConfig } from "next";
import { SERVER_PROPS_EXPORT_ERROR } from "next/dist/lib/constants";

const nextConfig: NextConfig = {
  /* config options here */
};

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SEVER_PORT ? Number(process.env.SERVER_PORT) : 11111;

const SERVER = {
  SERVER_HOSTNAME,
  SERVER_PORT,
}

export default nextConfig;
