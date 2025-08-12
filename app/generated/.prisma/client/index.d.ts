
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Keyword
 * 
 */
export type Keyword = $Result.DefaultSelection<Prisma.$KeywordPayload>
/**
 * Model Author
 * 
 */
export type Author = $Result.DefaultSelection<Prisma.$AuthorPayload>
/**
 * Model Book
 * 
 */
export type Book = $Result.DefaultSelection<Prisma.$BookPayload>
/**
 * Model Document
 * 
 */
export type Document = $Result.DefaultSelection<Prisma.$DocumentPayload>
/**
 * Model AuthorBooks
 * 
 */
export type AuthorBooks = $Result.DefaultSelection<Prisma.$AuthorBooksPayload>
/**
 * Model AuthorDocuments
 * 
 */
export type AuthorDocuments = $Result.DefaultSelection<Prisma.$AuthorDocumentsPayload>
/**
 * Model CategoryList
 * 
 */
export type CategoryList = $Result.DefaultSelection<Prisma.$CategoryListPayload>
/**
 * Model KeywordList
 * 
 */
export type KeywordList = $Result.DefaultSelection<Prisma.$KeywordListPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keyword`: Exposes CRUD operations for the **Keyword** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Keywords
    * const keywords = await prisma.keyword.findMany()
    * ```
    */
  get keyword(): Prisma.KeywordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.author`: Exposes CRUD operations for the **Author** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Authors
    * const authors = await prisma.author.findMany()
    * ```
    */
  get author(): Prisma.AuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.book`: Exposes CRUD operations for the **Book** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Books
    * const books = await prisma.book.findMany()
    * ```
    */
  get book(): Prisma.BookDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.document`: Exposes CRUD operations for the **Document** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Documents
    * const documents = await prisma.document.findMany()
    * ```
    */
  get document(): Prisma.DocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorBooks`: Exposes CRUD operations for the **AuthorBooks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorBooks
    * const authorBooks = await prisma.authorBooks.findMany()
    * ```
    */
  get authorBooks(): Prisma.AuthorBooksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authorDocuments`: Exposes CRUD operations for the **AuthorDocuments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthorDocuments
    * const authorDocuments = await prisma.authorDocuments.findMany()
    * ```
    */
  get authorDocuments(): Prisma.AuthorDocumentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categoryList`: Exposes CRUD operations for the **CategoryList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryLists
    * const categoryLists = await prisma.categoryList.findMany()
    * ```
    */
  get categoryList(): Prisma.CategoryListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.keywordList`: Exposes CRUD operations for the **KeywordList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KeywordLists
    * const keywordLists = await prisma.keywordList.findMany()
    * ```
    */
  get keywordList(): Prisma.KeywordListDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Category: 'Category',
    Keyword: 'Keyword',
    Author: 'Author',
    Book: 'Book',
    Document: 'Document',
    AuthorBooks: 'AuthorBooks',
    AuthorDocuments: 'AuthorDocuments',
    CategoryList: 'CategoryList',
    KeywordList: 'KeywordList'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "keyword" | "author" | "book" | "document" | "authorBooks" | "authorDocuments" | "categoryList" | "keywordList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Keyword: {
        payload: Prisma.$KeywordPayload<ExtArgs>
        fields: Prisma.KeywordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findFirst: {
            args: Prisma.KeywordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          findMany: {
            args: Prisma.KeywordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          create: {
            args: Prisma.KeywordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          createMany: {
            args: Prisma.KeywordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          delete: {
            args: Prisma.KeywordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          update: {
            args: Prisma.KeywordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          deleteMany: {
            args: Prisma.KeywordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>[]
          }
          upsert: {
            args: Prisma.KeywordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordPayload>
          }
          aggregate: {
            args: Prisma.KeywordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeyword>
          }
          groupBy: {
            args: Prisma.KeywordGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordCountAggregateOutputType> | number
          }
        }
      }
      Author: {
        payload: Prisma.$AuthorPayload<ExtArgs>
        fields: Prisma.AuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findFirst: {
            args: Prisma.AuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          findMany: {
            args: Prisma.AuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          create: {
            args: Prisma.AuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          createMany: {
            args: Prisma.AuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          delete: {
            args: Prisma.AuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          update: {
            args: Prisma.AuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>[]
          }
          upsert: {
            args: Prisma.AuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorPayload>
          }
          aggregate: {
            args: Prisma.AuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthor>
          }
          groupBy: {
            args: Prisma.AuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorCountAggregateOutputType> | number
          }
        }
      }
      Book: {
        payload: Prisma.$BookPayload<ExtArgs>
        fields: Prisma.BookFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findFirst: {
            args: Prisma.BookFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          findMany: {
            args: Prisma.BookFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          create: {
            args: Prisma.BookCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          createMany: {
            args: Prisma.BookCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          delete: {
            args: Prisma.BookDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          update: {
            args: Prisma.BookUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          deleteMany: {
            args: Prisma.BookDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>[]
          }
          upsert: {
            args: Prisma.BookUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookPayload>
          }
          aggregate: {
            args: Prisma.BookAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBook>
          }
          groupBy: {
            args: Prisma.BookGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookCountArgs<ExtArgs>
            result: $Utils.Optional<BookCountAggregateOutputType> | number
          }
        }
      }
      Document: {
        payload: Prisma.$DocumentPayload<ExtArgs>
        fields: Prisma.DocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findFirst: {
            args: Prisma.DocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          findMany: {
            args: Prisma.DocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          create: {
            args: Prisma.DocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          createMany: {
            args: Prisma.DocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          delete: {
            args: Prisma.DocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          update: {
            args: Prisma.DocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          deleteMany: {
            args: Prisma.DocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>[]
          }
          upsert: {
            args: Prisma.DocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentPayload>
          }
          aggregate: {
            args: Prisma.DocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocument>
          }
          groupBy: {
            args: Prisma.DocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentCountAggregateOutputType> | number
          }
        }
      }
      AuthorBooks: {
        payload: Prisma.$AuthorBooksPayload<ExtArgs>
        fields: Prisma.AuthorBooksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorBooksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorBooksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>
          }
          findFirst: {
            args: Prisma.AuthorBooksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorBooksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>
          }
          findMany: {
            args: Prisma.AuthorBooksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>[]
          }
          create: {
            args: Prisma.AuthorBooksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>
          }
          createMany: {
            args: Prisma.AuthorBooksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorBooksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>[]
          }
          delete: {
            args: Prisma.AuthorBooksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>
          }
          update: {
            args: Prisma.AuthorBooksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>
          }
          deleteMany: {
            args: Prisma.AuthorBooksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorBooksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorBooksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>[]
          }
          upsert: {
            args: Prisma.AuthorBooksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorBooksPayload>
          }
          aggregate: {
            args: Prisma.AuthorBooksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorBooks>
          }
          groupBy: {
            args: Prisma.AuthorBooksGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorBooksGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorBooksCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorBooksCountAggregateOutputType> | number
          }
        }
      }
      AuthorDocuments: {
        payload: Prisma.$AuthorDocumentsPayload<ExtArgs>
        fields: Prisma.AuthorDocumentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthorDocumentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthorDocumentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>
          }
          findFirst: {
            args: Prisma.AuthorDocumentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthorDocumentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>
          }
          findMany: {
            args: Prisma.AuthorDocumentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>[]
          }
          create: {
            args: Prisma.AuthorDocumentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>
          }
          createMany: {
            args: Prisma.AuthorDocumentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthorDocumentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>[]
          }
          delete: {
            args: Prisma.AuthorDocumentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>
          }
          update: {
            args: Prisma.AuthorDocumentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>
          }
          deleteMany: {
            args: Prisma.AuthorDocumentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthorDocumentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthorDocumentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>[]
          }
          upsert: {
            args: Prisma.AuthorDocumentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthorDocumentsPayload>
          }
          aggregate: {
            args: Prisma.AuthorDocumentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthorDocuments>
          }
          groupBy: {
            args: Prisma.AuthorDocumentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthorDocumentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthorDocumentsCountArgs<ExtArgs>
            result: $Utils.Optional<AuthorDocumentsCountAggregateOutputType> | number
          }
        }
      }
      CategoryList: {
        payload: Prisma.$CategoryListPayload<ExtArgs>
        fields: Prisma.CategoryListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>
          }
          findFirst: {
            args: Prisma.CategoryListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>
          }
          findMany: {
            args: Prisma.CategoryListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>[]
          }
          create: {
            args: Prisma.CategoryListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>
          }
          createMany: {
            args: Prisma.CategoryListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>[]
          }
          delete: {
            args: Prisma.CategoryListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>
          }
          update: {
            args: Prisma.CategoryListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>
          }
          deleteMany: {
            args: Prisma.CategoryListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>[]
          }
          upsert: {
            args: Prisma.CategoryListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryListPayload>
          }
          aggregate: {
            args: Prisma.CategoryListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryList>
          }
          groupBy: {
            args: Prisma.CategoryListGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryListGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryListCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryListCountAggregateOutputType> | number
          }
        }
      }
      KeywordList: {
        payload: Prisma.$KeywordListPayload<ExtArgs>
        fields: Prisma.KeywordListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KeywordListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KeywordListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>
          }
          findFirst: {
            args: Prisma.KeywordListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KeywordListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>
          }
          findMany: {
            args: Prisma.KeywordListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>[]
          }
          create: {
            args: Prisma.KeywordListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>
          }
          createMany: {
            args: Prisma.KeywordListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KeywordListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>[]
          }
          delete: {
            args: Prisma.KeywordListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>
          }
          update: {
            args: Prisma.KeywordListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>
          }
          deleteMany: {
            args: Prisma.KeywordListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KeywordListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KeywordListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>[]
          }
          upsert: {
            args: Prisma.KeywordListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KeywordListPayload>
          }
          aggregate: {
            args: Prisma.KeywordListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKeywordList>
          }
          groupBy: {
            args: Prisma.KeywordListGroupByArgs<ExtArgs>
            result: $Utils.Optional<KeywordListGroupByOutputType>[]
          }
          count: {
            args: Prisma.KeywordListCountArgs<ExtArgs>
            result: $Utils.Optional<KeywordListCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    keyword?: KeywordOmit
    author?: AuthorOmit
    book?: BookOmit
    document?: DocumentOmit
    authorBooks?: AuthorBooksOmit
    authorDocuments?: AuthorDocumentsOmit
    categoryList?: CategoryListOmit
    keywordList?: KeywordListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    CategoryList: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CategoryList?: boolean | CategoryCountOutputTypeCountCategoryListArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCategoryListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryListWhereInput
  }


  /**
   * Count Type KeywordCountOutputType
   */

  export type KeywordCountOutputType = {
    KeywordList: number
  }

  export type KeywordCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeywordList?: boolean | KeywordCountOutputTypeCountKeywordListArgs
  }

  // Custom InputTypes
  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordCountOutputType
     */
    select?: KeywordCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KeywordCountOutputType without action
   */
  export type KeywordCountOutputTypeCountKeywordListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordListWhereInput
  }


  /**
   * Count Type AuthorCountOutputType
   */

  export type AuthorCountOutputType = {
    AuthorBooks: number
    AuthorDocuments: number
  }

  export type AuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthorBooks?: boolean | AuthorCountOutputTypeCountAuthorBooksArgs
    AuthorDocuments?: boolean | AuthorCountOutputTypeCountAuthorDocumentsArgs
  }

  // Custom InputTypes
  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorCountOutputType
     */
    select?: AuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountAuthorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorBooksWhereInput
  }

  /**
   * AuthorCountOutputType without action
   */
  export type AuthorCountOutputTypeCountAuthorDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorDocumentsWhereInput
  }


  /**
   * Count Type BookCountOutputType
   */

  export type BookCountOutputType = {
    AuthorBooks: number
    CategoryList: number
    KeywordList: number
  }

  export type BookCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthorBooks?: boolean | BookCountOutputTypeCountAuthorBooksArgs
    CategoryList?: boolean | BookCountOutputTypeCountCategoryListArgs
    KeywordList?: boolean | BookCountOutputTypeCountKeywordListArgs
  }

  // Custom InputTypes
  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookCountOutputType
     */
    select?: BookCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountAuthorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorBooksWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountCategoryListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryListWhereInput
  }

  /**
   * BookCountOutputType without action
   */
  export type BookCountOutputTypeCountKeywordListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordListWhereInput
  }


  /**
   * Count Type DocumentCountOutputType
   */

  export type DocumentCountOutputType = {
    AuthorDocuments: number
    CategoryList: number
    KeywordList: number
  }

  export type DocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthorDocuments?: boolean | DocumentCountOutputTypeCountAuthorDocumentsArgs
    CategoryList?: boolean | DocumentCountOutputTypeCountCategoryListArgs
    KeywordList?: boolean | DocumentCountOutputTypeCountKeywordListArgs
  }

  // Custom InputTypes
  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentCountOutputType
     */
    select?: DocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountAuthorDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorDocumentsWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountCategoryListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryListWhereInput
  }

  /**
   * DocumentCountOutputType without action
   */
  export type DocumentCountOutputTypeCountKeywordListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    category_name: string | null
    category_description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    category_name: string | null
    category_description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    category_name: number
    category_description: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    category_name?: true
    category_description?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    category_name?: true
    category_description?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    category_name?: true
    category_description?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    category_name: string
    category_description: string | null
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    category_description?: boolean
    CategoryList?: boolean | Category$CategoryListArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    category_description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    category_name?: boolean
    category_description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    category_name?: boolean
    category_description?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "category_name" | "category_description", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CategoryList?: boolean | Category$CategoryListArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      CategoryList: Prisma.$CategoryListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      category_name: string
      category_description: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CategoryList<T extends Category$CategoryListArgs<ExtArgs> = {}>(args?: Subset<T, Category$CategoryListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly category_name: FieldRef<"Category", 'String'>
    readonly category_description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.CategoryList
   */
  export type Category$CategoryListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    where?: CategoryListWhereInput
    orderBy?: CategoryListOrderByWithRelationInput | CategoryListOrderByWithRelationInput[]
    cursor?: CategoryListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryListScalarFieldEnum | CategoryListScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Keyword
   */

  export type AggregateKeyword = {
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  export type KeywordAvgAggregateOutputType = {
    id: number | null
  }

  export type KeywordSumAggregateOutputType = {
    id: number | null
  }

  export type KeywordMinAggregateOutputType = {
    id: number | null
    keyword_name: string | null
    keyword_description: string | null
  }

  export type KeywordMaxAggregateOutputType = {
    id: number | null
    keyword_name: string | null
    keyword_description: string | null
  }

  export type KeywordCountAggregateOutputType = {
    id: number
    keyword_name: number
    keyword_description: number
    _all: number
  }


  export type KeywordAvgAggregateInputType = {
    id?: true
  }

  export type KeywordSumAggregateInputType = {
    id?: true
  }

  export type KeywordMinAggregateInputType = {
    id?: true
    keyword_name?: true
    keyword_description?: true
  }

  export type KeywordMaxAggregateInputType = {
    id?: true
    keyword_name?: true
    keyword_description?: true
  }

  export type KeywordCountAggregateInputType = {
    id?: true
    keyword_name?: true
    keyword_description?: true
    _all?: true
  }

  export type KeywordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keyword to aggregate.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Keywords
    **/
    _count?: true | KeywordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeywordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeywordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordMaxAggregateInputType
  }

  export type GetKeywordAggregateType<T extends KeywordAggregateArgs> = {
        [P in keyof T & keyof AggregateKeyword]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeyword[P]>
      : GetScalarType<T[P], AggregateKeyword[P]>
  }




  export type KeywordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordWhereInput
    orderBy?: KeywordOrderByWithAggregationInput | KeywordOrderByWithAggregationInput[]
    by: KeywordScalarFieldEnum[] | KeywordScalarFieldEnum
    having?: KeywordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordCountAggregateInputType | true
    _avg?: KeywordAvgAggregateInputType
    _sum?: KeywordSumAggregateInputType
    _min?: KeywordMinAggregateInputType
    _max?: KeywordMaxAggregateInputType
  }

  export type KeywordGroupByOutputType = {
    id: number
    keyword_name: string
    keyword_description: string | null
    _count: KeywordCountAggregateOutputType | null
    _avg: KeywordAvgAggregateOutputType | null
    _sum: KeywordSumAggregateOutputType | null
    _min: KeywordMinAggregateOutputType | null
    _max: KeywordMaxAggregateOutputType | null
  }

  type GetKeywordGroupByPayload<T extends KeywordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordGroupByOutputType[P]>
        }
      >
    >


  export type KeywordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword_name?: boolean
    keyword_description?: boolean
    KeywordList?: boolean | Keyword$KeywordListArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword_name?: boolean
    keyword_description?: boolean
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keyword_name?: boolean
    keyword_description?: boolean
  }, ExtArgs["result"]["keyword"]>

  export type KeywordSelectScalar = {
    id?: boolean
    keyword_name?: boolean
    keyword_description?: boolean
  }

  export type KeywordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keyword_name" | "keyword_description", ExtArgs["result"]["keyword"]>
  export type KeywordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    KeywordList?: boolean | Keyword$KeywordListArgs<ExtArgs>
    _count?: boolean | KeywordCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KeywordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KeywordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KeywordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Keyword"
    objects: {
      KeywordList: Prisma.$KeywordListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keyword_name: string
      keyword_description: string | null
    }, ExtArgs["result"]["keyword"]>
    composites: {}
  }

  type KeywordGetPayload<S extends boolean | null | undefined | KeywordDefaultArgs> = $Result.GetResult<Prisma.$KeywordPayload, S>

  type KeywordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordCountAggregateInputType | true
    }

  export interface KeywordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Keyword'], meta: { name: 'Keyword' } }
    /**
     * Find zero or one Keyword that matches the filter.
     * @param {KeywordFindUniqueArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordFindUniqueArgs>(args: SelectSubset<T, KeywordFindUniqueArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Keyword that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordFindUniqueOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordFindFirstArgs>(args?: SelectSubset<T, KeywordFindFirstArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Keyword that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindFirstOrThrowArgs} args - Arguments to find a Keyword
     * @example
     * // Get one Keyword
     * const keyword = await prisma.keyword.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Keywords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Keywords
     * const keywords = await prisma.keyword.findMany()
     * 
     * // Get first 10 Keywords
     * const keywords = await prisma.keyword.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordWithIdOnly = await prisma.keyword.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordFindManyArgs>(args?: SelectSubset<T, KeywordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Keyword.
     * @param {KeywordCreateArgs} args - Arguments to create a Keyword.
     * @example
     * // Create one Keyword
     * const Keyword = await prisma.keyword.create({
     *   data: {
     *     // ... data to create a Keyword
     *   }
     * })
     * 
     */
    create<T extends KeywordCreateArgs>(args: SelectSubset<T, KeywordCreateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Keywords.
     * @param {KeywordCreateManyArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordCreateManyArgs>(args?: SelectSubset<T, KeywordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Keywords and returns the data saved in the database.
     * @param {KeywordCreateManyAndReturnArgs} args - Arguments to create many Keywords.
     * @example
     * // Create many Keywords
     * const keyword = await prisma.keyword.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Keyword.
     * @param {KeywordDeleteArgs} args - Arguments to delete one Keyword.
     * @example
     * // Delete one Keyword
     * const Keyword = await prisma.keyword.delete({
     *   where: {
     *     // ... filter to delete one Keyword
     *   }
     * })
     * 
     */
    delete<T extends KeywordDeleteArgs>(args: SelectSubset<T, KeywordDeleteArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Keyword.
     * @param {KeywordUpdateArgs} args - Arguments to update one Keyword.
     * @example
     * // Update one Keyword
     * const keyword = await prisma.keyword.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordUpdateArgs>(args: SelectSubset<T, KeywordUpdateArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Keywords.
     * @param {KeywordDeleteManyArgs} args - Arguments to filter Keywords to delete.
     * @example
     * // Delete a few Keywords
     * const { count } = await prisma.keyword.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordDeleteManyArgs>(args?: SelectSubset<T, KeywordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordUpdateManyArgs>(args: SelectSubset<T, KeywordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Keywords and returns the data updated in the database.
     * @param {KeywordUpdateManyAndReturnArgs} args - Arguments to update many Keywords.
     * @example
     * // Update many Keywords
     * const keyword = await prisma.keyword.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Keywords and only return the `id`
     * const keywordWithIdOnly = await prisma.keyword.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeywordUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Keyword.
     * @param {KeywordUpsertArgs} args - Arguments to update or create a Keyword.
     * @example
     * // Update or create a Keyword
     * const keyword = await prisma.keyword.upsert({
     *   create: {
     *     // ... data to create a Keyword
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Keyword we want to update
     *   }
     * })
     */
    upsert<T extends KeywordUpsertArgs>(args: SelectSubset<T, KeywordUpsertArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Keywords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordCountArgs} args - Arguments to filter Keywords to count.
     * @example
     * // Count the number of Keywords
     * const count = await prisma.keyword.count({
     *   where: {
     *     // ... the filter for the Keywords we want to count
     *   }
     * })
    **/
    count<T extends KeywordCountArgs>(
      args?: Subset<T, KeywordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeywordAggregateArgs>(args: Subset<T, KeywordAggregateArgs>): Prisma.PrismaPromise<GetKeywordAggregateType<T>>

    /**
     * Group by Keyword.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeywordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordGroupByArgs['orderBy'] }
        : { orderBy?: KeywordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeywordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Keyword model
   */
  readonly fields: KeywordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Keyword.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    KeywordList<T extends Keyword$KeywordListArgs<ExtArgs> = {}>(args?: Subset<T, Keyword$KeywordListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Keyword model
   */
  interface KeywordFieldRefs {
    readonly id: FieldRef<"Keyword", 'Int'>
    readonly keyword_name: FieldRef<"Keyword", 'String'>
    readonly keyword_description: FieldRef<"Keyword", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Keyword findUnique
   */
  export type KeywordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findUniqueOrThrow
   */
  export type KeywordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword findFirst
   */
  export type KeywordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findFirstOrThrow
   */
  export type KeywordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keyword to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Keywords.
     */
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword findMany
   */
  export type KeywordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter, which Keywords to fetch.
     */
    where?: KeywordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Keywords to fetch.
     */
    orderBy?: KeywordOrderByWithRelationInput | KeywordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Keywords.
     */
    cursor?: KeywordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Keywords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Keywords.
     */
    skip?: number
    distinct?: KeywordScalarFieldEnum | KeywordScalarFieldEnum[]
  }

  /**
   * Keyword create
   */
  export type KeywordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to create a Keyword.
     */
    data: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
  }

  /**
   * Keyword createMany
   */
  export type KeywordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword createManyAndReturn
   */
  export type KeywordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to create many Keywords.
     */
    data: KeywordCreateManyInput | KeywordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Keyword update
   */
  export type KeywordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The data needed to update a Keyword.
     */
    data: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
    /**
     * Choose, which Keyword to update.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword updateMany
   */
  export type KeywordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword updateManyAndReturn
   */
  export type KeywordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * The data used to update Keywords.
     */
    data: XOR<KeywordUpdateManyMutationInput, KeywordUncheckedUpdateManyInput>
    /**
     * Filter which Keywords to update
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to update.
     */
    limit?: number
  }

  /**
   * Keyword upsert
   */
  export type KeywordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * The filter to search for the Keyword to update in case it exists.
     */
    where: KeywordWhereUniqueInput
    /**
     * In case the Keyword found by the `where` argument doesn't exist, create a new Keyword with this data.
     */
    create: XOR<KeywordCreateInput, KeywordUncheckedCreateInput>
    /**
     * In case the Keyword was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordUpdateInput, KeywordUncheckedUpdateInput>
  }

  /**
   * Keyword delete
   */
  export type KeywordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
    /**
     * Filter which Keyword to delete.
     */
    where: KeywordWhereUniqueInput
  }

  /**
   * Keyword deleteMany
   */
  export type KeywordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Keywords to delete
     */
    where?: KeywordWhereInput
    /**
     * Limit how many Keywords to delete.
     */
    limit?: number
  }

  /**
   * Keyword.KeywordList
   */
  export type Keyword$KeywordListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    where?: KeywordListWhereInput
    orderBy?: KeywordListOrderByWithRelationInput | KeywordListOrderByWithRelationInput[]
    cursor?: KeywordListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordListScalarFieldEnum | KeywordListScalarFieldEnum[]
  }

  /**
   * Keyword without action
   */
  export type KeywordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Keyword
     */
    select?: KeywordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Keyword
     */
    omit?: KeywordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordInclude<ExtArgs> | null
  }


  /**
   * Model Author
   */

  export type AggregateAuthor = {
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  export type AuthorAvgAggregateOutputType = {
    id: number | null
  }

  export type AuthorSumAggregateOutputType = {
    id: number | null
  }

  export type AuthorMinAggregateOutputType = {
    id: number | null
    country: string | null
    first_name: string | null
    last_name: string | null
  }

  export type AuthorMaxAggregateOutputType = {
    id: number | null
    country: string | null
    first_name: string | null
    last_name: string | null
  }

  export type AuthorCountAggregateOutputType = {
    id: number
    country: number
    first_name: number
    last_name: number
    _all: number
  }


  export type AuthorAvgAggregateInputType = {
    id?: true
  }

  export type AuthorSumAggregateInputType = {
    id?: true
  }

  export type AuthorMinAggregateInputType = {
    id?: true
    country?: true
    first_name?: true
    last_name?: true
  }

  export type AuthorMaxAggregateInputType = {
    id?: true
    country?: true
    first_name?: true
    last_name?: true
  }

  export type AuthorCountAggregateInputType = {
    id?: true
    country?: true
    first_name?: true
    last_name?: true
    _all?: true
  }

  export type AuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Author to aggregate.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Authors
    **/
    _count?: true | AuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorMaxAggregateInputType
  }

  export type GetAuthorAggregateType<T extends AuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthor[P]>
      : GetScalarType<T[P], AggregateAuthor[P]>
  }




  export type AuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorWhereInput
    orderBy?: AuthorOrderByWithAggregationInput | AuthorOrderByWithAggregationInput[]
    by: AuthorScalarFieldEnum[] | AuthorScalarFieldEnum
    having?: AuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorCountAggregateInputType | true
    _avg?: AuthorAvgAggregateInputType
    _sum?: AuthorSumAggregateInputType
    _min?: AuthorMinAggregateInputType
    _max?: AuthorMaxAggregateInputType
  }

  export type AuthorGroupByOutputType = {
    id: number
    country: string
    first_name: string
    last_name: string
    _count: AuthorCountAggregateOutputType | null
    _avg: AuthorAvgAggregateOutputType | null
    _sum: AuthorSumAggregateOutputType | null
    _min: AuthorMinAggregateOutputType | null
    _max: AuthorMaxAggregateOutputType | null
  }

  type GetAuthorGroupByPayload<T extends AuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorGroupByOutputType[P]>
        }
      >
    >


  export type AuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    first_name?: boolean
    last_name?: boolean
    AuthorBooks?: boolean | Author$AuthorBooksArgs<ExtArgs>
    AuthorDocuments?: boolean | Author$AuthorDocumentsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    first_name?: boolean
    last_name?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    first_name?: boolean
    last_name?: boolean
  }, ExtArgs["result"]["author"]>

  export type AuthorSelectScalar = {
    id?: boolean
    country?: boolean
    first_name?: boolean
    last_name?: boolean
  }

  export type AuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "first_name" | "last_name", ExtArgs["result"]["author"]>
  export type AuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthorBooks?: boolean | Author$AuthorBooksArgs<ExtArgs>
    AuthorDocuments?: boolean | Author$AuthorDocumentsArgs<ExtArgs>
    _count?: boolean | AuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Author"
    objects: {
      AuthorBooks: Prisma.$AuthorBooksPayload<ExtArgs>[]
      AuthorDocuments: Prisma.$AuthorDocumentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string
      first_name: string
      last_name: string
    }, ExtArgs["result"]["author"]>
    composites: {}
  }

  type AuthorGetPayload<S extends boolean | null | undefined | AuthorDefaultArgs> = $Result.GetResult<Prisma.$AuthorPayload, S>

  type AuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorCountAggregateInputType | true
    }

  export interface AuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Author'], meta: { name: 'Author' } }
    /**
     * Find zero or one Author that matches the filter.
     * @param {AuthorFindUniqueArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorFindUniqueArgs>(args: SelectSubset<T, AuthorFindUniqueArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Author that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorFindUniqueOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorFindFirstArgs>(args?: SelectSubset<T, AuthorFindFirstArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Author that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindFirstOrThrowArgs} args - Arguments to find a Author
     * @example
     * // Get one Author
     * const author = await prisma.author.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Authors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Authors
     * const authors = await prisma.author.findMany()
     * 
     * // Get first 10 Authors
     * const authors = await prisma.author.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authorWithIdOnly = await prisma.author.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthorFindManyArgs>(args?: SelectSubset<T, AuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Author.
     * @param {AuthorCreateArgs} args - Arguments to create a Author.
     * @example
     * // Create one Author
     * const Author = await prisma.author.create({
     *   data: {
     *     // ... data to create a Author
     *   }
     * })
     * 
     */
    create<T extends AuthorCreateArgs>(args: SelectSubset<T, AuthorCreateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Authors.
     * @param {AuthorCreateManyArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorCreateManyArgs>(args?: SelectSubset<T, AuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Authors and returns the data saved in the database.
     * @param {AuthorCreateManyAndReturnArgs} args - Arguments to create many Authors.
     * @example
     * // Create many Authors
     * const author = await prisma.author.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Author.
     * @param {AuthorDeleteArgs} args - Arguments to delete one Author.
     * @example
     * // Delete one Author
     * const Author = await prisma.author.delete({
     *   where: {
     *     // ... filter to delete one Author
     *   }
     * })
     * 
     */
    delete<T extends AuthorDeleteArgs>(args: SelectSubset<T, AuthorDeleteArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Author.
     * @param {AuthorUpdateArgs} args - Arguments to update one Author.
     * @example
     * // Update one Author
     * const author = await prisma.author.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorUpdateArgs>(args: SelectSubset<T, AuthorUpdateArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Authors.
     * @param {AuthorDeleteManyArgs} args - Arguments to filter Authors to delete.
     * @example
     * // Delete a few Authors
     * const { count } = await prisma.author.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDeleteManyArgs>(args?: SelectSubset<T, AuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorUpdateManyArgs>(args: SelectSubset<T, AuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Authors and returns the data updated in the database.
     * @param {AuthorUpdateManyAndReturnArgs} args - Arguments to update many Authors.
     * @example
     * // Update many Authors
     * const author = await prisma.author.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Authors and only return the `id`
     * const authorWithIdOnly = await prisma.author.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Author.
     * @param {AuthorUpsertArgs} args - Arguments to update or create a Author.
     * @example
     * // Update or create a Author
     * const author = await prisma.author.upsert({
     *   create: {
     *     // ... data to create a Author
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Author we want to update
     *   }
     * })
     */
    upsert<T extends AuthorUpsertArgs>(args: SelectSubset<T, AuthorUpsertArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Authors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorCountArgs} args - Arguments to filter Authors to count.
     * @example
     * // Count the number of Authors
     * const count = await prisma.author.count({
     *   where: {
     *     // ... the filter for the Authors we want to count
     *   }
     * })
    **/
    count<T extends AuthorCountArgs>(
      args?: Subset<T, AuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorAggregateArgs>(args: Subset<T, AuthorAggregateArgs>): Prisma.PrismaPromise<GetAuthorAggregateType<T>>

    /**
     * Group by Author.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorGroupByArgs['orderBy'] }
        : { orderBy?: AuthorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Author model
   */
  readonly fields: AuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Author.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AuthorBooks<T extends Author$AuthorBooksArgs<ExtArgs> = {}>(args?: Subset<T, Author$AuthorBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AuthorDocuments<T extends Author$AuthorDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Author$AuthorDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Author model
   */
  interface AuthorFieldRefs {
    readonly id: FieldRef<"Author", 'Int'>
    readonly country: FieldRef<"Author", 'String'>
    readonly first_name: FieldRef<"Author", 'String'>
    readonly last_name: FieldRef<"Author", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Author findUnique
   */
  export type AuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findUniqueOrThrow
   */
  export type AuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author findFirst
   */
  export type AuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findFirstOrThrow
   */
  export type AuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Author to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Authors.
     */
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author findMany
   */
  export type AuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter, which Authors to fetch.
     */
    where?: AuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Authors to fetch.
     */
    orderBy?: AuthorOrderByWithRelationInput | AuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Authors.
     */
    cursor?: AuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Authors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Authors.
     */
    skip?: number
    distinct?: AuthorScalarFieldEnum | AuthorScalarFieldEnum[]
  }

  /**
   * Author create
   */
  export type AuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a Author.
     */
    data: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
  }

  /**
   * Author createMany
   */
  export type AuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author createManyAndReturn
   */
  export type AuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to create many Authors.
     */
    data: AuthorCreateManyInput | AuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Author update
   */
  export type AuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a Author.
     */
    data: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
    /**
     * Choose, which Author to update.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author updateMany
   */
  export type AuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author updateManyAndReturn
   */
  export type AuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * The data used to update Authors.
     */
    data: XOR<AuthorUpdateManyMutationInput, AuthorUncheckedUpdateManyInput>
    /**
     * Filter which Authors to update
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to update.
     */
    limit?: number
  }

  /**
   * Author upsert
   */
  export type AuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the Author to update in case it exists.
     */
    where: AuthorWhereUniqueInput
    /**
     * In case the Author found by the `where` argument doesn't exist, create a new Author with this data.
     */
    create: XOR<AuthorCreateInput, AuthorUncheckedCreateInput>
    /**
     * In case the Author was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorUpdateInput, AuthorUncheckedUpdateInput>
  }

  /**
   * Author delete
   */
  export type AuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
    /**
     * Filter which Author to delete.
     */
    where: AuthorWhereUniqueInput
  }

  /**
   * Author deleteMany
   */
  export type AuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Authors to delete
     */
    where?: AuthorWhereInput
    /**
     * Limit how many Authors to delete.
     */
    limit?: number
  }

  /**
   * Author.AuthorBooks
   */
  export type Author$AuthorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    where?: AuthorBooksWhereInput
    orderBy?: AuthorBooksOrderByWithRelationInput | AuthorBooksOrderByWithRelationInput[]
    cursor?: AuthorBooksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorBooksScalarFieldEnum | AuthorBooksScalarFieldEnum[]
  }

  /**
   * Author.AuthorDocuments
   */
  export type Author$AuthorDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    where?: AuthorDocumentsWhereInput
    orderBy?: AuthorDocumentsOrderByWithRelationInput | AuthorDocumentsOrderByWithRelationInput[]
    cursor?: AuthorDocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorDocumentsScalarFieldEnum | AuthorDocumentsScalarFieldEnum[]
  }

  /**
   * Author without action
   */
  export type AuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Author
     */
    select?: AuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Author
     */
    omit?: AuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorInclude<ExtArgs> | null
  }


  /**
   * Model Book
   */

  export type AggregateBook = {
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  export type BookAvgAggregateOutputType = {
    id: number | null
  }

  export type BookSumAggregateOutputType = {
    id: number | null
  }

  export type BookMinAggregateOutputType = {
    id: number | null
    book_title: string | null
    publisher: string | null
    translator: string | null
    publish_date: string | null
    publish_location: string | null
    country: string | null
    description: string | null
    link: string | null
    language: string | null
    isbn: string | null
  }

  export type BookMaxAggregateOutputType = {
    id: number | null
    book_title: string | null
    publisher: string | null
    translator: string | null
    publish_date: string | null
    publish_location: string | null
    country: string | null
    description: string | null
    link: string | null
    language: string | null
    isbn: string | null
  }

  export type BookCountAggregateOutputType = {
    id: number
    book_title: number
    publisher: number
    translator: number
    publish_date: number
    publish_location: number
    country: number
    description: number
    link: number
    language: number
    isbn: number
    _all: number
  }


  export type BookAvgAggregateInputType = {
    id?: true
  }

  export type BookSumAggregateInputType = {
    id?: true
  }

  export type BookMinAggregateInputType = {
    id?: true
    book_title?: true
    publisher?: true
    translator?: true
    publish_date?: true
    publish_location?: true
    country?: true
    description?: true
    link?: true
    language?: true
    isbn?: true
  }

  export type BookMaxAggregateInputType = {
    id?: true
    book_title?: true
    publisher?: true
    translator?: true
    publish_date?: true
    publish_location?: true
    country?: true
    description?: true
    link?: true
    language?: true
    isbn?: true
  }

  export type BookCountAggregateInputType = {
    id?: true
    book_title?: true
    publisher?: true
    translator?: true
    publish_date?: true
    publish_location?: true
    country?: true
    description?: true
    link?: true
    language?: true
    isbn?: true
    _all?: true
  }

  export type BookAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Book to aggregate.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Books
    **/
    _count?: true | BookCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookMaxAggregateInputType
  }

  export type GetBookAggregateType<T extends BookAggregateArgs> = {
        [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBook[P]>
      : GetScalarType<T[P], AggregateBook[P]>
  }




  export type BookGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookWhereInput
    orderBy?: BookOrderByWithAggregationInput | BookOrderByWithAggregationInput[]
    by: BookScalarFieldEnum[] | BookScalarFieldEnum
    having?: BookScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookCountAggregateInputType | true
    _avg?: BookAvgAggregateInputType
    _sum?: BookSumAggregateInputType
    _min?: BookMinAggregateInputType
    _max?: BookMaxAggregateInputType
  }

  export type BookGroupByOutputType = {
    id: number
    book_title: string
    publisher: string
    translator: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    _count: BookCountAggregateOutputType | null
    _avg: BookAvgAggregateOutputType | null
    _sum: BookSumAggregateOutputType | null
    _min: BookMinAggregateOutputType | null
    _max: BookMaxAggregateOutputType | null
  }

  type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookGroupByOutputType[P]>
            : GetScalarType<T[P], BookGroupByOutputType[P]>
        }
      >
    >


  export type BookSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_title?: boolean
    publisher?: boolean
    translator?: boolean
    publish_date?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
    isbn?: boolean
    AuthorBooks?: boolean | Book$AuthorBooksArgs<ExtArgs>
    CategoryList?: boolean | Book$CategoryListArgs<ExtArgs>
    KeywordList?: boolean | Book$KeywordListArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["book"]>

  export type BookSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_title?: boolean
    publisher?: boolean
    translator?: boolean
    publish_date?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
    isbn?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_title?: boolean
    publisher?: boolean
    translator?: boolean
    publish_date?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
    isbn?: boolean
  }, ExtArgs["result"]["book"]>

  export type BookSelectScalar = {
    id?: boolean
    book_title?: boolean
    publisher?: boolean
    translator?: boolean
    publish_date?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
    isbn?: boolean
  }

  export type BookOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_title" | "publisher" | "translator" | "publish_date" | "publish_location" | "country" | "description" | "link" | "language" | "isbn", ExtArgs["result"]["book"]>
  export type BookInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthorBooks?: boolean | Book$AuthorBooksArgs<ExtArgs>
    CategoryList?: boolean | Book$CategoryListArgs<ExtArgs>
    KeywordList?: boolean | Book$KeywordListArgs<ExtArgs>
    _count?: boolean | BookCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BookIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BookPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Book"
    objects: {
      AuthorBooks: Prisma.$AuthorBooksPayload<ExtArgs>[]
      CategoryList: Prisma.$CategoryListPayload<ExtArgs>[]
      KeywordList: Prisma.$KeywordListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book_title: string
      publisher: string
      translator: string | null
      publish_date: string
      publish_location: string
      country: string
      description: string
      link: string
      language: string
      isbn: string
    }, ExtArgs["result"]["book"]>
    composites: {}
  }

  type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = $Result.GetResult<Prisma.$BookPayload, S>

  type BookCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BookCountAggregateInputType | true
    }

  export interface BookDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Book'], meta: { name: 'Book' } }
    /**
     * Find zero or one Book that matches the filter.
     * @param {BookFindUniqueArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookFindUniqueArgs>(args: SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Book that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BookFindUniqueOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookFindFirstArgs>(args?: SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Book that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindFirstOrThrowArgs} args - Arguments to find a Book
     * @example
     * // Get one Book
     * const book = await prisma.book.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Books that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Books
     * const books = await prisma.book.findMany()
     * 
     * // Get first 10 Books
     * const books = await prisma.book.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookWithIdOnly = await prisma.book.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookFindManyArgs>(args?: SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Book.
     * @param {BookCreateArgs} args - Arguments to create a Book.
     * @example
     * // Create one Book
     * const Book = await prisma.book.create({
     *   data: {
     *     // ... data to create a Book
     *   }
     * })
     * 
     */
    create<T extends BookCreateArgs>(args: SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Books.
     * @param {BookCreateManyArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookCreateManyArgs>(args?: SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Books and returns the data saved in the database.
     * @param {BookCreateManyAndReturnArgs} args - Arguments to create many Books.
     * @example
     * // Create many Books
     * const book = await prisma.book.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Book.
     * @param {BookDeleteArgs} args - Arguments to delete one Book.
     * @example
     * // Delete one Book
     * const Book = await prisma.book.delete({
     *   where: {
     *     // ... filter to delete one Book
     *   }
     * })
     * 
     */
    delete<T extends BookDeleteArgs>(args: SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Book.
     * @param {BookUpdateArgs} args - Arguments to update one Book.
     * @example
     * // Update one Book
     * const book = await prisma.book.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookUpdateArgs>(args: SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Books.
     * @param {BookDeleteManyArgs} args - Arguments to filter Books to delete.
     * @example
     * // Delete a few Books
     * const { count } = await prisma.book.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookDeleteManyArgs>(args?: SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookUpdateManyArgs>(args: SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Books and returns the data updated in the database.
     * @param {BookUpdateManyAndReturnArgs} args - Arguments to update many Books.
     * @example
     * // Update many Books
     * const book = await prisma.book.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Books and only return the `id`
     * const bookWithIdOnly = await prisma.book.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Book.
     * @param {BookUpsertArgs} args - Arguments to update or create a Book.
     * @example
     * // Update or create a Book
     * const book = await prisma.book.upsert({
     *   create: {
     *     // ... data to create a Book
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Book we want to update
     *   }
     * })
     */
    upsert<T extends BookUpsertArgs>(args: SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Books.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookCountArgs} args - Arguments to filter Books to count.
     * @example
     * // Count the number of Books
     * const count = await prisma.book.count({
     *   where: {
     *     // ... the filter for the Books we want to count
     *   }
     * })
    **/
    count<T extends BookCountArgs>(
      args?: Subset<T, BookCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BookAggregateArgs>(args: Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>

    /**
     * Group by Book.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BookGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookGroupByArgs['orderBy'] }
        : { orderBy?: BookGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Book model
   */
  readonly fields: BookFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Book.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AuthorBooks<T extends Book$AuthorBooksArgs<ExtArgs> = {}>(args?: Subset<T, Book$AuthorBooksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CategoryList<T extends Book$CategoryListArgs<ExtArgs> = {}>(args?: Subset<T, Book$CategoryListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    KeywordList<T extends Book$KeywordListArgs<ExtArgs> = {}>(args?: Subset<T, Book$KeywordListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Book model
   */
  interface BookFieldRefs {
    readonly id: FieldRef<"Book", 'Int'>
    readonly book_title: FieldRef<"Book", 'String'>
    readonly publisher: FieldRef<"Book", 'String'>
    readonly translator: FieldRef<"Book", 'String'>
    readonly publish_date: FieldRef<"Book", 'String'>
    readonly publish_location: FieldRef<"Book", 'String'>
    readonly country: FieldRef<"Book", 'String'>
    readonly description: FieldRef<"Book", 'String'>
    readonly link: FieldRef<"Book", 'String'>
    readonly language: FieldRef<"Book", 'String'>
    readonly isbn: FieldRef<"Book", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Book findUnique
   */
  export type BookFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findUniqueOrThrow
   */
  export type BookFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book findFirst
   */
  export type BookFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findFirstOrThrow
   */
  export type BookFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Book to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Books.
     */
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book findMany
   */
  export type BookFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter, which Books to fetch.
     */
    where?: BookWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Books to fetch.
     */
    orderBy?: BookOrderByWithRelationInput | BookOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Books.
     */
    cursor?: BookWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Books from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Books.
     */
    skip?: number
    distinct?: BookScalarFieldEnum | BookScalarFieldEnum[]
  }

  /**
   * Book create
   */
  export type BookCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to create a Book.
     */
    data: XOR<BookCreateInput, BookUncheckedCreateInput>
  }

  /**
   * Book createMany
   */
  export type BookCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book createManyAndReturn
   */
  export type BookCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to create many Books.
     */
    data: BookCreateManyInput | BookCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Book update
   */
  export type BookUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The data needed to update a Book.
     */
    data: XOR<BookUpdateInput, BookUncheckedUpdateInput>
    /**
     * Choose, which Book to update.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book updateMany
   */
  export type BookUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book updateManyAndReturn
   */
  export type BookUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * The data used to update Books.
     */
    data: XOR<BookUpdateManyMutationInput, BookUncheckedUpdateManyInput>
    /**
     * Filter which Books to update
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to update.
     */
    limit?: number
  }

  /**
   * Book upsert
   */
  export type BookUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * The filter to search for the Book to update in case it exists.
     */
    where: BookWhereUniqueInput
    /**
     * In case the Book found by the `where` argument doesn't exist, create a new Book with this data.
     */
    create: XOR<BookCreateInput, BookUncheckedCreateInput>
    /**
     * In case the Book was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookUpdateInput, BookUncheckedUpdateInput>
  }

  /**
   * Book delete
   */
  export type BookDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    /**
     * Filter which Book to delete.
     */
    where: BookWhereUniqueInput
  }

  /**
   * Book deleteMany
   */
  export type BookDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Books to delete
     */
    where?: BookWhereInput
    /**
     * Limit how many Books to delete.
     */
    limit?: number
  }

  /**
   * Book.AuthorBooks
   */
  export type Book$AuthorBooksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    where?: AuthorBooksWhereInput
    orderBy?: AuthorBooksOrderByWithRelationInput | AuthorBooksOrderByWithRelationInput[]
    cursor?: AuthorBooksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorBooksScalarFieldEnum | AuthorBooksScalarFieldEnum[]
  }

  /**
   * Book.CategoryList
   */
  export type Book$CategoryListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    where?: CategoryListWhereInput
    orderBy?: CategoryListOrderByWithRelationInput | CategoryListOrderByWithRelationInput[]
    cursor?: CategoryListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryListScalarFieldEnum | CategoryListScalarFieldEnum[]
  }

  /**
   * Book.KeywordList
   */
  export type Book$KeywordListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    where?: KeywordListWhereInput
    orderBy?: KeywordListOrderByWithRelationInput | KeywordListOrderByWithRelationInput[]
    cursor?: KeywordListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordListScalarFieldEnum | KeywordListScalarFieldEnum[]
  }

  /**
   * Book without action
   */
  export type BookDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
  }


  /**
   * Model Document
   */

  export type AggregateDocument = {
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  export type DocumentAvgAggregateOutputType = {
    id: number | null
  }

  export type DocumentSumAggregateOutputType = {
    id: number | null
  }

  export type DocumentMinAggregateOutputType = {
    id: number | null
    document_title: string | null
    translator: string | null
    publish_date: string | null
    publisher: string | null
    publish_location: string | null
    country: string | null
    description: string | null
    link: string | null
    language: string | null
  }

  export type DocumentMaxAggregateOutputType = {
    id: number | null
    document_title: string | null
    translator: string | null
    publish_date: string | null
    publisher: string | null
    publish_location: string | null
    country: string | null
    description: string | null
    link: string | null
    language: string | null
  }

  export type DocumentCountAggregateOutputType = {
    id: number
    document_title: number
    translator: number
    publish_date: number
    publisher: number
    publish_location: number
    country: number
    description: number
    link: number
    language: number
    _all: number
  }


  export type DocumentAvgAggregateInputType = {
    id?: true
  }

  export type DocumentSumAggregateInputType = {
    id?: true
  }

  export type DocumentMinAggregateInputType = {
    id?: true
    document_title?: true
    translator?: true
    publish_date?: true
    publisher?: true
    publish_location?: true
    country?: true
    description?: true
    link?: true
    language?: true
  }

  export type DocumentMaxAggregateInputType = {
    id?: true
    document_title?: true
    translator?: true
    publish_date?: true
    publisher?: true
    publish_location?: true
    country?: true
    description?: true
    link?: true
    language?: true
  }

  export type DocumentCountAggregateInputType = {
    id?: true
    document_title?: true
    translator?: true
    publish_date?: true
    publisher?: true
    publish_location?: true
    country?: true
    description?: true
    link?: true
    language?: true
    _all?: true
  }

  export type DocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Document to aggregate.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Documents
    **/
    _count?: true | DocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentMaxAggregateInputType
  }

  export type GetDocumentAggregateType<T extends DocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocument[P]>
      : GetScalarType<T[P], AggregateDocument[P]>
  }




  export type DocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentWhereInput
    orderBy?: DocumentOrderByWithAggregationInput | DocumentOrderByWithAggregationInput[]
    by: DocumentScalarFieldEnum[] | DocumentScalarFieldEnum
    having?: DocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentCountAggregateInputType | true
    _avg?: DocumentAvgAggregateInputType
    _sum?: DocumentSumAggregateInputType
    _min?: DocumentMinAggregateInputType
    _max?: DocumentMaxAggregateInputType
  }

  export type DocumentGroupByOutputType = {
    id: number
    document_title: string
    translator: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    _count: DocumentCountAggregateOutputType | null
    _avg: DocumentAvgAggregateOutputType | null
    _sum: DocumentSumAggregateOutputType | null
    _min: DocumentMinAggregateOutputType | null
    _max: DocumentMaxAggregateOutputType | null
  }

  type GetDocumentGroupByPayload<T extends DocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentGroupByOutputType[P]>
        }
      >
    >


  export type DocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_title?: boolean
    translator?: boolean
    publish_date?: boolean
    publisher?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
    AuthorDocuments?: boolean | Document$AuthorDocumentsArgs<ExtArgs>
    CategoryList?: boolean | Document$CategoryListArgs<ExtArgs>
    KeywordList?: boolean | Document$KeywordListArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_title?: boolean
    translator?: boolean
    publish_date?: boolean
    publisher?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_title?: boolean
    translator?: boolean
    publish_date?: boolean
    publisher?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
  }, ExtArgs["result"]["document"]>

  export type DocumentSelectScalar = {
    id?: boolean
    document_title?: boolean
    translator?: boolean
    publish_date?: boolean
    publisher?: boolean
    publish_location?: boolean
    country?: boolean
    description?: boolean
    link?: boolean
    language?: boolean
  }

  export type DocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_title" | "translator" | "publish_date" | "publisher" | "publish_location" | "country" | "description" | "link" | "language", ExtArgs["result"]["document"]>
  export type DocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    AuthorDocuments?: boolean | Document$AuthorDocumentsArgs<ExtArgs>
    CategoryList?: boolean | Document$CategoryListArgs<ExtArgs>
    KeywordList?: boolean | Document$KeywordListArgs<ExtArgs>
    _count?: boolean | DocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Document"
    objects: {
      AuthorDocuments: Prisma.$AuthorDocumentsPayload<ExtArgs>[]
      CategoryList: Prisma.$CategoryListPayload<ExtArgs>[]
      KeywordList: Prisma.$KeywordListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      document_title: string
      translator: string | null
      publish_date: string
      publisher: string
      publish_location: string
      country: string
      description: string
      link: string
      language: string
    }, ExtArgs["result"]["document"]>
    composites: {}
  }

  type DocumentGetPayload<S extends boolean | null | undefined | DocumentDefaultArgs> = $Result.GetResult<Prisma.$DocumentPayload, S>

  type DocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentCountAggregateInputType | true
    }

  export interface DocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Document'], meta: { name: 'Document' } }
    /**
     * Find zero or one Document that matches the filter.
     * @param {DocumentFindUniqueArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentFindUniqueArgs>(args: SelectSubset<T, DocumentFindUniqueArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Document that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentFindUniqueOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentFindFirstArgs>(args?: SelectSubset<T, DocumentFindFirstArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Document that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindFirstOrThrowArgs} args - Arguments to find a Document
     * @example
     * // Get one Document
     * const document = await prisma.document.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Documents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Documents
     * const documents = await prisma.document.findMany()
     * 
     * // Get first 10 Documents
     * const documents = await prisma.document.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentWithIdOnly = await prisma.document.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentFindManyArgs>(args?: SelectSubset<T, DocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Document.
     * @param {DocumentCreateArgs} args - Arguments to create a Document.
     * @example
     * // Create one Document
     * const Document = await prisma.document.create({
     *   data: {
     *     // ... data to create a Document
     *   }
     * })
     * 
     */
    create<T extends DocumentCreateArgs>(args: SelectSubset<T, DocumentCreateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Documents.
     * @param {DocumentCreateManyArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentCreateManyArgs>(args?: SelectSubset<T, DocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Documents and returns the data saved in the database.
     * @param {DocumentCreateManyAndReturnArgs} args - Arguments to create many Documents.
     * @example
     * // Create many Documents
     * const document = await prisma.document.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Document.
     * @param {DocumentDeleteArgs} args - Arguments to delete one Document.
     * @example
     * // Delete one Document
     * const Document = await prisma.document.delete({
     *   where: {
     *     // ... filter to delete one Document
     *   }
     * })
     * 
     */
    delete<T extends DocumentDeleteArgs>(args: SelectSubset<T, DocumentDeleteArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Document.
     * @param {DocumentUpdateArgs} args - Arguments to update one Document.
     * @example
     * // Update one Document
     * const document = await prisma.document.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentUpdateArgs>(args: SelectSubset<T, DocumentUpdateArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Documents.
     * @param {DocumentDeleteManyArgs} args - Arguments to filter Documents to delete.
     * @example
     * // Delete a few Documents
     * const { count } = await prisma.document.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentDeleteManyArgs>(args?: SelectSubset<T, DocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentUpdateManyArgs>(args: SelectSubset<T, DocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Documents and returns the data updated in the database.
     * @param {DocumentUpdateManyAndReturnArgs} args - Arguments to update many Documents.
     * @example
     * // Update many Documents
     * const document = await prisma.document.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Documents and only return the `id`
     * const documentWithIdOnly = await prisma.document.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Document.
     * @param {DocumentUpsertArgs} args - Arguments to update or create a Document.
     * @example
     * // Update or create a Document
     * const document = await prisma.document.upsert({
     *   create: {
     *     // ... data to create a Document
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Document we want to update
     *   }
     * })
     */
    upsert<T extends DocumentUpsertArgs>(args: SelectSubset<T, DocumentUpsertArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Documents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentCountArgs} args - Arguments to filter Documents to count.
     * @example
     * // Count the number of Documents
     * const count = await prisma.document.count({
     *   where: {
     *     // ... the filter for the Documents we want to count
     *   }
     * })
    **/
    count<T extends DocumentCountArgs>(
      args?: Subset<T, DocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentAggregateArgs>(args: Subset<T, DocumentAggregateArgs>): Prisma.PrismaPromise<GetDocumentAggregateType<T>>

    /**
     * Group by Document.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentGroupByArgs['orderBy'] }
        : { orderBy?: DocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Document model
   */
  readonly fields: DocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Document.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    AuthorDocuments<T extends Document$AuthorDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Document$AuthorDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    CategoryList<T extends Document$CategoryListArgs<ExtArgs> = {}>(args?: Subset<T, Document$CategoryListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    KeywordList<T extends Document$KeywordListArgs<ExtArgs> = {}>(args?: Subset<T, Document$KeywordListArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Document model
   */
  interface DocumentFieldRefs {
    readonly id: FieldRef<"Document", 'Int'>
    readonly document_title: FieldRef<"Document", 'String'>
    readonly translator: FieldRef<"Document", 'String'>
    readonly publish_date: FieldRef<"Document", 'String'>
    readonly publisher: FieldRef<"Document", 'String'>
    readonly publish_location: FieldRef<"Document", 'String'>
    readonly country: FieldRef<"Document", 'String'>
    readonly description: FieldRef<"Document", 'String'>
    readonly link: FieldRef<"Document", 'String'>
    readonly language: FieldRef<"Document", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Document findUnique
   */
  export type DocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findUniqueOrThrow
   */
  export type DocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document findFirst
   */
  export type DocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findFirstOrThrow
   */
  export type DocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Document to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Documents.
     */
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document findMany
   */
  export type DocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter, which Documents to fetch.
     */
    where?: DocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Documents to fetch.
     */
    orderBy?: DocumentOrderByWithRelationInput | DocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Documents.
     */
    cursor?: DocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Documents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Documents.
     */
    skip?: number
    distinct?: DocumentScalarFieldEnum | DocumentScalarFieldEnum[]
  }

  /**
   * Document create
   */
  export type DocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a Document.
     */
    data: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
  }

  /**
   * Document createMany
   */
  export type DocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document createManyAndReturn
   */
  export type DocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to create many Documents.
     */
    data: DocumentCreateManyInput | DocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Document update
   */
  export type DocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a Document.
     */
    data: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
    /**
     * Choose, which Document to update.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document updateMany
   */
  export type DocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document updateManyAndReturn
   */
  export type DocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * The data used to update Documents.
     */
    data: XOR<DocumentUpdateManyMutationInput, DocumentUncheckedUpdateManyInput>
    /**
     * Filter which Documents to update
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to update.
     */
    limit?: number
  }

  /**
   * Document upsert
   */
  export type DocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the Document to update in case it exists.
     */
    where: DocumentWhereUniqueInput
    /**
     * In case the Document found by the `where` argument doesn't exist, create a new Document with this data.
     */
    create: XOR<DocumentCreateInput, DocumentUncheckedCreateInput>
    /**
     * In case the Document was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentUpdateInput, DocumentUncheckedUpdateInput>
  }

  /**
   * Document delete
   */
  export type DocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    /**
     * Filter which Document to delete.
     */
    where: DocumentWhereUniqueInput
  }

  /**
   * Document deleteMany
   */
  export type DocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Documents to delete
     */
    where?: DocumentWhereInput
    /**
     * Limit how many Documents to delete.
     */
    limit?: number
  }

  /**
   * Document.AuthorDocuments
   */
  export type Document$AuthorDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    where?: AuthorDocumentsWhereInput
    orderBy?: AuthorDocumentsOrderByWithRelationInput | AuthorDocumentsOrderByWithRelationInput[]
    cursor?: AuthorDocumentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthorDocumentsScalarFieldEnum | AuthorDocumentsScalarFieldEnum[]
  }

  /**
   * Document.CategoryList
   */
  export type Document$CategoryListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    where?: CategoryListWhereInput
    orderBy?: CategoryListOrderByWithRelationInput | CategoryListOrderByWithRelationInput[]
    cursor?: CategoryListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryListScalarFieldEnum | CategoryListScalarFieldEnum[]
  }

  /**
   * Document.KeywordList
   */
  export type Document$KeywordListArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    where?: KeywordListWhereInput
    orderBy?: KeywordListOrderByWithRelationInput | KeywordListOrderByWithRelationInput[]
    cursor?: KeywordListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: KeywordListScalarFieldEnum | KeywordListScalarFieldEnum[]
  }

  /**
   * Document without action
   */
  export type DocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
  }


  /**
   * Model AuthorBooks
   */

  export type AggregateAuthorBooks = {
    _count: AuthorBooksCountAggregateOutputType | null
    _avg: AuthorBooksAvgAggregateOutputType | null
    _sum: AuthorBooksSumAggregateOutputType | null
    _min: AuthorBooksMinAggregateOutputType | null
    _max: AuthorBooksMaxAggregateOutputType | null
  }

  export type AuthorBooksAvgAggregateOutputType = {
    author_id: number | null
    book_id: number | null
  }

  export type AuthorBooksSumAggregateOutputType = {
    author_id: number | null
    book_id: number | null
  }

  export type AuthorBooksMinAggregateOutputType = {
    author_id: number | null
    book_id: number | null
  }

  export type AuthorBooksMaxAggregateOutputType = {
    author_id: number | null
    book_id: number | null
  }

  export type AuthorBooksCountAggregateOutputType = {
    author_id: number
    book_id: number
    _all: number
  }


  export type AuthorBooksAvgAggregateInputType = {
    author_id?: true
    book_id?: true
  }

  export type AuthorBooksSumAggregateInputType = {
    author_id?: true
    book_id?: true
  }

  export type AuthorBooksMinAggregateInputType = {
    author_id?: true
    book_id?: true
  }

  export type AuthorBooksMaxAggregateInputType = {
    author_id?: true
    book_id?: true
  }

  export type AuthorBooksCountAggregateInputType = {
    author_id?: true
    book_id?: true
    _all?: true
  }

  export type AuthorBooksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorBooks to aggregate.
     */
    where?: AuthorBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBooksOrderByWithRelationInput | AuthorBooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorBooks
    **/
    _count?: true | AuthorBooksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorBooksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorBooksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorBooksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorBooksMaxAggregateInputType
  }

  export type GetAuthorBooksAggregateType<T extends AuthorBooksAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorBooks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorBooks[P]>
      : GetScalarType<T[P], AggregateAuthorBooks[P]>
  }




  export type AuthorBooksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorBooksWhereInput
    orderBy?: AuthorBooksOrderByWithAggregationInput | AuthorBooksOrderByWithAggregationInput[]
    by: AuthorBooksScalarFieldEnum[] | AuthorBooksScalarFieldEnum
    having?: AuthorBooksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorBooksCountAggregateInputType | true
    _avg?: AuthorBooksAvgAggregateInputType
    _sum?: AuthorBooksSumAggregateInputType
    _min?: AuthorBooksMinAggregateInputType
    _max?: AuthorBooksMaxAggregateInputType
  }

  export type AuthorBooksGroupByOutputType = {
    author_id: number
    book_id: number
    _count: AuthorBooksCountAggregateOutputType | null
    _avg: AuthorBooksAvgAggregateOutputType | null
    _sum: AuthorBooksSumAggregateOutputType | null
    _min: AuthorBooksMinAggregateOutputType | null
    _max: AuthorBooksMaxAggregateOutputType | null
  }

  type GetAuthorBooksGroupByPayload<T extends AuthorBooksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorBooksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorBooksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorBooksGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorBooksGroupByOutputType[P]>
        }
      >
    >


  export type AuthorBooksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    book_id?: boolean
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorBooks"]>

  export type AuthorBooksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    book_id?: boolean
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorBooks"]>

  export type AuthorBooksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    book_id?: boolean
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorBooks"]>

  export type AuthorBooksSelectScalar = {
    author_id?: boolean
    book_id?: boolean
  }

  export type AuthorBooksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"author_id" | "book_id", ExtArgs["result"]["authorBooks"]>
  export type AuthorBooksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type AuthorBooksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
  }
  export type AuthorBooksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Book?: boolean | BookDefaultArgs<ExtArgs>
  }

  export type $AuthorBooksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorBooks"
    objects: {
      Author: Prisma.$AuthorPayload<ExtArgs>
      Book: Prisma.$BookPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      author_id: number
      book_id: number
    }, ExtArgs["result"]["authorBooks"]>
    composites: {}
  }

  type AuthorBooksGetPayload<S extends boolean | null | undefined | AuthorBooksDefaultArgs> = $Result.GetResult<Prisma.$AuthorBooksPayload, S>

  type AuthorBooksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorBooksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorBooksCountAggregateInputType | true
    }

  export interface AuthorBooksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorBooks'], meta: { name: 'AuthorBooks' } }
    /**
     * Find zero or one AuthorBooks that matches the filter.
     * @param {AuthorBooksFindUniqueArgs} args - Arguments to find a AuthorBooks
     * @example
     * // Get one AuthorBooks
     * const authorBooks = await prisma.authorBooks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorBooksFindUniqueArgs>(args: SelectSubset<T, AuthorBooksFindUniqueArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthorBooks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorBooksFindUniqueOrThrowArgs} args - Arguments to find a AuthorBooks
     * @example
     * // Get one AuthorBooks
     * const authorBooks = await prisma.authorBooks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorBooksFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorBooksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBooksFindFirstArgs} args - Arguments to find a AuthorBooks
     * @example
     * // Get one AuthorBooks
     * const authorBooks = await prisma.authorBooks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorBooksFindFirstArgs>(args?: SelectSubset<T, AuthorBooksFindFirstArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorBooks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBooksFindFirstOrThrowArgs} args - Arguments to find a AuthorBooks
     * @example
     * // Get one AuthorBooks
     * const authorBooks = await prisma.authorBooks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorBooksFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorBooksFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthorBooks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBooksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorBooks
     * const authorBooks = await prisma.authorBooks.findMany()
     * 
     * // Get first 10 AuthorBooks
     * const authorBooks = await prisma.authorBooks.findMany({ take: 10 })
     * 
     * // Only select the `author_id`
     * const authorBooksWithAuthor_idOnly = await prisma.authorBooks.findMany({ select: { author_id: true } })
     * 
     */
    findMany<T extends AuthorBooksFindManyArgs>(args?: SelectSubset<T, AuthorBooksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthorBooks.
     * @param {AuthorBooksCreateArgs} args - Arguments to create a AuthorBooks.
     * @example
     * // Create one AuthorBooks
     * const AuthorBooks = await prisma.authorBooks.create({
     *   data: {
     *     // ... data to create a AuthorBooks
     *   }
     * })
     * 
     */
    create<T extends AuthorBooksCreateArgs>(args: SelectSubset<T, AuthorBooksCreateArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthorBooks.
     * @param {AuthorBooksCreateManyArgs} args - Arguments to create many AuthorBooks.
     * @example
     * // Create many AuthorBooks
     * const authorBooks = await prisma.authorBooks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorBooksCreateManyArgs>(args?: SelectSubset<T, AuthorBooksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthorBooks and returns the data saved in the database.
     * @param {AuthorBooksCreateManyAndReturnArgs} args - Arguments to create many AuthorBooks.
     * @example
     * // Create many AuthorBooks
     * const authorBooks = await prisma.authorBooks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthorBooks and only return the `author_id`
     * const authorBooksWithAuthor_idOnly = await prisma.authorBooks.createManyAndReturn({
     *   select: { author_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorBooksCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorBooksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthorBooks.
     * @param {AuthorBooksDeleteArgs} args - Arguments to delete one AuthorBooks.
     * @example
     * // Delete one AuthorBooks
     * const AuthorBooks = await prisma.authorBooks.delete({
     *   where: {
     *     // ... filter to delete one AuthorBooks
     *   }
     * })
     * 
     */
    delete<T extends AuthorBooksDeleteArgs>(args: SelectSubset<T, AuthorBooksDeleteArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthorBooks.
     * @param {AuthorBooksUpdateArgs} args - Arguments to update one AuthorBooks.
     * @example
     * // Update one AuthorBooks
     * const authorBooks = await prisma.authorBooks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorBooksUpdateArgs>(args: SelectSubset<T, AuthorBooksUpdateArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthorBooks.
     * @param {AuthorBooksDeleteManyArgs} args - Arguments to filter AuthorBooks to delete.
     * @example
     * // Delete a few AuthorBooks
     * const { count } = await prisma.authorBooks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorBooksDeleteManyArgs>(args?: SelectSubset<T, AuthorBooksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBooksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorBooks
     * const authorBooks = await prisma.authorBooks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorBooksUpdateManyArgs>(args: SelectSubset<T, AuthorBooksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorBooks and returns the data updated in the database.
     * @param {AuthorBooksUpdateManyAndReturnArgs} args - Arguments to update many AuthorBooks.
     * @example
     * // Update many AuthorBooks
     * const authorBooks = await prisma.authorBooks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthorBooks and only return the `author_id`
     * const authorBooksWithAuthor_idOnly = await prisma.authorBooks.updateManyAndReturn({
     *   select: { author_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorBooksUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorBooksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthorBooks.
     * @param {AuthorBooksUpsertArgs} args - Arguments to update or create a AuthorBooks.
     * @example
     * // Update or create a AuthorBooks
     * const authorBooks = await prisma.authorBooks.upsert({
     *   create: {
     *     // ... data to create a AuthorBooks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorBooks we want to update
     *   }
     * })
     */
    upsert<T extends AuthorBooksUpsertArgs>(args: SelectSubset<T, AuthorBooksUpsertArgs<ExtArgs>>): Prisma__AuthorBooksClient<$Result.GetResult<Prisma.$AuthorBooksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBooksCountArgs} args - Arguments to filter AuthorBooks to count.
     * @example
     * // Count the number of AuthorBooks
     * const count = await prisma.authorBooks.count({
     *   where: {
     *     // ... the filter for the AuthorBooks we want to count
     *   }
     * })
    **/
    count<T extends AuthorBooksCountArgs>(
      args?: Subset<T, AuthorBooksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorBooksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBooksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorBooksAggregateArgs>(args: Subset<T, AuthorBooksAggregateArgs>): Prisma.PrismaPromise<GetAuthorBooksAggregateType<T>>

    /**
     * Group by AuthorBooks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorBooksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorBooksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorBooksGroupByArgs['orderBy'] }
        : { orderBy?: AuthorBooksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorBooksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorBooksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorBooks model
   */
  readonly fields: AuthorBooksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorBooks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorBooksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Book<T extends BookDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookDefaultArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthorBooks model
   */
  interface AuthorBooksFieldRefs {
    readonly author_id: FieldRef<"AuthorBooks", 'Int'>
    readonly book_id: FieldRef<"AuthorBooks", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AuthorBooks findUnique
   */
  export type AuthorBooksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBooks to fetch.
     */
    where: AuthorBooksWhereUniqueInput
  }

  /**
   * AuthorBooks findUniqueOrThrow
   */
  export type AuthorBooksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBooks to fetch.
     */
    where: AuthorBooksWhereUniqueInput
  }

  /**
   * AuthorBooks findFirst
   */
  export type AuthorBooksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBooks to fetch.
     */
    where?: AuthorBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBooksOrderByWithRelationInput | AuthorBooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorBooks.
     */
    cursor?: AuthorBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorBooks.
     */
    distinct?: AuthorBooksScalarFieldEnum | AuthorBooksScalarFieldEnum[]
  }

  /**
   * AuthorBooks findFirstOrThrow
   */
  export type AuthorBooksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBooks to fetch.
     */
    where?: AuthorBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBooksOrderByWithRelationInput | AuthorBooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorBooks.
     */
    cursor?: AuthorBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorBooks.
     */
    distinct?: AuthorBooksScalarFieldEnum | AuthorBooksScalarFieldEnum[]
  }

  /**
   * AuthorBooks findMany
   */
  export type AuthorBooksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * Filter, which AuthorBooks to fetch.
     */
    where?: AuthorBooksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorBooks to fetch.
     */
    orderBy?: AuthorBooksOrderByWithRelationInput | AuthorBooksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorBooks.
     */
    cursor?: AuthorBooksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorBooks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorBooks.
     */
    skip?: number
    distinct?: AuthorBooksScalarFieldEnum | AuthorBooksScalarFieldEnum[]
  }

  /**
   * AuthorBooks create
   */
  export type AuthorBooksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorBooks.
     */
    data: XOR<AuthorBooksCreateInput, AuthorBooksUncheckedCreateInput>
  }

  /**
   * AuthorBooks createMany
   */
  export type AuthorBooksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorBooks.
     */
    data: AuthorBooksCreateManyInput | AuthorBooksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorBooks createManyAndReturn
   */
  export type AuthorBooksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * The data used to create many AuthorBooks.
     */
    data: AuthorBooksCreateManyInput | AuthorBooksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorBooks update
   */
  export type AuthorBooksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorBooks.
     */
    data: XOR<AuthorBooksUpdateInput, AuthorBooksUncheckedUpdateInput>
    /**
     * Choose, which AuthorBooks to update.
     */
    where: AuthorBooksWhereUniqueInput
  }

  /**
   * AuthorBooks updateMany
   */
  export type AuthorBooksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorBooks.
     */
    data: XOR<AuthorBooksUpdateManyMutationInput, AuthorBooksUncheckedUpdateManyInput>
    /**
     * Filter which AuthorBooks to update
     */
    where?: AuthorBooksWhereInput
    /**
     * Limit how many AuthorBooks to update.
     */
    limit?: number
  }

  /**
   * AuthorBooks updateManyAndReturn
   */
  export type AuthorBooksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * The data used to update AuthorBooks.
     */
    data: XOR<AuthorBooksUpdateManyMutationInput, AuthorBooksUncheckedUpdateManyInput>
    /**
     * Filter which AuthorBooks to update
     */
    where?: AuthorBooksWhereInput
    /**
     * Limit how many AuthorBooks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorBooks upsert
   */
  export type AuthorBooksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorBooks to update in case it exists.
     */
    where: AuthorBooksWhereUniqueInput
    /**
     * In case the AuthorBooks found by the `where` argument doesn't exist, create a new AuthorBooks with this data.
     */
    create: XOR<AuthorBooksCreateInput, AuthorBooksUncheckedCreateInput>
    /**
     * In case the AuthorBooks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorBooksUpdateInput, AuthorBooksUncheckedUpdateInput>
  }

  /**
   * AuthorBooks delete
   */
  export type AuthorBooksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
    /**
     * Filter which AuthorBooks to delete.
     */
    where: AuthorBooksWhereUniqueInput
  }

  /**
   * AuthorBooks deleteMany
   */
  export type AuthorBooksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorBooks to delete
     */
    where?: AuthorBooksWhereInput
    /**
     * Limit how many AuthorBooks to delete.
     */
    limit?: number
  }

  /**
   * AuthorBooks without action
   */
  export type AuthorBooksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorBooks
     */
    select?: AuthorBooksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorBooks
     */
    omit?: AuthorBooksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorBooksInclude<ExtArgs> | null
  }


  /**
   * Model AuthorDocuments
   */

  export type AggregateAuthorDocuments = {
    _count: AuthorDocumentsCountAggregateOutputType | null
    _avg: AuthorDocumentsAvgAggregateOutputType | null
    _sum: AuthorDocumentsSumAggregateOutputType | null
    _min: AuthorDocumentsMinAggregateOutputType | null
    _max: AuthorDocumentsMaxAggregateOutputType | null
  }

  export type AuthorDocumentsAvgAggregateOutputType = {
    author_id: number | null
    documents_id: number | null
  }

  export type AuthorDocumentsSumAggregateOutputType = {
    author_id: number | null
    documents_id: number | null
  }

  export type AuthorDocumentsMinAggregateOutputType = {
    author_id: number | null
    documents_id: number | null
  }

  export type AuthorDocumentsMaxAggregateOutputType = {
    author_id: number | null
    documents_id: number | null
  }

  export type AuthorDocumentsCountAggregateOutputType = {
    author_id: number
    documents_id: number
    _all: number
  }


  export type AuthorDocumentsAvgAggregateInputType = {
    author_id?: true
    documents_id?: true
  }

  export type AuthorDocumentsSumAggregateInputType = {
    author_id?: true
    documents_id?: true
  }

  export type AuthorDocumentsMinAggregateInputType = {
    author_id?: true
    documents_id?: true
  }

  export type AuthorDocumentsMaxAggregateInputType = {
    author_id?: true
    documents_id?: true
  }

  export type AuthorDocumentsCountAggregateInputType = {
    author_id?: true
    documents_id?: true
    _all?: true
  }

  export type AuthorDocumentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorDocuments to aggregate.
     */
    where?: AuthorDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorDocuments to fetch.
     */
    orderBy?: AuthorDocumentsOrderByWithRelationInput | AuthorDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthorDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthorDocuments
    **/
    _count?: true | AuthorDocumentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthorDocumentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthorDocumentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthorDocumentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthorDocumentsMaxAggregateInputType
  }

  export type GetAuthorDocumentsAggregateType<T extends AuthorDocumentsAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthorDocuments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthorDocuments[P]>
      : GetScalarType<T[P], AggregateAuthorDocuments[P]>
  }




  export type AuthorDocumentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthorDocumentsWhereInput
    orderBy?: AuthorDocumentsOrderByWithAggregationInput | AuthorDocumentsOrderByWithAggregationInput[]
    by: AuthorDocumentsScalarFieldEnum[] | AuthorDocumentsScalarFieldEnum
    having?: AuthorDocumentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthorDocumentsCountAggregateInputType | true
    _avg?: AuthorDocumentsAvgAggregateInputType
    _sum?: AuthorDocumentsSumAggregateInputType
    _min?: AuthorDocumentsMinAggregateInputType
    _max?: AuthorDocumentsMaxAggregateInputType
  }

  export type AuthorDocumentsGroupByOutputType = {
    author_id: number
    documents_id: number
    _count: AuthorDocumentsCountAggregateOutputType | null
    _avg: AuthorDocumentsAvgAggregateOutputType | null
    _sum: AuthorDocumentsSumAggregateOutputType | null
    _min: AuthorDocumentsMinAggregateOutputType | null
    _max: AuthorDocumentsMaxAggregateOutputType | null
  }

  type GetAuthorDocumentsGroupByPayload<T extends AuthorDocumentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthorDocumentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthorDocumentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthorDocumentsGroupByOutputType[P]>
            : GetScalarType<T[P], AuthorDocumentsGroupByOutputType[P]>
        }
      >
    >


  export type AuthorDocumentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    documents_id?: boolean
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorDocuments"]>

  export type AuthorDocumentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    documents_id?: boolean
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorDocuments"]>

  export type AuthorDocumentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    author_id?: boolean
    documents_id?: boolean
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Document?: boolean | DocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authorDocuments"]>

  export type AuthorDocumentsSelectScalar = {
    author_id?: boolean
    documents_id?: boolean
  }

  export type AuthorDocumentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"author_id" | "documents_id", ExtArgs["result"]["authorDocuments"]>
  export type AuthorDocumentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type AuthorDocumentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Document?: boolean | DocumentDefaultArgs<ExtArgs>
  }
  export type AuthorDocumentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | AuthorDefaultArgs<ExtArgs>
    Document?: boolean | DocumentDefaultArgs<ExtArgs>
  }

  export type $AuthorDocumentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthorDocuments"
    objects: {
      Author: Prisma.$AuthorPayload<ExtArgs>
      Document: Prisma.$DocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      author_id: number
      documents_id: number
    }, ExtArgs["result"]["authorDocuments"]>
    composites: {}
  }

  type AuthorDocumentsGetPayload<S extends boolean | null | undefined | AuthorDocumentsDefaultArgs> = $Result.GetResult<Prisma.$AuthorDocumentsPayload, S>

  type AuthorDocumentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthorDocumentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthorDocumentsCountAggregateInputType | true
    }

  export interface AuthorDocumentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthorDocuments'], meta: { name: 'AuthorDocuments' } }
    /**
     * Find zero or one AuthorDocuments that matches the filter.
     * @param {AuthorDocumentsFindUniqueArgs} args - Arguments to find a AuthorDocuments
     * @example
     * // Get one AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthorDocumentsFindUniqueArgs>(args: SelectSubset<T, AuthorDocumentsFindUniqueArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthorDocuments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthorDocumentsFindUniqueOrThrowArgs} args - Arguments to find a AuthorDocuments
     * @example
     * // Get one AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthorDocumentsFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthorDocumentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorDocumentsFindFirstArgs} args - Arguments to find a AuthorDocuments
     * @example
     * // Get one AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthorDocumentsFindFirstArgs>(args?: SelectSubset<T, AuthorDocumentsFindFirstArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthorDocuments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorDocumentsFindFirstOrThrowArgs} args - Arguments to find a AuthorDocuments
     * @example
     * // Get one AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthorDocumentsFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthorDocumentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthorDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorDocumentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.findMany()
     * 
     * // Get first 10 AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.findMany({ take: 10 })
     * 
     * // Only select the `author_id`
     * const authorDocumentsWithAuthor_idOnly = await prisma.authorDocuments.findMany({ select: { author_id: true } })
     * 
     */
    findMany<T extends AuthorDocumentsFindManyArgs>(args?: SelectSubset<T, AuthorDocumentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthorDocuments.
     * @param {AuthorDocumentsCreateArgs} args - Arguments to create a AuthorDocuments.
     * @example
     * // Create one AuthorDocuments
     * const AuthorDocuments = await prisma.authorDocuments.create({
     *   data: {
     *     // ... data to create a AuthorDocuments
     *   }
     * })
     * 
     */
    create<T extends AuthorDocumentsCreateArgs>(args: SelectSubset<T, AuthorDocumentsCreateArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthorDocuments.
     * @param {AuthorDocumentsCreateManyArgs} args - Arguments to create many AuthorDocuments.
     * @example
     * // Create many AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthorDocumentsCreateManyArgs>(args?: SelectSubset<T, AuthorDocumentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthorDocuments and returns the data saved in the database.
     * @param {AuthorDocumentsCreateManyAndReturnArgs} args - Arguments to create many AuthorDocuments.
     * @example
     * // Create many AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthorDocuments and only return the `author_id`
     * const authorDocumentsWithAuthor_idOnly = await prisma.authorDocuments.createManyAndReturn({
     *   select: { author_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthorDocumentsCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthorDocumentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthorDocuments.
     * @param {AuthorDocumentsDeleteArgs} args - Arguments to delete one AuthorDocuments.
     * @example
     * // Delete one AuthorDocuments
     * const AuthorDocuments = await prisma.authorDocuments.delete({
     *   where: {
     *     // ... filter to delete one AuthorDocuments
     *   }
     * })
     * 
     */
    delete<T extends AuthorDocumentsDeleteArgs>(args: SelectSubset<T, AuthorDocumentsDeleteArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthorDocuments.
     * @param {AuthorDocumentsUpdateArgs} args - Arguments to update one AuthorDocuments.
     * @example
     * // Update one AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthorDocumentsUpdateArgs>(args: SelectSubset<T, AuthorDocumentsUpdateArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthorDocuments.
     * @param {AuthorDocumentsDeleteManyArgs} args - Arguments to filter AuthorDocuments to delete.
     * @example
     * // Delete a few AuthorDocuments
     * const { count } = await prisma.authorDocuments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthorDocumentsDeleteManyArgs>(args?: SelectSubset<T, AuthorDocumentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorDocumentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthorDocumentsUpdateManyArgs>(args: SelectSubset<T, AuthorDocumentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthorDocuments and returns the data updated in the database.
     * @param {AuthorDocumentsUpdateManyAndReturnArgs} args - Arguments to update many AuthorDocuments.
     * @example
     * // Update many AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthorDocuments and only return the `author_id`
     * const authorDocumentsWithAuthor_idOnly = await prisma.authorDocuments.updateManyAndReturn({
     *   select: { author_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthorDocumentsUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthorDocumentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthorDocuments.
     * @param {AuthorDocumentsUpsertArgs} args - Arguments to update or create a AuthorDocuments.
     * @example
     * // Update or create a AuthorDocuments
     * const authorDocuments = await prisma.authorDocuments.upsert({
     *   create: {
     *     // ... data to create a AuthorDocuments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthorDocuments we want to update
     *   }
     * })
     */
    upsert<T extends AuthorDocumentsUpsertArgs>(args: SelectSubset<T, AuthorDocumentsUpsertArgs<ExtArgs>>): Prisma__AuthorDocumentsClient<$Result.GetResult<Prisma.$AuthorDocumentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthorDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorDocumentsCountArgs} args - Arguments to filter AuthorDocuments to count.
     * @example
     * // Count the number of AuthorDocuments
     * const count = await prisma.authorDocuments.count({
     *   where: {
     *     // ... the filter for the AuthorDocuments we want to count
     *   }
     * })
    **/
    count<T extends AuthorDocumentsCountArgs>(
      args?: Subset<T, AuthorDocumentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthorDocumentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthorDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorDocumentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthorDocumentsAggregateArgs>(args: Subset<T, AuthorDocumentsAggregateArgs>): Prisma.PrismaPromise<GetAuthorDocumentsAggregateType<T>>

    /**
     * Group by AuthorDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthorDocumentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthorDocumentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthorDocumentsGroupByArgs['orderBy'] }
        : { orderBy?: AuthorDocumentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthorDocumentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthorDocumentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthorDocuments model
   */
  readonly fields: AuthorDocumentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthorDocuments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthorDocumentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Author<T extends AuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AuthorDefaultArgs<ExtArgs>>): Prisma__AuthorClient<$Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Document<T extends DocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DocumentDefaultArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthorDocuments model
   */
  interface AuthorDocumentsFieldRefs {
    readonly author_id: FieldRef<"AuthorDocuments", 'Int'>
    readonly documents_id: FieldRef<"AuthorDocuments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * AuthorDocuments findUnique
   */
  export type AuthorDocumentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorDocuments to fetch.
     */
    where: AuthorDocumentsWhereUniqueInput
  }

  /**
   * AuthorDocuments findUniqueOrThrow
   */
  export type AuthorDocumentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorDocuments to fetch.
     */
    where: AuthorDocumentsWhereUniqueInput
  }

  /**
   * AuthorDocuments findFirst
   */
  export type AuthorDocumentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorDocuments to fetch.
     */
    where?: AuthorDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorDocuments to fetch.
     */
    orderBy?: AuthorDocumentsOrderByWithRelationInput | AuthorDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorDocuments.
     */
    cursor?: AuthorDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorDocuments.
     */
    distinct?: AuthorDocumentsScalarFieldEnum | AuthorDocumentsScalarFieldEnum[]
  }

  /**
   * AuthorDocuments findFirstOrThrow
   */
  export type AuthorDocumentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorDocuments to fetch.
     */
    where?: AuthorDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorDocuments to fetch.
     */
    orderBy?: AuthorDocumentsOrderByWithRelationInput | AuthorDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthorDocuments.
     */
    cursor?: AuthorDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthorDocuments.
     */
    distinct?: AuthorDocumentsScalarFieldEnum | AuthorDocumentsScalarFieldEnum[]
  }

  /**
   * AuthorDocuments findMany
   */
  export type AuthorDocumentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * Filter, which AuthorDocuments to fetch.
     */
    where?: AuthorDocumentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthorDocuments to fetch.
     */
    orderBy?: AuthorDocumentsOrderByWithRelationInput | AuthorDocumentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthorDocuments.
     */
    cursor?: AuthorDocumentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthorDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthorDocuments.
     */
    skip?: number
    distinct?: AuthorDocumentsScalarFieldEnum | AuthorDocumentsScalarFieldEnum[]
  }

  /**
   * AuthorDocuments create
   */
  export type AuthorDocumentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthorDocuments.
     */
    data: XOR<AuthorDocumentsCreateInput, AuthorDocumentsUncheckedCreateInput>
  }

  /**
   * AuthorDocuments createMany
   */
  export type AuthorDocumentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthorDocuments.
     */
    data: AuthorDocumentsCreateManyInput | AuthorDocumentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthorDocuments createManyAndReturn
   */
  export type AuthorDocumentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * The data used to create many AuthorDocuments.
     */
    data: AuthorDocumentsCreateManyInput | AuthorDocumentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorDocuments update
   */
  export type AuthorDocumentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthorDocuments.
     */
    data: XOR<AuthorDocumentsUpdateInput, AuthorDocumentsUncheckedUpdateInput>
    /**
     * Choose, which AuthorDocuments to update.
     */
    where: AuthorDocumentsWhereUniqueInput
  }

  /**
   * AuthorDocuments updateMany
   */
  export type AuthorDocumentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthorDocuments.
     */
    data: XOR<AuthorDocumentsUpdateManyMutationInput, AuthorDocumentsUncheckedUpdateManyInput>
    /**
     * Filter which AuthorDocuments to update
     */
    where?: AuthorDocumentsWhereInput
    /**
     * Limit how many AuthorDocuments to update.
     */
    limit?: number
  }

  /**
   * AuthorDocuments updateManyAndReturn
   */
  export type AuthorDocumentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * The data used to update AuthorDocuments.
     */
    data: XOR<AuthorDocumentsUpdateManyMutationInput, AuthorDocumentsUncheckedUpdateManyInput>
    /**
     * Filter which AuthorDocuments to update
     */
    where?: AuthorDocumentsWhereInput
    /**
     * Limit how many AuthorDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthorDocuments upsert
   */
  export type AuthorDocumentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthorDocuments to update in case it exists.
     */
    where: AuthorDocumentsWhereUniqueInput
    /**
     * In case the AuthorDocuments found by the `where` argument doesn't exist, create a new AuthorDocuments with this data.
     */
    create: XOR<AuthorDocumentsCreateInput, AuthorDocumentsUncheckedCreateInput>
    /**
     * In case the AuthorDocuments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthorDocumentsUpdateInput, AuthorDocumentsUncheckedUpdateInput>
  }

  /**
   * AuthorDocuments delete
   */
  export type AuthorDocumentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
    /**
     * Filter which AuthorDocuments to delete.
     */
    where: AuthorDocumentsWhereUniqueInput
  }

  /**
   * AuthorDocuments deleteMany
   */
  export type AuthorDocumentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthorDocuments to delete
     */
    where?: AuthorDocumentsWhereInput
    /**
     * Limit how many AuthorDocuments to delete.
     */
    limit?: number
  }

  /**
   * AuthorDocuments without action
   */
  export type AuthorDocumentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthorDocuments
     */
    select?: AuthorDocumentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthorDocuments
     */
    omit?: AuthorDocumentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthorDocumentsInclude<ExtArgs> | null
  }


  /**
   * Model CategoryList
   */

  export type AggregateCategoryList = {
    _count: CategoryListCountAggregateOutputType | null
    _avg: CategoryListAvgAggregateOutputType | null
    _sum: CategoryListSumAggregateOutputType | null
    _min: CategoryListMinAggregateOutputType | null
    _max: CategoryListMaxAggregateOutputType | null
  }

  export type CategoryListAvgAggregateOutputType = {
    id: number | null
    book_id: number | null
    document_id: number | null
    category_id: number | null
  }

  export type CategoryListSumAggregateOutputType = {
    id: number | null
    book_id: number | null
    document_id: number | null
    category_id: number | null
  }

  export type CategoryListMinAggregateOutputType = {
    id: number | null
    book_id: number | null
    document_id: number | null
    category_id: number | null
  }

  export type CategoryListMaxAggregateOutputType = {
    id: number | null
    book_id: number | null
    document_id: number | null
    category_id: number | null
  }

  export type CategoryListCountAggregateOutputType = {
    id: number
    book_id: number
    document_id: number
    category_id: number
    _all: number
  }


  export type CategoryListAvgAggregateInputType = {
    id?: true
    book_id?: true
    document_id?: true
    category_id?: true
  }

  export type CategoryListSumAggregateInputType = {
    id?: true
    book_id?: true
    document_id?: true
    category_id?: true
  }

  export type CategoryListMinAggregateInputType = {
    id?: true
    book_id?: true
    document_id?: true
    category_id?: true
  }

  export type CategoryListMaxAggregateInputType = {
    id?: true
    book_id?: true
    document_id?: true
    category_id?: true
  }

  export type CategoryListCountAggregateInputType = {
    id?: true
    book_id?: true
    document_id?: true
    category_id?: true
    _all?: true
  }

  export type CategoryListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryList to aggregate.
     */
    where?: CategoryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryLists to fetch.
     */
    orderBy?: CategoryListOrderByWithRelationInput | CategoryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CategoryLists
    **/
    _count?: true | CategoryListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryListMaxAggregateInputType
  }

  export type GetCategoryListAggregateType<T extends CategoryListAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryList[P]>
      : GetScalarType<T[P], AggregateCategoryList[P]>
  }




  export type CategoryListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryListWhereInput
    orderBy?: CategoryListOrderByWithAggregationInput | CategoryListOrderByWithAggregationInput[]
    by: CategoryListScalarFieldEnum[] | CategoryListScalarFieldEnum
    having?: CategoryListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryListCountAggregateInputType | true
    _avg?: CategoryListAvgAggregateInputType
    _sum?: CategoryListSumAggregateInputType
    _min?: CategoryListMinAggregateInputType
    _max?: CategoryListMaxAggregateInputType
  }

  export type CategoryListGroupByOutputType = {
    id: number
    book_id: number | null
    document_id: number | null
    category_id: number
    _count: CategoryListCountAggregateOutputType | null
    _avg: CategoryListAvgAggregateOutputType | null
    _sum: CategoryListSumAggregateOutputType | null
    _min: CategoryListMinAggregateOutputType | null
    _max: CategoryListMaxAggregateOutputType | null
  }

  type GetCategoryListGroupByPayload<T extends CategoryListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryListGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryListGroupByOutputType[P]>
        }
      >
    >


  export type CategoryListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    document_id?: boolean
    category_id?: boolean
    Book?: boolean | CategoryList$BookArgs<ExtArgs>
    Document?: boolean | CategoryList$DocumentArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryList"]>

  export type CategoryListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    document_id?: boolean
    category_id?: boolean
    Book?: boolean | CategoryList$BookArgs<ExtArgs>
    Document?: boolean | CategoryList$DocumentArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryList"]>

  export type CategoryListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    book_id?: boolean
    document_id?: boolean
    category_id?: boolean
    Book?: boolean | CategoryList$BookArgs<ExtArgs>
    Document?: boolean | CategoryList$DocumentArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryList"]>

  export type CategoryListSelectScalar = {
    id?: boolean
    book_id?: boolean
    document_id?: boolean
    category_id?: boolean
  }

  export type CategoryListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "book_id" | "document_id" | "category_id", ExtArgs["result"]["categoryList"]>
  export type CategoryListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | CategoryList$BookArgs<ExtArgs>
    Document?: boolean | CategoryList$DocumentArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | CategoryList$BookArgs<ExtArgs>
    Document?: boolean | CategoryList$DocumentArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type CategoryListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | CategoryList$BookArgs<ExtArgs>
    Document?: boolean | CategoryList$DocumentArgs<ExtArgs>
    Category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CategoryListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CategoryList"
    objects: {
      Book: Prisma.$BookPayload<ExtArgs> | null
      Document: Prisma.$DocumentPayload<ExtArgs> | null
      Category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      book_id: number | null
      document_id: number | null
      category_id: number
    }, ExtArgs["result"]["categoryList"]>
    composites: {}
  }

  type CategoryListGetPayload<S extends boolean | null | undefined | CategoryListDefaultArgs> = $Result.GetResult<Prisma.$CategoryListPayload, S>

  type CategoryListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryListCountAggregateInputType | true
    }

  export interface CategoryListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CategoryList'], meta: { name: 'CategoryList' } }
    /**
     * Find zero or one CategoryList that matches the filter.
     * @param {CategoryListFindUniqueArgs} args - Arguments to find a CategoryList
     * @example
     * // Get one CategoryList
     * const categoryList = await prisma.categoryList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryListFindUniqueArgs>(args: SelectSubset<T, CategoryListFindUniqueArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CategoryList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryListFindUniqueOrThrowArgs} args - Arguments to find a CategoryList
     * @example
     * // Get one CategoryList
     * const categoryList = await prisma.categoryList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryListFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryListFindFirstArgs} args - Arguments to find a CategoryList
     * @example
     * // Get one CategoryList
     * const categoryList = await prisma.categoryList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryListFindFirstArgs>(args?: SelectSubset<T, CategoryListFindFirstArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CategoryList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryListFindFirstOrThrowArgs} args - Arguments to find a CategoryList
     * @example
     * // Get one CategoryList
     * const categoryList = await prisma.categoryList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryListFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryListFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CategoryLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryLists
     * const categoryLists = await prisma.categoryList.findMany()
     * 
     * // Get first 10 CategoryLists
     * const categoryLists = await prisma.categoryList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryListWithIdOnly = await prisma.categoryList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryListFindManyArgs>(args?: SelectSubset<T, CategoryListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CategoryList.
     * @param {CategoryListCreateArgs} args - Arguments to create a CategoryList.
     * @example
     * // Create one CategoryList
     * const CategoryList = await prisma.categoryList.create({
     *   data: {
     *     // ... data to create a CategoryList
     *   }
     * })
     * 
     */
    create<T extends CategoryListCreateArgs>(args: SelectSubset<T, CategoryListCreateArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CategoryLists.
     * @param {CategoryListCreateManyArgs} args - Arguments to create many CategoryLists.
     * @example
     * // Create many CategoryLists
     * const categoryList = await prisma.categoryList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryListCreateManyArgs>(args?: SelectSubset<T, CategoryListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryLists and returns the data saved in the database.
     * @param {CategoryListCreateManyAndReturnArgs} args - Arguments to create many CategoryLists.
     * @example
     * // Create many CategoryLists
     * const categoryList = await prisma.categoryList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryLists and only return the `id`
     * const categoryListWithIdOnly = await prisma.categoryList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryListCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CategoryList.
     * @param {CategoryListDeleteArgs} args - Arguments to delete one CategoryList.
     * @example
     * // Delete one CategoryList
     * const CategoryList = await prisma.categoryList.delete({
     *   where: {
     *     // ... filter to delete one CategoryList
     *   }
     * })
     * 
     */
    delete<T extends CategoryListDeleteArgs>(args: SelectSubset<T, CategoryListDeleteArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CategoryList.
     * @param {CategoryListUpdateArgs} args - Arguments to update one CategoryList.
     * @example
     * // Update one CategoryList
     * const categoryList = await prisma.categoryList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryListUpdateArgs>(args: SelectSubset<T, CategoryListUpdateArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CategoryLists.
     * @param {CategoryListDeleteManyArgs} args - Arguments to filter CategoryLists to delete.
     * @example
     * // Delete a few CategoryLists
     * const { count } = await prisma.categoryList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryListDeleteManyArgs>(args?: SelectSubset<T, CategoryListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryLists
     * const categoryList = await prisma.categoryList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryListUpdateManyArgs>(args: SelectSubset<T, CategoryListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryLists and returns the data updated in the database.
     * @param {CategoryListUpdateManyAndReturnArgs} args - Arguments to update many CategoryLists.
     * @example
     * // Update many CategoryLists
     * const categoryList = await prisma.categoryList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CategoryLists and only return the `id`
     * const categoryListWithIdOnly = await prisma.categoryList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryListUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CategoryList.
     * @param {CategoryListUpsertArgs} args - Arguments to update or create a CategoryList.
     * @example
     * // Update or create a CategoryList
     * const categoryList = await prisma.categoryList.upsert({
     *   create: {
     *     // ... data to create a CategoryList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryList we want to update
     *   }
     * })
     */
    upsert<T extends CategoryListUpsertArgs>(args: SelectSubset<T, CategoryListUpsertArgs<ExtArgs>>): Prisma__CategoryListClient<$Result.GetResult<Prisma.$CategoryListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CategoryLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryListCountArgs} args - Arguments to filter CategoryLists to count.
     * @example
     * // Count the number of CategoryLists
     * const count = await prisma.categoryList.count({
     *   where: {
     *     // ... the filter for the CategoryLists we want to count
     *   }
     * })
    **/
    count<T extends CategoryListCountArgs>(
      args?: Subset<T, CategoryListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryListAggregateArgs>(args: Subset<T, CategoryListAggregateArgs>): Prisma.PrismaPromise<GetCategoryListAggregateType<T>>

    /**
     * Group by CategoryList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryListGroupByArgs['orderBy'] }
        : { orderBy?: CategoryListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CategoryList model
   */
  readonly fields: CategoryListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CategoryList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Book<T extends CategoryList$BookArgs<ExtArgs> = {}>(args?: Subset<T, CategoryList$BookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Document<T extends CategoryList$DocumentArgs<ExtArgs> = {}>(args?: Subset<T, CategoryList$DocumentArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CategoryList model
   */
  interface CategoryListFieldRefs {
    readonly id: FieldRef<"CategoryList", 'Int'>
    readonly book_id: FieldRef<"CategoryList", 'Int'>
    readonly document_id: FieldRef<"CategoryList", 'Int'>
    readonly category_id: FieldRef<"CategoryList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CategoryList findUnique
   */
  export type CategoryListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * Filter, which CategoryList to fetch.
     */
    where: CategoryListWhereUniqueInput
  }

  /**
   * CategoryList findUniqueOrThrow
   */
  export type CategoryListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * Filter, which CategoryList to fetch.
     */
    where: CategoryListWhereUniqueInput
  }

  /**
   * CategoryList findFirst
   */
  export type CategoryListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * Filter, which CategoryList to fetch.
     */
    where?: CategoryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryLists to fetch.
     */
    orderBy?: CategoryListOrderByWithRelationInput | CategoryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryLists.
     */
    cursor?: CategoryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryLists.
     */
    distinct?: CategoryListScalarFieldEnum | CategoryListScalarFieldEnum[]
  }

  /**
   * CategoryList findFirstOrThrow
   */
  export type CategoryListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * Filter, which CategoryList to fetch.
     */
    where?: CategoryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryLists to fetch.
     */
    orderBy?: CategoryListOrderByWithRelationInput | CategoryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CategoryLists.
     */
    cursor?: CategoryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CategoryLists.
     */
    distinct?: CategoryListScalarFieldEnum | CategoryListScalarFieldEnum[]
  }

  /**
   * CategoryList findMany
   */
  export type CategoryListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * Filter, which CategoryLists to fetch.
     */
    where?: CategoryListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CategoryLists to fetch.
     */
    orderBy?: CategoryListOrderByWithRelationInput | CategoryListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CategoryLists.
     */
    cursor?: CategoryListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CategoryLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CategoryLists.
     */
    skip?: number
    distinct?: CategoryListScalarFieldEnum | CategoryListScalarFieldEnum[]
  }

  /**
   * CategoryList create
   */
  export type CategoryListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * The data needed to create a CategoryList.
     */
    data: XOR<CategoryListCreateInput, CategoryListUncheckedCreateInput>
  }

  /**
   * CategoryList createMany
   */
  export type CategoryListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CategoryLists.
     */
    data: CategoryListCreateManyInput | CategoryListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CategoryList createManyAndReturn
   */
  export type CategoryListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * The data used to create many CategoryLists.
     */
    data: CategoryListCreateManyInput | CategoryListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryList update
   */
  export type CategoryListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * The data needed to update a CategoryList.
     */
    data: XOR<CategoryListUpdateInput, CategoryListUncheckedUpdateInput>
    /**
     * Choose, which CategoryList to update.
     */
    where: CategoryListWhereUniqueInput
  }

  /**
   * CategoryList updateMany
   */
  export type CategoryListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CategoryLists.
     */
    data: XOR<CategoryListUpdateManyMutationInput, CategoryListUncheckedUpdateManyInput>
    /**
     * Filter which CategoryLists to update
     */
    where?: CategoryListWhereInput
    /**
     * Limit how many CategoryLists to update.
     */
    limit?: number
  }

  /**
   * CategoryList updateManyAndReturn
   */
  export type CategoryListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * The data used to update CategoryLists.
     */
    data: XOR<CategoryListUpdateManyMutationInput, CategoryListUncheckedUpdateManyInput>
    /**
     * Filter which CategoryLists to update
     */
    where?: CategoryListWhereInput
    /**
     * Limit how many CategoryLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CategoryList upsert
   */
  export type CategoryListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * The filter to search for the CategoryList to update in case it exists.
     */
    where: CategoryListWhereUniqueInput
    /**
     * In case the CategoryList found by the `where` argument doesn't exist, create a new CategoryList with this data.
     */
    create: XOR<CategoryListCreateInput, CategoryListUncheckedCreateInput>
    /**
     * In case the CategoryList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryListUpdateInput, CategoryListUncheckedUpdateInput>
  }

  /**
   * CategoryList delete
   */
  export type CategoryListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
    /**
     * Filter which CategoryList to delete.
     */
    where: CategoryListWhereUniqueInput
  }

  /**
   * CategoryList deleteMany
   */
  export type CategoryListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CategoryLists to delete
     */
    where?: CategoryListWhereInput
    /**
     * Limit how many CategoryLists to delete.
     */
    limit?: number
  }

  /**
   * CategoryList.Book
   */
  export type CategoryList$BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * CategoryList.Document
   */
  export type CategoryList$DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * CategoryList without action
   */
  export type CategoryListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryList
     */
    select?: CategoryListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CategoryList
     */
    omit?: CategoryListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryListInclude<ExtArgs> | null
  }


  /**
   * Model KeywordList
   */

  export type AggregateKeywordList = {
    _count: KeywordListCountAggregateOutputType | null
    _avg: KeywordListAvgAggregateOutputType | null
    _sum: KeywordListSumAggregateOutputType | null
    _min: KeywordListMinAggregateOutputType | null
    _max: KeywordListMaxAggregateOutputType | null
  }

  export type KeywordListAvgAggregateOutputType = {
    id: number | null
    document_id: number | null
    book_id: number | null
    keyword_id: number | null
  }

  export type KeywordListSumAggregateOutputType = {
    id: number | null
    document_id: number | null
    book_id: number | null
    keyword_id: number | null
  }

  export type KeywordListMinAggregateOutputType = {
    id: number | null
    document_id: number | null
    book_id: number | null
    keyword_id: number | null
  }

  export type KeywordListMaxAggregateOutputType = {
    id: number | null
    document_id: number | null
    book_id: number | null
    keyword_id: number | null
  }

  export type KeywordListCountAggregateOutputType = {
    id: number
    document_id: number
    book_id: number
    keyword_id: number
    _all: number
  }


  export type KeywordListAvgAggregateInputType = {
    id?: true
    document_id?: true
    book_id?: true
    keyword_id?: true
  }

  export type KeywordListSumAggregateInputType = {
    id?: true
    document_id?: true
    book_id?: true
    keyword_id?: true
  }

  export type KeywordListMinAggregateInputType = {
    id?: true
    document_id?: true
    book_id?: true
    keyword_id?: true
  }

  export type KeywordListMaxAggregateInputType = {
    id?: true
    document_id?: true
    book_id?: true
    keyword_id?: true
  }

  export type KeywordListCountAggregateInputType = {
    id?: true
    document_id?: true
    book_id?: true
    keyword_id?: true
    _all?: true
  }

  export type KeywordListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeywordList to aggregate.
     */
    where?: KeywordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordLists to fetch.
     */
    orderBy?: KeywordListOrderByWithRelationInput | KeywordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KeywordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KeywordLists
    **/
    _count?: true | KeywordListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KeywordListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KeywordListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KeywordListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KeywordListMaxAggregateInputType
  }

  export type GetKeywordListAggregateType<T extends KeywordListAggregateArgs> = {
        [P in keyof T & keyof AggregateKeywordList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKeywordList[P]>
      : GetScalarType<T[P], AggregateKeywordList[P]>
  }




  export type KeywordListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KeywordListWhereInput
    orderBy?: KeywordListOrderByWithAggregationInput | KeywordListOrderByWithAggregationInput[]
    by: KeywordListScalarFieldEnum[] | KeywordListScalarFieldEnum
    having?: KeywordListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KeywordListCountAggregateInputType | true
    _avg?: KeywordListAvgAggregateInputType
    _sum?: KeywordListSumAggregateInputType
    _min?: KeywordListMinAggregateInputType
    _max?: KeywordListMaxAggregateInputType
  }

  export type KeywordListGroupByOutputType = {
    id: number
    document_id: number | null
    book_id: number | null
    keyword_id: number
    _count: KeywordListCountAggregateOutputType | null
    _avg: KeywordListAvgAggregateOutputType | null
    _sum: KeywordListSumAggregateOutputType | null
    _min: KeywordListMinAggregateOutputType | null
    _max: KeywordListMaxAggregateOutputType | null
  }

  type GetKeywordListGroupByPayload<T extends KeywordListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KeywordListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KeywordListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KeywordListGroupByOutputType[P]>
            : GetScalarType<T[P], KeywordListGroupByOutputType[P]>
        }
      >
    >


  export type KeywordListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    book_id?: boolean
    keyword_id?: boolean
    Book?: boolean | KeywordList$BookArgs<ExtArgs>
    Document?: boolean | KeywordList$DocumentArgs<ExtArgs>
    Keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keywordList"]>

  export type KeywordListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    book_id?: boolean
    keyword_id?: boolean
    Book?: boolean | KeywordList$BookArgs<ExtArgs>
    Document?: boolean | KeywordList$DocumentArgs<ExtArgs>
    Keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keywordList"]>

  export type KeywordListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    document_id?: boolean
    book_id?: boolean
    keyword_id?: boolean
    Book?: boolean | KeywordList$BookArgs<ExtArgs>
    Document?: boolean | KeywordList$DocumentArgs<ExtArgs>
    Keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["keywordList"]>

  export type KeywordListSelectScalar = {
    id?: boolean
    document_id?: boolean
    book_id?: boolean
    keyword_id?: boolean
  }

  export type KeywordListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "document_id" | "book_id" | "keyword_id", ExtArgs["result"]["keywordList"]>
  export type KeywordListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | KeywordList$BookArgs<ExtArgs>
    Document?: boolean | KeywordList$DocumentArgs<ExtArgs>
    Keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type KeywordListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | KeywordList$BookArgs<ExtArgs>
    Document?: boolean | KeywordList$DocumentArgs<ExtArgs>
    Keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }
  export type KeywordListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Book?: boolean | KeywordList$BookArgs<ExtArgs>
    Document?: boolean | KeywordList$DocumentArgs<ExtArgs>
    Keyword?: boolean | KeywordDefaultArgs<ExtArgs>
  }

  export type $KeywordListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KeywordList"
    objects: {
      Book: Prisma.$BookPayload<ExtArgs> | null
      Document: Prisma.$DocumentPayload<ExtArgs> | null
      Keyword: Prisma.$KeywordPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      document_id: number | null
      book_id: number | null
      keyword_id: number
    }, ExtArgs["result"]["keywordList"]>
    composites: {}
  }

  type KeywordListGetPayload<S extends boolean | null | undefined | KeywordListDefaultArgs> = $Result.GetResult<Prisma.$KeywordListPayload, S>

  type KeywordListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KeywordListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KeywordListCountAggregateInputType | true
    }

  export interface KeywordListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KeywordList'], meta: { name: 'KeywordList' } }
    /**
     * Find zero or one KeywordList that matches the filter.
     * @param {KeywordListFindUniqueArgs} args - Arguments to find a KeywordList
     * @example
     * // Get one KeywordList
     * const keywordList = await prisma.keywordList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KeywordListFindUniqueArgs>(args: SelectSubset<T, KeywordListFindUniqueArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KeywordList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KeywordListFindUniqueOrThrowArgs} args - Arguments to find a KeywordList
     * @example
     * // Get one KeywordList
     * const keywordList = await prisma.keywordList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KeywordListFindUniqueOrThrowArgs>(args: SelectSubset<T, KeywordListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeywordList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordListFindFirstArgs} args - Arguments to find a KeywordList
     * @example
     * // Get one KeywordList
     * const keywordList = await prisma.keywordList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KeywordListFindFirstArgs>(args?: SelectSubset<T, KeywordListFindFirstArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KeywordList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordListFindFirstOrThrowArgs} args - Arguments to find a KeywordList
     * @example
     * // Get one KeywordList
     * const keywordList = await prisma.keywordList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KeywordListFindFirstOrThrowArgs>(args?: SelectSubset<T, KeywordListFindFirstOrThrowArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KeywordLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KeywordLists
     * const keywordLists = await prisma.keywordList.findMany()
     * 
     * // Get first 10 KeywordLists
     * const keywordLists = await prisma.keywordList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const keywordListWithIdOnly = await prisma.keywordList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KeywordListFindManyArgs>(args?: SelectSubset<T, KeywordListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KeywordList.
     * @param {KeywordListCreateArgs} args - Arguments to create a KeywordList.
     * @example
     * // Create one KeywordList
     * const KeywordList = await prisma.keywordList.create({
     *   data: {
     *     // ... data to create a KeywordList
     *   }
     * })
     * 
     */
    create<T extends KeywordListCreateArgs>(args: SelectSubset<T, KeywordListCreateArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KeywordLists.
     * @param {KeywordListCreateManyArgs} args - Arguments to create many KeywordLists.
     * @example
     * // Create many KeywordLists
     * const keywordList = await prisma.keywordList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KeywordListCreateManyArgs>(args?: SelectSubset<T, KeywordListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KeywordLists and returns the data saved in the database.
     * @param {KeywordListCreateManyAndReturnArgs} args - Arguments to create many KeywordLists.
     * @example
     * // Create many KeywordLists
     * const keywordList = await prisma.keywordList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KeywordLists and only return the `id`
     * const keywordListWithIdOnly = await prisma.keywordList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KeywordListCreateManyAndReturnArgs>(args?: SelectSubset<T, KeywordListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KeywordList.
     * @param {KeywordListDeleteArgs} args - Arguments to delete one KeywordList.
     * @example
     * // Delete one KeywordList
     * const KeywordList = await prisma.keywordList.delete({
     *   where: {
     *     // ... filter to delete one KeywordList
     *   }
     * })
     * 
     */
    delete<T extends KeywordListDeleteArgs>(args: SelectSubset<T, KeywordListDeleteArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KeywordList.
     * @param {KeywordListUpdateArgs} args - Arguments to update one KeywordList.
     * @example
     * // Update one KeywordList
     * const keywordList = await prisma.keywordList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KeywordListUpdateArgs>(args: SelectSubset<T, KeywordListUpdateArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KeywordLists.
     * @param {KeywordListDeleteManyArgs} args - Arguments to filter KeywordLists to delete.
     * @example
     * // Delete a few KeywordLists
     * const { count } = await prisma.keywordList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KeywordListDeleteManyArgs>(args?: SelectSubset<T, KeywordListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeywordLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KeywordLists
     * const keywordList = await prisma.keywordList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KeywordListUpdateManyArgs>(args: SelectSubset<T, KeywordListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KeywordLists and returns the data updated in the database.
     * @param {KeywordListUpdateManyAndReturnArgs} args - Arguments to update many KeywordLists.
     * @example
     * // Update many KeywordLists
     * const keywordList = await prisma.keywordList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KeywordLists and only return the `id`
     * const keywordListWithIdOnly = await prisma.keywordList.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends KeywordListUpdateManyAndReturnArgs>(args: SelectSubset<T, KeywordListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KeywordList.
     * @param {KeywordListUpsertArgs} args - Arguments to update or create a KeywordList.
     * @example
     * // Update or create a KeywordList
     * const keywordList = await prisma.keywordList.upsert({
     *   create: {
     *     // ... data to create a KeywordList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KeywordList we want to update
     *   }
     * })
     */
    upsert<T extends KeywordListUpsertArgs>(args: SelectSubset<T, KeywordListUpsertArgs<ExtArgs>>): Prisma__KeywordListClient<$Result.GetResult<Prisma.$KeywordListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KeywordLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordListCountArgs} args - Arguments to filter KeywordLists to count.
     * @example
     * // Count the number of KeywordLists
     * const count = await prisma.keywordList.count({
     *   where: {
     *     // ... the filter for the KeywordLists we want to count
     *   }
     * })
    **/
    count<T extends KeywordListCountArgs>(
      args?: Subset<T, KeywordListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KeywordListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KeywordList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends KeywordListAggregateArgs>(args: Subset<T, KeywordListAggregateArgs>): Prisma.PrismaPromise<GetKeywordListAggregateType<T>>

    /**
     * Group by KeywordList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KeywordListGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends KeywordListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KeywordListGroupByArgs['orderBy'] }
        : { orderBy?: KeywordListGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, KeywordListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKeywordListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KeywordList model
   */
  readonly fields: KeywordListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KeywordList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KeywordListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Book<T extends KeywordList$BookArgs<ExtArgs> = {}>(args?: Subset<T, KeywordList$BookArgs<ExtArgs>>): Prisma__BookClient<$Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Document<T extends KeywordList$DocumentArgs<ExtArgs> = {}>(args?: Subset<T, KeywordList$DocumentArgs<ExtArgs>>): Prisma__DocumentClient<$Result.GetResult<Prisma.$DocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Keyword<T extends KeywordDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KeywordDefaultArgs<ExtArgs>>): Prisma__KeywordClient<$Result.GetResult<Prisma.$KeywordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the KeywordList model
   */
  interface KeywordListFieldRefs {
    readonly id: FieldRef<"KeywordList", 'Int'>
    readonly document_id: FieldRef<"KeywordList", 'Int'>
    readonly book_id: FieldRef<"KeywordList", 'Int'>
    readonly keyword_id: FieldRef<"KeywordList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * KeywordList findUnique
   */
  export type KeywordListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * Filter, which KeywordList to fetch.
     */
    where: KeywordListWhereUniqueInput
  }

  /**
   * KeywordList findUniqueOrThrow
   */
  export type KeywordListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * Filter, which KeywordList to fetch.
     */
    where: KeywordListWhereUniqueInput
  }

  /**
   * KeywordList findFirst
   */
  export type KeywordListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * Filter, which KeywordList to fetch.
     */
    where?: KeywordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordLists to fetch.
     */
    orderBy?: KeywordListOrderByWithRelationInput | KeywordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeywordLists.
     */
    cursor?: KeywordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeywordLists.
     */
    distinct?: KeywordListScalarFieldEnum | KeywordListScalarFieldEnum[]
  }

  /**
   * KeywordList findFirstOrThrow
   */
  export type KeywordListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * Filter, which KeywordList to fetch.
     */
    where?: KeywordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordLists to fetch.
     */
    orderBy?: KeywordListOrderByWithRelationInput | KeywordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KeywordLists.
     */
    cursor?: KeywordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KeywordLists.
     */
    distinct?: KeywordListScalarFieldEnum | KeywordListScalarFieldEnum[]
  }

  /**
   * KeywordList findMany
   */
  export type KeywordListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * Filter, which KeywordLists to fetch.
     */
    where?: KeywordListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KeywordLists to fetch.
     */
    orderBy?: KeywordListOrderByWithRelationInput | KeywordListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KeywordLists.
     */
    cursor?: KeywordListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KeywordLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KeywordLists.
     */
    skip?: number
    distinct?: KeywordListScalarFieldEnum | KeywordListScalarFieldEnum[]
  }

  /**
   * KeywordList create
   */
  export type KeywordListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * The data needed to create a KeywordList.
     */
    data: XOR<KeywordListCreateInput, KeywordListUncheckedCreateInput>
  }

  /**
   * KeywordList createMany
   */
  export type KeywordListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KeywordLists.
     */
    data: KeywordListCreateManyInput | KeywordListCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KeywordList createManyAndReturn
   */
  export type KeywordListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * The data used to create many KeywordLists.
     */
    data: KeywordListCreateManyInput | KeywordListCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeywordList update
   */
  export type KeywordListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * The data needed to update a KeywordList.
     */
    data: XOR<KeywordListUpdateInput, KeywordListUncheckedUpdateInput>
    /**
     * Choose, which KeywordList to update.
     */
    where: KeywordListWhereUniqueInput
  }

  /**
   * KeywordList updateMany
   */
  export type KeywordListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KeywordLists.
     */
    data: XOR<KeywordListUpdateManyMutationInput, KeywordListUncheckedUpdateManyInput>
    /**
     * Filter which KeywordLists to update
     */
    where?: KeywordListWhereInput
    /**
     * Limit how many KeywordLists to update.
     */
    limit?: number
  }

  /**
   * KeywordList updateManyAndReturn
   */
  export type KeywordListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * The data used to update KeywordLists.
     */
    data: XOR<KeywordListUpdateManyMutationInput, KeywordListUncheckedUpdateManyInput>
    /**
     * Filter which KeywordLists to update
     */
    where?: KeywordListWhereInput
    /**
     * Limit how many KeywordLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * KeywordList upsert
   */
  export type KeywordListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * The filter to search for the KeywordList to update in case it exists.
     */
    where: KeywordListWhereUniqueInput
    /**
     * In case the KeywordList found by the `where` argument doesn't exist, create a new KeywordList with this data.
     */
    create: XOR<KeywordListCreateInput, KeywordListUncheckedCreateInput>
    /**
     * In case the KeywordList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KeywordListUpdateInput, KeywordListUncheckedUpdateInput>
  }

  /**
   * KeywordList delete
   */
  export type KeywordListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
    /**
     * Filter which KeywordList to delete.
     */
    where: KeywordListWhereUniqueInput
  }

  /**
   * KeywordList deleteMany
   */
  export type KeywordListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KeywordLists to delete
     */
    where?: KeywordListWhereInput
    /**
     * Limit how many KeywordLists to delete.
     */
    limit?: number
  }

  /**
   * KeywordList.Book
   */
  export type KeywordList$BookArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Book
     */
    select?: BookSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Book
     */
    omit?: BookOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookInclude<ExtArgs> | null
    where?: BookWhereInput
  }

  /**
   * KeywordList.Document
   */
  export type KeywordList$DocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Document
     */
    select?: DocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Document
     */
    omit?: DocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentInclude<ExtArgs> | null
    where?: DocumentWhereInput
  }

  /**
   * KeywordList without action
   */
  export type KeywordListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KeywordList
     */
    select?: KeywordListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KeywordList
     */
    omit?: KeywordListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KeywordListInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    category_name: 'category_name',
    category_description: 'category_description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const KeywordScalarFieldEnum: {
    id: 'id',
    keyword_name: 'keyword_name',
    keyword_description: 'keyword_description'
  };

  export type KeywordScalarFieldEnum = (typeof KeywordScalarFieldEnum)[keyof typeof KeywordScalarFieldEnum]


  export const AuthorScalarFieldEnum: {
    id: 'id',
    country: 'country',
    first_name: 'first_name',
    last_name: 'last_name'
  };

  export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum]


  export const BookScalarFieldEnum: {
    id: 'id',
    book_title: 'book_title',
    publisher: 'publisher',
    translator: 'translator',
    publish_date: 'publish_date',
    publish_location: 'publish_location',
    country: 'country',
    description: 'description',
    link: 'link',
    language: 'language',
    isbn: 'isbn'
  };

  export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum]


  export const DocumentScalarFieldEnum: {
    id: 'id',
    document_title: 'document_title',
    translator: 'translator',
    publish_date: 'publish_date',
    publisher: 'publisher',
    publish_location: 'publish_location',
    country: 'country',
    description: 'description',
    link: 'link',
    language: 'language'
  };

  export type DocumentScalarFieldEnum = (typeof DocumentScalarFieldEnum)[keyof typeof DocumentScalarFieldEnum]


  export const AuthorBooksScalarFieldEnum: {
    author_id: 'author_id',
    book_id: 'book_id'
  };

  export type AuthorBooksScalarFieldEnum = (typeof AuthorBooksScalarFieldEnum)[keyof typeof AuthorBooksScalarFieldEnum]


  export const AuthorDocumentsScalarFieldEnum: {
    author_id: 'author_id',
    documents_id: 'documents_id'
  };

  export type AuthorDocumentsScalarFieldEnum = (typeof AuthorDocumentsScalarFieldEnum)[keyof typeof AuthorDocumentsScalarFieldEnum]


  export const CategoryListScalarFieldEnum: {
    id: 'id',
    book_id: 'book_id',
    document_id: 'document_id',
    category_id: 'category_id'
  };

  export type CategoryListScalarFieldEnum = (typeof CategoryListScalarFieldEnum)[keyof typeof CategoryListScalarFieldEnum]


  export const KeywordListScalarFieldEnum: {
    id: 'id',
    document_id: 'document_id',
    book_id: 'book_id',
    keyword_id: 'keyword_id'
  };

  export type KeywordListScalarFieldEnum = (typeof KeywordListScalarFieldEnum)[keyof typeof KeywordListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    category_name?: StringFilter<"Category"> | string
    category_description?: StringNullableFilter<"Category"> | string | null
    CategoryList?: CategoryListListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    category_name?: SortOrder
    category_description?: SortOrderInput | SortOrder
    CategoryList?: CategoryListOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    category_name?: StringFilter<"Category"> | string
    category_description?: StringNullableFilter<"Category"> | string | null
    CategoryList?: CategoryListListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    category_name?: SortOrder
    category_description?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    category_name?: StringWithAggregatesFilter<"Category"> | string
    category_description?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type KeywordWhereInput = {
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    id?: IntFilter<"Keyword"> | number
    keyword_name?: StringFilter<"Keyword"> | string
    keyword_description?: StringNullableFilter<"Keyword"> | string | null
    KeywordList?: KeywordListListRelationFilter
  }

  export type KeywordOrderByWithRelationInput = {
    id?: SortOrder
    keyword_name?: SortOrder
    keyword_description?: SortOrderInput | SortOrder
    KeywordList?: KeywordListOrderByRelationAggregateInput
  }

  export type KeywordWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: KeywordWhereInput | KeywordWhereInput[]
    OR?: KeywordWhereInput[]
    NOT?: KeywordWhereInput | KeywordWhereInput[]
    keyword_name?: StringFilter<"Keyword"> | string
    keyword_description?: StringNullableFilter<"Keyword"> | string | null
    KeywordList?: KeywordListListRelationFilter
  }, "id">

  export type KeywordOrderByWithAggregationInput = {
    id?: SortOrder
    keyword_name?: SortOrder
    keyword_description?: SortOrderInput | SortOrder
    _count?: KeywordCountOrderByAggregateInput
    _avg?: KeywordAvgOrderByAggregateInput
    _max?: KeywordMaxOrderByAggregateInput
    _min?: KeywordMinOrderByAggregateInput
    _sum?: KeywordSumOrderByAggregateInput
  }

  export type KeywordScalarWhereWithAggregatesInput = {
    AND?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    OR?: KeywordScalarWhereWithAggregatesInput[]
    NOT?: KeywordScalarWhereWithAggregatesInput | KeywordScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Keyword"> | number
    keyword_name?: StringWithAggregatesFilter<"Keyword"> | string
    keyword_description?: StringNullableWithAggregatesFilter<"Keyword"> | string | null
  }

  export type AuthorWhereInput = {
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    id?: IntFilter<"Author"> | number
    country?: StringFilter<"Author"> | string
    first_name?: StringFilter<"Author"> | string
    last_name?: StringFilter<"Author"> | string
    AuthorBooks?: AuthorBooksListRelationFilter
    AuthorDocuments?: AuthorDocumentsListRelationFilter
  }

  export type AuthorOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    AuthorBooks?: AuthorBooksOrderByRelationAggregateInput
    AuthorDocuments?: AuthorDocumentsOrderByRelationAggregateInput
  }

  export type AuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AuthorWhereInput | AuthorWhereInput[]
    OR?: AuthorWhereInput[]
    NOT?: AuthorWhereInput | AuthorWhereInput[]
    country?: StringFilter<"Author"> | string
    first_name?: StringFilter<"Author"> | string
    last_name?: StringFilter<"Author"> | string
    AuthorBooks?: AuthorBooksListRelationFilter
    AuthorDocuments?: AuthorDocumentsListRelationFilter
  }, "id">

  export type AuthorOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    _count?: AuthorCountOrderByAggregateInput
    _avg?: AuthorAvgOrderByAggregateInput
    _max?: AuthorMaxOrderByAggregateInput
    _min?: AuthorMinOrderByAggregateInput
    _sum?: AuthorSumOrderByAggregateInput
  }

  export type AuthorScalarWhereWithAggregatesInput = {
    AND?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    OR?: AuthorScalarWhereWithAggregatesInput[]
    NOT?: AuthorScalarWhereWithAggregatesInput | AuthorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Author"> | number
    country?: StringWithAggregatesFilter<"Author"> | string
    first_name?: StringWithAggregatesFilter<"Author"> | string
    last_name?: StringWithAggregatesFilter<"Author"> | string
  }

  export type BookWhereInput = {
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    id?: IntFilter<"Book"> | number
    book_title?: StringFilter<"Book"> | string
    publisher?: StringFilter<"Book"> | string
    translator?: StringNullableFilter<"Book"> | string | null
    publish_date?: StringFilter<"Book"> | string
    publish_location?: StringFilter<"Book"> | string
    country?: StringFilter<"Book"> | string
    description?: StringFilter<"Book"> | string
    link?: StringFilter<"Book"> | string
    language?: StringFilter<"Book"> | string
    isbn?: StringFilter<"Book"> | string
    AuthorBooks?: AuthorBooksListRelationFilter
    CategoryList?: CategoryListListRelationFilter
    KeywordList?: KeywordListListRelationFilter
  }

  export type BookOrderByWithRelationInput = {
    id?: SortOrder
    book_title?: SortOrder
    publisher?: SortOrder
    translator?: SortOrderInput | SortOrder
    publish_date?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
    isbn?: SortOrder
    AuthorBooks?: AuthorBooksOrderByRelationAggregateInput
    CategoryList?: CategoryListOrderByRelationAggregateInput
    KeywordList?: KeywordListOrderByRelationAggregateInput
  }

  export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    isbn?: string
    AND?: BookWhereInput | BookWhereInput[]
    OR?: BookWhereInput[]
    NOT?: BookWhereInput | BookWhereInput[]
    book_title?: StringFilter<"Book"> | string
    publisher?: StringFilter<"Book"> | string
    translator?: StringNullableFilter<"Book"> | string | null
    publish_date?: StringFilter<"Book"> | string
    publish_location?: StringFilter<"Book"> | string
    country?: StringFilter<"Book"> | string
    description?: StringFilter<"Book"> | string
    link?: StringFilter<"Book"> | string
    language?: StringFilter<"Book"> | string
    AuthorBooks?: AuthorBooksListRelationFilter
    CategoryList?: CategoryListListRelationFilter
    KeywordList?: KeywordListListRelationFilter
  }, "id" | "isbn">

  export type BookOrderByWithAggregationInput = {
    id?: SortOrder
    book_title?: SortOrder
    publisher?: SortOrder
    translator?: SortOrderInput | SortOrder
    publish_date?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
    isbn?: SortOrder
    _count?: BookCountOrderByAggregateInput
    _avg?: BookAvgOrderByAggregateInput
    _max?: BookMaxOrderByAggregateInput
    _min?: BookMinOrderByAggregateInput
    _sum?: BookSumOrderByAggregateInput
  }

  export type BookScalarWhereWithAggregatesInput = {
    AND?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    OR?: BookScalarWhereWithAggregatesInput[]
    NOT?: BookScalarWhereWithAggregatesInput | BookScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Book"> | number
    book_title?: StringWithAggregatesFilter<"Book"> | string
    publisher?: StringWithAggregatesFilter<"Book"> | string
    translator?: StringNullableWithAggregatesFilter<"Book"> | string | null
    publish_date?: StringWithAggregatesFilter<"Book"> | string
    publish_location?: StringWithAggregatesFilter<"Book"> | string
    country?: StringWithAggregatesFilter<"Book"> | string
    description?: StringWithAggregatesFilter<"Book"> | string
    link?: StringWithAggregatesFilter<"Book"> | string
    language?: StringWithAggregatesFilter<"Book"> | string
    isbn?: StringWithAggregatesFilter<"Book"> | string
  }

  export type DocumentWhereInput = {
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    id?: IntFilter<"Document"> | number
    document_title?: StringFilter<"Document"> | string
    translator?: StringNullableFilter<"Document"> | string | null
    publish_date?: StringFilter<"Document"> | string
    publisher?: StringFilter<"Document"> | string
    publish_location?: StringFilter<"Document"> | string
    country?: StringFilter<"Document"> | string
    description?: StringFilter<"Document"> | string
    link?: StringFilter<"Document"> | string
    language?: StringFilter<"Document"> | string
    AuthorDocuments?: AuthorDocumentsListRelationFilter
    CategoryList?: CategoryListListRelationFilter
    KeywordList?: KeywordListListRelationFilter
  }

  export type DocumentOrderByWithRelationInput = {
    id?: SortOrder
    document_title?: SortOrder
    translator?: SortOrderInput | SortOrder
    publish_date?: SortOrder
    publisher?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
    AuthorDocuments?: AuthorDocumentsOrderByRelationAggregateInput
    CategoryList?: CategoryListOrderByRelationAggregateInput
    KeywordList?: KeywordListOrderByRelationAggregateInput
  }

  export type DocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DocumentWhereInput | DocumentWhereInput[]
    OR?: DocumentWhereInput[]
    NOT?: DocumentWhereInput | DocumentWhereInput[]
    document_title?: StringFilter<"Document"> | string
    translator?: StringNullableFilter<"Document"> | string | null
    publish_date?: StringFilter<"Document"> | string
    publisher?: StringFilter<"Document"> | string
    publish_location?: StringFilter<"Document"> | string
    country?: StringFilter<"Document"> | string
    description?: StringFilter<"Document"> | string
    link?: StringFilter<"Document"> | string
    language?: StringFilter<"Document"> | string
    AuthorDocuments?: AuthorDocumentsListRelationFilter
    CategoryList?: CategoryListListRelationFilter
    KeywordList?: KeywordListListRelationFilter
  }, "id">

  export type DocumentOrderByWithAggregationInput = {
    id?: SortOrder
    document_title?: SortOrder
    translator?: SortOrderInput | SortOrder
    publish_date?: SortOrder
    publisher?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
    _count?: DocumentCountOrderByAggregateInput
    _avg?: DocumentAvgOrderByAggregateInput
    _max?: DocumentMaxOrderByAggregateInput
    _min?: DocumentMinOrderByAggregateInput
    _sum?: DocumentSumOrderByAggregateInput
  }

  export type DocumentScalarWhereWithAggregatesInput = {
    AND?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    OR?: DocumentScalarWhereWithAggregatesInput[]
    NOT?: DocumentScalarWhereWithAggregatesInput | DocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Document"> | number
    document_title?: StringWithAggregatesFilter<"Document"> | string
    translator?: StringNullableWithAggregatesFilter<"Document"> | string | null
    publish_date?: StringWithAggregatesFilter<"Document"> | string
    publisher?: StringWithAggregatesFilter<"Document"> | string
    publish_location?: StringWithAggregatesFilter<"Document"> | string
    country?: StringWithAggregatesFilter<"Document"> | string
    description?: StringWithAggregatesFilter<"Document"> | string
    link?: StringWithAggregatesFilter<"Document"> | string
    language?: StringWithAggregatesFilter<"Document"> | string
  }

  export type AuthorBooksWhereInput = {
    AND?: AuthorBooksWhereInput | AuthorBooksWhereInput[]
    OR?: AuthorBooksWhereInput[]
    NOT?: AuthorBooksWhereInput | AuthorBooksWhereInput[]
    author_id?: IntFilter<"AuthorBooks"> | number
    book_id?: IntFilter<"AuthorBooks"> | number
    Author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    Book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }

  export type AuthorBooksOrderByWithRelationInput = {
    author_id?: SortOrder
    book_id?: SortOrder
    Author?: AuthorOrderByWithRelationInput
    Book?: BookOrderByWithRelationInput
  }

  export type AuthorBooksWhereUniqueInput = Prisma.AtLeast<{
    author_id_book_id?: AuthorBooksAuthor_idBook_idCompoundUniqueInput
    AND?: AuthorBooksWhereInput | AuthorBooksWhereInput[]
    OR?: AuthorBooksWhereInput[]
    NOT?: AuthorBooksWhereInput | AuthorBooksWhereInput[]
    author_id?: IntFilter<"AuthorBooks"> | number
    book_id?: IntFilter<"AuthorBooks"> | number
    Author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    Book?: XOR<BookScalarRelationFilter, BookWhereInput>
  }, "author_id_book_id">

  export type AuthorBooksOrderByWithAggregationInput = {
    author_id?: SortOrder
    book_id?: SortOrder
    _count?: AuthorBooksCountOrderByAggregateInput
    _avg?: AuthorBooksAvgOrderByAggregateInput
    _max?: AuthorBooksMaxOrderByAggregateInput
    _min?: AuthorBooksMinOrderByAggregateInput
    _sum?: AuthorBooksSumOrderByAggregateInput
  }

  export type AuthorBooksScalarWhereWithAggregatesInput = {
    AND?: AuthorBooksScalarWhereWithAggregatesInput | AuthorBooksScalarWhereWithAggregatesInput[]
    OR?: AuthorBooksScalarWhereWithAggregatesInput[]
    NOT?: AuthorBooksScalarWhereWithAggregatesInput | AuthorBooksScalarWhereWithAggregatesInput[]
    author_id?: IntWithAggregatesFilter<"AuthorBooks"> | number
    book_id?: IntWithAggregatesFilter<"AuthorBooks"> | number
  }

  export type AuthorDocumentsWhereInput = {
    AND?: AuthorDocumentsWhereInput | AuthorDocumentsWhereInput[]
    OR?: AuthorDocumentsWhereInput[]
    NOT?: AuthorDocumentsWhereInput | AuthorDocumentsWhereInput[]
    author_id?: IntFilter<"AuthorDocuments"> | number
    documents_id?: IntFilter<"AuthorDocuments"> | number
    Author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    Document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }

  export type AuthorDocumentsOrderByWithRelationInput = {
    author_id?: SortOrder
    documents_id?: SortOrder
    Author?: AuthorOrderByWithRelationInput
    Document?: DocumentOrderByWithRelationInput
  }

  export type AuthorDocumentsWhereUniqueInput = Prisma.AtLeast<{
    author_id_documents_id?: AuthorDocumentsAuthor_idDocuments_idCompoundUniqueInput
    AND?: AuthorDocumentsWhereInput | AuthorDocumentsWhereInput[]
    OR?: AuthorDocumentsWhereInput[]
    NOT?: AuthorDocumentsWhereInput | AuthorDocumentsWhereInput[]
    author_id?: IntFilter<"AuthorDocuments"> | number
    documents_id?: IntFilter<"AuthorDocuments"> | number
    Author?: XOR<AuthorScalarRelationFilter, AuthorWhereInput>
    Document?: XOR<DocumentScalarRelationFilter, DocumentWhereInput>
  }, "author_id_documents_id">

  export type AuthorDocumentsOrderByWithAggregationInput = {
    author_id?: SortOrder
    documents_id?: SortOrder
    _count?: AuthorDocumentsCountOrderByAggregateInput
    _avg?: AuthorDocumentsAvgOrderByAggregateInput
    _max?: AuthorDocumentsMaxOrderByAggregateInput
    _min?: AuthorDocumentsMinOrderByAggregateInput
    _sum?: AuthorDocumentsSumOrderByAggregateInput
  }

  export type AuthorDocumentsScalarWhereWithAggregatesInput = {
    AND?: AuthorDocumentsScalarWhereWithAggregatesInput | AuthorDocumentsScalarWhereWithAggregatesInput[]
    OR?: AuthorDocumentsScalarWhereWithAggregatesInput[]
    NOT?: AuthorDocumentsScalarWhereWithAggregatesInput | AuthorDocumentsScalarWhereWithAggregatesInput[]
    author_id?: IntWithAggregatesFilter<"AuthorDocuments"> | number
    documents_id?: IntWithAggregatesFilter<"AuthorDocuments"> | number
  }

  export type CategoryListWhereInput = {
    AND?: CategoryListWhereInput | CategoryListWhereInput[]
    OR?: CategoryListWhereInput[]
    NOT?: CategoryListWhereInput | CategoryListWhereInput[]
    id?: IntFilter<"CategoryList"> | number
    book_id?: IntNullableFilter<"CategoryList"> | number | null
    document_id?: IntNullableFilter<"CategoryList"> | number | null
    category_id?: IntFilter<"CategoryList"> | number
    Book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    Document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type CategoryListOrderByWithRelationInput = {
    id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    document_id?: SortOrderInput | SortOrder
    category_id?: SortOrder
    Book?: BookOrderByWithRelationInput
    Document?: DocumentOrderByWithRelationInput
    Category?: CategoryOrderByWithRelationInput
  }

  export type CategoryListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    book_id_category_id?: CategoryListBook_idCategory_idCompoundUniqueInput
    document_id_category_id?: CategoryListDocument_idCategory_idCompoundUniqueInput
    AND?: CategoryListWhereInput | CategoryListWhereInput[]
    OR?: CategoryListWhereInput[]
    NOT?: CategoryListWhereInput | CategoryListWhereInput[]
    book_id?: IntNullableFilter<"CategoryList"> | number | null
    document_id?: IntNullableFilter<"CategoryList"> | number | null
    category_id?: IntFilter<"CategoryList"> | number
    Book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    Document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    Category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id" | "book_id_category_id" | "document_id_category_id">

  export type CategoryListOrderByWithAggregationInput = {
    id?: SortOrder
    book_id?: SortOrderInput | SortOrder
    document_id?: SortOrderInput | SortOrder
    category_id?: SortOrder
    _count?: CategoryListCountOrderByAggregateInput
    _avg?: CategoryListAvgOrderByAggregateInput
    _max?: CategoryListMaxOrderByAggregateInput
    _min?: CategoryListMinOrderByAggregateInput
    _sum?: CategoryListSumOrderByAggregateInput
  }

  export type CategoryListScalarWhereWithAggregatesInput = {
    AND?: CategoryListScalarWhereWithAggregatesInput | CategoryListScalarWhereWithAggregatesInput[]
    OR?: CategoryListScalarWhereWithAggregatesInput[]
    NOT?: CategoryListScalarWhereWithAggregatesInput | CategoryListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CategoryList"> | number
    book_id?: IntNullableWithAggregatesFilter<"CategoryList"> | number | null
    document_id?: IntNullableWithAggregatesFilter<"CategoryList"> | number | null
    category_id?: IntWithAggregatesFilter<"CategoryList"> | number
  }

  export type KeywordListWhereInput = {
    AND?: KeywordListWhereInput | KeywordListWhereInput[]
    OR?: KeywordListWhereInput[]
    NOT?: KeywordListWhereInput | KeywordListWhereInput[]
    id?: IntFilter<"KeywordList"> | number
    document_id?: IntNullableFilter<"KeywordList"> | number | null
    book_id?: IntNullableFilter<"KeywordList"> | number | null
    keyword_id?: IntFilter<"KeywordList"> | number
    Book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    Document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    Keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }

  export type KeywordListOrderByWithRelationInput = {
    id?: SortOrder
    document_id?: SortOrderInput | SortOrder
    book_id?: SortOrderInput | SortOrder
    keyword_id?: SortOrder
    Book?: BookOrderByWithRelationInput
    Document?: DocumentOrderByWithRelationInput
    Keyword?: KeywordOrderByWithRelationInput
  }

  export type KeywordListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    book_id_keyword_id?: KeywordListBook_idKeyword_idCompoundUniqueInput
    document_id_keyword_id?: KeywordListDocument_idKeyword_idCompoundUniqueInput
    AND?: KeywordListWhereInput | KeywordListWhereInput[]
    OR?: KeywordListWhereInput[]
    NOT?: KeywordListWhereInput | KeywordListWhereInput[]
    document_id?: IntNullableFilter<"KeywordList"> | number | null
    book_id?: IntNullableFilter<"KeywordList"> | number | null
    keyword_id?: IntFilter<"KeywordList"> | number
    Book?: XOR<BookNullableScalarRelationFilter, BookWhereInput> | null
    Document?: XOR<DocumentNullableScalarRelationFilter, DocumentWhereInput> | null
    Keyword?: XOR<KeywordScalarRelationFilter, KeywordWhereInput>
  }, "id" | "book_id_keyword_id" | "document_id_keyword_id">

  export type KeywordListOrderByWithAggregationInput = {
    id?: SortOrder
    document_id?: SortOrderInput | SortOrder
    book_id?: SortOrderInput | SortOrder
    keyword_id?: SortOrder
    _count?: KeywordListCountOrderByAggregateInput
    _avg?: KeywordListAvgOrderByAggregateInput
    _max?: KeywordListMaxOrderByAggregateInput
    _min?: KeywordListMinOrderByAggregateInput
    _sum?: KeywordListSumOrderByAggregateInput
  }

  export type KeywordListScalarWhereWithAggregatesInput = {
    AND?: KeywordListScalarWhereWithAggregatesInput | KeywordListScalarWhereWithAggregatesInput[]
    OR?: KeywordListScalarWhereWithAggregatesInput[]
    NOT?: KeywordListScalarWhereWithAggregatesInput | KeywordListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"KeywordList"> | number
    document_id?: IntNullableWithAggregatesFilter<"KeywordList"> | number | null
    book_id?: IntNullableWithAggregatesFilter<"KeywordList"> | number | null
    keyword_id?: IntWithAggregatesFilter<"KeywordList"> | number
  }

  export type CategoryCreateInput = {
    category_name: string
    category_description?: string | null
    CategoryList?: CategoryListCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    category_name: string
    category_description?: string | null
    CategoryList?: CategoryListUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    category_description?: NullableStringFieldUpdateOperationsInput | string | null
    CategoryList?: CategoryListUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    category_description?: NullableStringFieldUpdateOperationsInput | string | null
    CategoryList?: CategoryListUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    category_name: string
    category_description?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    category_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    category_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordCreateInput = {
    keyword_name: string
    keyword_description?: string | null
    KeywordList?: KeywordListCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUncheckedCreateInput = {
    id?: number
    keyword_name: string
    keyword_description?: string | null
    KeywordList?: KeywordListUncheckedCreateNestedManyWithoutKeywordInput
  }

  export type KeywordUpdateInput = {
    keyword_name?: StringFieldUpdateOperationsInput | string
    keyword_description?: NullableStringFieldUpdateOperationsInput | string | null
    KeywordList?: KeywordListUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword_name?: StringFieldUpdateOperationsInput | string
    keyword_description?: NullableStringFieldUpdateOperationsInput | string | null
    KeywordList?: KeywordListUncheckedUpdateManyWithoutKeywordNestedInput
  }

  export type KeywordCreateManyInput = {
    id?: number
    keyword_name: string
    keyword_description?: string | null
  }

  export type KeywordUpdateManyMutationInput = {
    keyword_name?: StringFieldUpdateOperationsInput | string
    keyword_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword_name?: StringFieldUpdateOperationsInput | string
    keyword_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AuthorCreateInput = {
    country: string
    first_name: string
    last_name: string
    AuthorBooks?: AuthorBooksCreateNestedManyWithoutAuthorInput
    AuthorDocuments?: AuthorDocumentsCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateInput = {
    id?: number
    country: string
    first_name: string
    last_name: string
    AuthorBooks?: AuthorBooksUncheckedCreateNestedManyWithoutAuthorInput
    AuthorDocuments?: AuthorDocumentsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUpdateManyWithoutAuthorNestedInput
    AuthorDocuments?: AuthorDocumentsUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUncheckedUpdateManyWithoutAuthorNestedInput
    AuthorDocuments?: AuthorDocumentsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorCreateManyInput = {
    id?: number
    country: string
    first_name: string
    last_name: string
  }

  export type AuthorUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
  }

  export type BookCreateInput = {
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    AuthorBooks?: AuthorBooksCreateNestedManyWithoutBookInput
    CategoryList?: CategoryListCreateNestedManyWithoutBookInput
    KeywordList?: KeywordListCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateInput = {
    id?: number
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    AuthorBooks?: AuthorBooksUncheckedCreateNestedManyWithoutBookInput
    CategoryList?: CategoryListUncheckedCreateNestedManyWithoutBookInput
    KeywordList?: KeywordListUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookUpdateInput = {
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUpdateManyWithoutBookNestedInput
    CategoryList?: CategoryListUpdateManyWithoutBookNestedInput
    KeywordList?: KeywordListUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUncheckedUpdateManyWithoutBookNestedInput
    CategoryList?: CategoryListUncheckedUpdateManyWithoutBookNestedInput
    KeywordList?: KeywordListUncheckedUpdateManyWithoutBookNestedInput
  }

  export type BookCreateManyInput = {
    id?: number
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
  }

  export type BookUpdateManyMutationInput = {
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
  }

  export type BookUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentCreateInput = {
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    AuthorDocuments?: AuthorDocumentsCreateNestedManyWithoutDocumentInput
    CategoryList?: CategoryListCreateNestedManyWithoutDocumentInput
    KeywordList?: KeywordListCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateInput = {
    id?: number
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    AuthorDocuments?: AuthorDocumentsUncheckedCreateNestedManyWithoutDocumentInput
    CategoryList?: CategoryListUncheckedCreateNestedManyWithoutDocumentInput
    KeywordList?: KeywordListUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUpdateInput = {
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUpdateManyWithoutDocumentNestedInput
    CategoryList?: CategoryListUpdateManyWithoutDocumentNestedInput
    KeywordList?: KeywordListUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUncheckedUpdateManyWithoutDocumentNestedInput
    CategoryList?: CategoryListUncheckedUpdateManyWithoutDocumentNestedInput
    KeywordList?: KeywordListUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentCreateManyInput = {
    id?: number
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
  }

  export type DocumentUpdateManyMutationInput = {
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type DocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
  }

  export type AuthorBooksCreateInput = {
    Author: AuthorCreateNestedOneWithoutAuthorBooksInput
    Book: BookCreateNestedOneWithoutAuthorBooksInput
  }

  export type AuthorBooksUncheckedCreateInput = {
    author_id: number
    book_id: number
  }

  export type AuthorBooksUpdateInput = {
    Author?: AuthorUpdateOneRequiredWithoutAuthorBooksNestedInput
    Book?: BookUpdateOneRequiredWithoutAuthorBooksNestedInput
  }

  export type AuthorBooksUncheckedUpdateInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorBooksCreateManyInput = {
    author_id: number
    book_id: number
  }

  export type AuthorBooksUpdateManyMutationInput = {

  }

  export type AuthorBooksUncheckedUpdateManyInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorDocumentsCreateInput = {
    Author: AuthorCreateNestedOneWithoutAuthorDocumentsInput
    Document: DocumentCreateNestedOneWithoutAuthorDocumentsInput
  }

  export type AuthorDocumentsUncheckedCreateInput = {
    author_id: number
    documents_id: number
  }

  export type AuthorDocumentsUpdateInput = {
    Author?: AuthorUpdateOneRequiredWithoutAuthorDocumentsNestedInput
    Document?: DocumentUpdateOneRequiredWithoutAuthorDocumentsNestedInput
  }

  export type AuthorDocumentsUncheckedUpdateInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    documents_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorDocumentsCreateManyInput = {
    author_id: number
    documents_id: number
  }

  export type AuthorDocumentsUpdateManyMutationInput = {

  }

  export type AuthorDocumentsUncheckedUpdateManyInput = {
    author_id?: IntFieldUpdateOperationsInput | number
    documents_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryListCreateInput = {
    Book?: BookCreateNestedOneWithoutCategoryListInput
    Document?: DocumentCreateNestedOneWithoutCategoryListInput
    Category: CategoryCreateNestedOneWithoutCategoryListInput
  }

  export type CategoryListUncheckedCreateInput = {
    id?: number
    book_id?: number | null
    document_id?: number | null
    category_id: number
  }

  export type CategoryListUpdateInput = {
    Book?: BookUpdateOneWithoutCategoryListNestedInput
    Document?: DocumentUpdateOneWithoutCategoryListNestedInput
    Category?: CategoryUpdateOneRequiredWithoutCategoryListNestedInput
  }

  export type CategoryListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryListCreateManyInput = {
    id?: number
    book_id?: number | null
    document_id?: number | null
    category_id: number
  }

  export type CategoryListUpdateManyMutationInput = {

  }

  export type CategoryListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type KeywordListCreateInput = {
    Book?: BookCreateNestedOneWithoutKeywordListInput
    Document?: DocumentCreateNestedOneWithoutKeywordListInput
    Keyword: KeywordCreateNestedOneWithoutKeywordListInput
  }

  export type KeywordListUncheckedCreateInput = {
    id?: number
    document_id?: number | null
    book_id?: number | null
    keyword_id: number
  }

  export type KeywordListUpdateInput = {
    Book?: BookUpdateOneWithoutKeywordListNestedInput
    Document?: DocumentUpdateOneWithoutKeywordListNestedInput
    Keyword?: KeywordUpdateOneRequiredWithoutKeywordListNestedInput
  }

  export type KeywordListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    keyword_id?: IntFieldUpdateOperationsInput | number
  }

  export type KeywordListCreateManyInput = {
    id?: number
    document_id?: number | null
    book_id?: number | null
    keyword_id: number
  }

  export type KeywordListUpdateManyMutationInput = {

  }

  export type KeywordListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    keyword_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CategoryListListRelationFilter = {
    every?: CategoryListWhereInput
    some?: CategoryListWhereInput
    none?: CategoryListWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CategoryListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    category_description?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    category_description?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    category_name?: SortOrder
    category_description?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type KeywordListListRelationFilter = {
    every?: KeywordListWhereInput
    some?: KeywordListWhereInput
    none?: KeywordListWhereInput
  }

  export type KeywordListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KeywordCountOrderByAggregateInput = {
    id?: SortOrder
    keyword_name?: SortOrder
    keyword_description?: SortOrder
  }

  export type KeywordAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KeywordMaxOrderByAggregateInput = {
    id?: SortOrder
    keyword_name?: SortOrder
    keyword_description?: SortOrder
  }

  export type KeywordMinOrderByAggregateInput = {
    id?: SortOrder
    keyword_name?: SortOrder
    keyword_description?: SortOrder
  }

  export type KeywordSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorBooksListRelationFilter = {
    every?: AuthorBooksWhereInput
    some?: AuthorBooksWhereInput
    none?: AuthorBooksWhereInput
  }

  export type AuthorDocumentsListRelationFilter = {
    every?: AuthorDocumentsWhereInput
    some?: AuthorDocumentsWhereInput
    none?: AuthorDocumentsWhereInput
  }

  export type AuthorBooksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorDocumentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuthorCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type AuthorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type AuthorMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
  }

  export type AuthorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookCountOrderByAggregateInput = {
    id?: SortOrder
    book_title?: SortOrder
    publisher?: SortOrder
    translator?: SortOrder
    publish_date?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
    isbn?: SortOrder
  }

  export type BookAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BookMaxOrderByAggregateInput = {
    id?: SortOrder
    book_title?: SortOrder
    publisher?: SortOrder
    translator?: SortOrder
    publish_date?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
    isbn?: SortOrder
  }

  export type BookMinOrderByAggregateInput = {
    id?: SortOrder
    book_title?: SortOrder
    publisher?: SortOrder
    translator?: SortOrder
    publish_date?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
    isbn?: SortOrder
  }

  export type BookSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentCountOrderByAggregateInput = {
    id?: SortOrder
    document_title?: SortOrder
    translator?: SortOrder
    publish_date?: SortOrder
    publisher?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
  }

  export type DocumentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    document_title?: SortOrder
    translator?: SortOrder
    publish_date?: SortOrder
    publisher?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
  }

  export type DocumentMinOrderByAggregateInput = {
    id?: SortOrder
    document_title?: SortOrder
    translator?: SortOrder
    publish_date?: SortOrder
    publisher?: SortOrder
    publish_location?: SortOrder
    country?: SortOrder
    description?: SortOrder
    link?: SortOrder
    language?: SortOrder
  }

  export type DocumentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AuthorScalarRelationFilter = {
    is?: AuthorWhereInput
    isNot?: AuthorWhereInput
  }

  export type BookScalarRelationFilter = {
    is?: BookWhereInput
    isNot?: BookWhereInput
  }

  export type AuthorBooksAuthor_idBook_idCompoundUniqueInput = {
    author_id: number
    book_id: number
  }

  export type AuthorBooksCountOrderByAggregateInput = {
    author_id?: SortOrder
    book_id?: SortOrder
  }

  export type AuthorBooksAvgOrderByAggregateInput = {
    author_id?: SortOrder
    book_id?: SortOrder
  }

  export type AuthorBooksMaxOrderByAggregateInput = {
    author_id?: SortOrder
    book_id?: SortOrder
  }

  export type AuthorBooksMinOrderByAggregateInput = {
    author_id?: SortOrder
    book_id?: SortOrder
  }

  export type AuthorBooksSumOrderByAggregateInput = {
    author_id?: SortOrder
    book_id?: SortOrder
  }

  export type DocumentScalarRelationFilter = {
    is?: DocumentWhereInput
    isNot?: DocumentWhereInput
  }

  export type AuthorDocumentsAuthor_idDocuments_idCompoundUniqueInput = {
    author_id: number
    documents_id: number
  }

  export type AuthorDocumentsCountOrderByAggregateInput = {
    author_id?: SortOrder
    documents_id?: SortOrder
  }

  export type AuthorDocumentsAvgOrderByAggregateInput = {
    author_id?: SortOrder
    documents_id?: SortOrder
  }

  export type AuthorDocumentsMaxOrderByAggregateInput = {
    author_id?: SortOrder
    documents_id?: SortOrder
  }

  export type AuthorDocumentsMinOrderByAggregateInput = {
    author_id?: SortOrder
    documents_id?: SortOrder
  }

  export type AuthorDocumentsSumOrderByAggregateInput = {
    author_id?: SortOrder
    documents_id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BookNullableScalarRelationFilter = {
    is?: BookWhereInput | null
    isNot?: BookWhereInput | null
  }

  export type DocumentNullableScalarRelationFilter = {
    is?: DocumentWhereInput | null
    isNot?: DocumentWhereInput | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CategoryListBook_idCategory_idCompoundUniqueInput = {
    book_id: number
    category_id: number
  }

  export type CategoryListDocument_idCategory_idCompoundUniqueInput = {
    document_id: number
    category_id: number
  }

  export type CategoryListCountOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    document_id?: SortOrder
    category_id?: SortOrder
  }

  export type CategoryListAvgOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    document_id?: SortOrder
    category_id?: SortOrder
  }

  export type CategoryListMaxOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    document_id?: SortOrder
    category_id?: SortOrder
  }

  export type CategoryListMinOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    document_id?: SortOrder
    category_id?: SortOrder
  }

  export type CategoryListSumOrderByAggregateInput = {
    id?: SortOrder
    book_id?: SortOrder
    document_id?: SortOrder
    category_id?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type KeywordScalarRelationFilter = {
    is?: KeywordWhereInput
    isNot?: KeywordWhereInput
  }

  export type KeywordListBook_idKeyword_idCompoundUniqueInput = {
    book_id: number
    keyword_id: number
  }

  export type KeywordListDocument_idKeyword_idCompoundUniqueInput = {
    document_id: number
    keyword_id: number
  }

  export type KeywordListCountOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    book_id?: SortOrder
    keyword_id?: SortOrder
  }

  export type KeywordListAvgOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    book_id?: SortOrder
    keyword_id?: SortOrder
  }

  export type KeywordListMaxOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    book_id?: SortOrder
    keyword_id?: SortOrder
  }

  export type KeywordListMinOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    book_id?: SortOrder
    keyword_id?: SortOrder
  }

  export type KeywordListSumOrderByAggregateInput = {
    id?: SortOrder
    document_id?: SortOrder
    book_id?: SortOrder
    keyword_id?: SortOrder
  }

  export type CategoryListCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryListCreateWithoutCategoryInput, CategoryListUncheckedCreateWithoutCategoryInput> | CategoryListCreateWithoutCategoryInput[] | CategoryListUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutCategoryInput | CategoryListCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryListCreateManyCategoryInputEnvelope
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
  }

  export type CategoryListUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CategoryListCreateWithoutCategoryInput, CategoryListUncheckedCreateWithoutCategoryInput> | CategoryListCreateWithoutCategoryInput[] | CategoryListUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutCategoryInput | CategoryListCreateOrConnectWithoutCategoryInput[]
    createMany?: CategoryListCreateManyCategoryInputEnvelope
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CategoryListUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryListCreateWithoutCategoryInput, CategoryListUncheckedCreateWithoutCategoryInput> | CategoryListCreateWithoutCategoryInput[] | CategoryListUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutCategoryInput | CategoryListCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryListUpsertWithWhereUniqueWithoutCategoryInput | CategoryListUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryListCreateManyCategoryInputEnvelope
    set?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    disconnect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    delete?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    update?: CategoryListUpdateWithWhereUniqueWithoutCategoryInput | CategoryListUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryListUpdateManyWithWhereWithoutCategoryInput | CategoryListUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryListUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CategoryListCreateWithoutCategoryInput, CategoryListUncheckedCreateWithoutCategoryInput> | CategoryListCreateWithoutCategoryInput[] | CategoryListUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutCategoryInput | CategoryListCreateOrConnectWithoutCategoryInput[]
    upsert?: CategoryListUpsertWithWhereUniqueWithoutCategoryInput | CategoryListUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CategoryListCreateManyCategoryInputEnvelope
    set?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    disconnect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    delete?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    update?: CategoryListUpdateWithWhereUniqueWithoutCategoryInput | CategoryListUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CategoryListUpdateManyWithWhereWithoutCategoryInput | CategoryListUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
  }

  export type KeywordListCreateNestedManyWithoutKeywordInput = {
    create?: XOR<KeywordListCreateWithoutKeywordInput, KeywordListUncheckedCreateWithoutKeywordInput> | KeywordListCreateWithoutKeywordInput[] | KeywordListUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutKeywordInput | KeywordListCreateOrConnectWithoutKeywordInput[]
    createMany?: KeywordListCreateManyKeywordInputEnvelope
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
  }

  export type KeywordListUncheckedCreateNestedManyWithoutKeywordInput = {
    create?: XOR<KeywordListCreateWithoutKeywordInput, KeywordListUncheckedCreateWithoutKeywordInput> | KeywordListCreateWithoutKeywordInput[] | KeywordListUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutKeywordInput | KeywordListCreateOrConnectWithoutKeywordInput[]
    createMany?: KeywordListCreateManyKeywordInputEnvelope
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
  }

  export type KeywordListUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<KeywordListCreateWithoutKeywordInput, KeywordListUncheckedCreateWithoutKeywordInput> | KeywordListCreateWithoutKeywordInput[] | KeywordListUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutKeywordInput | KeywordListCreateOrConnectWithoutKeywordInput[]
    upsert?: KeywordListUpsertWithWhereUniqueWithoutKeywordInput | KeywordListUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: KeywordListCreateManyKeywordInputEnvelope
    set?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    disconnect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    delete?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    update?: KeywordListUpdateWithWhereUniqueWithoutKeywordInput | KeywordListUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: KeywordListUpdateManyWithWhereWithoutKeywordInput | KeywordListUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
  }

  export type KeywordListUncheckedUpdateManyWithoutKeywordNestedInput = {
    create?: XOR<KeywordListCreateWithoutKeywordInput, KeywordListUncheckedCreateWithoutKeywordInput> | KeywordListCreateWithoutKeywordInput[] | KeywordListUncheckedCreateWithoutKeywordInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutKeywordInput | KeywordListCreateOrConnectWithoutKeywordInput[]
    upsert?: KeywordListUpsertWithWhereUniqueWithoutKeywordInput | KeywordListUpsertWithWhereUniqueWithoutKeywordInput[]
    createMany?: KeywordListCreateManyKeywordInputEnvelope
    set?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    disconnect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    delete?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    update?: KeywordListUpdateWithWhereUniqueWithoutKeywordInput | KeywordListUpdateWithWhereUniqueWithoutKeywordInput[]
    updateMany?: KeywordListUpdateManyWithWhereWithoutKeywordInput | KeywordListUpdateManyWithWhereWithoutKeywordInput[]
    deleteMany?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
  }

  export type AuthorBooksCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorBooksCreateWithoutAuthorInput, AuthorBooksUncheckedCreateWithoutAuthorInput> | AuthorBooksCreateWithoutAuthorInput[] | AuthorBooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutAuthorInput | AuthorBooksCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorBooksCreateManyAuthorInputEnvelope
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
  }

  export type AuthorDocumentsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorDocumentsCreateWithoutAuthorInput, AuthorDocumentsUncheckedCreateWithoutAuthorInput> | AuthorDocumentsCreateWithoutAuthorInput[] | AuthorDocumentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutAuthorInput | AuthorDocumentsCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorDocumentsCreateManyAuthorInputEnvelope
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
  }

  export type AuthorBooksUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorBooksCreateWithoutAuthorInput, AuthorBooksUncheckedCreateWithoutAuthorInput> | AuthorBooksCreateWithoutAuthorInput[] | AuthorBooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutAuthorInput | AuthorBooksCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorBooksCreateManyAuthorInputEnvelope
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
  }

  export type AuthorDocumentsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AuthorDocumentsCreateWithoutAuthorInput, AuthorDocumentsUncheckedCreateWithoutAuthorInput> | AuthorDocumentsCreateWithoutAuthorInput[] | AuthorDocumentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutAuthorInput | AuthorDocumentsCreateOrConnectWithoutAuthorInput[]
    createMany?: AuthorDocumentsCreateManyAuthorInputEnvelope
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
  }

  export type AuthorBooksUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorBooksCreateWithoutAuthorInput, AuthorBooksUncheckedCreateWithoutAuthorInput> | AuthorBooksCreateWithoutAuthorInput[] | AuthorBooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutAuthorInput | AuthorBooksCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorBooksUpsertWithWhereUniqueWithoutAuthorInput | AuthorBooksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorBooksCreateManyAuthorInputEnvelope
    set?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    disconnect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    delete?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    update?: AuthorBooksUpdateWithWhereUniqueWithoutAuthorInput | AuthorBooksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorBooksUpdateManyWithWhereWithoutAuthorInput | AuthorBooksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorBooksScalarWhereInput | AuthorBooksScalarWhereInput[]
  }

  export type AuthorDocumentsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorDocumentsCreateWithoutAuthorInput, AuthorDocumentsUncheckedCreateWithoutAuthorInput> | AuthorDocumentsCreateWithoutAuthorInput[] | AuthorDocumentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutAuthorInput | AuthorDocumentsCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorDocumentsUpsertWithWhereUniqueWithoutAuthorInput | AuthorDocumentsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorDocumentsCreateManyAuthorInputEnvelope
    set?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    disconnect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    delete?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    update?: AuthorDocumentsUpdateWithWhereUniqueWithoutAuthorInput | AuthorDocumentsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorDocumentsUpdateManyWithWhereWithoutAuthorInput | AuthorDocumentsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorDocumentsScalarWhereInput | AuthorDocumentsScalarWhereInput[]
  }

  export type AuthorBooksUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorBooksCreateWithoutAuthorInput, AuthorBooksUncheckedCreateWithoutAuthorInput> | AuthorBooksCreateWithoutAuthorInput[] | AuthorBooksUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutAuthorInput | AuthorBooksCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorBooksUpsertWithWhereUniqueWithoutAuthorInput | AuthorBooksUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorBooksCreateManyAuthorInputEnvelope
    set?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    disconnect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    delete?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    update?: AuthorBooksUpdateWithWhereUniqueWithoutAuthorInput | AuthorBooksUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorBooksUpdateManyWithWhereWithoutAuthorInput | AuthorBooksUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorBooksScalarWhereInput | AuthorBooksScalarWhereInput[]
  }

  export type AuthorDocumentsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AuthorDocumentsCreateWithoutAuthorInput, AuthorDocumentsUncheckedCreateWithoutAuthorInput> | AuthorDocumentsCreateWithoutAuthorInput[] | AuthorDocumentsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutAuthorInput | AuthorDocumentsCreateOrConnectWithoutAuthorInput[]
    upsert?: AuthorDocumentsUpsertWithWhereUniqueWithoutAuthorInput | AuthorDocumentsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AuthorDocumentsCreateManyAuthorInputEnvelope
    set?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    disconnect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    delete?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    update?: AuthorDocumentsUpdateWithWhereUniqueWithoutAuthorInput | AuthorDocumentsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AuthorDocumentsUpdateManyWithWhereWithoutAuthorInput | AuthorDocumentsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AuthorDocumentsScalarWhereInput | AuthorDocumentsScalarWhereInput[]
  }

  export type AuthorBooksCreateNestedManyWithoutBookInput = {
    create?: XOR<AuthorBooksCreateWithoutBookInput, AuthorBooksUncheckedCreateWithoutBookInput> | AuthorBooksCreateWithoutBookInput[] | AuthorBooksUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutBookInput | AuthorBooksCreateOrConnectWithoutBookInput[]
    createMany?: AuthorBooksCreateManyBookInputEnvelope
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
  }

  export type CategoryListCreateNestedManyWithoutBookInput = {
    create?: XOR<CategoryListCreateWithoutBookInput, CategoryListUncheckedCreateWithoutBookInput> | CategoryListCreateWithoutBookInput[] | CategoryListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutBookInput | CategoryListCreateOrConnectWithoutBookInput[]
    createMany?: CategoryListCreateManyBookInputEnvelope
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
  }

  export type KeywordListCreateNestedManyWithoutBookInput = {
    create?: XOR<KeywordListCreateWithoutBookInput, KeywordListUncheckedCreateWithoutBookInput> | KeywordListCreateWithoutBookInput[] | KeywordListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutBookInput | KeywordListCreateOrConnectWithoutBookInput[]
    createMany?: KeywordListCreateManyBookInputEnvelope
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
  }

  export type AuthorBooksUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<AuthorBooksCreateWithoutBookInput, AuthorBooksUncheckedCreateWithoutBookInput> | AuthorBooksCreateWithoutBookInput[] | AuthorBooksUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutBookInput | AuthorBooksCreateOrConnectWithoutBookInput[]
    createMany?: AuthorBooksCreateManyBookInputEnvelope
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
  }

  export type CategoryListUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<CategoryListCreateWithoutBookInput, CategoryListUncheckedCreateWithoutBookInput> | CategoryListCreateWithoutBookInput[] | CategoryListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutBookInput | CategoryListCreateOrConnectWithoutBookInput[]
    createMany?: CategoryListCreateManyBookInputEnvelope
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
  }

  export type KeywordListUncheckedCreateNestedManyWithoutBookInput = {
    create?: XOR<KeywordListCreateWithoutBookInput, KeywordListUncheckedCreateWithoutBookInput> | KeywordListCreateWithoutBookInput[] | KeywordListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutBookInput | KeywordListCreateOrConnectWithoutBookInput[]
    createMany?: KeywordListCreateManyBookInputEnvelope
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
  }

  export type AuthorBooksUpdateManyWithoutBookNestedInput = {
    create?: XOR<AuthorBooksCreateWithoutBookInput, AuthorBooksUncheckedCreateWithoutBookInput> | AuthorBooksCreateWithoutBookInput[] | AuthorBooksUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutBookInput | AuthorBooksCreateOrConnectWithoutBookInput[]
    upsert?: AuthorBooksUpsertWithWhereUniqueWithoutBookInput | AuthorBooksUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AuthorBooksCreateManyBookInputEnvelope
    set?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    disconnect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    delete?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    update?: AuthorBooksUpdateWithWhereUniqueWithoutBookInput | AuthorBooksUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AuthorBooksUpdateManyWithWhereWithoutBookInput | AuthorBooksUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AuthorBooksScalarWhereInput | AuthorBooksScalarWhereInput[]
  }

  export type CategoryListUpdateManyWithoutBookNestedInput = {
    create?: XOR<CategoryListCreateWithoutBookInput, CategoryListUncheckedCreateWithoutBookInput> | CategoryListCreateWithoutBookInput[] | CategoryListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutBookInput | CategoryListCreateOrConnectWithoutBookInput[]
    upsert?: CategoryListUpsertWithWhereUniqueWithoutBookInput | CategoryListUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CategoryListCreateManyBookInputEnvelope
    set?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    disconnect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    delete?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    update?: CategoryListUpdateWithWhereUniqueWithoutBookInput | CategoryListUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CategoryListUpdateManyWithWhereWithoutBookInput | CategoryListUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
  }

  export type KeywordListUpdateManyWithoutBookNestedInput = {
    create?: XOR<KeywordListCreateWithoutBookInput, KeywordListUncheckedCreateWithoutBookInput> | KeywordListCreateWithoutBookInput[] | KeywordListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutBookInput | KeywordListCreateOrConnectWithoutBookInput[]
    upsert?: KeywordListUpsertWithWhereUniqueWithoutBookInput | KeywordListUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: KeywordListCreateManyBookInputEnvelope
    set?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    disconnect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    delete?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    update?: KeywordListUpdateWithWhereUniqueWithoutBookInput | KeywordListUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: KeywordListUpdateManyWithWhereWithoutBookInput | KeywordListUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
  }

  export type AuthorBooksUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<AuthorBooksCreateWithoutBookInput, AuthorBooksUncheckedCreateWithoutBookInput> | AuthorBooksCreateWithoutBookInput[] | AuthorBooksUncheckedCreateWithoutBookInput[]
    connectOrCreate?: AuthorBooksCreateOrConnectWithoutBookInput | AuthorBooksCreateOrConnectWithoutBookInput[]
    upsert?: AuthorBooksUpsertWithWhereUniqueWithoutBookInput | AuthorBooksUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: AuthorBooksCreateManyBookInputEnvelope
    set?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    disconnect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    delete?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    connect?: AuthorBooksWhereUniqueInput | AuthorBooksWhereUniqueInput[]
    update?: AuthorBooksUpdateWithWhereUniqueWithoutBookInput | AuthorBooksUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: AuthorBooksUpdateManyWithWhereWithoutBookInput | AuthorBooksUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: AuthorBooksScalarWhereInput | AuthorBooksScalarWhereInput[]
  }

  export type CategoryListUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<CategoryListCreateWithoutBookInput, CategoryListUncheckedCreateWithoutBookInput> | CategoryListCreateWithoutBookInput[] | CategoryListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutBookInput | CategoryListCreateOrConnectWithoutBookInput[]
    upsert?: CategoryListUpsertWithWhereUniqueWithoutBookInput | CategoryListUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: CategoryListCreateManyBookInputEnvelope
    set?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    disconnect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    delete?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    update?: CategoryListUpdateWithWhereUniqueWithoutBookInput | CategoryListUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: CategoryListUpdateManyWithWhereWithoutBookInput | CategoryListUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
  }

  export type KeywordListUncheckedUpdateManyWithoutBookNestedInput = {
    create?: XOR<KeywordListCreateWithoutBookInput, KeywordListUncheckedCreateWithoutBookInput> | KeywordListCreateWithoutBookInput[] | KeywordListUncheckedCreateWithoutBookInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutBookInput | KeywordListCreateOrConnectWithoutBookInput[]
    upsert?: KeywordListUpsertWithWhereUniqueWithoutBookInput | KeywordListUpsertWithWhereUniqueWithoutBookInput[]
    createMany?: KeywordListCreateManyBookInputEnvelope
    set?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    disconnect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    delete?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    update?: KeywordListUpdateWithWhereUniqueWithoutBookInput | KeywordListUpdateWithWhereUniqueWithoutBookInput[]
    updateMany?: KeywordListUpdateManyWithWhereWithoutBookInput | KeywordListUpdateManyWithWhereWithoutBookInput[]
    deleteMany?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
  }

  export type AuthorDocumentsCreateNestedManyWithoutDocumentInput = {
    create?: XOR<AuthorDocumentsCreateWithoutDocumentInput, AuthorDocumentsUncheckedCreateWithoutDocumentInput> | AuthorDocumentsCreateWithoutDocumentInput[] | AuthorDocumentsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutDocumentInput | AuthorDocumentsCreateOrConnectWithoutDocumentInput[]
    createMany?: AuthorDocumentsCreateManyDocumentInputEnvelope
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
  }

  export type CategoryListCreateNestedManyWithoutDocumentInput = {
    create?: XOR<CategoryListCreateWithoutDocumentInput, CategoryListUncheckedCreateWithoutDocumentInput> | CategoryListCreateWithoutDocumentInput[] | CategoryListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutDocumentInput | CategoryListCreateOrConnectWithoutDocumentInput[]
    createMany?: CategoryListCreateManyDocumentInputEnvelope
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
  }

  export type KeywordListCreateNestedManyWithoutDocumentInput = {
    create?: XOR<KeywordListCreateWithoutDocumentInput, KeywordListUncheckedCreateWithoutDocumentInput> | KeywordListCreateWithoutDocumentInput[] | KeywordListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutDocumentInput | KeywordListCreateOrConnectWithoutDocumentInput[]
    createMany?: KeywordListCreateManyDocumentInputEnvelope
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
  }

  export type AuthorDocumentsUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<AuthorDocumentsCreateWithoutDocumentInput, AuthorDocumentsUncheckedCreateWithoutDocumentInput> | AuthorDocumentsCreateWithoutDocumentInput[] | AuthorDocumentsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutDocumentInput | AuthorDocumentsCreateOrConnectWithoutDocumentInput[]
    createMany?: AuthorDocumentsCreateManyDocumentInputEnvelope
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
  }

  export type CategoryListUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<CategoryListCreateWithoutDocumentInput, CategoryListUncheckedCreateWithoutDocumentInput> | CategoryListCreateWithoutDocumentInput[] | CategoryListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutDocumentInput | CategoryListCreateOrConnectWithoutDocumentInput[]
    createMany?: CategoryListCreateManyDocumentInputEnvelope
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
  }

  export type KeywordListUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<KeywordListCreateWithoutDocumentInput, KeywordListUncheckedCreateWithoutDocumentInput> | KeywordListCreateWithoutDocumentInput[] | KeywordListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutDocumentInput | KeywordListCreateOrConnectWithoutDocumentInput[]
    createMany?: KeywordListCreateManyDocumentInputEnvelope
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
  }

  export type AuthorDocumentsUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<AuthorDocumentsCreateWithoutDocumentInput, AuthorDocumentsUncheckedCreateWithoutDocumentInput> | AuthorDocumentsCreateWithoutDocumentInput[] | AuthorDocumentsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutDocumentInput | AuthorDocumentsCreateOrConnectWithoutDocumentInput[]
    upsert?: AuthorDocumentsUpsertWithWhereUniqueWithoutDocumentInput | AuthorDocumentsUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: AuthorDocumentsCreateManyDocumentInputEnvelope
    set?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    disconnect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    delete?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    update?: AuthorDocumentsUpdateWithWhereUniqueWithoutDocumentInput | AuthorDocumentsUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: AuthorDocumentsUpdateManyWithWhereWithoutDocumentInput | AuthorDocumentsUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: AuthorDocumentsScalarWhereInput | AuthorDocumentsScalarWhereInput[]
  }

  export type CategoryListUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<CategoryListCreateWithoutDocumentInput, CategoryListUncheckedCreateWithoutDocumentInput> | CategoryListCreateWithoutDocumentInput[] | CategoryListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutDocumentInput | CategoryListCreateOrConnectWithoutDocumentInput[]
    upsert?: CategoryListUpsertWithWhereUniqueWithoutDocumentInput | CategoryListUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: CategoryListCreateManyDocumentInputEnvelope
    set?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    disconnect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    delete?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    update?: CategoryListUpdateWithWhereUniqueWithoutDocumentInput | CategoryListUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: CategoryListUpdateManyWithWhereWithoutDocumentInput | CategoryListUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
  }

  export type KeywordListUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<KeywordListCreateWithoutDocumentInput, KeywordListUncheckedCreateWithoutDocumentInput> | KeywordListCreateWithoutDocumentInput[] | KeywordListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutDocumentInput | KeywordListCreateOrConnectWithoutDocumentInput[]
    upsert?: KeywordListUpsertWithWhereUniqueWithoutDocumentInput | KeywordListUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: KeywordListCreateManyDocumentInputEnvelope
    set?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    disconnect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    delete?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    update?: KeywordListUpdateWithWhereUniqueWithoutDocumentInput | KeywordListUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: KeywordListUpdateManyWithWhereWithoutDocumentInput | KeywordListUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
  }

  export type AuthorDocumentsUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<AuthorDocumentsCreateWithoutDocumentInput, AuthorDocumentsUncheckedCreateWithoutDocumentInput> | AuthorDocumentsCreateWithoutDocumentInput[] | AuthorDocumentsUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: AuthorDocumentsCreateOrConnectWithoutDocumentInput | AuthorDocumentsCreateOrConnectWithoutDocumentInput[]
    upsert?: AuthorDocumentsUpsertWithWhereUniqueWithoutDocumentInput | AuthorDocumentsUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: AuthorDocumentsCreateManyDocumentInputEnvelope
    set?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    disconnect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    delete?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    connect?: AuthorDocumentsWhereUniqueInput | AuthorDocumentsWhereUniqueInput[]
    update?: AuthorDocumentsUpdateWithWhereUniqueWithoutDocumentInput | AuthorDocumentsUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: AuthorDocumentsUpdateManyWithWhereWithoutDocumentInput | AuthorDocumentsUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: AuthorDocumentsScalarWhereInput | AuthorDocumentsScalarWhereInput[]
  }

  export type CategoryListUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<CategoryListCreateWithoutDocumentInput, CategoryListUncheckedCreateWithoutDocumentInput> | CategoryListCreateWithoutDocumentInput[] | CategoryListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: CategoryListCreateOrConnectWithoutDocumentInput | CategoryListCreateOrConnectWithoutDocumentInput[]
    upsert?: CategoryListUpsertWithWhereUniqueWithoutDocumentInput | CategoryListUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: CategoryListCreateManyDocumentInputEnvelope
    set?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    disconnect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    delete?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    connect?: CategoryListWhereUniqueInput | CategoryListWhereUniqueInput[]
    update?: CategoryListUpdateWithWhereUniqueWithoutDocumentInput | CategoryListUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: CategoryListUpdateManyWithWhereWithoutDocumentInput | CategoryListUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
  }

  export type KeywordListUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<KeywordListCreateWithoutDocumentInput, KeywordListUncheckedCreateWithoutDocumentInput> | KeywordListCreateWithoutDocumentInput[] | KeywordListUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: KeywordListCreateOrConnectWithoutDocumentInput | KeywordListCreateOrConnectWithoutDocumentInput[]
    upsert?: KeywordListUpsertWithWhereUniqueWithoutDocumentInput | KeywordListUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: KeywordListCreateManyDocumentInputEnvelope
    set?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    disconnect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    delete?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    connect?: KeywordListWhereUniqueInput | KeywordListWhereUniqueInput[]
    update?: KeywordListUpdateWithWhereUniqueWithoutDocumentInput | KeywordListUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: KeywordListUpdateManyWithWhereWithoutDocumentInput | KeywordListUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
  }

  export type AuthorCreateNestedOneWithoutAuthorBooksInput = {
    create?: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorBooksInput
    connect?: AuthorWhereUniqueInput
  }

  export type BookCreateNestedOneWithoutAuthorBooksInput = {
    create?: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorBooksInput
    connect?: BookWhereUniqueInput
  }

  export type AuthorUpdateOneRequiredWithoutAuthorBooksNestedInput = {
    create?: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorBooksInput
    upsert?: AuthorUpsertWithoutAuthorBooksInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutAuthorBooksInput, AuthorUpdateWithoutAuthorBooksInput>, AuthorUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type BookUpdateOneRequiredWithoutAuthorBooksNestedInput = {
    create?: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
    connectOrCreate?: BookCreateOrConnectWithoutAuthorBooksInput
    upsert?: BookUpsertWithoutAuthorBooksInput
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutAuthorBooksInput, BookUpdateWithoutAuthorBooksInput>, BookUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type AuthorCreateNestedOneWithoutAuthorDocumentsInput = {
    create?: XOR<AuthorCreateWithoutAuthorDocumentsInput, AuthorUncheckedCreateWithoutAuthorDocumentsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorDocumentsInput
    connect?: AuthorWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutAuthorDocumentsInput = {
    create?: XOR<DocumentCreateWithoutAuthorDocumentsInput, DocumentUncheckedCreateWithoutAuthorDocumentsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutAuthorDocumentsInput
    connect?: DocumentWhereUniqueInput
  }

  export type AuthorUpdateOneRequiredWithoutAuthorDocumentsNestedInput = {
    create?: XOR<AuthorCreateWithoutAuthorDocumentsInput, AuthorUncheckedCreateWithoutAuthorDocumentsInput>
    connectOrCreate?: AuthorCreateOrConnectWithoutAuthorDocumentsInput
    upsert?: AuthorUpsertWithoutAuthorDocumentsInput
    connect?: AuthorWhereUniqueInput
    update?: XOR<XOR<AuthorUpdateToOneWithWhereWithoutAuthorDocumentsInput, AuthorUpdateWithoutAuthorDocumentsInput>, AuthorUncheckedUpdateWithoutAuthorDocumentsInput>
  }

  export type DocumentUpdateOneRequiredWithoutAuthorDocumentsNestedInput = {
    create?: XOR<DocumentCreateWithoutAuthorDocumentsInput, DocumentUncheckedCreateWithoutAuthorDocumentsInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutAuthorDocumentsInput
    upsert?: DocumentUpsertWithoutAuthorDocumentsInput
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutAuthorDocumentsInput, DocumentUpdateWithoutAuthorDocumentsInput>, DocumentUncheckedUpdateWithoutAuthorDocumentsInput>
  }

  export type BookCreateNestedOneWithoutCategoryListInput = {
    create?: XOR<BookCreateWithoutCategoryListInput, BookUncheckedCreateWithoutCategoryListInput>
    connectOrCreate?: BookCreateOrConnectWithoutCategoryListInput
    connect?: BookWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutCategoryListInput = {
    create?: XOR<DocumentCreateWithoutCategoryListInput, DocumentUncheckedCreateWithoutCategoryListInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCategoryListInput
    connect?: DocumentWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutCategoryListInput = {
    create?: XOR<CategoryCreateWithoutCategoryListInput, CategoryUncheckedCreateWithoutCategoryListInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryListInput
    connect?: CategoryWhereUniqueInput
  }

  export type BookUpdateOneWithoutCategoryListNestedInput = {
    create?: XOR<BookCreateWithoutCategoryListInput, BookUncheckedCreateWithoutCategoryListInput>
    connectOrCreate?: BookCreateOrConnectWithoutCategoryListInput
    upsert?: BookUpsertWithoutCategoryListInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutCategoryListInput, BookUpdateWithoutCategoryListInput>, BookUncheckedUpdateWithoutCategoryListInput>
  }

  export type DocumentUpdateOneWithoutCategoryListNestedInput = {
    create?: XOR<DocumentCreateWithoutCategoryListInput, DocumentUncheckedCreateWithoutCategoryListInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutCategoryListInput
    upsert?: DocumentUpsertWithoutCategoryListInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutCategoryListInput, DocumentUpdateWithoutCategoryListInput>, DocumentUncheckedUpdateWithoutCategoryListInput>
  }

  export type CategoryUpdateOneRequiredWithoutCategoryListNestedInput = {
    create?: XOR<CategoryCreateWithoutCategoryListInput, CategoryUncheckedCreateWithoutCategoryListInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCategoryListInput
    upsert?: CategoryUpsertWithoutCategoryListInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCategoryListInput, CategoryUpdateWithoutCategoryListInput>, CategoryUncheckedUpdateWithoutCategoryListInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BookCreateNestedOneWithoutKeywordListInput = {
    create?: XOR<BookCreateWithoutKeywordListInput, BookUncheckedCreateWithoutKeywordListInput>
    connectOrCreate?: BookCreateOrConnectWithoutKeywordListInput
    connect?: BookWhereUniqueInput
  }

  export type DocumentCreateNestedOneWithoutKeywordListInput = {
    create?: XOR<DocumentCreateWithoutKeywordListInput, DocumentUncheckedCreateWithoutKeywordListInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutKeywordListInput
    connect?: DocumentWhereUniqueInput
  }

  export type KeywordCreateNestedOneWithoutKeywordListInput = {
    create?: XOR<KeywordCreateWithoutKeywordListInput, KeywordUncheckedCreateWithoutKeywordListInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutKeywordListInput
    connect?: KeywordWhereUniqueInput
  }

  export type BookUpdateOneWithoutKeywordListNestedInput = {
    create?: XOR<BookCreateWithoutKeywordListInput, BookUncheckedCreateWithoutKeywordListInput>
    connectOrCreate?: BookCreateOrConnectWithoutKeywordListInput
    upsert?: BookUpsertWithoutKeywordListInput
    disconnect?: BookWhereInput | boolean
    delete?: BookWhereInput | boolean
    connect?: BookWhereUniqueInput
    update?: XOR<XOR<BookUpdateToOneWithWhereWithoutKeywordListInput, BookUpdateWithoutKeywordListInput>, BookUncheckedUpdateWithoutKeywordListInput>
  }

  export type DocumentUpdateOneWithoutKeywordListNestedInput = {
    create?: XOR<DocumentCreateWithoutKeywordListInput, DocumentUncheckedCreateWithoutKeywordListInput>
    connectOrCreate?: DocumentCreateOrConnectWithoutKeywordListInput
    upsert?: DocumentUpsertWithoutKeywordListInput
    disconnect?: DocumentWhereInput | boolean
    delete?: DocumentWhereInput | boolean
    connect?: DocumentWhereUniqueInput
    update?: XOR<XOR<DocumentUpdateToOneWithWhereWithoutKeywordListInput, DocumentUpdateWithoutKeywordListInput>, DocumentUncheckedUpdateWithoutKeywordListInput>
  }

  export type KeywordUpdateOneRequiredWithoutKeywordListNestedInput = {
    create?: XOR<KeywordCreateWithoutKeywordListInput, KeywordUncheckedCreateWithoutKeywordListInput>
    connectOrCreate?: KeywordCreateOrConnectWithoutKeywordListInput
    upsert?: KeywordUpsertWithoutKeywordListInput
    connect?: KeywordWhereUniqueInput
    update?: XOR<XOR<KeywordUpdateToOneWithWhereWithoutKeywordListInput, KeywordUpdateWithoutKeywordListInput>, KeywordUncheckedUpdateWithoutKeywordListInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryListCreateWithoutCategoryInput = {
    Book?: BookCreateNestedOneWithoutCategoryListInput
    Document?: DocumentCreateNestedOneWithoutCategoryListInput
  }

  export type CategoryListUncheckedCreateWithoutCategoryInput = {
    id?: number
    book_id?: number | null
    document_id?: number | null
  }

  export type CategoryListCreateOrConnectWithoutCategoryInput = {
    where: CategoryListWhereUniqueInput
    create: XOR<CategoryListCreateWithoutCategoryInput, CategoryListUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryListCreateManyCategoryInputEnvelope = {
    data: CategoryListCreateManyCategoryInput | CategoryListCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryListUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CategoryListWhereUniqueInput
    update: XOR<CategoryListUpdateWithoutCategoryInput, CategoryListUncheckedUpdateWithoutCategoryInput>
    create: XOR<CategoryListCreateWithoutCategoryInput, CategoryListUncheckedCreateWithoutCategoryInput>
  }

  export type CategoryListUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CategoryListWhereUniqueInput
    data: XOR<CategoryListUpdateWithoutCategoryInput, CategoryListUncheckedUpdateWithoutCategoryInput>
  }

  export type CategoryListUpdateManyWithWhereWithoutCategoryInput = {
    where: CategoryListScalarWhereInput
    data: XOR<CategoryListUpdateManyMutationInput, CategoryListUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CategoryListScalarWhereInput = {
    AND?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
    OR?: CategoryListScalarWhereInput[]
    NOT?: CategoryListScalarWhereInput | CategoryListScalarWhereInput[]
    id?: IntFilter<"CategoryList"> | number
    book_id?: IntNullableFilter<"CategoryList"> | number | null
    document_id?: IntNullableFilter<"CategoryList"> | number | null
    category_id?: IntFilter<"CategoryList"> | number
  }

  export type KeywordListCreateWithoutKeywordInput = {
    Book?: BookCreateNestedOneWithoutKeywordListInput
    Document?: DocumentCreateNestedOneWithoutKeywordListInput
  }

  export type KeywordListUncheckedCreateWithoutKeywordInput = {
    id?: number
    document_id?: number | null
    book_id?: number | null
  }

  export type KeywordListCreateOrConnectWithoutKeywordInput = {
    where: KeywordListWhereUniqueInput
    create: XOR<KeywordListCreateWithoutKeywordInput, KeywordListUncheckedCreateWithoutKeywordInput>
  }

  export type KeywordListCreateManyKeywordInputEnvelope = {
    data: KeywordListCreateManyKeywordInput | KeywordListCreateManyKeywordInput[]
    skipDuplicates?: boolean
  }

  export type KeywordListUpsertWithWhereUniqueWithoutKeywordInput = {
    where: KeywordListWhereUniqueInput
    update: XOR<KeywordListUpdateWithoutKeywordInput, KeywordListUncheckedUpdateWithoutKeywordInput>
    create: XOR<KeywordListCreateWithoutKeywordInput, KeywordListUncheckedCreateWithoutKeywordInput>
  }

  export type KeywordListUpdateWithWhereUniqueWithoutKeywordInput = {
    where: KeywordListWhereUniqueInput
    data: XOR<KeywordListUpdateWithoutKeywordInput, KeywordListUncheckedUpdateWithoutKeywordInput>
  }

  export type KeywordListUpdateManyWithWhereWithoutKeywordInput = {
    where: KeywordListScalarWhereInput
    data: XOR<KeywordListUpdateManyMutationInput, KeywordListUncheckedUpdateManyWithoutKeywordInput>
  }

  export type KeywordListScalarWhereInput = {
    AND?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
    OR?: KeywordListScalarWhereInput[]
    NOT?: KeywordListScalarWhereInput | KeywordListScalarWhereInput[]
    id?: IntFilter<"KeywordList"> | number
    document_id?: IntNullableFilter<"KeywordList"> | number | null
    book_id?: IntNullableFilter<"KeywordList"> | number | null
    keyword_id?: IntFilter<"KeywordList"> | number
  }

  export type AuthorBooksCreateWithoutAuthorInput = {
    Book: BookCreateNestedOneWithoutAuthorBooksInput
  }

  export type AuthorBooksUncheckedCreateWithoutAuthorInput = {
    book_id: number
  }

  export type AuthorBooksCreateOrConnectWithoutAuthorInput = {
    where: AuthorBooksWhereUniqueInput
    create: XOR<AuthorBooksCreateWithoutAuthorInput, AuthorBooksUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorBooksCreateManyAuthorInputEnvelope = {
    data: AuthorBooksCreateManyAuthorInput | AuthorBooksCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AuthorDocumentsCreateWithoutAuthorInput = {
    Document: DocumentCreateNestedOneWithoutAuthorDocumentsInput
  }

  export type AuthorDocumentsUncheckedCreateWithoutAuthorInput = {
    documents_id: number
  }

  export type AuthorDocumentsCreateOrConnectWithoutAuthorInput = {
    where: AuthorDocumentsWhereUniqueInput
    create: XOR<AuthorDocumentsCreateWithoutAuthorInput, AuthorDocumentsUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorDocumentsCreateManyAuthorInputEnvelope = {
    data: AuthorDocumentsCreateManyAuthorInput | AuthorDocumentsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type AuthorBooksUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AuthorBooksWhereUniqueInput
    update: XOR<AuthorBooksUpdateWithoutAuthorInput, AuthorBooksUncheckedUpdateWithoutAuthorInput>
    create: XOR<AuthorBooksCreateWithoutAuthorInput, AuthorBooksUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorBooksUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AuthorBooksWhereUniqueInput
    data: XOR<AuthorBooksUpdateWithoutAuthorInput, AuthorBooksUncheckedUpdateWithoutAuthorInput>
  }

  export type AuthorBooksUpdateManyWithWhereWithoutAuthorInput = {
    where: AuthorBooksScalarWhereInput
    data: XOR<AuthorBooksUpdateManyMutationInput, AuthorBooksUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AuthorBooksScalarWhereInput = {
    AND?: AuthorBooksScalarWhereInput | AuthorBooksScalarWhereInput[]
    OR?: AuthorBooksScalarWhereInput[]
    NOT?: AuthorBooksScalarWhereInput | AuthorBooksScalarWhereInput[]
    author_id?: IntFilter<"AuthorBooks"> | number
    book_id?: IntFilter<"AuthorBooks"> | number
  }

  export type AuthorDocumentsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AuthorDocumentsWhereUniqueInput
    update: XOR<AuthorDocumentsUpdateWithoutAuthorInput, AuthorDocumentsUncheckedUpdateWithoutAuthorInput>
    create: XOR<AuthorDocumentsCreateWithoutAuthorInput, AuthorDocumentsUncheckedCreateWithoutAuthorInput>
  }

  export type AuthorDocumentsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AuthorDocumentsWhereUniqueInput
    data: XOR<AuthorDocumentsUpdateWithoutAuthorInput, AuthorDocumentsUncheckedUpdateWithoutAuthorInput>
  }

  export type AuthorDocumentsUpdateManyWithWhereWithoutAuthorInput = {
    where: AuthorDocumentsScalarWhereInput
    data: XOR<AuthorDocumentsUpdateManyMutationInput, AuthorDocumentsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AuthorDocumentsScalarWhereInput = {
    AND?: AuthorDocumentsScalarWhereInput | AuthorDocumentsScalarWhereInput[]
    OR?: AuthorDocumentsScalarWhereInput[]
    NOT?: AuthorDocumentsScalarWhereInput | AuthorDocumentsScalarWhereInput[]
    author_id?: IntFilter<"AuthorDocuments"> | number
    documents_id?: IntFilter<"AuthorDocuments"> | number
  }

  export type AuthorBooksCreateWithoutBookInput = {
    Author: AuthorCreateNestedOneWithoutAuthorBooksInput
  }

  export type AuthorBooksUncheckedCreateWithoutBookInput = {
    author_id: number
  }

  export type AuthorBooksCreateOrConnectWithoutBookInput = {
    where: AuthorBooksWhereUniqueInput
    create: XOR<AuthorBooksCreateWithoutBookInput, AuthorBooksUncheckedCreateWithoutBookInput>
  }

  export type AuthorBooksCreateManyBookInputEnvelope = {
    data: AuthorBooksCreateManyBookInput | AuthorBooksCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type CategoryListCreateWithoutBookInput = {
    Document?: DocumentCreateNestedOneWithoutCategoryListInput
    Category: CategoryCreateNestedOneWithoutCategoryListInput
  }

  export type CategoryListUncheckedCreateWithoutBookInput = {
    id?: number
    document_id?: number | null
    category_id: number
  }

  export type CategoryListCreateOrConnectWithoutBookInput = {
    where: CategoryListWhereUniqueInput
    create: XOR<CategoryListCreateWithoutBookInput, CategoryListUncheckedCreateWithoutBookInput>
  }

  export type CategoryListCreateManyBookInputEnvelope = {
    data: CategoryListCreateManyBookInput | CategoryListCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type KeywordListCreateWithoutBookInput = {
    Document?: DocumentCreateNestedOneWithoutKeywordListInput
    Keyword: KeywordCreateNestedOneWithoutKeywordListInput
  }

  export type KeywordListUncheckedCreateWithoutBookInput = {
    id?: number
    document_id?: number | null
    keyword_id: number
  }

  export type KeywordListCreateOrConnectWithoutBookInput = {
    where: KeywordListWhereUniqueInput
    create: XOR<KeywordListCreateWithoutBookInput, KeywordListUncheckedCreateWithoutBookInput>
  }

  export type KeywordListCreateManyBookInputEnvelope = {
    data: KeywordListCreateManyBookInput | KeywordListCreateManyBookInput[]
    skipDuplicates?: boolean
  }

  export type AuthorBooksUpsertWithWhereUniqueWithoutBookInput = {
    where: AuthorBooksWhereUniqueInput
    update: XOR<AuthorBooksUpdateWithoutBookInput, AuthorBooksUncheckedUpdateWithoutBookInput>
    create: XOR<AuthorBooksCreateWithoutBookInput, AuthorBooksUncheckedCreateWithoutBookInput>
  }

  export type AuthorBooksUpdateWithWhereUniqueWithoutBookInput = {
    where: AuthorBooksWhereUniqueInput
    data: XOR<AuthorBooksUpdateWithoutBookInput, AuthorBooksUncheckedUpdateWithoutBookInput>
  }

  export type AuthorBooksUpdateManyWithWhereWithoutBookInput = {
    where: AuthorBooksScalarWhereInput
    data: XOR<AuthorBooksUpdateManyMutationInput, AuthorBooksUncheckedUpdateManyWithoutBookInput>
  }

  export type CategoryListUpsertWithWhereUniqueWithoutBookInput = {
    where: CategoryListWhereUniqueInput
    update: XOR<CategoryListUpdateWithoutBookInput, CategoryListUncheckedUpdateWithoutBookInput>
    create: XOR<CategoryListCreateWithoutBookInput, CategoryListUncheckedCreateWithoutBookInput>
  }

  export type CategoryListUpdateWithWhereUniqueWithoutBookInput = {
    where: CategoryListWhereUniqueInput
    data: XOR<CategoryListUpdateWithoutBookInput, CategoryListUncheckedUpdateWithoutBookInput>
  }

  export type CategoryListUpdateManyWithWhereWithoutBookInput = {
    where: CategoryListScalarWhereInput
    data: XOR<CategoryListUpdateManyMutationInput, CategoryListUncheckedUpdateManyWithoutBookInput>
  }

  export type KeywordListUpsertWithWhereUniqueWithoutBookInput = {
    where: KeywordListWhereUniqueInput
    update: XOR<KeywordListUpdateWithoutBookInput, KeywordListUncheckedUpdateWithoutBookInput>
    create: XOR<KeywordListCreateWithoutBookInput, KeywordListUncheckedCreateWithoutBookInput>
  }

  export type KeywordListUpdateWithWhereUniqueWithoutBookInput = {
    where: KeywordListWhereUniqueInput
    data: XOR<KeywordListUpdateWithoutBookInput, KeywordListUncheckedUpdateWithoutBookInput>
  }

  export type KeywordListUpdateManyWithWhereWithoutBookInput = {
    where: KeywordListScalarWhereInput
    data: XOR<KeywordListUpdateManyMutationInput, KeywordListUncheckedUpdateManyWithoutBookInput>
  }

  export type AuthorDocumentsCreateWithoutDocumentInput = {
    Author: AuthorCreateNestedOneWithoutAuthorDocumentsInput
  }

  export type AuthorDocumentsUncheckedCreateWithoutDocumentInput = {
    author_id: number
  }

  export type AuthorDocumentsCreateOrConnectWithoutDocumentInput = {
    where: AuthorDocumentsWhereUniqueInput
    create: XOR<AuthorDocumentsCreateWithoutDocumentInput, AuthorDocumentsUncheckedCreateWithoutDocumentInput>
  }

  export type AuthorDocumentsCreateManyDocumentInputEnvelope = {
    data: AuthorDocumentsCreateManyDocumentInput | AuthorDocumentsCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type CategoryListCreateWithoutDocumentInput = {
    Book?: BookCreateNestedOneWithoutCategoryListInput
    Category: CategoryCreateNestedOneWithoutCategoryListInput
  }

  export type CategoryListUncheckedCreateWithoutDocumentInput = {
    id?: number
    book_id?: number | null
    category_id: number
  }

  export type CategoryListCreateOrConnectWithoutDocumentInput = {
    where: CategoryListWhereUniqueInput
    create: XOR<CategoryListCreateWithoutDocumentInput, CategoryListUncheckedCreateWithoutDocumentInput>
  }

  export type CategoryListCreateManyDocumentInputEnvelope = {
    data: CategoryListCreateManyDocumentInput | CategoryListCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type KeywordListCreateWithoutDocumentInput = {
    Book?: BookCreateNestedOneWithoutKeywordListInput
    Keyword: KeywordCreateNestedOneWithoutKeywordListInput
  }

  export type KeywordListUncheckedCreateWithoutDocumentInput = {
    id?: number
    book_id?: number | null
    keyword_id: number
  }

  export type KeywordListCreateOrConnectWithoutDocumentInput = {
    where: KeywordListWhereUniqueInput
    create: XOR<KeywordListCreateWithoutDocumentInput, KeywordListUncheckedCreateWithoutDocumentInput>
  }

  export type KeywordListCreateManyDocumentInputEnvelope = {
    data: KeywordListCreateManyDocumentInput | KeywordListCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type AuthorDocumentsUpsertWithWhereUniqueWithoutDocumentInput = {
    where: AuthorDocumentsWhereUniqueInput
    update: XOR<AuthorDocumentsUpdateWithoutDocumentInput, AuthorDocumentsUncheckedUpdateWithoutDocumentInput>
    create: XOR<AuthorDocumentsCreateWithoutDocumentInput, AuthorDocumentsUncheckedCreateWithoutDocumentInput>
  }

  export type AuthorDocumentsUpdateWithWhereUniqueWithoutDocumentInput = {
    where: AuthorDocumentsWhereUniqueInput
    data: XOR<AuthorDocumentsUpdateWithoutDocumentInput, AuthorDocumentsUncheckedUpdateWithoutDocumentInput>
  }

  export type AuthorDocumentsUpdateManyWithWhereWithoutDocumentInput = {
    where: AuthorDocumentsScalarWhereInput
    data: XOR<AuthorDocumentsUpdateManyMutationInput, AuthorDocumentsUncheckedUpdateManyWithoutDocumentInput>
  }

  export type CategoryListUpsertWithWhereUniqueWithoutDocumentInput = {
    where: CategoryListWhereUniqueInput
    update: XOR<CategoryListUpdateWithoutDocumentInput, CategoryListUncheckedUpdateWithoutDocumentInput>
    create: XOR<CategoryListCreateWithoutDocumentInput, CategoryListUncheckedCreateWithoutDocumentInput>
  }

  export type CategoryListUpdateWithWhereUniqueWithoutDocumentInput = {
    where: CategoryListWhereUniqueInput
    data: XOR<CategoryListUpdateWithoutDocumentInput, CategoryListUncheckedUpdateWithoutDocumentInput>
  }

  export type CategoryListUpdateManyWithWhereWithoutDocumentInput = {
    where: CategoryListScalarWhereInput
    data: XOR<CategoryListUpdateManyMutationInput, CategoryListUncheckedUpdateManyWithoutDocumentInput>
  }

  export type KeywordListUpsertWithWhereUniqueWithoutDocumentInput = {
    where: KeywordListWhereUniqueInput
    update: XOR<KeywordListUpdateWithoutDocumentInput, KeywordListUncheckedUpdateWithoutDocumentInput>
    create: XOR<KeywordListCreateWithoutDocumentInput, KeywordListUncheckedCreateWithoutDocumentInput>
  }

  export type KeywordListUpdateWithWhereUniqueWithoutDocumentInput = {
    where: KeywordListWhereUniqueInput
    data: XOR<KeywordListUpdateWithoutDocumentInput, KeywordListUncheckedUpdateWithoutDocumentInput>
  }

  export type KeywordListUpdateManyWithWhereWithoutDocumentInput = {
    where: KeywordListScalarWhereInput
    data: XOR<KeywordListUpdateManyMutationInput, KeywordListUncheckedUpdateManyWithoutDocumentInput>
  }

  export type AuthorCreateWithoutAuthorBooksInput = {
    country: string
    first_name: string
    last_name: string
    AuthorDocuments?: AuthorDocumentsCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutAuthorBooksInput = {
    id?: number
    country: string
    first_name: string
    last_name: string
    AuthorDocuments?: AuthorDocumentsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutAuthorBooksInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
  }

  export type BookCreateWithoutAuthorBooksInput = {
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    CategoryList?: CategoryListCreateNestedManyWithoutBookInput
    KeywordList?: KeywordListCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutAuthorBooksInput = {
    id?: number
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    CategoryList?: CategoryListUncheckedCreateNestedManyWithoutBookInput
    KeywordList?: KeywordListUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutAuthorBooksInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
  }

  export type AuthorUpsertWithoutAuthorBooksInput = {
    update: XOR<AuthorUpdateWithoutAuthorBooksInput, AuthorUncheckedUpdateWithoutAuthorBooksInput>
    create: XOR<AuthorCreateWithoutAuthorBooksInput, AuthorUncheckedCreateWithoutAuthorBooksInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutAuthorBooksInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutAuthorBooksInput, AuthorUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type AuthorUpdateWithoutAuthorBooksInput = {
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutAuthorBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type BookUpsertWithoutAuthorBooksInput = {
    update: XOR<BookUpdateWithoutAuthorBooksInput, BookUncheckedUpdateWithoutAuthorBooksInput>
    create: XOR<BookCreateWithoutAuthorBooksInput, BookUncheckedCreateWithoutAuthorBooksInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutAuthorBooksInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutAuthorBooksInput, BookUncheckedUpdateWithoutAuthorBooksInput>
  }

  export type BookUpdateWithoutAuthorBooksInput = {
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    CategoryList?: CategoryListUpdateManyWithoutBookNestedInput
    KeywordList?: KeywordListUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutAuthorBooksInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    CategoryList?: CategoryListUncheckedUpdateManyWithoutBookNestedInput
    KeywordList?: KeywordListUncheckedUpdateManyWithoutBookNestedInput
  }

  export type AuthorCreateWithoutAuthorDocumentsInput = {
    country: string
    first_name: string
    last_name: string
    AuthorBooks?: AuthorBooksCreateNestedManyWithoutAuthorInput
  }

  export type AuthorUncheckedCreateWithoutAuthorDocumentsInput = {
    id?: number
    country: string
    first_name: string
    last_name: string
    AuthorBooks?: AuthorBooksUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AuthorCreateOrConnectWithoutAuthorDocumentsInput = {
    where: AuthorWhereUniqueInput
    create: XOR<AuthorCreateWithoutAuthorDocumentsInput, AuthorUncheckedCreateWithoutAuthorDocumentsInput>
  }

  export type DocumentCreateWithoutAuthorDocumentsInput = {
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    CategoryList?: CategoryListCreateNestedManyWithoutDocumentInput
    KeywordList?: KeywordListCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutAuthorDocumentsInput = {
    id?: number
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    CategoryList?: CategoryListUncheckedCreateNestedManyWithoutDocumentInput
    KeywordList?: KeywordListUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutAuthorDocumentsInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutAuthorDocumentsInput, DocumentUncheckedCreateWithoutAuthorDocumentsInput>
  }

  export type AuthorUpsertWithoutAuthorDocumentsInput = {
    update: XOR<AuthorUpdateWithoutAuthorDocumentsInput, AuthorUncheckedUpdateWithoutAuthorDocumentsInput>
    create: XOR<AuthorCreateWithoutAuthorDocumentsInput, AuthorUncheckedCreateWithoutAuthorDocumentsInput>
    where?: AuthorWhereInput
  }

  export type AuthorUpdateToOneWithWhereWithoutAuthorDocumentsInput = {
    where?: AuthorWhereInput
    data: XOR<AuthorUpdateWithoutAuthorDocumentsInput, AuthorUncheckedUpdateWithoutAuthorDocumentsInput>
  }

  export type AuthorUpdateWithoutAuthorDocumentsInput = {
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUpdateManyWithoutAuthorNestedInput
  }

  export type AuthorUncheckedUpdateWithoutAuthorDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type DocumentUpsertWithoutAuthorDocumentsInput = {
    update: XOR<DocumentUpdateWithoutAuthorDocumentsInput, DocumentUncheckedUpdateWithoutAuthorDocumentsInput>
    create: XOR<DocumentCreateWithoutAuthorDocumentsInput, DocumentUncheckedCreateWithoutAuthorDocumentsInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutAuthorDocumentsInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutAuthorDocumentsInput, DocumentUncheckedUpdateWithoutAuthorDocumentsInput>
  }

  export type DocumentUpdateWithoutAuthorDocumentsInput = {
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    CategoryList?: CategoryListUpdateManyWithoutDocumentNestedInput
    KeywordList?: KeywordListUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutAuthorDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    CategoryList?: CategoryListUncheckedUpdateManyWithoutDocumentNestedInput
    KeywordList?: KeywordListUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type BookCreateWithoutCategoryListInput = {
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    AuthorBooks?: AuthorBooksCreateNestedManyWithoutBookInput
    KeywordList?: KeywordListCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutCategoryListInput = {
    id?: number
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    AuthorBooks?: AuthorBooksUncheckedCreateNestedManyWithoutBookInput
    KeywordList?: KeywordListUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutCategoryListInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutCategoryListInput, BookUncheckedCreateWithoutCategoryListInput>
  }

  export type DocumentCreateWithoutCategoryListInput = {
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    AuthorDocuments?: AuthorDocumentsCreateNestedManyWithoutDocumentInput
    KeywordList?: KeywordListCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutCategoryListInput = {
    id?: number
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    AuthorDocuments?: AuthorDocumentsUncheckedCreateNestedManyWithoutDocumentInput
    KeywordList?: KeywordListUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutCategoryListInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutCategoryListInput, DocumentUncheckedCreateWithoutCategoryListInput>
  }

  export type CategoryCreateWithoutCategoryListInput = {
    category_name: string
    category_description?: string | null
  }

  export type CategoryUncheckedCreateWithoutCategoryListInput = {
    id?: number
    category_name: string
    category_description?: string | null
  }

  export type CategoryCreateOrConnectWithoutCategoryListInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCategoryListInput, CategoryUncheckedCreateWithoutCategoryListInput>
  }

  export type BookUpsertWithoutCategoryListInput = {
    update: XOR<BookUpdateWithoutCategoryListInput, BookUncheckedUpdateWithoutCategoryListInput>
    create: XOR<BookCreateWithoutCategoryListInput, BookUncheckedCreateWithoutCategoryListInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutCategoryListInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutCategoryListInput, BookUncheckedUpdateWithoutCategoryListInput>
  }

  export type BookUpdateWithoutCategoryListInput = {
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUpdateManyWithoutBookNestedInput
    KeywordList?: KeywordListUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutCategoryListInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUncheckedUpdateManyWithoutBookNestedInput
    KeywordList?: KeywordListUncheckedUpdateManyWithoutBookNestedInput
  }

  export type DocumentUpsertWithoutCategoryListInput = {
    update: XOR<DocumentUpdateWithoutCategoryListInput, DocumentUncheckedUpdateWithoutCategoryListInput>
    create: XOR<DocumentCreateWithoutCategoryListInput, DocumentUncheckedCreateWithoutCategoryListInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutCategoryListInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutCategoryListInput, DocumentUncheckedUpdateWithoutCategoryListInput>
  }

  export type DocumentUpdateWithoutCategoryListInput = {
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUpdateManyWithoutDocumentNestedInput
    KeywordList?: KeywordListUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutCategoryListInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUncheckedUpdateManyWithoutDocumentNestedInput
    KeywordList?: KeywordListUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type CategoryUpsertWithoutCategoryListInput = {
    update: XOR<CategoryUpdateWithoutCategoryListInput, CategoryUncheckedUpdateWithoutCategoryListInput>
    create: XOR<CategoryCreateWithoutCategoryListInput, CategoryUncheckedCreateWithoutCategoryListInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCategoryListInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCategoryListInput, CategoryUncheckedUpdateWithoutCategoryListInput>
  }

  export type CategoryUpdateWithoutCategoryListInput = {
    category_name?: StringFieldUpdateOperationsInput | string
    category_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutCategoryListInput = {
    id?: IntFieldUpdateOperationsInput | number
    category_name?: StringFieldUpdateOperationsInput | string
    category_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BookCreateWithoutKeywordListInput = {
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    AuthorBooks?: AuthorBooksCreateNestedManyWithoutBookInput
    CategoryList?: CategoryListCreateNestedManyWithoutBookInput
  }

  export type BookUncheckedCreateWithoutKeywordListInput = {
    id?: number
    book_title: string
    publisher: string
    translator?: string | null
    publish_date: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    isbn: string
    AuthorBooks?: AuthorBooksUncheckedCreateNestedManyWithoutBookInput
    CategoryList?: CategoryListUncheckedCreateNestedManyWithoutBookInput
  }

  export type BookCreateOrConnectWithoutKeywordListInput = {
    where: BookWhereUniqueInput
    create: XOR<BookCreateWithoutKeywordListInput, BookUncheckedCreateWithoutKeywordListInput>
  }

  export type DocumentCreateWithoutKeywordListInput = {
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    AuthorDocuments?: AuthorDocumentsCreateNestedManyWithoutDocumentInput
    CategoryList?: CategoryListCreateNestedManyWithoutDocumentInput
  }

  export type DocumentUncheckedCreateWithoutKeywordListInput = {
    id?: number
    document_title: string
    translator?: string | null
    publish_date: string
    publisher: string
    publish_location: string
    country: string
    description: string
    link: string
    language: string
    AuthorDocuments?: AuthorDocumentsUncheckedCreateNestedManyWithoutDocumentInput
    CategoryList?: CategoryListUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type DocumentCreateOrConnectWithoutKeywordListInput = {
    where: DocumentWhereUniqueInput
    create: XOR<DocumentCreateWithoutKeywordListInput, DocumentUncheckedCreateWithoutKeywordListInput>
  }

  export type KeywordCreateWithoutKeywordListInput = {
    keyword_name: string
    keyword_description?: string | null
  }

  export type KeywordUncheckedCreateWithoutKeywordListInput = {
    id?: number
    keyword_name: string
    keyword_description?: string | null
  }

  export type KeywordCreateOrConnectWithoutKeywordListInput = {
    where: KeywordWhereUniqueInput
    create: XOR<KeywordCreateWithoutKeywordListInput, KeywordUncheckedCreateWithoutKeywordListInput>
  }

  export type BookUpsertWithoutKeywordListInput = {
    update: XOR<BookUpdateWithoutKeywordListInput, BookUncheckedUpdateWithoutKeywordListInput>
    create: XOR<BookCreateWithoutKeywordListInput, BookUncheckedCreateWithoutKeywordListInput>
    where?: BookWhereInput
  }

  export type BookUpdateToOneWithWhereWithoutKeywordListInput = {
    where?: BookWhereInput
    data: XOR<BookUpdateWithoutKeywordListInput, BookUncheckedUpdateWithoutKeywordListInput>
  }

  export type BookUpdateWithoutKeywordListInput = {
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUpdateManyWithoutBookNestedInput
    CategoryList?: CategoryListUpdateManyWithoutBookNestedInput
  }

  export type BookUncheckedUpdateWithoutKeywordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_title?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    isbn?: StringFieldUpdateOperationsInput | string
    AuthorBooks?: AuthorBooksUncheckedUpdateManyWithoutBookNestedInput
    CategoryList?: CategoryListUncheckedUpdateManyWithoutBookNestedInput
  }

  export type DocumentUpsertWithoutKeywordListInput = {
    update: XOR<DocumentUpdateWithoutKeywordListInput, DocumentUncheckedUpdateWithoutKeywordListInput>
    create: XOR<DocumentCreateWithoutKeywordListInput, DocumentUncheckedCreateWithoutKeywordListInput>
    where?: DocumentWhereInput
  }

  export type DocumentUpdateToOneWithWhereWithoutKeywordListInput = {
    where?: DocumentWhereInput
    data: XOR<DocumentUpdateWithoutKeywordListInput, DocumentUncheckedUpdateWithoutKeywordListInput>
  }

  export type DocumentUpdateWithoutKeywordListInput = {
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUpdateManyWithoutDocumentNestedInput
    CategoryList?: CategoryListUpdateManyWithoutDocumentNestedInput
  }

  export type DocumentUncheckedUpdateWithoutKeywordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_title?: StringFieldUpdateOperationsInput | string
    translator?: NullableStringFieldUpdateOperationsInput | string | null
    publish_date?: StringFieldUpdateOperationsInput | string
    publisher?: StringFieldUpdateOperationsInput | string
    publish_location?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    AuthorDocuments?: AuthorDocumentsUncheckedUpdateManyWithoutDocumentNestedInput
    CategoryList?: CategoryListUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type KeywordUpsertWithoutKeywordListInput = {
    update: XOR<KeywordUpdateWithoutKeywordListInput, KeywordUncheckedUpdateWithoutKeywordListInput>
    create: XOR<KeywordCreateWithoutKeywordListInput, KeywordUncheckedCreateWithoutKeywordListInput>
    where?: KeywordWhereInput
  }

  export type KeywordUpdateToOneWithWhereWithoutKeywordListInput = {
    where?: KeywordWhereInput
    data: XOR<KeywordUpdateWithoutKeywordListInput, KeywordUncheckedUpdateWithoutKeywordListInput>
  }

  export type KeywordUpdateWithoutKeywordListInput = {
    keyword_name?: StringFieldUpdateOperationsInput | string
    keyword_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KeywordUncheckedUpdateWithoutKeywordListInput = {
    id?: IntFieldUpdateOperationsInput | number
    keyword_name?: StringFieldUpdateOperationsInput | string
    keyword_description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryListCreateManyCategoryInput = {
    id?: number
    book_id?: number | null
    document_id?: number | null
  }

  export type CategoryListUpdateWithoutCategoryInput = {
    Book?: BookUpdateOneWithoutCategoryListNestedInput
    Document?: DocumentUpdateOneWithoutCategoryListNestedInput
  }

  export type CategoryListUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CategoryListUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KeywordListCreateManyKeywordInput = {
    id?: number
    document_id?: number | null
    book_id?: number | null
  }

  export type KeywordListUpdateWithoutKeywordInput = {
    Book?: BookUpdateOneWithoutKeywordListNestedInput
    Document?: DocumentUpdateOneWithoutKeywordListNestedInput
  }

  export type KeywordListUncheckedUpdateWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type KeywordListUncheckedUpdateManyWithoutKeywordInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AuthorBooksCreateManyAuthorInput = {
    book_id: number
  }

  export type AuthorDocumentsCreateManyAuthorInput = {
    documents_id: number
  }

  export type AuthorBooksUpdateWithoutAuthorInput = {
    Book?: BookUpdateOneRequiredWithoutAuthorBooksNestedInput
  }

  export type AuthorBooksUncheckedUpdateWithoutAuthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorBooksUncheckedUpdateManyWithoutAuthorInput = {
    book_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorDocumentsUpdateWithoutAuthorInput = {
    Document?: DocumentUpdateOneRequiredWithoutAuthorDocumentsNestedInput
  }

  export type AuthorDocumentsUncheckedUpdateWithoutAuthorInput = {
    documents_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorDocumentsUncheckedUpdateManyWithoutAuthorInput = {
    documents_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorBooksCreateManyBookInput = {
    author_id: number
  }

  export type CategoryListCreateManyBookInput = {
    id?: number
    document_id?: number | null
    category_id: number
  }

  export type KeywordListCreateManyBookInput = {
    id?: number
    document_id?: number | null
    keyword_id: number
  }

  export type AuthorBooksUpdateWithoutBookInput = {
    Author?: AuthorUpdateOneRequiredWithoutAuthorBooksNestedInput
  }

  export type AuthorBooksUncheckedUpdateWithoutBookInput = {
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorBooksUncheckedUpdateManyWithoutBookInput = {
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryListUpdateWithoutBookInput = {
    Document?: DocumentUpdateOneWithoutCategoryListNestedInput
    Category?: CategoryUpdateOneRequiredWithoutCategoryListNestedInput
  }

  export type CategoryListUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryListUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type KeywordListUpdateWithoutBookInput = {
    Document?: DocumentUpdateOneWithoutKeywordListNestedInput
    Keyword?: KeywordUpdateOneRequiredWithoutKeywordListNestedInput
  }

  export type KeywordListUncheckedUpdateWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    keyword_id?: IntFieldUpdateOperationsInput | number
  }

  export type KeywordListUncheckedUpdateManyWithoutBookInput = {
    id?: IntFieldUpdateOperationsInput | number
    document_id?: NullableIntFieldUpdateOperationsInput | number | null
    keyword_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorDocumentsCreateManyDocumentInput = {
    author_id: number
  }

  export type CategoryListCreateManyDocumentInput = {
    id?: number
    book_id?: number | null
    category_id: number
  }

  export type KeywordListCreateManyDocumentInput = {
    id?: number
    book_id?: number | null
    keyword_id: number
  }

  export type AuthorDocumentsUpdateWithoutDocumentInput = {
    Author?: AuthorUpdateOneRequiredWithoutAuthorDocumentsNestedInput
  }

  export type AuthorDocumentsUncheckedUpdateWithoutDocumentInput = {
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type AuthorDocumentsUncheckedUpdateManyWithoutDocumentInput = {
    author_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryListUpdateWithoutDocumentInput = {
    Book?: BookUpdateOneWithoutCategoryListNestedInput
    Category?: CategoryUpdateOneRequiredWithoutCategoryListNestedInput
  }

  export type CategoryListUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryListUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    category_id?: IntFieldUpdateOperationsInput | number
  }

  export type KeywordListUpdateWithoutDocumentInput = {
    Book?: BookUpdateOneWithoutKeywordListNestedInput
    Keyword?: KeywordUpdateOneRequiredWithoutKeywordListNestedInput
  }

  export type KeywordListUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    keyword_id?: IntFieldUpdateOperationsInput | number
  }

  export type KeywordListUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    book_id?: NullableIntFieldUpdateOperationsInput | number | null
    keyword_id?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}