
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
 * Model Landing
 * 
 */
export type Landing = $Result.DefaultSelection<Prisma.$LandingPayload>
/**
 * Model Registered
 * 
 */
export type Registered = $Result.DefaultSelection<Prisma.$RegisteredPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Landings
 * const landings = await prisma.landing.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Landings
   * const landings = await prisma.landing.findMany()
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
   * `prisma.landing`: Exposes CRUD operations for the **Landing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Landings
    * const landings = await prisma.landing.findMany()
    * ```
    */
  get landing(): Prisma.LandingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.registered`: Exposes CRUD operations for the **Registered** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Registereds
    * const registereds = await prisma.registered.findMany()
    * ```
    */
  get registered(): Prisma.RegisteredDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    Landing: 'Landing',
    Registered: 'Registered'
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
      modelProps: "landing" | "registered"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Landing: {
        payload: Prisma.$LandingPayload<ExtArgs>
        fields: Prisma.LandingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LandingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LandingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>
          }
          findFirst: {
            args: Prisma.LandingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LandingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>
          }
          findMany: {
            args: Prisma.LandingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>[]
          }
          create: {
            args: Prisma.LandingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>
          }
          createMany: {
            args: Prisma.LandingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LandingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>[]
          }
          delete: {
            args: Prisma.LandingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>
          }
          update: {
            args: Prisma.LandingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>
          }
          deleteMany: {
            args: Prisma.LandingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LandingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LandingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>[]
          }
          upsert: {
            args: Prisma.LandingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LandingPayload>
          }
          aggregate: {
            args: Prisma.LandingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanding>
          }
          groupBy: {
            args: Prisma.LandingGroupByArgs<ExtArgs>
            result: $Utils.Optional<LandingGroupByOutputType>[]
          }
          count: {
            args: Prisma.LandingCountArgs<ExtArgs>
            result: $Utils.Optional<LandingCountAggregateOutputType> | number
          }
        }
      }
      Registered: {
        payload: Prisma.$RegisteredPayload<ExtArgs>
        fields: Prisma.RegisteredFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegisteredFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegisteredFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>
          }
          findFirst: {
            args: Prisma.RegisteredFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegisteredFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>
          }
          findMany: {
            args: Prisma.RegisteredFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>[]
          }
          create: {
            args: Prisma.RegisteredCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>
          }
          createMany: {
            args: Prisma.RegisteredCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegisteredCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>[]
          }
          delete: {
            args: Prisma.RegisteredDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>
          }
          update: {
            args: Prisma.RegisteredUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>
          }
          deleteMany: {
            args: Prisma.RegisteredDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegisteredUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegisteredUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>[]
          }
          upsert: {
            args: Prisma.RegisteredUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegisteredPayload>
          }
          aggregate: {
            args: Prisma.RegisteredAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegistered>
          }
          groupBy: {
            args: Prisma.RegisteredGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegisteredGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegisteredCountArgs<ExtArgs>
            result: $Utils.Optional<RegisteredCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    landing?: LandingOmit
    registered?: RegisteredOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
   * Models
   */

  /**
   * Model Landing
   */

  export type AggregateLanding = {
    _count: LandingCountAggregateOutputType | null
    _avg: LandingAvgAggregateOutputType | null
    _sum: LandingSumAggregateOutputType | null
    _min: LandingMinAggregateOutputType | null
    _max: LandingMaxAggregateOutputType | null
  }

  export type LandingAvgAggregateOutputType = {
    id: number | null
  }

  export type LandingSumAggregateOutputType = {
    id: number | null
  }

  export type LandingMinAggregateOutputType = {
    id: number | null
    header: string | null
    headerDescription: string | null
    tipSectionTitle: string | null
    tipSectionDescription: string | null
  }

  export type LandingMaxAggregateOutputType = {
    id: number | null
    header: string | null
    headerDescription: string | null
    tipSectionTitle: string | null
    tipSectionDescription: string | null
  }

  export type LandingCountAggregateOutputType = {
    id: number
    header: number
    headerDescription: number
    tipSectionTitle: number
    tipSectionDescription: number
    goalSection: number
    featuresSection: number
    citiesSection: number
    sliderSection: number
    operatingEntitiesSection: number
    _all: number
  }


  export type LandingAvgAggregateInputType = {
    id?: true
  }

  export type LandingSumAggregateInputType = {
    id?: true
  }

  export type LandingMinAggregateInputType = {
    id?: true
    header?: true
    headerDescription?: true
    tipSectionTitle?: true
    tipSectionDescription?: true
  }

  export type LandingMaxAggregateInputType = {
    id?: true
    header?: true
    headerDescription?: true
    tipSectionTitle?: true
    tipSectionDescription?: true
  }

  export type LandingCountAggregateInputType = {
    id?: true
    header?: true
    headerDescription?: true
    tipSectionTitle?: true
    tipSectionDescription?: true
    goalSection?: true
    featuresSection?: true
    citiesSection?: true
    sliderSection?: true
    operatingEntitiesSection?: true
    _all?: true
  }

  export type LandingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landing to aggregate.
     */
    where?: LandingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landings to fetch.
     */
    orderBy?: LandingOrderByWithRelationInput | LandingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LandingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Landings
    **/
    _count?: true | LandingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LandingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LandingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LandingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LandingMaxAggregateInputType
  }

  export type GetLandingAggregateType<T extends LandingAggregateArgs> = {
        [P in keyof T & keyof AggregateLanding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanding[P]>
      : GetScalarType<T[P], AggregateLanding[P]>
  }




  export type LandingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LandingWhereInput
    orderBy?: LandingOrderByWithAggregationInput | LandingOrderByWithAggregationInput[]
    by: LandingScalarFieldEnum[] | LandingScalarFieldEnum
    having?: LandingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LandingCountAggregateInputType | true
    _avg?: LandingAvgAggregateInputType
    _sum?: LandingSumAggregateInputType
    _min?: LandingMinAggregateInputType
    _max?: LandingMaxAggregateInputType
  }

  export type LandingGroupByOutputType = {
    id: number
    header: string
    headerDescription: string
    tipSectionTitle: string
    tipSectionDescription: string
    goalSection: JsonValue
    featuresSection: JsonValue
    citiesSection: JsonValue
    sliderSection: JsonValue
    operatingEntitiesSection: JsonValue
    _count: LandingCountAggregateOutputType | null
    _avg: LandingAvgAggregateOutputType | null
    _sum: LandingSumAggregateOutputType | null
    _min: LandingMinAggregateOutputType | null
    _max: LandingMaxAggregateOutputType | null
  }

  type GetLandingGroupByPayload<T extends LandingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LandingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LandingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LandingGroupByOutputType[P]>
            : GetScalarType<T[P], LandingGroupByOutputType[P]>
        }
      >
    >


  export type LandingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    header?: boolean
    headerDescription?: boolean
    tipSectionTitle?: boolean
    tipSectionDescription?: boolean
    goalSection?: boolean
    featuresSection?: boolean
    citiesSection?: boolean
    sliderSection?: boolean
    operatingEntitiesSection?: boolean
  }, ExtArgs["result"]["landing"]>

  export type LandingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    header?: boolean
    headerDescription?: boolean
    tipSectionTitle?: boolean
    tipSectionDescription?: boolean
    goalSection?: boolean
    featuresSection?: boolean
    citiesSection?: boolean
    sliderSection?: boolean
    operatingEntitiesSection?: boolean
  }, ExtArgs["result"]["landing"]>

  export type LandingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    header?: boolean
    headerDescription?: boolean
    tipSectionTitle?: boolean
    tipSectionDescription?: boolean
    goalSection?: boolean
    featuresSection?: boolean
    citiesSection?: boolean
    sliderSection?: boolean
    operatingEntitiesSection?: boolean
  }, ExtArgs["result"]["landing"]>

  export type LandingSelectScalar = {
    id?: boolean
    header?: boolean
    headerDescription?: boolean
    tipSectionTitle?: boolean
    tipSectionDescription?: boolean
    goalSection?: boolean
    featuresSection?: boolean
    citiesSection?: boolean
    sliderSection?: boolean
    operatingEntitiesSection?: boolean
  }

  export type LandingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "header" | "headerDescription" | "tipSectionTitle" | "tipSectionDescription" | "goalSection" | "featuresSection" | "citiesSection" | "sliderSection" | "operatingEntitiesSection", ExtArgs["result"]["landing"]>

  export type $LandingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Landing"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      header: string
      headerDescription: string
      tipSectionTitle: string
      tipSectionDescription: string
      goalSection: Prisma.JsonValue
      featuresSection: Prisma.JsonValue
      citiesSection: Prisma.JsonValue
      sliderSection: Prisma.JsonValue
      operatingEntitiesSection: Prisma.JsonValue
    }, ExtArgs["result"]["landing"]>
    composites: {}
  }

  type LandingGetPayload<S extends boolean | null | undefined | LandingDefaultArgs> = $Result.GetResult<Prisma.$LandingPayload, S>

  type LandingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LandingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LandingCountAggregateInputType | true
    }

  export interface LandingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Landing'], meta: { name: 'Landing' } }
    /**
     * Find zero or one Landing that matches the filter.
     * @param {LandingFindUniqueArgs} args - Arguments to find a Landing
     * @example
     * // Get one Landing
     * const landing = await prisma.landing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LandingFindUniqueArgs>(args: SelectSubset<T, LandingFindUniqueArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Landing that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LandingFindUniqueOrThrowArgs} args - Arguments to find a Landing
     * @example
     * // Get one Landing
     * const landing = await prisma.landing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LandingFindUniqueOrThrowArgs>(args: SelectSubset<T, LandingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingFindFirstArgs} args - Arguments to find a Landing
     * @example
     * // Get one Landing
     * const landing = await prisma.landing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LandingFindFirstArgs>(args?: SelectSubset<T, LandingFindFirstArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Landing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingFindFirstOrThrowArgs} args - Arguments to find a Landing
     * @example
     * // Get one Landing
     * const landing = await prisma.landing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LandingFindFirstOrThrowArgs>(args?: SelectSubset<T, LandingFindFirstOrThrowArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Landings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Landings
     * const landings = await prisma.landing.findMany()
     * 
     * // Get first 10 Landings
     * const landings = await prisma.landing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const landingWithIdOnly = await prisma.landing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LandingFindManyArgs>(args?: SelectSubset<T, LandingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Landing.
     * @param {LandingCreateArgs} args - Arguments to create a Landing.
     * @example
     * // Create one Landing
     * const Landing = await prisma.landing.create({
     *   data: {
     *     // ... data to create a Landing
     *   }
     * })
     * 
     */
    create<T extends LandingCreateArgs>(args: SelectSubset<T, LandingCreateArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Landings.
     * @param {LandingCreateManyArgs} args - Arguments to create many Landings.
     * @example
     * // Create many Landings
     * const landing = await prisma.landing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LandingCreateManyArgs>(args?: SelectSubset<T, LandingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Landings and returns the data saved in the database.
     * @param {LandingCreateManyAndReturnArgs} args - Arguments to create many Landings.
     * @example
     * // Create many Landings
     * const landing = await prisma.landing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Landings and only return the `id`
     * const landingWithIdOnly = await prisma.landing.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LandingCreateManyAndReturnArgs>(args?: SelectSubset<T, LandingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Landing.
     * @param {LandingDeleteArgs} args - Arguments to delete one Landing.
     * @example
     * // Delete one Landing
     * const Landing = await prisma.landing.delete({
     *   where: {
     *     // ... filter to delete one Landing
     *   }
     * })
     * 
     */
    delete<T extends LandingDeleteArgs>(args: SelectSubset<T, LandingDeleteArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Landing.
     * @param {LandingUpdateArgs} args - Arguments to update one Landing.
     * @example
     * // Update one Landing
     * const landing = await prisma.landing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LandingUpdateArgs>(args: SelectSubset<T, LandingUpdateArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Landings.
     * @param {LandingDeleteManyArgs} args - Arguments to filter Landings to delete.
     * @example
     * // Delete a few Landings
     * const { count } = await prisma.landing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LandingDeleteManyArgs>(args?: SelectSubset<T, LandingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Landings
     * const landing = await prisma.landing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LandingUpdateManyArgs>(args: SelectSubset<T, LandingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Landings and returns the data updated in the database.
     * @param {LandingUpdateManyAndReturnArgs} args - Arguments to update many Landings.
     * @example
     * // Update many Landings
     * const landing = await prisma.landing.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Landings and only return the `id`
     * const landingWithIdOnly = await prisma.landing.updateManyAndReturn({
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
    updateManyAndReturn<T extends LandingUpdateManyAndReturnArgs>(args: SelectSubset<T, LandingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Landing.
     * @param {LandingUpsertArgs} args - Arguments to update or create a Landing.
     * @example
     * // Update or create a Landing
     * const landing = await prisma.landing.upsert({
     *   create: {
     *     // ... data to create a Landing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Landing we want to update
     *   }
     * })
     */
    upsert<T extends LandingUpsertArgs>(args: SelectSubset<T, LandingUpsertArgs<ExtArgs>>): Prisma__LandingClient<$Result.GetResult<Prisma.$LandingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Landings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingCountArgs} args - Arguments to filter Landings to count.
     * @example
     * // Count the number of Landings
     * const count = await prisma.landing.count({
     *   where: {
     *     // ... the filter for the Landings we want to count
     *   }
     * })
    **/
    count<T extends LandingCountArgs>(
      args?: Subset<T, LandingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LandingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Landing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LandingAggregateArgs>(args: Subset<T, LandingAggregateArgs>): Prisma.PrismaPromise<GetLandingAggregateType<T>>

    /**
     * Group by Landing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LandingGroupByArgs} args - Group by arguments.
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
      T extends LandingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LandingGroupByArgs['orderBy'] }
        : { orderBy?: LandingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LandingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLandingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Landing model
   */
  readonly fields: LandingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Landing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LandingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Landing model
   */
  interface LandingFieldRefs {
    readonly id: FieldRef<"Landing", 'Int'>
    readonly header: FieldRef<"Landing", 'String'>
    readonly headerDescription: FieldRef<"Landing", 'String'>
    readonly tipSectionTitle: FieldRef<"Landing", 'String'>
    readonly tipSectionDescription: FieldRef<"Landing", 'String'>
    readonly goalSection: FieldRef<"Landing", 'Json'>
    readonly featuresSection: FieldRef<"Landing", 'Json'>
    readonly citiesSection: FieldRef<"Landing", 'Json'>
    readonly sliderSection: FieldRef<"Landing", 'Json'>
    readonly operatingEntitiesSection: FieldRef<"Landing", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Landing findUnique
   */
  export type LandingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * Filter, which Landing to fetch.
     */
    where: LandingWhereUniqueInput
  }

  /**
   * Landing findUniqueOrThrow
   */
  export type LandingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * Filter, which Landing to fetch.
     */
    where: LandingWhereUniqueInput
  }

  /**
   * Landing findFirst
   */
  export type LandingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * Filter, which Landing to fetch.
     */
    where?: LandingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landings to fetch.
     */
    orderBy?: LandingOrderByWithRelationInput | LandingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landings.
     */
    cursor?: LandingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landings.
     */
    distinct?: LandingScalarFieldEnum | LandingScalarFieldEnum[]
  }

  /**
   * Landing findFirstOrThrow
   */
  export type LandingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * Filter, which Landing to fetch.
     */
    where?: LandingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landings to fetch.
     */
    orderBy?: LandingOrderByWithRelationInput | LandingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Landings.
     */
    cursor?: LandingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Landings.
     */
    distinct?: LandingScalarFieldEnum | LandingScalarFieldEnum[]
  }

  /**
   * Landing findMany
   */
  export type LandingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * Filter, which Landings to fetch.
     */
    where?: LandingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Landings to fetch.
     */
    orderBy?: LandingOrderByWithRelationInput | LandingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Landings.
     */
    cursor?: LandingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Landings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Landings.
     */
    skip?: number
    distinct?: LandingScalarFieldEnum | LandingScalarFieldEnum[]
  }

  /**
   * Landing create
   */
  export type LandingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * The data needed to create a Landing.
     */
    data: XOR<LandingCreateInput, LandingUncheckedCreateInput>
  }

  /**
   * Landing createMany
   */
  export type LandingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Landings.
     */
    data: LandingCreateManyInput | LandingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landing createManyAndReturn
   */
  export type LandingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * The data used to create many Landings.
     */
    data: LandingCreateManyInput | LandingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Landing update
   */
  export type LandingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * The data needed to update a Landing.
     */
    data: XOR<LandingUpdateInput, LandingUncheckedUpdateInput>
    /**
     * Choose, which Landing to update.
     */
    where: LandingWhereUniqueInput
  }

  /**
   * Landing updateMany
   */
  export type LandingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Landings.
     */
    data: XOR<LandingUpdateManyMutationInput, LandingUncheckedUpdateManyInput>
    /**
     * Filter which Landings to update
     */
    where?: LandingWhereInput
    /**
     * Limit how many Landings to update.
     */
    limit?: number
  }

  /**
   * Landing updateManyAndReturn
   */
  export type LandingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * The data used to update Landings.
     */
    data: XOR<LandingUpdateManyMutationInput, LandingUncheckedUpdateManyInput>
    /**
     * Filter which Landings to update
     */
    where?: LandingWhereInput
    /**
     * Limit how many Landings to update.
     */
    limit?: number
  }

  /**
   * Landing upsert
   */
  export type LandingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * The filter to search for the Landing to update in case it exists.
     */
    where: LandingWhereUniqueInput
    /**
     * In case the Landing found by the `where` argument doesn't exist, create a new Landing with this data.
     */
    create: XOR<LandingCreateInput, LandingUncheckedCreateInput>
    /**
     * In case the Landing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LandingUpdateInput, LandingUncheckedUpdateInput>
  }

  /**
   * Landing delete
   */
  export type LandingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
    /**
     * Filter which Landing to delete.
     */
    where: LandingWhereUniqueInput
  }

  /**
   * Landing deleteMany
   */
  export type LandingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Landings to delete
     */
    where?: LandingWhereInput
    /**
     * Limit how many Landings to delete.
     */
    limit?: number
  }

  /**
   * Landing without action
   */
  export type LandingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Landing
     */
    select?: LandingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Landing
     */
    omit?: LandingOmit<ExtArgs> | null
  }


  /**
   * Model Registered
   */

  export type AggregateRegistered = {
    _count: RegisteredCountAggregateOutputType | null
    _avg: RegisteredAvgAggregateOutputType | null
    _sum: RegisteredSumAggregateOutputType | null
    _min: RegisteredMinAggregateOutputType | null
    _max: RegisteredMaxAggregateOutputType | null
  }

  export type RegisteredAvgAggregateOutputType = {
    id: number | null
  }

  export type RegisteredSumAggregateOutputType = {
    id: number | null
  }

  export type RegisteredMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    city: string | null
  }

  export type RegisteredMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    city: string | null
  }

  export type RegisteredCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    city: number
    _all: number
  }


  export type RegisteredAvgAggregateInputType = {
    id?: true
  }

  export type RegisteredSumAggregateInputType = {
    id?: true
  }

  export type RegisteredMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    city?: true
  }

  export type RegisteredMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    city?: true
  }

  export type RegisteredCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    city?: true
    _all?: true
  }

  export type RegisteredAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registered to aggregate.
     */
    where?: RegisteredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registereds to fetch.
     */
    orderBy?: RegisteredOrderByWithRelationInput | RegisteredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegisteredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registereds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Registereds
    **/
    _count?: true | RegisteredCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RegisteredAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RegisteredSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegisteredMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegisteredMaxAggregateInputType
  }

  export type GetRegisteredAggregateType<T extends RegisteredAggregateArgs> = {
        [P in keyof T & keyof AggregateRegistered]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegistered[P]>
      : GetScalarType<T[P], AggregateRegistered[P]>
  }




  export type RegisteredGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegisteredWhereInput
    orderBy?: RegisteredOrderByWithAggregationInput | RegisteredOrderByWithAggregationInput[]
    by: RegisteredScalarFieldEnum[] | RegisteredScalarFieldEnum
    having?: RegisteredScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegisteredCountAggregateInputType | true
    _avg?: RegisteredAvgAggregateInputType
    _sum?: RegisteredSumAggregateInputType
    _min?: RegisteredMinAggregateInputType
    _max?: RegisteredMaxAggregateInputType
  }

  export type RegisteredGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    phone: string
    city: string
    _count: RegisteredCountAggregateOutputType | null
    _avg: RegisteredAvgAggregateOutputType | null
    _sum: RegisteredSumAggregateOutputType | null
    _min: RegisteredMinAggregateOutputType | null
    _max: RegisteredMaxAggregateOutputType | null
  }

  type GetRegisteredGroupByPayload<T extends RegisteredGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegisteredGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegisteredGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegisteredGroupByOutputType[P]>
            : GetScalarType<T[P], RegisteredGroupByOutputType[P]>
        }
      >
    >


  export type RegisteredSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
  }, ExtArgs["result"]["registered"]>

  export type RegisteredSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
  }, ExtArgs["result"]["registered"]>

  export type RegisteredSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
  }, ExtArgs["result"]["registered"]>

  export type RegisteredSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    city?: boolean
  }

  export type RegisteredOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "city", ExtArgs["result"]["registered"]>

  export type $RegisteredPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Registered"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      phone: string
      city: string
    }, ExtArgs["result"]["registered"]>
    composites: {}
  }

  type RegisteredGetPayload<S extends boolean | null | undefined | RegisteredDefaultArgs> = $Result.GetResult<Prisma.$RegisteredPayload, S>

  type RegisteredCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegisteredFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegisteredCountAggregateInputType | true
    }

  export interface RegisteredDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Registered'], meta: { name: 'Registered' } }
    /**
     * Find zero or one Registered that matches the filter.
     * @param {RegisteredFindUniqueArgs} args - Arguments to find a Registered
     * @example
     * // Get one Registered
     * const registered = await prisma.registered.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegisteredFindUniqueArgs>(args: SelectSubset<T, RegisteredFindUniqueArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Registered that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegisteredFindUniqueOrThrowArgs} args - Arguments to find a Registered
     * @example
     * // Get one Registered
     * const registered = await prisma.registered.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegisteredFindUniqueOrThrowArgs>(args: SelectSubset<T, RegisteredFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registered that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredFindFirstArgs} args - Arguments to find a Registered
     * @example
     * // Get one Registered
     * const registered = await prisma.registered.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegisteredFindFirstArgs>(args?: SelectSubset<T, RegisteredFindFirstArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Registered that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredFindFirstOrThrowArgs} args - Arguments to find a Registered
     * @example
     * // Get one Registered
     * const registered = await prisma.registered.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegisteredFindFirstOrThrowArgs>(args?: SelectSubset<T, RegisteredFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Registereds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Registereds
     * const registereds = await prisma.registered.findMany()
     * 
     * // Get first 10 Registereds
     * const registereds = await prisma.registered.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const registeredWithIdOnly = await prisma.registered.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegisteredFindManyArgs>(args?: SelectSubset<T, RegisteredFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Registered.
     * @param {RegisteredCreateArgs} args - Arguments to create a Registered.
     * @example
     * // Create one Registered
     * const Registered = await prisma.registered.create({
     *   data: {
     *     // ... data to create a Registered
     *   }
     * })
     * 
     */
    create<T extends RegisteredCreateArgs>(args: SelectSubset<T, RegisteredCreateArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Registereds.
     * @param {RegisteredCreateManyArgs} args - Arguments to create many Registereds.
     * @example
     * // Create many Registereds
     * const registered = await prisma.registered.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegisteredCreateManyArgs>(args?: SelectSubset<T, RegisteredCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Registereds and returns the data saved in the database.
     * @param {RegisteredCreateManyAndReturnArgs} args - Arguments to create many Registereds.
     * @example
     * // Create many Registereds
     * const registered = await prisma.registered.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Registereds and only return the `id`
     * const registeredWithIdOnly = await prisma.registered.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegisteredCreateManyAndReturnArgs>(args?: SelectSubset<T, RegisteredCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Registered.
     * @param {RegisteredDeleteArgs} args - Arguments to delete one Registered.
     * @example
     * // Delete one Registered
     * const Registered = await prisma.registered.delete({
     *   where: {
     *     // ... filter to delete one Registered
     *   }
     * })
     * 
     */
    delete<T extends RegisteredDeleteArgs>(args: SelectSubset<T, RegisteredDeleteArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Registered.
     * @param {RegisteredUpdateArgs} args - Arguments to update one Registered.
     * @example
     * // Update one Registered
     * const registered = await prisma.registered.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegisteredUpdateArgs>(args: SelectSubset<T, RegisteredUpdateArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Registereds.
     * @param {RegisteredDeleteManyArgs} args - Arguments to filter Registereds to delete.
     * @example
     * // Delete a few Registereds
     * const { count } = await prisma.registered.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegisteredDeleteManyArgs>(args?: SelectSubset<T, RegisteredDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registereds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Registereds
     * const registered = await prisma.registered.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegisteredUpdateManyArgs>(args: SelectSubset<T, RegisteredUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Registereds and returns the data updated in the database.
     * @param {RegisteredUpdateManyAndReturnArgs} args - Arguments to update many Registereds.
     * @example
     * // Update many Registereds
     * const registered = await prisma.registered.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Registereds and only return the `id`
     * const registeredWithIdOnly = await prisma.registered.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegisteredUpdateManyAndReturnArgs>(args: SelectSubset<T, RegisteredUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Registered.
     * @param {RegisteredUpsertArgs} args - Arguments to update or create a Registered.
     * @example
     * // Update or create a Registered
     * const registered = await prisma.registered.upsert({
     *   create: {
     *     // ... data to create a Registered
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Registered we want to update
     *   }
     * })
     */
    upsert<T extends RegisteredUpsertArgs>(args: SelectSubset<T, RegisteredUpsertArgs<ExtArgs>>): Prisma__RegisteredClient<$Result.GetResult<Prisma.$RegisteredPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Registereds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredCountArgs} args - Arguments to filter Registereds to count.
     * @example
     * // Count the number of Registereds
     * const count = await prisma.registered.count({
     *   where: {
     *     // ... the filter for the Registereds we want to count
     *   }
     * })
    **/
    count<T extends RegisteredCountArgs>(
      args?: Subset<T, RegisteredCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegisteredCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Registered.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegisteredAggregateArgs>(args: Subset<T, RegisteredAggregateArgs>): Prisma.PrismaPromise<GetRegisteredAggregateType<T>>

    /**
     * Group by Registered.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegisteredGroupByArgs} args - Group by arguments.
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
      T extends RegisteredGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegisteredGroupByArgs['orderBy'] }
        : { orderBy?: RegisteredGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegisteredGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegisteredGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Registered model
   */
  readonly fields: RegisteredFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Registered.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegisteredClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Registered model
   */
  interface RegisteredFieldRefs {
    readonly id: FieldRef<"Registered", 'Int'>
    readonly firstName: FieldRef<"Registered", 'String'>
    readonly lastName: FieldRef<"Registered", 'String'>
    readonly email: FieldRef<"Registered", 'String'>
    readonly phone: FieldRef<"Registered", 'String'>
    readonly city: FieldRef<"Registered", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Registered findUnique
   */
  export type RegisteredFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * Filter, which Registered to fetch.
     */
    where: RegisteredWhereUniqueInput
  }

  /**
   * Registered findUniqueOrThrow
   */
  export type RegisteredFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * Filter, which Registered to fetch.
     */
    where: RegisteredWhereUniqueInput
  }

  /**
   * Registered findFirst
   */
  export type RegisteredFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * Filter, which Registered to fetch.
     */
    where?: RegisteredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registereds to fetch.
     */
    orderBy?: RegisteredOrderByWithRelationInput | RegisteredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registereds.
     */
    cursor?: RegisteredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registereds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registereds.
     */
    distinct?: RegisteredScalarFieldEnum | RegisteredScalarFieldEnum[]
  }

  /**
   * Registered findFirstOrThrow
   */
  export type RegisteredFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * Filter, which Registered to fetch.
     */
    where?: RegisteredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registereds to fetch.
     */
    orderBy?: RegisteredOrderByWithRelationInput | RegisteredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Registereds.
     */
    cursor?: RegisteredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registereds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Registereds.
     */
    distinct?: RegisteredScalarFieldEnum | RegisteredScalarFieldEnum[]
  }

  /**
   * Registered findMany
   */
  export type RegisteredFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * Filter, which Registereds to fetch.
     */
    where?: RegisteredWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Registereds to fetch.
     */
    orderBy?: RegisteredOrderByWithRelationInput | RegisteredOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Registereds.
     */
    cursor?: RegisteredWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Registereds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Registereds.
     */
    skip?: number
    distinct?: RegisteredScalarFieldEnum | RegisteredScalarFieldEnum[]
  }

  /**
   * Registered create
   */
  export type RegisteredCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * The data needed to create a Registered.
     */
    data: XOR<RegisteredCreateInput, RegisteredUncheckedCreateInput>
  }

  /**
   * Registered createMany
   */
  export type RegisteredCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Registereds.
     */
    data: RegisteredCreateManyInput | RegisteredCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registered createManyAndReturn
   */
  export type RegisteredCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * The data used to create many Registereds.
     */
    data: RegisteredCreateManyInput | RegisteredCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Registered update
   */
  export type RegisteredUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * The data needed to update a Registered.
     */
    data: XOR<RegisteredUpdateInput, RegisteredUncheckedUpdateInput>
    /**
     * Choose, which Registered to update.
     */
    where: RegisteredWhereUniqueInput
  }

  /**
   * Registered updateMany
   */
  export type RegisteredUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Registereds.
     */
    data: XOR<RegisteredUpdateManyMutationInput, RegisteredUncheckedUpdateManyInput>
    /**
     * Filter which Registereds to update
     */
    where?: RegisteredWhereInput
    /**
     * Limit how many Registereds to update.
     */
    limit?: number
  }

  /**
   * Registered updateManyAndReturn
   */
  export type RegisteredUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * The data used to update Registereds.
     */
    data: XOR<RegisteredUpdateManyMutationInput, RegisteredUncheckedUpdateManyInput>
    /**
     * Filter which Registereds to update
     */
    where?: RegisteredWhereInput
    /**
     * Limit how many Registereds to update.
     */
    limit?: number
  }

  /**
   * Registered upsert
   */
  export type RegisteredUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * The filter to search for the Registered to update in case it exists.
     */
    where: RegisteredWhereUniqueInput
    /**
     * In case the Registered found by the `where` argument doesn't exist, create a new Registered with this data.
     */
    create: XOR<RegisteredCreateInput, RegisteredUncheckedCreateInput>
    /**
     * In case the Registered was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegisteredUpdateInput, RegisteredUncheckedUpdateInput>
  }

  /**
   * Registered delete
   */
  export type RegisteredDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
    /**
     * Filter which Registered to delete.
     */
    where: RegisteredWhereUniqueInput
  }

  /**
   * Registered deleteMany
   */
  export type RegisteredDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Registereds to delete
     */
    where?: RegisteredWhereInput
    /**
     * Limit how many Registereds to delete.
     */
    limit?: number
  }

  /**
   * Registered without action
   */
  export type RegisteredDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Registered
     */
    select?: RegisteredSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Registered
     */
    omit?: RegisteredOmit<ExtArgs> | null
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


  export const LandingScalarFieldEnum: {
    id: 'id',
    header: 'header',
    headerDescription: 'headerDescription',
    tipSectionTitle: 'tipSectionTitle',
    tipSectionDescription: 'tipSectionDescription',
    goalSection: 'goalSection',
    featuresSection: 'featuresSection',
    citiesSection: 'citiesSection',
    sliderSection: 'sliderSection',
    operatingEntitiesSection: 'operatingEntitiesSection'
  };

  export type LandingScalarFieldEnum = (typeof LandingScalarFieldEnum)[keyof typeof LandingScalarFieldEnum]


  export const RegisteredScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    city: 'city'
  };

  export type RegisteredScalarFieldEnum = (typeof RegisteredScalarFieldEnum)[keyof typeof RegisteredScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type LandingWhereInput = {
    AND?: LandingWhereInput | LandingWhereInput[]
    OR?: LandingWhereInput[]
    NOT?: LandingWhereInput | LandingWhereInput[]
    id?: IntFilter<"Landing"> | number
    header?: StringFilter<"Landing"> | string
    headerDescription?: StringFilter<"Landing"> | string
    tipSectionTitle?: StringFilter<"Landing"> | string
    tipSectionDescription?: StringFilter<"Landing"> | string
    goalSection?: JsonFilter<"Landing">
    featuresSection?: JsonFilter<"Landing">
    citiesSection?: JsonFilter<"Landing">
    sliderSection?: JsonFilter<"Landing">
    operatingEntitiesSection?: JsonFilter<"Landing">
  }

  export type LandingOrderByWithRelationInput = {
    id?: SortOrder
    header?: SortOrder
    headerDescription?: SortOrder
    tipSectionTitle?: SortOrder
    tipSectionDescription?: SortOrder
    goalSection?: SortOrder
    featuresSection?: SortOrder
    citiesSection?: SortOrder
    sliderSection?: SortOrder
    operatingEntitiesSection?: SortOrder
  }

  export type LandingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LandingWhereInput | LandingWhereInput[]
    OR?: LandingWhereInput[]
    NOT?: LandingWhereInput | LandingWhereInput[]
    header?: StringFilter<"Landing"> | string
    headerDescription?: StringFilter<"Landing"> | string
    tipSectionTitle?: StringFilter<"Landing"> | string
    tipSectionDescription?: StringFilter<"Landing"> | string
    goalSection?: JsonFilter<"Landing">
    featuresSection?: JsonFilter<"Landing">
    citiesSection?: JsonFilter<"Landing">
    sliderSection?: JsonFilter<"Landing">
    operatingEntitiesSection?: JsonFilter<"Landing">
  }, "id" | "id">

  export type LandingOrderByWithAggregationInput = {
    id?: SortOrder
    header?: SortOrder
    headerDescription?: SortOrder
    tipSectionTitle?: SortOrder
    tipSectionDescription?: SortOrder
    goalSection?: SortOrder
    featuresSection?: SortOrder
    citiesSection?: SortOrder
    sliderSection?: SortOrder
    operatingEntitiesSection?: SortOrder
    _count?: LandingCountOrderByAggregateInput
    _avg?: LandingAvgOrderByAggregateInput
    _max?: LandingMaxOrderByAggregateInput
    _min?: LandingMinOrderByAggregateInput
    _sum?: LandingSumOrderByAggregateInput
  }

  export type LandingScalarWhereWithAggregatesInput = {
    AND?: LandingScalarWhereWithAggregatesInput | LandingScalarWhereWithAggregatesInput[]
    OR?: LandingScalarWhereWithAggregatesInput[]
    NOT?: LandingScalarWhereWithAggregatesInput | LandingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Landing"> | number
    header?: StringWithAggregatesFilter<"Landing"> | string
    headerDescription?: StringWithAggregatesFilter<"Landing"> | string
    tipSectionTitle?: StringWithAggregatesFilter<"Landing"> | string
    tipSectionDescription?: StringWithAggregatesFilter<"Landing"> | string
    goalSection?: JsonWithAggregatesFilter<"Landing">
    featuresSection?: JsonWithAggregatesFilter<"Landing">
    citiesSection?: JsonWithAggregatesFilter<"Landing">
    sliderSection?: JsonWithAggregatesFilter<"Landing">
    operatingEntitiesSection?: JsonWithAggregatesFilter<"Landing">
  }

  export type RegisteredWhereInput = {
    AND?: RegisteredWhereInput | RegisteredWhereInput[]
    OR?: RegisteredWhereInput[]
    NOT?: RegisteredWhereInput | RegisteredWhereInput[]
    id?: IntFilter<"Registered"> | number
    firstName?: StringFilter<"Registered"> | string
    lastName?: StringFilter<"Registered"> | string
    email?: StringFilter<"Registered"> | string
    phone?: StringFilter<"Registered"> | string
    city?: StringFilter<"Registered"> | string
  }

  export type RegisteredOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
  }

  export type RegisteredWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RegisteredWhereInput | RegisteredWhereInput[]
    OR?: RegisteredWhereInput[]
    NOT?: RegisteredWhereInput | RegisteredWhereInput[]
    firstName?: StringFilter<"Registered"> | string
    lastName?: StringFilter<"Registered"> | string
    email?: StringFilter<"Registered"> | string
    phone?: StringFilter<"Registered"> | string
    city?: StringFilter<"Registered"> | string
  }, "id">

  export type RegisteredOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
    _count?: RegisteredCountOrderByAggregateInput
    _avg?: RegisteredAvgOrderByAggregateInput
    _max?: RegisteredMaxOrderByAggregateInput
    _min?: RegisteredMinOrderByAggregateInput
    _sum?: RegisteredSumOrderByAggregateInput
  }

  export type RegisteredScalarWhereWithAggregatesInput = {
    AND?: RegisteredScalarWhereWithAggregatesInput | RegisteredScalarWhereWithAggregatesInput[]
    OR?: RegisteredScalarWhereWithAggregatesInput[]
    NOT?: RegisteredScalarWhereWithAggregatesInput | RegisteredScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Registered"> | number
    firstName?: StringWithAggregatesFilter<"Registered"> | string
    lastName?: StringWithAggregatesFilter<"Registered"> | string
    email?: StringWithAggregatesFilter<"Registered"> | string
    phone?: StringWithAggregatesFilter<"Registered"> | string
    city?: StringWithAggregatesFilter<"Registered"> | string
  }

  export type LandingCreateInput = {
    id: number
    header: string
    headerDescription: string
    tipSectionTitle: string
    tipSectionDescription: string
    goalSection: JsonNullValueInput | InputJsonValue
    featuresSection: JsonNullValueInput | InputJsonValue
    citiesSection: JsonNullValueInput | InputJsonValue
    sliderSection: JsonNullValueInput | InputJsonValue
    operatingEntitiesSection: JsonNullValueInput | InputJsonValue
  }

  export type LandingUncheckedCreateInput = {
    id: number
    header: string
    headerDescription: string
    tipSectionTitle: string
    tipSectionDescription: string
    goalSection: JsonNullValueInput | InputJsonValue
    featuresSection: JsonNullValueInput | InputJsonValue
    citiesSection: JsonNullValueInput | InputJsonValue
    sliderSection: JsonNullValueInput | InputJsonValue
    operatingEntitiesSection: JsonNullValueInput | InputJsonValue
  }

  export type LandingUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    headerDescription?: StringFieldUpdateOperationsInput | string
    tipSectionTitle?: StringFieldUpdateOperationsInput | string
    tipSectionDescription?: StringFieldUpdateOperationsInput | string
    goalSection?: JsonNullValueInput | InputJsonValue
    featuresSection?: JsonNullValueInput | InputJsonValue
    citiesSection?: JsonNullValueInput | InputJsonValue
    sliderSection?: JsonNullValueInput | InputJsonValue
    operatingEntitiesSection?: JsonNullValueInput | InputJsonValue
  }

  export type LandingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    headerDescription?: StringFieldUpdateOperationsInput | string
    tipSectionTitle?: StringFieldUpdateOperationsInput | string
    tipSectionDescription?: StringFieldUpdateOperationsInput | string
    goalSection?: JsonNullValueInput | InputJsonValue
    featuresSection?: JsonNullValueInput | InputJsonValue
    citiesSection?: JsonNullValueInput | InputJsonValue
    sliderSection?: JsonNullValueInput | InputJsonValue
    operatingEntitiesSection?: JsonNullValueInput | InputJsonValue
  }

  export type LandingCreateManyInput = {
    id: number
    header: string
    headerDescription: string
    tipSectionTitle: string
    tipSectionDescription: string
    goalSection: JsonNullValueInput | InputJsonValue
    featuresSection: JsonNullValueInput | InputJsonValue
    citiesSection: JsonNullValueInput | InputJsonValue
    sliderSection: JsonNullValueInput | InputJsonValue
    operatingEntitiesSection: JsonNullValueInput | InputJsonValue
  }

  export type LandingUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    headerDescription?: StringFieldUpdateOperationsInput | string
    tipSectionTitle?: StringFieldUpdateOperationsInput | string
    tipSectionDescription?: StringFieldUpdateOperationsInput | string
    goalSection?: JsonNullValueInput | InputJsonValue
    featuresSection?: JsonNullValueInput | InputJsonValue
    citiesSection?: JsonNullValueInput | InputJsonValue
    sliderSection?: JsonNullValueInput | InputJsonValue
    operatingEntitiesSection?: JsonNullValueInput | InputJsonValue
  }

  export type LandingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    header?: StringFieldUpdateOperationsInput | string
    headerDescription?: StringFieldUpdateOperationsInput | string
    tipSectionTitle?: StringFieldUpdateOperationsInput | string
    tipSectionDescription?: StringFieldUpdateOperationsInput | string
    goalSection?: JsonNullValueInput | InputJsonValue
    featuresSection?: JsonNullValueInput | InputJsonValue
    citiesSection?: JsonNullValueInput | InputJsonValue
    sliderSection?: JsonNullValueInput | InputJsonValue
    operatingEntitiesSection?: JsonNullValueInput | InputJsonValue
  }

  export type RegisteredCreateInput = {
    firstName: string
    lastName: string
    email: string
    phone: string
    city: string
  }

  export type RegisteredUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    city: string
  }

  export type RegisteredUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type RegisteredUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type RegisteredCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    phone: string
    city: string
  }

  export type RegisteredUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
  }

  export type RegisteredUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type LandingCountOrderByAggregateInput = {
    id?: SortOrder
    header?: SortOrder
    headerDescription?: SortOrder
    tipSectionTitle?: SortOrder
    tipSectionDescription?: SortOrder
    goalSection?: SortOrder
    featuresSection?: SortOrder
    citiesSection?: SortOrder
    sliderSection?: SortOrder
    operatingEntitiesSection?: SortOrder
  }

  export type LandingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LandingMaxOrderByAggregateInput = {
    id?: SortOrder
    header?: SortOrder
    headerDescription?: SortOrder
    tipSectionTitle?: SortOrder
    tipSectionDescription?: SortOrder
  }

  export type LandingMinOrderByAggregateInput = {
    id?: SortOrder
    header?: SortOrder
    headerDescription?: SortOrder
    tipSectionTitle?: SortOrder
    tipSectionDescription?: SortOrder
  }

  export type LandingSumOrderByAggregateInput = {
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
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type RegisteredCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
  }

  export type RegisteredAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RegisteredMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
  }

  export type RegisteredMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    city?: SortOrder
  }

  export type RegisteredSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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