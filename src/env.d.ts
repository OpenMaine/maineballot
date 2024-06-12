/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

declare module '*.csv' {
  export default <{ [key: string]: any }>Array
}
