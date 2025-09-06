
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Kategori
 * 
 */
export type Kategori = $Result.DefaultSelection<Prisma.$KategoriPayload>
/**
 * Model Produk
 * 
 */
export type Produk = $Result.DefaultSelection<Prisma.$ProdukPayload>
/**
 * Model Stok
 * 
 */
export type Stok = $Result.DefaultSelection<Prisma.$StokPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kategori`: Exposes CRUD operations for the **Kategori** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kategoris
    * const kategoris = await prisma.kategori.findMany()
    * ```
    */
  get kategori(): Prisma.KategoriDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **Produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.ProdukDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stok`: Exposes CRUD operations for the **Stok** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stoks
    * const stoks = await prisma.stok.findMany()
    * ```
    */
  get stok(): Prisma.StokDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
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
    User: 'User',
    Kategori: 'Kategori',
    Produk: 'Produk',
    Stok: 'Stok'
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
      modelProps: "user" | "kategori" | "produk" | "stok"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Kategori: {
        payload: Prisma.$KategoriPayload<ExtArgs>
        fields: Prisma.KategoriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KategoriFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KategoriFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findFirst: {
            args: Prisma.KategoriFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KategoriFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          findMany: {
            args: Prisma.KategoriFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          create: {
            args: Prisma.KategoriCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          createMany: {
            args: Prisma.KategoriCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KategoriCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          delete: {
            args: Prisma.KategoriDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          update: {
            args: Prisma.KategoriUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          deleteMany: {
            args: Prisma.KategoriDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KategoriUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KategoriUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>[]
          }
          upsert: {
            args: Prisma.KategoriUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KategoriPayload>
          }
          aggregate: {
            args: Prisma.KategoriAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKategori>
          }
          groupBy: {
            args: Prisma.KategoriGroupByArgs<ExtArgs>
            result: $Utils.Optional<KategoriGroupByOutputType>[]
          }
          count: {
            args: Prisma.KategoriCountArgs<ExtArgs>
            result: $Utils.Optional<KategoriCountAggregateOutputType> | number
          }
        }
      }
      Produk: {
        payload: Prisma.$ProdukPayload<ExtArgs>
        fields: Prisma.ProdukFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProdukFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProdukFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findFirst: {
            args: Prisma.ProdukFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProdukFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          findMany: {
            args: Prisma.ProdukFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          create: {
            args: Prisma.ProdukCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          createMany: {
            args: Prisma.ProdukCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProdukCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          delete: {
            args: Prisma.ProdukDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          update: {
            args: Prisma.ProdukUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          deleteMany: {
            args: Prisma.ProdukDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProdukUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProdukUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>[]
          }
          upsert: {
            args: Prisma.ProdukUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProdukPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.ProdukGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProdukCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      Stok: {
        payload: Prisma.$StokPayload<ExtArgs>
        fields: Prisma.StokFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StokFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StokFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          findFirst: {
            args: Prisma.StokFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StokFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          findMany: {
            args: Prisma.StokFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          create: {
            args: Prisma.StokCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          createMany: {
            args: Prisma.StokCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StokCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          delete: {
            args: Prisma.StokDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          update: {
            args: Prisma.StokUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          deleteMany: {
            args: Prisma.StokDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StokUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StokUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>[]
          }
          upsert: {
            args: Prisma.StokUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StokPayload>
          }
          aggregate: {
            args: Prisma.StokAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStok>
          }
          groupBy: {
            args: Prisma.StokGroupByArgs<ExtArgs>
            result: $Utils.Optional<StokGroupByOutputType>[]
          }
          count: {
            args: Prisma.StokCountArgs<ExtArgs>
            result: $Utils.Optional<StokCountAggregateOutputType> | number
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
    user?: UserOmit
    kategori?: KategoriOmit
    produk?: ProdukOmit
    stok?: StokOmit
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
   * Count Type KategoriCountOutputType
   */

  export type KategoriCountOutputType = {
    Produk: number
  }

  export type KategoriCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produk?: boolean | KategoriCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KategoriCountOutputType
     */
    select?: KategoriCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * KategoriCountOutputType without action
   */
  export type KategoriCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
  }


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    Stok: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stok?: boolean | ProdukCountOutputTypeCountStokArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountStokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id_user: number | null
  }

  export type UserSumAggregateOutputType = {
    id_user: number | null
  }

  export type UserMinAggregateOutputType = {
    id_user: number | null
    nama_user: string | null
    email: string | null
    password: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    auth_provider: string | null
    auth_id: string | null
    last_login: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id_user: number | null
    nama_user: string | null
    email: string | null
    password: string | null
    role: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    auth_provider: string | null
    auth_id: string | null
    last_login: Date | null
  }

  export type UserCountAggregateOutputType = {
    id_user: number
    nama_user: number
    email: number
    password: number
    role: number
    is_active: number
    created_at: number
    updated_at: number
    auth_provider: number
    auth_id: number
    last_login: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id_user?: true
  }

  export type UserSumAggregateInputType = {
    id_user?: true
  }

  export type UserMinAggregateInputType = {
    id_user?: true
    nama_user?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    auth_provider?: true
    auth_id?: true
    last_login?: true
  }

  export type UserMaxAggregateInputType = {
    id_user?: true
    nama_user?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    auth_provider?: true
    auth_id?: true
    last_login?: true
  }

  export type UserCountAggregateInputType = {
    id_user?: true
    nama_user?: true
    email?: true
    password?: true
    role?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    auth_provider?: true
    auth_id?: true
    last_login?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id_user: number
    nama_user: string
    email: string
    password: string | null
    role: string
    is_active: boolean
    created_at: Date
    updated_at: Date
    auth_provider: string | null
    auth_id: string | null
    last_login: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    nama_user?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    auth_provider?: boolean
    auth_id?: boolean
    last_login?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    nama_user?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    auth_provider?: boolean
    auth_id?: boolean
    last_login?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_user?: boolean
    nama_user?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    auth_provider?: boolean
    auth_id?: boolean
    last_login?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id_user?: boolean
    nama_user?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    auth_provider?: boolean
    auth_id?: boolean
    last_login?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_user" | "nama_user" | "email" | "password" | "role" | "is_active" | "created_at" | "updated_at" | "auth_provider" | "auth_id" | "last_login", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id_user: number
      nama_user: string
      email: string
      password: string | null
      role: string
      is_active: boolean
      created_at: Date
      updated_at: Date
      auth_provider: string | null
      auth_id: string | null
      last_login: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id_user`
     * const userWithId_userOnly = await prisma.user.findMany({ select: { id_user: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id_user`
     * const userWithId_userOnly = await prisma.user.createManyAndReturn({
     *   select: { id_user: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id_user`
     * const userWithId_userOnly = await prisma.user.updateManyAndReturn({
     *   select: { id_user: true },
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id_user: FieldRef<"User", 'Int'>
    readonly nama_user: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly is_active: FieldRef<"User", 'Boolean'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly auth_provider: FieldRef<"User", 'String'>
    readonly auth_id: FieldRef<"User", 'String'>
    readonly last_login: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Kategori
   */

  export type AggregateKategori = {
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  export type KategoriAvgAggregateOutputType = {
    id_kategori: number | null
  }

  export type KategoriSumAggregateOutputType = {
    id_kategori: number | null
  }

  export type KategoriMinAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
  }

  export type KategoriMaxAggregateOutputType = {
    id_kategori: number | null
    nama_kategori: string | null
  }

  export type KategoriCountAggregateOutputType = {
    id_kategori: number
    nama_kategori: number
    _all: number
  }


  export type KategoriAvgAggregateInputType = {
    id_kategori?: true
  }

  export type KategoriSumAggregateInputType = {
    id_kategori?: true
  }

  export type KategoriMinAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
  }

  export type KategoriMaxAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
  }

  export type KategoriCountAggregateInputType = {
    id_kategori?: true
    nama_kategori?: true
    _all?: true
  }

  export type KategoriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategori to aggregate.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Kategoris
    **/
    _count?: true | KategoriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KategoriAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KategoriSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KategoriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KategoriMaxAggregateInputType
  }

  export type GetKategoriAggregateType<T extends KategoriAggregateArgs> = {
        [P in keyof T & keyof AggregateKategori]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKategori[P]>
      : GetScalarType<T[P], AggregateKategori[P]>
  }




  export type KategoriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KategoriWhereInput
    orderBy?: KategoriOrderByWithAggregationInput | KategoriOrderByWithAggregationInput[]
    by: KategoriScalarFieldEnum[] | KategoriScalarFieldEnum
    having?: KategoriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KategoriCountAggregateInputType | true
    _avg?: KategoriAvgAggregateInputType
    _sum?: KategoriSumAggregateInputType
    _min?: KategoriMinAggregateInputType
    _max?: KategoriMaxAggregateInputType
  }

  export type KategoriGroupByOutputType = {
    id_kategori: number
    nama_kategori: string
    _count: KategoriCountAggregateOutputType | null
    _avg: KategoriAvgAggregateOutputType | null
    _sum: KategoriSumAggregateOutputType | null
    _min: KategoriMinAggregateOutputType | null
    _max: KategoriMaxAggregateOutputType | null
  }

  type GetKategoriGroupByPayload<T extends KategoriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KategoriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KategoriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KategoriGroupByOutputType[P]>
            : GetScalarType<T[P], KategoriGroupByOutputType[P]>
        }
      >
    >


  export type KategoriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
    Produk?: boolean | Kategori$ProdukArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_kategori?: boolean
    nama_kategori?: boolean
  }, ExtArgs["result"]["kategori"]>

  export type KategoriSelectScalar = {
    id_kategori?: boolean
    nama_kategori?: boolean
  }

  export type KategoriOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_kategori" | "nama_kategori", ExtArgs["result"]["kategori"]>
  export type KategoriInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Produk?: boolean | Kategori$ProdukArgs<ExtArgs>
    _count?: boolean | KategoriCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type KategoriIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type KategoriIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $KategoriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Kategori"
    objects: {
      Produk: Prisma.$ProdukPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_kategori: number
      nama_kategori: string
    }, ExtArgs["result"]["kategori"]>
    composites: {}
  }

  type KategoriGetPayload<S extends boolean | null | undefined | KategoriDefaultArgs> = $Result.GetResult<Prisma.$KategoriPayload, S>

  type KategoriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KategoriFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KategoriCountAggregateInputType | true
    }

  export interface KategoriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Kategori'], meta: { name: 'Kategori' } }
    /**
     * Find zero or one Kategori that matches the filter.
     * @param {KategoriFindUniqueArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KategoriFindUniqueArgs>(args: SelectSubset<T, KategoriFindUniqueArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kategori that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KategoriFindUniqueOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KategoriFindUniqueOrThrowArgs>(args: SelectSubset<T, KategoriFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KategoriFindFirstArgs>(args?: SelectSubset<T, KategoriFindFirstArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kategori that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindFirstOrThrowArgs} args - Arguments to find a Kategori
     * @example
     * // Get one Kategori
     * const kategori = await prisma.kategori.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KategoriFindFirstOrThrowArgs>(args?: SelectSubset<T, KategoriFindFirstOrThrowArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kategoris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kategoris
     * const kategoris = await prisma.kategori.findMany()
     * 
     * // Get first 10 Kategoris
     * const kategoris = await prisma.kategori.findMany({ take: 10 })
     * 
     * // Only select the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.findMany({ select: { id_kategori: true } })
     * 
     */
    findMany<T extends KategoriFindManyArgs>(args?: SelectSubset<T, KategoriFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kategori.
     * @param {KategoriCreateArgs} args - Arguments to create a Kategori.
     * @example
     * // Create one Kategori
     * const Kategori = await prisma.kategori.create({
     *   data: {
     *     // ... data to create a Kategori
     *   }
     * })
     * 
     */
    create<T extends KategoriCreateArgs>(args: SelectSubset<T, KategoriCreateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kategoris.
     * @param {KategoriCreateManyArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KategoriCreateManyArgs>(args?: SelectSubset<T, KategoriCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Kategoris and returns the data saved in the database.
     * @param {KategoriCreateManyAndReturnArgs} args - Arguments to create many Kategoris.
     * @example
     * // Create many Kategoris
     * const kategori = await prisma.kategori.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.createManyAndReturn({
     *   select: { id_kategori: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KategoriCreateManyAndReturnArgs>(args?: SelectSubset<T, KategoriCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Kategori.
     * @param {KategoriDeleteArgs} args - Arguments to delete one Kategori.
     * @example
     * // Delete one Kategori
     * const Kategori = await prisma.kategori.delete({
     *   where: {
     *     // ... filter to delete one Kategori
     *   }
     * })
     * 
     */
    delete<T extends KategoriDeleteArgs>(args: SelectSubset<T, KategoriDeleteArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kategori.
     * @param {KategoriUpdateArgs} args - Arguments to update one Kategori.
     * @example
     * // Update one Kategori
     * const kategori = await prisma.kategori.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KategoriUpdateArgs>(args: SelectSubset<T, KategoriUpdateArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kategoris.
     * @param {KategoriDeleteManyArgs} args - Arguments to filter Kategoris to delete.
     * @example
     * // Delete a few Kategoris
     * const { count } = await prisma.kategori.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KategoriDeleteManyArgs>(args?: SelectSubset<T, KategoriDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KategoriUpdateManyArgs>(args: SelectSubset<T, KategoriUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kategoris and returns the data updated in the database.
     * @param {KategoriUpdateManyAndReturnArgs} args - Arguments to update many Kategoris.
     * @example
     * // Update many Kategoris
     * const kategori = await prisma.kategori.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Kategoris and only return the `id_kategori`
     * const kategoriWithId_kategoriOnly = await prisma.kategori.updateManyAndReturn({
     *   select: { id_kategori: true },
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
    updateManyAndReturn<T extends KategoriUpdateManyAndReturnArgs>(args: SelectSubset<T, KategoriUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Kategori.
     * @param {KategoriUpsertArgs} args - Arguments to update or create a Kategori.
     * @example
     * // Update or create a Kategori
     * const kategori = await prisma.kategori.upsert({
     *   create: {
     *     // ... data to create a Kategori
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kategori we want to update
     *   }
     * })
     */
    upsert<T extends KategoriUpsertArgs>(args: SelectSubset<T, KategoriUpsertArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kategoris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriCountArgs} args - Arguments to filter Kategoris to count.
     * @example
     * // Count the number of Kategoris
     * const count = await prisma.kategori.count({
     *   where: {
     *     // ... the filter for the Kategoris we want to count
     *   }
     * })
    **/
    count<T extends KategoriCountArgs>(
      args?: Subset<T, KategoriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KategoriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KategoriAggregateArgs>(args: Subset<T, KategoriAggregateArgs>): Prisma.PrismaPromise<GetKategoriAggregateType<T>>

    /**
     * Group by Kategori.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KategoriGroupByArgs} args - Group by arguments.
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
      T extends KategoriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KategoriGroupByArgs['orderBy'] }
        : { orderBy?: KategoriGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KategoriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKategoriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Kategori model
   */
  readonly fields: KategoriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Kategori.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KategoriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Produk<T extends Kategori$ProdukArgs<ExtArgs> = {}>(args?: Subset<T, Kategori$ProdukArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Kategori model
   */
  interface KategoriFieldRefs {
    readonly id_kategori: FieldRef<"Kategori", 'Int'>
    readonly nama_kategori: FieldRef<"Kategori", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Kategori findUnique
   */
  export type KategoriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findUniqueOrThrow
   */
  export type KategoriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori findFirst
   */
  export type KategoriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findFirstOrThrow
   */
  export type KategoriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategori to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Kategoris.
     */
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori findMany
   */
  export type KategoriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter, which Kategoris to fetch.
     */
    where?: KategoriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Kategoris to fetch.
     */
    orderBy?: KategoriOrderByWithRelationInput | KategoriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Kategoris.
     */
    cursor?: KategoriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Kategoris from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Kategoris.
     */
    skip?: number
    distinct?: KategoriScalarFieldEnum | KategoriScalarFieldEnum[]
  }

  /**
   * Kategori create
   */
  export type KategoriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to create a Kategori.
     */
    data: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
  }

  /**
   * Kategori createMany
   */
  export type KategoriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori createManyAndReturn
   */
  export type KategoriCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to create many Kategoris.
     */
    data: KategoriCreateManyInput | KategoriCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Kategori update
   */
  export type KategoriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The data needed to update a Kategori.
     */
    data: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
    /**
     * Choose, which Kategori to update.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori updateMany
   */
  export type KategoriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori updateManyAndReturn
   */
  export type KategoriUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * The data used to update Kategoris.
     */
    data: XOR<KategoriUpdateManyMutationInput, KategoriUncheckedUpdateManyInput>
    /**
     * Filter which Kategoris to update
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to update.
     */
    limit?: number
  }

  /**
   * Kategori upsert
   */
  export type KategoriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * The filter to search for the Kategori to update in case it exists.
     */
    where: KategoriWhereUniqueInput
    /**
     * In case the Kategori found by the `where` argument doesn't exist, create a new Kategori with this data.
     */
    create: XOR<KategoriCreateInput, KategoriUncheckedCreateInput>
    /**
     * In case the Kategori was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KategoriUpdateInput, KategoriUncheckedUpdateInput>
  }

  /**
   * Kategori delete
   */
  export type KategoriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
    /**
     * Filter which Kategori to delete.
     */
    where: KategoriWhereUniqueInput
  }

  /**
   * Kategori deleteMany
   */
  export type KategoriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Kategoris to delete
     */
    where?: KategoriWhereInput
    /**
     * Limit how many Kategoris to delete.
     */
    limit?: number
  }

  /**
   * Kategori.Produk
   */
  export type Kategori$ProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    cursor?: ProdukWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Kategori without action
   */
  export type KategoriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Kategori
     */
    select?: KategoriSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Kategori
     */
    omit?: KategoriOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: KategoriInclude<ExtArgs> | null
  }


  /**
   * Model Produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id_produk: number | null
    id_kategori: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id_produk: number | null
    id_kategori: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id_produk: number | null
    id_kategori: number | null
    nama_produk: string | null
    kode_produk: string | null
    foto_produk: string | null
    tgl_register: Date | null
  }

  export type ProdukMaxAggregateOutputType = {
    id_produk: number | null
    id_kategori: number | null
    nama_produk: string | null
    kode_produk: string | null
    foto_produk: string | null
    tgl_register: Date | null
  }

  export type ProdukCountAggregateOutputType = {
    id_produk: number
    id_kategori: number
    nama_produk: number
    kode_produk: number
    foto_produk: number
    tgl_register: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id_produk?: true
    id_kategori?: true
  }

  export type ProdukSumAggregateInputType = {
    id_produk?: true
    id_kategori?: true
  }

  export type ProdukMinAggregateInputType = {
    id_produk?: true
    id_kategori?: true
    nama_produk?: true
    kode_produk?: true
    foto_produk?: true
    tgl_register?: true
  }

  export type ProdukMaxAggregateInputType = {
    id_produk?: true
    id_kategori?: true
    nama_produk?: true
    kode_produk?: true
    foto_produk?: true
    tgl_register?: true
  }

  export type ProdukCountAggregateInputType = {
    id_produk?: true
    id_kategori?: true
    nama_produk?: true
    kode_produk?: true
    foto_produk?: true
    tgl_register?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produk to aggregate.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type ProdukGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProdukWhereInput
    orderBy?: ProdukOrderByWithAggregationInput | ProdukOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: ProdukScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id_produk: number
    id_kategori: number
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends ProdukGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type ProdukSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    id_kategori?: boolean
    nama_produk?: boolean
    kode_produk?: boolean
    foto_produk?: boolean
    tgl_register?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    Stok?: boolean | Produk$StokArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    id_kategori?: boolean
    nama_produk?: boolean
    kode_produk?: boolean
    foto_produk?: boolean
    tgl_register?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_produk?: boolean
    id_kategori?: boolean
    nama_produk?: boolean
    kode_produk?: boolean
    foto_produk?: boolean
    tgl_register?: boolean
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>

  export type ProdukSelectScalar = {
    id_produk?: boolean
    id_kategori?: boolean
    nama_produk?: boolean
    kode_produk?: boolean
    foto_produk?: boolean
    tgl_register?: boolean
  }

  export type ProdukOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_produk" | "id_kategori" | "nama_produk" | "kode_produk" | "foto_produk" | "tgl_register", ExtArgs["result"]["produk"]>
  export type ProdukInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
    Stok?: boolean | Produk$StokArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }
  export type ProdukIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    kategori?: boolean | KategoriDefaultArgs<ExtArgs>
  }

  export type $ProdukPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Produk"
    objects: {
      kategori: Prisma.$KategoriPayload<ExtArgs>
      Stok: Prisma.$StokPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id_produk: number
      id_kategori: number
      nama_produk: string
      kode_produk: string
      foto_produk: string
      tgl_register: Date
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type ProdukGetPayload<S extends boolean | null | undefined | ProdukDefaultArgs> = $Result.GetResult<Prisma.$ProdukPayload, S>

  type ProdukCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProdukFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface ProdukDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Produk'], meta: { name: 'Produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {ProdukFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProdukFindUniqueArgs>(args: SelectSubset<T, ProdukFindUniqueArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProdukFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProdukFindUniqueOrThrowArgs>(args: SelectSubset<T, ProdukFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProdukFindFirstArgs>(args?: SelectSubset<T, ProdukFindFirstArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProdukFindFirstOrThrowArgs>(args?: SelectSubset<T, ProdukFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.findMany({ select: { id_produk: true } })
     * 
     */
    findMany<T extends ProdukFindManyArgs>(args?: SelectSubset<T, ProdukFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {ProdukCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends ProdukCreateArgs>(args: SelectSubset<T, ProdukCreateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {ProdukCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProdukCreateManyArgs>(args?: SelectSubset<T, ProdukCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Produks and returns the data saved in the database.
     * @param {ProdukCreateManyAndReturnArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.createManyAndReturn({
     *   select: { id_produk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProdukCreateManyAndReturnArgs>(args?: SelectSubset<T, ProdukCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Produk.
     * @param {ProdukDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends ProdukDeleteArgs>(args: SelectSubset<T, ProdukDeleteArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {ProdukUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProdukUpdateArgs>(args: SelectSubset<T, ProdukUpdateArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {ProdukDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProdukDeleteManyArgs>(args?: SelectSubset<T, ProdukDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProdukUpdateManyArgs>(args: SelectSubset<T, ProdukUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks and returns the data updated in the database.
     * @param {ProdukUpdateManyAndReturnArgs} args - Arguments to update many Produks.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Produks and only return the `id_produk`
     * const produkWithId_produkOnly = await prisma.produk.updateManyAndReturn({
     *   select: { id_produk: true },
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
    updateManyAndReturn<T extends ProdukUpdateManyAndReturnArgs>(args: SelectSubset<T, ProdukUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Produk.
     * @param {ProdukUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends ProdukUpsertArgs>(args: SelectSubset<T, ProdukUpsertArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends ProdukCountArgs>(
      args?: Subset<T, ProdukCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukGroupByArgs} args - Group by arguments.
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
      T extends ProdukGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProdukGroupByArgs['orderBy'] }
        : { orderBy?: ProdukGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProdukGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Produk model
   */
  readonly fields: ProdukFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProdukClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    kategori<T extends KategoriDefaultArgs<ExtArgs> = {}>(args?: Subset<T, KategoriDefaultArgs<ExtArgs>>): Prisma__KategoriClient<$Result.GetResult<Prisma.$KategoriPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Stok<T extends Produk$StokArgs<ExtArgs> = {}>(args?: Subset<T, Produk$StokArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Produk model
   */
  interface ProdukFieldRefs {
    readonly id_produk: FieldRef<"Produk", 'Int'>
    readonly id_kategori: FieldRef<"Produk", 'Int'>
    readonly nama_produk: FieldRef<"Produk", 'String'>
    readonly kode_produk: FieldRef<"Produk", 'String'>
    readonly foto_produk: FieldRef<"Produk", 'String'>
    readonly tgl_register: FieldRef<"Produk", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Produk findUnique
   */
  export type ProdukFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findUniqueOrThrow
   */
  export type ProdukFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk findFirst
   */
  export type ProdukFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findFirstOrThrow
   */
  export type ProdukFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produk to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk findMany
   */
  export type ProdukFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter, which Produks to fetch.
     */
    where?: ProdukWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Produks to fetch.
     */
    orderBy?: ProdukOrderByWithRelationInput | ProdukOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Produks.
     */
    cursor?: ProdukWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * Produk create
   */
  export type ProdukCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to create a Produk.
     */
    data: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
  }

  /**
   * Produk createMany
   */
  export type ProdukCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Produk createManyAndReturn
   */
  export type ProdukCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to create many Produks.
     */
    data: ProdukCreateManyInput | ProdukCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produk update
   */
  export type ProdukUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The data needed to update a Produk.
     */
    data: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
    /**
     * Choose, which Produk to update.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk updateMany
   */
  export type ProdukUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
  }

  /**
   * Produk updateManyAndReturn
   */
  export type ProdukUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * The data used to update Produks.
     */
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyInput>
    /**
     * Filter which Produks to update
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Produk upsert
   */
  export type ProdukUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * The filter to search for the Produk to update in case it exists.
     */
    where: ProdukWhereUniqueInput
    /**
     * In case the Produk found by the `where` argument doesn't exist, create a new Produk with this data.
     */
    create: XOR<ProdukCreateInput, ProdukUncheckedCreateInput>
    /**
     * In case the Produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProdukUpdateInput, ProdukUncheckedUpdateInput>
  }

  /**
   * Produk delete
   */
  export type ProdukDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
    /**
     * Filter which Produk to delete.
     */
    where: ProdukWhereUniqueInput
  }

  /**
   * Produk deleteMany
   */
  export type ProdukDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Produks to delete
     */
    where?: ProdukWhereInput
    /**
     * Limit how many Produks to delete.
     */
    limit?: number
  }

  /**
   * Produk.Stok
   */
  export type Produk$StokArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    where?: StokWhereInput
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    cursor?: StokWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Produk without action
   */
  export type ProdukDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Produk
     */
    select?: ProdukSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Produk
     */
    omit?: ProdukOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProdukInclude<ExtArgs> | null
  }


  /**
   * Model Stok
   */

  export type AggregateStok = {
    _count: StokCountAggregateOutputType | null
    _avg: StokAvgAggregateOutputType | null
    _sum: StokSumAggregateOutputType | null
    _min: StokMinAggregateOutputType | null
    _max: StokMaxAggregateOutputType | null
  }

  export type StokAvgAggregateOutputType = {
    id_stok: number | null
    id_produk: number | null
    jumlah_barang: number | null
  }

  export type StokSumAggregateOutputType = {
    id_stok: number | null
    id_produk: number | null
    jumlah_barang: number | null
  }

  export type StokMinAggregateOutputType = {
    id_stok: number | null
    id_produk: number | null
    jumlah_barang: number | null
    tgl_update: Date | null
  }

  export type StokMaxAggregateOutputType = {
    id_stok: number | null
    id_produk: number | null
    jumlah_barang: number | null
    tgl_update: Date | null
  }

  export type StokCountAggregateOutputType = {
    id_stok: number
    id_produk: number
    jumlah_barang: number
    tgl_update: number
    _all: number
  }


  export type StokAvgAggregateInputType = {
    id_stok?: true
    id_produk?: true
    jumlah_barang?: true
  }

  export type StokSumAggregateInputType = {
    id_stok?: true
    id_produk?: true
    jumlah_barang?: true
  }

  export type StokMinAggregateInputType = {
    id_stok?: true
    id_produk?: true
    jumlah_barang?: true
    tgl_update?: true
  }

  export type StokMaxAggregateInputType = {
    id_stok?: true
    id_produk?: true
    jumlah_barang?: true
    tgl_update?: true
  }

  export type StokCountAggregateInputType = {
    id_stok?: true
    id_produk?: true
    jumlah_barang?: true
    tgl_update?: true
    _all?: true
  }

  export type StokAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stok to aggregate.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stoks
    **/
    _count?: true | StokCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StokAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StokSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StokMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StokMaxAggregateInputType
  }

  export type GetStokAggregateType<T extends StokAggregateArgs> = {
        [P in keyof T & keyof AggregateStok]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStok[P]>
      : GetScalarType<T[P], AggregateStok[P]>
  }




  export type StokGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StokWhereInput
    orderBy?: StokOrderByWithAggregationInput | StokOrderByWithAggregationInput[]
    by: StokScalarFieldEnum[] | StokScalarFieldEnum
    having?: StokScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StokCountAggregateInputType | true
    _avg?: StokAvgAggregateInputType
    _sum?: StokSumAggregateInputType
    _min?: StokMinAggregateInputType
    _max?: StokMaxAggregateInputType
  }

  export type StokGroupByOutputType = {
    id_stok: number
    id_produk: number
    jumlah_barang: number
    tgl_update: Date
    _count: StokCountAggregateOutputType | null
    _avg: StokAvgAggregateOutputType | null
    _sum: StokSumAggregateOutputType | null
    _min: StokMinAggregateOutputType | null
    _max: StokMaxAggregateOutputType | null
  }

  type GetStokGroupByPayload<T extends StokGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StokGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StokGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StokGroupByOutputType[P]>
            : GetScalarType<T[P], StokGroupByOutputType[P]>
        }
      >
    >


  export type StokSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_stok?: boolean
    id_produk?: boolean
    jumlah_barang?: boolean
    tgl_update?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_stok?: boolean
    id_produk?: boolean
    jumlah_barang?: boolean
    tgl_update?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id_stok?: boolean
    id_produk?: boolean
    jumlah_barang?: boolean
    tgl_update?: boolean
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stok"]>

  export type StokSelectScalar = {
    id_stok?: boolean
    id_produk?: boolean
    jumlah_barang?: boolean
    tgl_update?: boolean
  }

  export type StokOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id_stok" | "id_produk" | "jumlah_barang" | "tgl_update", ExtArgs["result"]["stok"]>
  export type StokInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type StokIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }
  export type StokIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | ProdukDefaultArgs<ExtArgs>
  }

  export type $StokPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stok"
    objects: {
      produk: Prisma.$ProdukPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id_stok: number
      id_produk: number
      jumlah_barang: number
      tgl_update: Date
    }, ExtArgs["result"]["stok"]>
    composites: {}
  }

  type StokGetPayload<S extends boolean | null | undefined | StokDefaultArgs> = $Result.GetResult<Prisma.$StokPayload, S>

  type StokCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StokFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StokCountAggregateInputType | true
    }

  export interface StokDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stok'], meta: { name: 'Stok' } }
    /**
     * Find zero or one Stok that matches the filter.
     * @param {StokFindUniqueArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StokFindUniqueArgs>(args: SelectSubset<T, StokFindUniqueArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stok that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StokFindUniqueOrThrowArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StokFindUniqueOrThrowArgs>(args: SelectSubset<T, StokFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stok that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindFirstArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StokFindFirstArgs>(args?: SelectSubset<T, StokFindFirstArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stok that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindFirstOrThrowArgs} args - Arguments to find a Stok
     * @example
     * // Get one Stok
     * const stok = await prisma.stok.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StokFindFirstOrThrowArgs>(args?: SelectSubset<T, StokFindFirstOrThrowArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stoks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stoks
     * const stoks = await prisma.stok.findMany()
     * 
     * // Get first 10 Stoks
     * const stoks = await prisma.stok.findMany({ take: 10 })
     * 
     * // Only select the `id_stok`
     * const stokWithId_stokOnly = await prisma.stok.findMany({ select: { id_stok: true } })
     * 
     */
    findMany<T extends StokFindManyArgs>(args?: SelectSubset<T, StokFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stok.
     * @param {StokCreateArgs} args - Arguments to create a Stok.
     * @example
     * // Create one Stok
     * const Stok = await prisma.stok.create({
     *   data: {
     *     // ... data to create a Stok
     *   }
     * })
     * 
     */
    create<T extends StokCreateArgs>(args: SelectSubset<T, StokCreateArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stoks.
     * @param {StokCreateManyArgs} args - Arguments to create many Stoks.
     * @example
     * // Create many Stoks
     * const stok = await prisma.stok.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StokCreateManyArgs>(args?: SelectSubset<T, StokCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stoks and returns the data saved in the database.
     * @param {StokCreateManyAndReturnArgs} args - Arguments to create many Stoks.
     * @example
     * // Create many Stoks
     * const stok = await prisma.stok.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stoks and only return the `id_stok`
     * const stokWithId_stokOnly = await prisma.stok.createManyAndReturn({
     *   select: { id_stok: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StokCreateManyAndReturnArgs>(args?: SelectSubset<T, StokCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stok.
     * @param {StokDeleteArgs} args - Arguments to delete one Stok.
     * @example
     * // Delete one Stok
     * const Stok = await prisma.stok.delete({
     *   where: {
     *     // ... filter to delete one Stok
     *   }
     * })
     * 
     */
    delete<T extends StokDeleteArgs>(args: SelectSubset<T, StokDeleteArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stok.
     * @param {StokUpdateArgs} args - Arguments to update one Stok.
     * @example
     * // Update one Stok
     * const stok = await prisma.stok.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StokUpdateArgs>(args: SelectSubset<T, StokUpdateArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stoks.
     * @param {StokDeleteManyArgs} args - Arguments to filter Stoks to delete.
     * @example
     * // Delete a few Stoks
     * const { count } = await prisma.stok.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StokDeleteManyArgs>(args?: SelectSubset<T, StokDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stoks
     * const stok = await prisma.stok.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StokUpdateManyArgs>(args: SelectSubset<T, StokUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stoks and returns the data updated in the database.
     * @param {StokUpdateManyAndReturnArgs} args - Arguments to update many Stoks.
     * @example
     * // Update many Stoks
     * const stok = await prisma.stok.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stoks and only return the `id_stok`
     * const stokWithId_stokOnly = await prisma.stok.updateManyAndReturn({
     *   select: { id_stok: true },
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
    updateManyAndReturn<T extends StokUpdateManyAndReturnArgs>(args: SelectSubset<T, StokUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stok.
     * @param {StokUpsertArgs} args - Arguments to update or create a Stok.
     * @example
     * // Update or create a Stok
     * const stok = await prisma.stok.upsert({
     *   create: {
     *     // ... data to create a Stok
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stok we want to update
     *   }
     * })
     */
    upsert<T extends StokUpsertArgs>(args: SelectSubset<T, StokUpsertArgs<ExtArgs>>): Prisma__StokClient<$Result.GetResult<Prisma.$StokPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stoks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokCountArgs} args - Arguments to filter Stoks to count.
     * @example
     * // Count the number of Stoks
     * const count = await prisma.stok.count({
     *   where: {
     *     // ... the filter for the Stoks we want to count
     *   }
     * })
    **/
    count<T extends StokCountArgs>(
      args?: Subset<T, StokCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StokCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StokAggregateArgs>(args: Subset<T, StokAggregateArgs>): Prisma.PrismaPromise<GetStokAggregateType<T>>

    /**
     * Group by Stok.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StokGroupByArgs} args - Group by arguments.
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
      T extends StokGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StokGroupByArgs['orderBy'] }
        : { orderBy?: StokGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StokGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStokGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stok model
   */
  readonly fields: StokFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stok.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StokClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends ProdukDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProdukDefaultArgs<ExtArgs>>): Prisma__ProdukClient<$Result.GetResult<Prisma.$ProdukPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stok model
   */
  interface StokFieldRefs {
    readonly id_stok: FieldRef<"Stok", 'Int'>
    readonly id_produk: FieldRef<"Stok", 'Int'>
    readonly jumlah_barang: FieldRef<"Stok", 'Int'>
    readonly tgl_update: FieldRef<"Stok", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stok findUnique
   */
  export type StokFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok findUniqueOrThrow
   */
  export type StokFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok findFirst
   */
  export type StokFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stoks.
     */
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok findFirstOrThrow
   */
  export type StokFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stok to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stoks.
     */
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok findMany
   */
  export type StokFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter, which Stoks to fetch.
     */
    where?: StokWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stoks to fetch.
     */
    orderBy?: StokOrderByWithRelationInput | StokOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stoks.
     */
    cursor?: StokWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stoks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stoks.
     */
    skip?: number
    distinct?: StokScalarFieldEnum | StokScalarFieldEnum[]
  }

  /**
   * Stok create
   */
  export type StokCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The data needed to create a Stok.
     */
    data: XOR<StokCreateInput, StokUncheckedCreateInput>
  }

  /**
   * Stok createMany
   */
  export type StokCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stoks.
     */
    data: StokCreateManyInput | StokCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stok createManyAndReturn
   */
  export type StokCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * The data used to create many Stoks.
     */
    data: StokCreateManyInput | StokCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stok update
   */
  export type StokUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The data needed to update a Stok.
     */
    data: XOR<StokUpdateInput, StokUncheckedUpdateInput>
    /**
     * Choose, which Stok to update.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok updateMany
   */
  export type StokUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stoks.
     */
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyInput>
    /**
     * Filter which Stoks to update
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to update.
     */
    limit?: number
  }

  /**
   * Stok updateManyAndReturn
   */
  export type StokUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * The data used to update Stoks.
     */
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyInput>
    /**
     * Filter which Stoks to update
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stok upsert
   */
  export type StokUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * The filter to search for the Stok to update in case it exists.
     */
    where: StokWhereUniqueInput
    /**
     * In case the Stok found by the `where` argument doesn't exist, create a new Stok with this data.
     */
    create: XOR<StokCreateInput, StokUncheckedCreateInput>
    /**
     * In case the Stok was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StokUpdateInput, StokUncheckedUpdateInput>
  }

  /**
   * Stok delete
   */
  export type StokDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
    /**
     * Filter which Stok to delete.
     */
    where: StokWhereUniqueInput
  }

  /**
   * Stok deleteMany
   */
  export type StokDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stoks to delete
     */
    where?: StokWhereInput
    /**
     * Limit how many Stoks to delete.
     */
    limit?: number
  }

  /**
   * Stok without action
   */
  export type StokDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stok
     */
    select?: StokSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stok
     */
    omit?: StokOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StokInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id_user: 'id_user',
    nama_user: 'nama_user',
    email: 'email',
    password: 'password',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at',
    auth_provider: 'auth_provider',
    auth_id: 'auth_id',
    last_login: 'last_login'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const KategoriScalarFieldEnum: {
    id_kategori: 'id_kategori',
    nama_kategori: 'nama_kategori'
  };

  export type KategoriScalarFieldEnum = (typeof KategoriScalarFieldEnum)[keyof typeof KategoriScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id_produk: 'id_produk',
    id_kategori: 'id_kategori',
    nama_produk: 'nama_produk',
    kode_produk: 'kode_produk',
    foto_produk: 'foto_produk',
    tgl_register: 'tgl_register'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const StokScalarFieldEnum: {
    id_stok: 'id_stok',
    id_produk: 'id_produk',
    jumlah_barang: 'jumlah_barang',
    tgl_update: 'tgl_update'
  };

  export type StokScalarFieldEnum = (typeof StokScalarFieldEnum)[keyof typeof StokScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id_user?: IntFilter<"User"> | number
    nama_user?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    auth_provider?: StringNullableFilter<"User"> | string | null
    auth_id?: StringNullableFilter<"User"> | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type UserOrderByWithRelationInput = {
    id_user?: SortOrder
    nama_user?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    auth_provider?: SortOrderInput | SortOrder
    auth_id?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id_user?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    nama_user?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    is_active?: BoolFilter<"User"> | boolean
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    auth_provider?: StringNullableFilter<"User"> | string | null
    auth_id?: StringNullableFilter<"User"> | string | null
    last_login?: DateTimeNullableFilter<"User"> | Date | string | null
  }, "id_user" | "email">

  export type UserOrderByWithAggregationInput = {
    id_user?: SortOrder
    nama_user?: SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    auth_provider?: SortOrderInput | SortOrder
    auth_id?: SortOrderInput | SortOrder
    last_login?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id_user?: IntWithAggregatesFilter<"User"> | number
    nama_user?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    is_active?: BoolWithAggregatesFilter<"User"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    auth_provider?: StringNullableWithAggregatesFilter<"User"> | string | null
    auth_id?: StringNullableWithAggregatesFilter<"User"> | string | null
    last_login?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type KategoriWhereInput = {
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    id_kategori?: IntFilter<"Kategori"> | number
    nama_kategori?: StringFilter<"Kategori"> | string
    Produk?: ProdukListRelationFilter
  }

  export type KategoriOrderByWithRelationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    Produk?: ProdukOrderByRelationAggregateInput
  }

  export type KategoriWhereUniqueInput = Prisma.AtLeast<{
    id_kategori?: number
    AND?: KategoriWhereInput | KategoriWhereInput[]
    OR?: KategoriWhereInput[]
    NOT?: KategoriWhereInput | KategoriWhereInput[]
    nama_kategori?: StringFilter<"Kategori"> | string
    Produk?: ProdukListRelationFilter
  }, "id_kategori">

  export type KategoriOrderByWithAggregationInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
    _count?: KategoriCountOrderByAggregateInput
    _avg?: KategoriAvgOrderByAggregateInput
    _max?: KategoriMaxOrderByAggregateInput
    _min?: KategoriMinOrderByAggregateInput
    _sum?: KategoriSumOrderByAggregateInput
  }

  export type KategoriScalarWhereWithAggregatesInput = {
    AND?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    OR?: KategoriScalarWhereWithAggregatesInput[]
    NOT?: KategoriScalarWhereWithAggregatesInput | KategoriScalarWhereWithAggregatesInput[]
    id_kategori?: IntWithAggregatesFilter<"Kategori"> | number
    nama_kategori?: StringWithAggregatesFilter<"Kategori"> | string
  }

  export type ProdukWhereInput = {
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    id_produk?: IntFilter<"Produk"> | number
    id_kategori?: IntFilter<"Produk"> | number
    nama_produk?: StringFilter<"Produk"> | string
    kode_produk?: StringFilter<"Produk"> | string
    foto_produk?: StringFilter<"Produk"> | string
    tgl_register?: DateTimeFilter<"Produk"> | Date | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    Stok?: StokListRelationFilter
  }

  export type ProdukOrderByWithRelationInput = {
    id_produk?: SortOrder
    id_kategori?: SortOrder
    nama_produk?: SortOrder
    kode_produk?: SortOrder
    foto_produk?: SortOrder
    tgl_register?: SortOrder
    kategori?: KategoriOrderByWithRelationInput
    Stok?: StokOrderByRelationAggregateInput
  }

  export type ProdukWhereUniqueInput = Prisma.AtLeast<{
    id_produk?: number
    kode_produk?: string
    AND?: ProdukWhereInput | ProdukWhereInput[]
    OR?: ProdukWhereInput[]
    NOT?: ProdukWhereInput | ProdukWhereInput[]
    id_kategori?: IntFilter<"Produk"> | number
    nama_produk?: StringFilter<"Produk"> | string
    foto_produk?: StringFilter<"Produk"> | string
    tgl_register?: DateTimeFilter<"Produk"> | Date | string
    kategori?: XOR<KategoriScalarRelationFilter, KategoriWhereInput>
    Stok?: StokListRelationFilter
  }, "id_produk" | "kode_produk">

  export type ProdukOrderByWithAggregationInput = {
    id_produk?: SortOrder
    id_kategori?: SortOrder
    nama_produk?: SortOrder
    kode_produk?: SortOrder
    foto_produk?: SortOrder
    tgl_register?: SortOrder
    _count?: ProdukCountOrderByAggregateInput
    _avg?: ProdukAvgOrderByAggregateInput
    _max?: ProdukMaxOrderByAggregateInput
    _min?: ProdukMinOrderByAggregateInput
    _sum?: ProdukSumOrderByAggregateInput
  }

  export type ProdukScalarWhereWithAggregatesInput = {
    AND?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    OR?: ProdukScalarWhereWithAggregatesInput[]
    NOT?: ProdukScalarWhereWithAggregatesInput | ProdukScalarWhereWithAggregatesInput[]
    id_produk?: IntWithAggregatesFilter<"Produk"> | number
    id_kategori?: IntWithAggregatesFilter<"Produk"> | number
    nama_produk?: StringWithAggregatesFilter<"Produk"> | string
    kode_produk?: StringWithAggregatesFilter<"Produk"> | string
    foto_produk?: StringWithAggregatesFilter<"Produk"> | string
    tgl_register?: DateTimeWithAggregatesFilter<"Produk"> | Date | string
  }

  export type StokWhereInput = {
    AND?: StokWhereInput | StokWhereInput[]
    OR?: StokWhereInput[]
    NOT?: StokWhereInput | StokWhereInput[]
    id_stok?: IntFilter<"Stok"> | number
    id_produk?: IntFilter<"Stok"> | number
    jumlah_barang?: IntFilter<"Stok"> | number
    tgl_update?: DateTimeFilter<"Stok"> | Date | string
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }

  export type StokOrderByWithRelationInput = {
    id_stok?: SortOrder
    id_produk?: SortOrder
    jumlah_barang?: SortOrder
    tgl_update?: SortOrder
    produk?: ProdukOrderByWithRelationInput
  }

  export type StokWhereUniqueInput = Prisma.AtLeast<{
    id_stok?: number
    AND?: StokWhereInput | StokWhereInput[]
    OR?: StokWhereInput[]
    NOT?: StokWhereInput | StokWhereInput[]
    id_produk?: IntFilter<"Stok"> | number
    jumlah_barang?: IntFilter<"Stok"> | number
    tgl_update?: DateTimeFilter<"Stok"> | Date | string
    produk?: XOR<ProdukScalarRelationFilter, ProdukWhereInput>
  }, "id_stok">

  export type StokOrderByWithAggregationInput = {
    id_stok?: SortOrder
    id_produk?: SortOrder
    jumlah_barang?: SortOrder
    tgl_update?: SortOrder
    _count?: StokCountOrderByAggregateInput
    _avg?: StokAvgOrderByAggregateInput
    _max?: StokMaxOrderByAggregateInput
    _min?: StokMinOrderByAggregateInput
    _sum?: StokSumOrderByAggregateInput
  }

  export type StokScalarWhereWithAggregatesInput = {
    AND?: StokScalarWhereWithAggregatesInput | StokScalarWhereWithAggregatesInput[]
    OR?: StokScalarWhereWithAggregatesInput[]
    NOT?: StokScalarWhereWithAggregatesInput | StokScalarWhereWithAggregatesInput[]
    id_stok?: IntWithAggregatesFilter<"Stok"> | number
    id_produk?: IntWithAggregatesFilter<"Stok"> | number
    jumlah_barang?: IntWithAggregatesFilter<"Stok"> | number
    tgl_update?: DateTimeWithAggregatesFilter<"Stok"> | Date | string
  }

  export type UserCreateInput = {
    nama_user: string
    email: string
    password?: string | null
    role?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    auth_provider?: string | null
    auth_id?: string | null
    last_login?: Date | string | null
  }

  export type UserUncheckedCreateInput = {
    id_user?: number
    nama_user: string
    email: string
    password?: string | null
    role?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    auth_provider?: string | null
    auth_id?: string | null
    last_login?: Date | string | null
  }

  export type UserUpdateInput = {
    nama_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    nama_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyInput = {
    id_user?: number
    nama_user: string
    email: string
    password?: string | null
    role?: string
    is_active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
    auth_provider?: string | null
    auth_id?: string | null
    last_login?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    nama_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id_user?: IntFieldUpdateOperationsInput | number
    nama_user?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    auth_provider?: NullableStringFieldUpdateOperationsInput | string | null
    auth_id?: NullableStringFieldUpdateOperationsInput | string | null
    last_login?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KategoriCreateInput = {
    nama_kategori: string
    Produk?: ProdukCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUncheckedCreateInput = {
    id_kategori?: number
    nama_kategori: string
    Produk?: ProdukUncheckedCreateNestedManyWithoutKategoriInput
  }

  export type KategoriUpdateInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
    Produk?: ProdukUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriUncheckedUpdateInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
    Produk?: ProdukUncheckedUpdateManyWithoutKategoriNestedInput
  }

  export type KategoriCreateManyInput = {
    id_kategori?: number
    nama_kategori: string
  }

  export type KategoriUpdateManyMutationInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriUncheckedUpdateManyInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type ProdukCreateInput = {
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
    kategori: KategoriCreateNestedOneWithoutProdukInput
    Stok?: StokCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateInput = {
    id_produk?: number
    id_kategori: number
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
    Stok?: StokUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukUpdateInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
    Stok?: StokUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
    Stok?: StokUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukCreateManyInput = {
    id_produk?: number
    id_kategori: number
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
  }

  export type ProdukUpdateManyMutationInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdukUncheckedUpdateManyInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokCreateInput = {
    jumlah_barang: number
    tgl_update: Date | string
    produk: ProdukCreateNestedOneWithoutStokInput
  }

  export type StokUncheckedCreateInput = {
    id_stok?: number
    id_produk: number
    jumlah_barang: number
    tgl_update: Date | string
  }

  export type StokUpdateInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    tgl_update?: DateTimeFieldUpdateOperationsInput | Date | string
    produk?: ProdukUpdateOneRequiredWithoutStokNestedInput
  }

  export type StokUncheckedUpdateInput = {
    id_stok?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    tgl_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokCreateManyInput = {
    id_stok?: number
    id_produk: number
    jumlah_barang: number
    tgl_update: Date | string
  }

  export type StokUpdateManyMutationInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    tgl_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokUncheckedUpdateManyInput = {
    id_stok?: IntFieldUpdateOperationsInput | number
    id_produk?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    tgl_update?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id_user?: SortOrder
    nama_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    auth_provider?: SortOrder
    auth_id?: SortOrder
    last_login?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id_user?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id_user?: SortOrder
    nama_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    auth_provider?: SortOrder
    auth_id?: SortOrder
    last_login?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id_user?: SortOrder
    nama_user?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    auth_provider?: SortOrder
    auth_id?: SortOrder
    last_login?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id_user?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProdukListRelationFilter = {
    every?: ProdukWhereInput
    some?: ProdukWhereInput
    none?: ProdukWhereInput
  }

  export type ProdukOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type KategoriCountOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type KategoriAvgOrderByAggregateInput = {
    id_kategori?: SortOrder
  }

  export type KategoriMaxOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type KategoriMinOrderByAggregateInput = {
    id_kategori?: SortOrder
    nama_kategori?: SortOrder
  }

  export type KategoriSumOrderByAggregateInput = {
    id_kategori?: SortOrder
  }

  export type KategoriScalarRelationFilter = {
    is?: KategoriWhereInput
    isNot?: KategoriWhereInput
  }

  export type StokListRelationFilter = {
    every?: StokWhereInput
    some?: StokWhereInput
    none?: StokWhereInput
  }

  export type StokOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProdukCountOrderByAggregateInput = {
    id_produk?: SortOrder
    id_kategori?: SortOrder
    nama_produk?: SortOrder
    kode_produk?: SortOrder
    foto_produk?: SortOrder
    tgl_register?: SortOrder
  }

  export type ProdukAvgOrderByAggregateInput = {
    id_produk?: SortOrder
    id_kategori?: SortOrder
  }

  export type ProdukMaxOrderByAggregateInput = {
    id_produk?: SortOrder
    id_kategori?: SortOrder
    nama_produk?: SortOrder
    kode_produk?: SortOrder
    foto_produk?: SortOrder
    tgl_register?: SortOrder
  }

  export type ProdukMinOrderByAggregateInput = {
    id_produk?: SortOrder
    id_kategori?: SortOrder
    nama_produk?: SortOrder
    kode_produk?: SortOrder
    foto_produk?: SortOrder
    tgl_register?: SortOrder
  }

  export type ProdukSumOrderByAggregateInput = {
    id_produk?: SortOrder
    id_kategori?: SortOrder
  }

  export type ProdukScalarRelationFilter = {
    is?: ProdukWhereInput
    isNot?: ProdukWhereInput
  }

  export type StokCountOrderByAggregateInput = {
    id_stok?: SortOrder
    id_produk?: SortOrder
    jumlah_barang?: SortOrder
    tgl_update?: SortOrder
  }

  export type StokAvgOrderByAggregateInput = {
    id_stok?: SortOrder
    id_produk?: SortOrder
    jumlah_barang?: SortOrder
  }

  export type StokMaxOrderByAggregateInput = {
    id_stok?: SortOrder
    id_produk?: SortOrder
    jumlah_barang?: SortOrder
    tgl_update?: SortOrder
  }

  export type StokMinOrderByAggregateInput = {
    id_stok?: SortOrder
    id_produk?: SortOrder
    jumlah_barang?: SortOrder
    tgl_update?: SortOrder
  }

  export type StokSumOrderByAggregateInput = {
    id_stok?: SortOrder
    id_produk?: SortOrder
    jumlah_barang?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProdukCreateNestedManyWithoutKategoriInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
  }

  export type ProdukUncheckedCreateNestedManyWithoutKategoriInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
  }

  export type ProdukUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    upsert?: ProdukUpsertWithWhereUniqueWithoutKategoriInput | ProdukUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    set?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    disconnect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    delete?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    update?: ProdukUpdateWithWhereUniqueWithoutKategoriInput | ProdukUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: ProdukUpdateManyWithWhereWithoutKategoriInput | ProdukUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
  }

  export type ProdukUncheckedUpdateManyWithoutKategoriNestedInput = {
    create?: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput> | ProdukCreateWithoutKategoriInput[] | ProdukUncheckedCreateWithoutKategoriInput[]
    connectOrCreate?: ProdukCreateOrConnectWithoutKategoriInput | ProdukCreateOrConnectWithoutKategoriInput[]
    upsert?: ProdukUpsertWithWhereUniqueWithoutKategoriInput | ProdukUpsertWithWhereUniqueWithoutKategoriInput[]
    createMany?: ProdukCreateManyKategoriInputEnvelope
    set?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    disconnect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    delete?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    connect?: ProdukWhereUniqueInput | ProdukWhereUniqueInput[]
    update?: ProdukUpdateWithWhereUniqueWithoutKategoriInput | ProdukUpdateWithWhereUniqueWithoutKategoriInput[]
    updateMany?: ProdukUpdateManyWithWhereWithoutKategoriInput | ProdukUpdateManyWithWhereWithoutKategoriInput[]
    deleteMany?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
  }

  export type KategoriCreateNestedOneWithoutProdukInput = {
    create?: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutProdukInput
    connect?: KategoriWhereUniqueInput
  }

  export type StokCreateNestedManyWithoutProdukInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
  }

  export type StokUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
  }

  export type KategoriUpdateOneRequiredWithoutProdukNestedInput = {
    create?: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    connectOrCreate?: KategoriCreateOrConnectWithoutProdukInput
    upsert?: KategoriUpsertWithoutProdukInput
    connect?: KategoriWhereUniqueInput
    update?: XOR<XOR<KategoriUpdateToOneWithWhereWithoutProdukInput, KategoriUpdateWithoutProdukInput>, KategoriUncheckedUpdateWithoutProdukInput>
  }

  export type StokUpdateManyWithoutProdukNestedInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    upsert?: StokUpsertWithWhereUniqueWithoutProdukInput | StokUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    set?: StokWhereUniqueInput | StokWhereUniqueInput[]
    disconnect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    delete?: StokWhereUniqueInput | StokWhereUniqueInput[]
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    update?: StokUpdateWithWhereUniqueWithoutProdukInput | StokUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: StokUpdateManyWithWhereWithoutProdukInput | StokUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: StokScalarWhereInput | StokScalarWhereInput[]
  }

  export type StokUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput> | StokCreateWithoutProdukInput[] | StokUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: StokCreateOrConnectWithoutProdukInput | StokCreateOrConnectWithoutProdukInput[]
    upsert?: StokUpsertWithWhereUniqueWithoutProdukInput | StokUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: StokCreateManyProdukInputEnvelope
    set?: StokWhereUniqueInput | StokWhereUniqueInput[]
    disconnect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    delete?: StokWhereUniqueInput | StokWhereUniqueInput[]
    connect?: StokWhereUniqueInput | StokWhereUniqueInput[]
    update?: StokUpdateWithWhereUniqueWithoutProdukInput | StokUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: StokUpdateManyWithWhereWithoutProdukInput | StokUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: StokScalarWhereInput | StokScalarWhereInput[]
  }

  export type ProdukCreateNestedOneWithoutStokInput = {
    create?: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutStokInput
    connect?: ProdukWhereUniqueInput
  }

  export type ProdukUpdateOneRequiredWithoutStokNestedInput = {
    create?: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
    connectOrCreate?: ProdukCreateOrConnectWithoutStokInput
    upsert?: ProdukUpsertWithoutStokInput
    connect?: ProdukWhereUniqueInput
    update?: XOR<XOR<ProdukUpdateToOneWithWhereWithoutStokInput, ProdukUpdateWithoutStokInput>, ProdukUncheckedUpdateWithoutStokInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type ProdukCreateWithoutKategoriInput = {
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
    Stok?: StokCreateNestedManyWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutKategoriInput = {
    id_produk?: number
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
    Stok?: StokUncheckedCreateNestedManyWithoutProdukInput
  }

  export type ProdukCreateOrConnectWithoutKategoriInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput>
  }

  export type ProdukCreateManyKategoriInputEnvelope = {
    data: ProdukCreateManyKategoriInput | ProdukCreateManyKategoriInput[]
    skipDuplicates?: boolean
  }

  export type ProdukUpsertWithWhereUniqueWithoutKategoriInput = {
    where: ProdukWhereUniqueInput
    update: XOR<ProdukUpdateWithoutKategoriInput, ProdukUncheckedUpdateWithoutKategoriInput>
    create: XOR<ProdukCreateWithoutKategoriInput, ProdukUncheckedCreateWithoutKategoriInput>
  }

  export type ProdukUpdateWithWhereUniqueWithoutKategoriInput = {
    where: ProdukWhereUniqueInput
    data: XOR<ProdukUpdateWithoutKategoriInput, ProdukUncheckedUpdateWithoutKategoriInput>
  }

  export type ProdukUpdateManyWithWhereWithoutKategoriInput = {
    where: ProdukScalarWhereInput
    data: XOR<ProdukUpdateManyMutationInput, ProdukUncheckedUpdateManyWithoutKategoriInput>
  }

  export type ProdukScalarWhereInput = {
    AND?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
    OR?: ProdukScalarWhereInput[]
    NOT?: ProdukScalarWhereInput | ProdukScalarWhereInput[]
    id_produk?: IntFilter<"Produk"> | number
    id_kategori?: IntFilter<"Produk"> | number
    nama_produk?: StringFilter<"Produk"> | string
    kode_produk?: StringFilter<"Produk"> | string
    foto_produk?: StringFilter<"Produk"> | string
    tgl_register?: DateTimeFilter<"Produk"> | Date | string
  }

  export type KategoriCreateWithoutProdukInput = {
    nama_kategori: string
  }

  export type KategoriUncheckedCreateWithoutProdukInput = {
    id_kategori?: number
    nama_kategori: string
  }

  export type KategoriCreateOrConnectWithoutProdukInput = {
    where: KategoriWhereUniqueInput
    create: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
  }

  export type StokCreateWithoutProdukInput = {
    jumlah_barang: number
    tgl_update: Date | string
  }

  export type StokUncheckedCreateWithoutProdukInput = {
    id_stok?: number
    jumlah_barang: number
    tgl_update: Date | string
  }

  export type StokCreateOrConnectWithoutProdukInput = {
    where: StokWhereUniqueInput
    create: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput>
  }

  export type StokCreateManyProdukInputEnvelope = {
    data: StokCreateManyProdukInput | StokCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type KategoriUpsertWithoutProdukInput = {
    update: XOR<KategoriUpdateWithoutProdukInput, KategoriUncheckedUpdateWithoutProdukInput>
    create: XOR<KategoriCreateWithoutProdukInput, KategoriUncheckedCreateWithoutProdukInput>
    where?: KategoriWhereInput
  }

  export type KategoriUpdateToOneWithWhereWithoutProdukInput = {
    where?: KategoriWhereInput
    data: XOR<KategoriUpdateWithoutProdukInput, KategoriUncheckedUpdateWithoutProdukInput>
  }

  export type KategoriUpdateWithoutProdukInput = {
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type KategoriUncheckedUpdateWithoutProdukInput = {
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_kategori?: StringFieldUpdateOperationsInput | string
  }

  export type StokUpsertWithWhereUniqueWithoutProdukInput = {
    where: StokWhereUniqueInput
    update: XOR<StokUpdateWithoutProdukInput, StokUncheckedUpdateWithoutProdukInput>
    create: XOR<StokCreateWithoutProdukInput, StokUncheckedCreateWithoutProdukInput>
  }

  export type StokUpdateWithWhereUniqueWithoutProdukInput = {
    where: StokWhereUniqueInput
    data: XOR<StokUpdateWithoutProdukInput, StokUncheckedUpdateWithoutProdukInput>
  }

  export type StokUpdateManyWithWhereWithoutProdukInput = {
    where: StokScalarWhereInput
    data: XOR<StokUpdateManyMutationInput, StokUncheckedUpdateManyWithoutProdukInput>
  }

  export type StokScalarWhereInput = {
    AND?: StokScalarWhereInput | StokScalarWhereInput[]
    OR?: StokScalarWhereInput[]
    NOT?: StokScalarWhereInput | StokScalarWhereInput[]
    id_stok?: IntFilter<"Stok"> | number
    id_produk?: IntFilter<"Stok"> | number
    jumlah_barang?: IntFilter<"Stok"> | number
    tgl_update?: DateTimeFilter<"Stok"> | Date | string
  }

  export type ProdukCreateWithoutStokInput = {
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
    kategori: KategoriCreateNestedOneWithoutProdukInput
  }

  export type ProdukUncheckedCreateWithoutStokInput = {
    id_produk?: number
    id_kategori: number
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
  }

  export type ProdukCreateOrConnectWithoutStokInput = {
    where: ProdukWhereUniqueInput
    create: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
  }

  export type ProdukUpsertWithoutStokInput = {
    update: XOR<ProdukUpdateWithoutStokInput, ProdukUncheckedUpdateWithoutStokInput>
    create: XOR<ProdukCreateWithoutStokInput, ProdukUncheckedCreateWithoutStokInput>
    where?: ProdukWhereInput
  }

  export type ProdukUpdateToOneWithWhereWithoutStokInput = {
    where?: ProdukWhereInput
    data: XOR<ProdukUpdateWithoutStokInput, ProdukUncheckedUpdateWithoutStokInput>
  }

  export type ProdukUpdateWithoutStokInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
    kategori?: KategoriUpdateOneRequiredWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutStokInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    id_kategori?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProdukCreateManyKategoriInput = {
    id_produk?: number
    nama_produk: string
    kode_produk: string
    foto_produk: string
    tgl_register: Date | string
  }

  export type ProdukUpdateWithoutKategoriInput = {
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
    Stok?: StokUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateWithoutKategoriInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
    Stok?: StokUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type ProdukUncheckedUpdateManyWithoutKategoriInput = {
    id_produk?: IntFieldUpdateOperationsInput | number
    nama_produk?: StringFieldUpdateOperationsInput | string
    kode_produk?: StringFieldUpdateOperationsInput | string
    foto_produk?: StringFieldUpdateOperationsInput | string
    tgl_register?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokCreateManyProdukInput = {
    id_stok?: number
    jumlah_barang: number
    tgl_update: Date | string
  }

  export type StokUpdateWithoutProdukInput = {
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    tgl_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokUncheckedUpdateWithoutProdukInput = {
    id_stok?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    tgl_update?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StokUncheckedUpdateManyWithoutProdukInput = {
    id_stok?: IntFieldUpdateOperationsInput | number
    jumlah_barang?: IntFieldUpdateOperationsInput | number
    tgl_update?: DateTimeFieldUpdateOperationsInput | Date | string
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