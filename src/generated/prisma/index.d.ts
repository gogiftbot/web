
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
 * Model referral
 * 
 */
export type referral = $Result.DefaultSelection<Prisma.$referralPayload>
/**
 * Model account
 * 
 */
export type account = $Result.DefaultSelection<Prisma.$accountPayload>
/**
 * Model nft
 * 
 */
export type nft = $Result.DefaultSelection<Prisma.$nftPayload>
/**
 * Model account_nft
 * 
 */
export type account_nft = $Result.DefaultSelection<Prisma.$account_nftPayload>
/**
 * Model account_nft_transaction
 * 
 */
export type account_nft_transaction = $Result.DefaultSelection<Prisma.$account_nft_transactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Language: {
  RU: 'RU',
  EN: 'EN'
};

export type Language = (typeof Language)[keyof typeof Language]

}

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Referrals
 * const referrals = await prisma.referral.findMany()
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
   * // Fetch zero or more Referrals
   * const referrals = await prisma.referral.findMany()
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
   * `prisma.referral`: Exposes CRUD operations for the **referral** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Referrals
    * const referrals = await prisma.referral.findMany()
    * ```
    */
  get referral(): Prisma.referralDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.accountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nft`: Exposes CRUD operations for the **nft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nfts
    * const nfts = await prisma.nft.findMany()
    * ```
    */
  get nft(): Prisma.nftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account_nft`: Exposes CRUD operations for the **account_nft** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_nfts
    * const account_nfts = await prisma.account_nft.findMany()
    * ```
    */
  get account_nft(): Prisma.account_nftDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account_nft_transaction`: Exposes CRUD operations for the **account_nft_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_nft_transactions
    * const account_nft_transactions = await prisma.account_nft_transaction.findMany()
    * ```
    */
  get account_nft_transaction(): Prisma.account_nft_transactionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    referral: 'referral',
    account: 'account',
    nft: 'nft',
    account_nft: 'account_nft',
    account_nft_transaction: 'account_nft_transaction'
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
      modelProps: "referral" | "account" | "nft" | "account_nft" | "account_nft_transaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      referral: {
        payload: Prisma.$referralPayload<ExtArgs>
        fields: Prisma.referralFieldRefs
        operations: {
          findUnique: {
            args: Prisma.referralFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.referralFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>
          }
          findFirst: {
            args: Prisma.referralFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.referralFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>
          }
          findMany: {
            args: Prisma.referralFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>[]
          }
          create: {
            args: Prisma.referralCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>
          }
          createMany: {
            args: Prisma.referralCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.referralCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>[]
          }
          delete: {
            args: Prisma.referralDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>
          }
          update: {
            args: Prisma.referralUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>
          }
          deleteMany: {
            args: Prisma.referralDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.referralUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.referralUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>[]
          }
          upsert: {
            args: Prisma.referralUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$referralPayload>
          }
          aggregate: {
            args: Prisma.ReferralAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferral>
          }
          groupBy: {
            args: Prisma.referralGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralGroupByOutputType>[]
          }
          count: {
            args: Prisma.referralCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralCountAggregateOutputType> | number
          }
        }
      }
      account: {
        payload: Prisma.$accountPayload<ExtArgs>
        fields: Prisma.accountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.accountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.accountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findFirst: {
            args: Prisma.accountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.accountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          findMany: {
            args: Prisma.accountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          create: {
            args: Prisma.accountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          createMany: {
            args: Prisma.accountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.accountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          delete: {
            args: Prisma.accountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          update: {
            args: Prisma.accountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          deleteMany: {
            args: Prisma.accountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.accountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.accountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>[]
          }
          upsert: {
            args: Prisma.accountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$accountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.accountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.accountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      nft: {
        payload: Prisma.$nftPayload<ExtArgs>
        fields: Prisma.nftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>
          }
          findFirst: {
            args: Prisma.nftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>
          }
          findMany: {
            args: Prisma.nftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>[]
          }
          create: {
            args: Prisma.nftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>
          }
          createMany: {
            args: Prisma.nftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>[]
          }
          delete: {
            args: Prisma.nftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>
          }
          update: {
            args: Prisma.nftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>
          }
          deleteMany: {
            args: Prisma.nftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>[]
          }
          upsert: {
            args: Prisma.nftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nftPayload>
          }
          aggregate: {
            args: Prisma.NftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNft>
          }
          groupBy: {
            args: Prisma.nftGroupByArgs<ExtArgs>
            result: $Utils.Optional<NftGroupByOutputType>[]
          }
          count: {
            args: Prisma.nftCountArgs<ExtArgs>
            result: $Utils.Optional<NftCountAggregateOutputType> | number
          }
        }
      }
      account_nft: {
        payload: Prisma.$account_nftPayload<ExtArgs>
        fields: Prisma.account_nftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.account_nftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.account_nftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>
          }
          findFirst: {
            args: Prisma.account_nftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.account_nftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>
          }
          findMany: {
            args: Prisma.account_nftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>[]
          }
          create: {
            args: Prisma.account_nftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>
          }
          createMany: {
            args: Prisma.account_nftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.account_nftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>[]
          }
          delete: {
            args: Prisma.account_nftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>
          }
          update: {
            args: Prisma.account_nftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>
          }
          deleteMany: {
            args: Prisma.account_nftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.account_nftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.account_nftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>[]
          }
          upsert: {
            args: Prisma.account_nftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nftPayload>
          }
          aggregate: {
            args: Prisma.Account_nftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount_nft>
          }
          groupBy: {
            args: Prisma.account_nftGroupByArgs<ExtArgs>
            result: $Utils.Optional<Account_nftGroupByOutputType>[]
          }
          count: {
            args: Prisma.account_nftCountArgs<ExtArgs>
            result: $Utils.Optional<Account_nftCountAggregateOutputType> | number
          }
        }
      }
      account_nft_transaction: {
        payload: Prisma.$account_nft_transactionPayload<ExtArgs>
        fields: Prisma.account_nft_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.account_nft_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.account_nft_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>
          }
          findFirst: {
            args: Prisma.account_nft_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.account_nft_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>
          }
          findMany: {
            args: Prisma.account_nft_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>[]
          }
          create: {
            args: Prisma.account_nft_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>
          }
          createMany: {
            args: Prisma.account_nft_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.account_nft_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>[]
          }
          delete: {
            args: Prisma.account_nft_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>
          }
          update: {
            args: Prisma.account_nft_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>
          }
          deleteMany: {
            args: Prisma.account_nft_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.account_nft_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.account_nft_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>[]
          }
          upsert: {
            args: Prisma.account_nft_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_nft_transactionPayload>
          }
          aggregate: {
            args: Prisma.Account_nft_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount_nft_transaction>
          }
          groupBy: {
            args: Prisma.account_nft_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Account_nft_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.account_nft_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Account_nft_transactionCountAggregateOutputType> | number
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
    referral?: referralOmit
    account?: accountOmit
    nft?: nftOmit
    account_nft?: account_nftOmit
    account_nft_transaction?: account_nft_transactionOmit
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
   * Count Type ReferralCountOutputType
   */

  export type ReferralCountOutputType = {
    accounts: number
  }

  export type ReferralCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | ReferralCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralCountOutputType
     */
    select?: ReferralCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReferralCountOutputType without action
   */
  export type ReferralCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    nfts: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nfts?: boolean | AccountCountOutputTypeCountNftsArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountNftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_nftWhereInput
  }


  /**
   * Count Type NftCountOutputType
   */

  export type NftCountOutputType = {
    accounts: number
  }

  export type NftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | NftCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * NftCountOutputType without action
   */
  export type NftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NftCountOutputType
     */
    select?: NftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NftCountOutputType without action
   */
  export type NftCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_nftWhereInput
  }


  /**
   * Count Type Account_nftCountOutputType
   */

  export type Account_nftCountOutputType = {
    transactions: number
  }

  export type Account_nftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transactions?: boolean | Account_nftCountOutputTypeCountTransactionsArgs
  }

  // Custom InputTypes
  /**
   * Account_nftCountOutputType without action
   */
  export type Account_nftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account_nftCountOutputType
     */
    select?: Account_nftCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Account_nftCountOutputType without action
   */
  export type Account_nftCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_nft_transactionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralMinAggregateOutputType = {
    id: string | null
    value: string | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: string | null
    value: string | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    value: number
    accountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReferralMinAggregateInputType = {
    id?: true
    value?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    value?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    value?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReferralAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referral to aggregate.
     */
    where?: referralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralOrderByWithRelationInput | referralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: referralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned referrals
    **/
    _count?: true | ReferralCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralMaxAggregateInputType
  }

  export type GetReferralAggregateType<T extends ReferralAggregateArgs> = {
        [P in keyof T & keyof AggregateReferral]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferral[P]>
      : GetScalarType<T[P], AggregateReferral[P]>
  }




  export type referralGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: referralWhereInput
    orderBy?: referralOrderByWithAggregationInput | referralOrderByWithAggregationInput[]
    by: ReferralScalarFieldEnum[] | ReferralScalarFieldEnum
    having?: referralScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralCountAggregateInputType | true
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: string
    value: string
    accountId: string
    createdAt: Date
    updatedAt: Date
    _count: ReferralCountAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  type GetReferralGroupByPayload<T extends referralGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralGroupByOutputType[P]>
        }
      >
    >


  export type referralSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    accounts?: boolean | referral$accountsArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type referralSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type referralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type referralSelectScalar = {
    id?: boolean
    value?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type referralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "accountId" | "createdAt" | "updatedAt", ExtArgs["result"]["referral"]>
  export type referralInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    accounts?: boolean | referral$accountsArgs<ExtArgs>
    _count?: boolean | ReferralCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type referralIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
  }
  export type referralIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
  }

  export type $referralPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "referral"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
      accounts: Prisma.$accountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      accountId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referral"]>
    composites: {}
  }

  type referralGetPayload<S extends boolean | null | undefined | referralDefaultArgs> = $Result.GetResult<Prisma.$referralPayload, S>

  type referralCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<referralFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralCountAggregateInputType | true
    }

  export interface referralDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['referral'], meta: { name: 'referral' } }
    /**
     * Find zero or one Referral that matches the filter.
     * @param {referralFindUniqueArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends referralFindUniqueArgs>(args: SelectSubset<T, referralFindUniqueArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Referral that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {referralFindUniqueOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends referralFindUniqueOrThrowArgs>(args: SelectSubset<T, referralFindUniqueOrThrowArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralFindFirstArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends referralFindFirstArgs>(args?: SelectSubset<T, referralFindFirstArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Referral that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralFindFirstOrThrowArgs} args - Arguments to find a Referral
     * @example
     * // Get one Referral
     * const referral = await prisma.referral.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends referralFindFirstOrThrowArgs>(args?: SelectSubset<T, referralFindFirstOrThrowArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Referrals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Referrals
     * const referrals = await prisma.referral.findMany()
     * 
     * // Get first 10 Referrals
     * const referrals = await prisma.referral.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralWithIdOnly = await prisma.referral.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends referralFindManyArgs>(args?: SelectSubset<T, referralFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Referral.
     * @param {referralCreateArgs} args - Arguments to create a Referral.
     * @example
     * // Create one Referral
     * const Referral = await prisma.referral.create({
     *   data: {
     *     // ... data to create a Referral
     *   }
     * })
     * 
     */
    create<T extends referralCreateArgs>(args: SelectSubset<T, referralCreateArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Referrals.
     * @param {referralCreateManyArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends referralCreateManyArgs>(args?: SelectSubset<T, referralCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Referrals and returns the data saved in the database.
     * @param {referralCreateManyAndReturnArgs} args - Arguments to create many Referrals.
     * @example
     * // Create many Referrals
     * const referral = await prisma.referral.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends referralCreateManyAndReturnArgs>(args?: SelectSubset<T, referralCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Referral.
     * @param {referralDeleteArgs} args - Arguments to delete one Referral.
     * @example
     * // Delete one Referral
     * const Referral = await prisma.referral.delete({
     *   where: {
     *     // ... filter to delete one Referral
     *   }
     * })
     * 
     */
    delete<T extends referralDeleteArgs>(args: SelectSubset<T, referralDeleteArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Referral.
     * @param {referralUpdateArgs} args - Arguments to update one Referral.
     * @example
     * // Update one Referral
     * const referral = await prisma.referral.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends referralUpdateArgs>(args: SelectSubset<T, referralUpdateArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Referrals.
     * @param {referralDeleteManyArgs} args - Arguments to filter Referrals to delete.
     * @example
     * // Delete a few Referrals
     * const { count } = await prisma.referral.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends referralDeleteManyArgs>(args?: SelectSubset<T, referralDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends referralUpdateManyArgs>(args: SelectSubset<T, referralUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Referrals and returns the data updated in the database.
     * @param {referralUpdateManyAndReturnArgs} args - Arguments to update many Referrals.
     * @example
     * // Update many Referrals
     * const referral = await prisma.referral.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Referrals and only return the `id`
     * const referralWithIdOnly = await prisma.referral.updateManyAndReturn({
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
    updateManyAndReturn<T extends referralUpdateManyAndReturnArgs>(args: SelectSubset<T, referralUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Referral.
     * @param {referralUpsertArgs} args - Arguments to update or create a Referral.
     * @example
     * // Update or create a Referral
     * const referral = await prisma.referral.upsert({
     *   create: {
     *     // ... data to create a Referral
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Referral we want to update
     *   }
     * })
     */
    upsert<T extends referralUpsertArgs>(args: SelectSubset<T, referralUpsertArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Referrals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralCountArgs} args - Arguments to filter Referrals to count.
     * @example
     * // Count the number of Referrals
     * const count = await prisma.referral.count({
     *   where: {
     *     // ... the filter for the Referrals we want to count
     *   }
     * })
    **/
    count<T extends referralCountArgs>(
      args?: Subset<T, referralCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralAggregateArgs>(args: Subset<T, ReferralAggregateArgs>): Prisma.PrismaPromise<GetReferralAggregateType<T>>

    /**
     * Group by Referral.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {referralGroupByArgs} args - Group by arguments.
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
      T extends referralGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: referralGroupByArgs['orderBy'] }
        : { orderBy?: referralGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, referralGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the referral model
   */
  readonly fields: referralFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for referral.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__referralClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    accounts<T extends referral$accountsArgs<ExtArgs> = {}>(args?: Subset<T, referral$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the referral model
   */
  interface referralFieldRefs {
    readonly id: FieldRef<"referral", 'String'>
    readonly value: FieldRef<"referral", 'String'>
    readonly accountId: FieldRef<"referral", 'String'>
    readonly createdAt: FieldRef<"referral", 'DateTime'>
    readonly updatedAt: FieldRef<"referral", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * referral findUnique
   */
  export type referralFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * Filter, which referral to fetch.
     */
    where: referralWhereUniqueInput
  }

  /**
   * referral findUniqueOrThrow
   */
  export type referralFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * Filter, which referral to fetch.
     */
    where: referralWhereUniqueInput
  }

  /**
   * referral findFirst
   */
  export type referralFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * Filter, which referral to fetch.
     */
    where?: referralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralOrderByWithRelationInput | referralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referrals.
     */
    cursor?: referralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * referral findFirstOrThrow
   */
  export type referralFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * Filter, which referral to fetch.
     */
    where?: referralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralOrderByWithRelationInput | referralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for referrals.
     */
    cursor?: referralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of referrals.
     */
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * referral findMany
   */
  export type referralFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * Filter, which referrals to fetch.
     */
    where?: referralWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of referrals to fetch.
     */
    orderBy?: referralOrderByWithRelationInput | referralOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing referrals.
     */
    cursor?: referralWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` referrals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` referrals.
     */
    skip?: number
    distinct?: ReferralScalarFieldEnum | ReferralScalarFieldEnum[]
  }

  /**
   * referral create
   */
  export type referralCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * The data needed to create a referral.
     */
    data: XOR<referralCreateInput, referralUncheckedCreateInput>
  }

  /**
   * referral createMany
   */
  export type referralCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many referrals.
     */
    data: referralCreateManyInput | referralCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * referral createManyAndReturn
   */
  export type referralCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * The data used to create many referrals.
     */
    data: referralCreateManyInput | referralCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral update
   */
  export type referralUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * The data needed to update a referral.
     */
    data: XOR<referralUpdateInput, referralUncheckedUpdateInput>
    /**
     * Choose, which referral to update.
     */
    where: referralWhereUniqueInput
  }

  /**
   * referral updateMany
   */
  export type referralUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update referrals.
     */
    data: XOR<referralUpdateManyMutationInput, referralUncheckedUpdateManyInput>
    /**
     * Filter which referrals to update
     */
    where?: referralWhereInput
    /**
     * Limit how many referrals to update.
     */
    limit?: number
  }

  /**
   * referral updateManyAndReturn
   */
  export type referralUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * The data used to update referrals.
     */
    data: XOR<referralUpdateManyMutationInput, referralUncheckedUpdateManyInput>
    /**
     * Filter which referrals to update
     */
    where?: referralWhereInput
    /**
     * Limit how many referrals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * referral upsert
   */
  export type referralUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * The filter to search for the referral to update in case it exists.
     */
    where: referralWhereUniqueInput
    /**
     * In case the referral found by the `where` argument doesn't exist, create a new referral with this data.
     */
    create: XOR<referralCreateInput, referralUncheckedCreateInput>
    /**
     * In case the referral was found with the provided `where` argument, update it with this data.
     */
    update: XOR<referralUpdateInput, referralUncheckedUpdateInput>
  }

  /**
   * referral delete
   */
  export type referralDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    /**
     * Filter which referral to delete.
     */
    where: referralWhereUniqueInput
  }

  /**
   * referral deleteMany
   */
  export type referralDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which referrals to delete
     */
    where?: referralWhereInput
    /**
     * Limit how many referrals to delete.
     */
    limit?: number
  }

  /**
   * referral.accounts
   */
  export type referral$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    where?: accountWhereInput
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    cursor?: accountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * referral without action
   */
  export type referralDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
  }


  /**
   * Model account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    balance: number | null
  }

  export type AccountSumAggregateOutputType = {
    balance: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    balance: number | null
    username: string | null
    language: $Enums.Language | null
    telegramId: string | null
    referredById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    balance: number | null
    username: string | null
    language: $Enums.Language | null
    telegramId: string | null
    referredById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    balance: number
    username: number
    language: number
    telegramId: number
    referredById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    balance?: true
  }

  export type AccountSumAggregateInputType = {
    balance?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    balance?: true
    username?: true
    language?: true
    telegramId?: true
    referredById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    balance?: true
    username?: true
    language?: true
    telegramId?: true
    referredById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    balance?: true
    username?: true
    language?: true
    telegramId?: true
    referredById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account to aggregate.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type accountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: accountWhereInput
    orderBy?: accountOrderByWithAggregationInput | accountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: accountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    balance: number
    username: string
    language: $Enums.Language
    telegramId: string | null
    referredById: string | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends accountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type accountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    username?: boolean
    language?: boolean
    telegramId?: boolean
    referredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referral?: boolean | account$referralArgs<ExtArgs>
    referredBy?: boolean | account$referredByArgs<ExtArgs>
    nfts?: boolean | account$nftsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    username?: boolean
    language?: boolean
    telegramId?: boolean
    referredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredBy?: boolean | account$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    username?: boolean
    language?: boolean
    telegramId?: boolean
    referredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referredBy?: boolean | account$referredByArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectScalar = {
    id?: boolean
    balance?: boolean
    username?: boolean
    language?: boolean
    telegramId?: boolean
    referredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "username" | "language" | "telegramId" | "referredById" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | account$referralArgs<ExtArgs>
    referredBy?: boolean | account$referredByArgs<ExtArgs>
    nfts?: boolean | account$nftsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type accountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | account$referredByArgs<ExtArgs>
  }
  export type accountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referredBy?: boolean | account$referredByArgs<ExtArgs>
  }

  export type $accountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account"
    objects: {
      referral: Prisma.$referralPayload<ExtArgs> | null
      referredBy: Prisma.$referralPayload<ExtArgs> | null
      nfts: Prisma.$account_nftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      username: string
      language: $Enums.Language
      telegramId: string | null
      referredById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type accountGetPayload<S extends boolean | null | undefined | accountDefaultArgs> = $Result.GetResult<Prisma.$accountPayload, S>

  type accountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<accountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface accountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account'], meta: { name: 'account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {accountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends accountFindUniqueArgs>(args: SelectSubset<T, accountFindUniqueArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {accountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends accountFindUniqueOrThrowArgs>(args: SelectSubset<T, accountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends accountFindFirstArgs>(args?: SelectSubset<T, accountFindFirstArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends accountFindFirstOrThrowArgs>(args?: SelectSubset<T, accountFindFirstOrThrowArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends accountFindManyArgs>(args?: SelectSubset<T, accountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {accountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends accountCreateArgs>(args: SelectSubset<T, accountCreateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {accountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends accountCreateManyArgs>(args?: SelectSubset<T, accountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {accountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends accountCreateManyAndReturnArgs>(args?: SelectSubset<T, accountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {accountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends accountDeleteArgs>(args: SelectSubset<T, accountDeleteArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {accountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends accountUpdateArgs>(args: SelectSubset<T, accountUpdateArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {accountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends accountDeleteManyArgs>(args?: SelectSubset<T, accountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends accountUpdateManyArgs>(args: SelectSubset<T, accountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {accountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
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
    updateManyAndReturn<T extends accountUpdateManyAndReturnArgs>(args: SelectSubset<T, accountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {accountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends accountUpsertArgs>(args: SelectSubset<T, accountUpsertArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends accountCountArgs>(
      args?: Subset<T, accountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {accountGroupByArgs} args - Group by arguments.
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
      T extends accountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: accountGroupByArgs['orderBy'] }
        : { orderBy?: accountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, accountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account model
   */
  readonly fields: accountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__accountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    referral<T extends account$referralArgs<ExtArgs> = {}>(args?: Subset<T, account$referralArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referredBy<T extends account$referredByArgs<ExtArgs> = {}>(args?: Subset<T, account$referredByArgs<ExtArgs>>): Prisma__referralClient<$Result.GetResult<Prisma.$referralPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    nfts<T extends account$nftsArgs<ExtArgs> = {}>(args?: Subset<T, account$nftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the account model
   */
  interface accountFieldRefs {
    readonly id: FieldRef<"account", 'String'>
    readonly balance: FieldRef<"account", 'Float'>
    readonly username: FieldRef<"account", 'String'>
    readonly language: FieldRef<"account", 'Language'>
    readonly telegramId: FieldRef<"account", 'String'>
    readonly referredById: FieldRef<"account", 'String'>
    readonly createdAt: FieldRef<"account", 'DateTime'>
    readonly updatedAt: FieldRef<"account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account findUnique
   */
  export type accountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findUniqueOrThrow
   */
  export type accountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account findFirst
   */
  export type accountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findFirstOrThrow
   */
  export type accountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which account to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account findMany
   */
  export type accountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter, which accounts to fetch.
     */
    where?: accountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of accounts to fetch.
     */
    orderBy?: accountOrderByWithRelationInput | accountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing accounts.
     */
    cursor?: accountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * account create
   */
  export type accountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to create a account.
     */
    data: XOR<accountCreateInput, accountUncheckedCreateInput>
  }

  /**
   * account createMany
   */
  export type accountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account createManyAndReturn
   */
  export type accountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to create many accounts.
     */
    data: accountCreateManyInput | accountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account update
   */
  export type accountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The data needed to update a account.
     */
    data: XOR<accountUpdateInput, accountUncheckedUpdateInput>
    /**
     * Choose, which account to update.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account updateMany
   */
  export type accountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
  }

  /**
   * account updateManyAndReturn
   */
  export type accountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * The data used to update accounts.
     */
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyInput>
    /**
     * Filter which accounts to update
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * account upsert
   */
  export type accountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * The filter to search for the account to update in case it exists.
     */
    where: accountWhereUniqueInput
    /**
     * In case the account found by the `where` argument doesn't exist, create a new account with this data.
     */
    create: XOR<accountCreateInput, accountUncheckedCreateInput>
    /**
     * In case the account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<accountUpdateInput, accountUncheckedUpdateInput>
  }

  /**
   * account delete
   */
  export type accountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
    /**
     * Filter which account to delete.
     */
    where: accountWhereUniqueInput
  }

  /**
   * account deleteMany
   */
  export type accountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which accounts to delete
     */
    where?: accountWhereInput
    /**
     * Limit how many accounts to delete.
     */
    limit?: number
  }

  /**
   * account.referral
   */
  export type account$referralArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    where?: referralWhereInput
  }

  /**
   * account.referredBy
   */
  export type account$referredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the referral
     */
    select?: referralSelect<ExtArgs> | null
    /**
     * Omit specific fields from the referral
     */
    omit?: referralOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: referralInclude<ExtArgs> | null
    where?: referralWhereInput
  }

  /**
   * account.nfts
   */
  export type account$nftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    where?: account_nftWhereInput
    orderBy?: account_nftOrderByWithRelationInput | account_nftOrderByWithRelationInput[]
    cursor?: account_nftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_nftScalarFieldEnum | Account_nftScalarFieldEnum[]
  }

  /**
   * account without action
   */
  export type accountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account
     */
    select?: accountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account
     */
    omit?: accountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: accountInclude<ExtArgs> | null
  }


  /**
   * Model nft
   */

  export type AggregateNft = {
    _count: NftCountAggregateOutputType | null
    _avg: NftAvgAggregateOutputType | null
    _sum: NftSumAggregateOutputType | null
    _min: NftMinAggregateOutputType | null
    _max: NftMaxAggregateOutputType | null
  }

  export type NftAvgAggregateOutputType = {
    price: number | null
    roi: number | null
    iterations: number | null
  }

  export type NftSumAggregateOutputType = {
    price: number | null
    roi: number | null
    iterations: number | null
  }

  export type NftMinAggregateOutputType = {
    id: string | null
    title: string | null
    sku: string | null
    price: number | null
    roi: number | null
    iterations: number | null
    isSoldOut: boolean | null
    isNew: boolean | null
    isHot: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NftMaxAggregateOutputType = {
    id: string | null
    title: string | null
    sku: string | null
    price: number | null
    roi: number | null
    iterations: number | null
    isSoldOut: boolean | null
    isNew: boolean | null
    isHot: boolean | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NftCountAggregateOutputType = {
    id: number
    title: number
    sku: number
    price: number
    roi: number
    iterations: number
    isSoldOut: number
    isNew: number
    isHot: number
    isArchived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NftAvgAggregateInputType = {
    price?: true
    roi?: true
    iterations?: true
  }

  export type NftSumAggregateInputType = {
    price?: true
    roi?: true
    iterations?: true
  }

  export type NftMinAggregateInputType = {
    id?: true
    title?: true
    sku?: true
    price?: true
    roi?: true
    iterations?: true
    isSoldOut?: true
    isNew?: true
    isHot?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NftMaxAggregateInputType = {
    id?: true
    title?: true
    sku?: true
    price?: true
    roi?: true
    iterations?: true
    isSoldOut?: true
    isNew?: true
    isHot?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NftCountAggregateInputType = {
    id?: true
    title?: true
    sku?: true
    price?: true
    roi?: true
    iterations?: true
    isSoldOut?: true
    isNew?: true
    isHot?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nft to aggregate.
     */
    where?: nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nfts to fetch.
     */
    orderBy?: nftOrderByWithRelationInput | nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nfts
    **/
    _count?: true | NftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NftMaxAggregateInputType
  }

  export type GetNftAggregateType<T extends NftAggregateArgs> = {
        [P in keyof T & keyof AggregateNft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNft[P]>
      : GetScalarType<T[P], AggregateNft[P]>
  }




  export type nftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nftWhereInput
    orderBy?: nftOrderByWithAggregationInput | nftOrderByWithAggregationInput[]
    by: NftScalarFieldEnum[] | NftScalarFieldEnum
    having?: nftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NftCountAggregateInputType | true
    _avg?: NftAvgAggregateInputType
    _sum?: NftSumAggregateInputType
    _min?: NftMinAggregateInputType
    _max?: NftMaxAggregateInputType
  }

  export type NftGroupByOutputType = {
    id: string
    title: string
    sku: string
    price: number
    roi: number
    iterations: number
    isSoldOut: boolean
    isNew: boolean
    isHot: boolean
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    _count: NftCountAggregateOutputType | null
    _avg: NftAvgAggregateOutputType | null
    _sum: NftSumAggregateOutputType | null
    _min: NftMinAggregateOutputType | null
    _max: NftMaxAggregateOutputType | null
  }

  type GetNftGroupByPayload<T extends nftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NftGroupByOutputType[P]>
            : GetScalarType<T[P], NftGroupByOutputType[P]>
        }
      >
    >


  export type nftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sku?: boolean
    price?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | nft$accountsArgs<ExtArgs>
    _count?: boolean | NftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nft"]>

  export type nftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sku?: boolean
    price?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nft"]>

  export type nftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sku?: boolean
    price?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nft"]>

  export type nftSelectScalar = {
    id?: boolean
    title?: boolean
    sku?: boolean
    price?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type nftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "sku" | "price" | "roi" | "iterations" | "isSoldOut" | "isNew" | "isHot" | "isArchived" | "createdAt" | "updatedAt", ExtArgs["result"]["nft"]>
  export type nftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | nft$accountsArgs<ExtArgs>
    _count?: boolean | NftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type nftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type nftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $nftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nft"
    objects: {
      accounts: Prisma.$account_nftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      sku: string
      price: number
      roi: number
      iterations: number
      isSoldOut: boolean
      isNew: boolean
      isHot: boolean
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nft"]>
    composites: {}
  }

  type nftGetPayload<S extends boolean | null | undefined | nftDefaultArgs> = $Result.GetResult<Prisma.$nftPayload, S>

  type nftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NftCountAggregateInputType | true
    }

  export interface nftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nft'], meta: { name: 'nft' } }
    /**
     * Find zero or one Nft that matches the filter.
     * @param {nftFindUniqueArgs} args - Arguments to find a Nft
     * @example
     * // Get one Nft
     * const nft = await prisma.nft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nftFindUniqueArgs>(args: SelectSubset<T, nftFindUniqueArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nftFindUniqueOrThrowArgs} args - Arguments to find a Nft
     * @example
     * // Get one Nft
     * const nft = await prisma.nft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nftFindUniqueOrThrowArgs>(args: SelectSubset<T, nftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftFindFirstArgs} args - Arguments to find a Nft
     * @example
     * // Get one Nft
     * const nft = await prisma.nft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nftFindFirstArgs>(args?: SelectSubset<T, nftFindFirstArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftFindFirstOrThrowArgs} args - Arguments to find a Nft
     * @example
     * // Get one Nft
     * const nft = await prisma.nft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nftFindFirstOrThrowArgs>(args?: SelectSubset<T, nftFindFirstOrThrowArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nfts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nfts
     * const nfts = await prisma.nft.findMany()
     * 
     * // Get first 10 Nfts
     * const nfts = await prisma.nft.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nftWithIdOnly = await prisma.nft.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nftFindManyArgs>(args?: SelectSubset<T, nftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nft.
     * @param {nftCreateArgs} args - Arguments to create a Nft.
     * @example
     * // Create one Nft
     * const Nft = await prisma.nft.create({
     *   data: {
     *     // ... data to create a Nft
     *   }
     * })
     * 
     */
    create<T extends nftCreateArgs>(args: SelectSubset<T, nftCreateArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nfts.
     * @param {nftCreateManyArgs} args - Arguments to create many Nfts.
     * @example
     * // Create many Nfts
     * const nft = await prisma.nft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nftCreateManyArgs>(args?: SelectSubset<T, nftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nfts and returns the data saved in the database.
     * @param {nftCreateManyAndReturnArgs} args - Arguments to create many Nfts.
     * @example
     * // Create many Nfts
     * const nft = await prisma.nft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nfts and only return the `id`
     * const nftWithIdOnly = await prisma.nft.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nftCreateManyAndReturnArgs>(args?: SelectSubset<T, nftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nft.
     * @param {nftDeleteArgs} args - Arguments to delete one Nft.
     * @example
     * // Delete one Nft
     * const Nft = await prisma.nft.delete({
     *   where: {
     *     // ... filter to delete one Nft
     *   }
     * })
     * 
     */
    delete<T extends nftDeleteArgs>(args: SelectSubset<T, nftDeleteArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nft.
     * @param {nftUpdateArgs} args - Arguments to update one Nft.
     * @example
     * // Update one Nft
     * const nft = await prisma.nft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nftUpdateArgs>(args: SelectSubset<T, nftUpdateArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nfts.
     * @param {nftDeleteManyArgs} args - Arguments to filter Nfts to delete.
     * @example
     * // Delete a few Nfts
     * const { count } = await prisma.nft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nftDeleteManyArgs>(args?: SelectSubset<T, nftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nfts
     * const nft = await prisma.nft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nftUpdateManyArgs>(args: SelectSubset<T, nftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nfts and returns the data updated in the database.
     * @param {nftUpdateManyAndReturnArgs} args - Arguments to update many Nfts.
     * @example
     * // Update many Nfts
     * const nft = await prisma.nft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nfts and only return the `id`
     * const nftWithIdOnly = await prisma.nft.updateManyAndReturn({
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
    updateManyAndReturn<T extends nftUpdateManyAndReturnArgs>(args: SelectSubset<T, nftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nft.
     * @param {nftUpsertArgs} args - Arguments to update or create a Nft.
     * @example
     * // Update or create a Nft
     * const nft = await prisma.nft.upsert({
     *   create: {
     *     // ... data to create a Nft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nft we want to update
     *   }
     * })
     */
    upsert<T extends nftUpsertArgs>(args: SelectSubset<T, nftUpsertArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftCountArgs} args - Arguments to filter Nfts to count.
     * @example
     * // Count the number of Nfts
     * const count = await prisma.nft.count({
     *   where: {
     *     // ... the filter for the Nfts we want to count
     *   }
     * })
    **/
    count<T extends nftCountArgs>(
      args?: Subset<T, nftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NftAggregateArgs>(args: Subset<T, NftAggregateArgs>): Prisma.PrismaPromise<GetNftAggregateType<T>>

    /**
     * Group by Nft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nftGroupByArgs} args - Group by arguments.
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
      T extends nftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nftGroupByArgs['orderBy'] }
        : { orderBy?: nftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nft model
   */
  readonly fields: nftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends nft$accountsArgs<ExtArgs> = {}>(args?: Subset<T, nft$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the nft model
   */
  interface nftFieldRefs {
    readonly id: FieldRef<"nft", 'String'>
    readonly title: FieldRef<"nft", 'String'>
    readonly sku: FieldRef<"nft", 'String'>
    readonly price: FieldRef<"nft", 'Float'>
    readonly roi: FieldRef<"nft", 'Float'>
    readonly iterations: FieldRef<"nft", 'Int'>
    readonly isSoldOut: FieldRef<"nft", 'Boolean'>
    readonly isNew: FieldRef<"nft", 'Boolean'>
    readonly isHot: FieldRef<"nft", 'Boolean'>
    readonly isArchived: FieldRef<"nft", 'Boolean'>
    readonly createdAt: FieldRef<"nft", 'DateTime'>
    readonly updatedAt: FieldRef<"nft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nft findUnique
   */
  export type nftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * Filter, which nft to fetch.
     */
    where: nftWhereUniqueInput
  }

  /**
   * nft findUniqueOrThrow
   */
  export type nftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * Filter, which nft to fetch.
     */
    where: nftWhereUniqueInput
  }

  /**
   * nft findFirst
   */
  export type nftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * Filter, which nft to fetch.
     */
    where?: nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nfts to fetch.
     */
    orderBy?: nftOrderByWithRelationInput | nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nfts.
     */
    cursor?: nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nfts.
     */
    distinct?: NftScalarFieldEnum | NftScalarFieldEnum[]
  }

  /**
   * nft findFirstOrThrow
   */
  export type nftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * Filter, which nft to fetch.
     */
    where?: nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nfts to fetch.
     */
    orderBy?: nftOrderByWithRelationInput | nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nfts.
     */
    cursor?: nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nfts.
     */
    distinct?: NftScalarFieldEnum | NftScalarFieldEnum[]
  }

  /**
   * nft findMany
   */
  export type nftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * Filter, which nfts to fetch.
     */
    where?: nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nfts to fetch.
     */
    orderBy?: nftOrderByWithRelationInput | nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nfts.
     */
    cursor?: nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nfts.
     */
    skip?: number
    distinct?: NftScalarFieldEnum | NftScalarFieldEnum[]
  }

  /**
   * nft create
   */
  export type nftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * The data needed to create a nft.
     */
    data: XOR<nftCreateInput, nftUncheckedCreateInput>
  }

  /**
   * nft createMany
   */
  export type nftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nfts.
     */
    data: nftCreateManyInput | nftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nft createManyAndReturn
   */
  export type nftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * The data used to create many nfts.
     */
    data: nftCreateManyInput | nftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nft update
   */
  export type nftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * The data needed to update a nft.
     */
    data: XOR<nftUpdateInput, nftUncheckedUpdateInput>
    /**
     * Choose, which nft to update.
     */
    where: nftWhereUniqueInput
  }

  /**
   * nft updateMany
   */
  export type nftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nfts.
     */
    data: XOR<nftUpdateManyMutationInput, nftUncheckedUpdateManyInput>
    /**
     * Filter which nfts to update
     */
    where?: nftWhereInput
    /**
     * Limit how many nfts to update.
     */
    limit?: number
  }

  /**
   * nft updateManyAndReturn
   */
  export type nftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * The data used to update nfts.
     */
    data: XOR<nftUpdateManyMutationInput, nftUncheckedUpdateManyInput>
    /**
     * Filter which nfts to update
     */
    where?: nftWhereInput
    /**
     * Limit how many nfts to update.
     */
    limit?: number
  }

  /**
   * nft upsert
   */
  export type nftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * The filter to search for the nft to update in case it exists.
     */
    where: nftWhereUniqueInput
    /**
     * In case the nft found by the `where` argument doesn't exist, create a new nft with this data.
     */
    create: XOR<nftCreateInput, nftUncheckedCreateInput>
    /**
     * In case the nft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nftUpdateInput, nftUncheckedUpdateInput>
  }

  /**
   * nft delete
   */
  export type nftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
    /**
     * Filter which nft to delete.
     */
    where: nftWhereUniqueInput
  }

  /**
   * nft deleteMany
   */
  export type nftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nfts to delete
     */
    where?: nftWhereInput
    /**
     * Limit how many nfts to delete.
     */
    limit?: number
  }

  /**
   * nft.accounts
   */
  export type nft$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    where?: account_nftWhereInput
    orderBy?: account_nftOrderByWithRelationInput | account_nftOrderByWithRelationInput[]
    cursor?: account_nftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_nftScalarFieldEnum | Account_nftScalarFieldEnum[]
  }

  /**
   * nft without action
   */
  export type nftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft
     */
    select?: nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft
     */
    omit?: nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nftInclude<ExtArgs> | null
  }


  /**
   * Model account_nft
   */

  export type AggregateAccount_nft = {
    _count: Account_nftCountAggregateOutputType | null
    _min: Account_nftMinAggregateOutputType | null
    _max: Account_nftMaxAggregateOutputType | null
  }

  export type Account_nftMinAggregateOutputType = {
    accountId: string | null
    nftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Account_nftMaxAggregateOutputType = {
    accountId: string | null
    nftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Account_nftCountAggregateOutputType = {
    accountId: number
    nftId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Account_nftMinAggregateInputType = {
    accountId?: true
    nftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Account_nftMaxAggregateInputType = {
    accountId?: true
    nftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Account_nftCountAggregateInputType = {
    accountId?: true
    nftId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Account_nftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_nft to aggregate.
     */
    where?: account_nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nfts to fetch.
     */
    orderBy?: account_nftOrderByWithRelationInput | account_nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_nfts
    **/
    _count?: true | Account_nftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_nftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_nftMaxAggregateInputType
  }

  export type GetAccount_nftAggregateType<T extends Account_nftAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_nft]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_nft[P]>
      : GetScalarType<T[P], AggregateAccount_nft[P]>
  }




  export type account_nftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_nftWhereInput
    orderBy?: account_nftOrderByWithAggregationInput | account_nftOrderByWithAggregationInput[]
    by: Account_nftScalarFieldEnum[] | Account_nftScalarFieldEnum
    having?: account_nftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_nftCountAggregateInputType | true
    _min?: Account_nftMinAggregateInputType
    _max?: Account_nftMaxAggregateInputType
  }

  export type Account_nftGroupByOutputType = {
    accountId: string
    nftId: string
    createdAt: Date
    updatedAt: Date
    _count: Account_nftCountAggregateOutputType | null
    _min: Account_nftMinAggregateOutputType | null
    _max: Account_nftMaxAggregateOutputType | null
  }

  type GetAccount_nftGroupByPayload<T extends account_nftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Account_nftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_nftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_nftGroupByOutputType[P]>
            : GetScalarType<T[P], Account_nftGroupByOutputType[P]>
        }
      >
    >


  export type account_nftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    transactions?: boolean | account_nft$transactionsArgs<ExtArgs>
    _count?: boolean | Account_nftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_nft"]>

  export type account_nftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_nft"]>

  export type account_nftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    accountId?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_nft"]>

  export type account_nftSelectScalar = {
    accountId?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type account_nftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"accountId" | "nftId" | "createdAt" | "updatedAt", ExtArgs["result"]["account_nft"]>
  export type account_nftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    transactions?: boolean | account_nft$transactionsArgs<ExtArgs>
    _count?: boolean | Account_nftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type account_nftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }
  export type account_nftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }

  export type $account_nftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account_nft"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
      nft: Prisma.$nftPayload<ExtArgs>
      transactions: Prisma.$account_nft_transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      accountId: string
      nftId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account_nft"]>
    composites: {}
  }

  type account_nftGetPayload<S extends boolean | null | undefined | account_nftDefaultArgs> = $Result.GetResult<Prisma.$account_nftPayload, S>

  type account_nftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<account_nftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Account_nftCountAggregateInputType | true
    }

  export interface account_nftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account_nft'], meta: { name: 'account_nft' } }
    /**
     * Find zero or one Account_nft that matches the filter.
     * @param {account_nftFindUniqueArgs} args - Arguments to find a Account_nft
     * @example
     * // Get one Account_nft
     * const account_nft = await prisma.account_nft.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends account_nftFindUniqueArgs>(args: SelectSubset<T, account_nftFindUniqueArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account_nft that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {account_nftFindUniqueOrThrowArgs} args - Arguments to find a Account_nft
     * @example
     * // Get one Account_nft
     * const account_nft = await prisma.account_nft.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends account_nftFindUniqueOrThrowArgs>(args: SelectSubset<T, account_nftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_nft that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nftFindFirstArgs} args - Arguments to find a Account_nft
     * @example
     * // Get one Account_nft
     * const account_nft = await prisma.account_nft.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends account_nftFindFirstArgs>(args?: SelectSubset<T, account_nftFindFirstArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_nft that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nftFindFirstOrThrowArgs} args - Arguments to find a Account_nft
     * @example
     * // Get one Account_nft
     * const account_nft = await prisma.account_nft.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends account_nftFindFirstOrThrowArgs>(args?: SelectSubset<T, account_nftFindFirstOrThrowArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Account_nfts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_nfts
     * const account_nfts = await prisma.account_nft.findMany()
     * 
     * // Get first 10 Account_nfts
     * const account_nfts = await prisma.account_nft.findMany({ take: 10 })
     * 
     * // Only select the `accountId`
     * const account_nftWithAccountIdOnly = await prisma.account_nft.findMany({ select: { accountId: true } })
     * 
     */
    findMany<T extends account_nftFindManyArgs>(args?: SelectSubset<T, account_nftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account_nft.
     * @param {account_nftCreateArgs} args - Arguments to create a Account_nft.
     * @example
     * // Create one Account_nft
     * const Account_nft = await prisma.account_nft.create({
     *   data: {
     *     // ... data to create a Account_nft
     *   }
     * })
     * 
     */
    create<T extends account_nftCreateArgs>(args: SelectSubset<T, account_nftCreateArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Account_nfts.
     * @param {account_nftCreateManyArgs} args - Arguments to create many Account_nfts.
     * @example
     * // Create many Account_nfts
     * const account_nft = await prisma.account_nft.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends account_nftCreateManyArgs>(args?: SelectSubset<T, account_nftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Account_nfts and returns the data saved in the database.
     * @param {account_nftCreateManyAndReturnArgs} args - Arguments to create many Account_nfts.
     * @example
     * // Create many Account_nfts
     * const account_nft = await prisma.account_nft.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Account_nfts and only return the `accountId`
     * const account_nftWithAccountIdOnly = await prisma.account_nft.createManyAndReturn({
     *   select: { accountId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends account_nftCreateManyAndReturnArgs>(args?: SelectSubset<T, account_nftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account_nft.
     * @param {account_nftDeleteArgs} args - Arguments to delete one Account_nft.
     * @example
     * // Delete one Account_nft
     * const Account_nft = await prisma.account_nft.delete({
     *   where: {
     *     // ... filter to delete one Account_nft
     *   }
     * })
     * 
     */
    delete<T extends account_nftDeleteArgs>(args: SelectSubset<T, account_nftDeleteArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account_nft.
     * @param {account_nftUpdateArgs} args - Arguments to update one Account_nft.
     * @example
     * // Update one Account_nft
     * const account_nft = await prisma.account_nft.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends account_nftUpdateArgs>(args: SelectSubset<T, account_nftUpdateArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Account_nfts.
     * @param {account_nftDeleteManyArgs} args - Arguments to filter Account_nfts to delete.
     * @example
     * // Delete a few Account_nfts
     * const { count } = await prisma.account_nft.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends account_nftDeleteManyArgs>(args?: SelectSubset<T, account_nftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_nfts
     * const account_nft = await prisma.account_nft.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends account_nftUpdateManyArgs>(args: SelectSubset<T, account_nftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_nfts and returns the data updated in the database.
     * @param {account_nftUpdateManyAndReturnArgs} args - Arguments to update many Account_nfts.
     * @example
     * // Update many Account_nfts
     * const account_nft = await prisma.account_nft.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Account_nfts and only return the `accountId`
     * const account_nftWithAccountIdOnly = await prisma.account_nft.updateManyAndReturn({
     *   select: { accountId: true },
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
    updateManyAndReturn<T extends account_nftUpdateManyAndReturnArgs>(args: SelectSubset<T, account_nftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account_nft.
     * @param {account_nftUpsertArgs} args - Arguments to update or create a Account_nft.
     * @example
     * // Update or create a Account_nft
     * const account_nft = await prisma.account_nft.upsert({
     *   create: {
     *     // ... data to create a Account_nft
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_nft we want to update
     *   }
     * })
     */
    upsert<T extends account_nftUpsertArgs>(args: SelectSubset<T, account_nftUpsertArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Account_nfts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nftCountArgs} args - Arguments to filter Account_nfts to count.
     * @example
     * // Count the number of Account_nfts
     * const count = await prisma.account_nft.count({
     *   where: {
     *     // ... the filter for the Account_nfts we want to count
     *   }
     * })
    **/
    count<T extends account_nftCountArgs>(
      args?: Subset<T, account_nftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_nftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_nft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_nftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Account_nftAggregateArgs>(args: Subset<T, Account_nftAggregateArgs>): Prisma.PrismaPromise<GetAccount_nftAggregateType<T>>

    /**
     * Group by Account_nft.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nftGroupByArgs} args - Group by arguments.
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
      T extends account_nftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: account_nftGroupByArgs['orderBy'] }
        : { orderBy?: account_nftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, account_nftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_nftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account_nft model
   */
  readonly fields: account_nftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account_nft.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__account_nftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nft<T extends nftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, nftDefaultArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transactions<T extends account_nft$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, account_nft$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the account_nft model
   */
  interface account_nftFieldRefs {
    readonly accountId: FieldRef<"account_nft", 'String'>
    readonly nftId: FieldRef<"account_nft", 'String'>
    readonly createdAt: FieldRef<"account_nft", 'DateTime'>
    readonly updatedAt: FieldRef<"account_nft", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account_nft findUnique
   */
  export type account_nftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * Filter, which account_nft to fetch.
     */
    where: account_nftWhereUniqueInput
  }

  /**
   * account_nft findUniqueOrThrow
   */
  export type account_nftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * Filter, which account_nft to fetch.
     */
    where: account_nftWhereUniqueInput
  }

  /**
   * account_nft findFirst
   */
  export type account_nftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * Filter, which account_nft to fetch.
     */
    where?: account_nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nfts to fetch.
     */
    orderBy?: account_nftOrderByWithRelationInput | account_nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_nfts.
     */
    cursor?: account_nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_nfts.
     */
    distinct?: Account_nftScalarFieldEnum | Account_nftScalarFieldEnum[]
  }

  /**
   * account_nft findFirstOrThrow
   */
  export type account_nftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * Filter, which account_nft to fetch.
     */
    where?: account_nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nfts to fetch.
     */
    orderBy?: account_nftOrderByWithRelationInput | account_nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_nfts.
     */
    cursor?: account_nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nfts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_nfts.
     */
    distinct?: Account_nftScalarFieldEnum | Account_nftScalarFieldEnum[]
  }

  /**
   * account_nft findMany
   */
  export type account_nftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * Filter, which account_nfts to fetch.
     */
    where?: account_nftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nfts to fetch.
     */
    orderBy?: account_nftOrderByWithRelationInput | account_nftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_nfts.
     */
    cursor?: account_nftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nfts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nfts.
     */
    skip?: number
    distinct?: Account_nftScalarFieldEnum | Account_nftScalarFieldEnum[]
  }

  /**
   * account_nft create
   */
  export type account_nftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * The data needed to create a account_nft.
     */
    data: XOR<account_nftCreateInput, account_nftUncheckedCreateInput>
  }

  /**
   * account_nft createMany
   */
  export type account_nftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many account_nfts.
     */
    data: account_nftCreateManyInput | account_nftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account_nft createManyAndReturn
   */
  export type account_nftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * The data used to create many account_nfts.
     */
    data: account_nftCreateManyInput | account_nftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account_nft update
   */
  export type account_nftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * The data needed to update a account_nft.
     */
    data: XOR<account_nftUpdateInput, account_nftUncheckedUpdateInput>
    /**
     * Choose, which account_nft to update.
     */
    where: account_nftWhereUniqueInput
  }

  /**
   * account_nft updateMany
   */
  export type account_nftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update account_nfts.
     */
    data: XOR<account_nftUpdateManyMutationInput, account_nftUncheckedUpdateManyInput>
    /**
     * Filter which account_nfts to update
     */
    where?: account_nftWhereInput
    /**
     * Limit how many account_nfts to update.
     */
    limit?: number
  }

  /**
   * account_nft updateManyAndReturn
   */
  export type account_nftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * The data used to update account_nfts.
     */
    data: XOR<account_nftUpdateManyMutationInput, account_nftUncheckedUpdateManyInput>
    /**
     * Filter which account_nfts to update
     */
    where?: account_nftWhereInput
    /**
     * Limit how many account_nfts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * account_nft upsert
   */
  export type account_nftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * The filter to search for the account_nft to update in case it exists.
     */
    where: account_nftWhereUniqueInput
    /**
     * In case the account_nft found by the `where` argument doesn't exist, create a new account_nft with this data.
     */
    create: XOR<account_nftCreateInput, account_nftUncheckedCreateInput>
    /**
     * In case the account_nft was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_nftUpdateInput, account_nftUncheckedUpdateInput>
  }

  /**
   * account_nft delete
   */
  export type account_nftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
    /**
     * Filter which account_nft to delete.
     */
    where: account_nftWhereUniqueInput
  }

  /**
   * account_nft deleteMany
   */
  export type account_nftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_nfts to delete
     */
    where?: account_nftWhereInput
    /**
     * Limit how many account_nfts to delete.
     */
    limit?: number
  }

  /**
   * account_nft.transactions
   */
  export type account_nft$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    where?: account_nft_transactionWhereInput
    orderBy?: account_nft_transactionOrderByWithRelationInput | account_nft_transactionOrderByWithRelationInput[]
    cursor?: account_nft_transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_nft_transactionScalarFieldEnum | Account_nft_transactionScalarFieldEnum[]
  }

  /**
   * account_nft without action
   */
  export type account_nftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft
     */
    select?: account_nftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft
     */
    omit?: account_nftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nftInclude<ExtArgs> | null
  }


  /**
   * Model account_nft_transaction
   */

  export type AggregateAccount_nft_transaction = {
    _count: Account_nft_transactionCountAggregateOutputType | null
    _avg: Account_nft_transactionAvgAggregateOutputType | null
    _sum: Account_nft_transactionSumAggregateOutputType | null
    _min: Account_nft_transactionMinAggregateOutputType | null
    _max: Account_nft_transactionMaxAggregateOutputType | null
  }

  export type Account_nft_transactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type Account_nft_transactionSumAggregateOutputType = {
    amount: number | null
  }

  export type Account_nft_transactionMinAggregateOutputType = {
    id: string | null
    amount: number | null
    account_nftAccountId: string | null
    account_nftNftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Account_nft_transactionMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    account_nftAccountId: string | null
    account_nftNftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Account_nft_transactionCountAggregateOutputType = {
    id: number
    amount: number
    account_nftAccountId: number
    account_nftNftId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Account_nft_transactionAvgAggregateInputType = {
    amount?: true
  }

  export type Account_nft_transactionSumAggregateInputType = {
    amount?: true
  }

  export type Account_nft_transactionMinAggregateInputType = {
    id?: true
    amount?: true
    account_nftAccountId?: true
    account_nftNftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Account_nft_transactionMaxAggregateInputType = {
    id?: true
    amount?: true
    account_nftAccountId?: true
    account_nftNftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Account_nft_transactionCountAggregateInputType = {
    id?: true
    amount?: true
    account_nftAccountId?: true
    account_nftNftId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Account_nft_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_nft_transaction to aggregate.
     */
    where?: account_nft_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nft_transactions to fetch.
     */
    orderBy?: account_nft_transactionOrderByWithRelationInput | account_nft_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_nft_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nft_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nft_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_nft_transactions
    **/
    _count?: true | Account_nft_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_nft_transactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_nft_transactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_nft_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_nft_transactionMaxAggregateInputType
  }

  export type GetAccount_nft_transactionAggregateType<T extends Account_nft_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_nft_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_nft_transaction[P]>
      : GetScalarType<T[P], AggregateAccount_nft_transaction[P]>
  }




  export type account_nft_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_nft_transactionWhereInput
    orderBy?: account_nft_transactionOrderByWithAggregationInput | account_nft_transactionOrderByWithAggregationInput[]
    by: Account_nft_transactionScalarFieldEnum[] | Account_nft_transactionScalarFieldEnum
    having?: account_nft_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_nft_transactionCountAggregateInputType | true
    _avg?: Account_nft_transactionAvgAggregateInputType
    _sum?: Account_nft_transactionSumAggregateInputType
    _min?: Account_nft_transactionMinAggregateInputType
    _max?: Account_nft_transactionMaxAggregateInputType
  }

  export type Account_nft_transactionGroupByOutputType = {
    id: string
    amount: number
    account_nftAccountId: string
    account_nftNftId: string
    createdAt: Date
    updatedAt: Date
    _count: Account_nft_transactionCountAggregateOutputType | null
    _avg: Account_nft_transactionAvgAggregateOutputType | null
    _sum: Account_nft_transactionSumAggregateOutputType | null
    _min: Account_nft_transactionMinAggregateOutputType | null
    _max: Account_nft_transactionMaxAggregateOutputType | null
  }

  type GetAccount_nft_transactionGroupByPayload<T extends account_nft_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Account_nft_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_nft_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_nft_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Account_nft_transactionGroupByOutputType[P]>
        }
      >
    >


  export type account_nft_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    account_nftAccountId?: boolean
    account_nftNftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account_nft?: boolean | account_nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_nft_transaction"]>

  export type account_nft_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    account_nftAccountId?: boolean
    account_nftNftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account_nft?: boolean | account_nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_nft_transaction"]>

  export type account_nft_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    account_nftAccountId?: boolean
    account_nftNftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account_nft?: boolean | account_nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_nft_transaction"]>

  export type account_nft_transactionSelectScalar = {
    id?: boolean
    amount?: boolean
    account_nftAccountId?: boolean
    account_nftNftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type account_nft_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "account_nftAccountId" | "account_nftNftId" | "createdAt" | "updatedAt", ExtArgs["result"]["account_nft_transaction"]>
  export type account_nft_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_nft?: boolean | account_nftDefaultArgs<ExtArgs>
  }
  export type account_nft_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_nft?: boolean | account_nftDefaultArgs<ExtArgs>
  }
  export type account_nft_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account_nft?: boolean | account_nftDefaultArgs<ExtArgs>
  }

  export type $account_nft_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account_nft_transaction"
    objects: {
      account_nft: Prisma.$account_nftPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      account_nftAccountId: string
      account_nftNftId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account_nft_transaction"]>
    composites: {}
  }

  type account_nft_transactionGetPayload<S extends boolean | null | undefined | account_nft_transactionDefaultArgs> = $Result.GetResult<Prisma.$account_nft_transactionPayload, S>

  type account_nft_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<account_nft_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Account_nft_transactionCountAggregateInputType | true
    }

  export interface account_nft_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account_nft_transaction'], meta: { name: 'account_nft_transaction' } }
    /**
     * Find zero or one Account_nft_transaction that matches the filter.
     * @param {account_nft_transactionFindUniqueArgs} args - Arguments to find a Account_nft_transaction
     * @example
     * // Get one Account_nft_transaction
     * const account_nft_transaction = await prisma.account_nft_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends account_nft_transactionFindUniqueArgs>(args: SelectSubset<T, account_nft_transactionFindUniqueArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account_nft_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {account_nft_transactionFindUniqueOrThrowArgs} args - Arguments to find a Account_nft_transaction
     * @example
     * // Get one Account_nft_transaction
     * const account_nft_transaction = await prisma.account_nft_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends account_nft_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, account_nft_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_nft_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nft_transactionFindFirstArgs} args - Arguments to find a Account_nft_transaction
     * @example
     * // Get one Account_nft_transaction
     * const account_nft_transaction = await prisma.account_nft_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends account_nft_transactionFindFirstArgs>(args?: SelectSubset<T, account_nft_transactionFindFirstArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_nft_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nft_transactionFindFirstOrThrowArgs} args - Arguments to find a Account_nft_transaction
     * @example
     * // Get one Account_nft_transaction
     * const account_nft_transaction = await prisma.account_nft_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends account_nft_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, account_nft_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Account_nft_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nft_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_nft_transactions
     * const account_nft_transactions = await prisma.account_nft_transaction.findMany()
     * 
     * // Get first 10 Account_nft_transactions
     * const account_nft_transactions = await prisma.account_nft_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const account_nft_transactionWithIdOnly = await prisma.account_nft_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends account_nft_transactionFindManyArgs>(args?: SelectSubset<T, account_nft_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account_nft_transaction.
     * @param {account_nft_transactionCreateArgs} args - Arguments to create a Account_nft_transaction.
     * @example
     * // Create one Account_nft_transaction
     * const Account_nft_transaction = await prisma.account_nft_transaction.create({
     *   data: {
     *     // ... data to create a Account_nft_transaction
     *   }
     * })
     * 
     */
    create<T extends account_nft_transactionCreateArgs>(args: SelectSubset<T, account_nft_transactionCreateArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Account_nft_transactions.
     * @param {account_nft_transactionCreateManyArgs} args - Arguments to create many Account_nft_transactions.
     * @example
     * // Create many Account_nft_transactions
     * const account_nft_transaction = await prisma.account_nft_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends account_nft_transactionCreateManyArgs>(args?: SelectSubset<T, account_nft_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Account_nft_transactions and returns the data saved in the database.
     * @param {account_nft_transactionCreateManyAndReturnArgs} args - Arguments to create many Account_nft_transactions.
     * @example
     * // Create many Account_nft_transactions
     * const account_nft_transaction = await prisma.account_nft_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Account_nft_transactions and only return the `id`
     * const account_nft_transactionWithIdOnly = await prisma.account_nft_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends account_nft_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, account_nft_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account_nft_transaction.
     * @param {account_nft_transactionDeleteArgs} args - Arguments to delete one Account_nft_transaction.
     * @example
     * // Delete one Account_nft_transaction
     * const Account_nft_transaction = await prisma.account_nft_transaction.delete({
     *   where: {
     *     // ... filter to delete one Account_nft_transaction
     *   }
     * })
     * 
     */
    delete<T extends account_nft_transactionDeleteArgs>(args: SelectSubset<T, account_nft_transactionDeleteArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account_nft_transaction.
     * @param {account_nft_transactionUpdateArgs} args - Arguments to update one Account_nft_transaction.
     * @example
     * // Update one Account_nft_transaction
     * const account_nft_transaction = await prisma.account_nft_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends account_nft_transactionUpdateArgs>(args: SelectSubset<T, account_nft_transactionUpdateArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Account_nft_transactions.
     * @param {account_nft_transactionDeleteManyArgs} args - Arguments to filter Account_nft_transactions to delete.
     * @example
     * // Delete a few Account_nft_transactions
     * const { count } = await prisma.account_nft_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends account_nft_transactionDeleteManyArgs>(args?: SelectSubset<T, account_nft_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_nft_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nft_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_nft_transactions
     * const account_nft_transaction = await prisma.account_nft_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends account_nft_transactionUpdateManyArgs>(args: SelectSubset<T, account_nft_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_nft_transactions and returns the data updated in the database.
     * @param {account_nft_transactionUpdateManyAndReturnArgs} args - Arguments to update many Account_nft_transactions.
     * @example
     * // Update many Account_nft_transactions
     * const account_nft_transaction = await prisma.account_nft_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Account_nft_transactions and only return the `id`
     * const account_nft_transactionWithIdOnly = await prisma.account_nft_transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends account_nft_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, account_nft_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account_nft_transaction.
     * @param {account_nft_transactionUpsertArgs} args - Arguments to update or create a Account_nft_transaction.
     * @example
     * // Update or create a Account_nft_transaction
     * const account_nft_transaction = await prisma.account_nft_transaction.upsert({
     *   create: {
     *     // ... data to create a Account_nft_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_nft_transaction we want to update
     *   }
     * })
     */
    upsert<T extends account_nft_transactionUpsertArgs>(args: SelectSubset<T, account_nft_transactionUpsertArgs<ExtArgs>>): Prisma__account_nft_transactionClient<$Result.GetResult<Prisma.$account_nft_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Account_nft_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nft_transactionCountArgs} args - Arguments to filter Account_nft_transactions to count.
     * @example
     * // Count the number of Account_nft_transactions
     * const count = await prisma.account_nft_transaction.count({
     *   where: {
     *     // ... the filter for the Account_nft_transactions we want to count
     *   }
     * })
    **/
    count<T extends account_nft_transactionCountArgs>(
      args?: Subset<T, account_nft_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_nft_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_nft_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_nft_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Account_nft_transactionAggregateArgs>(args: Subset<T, Account_nft_transactionAggregateArgs>): Prisma.PrismaPromise<GetAccount_nft_transactionAggregateType<T>>

    /**
     * Group by Account_nft_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_nft_transactionGroupByArgs} args - Group by arguments.
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
      T extends account_nft_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: account_nft_transactionGroupByArgs['orderBy'] }
        : { orderBy?: account_nft_transactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, account_nft_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_nft_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account_nft_transaction model
   */
  readonly fields: account_nft_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account_nft_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__account_nft_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account_nft<T extends account_nftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, account_nftDefaultArgs<ExtArgs>>): Prisma__account_nftClient<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the account_nft_transaction model
   */
  interface account_nft_transactionFieldRefs {
    readonly id: FieldRef<"account_nft_transaction", 'String'>
    readonly amount: FieldRef<"account_nft_transaction", 'Float'>
    readonly account_nftAccountId: FieldRef<"account_nft_transaction", 'String'>
    readonly account_nftNftId: FieldRef<"account_nft_transaction", 'String'>
    readonly createdAt: FieldRef<"account_nft_transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"account_nft_transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account_nft_transaction findUnique
   */
  export type account_nft_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * Filter, which account_nft_transaction to fetch.
     */
    where: account_nft_transactionWhereUniqueInput
  }

  /**
   * account_nft_transaction findUniqueOrThrow
   */
  export type account_nft_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * Filter, which account_nft_transaction to fetch.
     */
    where: account_nft_transactionWhereUniqueInput
  }

  /**
   * account_nft_transaction findFirst
   */
  export type account_nft_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * Filter, which account_nft_transaction to fetch.
     */
    where?: account_nft_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nft_transactions to fetch.
     */
    orderBy?: account_nft_transactionOrderByWithRelationInput | account_nft_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_nft_transactions.
     */
    cursor?: account_nft_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nft_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nft_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_nft_transactions.
     */
    distinct?: Account_nft_transactionScalarFieldEnum | Account_nft_transactionScalarFieldEnum[]
  }

  /**
   * account_nft_transaction findFirstOrThrow
   */
  export type account_nft_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * Filter, which account_nft_transaction to fetch.
     */
    where?: account_nft_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nft_transactions to fetch.
     */
    orderBy?: account_nft_transactionOrderByWithRelationInput | account_nft_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_nft_transactions.
     */
    cursor?: account_nft_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nft_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nft_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_nft_transactions.
     */
    distinct?: Account_nft_transactionScalarFieldEnum | Account_nft_transactionScalarFieldEnum[]
  }

  /**
   * account_nft_transaction findMany
   */
  export type account_nft_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * Filter, which account_nft_transactions to fetch.
     */
    where?: account_nft_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_nft_transactions to fetch.
     */
    orderBy?: account_nft_transactionOrderByWithRelationInput | account_nft_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_nft_transactions.
     */
    cursor?: account_nft_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_nft_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_nft_transactions.
     */
    skip?: number
    distinct?: Account_nft_transactionScalarFieldEnum | Account_nft_transactionScalarFieldEnum[]
  }

  /**
   * account_nft_transaction create
   */
  export type account_nft_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a account_nft_transaction.
     */
    data: XOR<account_nft_transactionCreateInput, account_nft_transactionUncheckedCreateInput>
  }

  /**
   * account_nft_transaction createMany
   */
  export type account_nft_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many account_nft_transactions.
     */
    data: account_nft_transactionCreateManyInput | account_nft_transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account_nft_transaction createManyAndReturn
   */
  export type account_nft_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many account_nft_transactions.
     */
    data: account_nft_transactionCreateManyInput | account_nft_transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account_nft_transaction update
   */
  export type account_nft_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a account_nft_transaction.
     */
    data: XOR<account_nft_transactionUpdateInput, account_nft_transactionUncheckedUpdateInput>
    /**
     * Choose, which account_nft_transaction to update.
     */
    where: account_nft_transactionWhereUniqueInput
  }

  /**
   * account_nft_transaction updateMany
   */
  export type account_nft_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update account_nft_transactions.
     */
    data: XOR<account_nft_transactionUpdateManyMutationInput, account_nft_transactionUncheckedUpdateManyInput>
    /**
     * Filter which account_nft_transactions to update
     */
    where?: account_nft_transactionWhereInput
    /**
     * Limit how many account_nft_transactions to update.
     */
    limit?: number
  }

  /**
   * account_nft_transaction updateManyAndReturn
   */
  export type account_nft_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * The data used to update account_nft_transactions.
     */
    data: XOR<account_nft_transactionUpdateManyMutationInput, account_nft_transactionUncheckedUpdateManyInput>
    /**
     * Filter which account_nft_transactions to update
     */
    where?: account_nft_transactionWhereInput
    /**
     * Limit how many account_nft_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * account_nft_transaction upsert
   */
  export type account_nft_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the account_nft_transaction to update in case it exists.
     */
    where: account_nft_transactionWhereUniqueInput
    /**
     * In case the account_nft_transaction found by the `where` argument doesn't exist, create a new account_nft_transaction with this data.
     */
    create: XOR<account_nft_transactionCreateInput, account_nft_transactionUncheckedCreateInput>
    /**
     * In case the account_nft_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_nft_transactionUpdateInput, account_nft_transactionUncheckedUpdateInput>
  }

  /**
   * account_nft_transaction delete
   */
  export type account_nft_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
    /**
     * Filter which account_nft_transaction to delete.
     */
    where: account_nft_transactionWhereUniqueInput
  }

  /**
   * account_nft_transaction deleteMany
   */
  export type account_nft_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_nft_transactions to delete
     */
    where?: account_nft_transactionWhereInput
    /**
     * Limit how many account_nft_transactions to delete.
     */
    limit?: number
  }

  /**
   * account_nft_transaction without action
   */
  export type account_nft_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_nft_transaction
     */
    select?: account_nft_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_nft_transaction
     */
    omit?: account_nft_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_nft_transactionInclude<ExtArgs> | null
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


  export const ReferralScalarFieldEnum: {
    id: 'id',
    value: 'value',
    accountId: 'accountId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferralScalarFieldEnum = (typeof ReferralScalarFieldEnum)[keyof typeof ReferralScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    balance: 'balance',
    username: 'username',
    language: 'language',
    telegramId: 'telegramId',
    referredById: 'referredById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const NftScalarFieldEnum: {
    id: 'id',
    title: 'title',
    sku: 'sku',
    price: 'price',
    roi: 'roi',
    iterations: 'iterations',
    isSoldOut: 'isSoldOut',
    isNew: 'isNew',
    isHot: 'isHot',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NftScalarFieldEnum = (typeof NftScalarFieldEnum)[keyof typeof NftScalarFieldEnum]


  export const Account_nftScalarFieldEnum: {
    accountId: 'accountId',
    nftId: 'nftId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Account_nftScalarFieldEnum = (typeof Account_nftScalarFieldEnum)[keyof typeof Account_nftScalarFieldEnum]


  export const Account_nft_transactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    account_nftAccountId: 'account_nftAccountId',
    account_nftNftId: 'account_nftNftId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Account_nft_transactionScalarFieldEnum = (typeof Account_nft_transactionScalarFieldEnum)[keyof typeof Account_nft_transactionScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'Language[]'
   */
  export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type referralWhereInput = {
    AND?: referralWhereInput | referralWhereInput[]
    OR?: referralWhereInput[]
    NOT?: referralWhereInput | referralWhereInput[]
    id?: StringFilter<"referral"> | string
    value?: StringFilter<"referral"> | string
    accountId?: StringFilter<"referral"> | string
    createdAt?: DateTimeFilter<"referral"> | Date | string
    updatedAt?: DateTimeFilter<"referral"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    accounts?: AccountListRelationFilter
  }

  export type referralOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: accountOrderByWithRelationInput
    accounts?: accountOrderByRelationAggregateInput
  }

  export type referralWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    value?: string
    accountId?: string
    AND?: referralWhereInput | referralWhereInput[]
    OR?: referralWhereInput[]
    NOT?: referralWhereInput | referralWhereInput[]
    createdAt?: DateTimeFilter<"referral"> | Date | string
    updatedAt?: DateTimeFilter<"referral"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    accounts?: AccountListRelationFilter
  }, "id" | "accountId" | "value">

  export type referralOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: referralCountOrderByAggregateInput
    _max?: referralMaxOrderByAggregateInput
    _min?: referralMinOrderByAggregateInput
  }

  export type referralScalarWhereWithAggregatesInput = {
    AND?: referralScalarWhereWithAggregatesInput | referralScalarWhereWithAggregatesInput[]
    OR?: referralScalarWhereWithAggregatesInput[]
    NOT?: referralScalarWhereWithAggregatesInput | referralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"referral"> | string
    value?: StringWithAggregatesFilter<"referral"> | string
    accountId?: StringWithAggregatesFilter<"referral"> | string
    createdAt?: DateTimeWithAggregatesFilter<"referral"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"referral"> | Date | string
  }

  export type accountWhereInput = {
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    id?: StringFilter<"account"> | string
    balance?: FloatFilter<"account"> | number
    username?: StringFilter<"account"> | string
    language?: EnumLanguageFilter<"account"> | $Enums.Language
    telegramId?: StringNullableFilter<"account"> | string | null
    referredById?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    referral?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    referredBy?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    nfts?: Account_nftListRelationFilter
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrderInput | SortOrder
    referredById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referral?: referralOrderByWithRelationInput
    referredBy?: referralOrderByWithRelationInput
    nfts?: account_nftOrderByRelationAggregateInput
  }

  export type accountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: accountWhereInput | accountWhereInput[]
    OR?: accountWhereInput[]
    NOT?: accountWhereInput | accountWhereInput[]
    balance?: FloatFilter<"account"> | number
    language?: EnumLanguageFilter<"account"> | $Enums.Language
    telegramId?: StringNullableFilter<"account"> | string | null
    referredById?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    referral?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    referredBy?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    nfts?: Account_nftListRelationFilter
  }, "id" | "username">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrderInput | SortOrder
    referredById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: accountCountOrderByAggregateInput
    _avg?: accountAvgOrderByAggregateInput
    _max?: accountMaxOrderByAggregateInput
    _min?: accountMinOrderByAggregateInput
    _sum?: accountSumOrderByAggregateInput
  }

  export type accountScalarWhereWithAggregatesInput = {
    AND?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    OR?: accountScalarWhereWithAggregatesInput[]
    NOT?: accountScalarWhereWithAggregatesInput | accountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"account"> | string
    balance?: FloatWithAggregatesFilter<"account"> | number
    username?: StringWithAggregatesFilter<"account"> | string
    language?: EnumLanguageWithAggregatesFilter<"account"> | $Enums.Language
    telegramId?: StringNullableWithAggregatesFilter<"account"> | string | null
    referredById?: StringNullableWithAggregatesFilter<"account"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"account"> | Date | string
  }

  export type nftWhereInput = {
    AND?: nftWhereInput | nftWhereInput[]
    OR?: nftWhereInput[]
    NOT?: nftWhereInput | nftWhereInput[]
    id?: StringFilter<"nft"> | string
    title?: StringFilter<"nft"> | string
    sku?: StringFilter<"nft"> | string
    price?: FloatFilter<"nft"> | number
    roi?: FloatFilter<"nft"> | number
    iterations?: IntFilter<"nft"> | number
    isSoldOut?: BoolFilter<"nft"> | boolean
    isNew?: BoolFilter<"nft"> | boolean
    isHot?: BoolFilter<"nft"> | boolean
    isArchived?: BoolFilter<"nft"> | boolean
    createdAt?: DateTimeFilter<"nft"> | Date | string
    updatedAt?: DateTimeFilter<"nft"> | Date | string
    accounts?: Account_nftListRelationFilter
  }

  export type nftOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: account_nftOrderByRelationAggregateInput
  }

  export type nftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: nftWhereInput | nftWhereInput[]
    OR?: nftWhereInput[]
    NOT?: nftWhereInput | nftWhereInput[]
    title?: StringFilter<"nft"> | string
    sku?: StringFilter<"nft"> | string
    price?: FloatFilter<"nft"> | number
    roi?: FloatFilter<"nft"> | number
    iterations?: IntFilter<"nft"> | number
    isSoldOut?: BoolFilter<"nft"> | boolean
    isNew?: BoolFilter<"nft"> | boolean
    isHot?: BoolFilter<"nft"> | boolean
    isArchived?: BoolFilter<"nft"> | boolean
    createdAt?: DateTimeFilter<"nft"> | Date | string
    updatedAt?: DateTimeFilter<"nft"> | Date | string
    accounts?: Account_nftListRelationFilter
  }, "id">

  export type nftOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: nftCountOrderByAggregateInput
    _avg?: nftAvgOrderByAggregateInput
    _max?: nftMaxOrderByAggregateInput
    _min?: nftMinOrderByAggregateInput
    _sum?: nftSumOrderByAggregateInput
  }

  export type nftScalarWhereWithAggregatesInput = {
    AND?: nftScalarWhereWithAggregatesInput | nftScalarWhereWithAggregatesInput[]
    OR?: nftScalarWhereWithAggregatesInput[]
    NOT?: nftScalarWhereWithAggregatesInput | nftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"nft"> | string
    title?: StringWithAggregatesFilter<"nft"> | string
    sku?: StringWithAggregatesFilter<"nft"> | string
    price?: FloatWithAggregatesFilter<"nft"> | number
    roi?: FloatWithAggregatesFilter<"nft"> | number
    iterations?: IntWithAggregatesFilter<"nft"> | number
    isSoldOut?: BoolWithAggregatesFilter<"nft"> | boolean
    isNew?: BoolWithAggregatesFilter<"nft"> | boolean
    isHot?: BoolWithAggregatesFilter<"nft"> | boolean
    isArchived?: BoolWithAggregatesFilter<"nft"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"nft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"nft"> | Date | string
  }

  export type account_nftWhereInput = {
    AND?: account_nftWhereInput | account_nftWhereInput[]
    OR?: account_nftWhereInput[]
    NOT?: account_nftWhereInput | account_nftWhereInput[]
    accountId?: StringFilter<"account_nft"> | string
    nftId?: StringFilter<"account_nft"> | string
    createdAt?: DateTimeFilter<"account_nft"> | Date | string
    updatedAt?: DateTimeFilter<"account_nft"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    nft?: XOR<NftScalarRelationFilter, nftWhereInput>
    transactions?: Account_nft_transactionListRelationFilter
  }

  export type account_nftOrderByWithRelationInput = {
    accountId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: accountOrderByWithRelationInput
    nft?: nftOrderByWithRelationInput
    transactions?: account_nft_transactionOrderByRelationAggregateInput
  }

  export type account_nftWhereUniqueInput = Prisma.AtLeast<{
    accountId_nftId?: account_nftAccountIdNftIdCompoundUniqueInput
    AND?: account_nftWhereInput | account_nftWhereInput[]
    OR?: account_nftWhereInput[]
    NOT?: account_nftWhereInput | account_nftWhereInput[]
    accountId?: StringFilter<"account_nft"> | string
    nftId?: StringFilter<"account_nft"> | string
    createdAt?: DateTimeFilter<"account_nft"> | Date | string
    updatedAt?: DateTimeFilter<"account_nft"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    nft?: XOR<NftScalarRelationFilter, nftWhereInput>
    transactions?: Account_nft_transactionListRelationFilter
  }, "accountId_nftId">

  export type account_nftOrderByWithAggregationInput = {
    accountId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: account_nftCountOrderByAggregateInput
    _max?: account_nftMaxOrderByAggregateInput
    _min?: account_nftMinOrderByAggregateInput
  }

  export type account_nftScalarWhereWithAggregatesInput = {
    AND?: account_nftScalarWhereWithAggregatesInput | account_nftScalarWhereWithAggregatesInput[]
    OR?: account_nftScalarWhereWithAggregatesInput[]
    NOT?: account_nftScalarWhereWithAggregatesInput | account_nftScalarWhereWithAggregatesInput[]
    accountId?: StringWithAggregatesFilter<"account_nft"> | string
    nftId?: StringWithAggregatesFilter<"account_nft"> | string
    createdAt?: DateTimeWithAggregatesFilter<"account_nft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"account_nft"> | Date | string
  }

  export type account_nft_transactionWhereInput = {
    AND?: account_nft_transactionWhereInput | account_nft_transactionWhereInput[]
    OR?: account_nft_transactionWhereInput[]
    NOT?: account_nft_transactionWhereInput | account_nft_transactionWhereInput[]
    id?: StringFilter<"account_nft_transaction"> | string
    amount?: FloatFilter<"account_nft_transaction"> | number
    account_nftAccountId?: StringFilter<"account_nft_transaction"> | string
    account_nftNftId?: StringFilter<"account_nft_transaction"> | string
    createdAt?: DateTimeFilter<"account_nft_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"account_nft_transaction"> | Date | string
    account_nft?: XOR<Account_nftScalarRelationFilter, account_nftWhereInput>
  }

  export type account_nft_transactionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    account_nftAccountId?: SortOrder
    account_nftNftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account_nft?: account_nftOrderByWithRelationInput
  }

  export type account_nft_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: account_nft_transactionWhereInput | account_nft_transactionWhereInput[]
    OR?: account_nft_transactionWhereInput[]
    NOT?: account_nft_transactionWhereInput | account_nft_transactionWhereInput[]
    amount?: FloatFilter<"account_nft_transaction"> | number
    account_nftAccountId?: StringFilter<"account_nft_transaction"> | string
    account_nftNftId?: StringFilter<"account_nft_transaction"> | string
    createdAt?: DateTimeFilter<"account_nft_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"account_nft_transaction"> | Date | string
    account_nft?: XOR<Account_nftScalarRelationFilter, account_nftWhereInput>
  }, "id">

  export type account_nft_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    account_nftAccountId?: SortOrder
    account_nftNftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: account_nft_transactionCountOrderByAggregateInput
    _avg?: account_nft_transactionAvgOrderByAggregateInput
    _max?: account_nft_transactionMaxOrderByAggregateInput
    _min?: account_nft_transactionMinOrderByAggregateInput
    _sum?: account_nft_transactionSumOrderByAggregateInput
  }

  export type account_nft_transactionScalarWhereWithAggregatesInput = {
    AND?: account_nft_transactionScalarWhereWithAggregatesInput | account_nft_transactionScalarWhereWithAggregatesInput[]
    OR?: account_nft_transactionScalarWhereWithAggregatesInput[]
    NOT?: account_nft_transactionScalarWhereWithAggregatesInput | account_nft_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"account_nft_transaction"> | string
    amount?: FloatWithAggregatesFilter<"account_nft_transaction"> | number
    account_nftAccountId?: StringWithAggregatesFilter<"account_nft_transaction"> | string
    account_nftNftId?: StringWithAggregatesFilter<"account_nft_transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"account_nft_transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"account_nft_transaction"> | Date | string
  }

  export type referralCreateInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutReferralInput
    accounts?: accountCreateNestedManyWithoutReferredByInput
  }

  export type referralUncheckedCreateInput = {
    id?: string
    value: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: accountUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type referralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutReferralNestedInput
    accounts?: accountUpdateManyWithoutReferredByNestedInput
  }

  export type referralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type referralCreateManyInput = {
    id?: string
    value: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type referralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountCreateInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    referredBy?: referralCreateNestedOneWithoutAccountsInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountCreateManyInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nftCreateInput = {
    id?: string
    title: string
    sku: string
    price: number
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: account_nftCreateNestedManyWithoutNftInput
  }

  export type nftUncheckedCreateInput = {
    id?: string
    title: string
    sku: string
    price: number
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: account_nftUncheckedCreateNestedManyWithoutNftInput
  }

  export type nftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: account_nftUpdateManyWithoutNftNestedInput
  }

  export type nftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: account_nftUncheckedUpdateManyWithoutNftNestedInput
  }

  export type nftCreateManyInput = {
    id?: string
    title: string
    sku: string
    price: number
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutNftsInput
    nft: nftCreateNestedOneWithoutAccountsInput
    transactions?: account_nft_transactionCreateNestedManyWithoutAccount_nftInput
  }

  export type account_nftUncheckedCreateInput = {
    accountId: string
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: account_nft_transactionUncheckedCreateNestedManyWithoutAccount_nftInput
  }

  export type account_nftUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutNftsNestedInput
    nft?: nftUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: account_nft_transactionUpdateManyWithoutAccount_nftNestedInput
  }

  export type account_nftUncheckedUpdateInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: account_nft_transactionUncheckedUpdateManyWithoutAccount_nftNestedInput
  }

  export type account_nftCreateManyInput = {
    accountId: string
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nftUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftUncheckedUpdateManyInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nft_transactionCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    account_nft: account_nftCreateNestedOneWithoutTransactionsInput
  }

  export type account_nft_transactionUncheckedCreateInput = {
    id?: string
    amount: number
    account_nftAccountId: string
    account_nftNftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nft_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account_nft?: account_nftUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type account_nft_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    account_nftAccountId?: StringFieldUpdateOperationsInput | string
    account_nftNftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nft_transactionCreateManyInput = {
    id?: string
    amount: number
    account_nftAccountId: string
    account_nftNftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nft_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nft_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    account_nftAccountId?: StringFieldUpdateOperationsInput | string
    account_nftNftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type AccountScalarRelationFilter = {
    is?: accountWhereInput
    isNot?: accountWhereInput
  }

  export type AccountListRelationFilter = {
    every?: accountWhereInput
    some?: accountWhereInput
    none?: accountWhereInput
  }

  export type accountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type referralCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referralMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referralMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
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

  export type ReferralNullableScalarRelationFilter = {
    is?: referralWhereInput | null
    isNot?: referralWhereInput | null
  }

  export type Account_nftListRelationFilter = {
    every?: account_nftWhereInput
    some?: account_nftWhereInput
    none?: account_nftWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type account_nftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrder
    referredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type accountMaxOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrder
    referredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountMinOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrder
    referredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type nftCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nftAvgOrderByAggregateInput = {
    price?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
  }

  export type nftMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nftMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nftSumOrderByAggregateInput = {
    price?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NftScalarRelationFilter = {
    is?: nftWhereInput
    isNot?: nftWhereInput
  }

  export type Account_nft_transactionListRelationFilter = {
    every?: account_nft_transactionWhereInput
    some?: account_nft_transactionWhereInput
    none?: account_nft_transactionWhereInput
  }

  export type account_nft_transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type account_nftAccountIdNftIdCompoundUniqueInput = {
    accountId: string
    nftId: string
  }

  export type account_nftCountOrderByAggregateInput = {
    accountId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_nftMaxOrderByAggregateInput = {
    accountId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_nftMinOrderByAggregateInput = {
    accountId?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type Account_nftScalarRelationFilter = {
    is?: account_nftWhereInput
    isNot?: account_nftWhereInput
  }

  export type account_nft_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    account_nftAccountId?: SortOrder
    account_nftNftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_nft_transactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type account_nft_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    account_nftAccountId?: SortOrder
    account_nftNftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_nft_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    account_nftAccountId?: SortOrder
    account_nftNftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_nft_transactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type accountCreateNestedOneWithoutReferralInput = {
    create?: XOR<accountCreateWithoutReferralInput, accountUncheckedCreateWithoutReferralInput>
    connectOrCreate?: accountCreateOrConnectWithoutReferralInput
    connect?: accountWhereUniqueInput
  }

  export type accountCreateNestedManyWithoutReferredByInput = {
    create?: XOR<accountCreateWithoutReferredByInput, accountUncheckedCreateWithoutReferredByInput> | accountCreateWithoutReferredByInput[] | accountUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: accountCreateOrConnectWithoutReferredByInput | accountCreateOrConnectWithoutReferredByInput[]
    createMany?: accountCreateManyReferredByInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type accountUncheckedCreateNestedManyWithoutReferredByInput = {
    create?: XOR<accountCreateWithoutReferredByInput, accountUncheckedCreateWithoutReferredByInput> | accountCreateWithoutReferredByInput[] | accountUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: accountCreateOrConnectWithoutReferredByInput | accountCreateOrConnectWithoutReferredByInput[]
    createMany?: accountCreateManyReferredByInputEnvelope
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type accountUpdateOneRequiredWithoutReferralNestedInput = {
    create?: XOR<accountCreateWithoutReferralInput, accountUncheckedCreateWithoutReferralInput>
    connectOrCreate?: accountCreateOrConnectWithoutReferralInput
    upsert?: accountUpsertWithoutReferralInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutReferralInput, accountUpdateWithoutReferralInput>, accountUncheckedUpdateWithoutReferralInput>
  }

  export type accountUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<accountCreateWithoutReferredByInput, accountUncheckedCreateWithoutReferredByInput> | accountCreateWithoutReferredByInput[] | accountUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: accountCreateOrConnectWithoutReferredByInput | accountCreateOrConnectWithoutReferredByInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutReferredByInput | accountUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: accountCreateManyReferredByInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutReferredByInput | accountUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: accountUpdateManyWithWhereWithoutReferredByInput | accountUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type accountUncheckedUpdateManyWithoutReferredByNestedInput = {
    create?: XOR<accountCreateWithoutReferredByInput, accountUncheckedCreateWithoutReferredByInput> | accountCreateWithoutReferredByInput[] | accountUncheckedCreateWithoutReferredByInput[]
    connectOrCreate?: accountCreateOrConnectWithoutReferredByInput | accountCreateOrConnectWithoutReferredByInput[]
    upsert?: accountUpsertWithWhereUniqueWithoutReferredByInput | accountUpsertWithWhereUniqueWithoutReferredByInput[]
    createMany?: accountCreateManyReferredByInputEnvelope
    set?: accountWhereUniqueInput | accountWhereUniqueInput[]
    disconnect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    delete?: accountWhereUniqueInput | accountWhereUniqueInput[]
    connect?: accountWhereUniqueInput | accountWhereUniqueInput[]
    update?: accountUpdateWithWhereUniqueWithoutReferredByInput | accountUpdateWithWhereUniqueWithoutReferredByInput[]
    updateMany?: accountUpdateManyWithWhereWithoutReferredByInput | accountUpdateManyWithWhereWithoutReferredByInput[]
    deleteMany?: accountScalarWhereInput | accountScalarWhereInput[]
  }

  export type referralCreateNestedOneWithoutAccountInput = {
    create?: XOR<referralCreateWithoutAccountInput, referralUncheckedCreateWithoutAccountInput>
    connectOrCreate?: referralCreateOrConnectWithoutAccountInput
    connect?: referralWhereUniqueInput
  }

  export type referralCreateNestedOneWithoutAccountsInput = {
    create?: XOR<referralCreateWithoutAccountsInput, referralUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: referralCreateOrConnectWithoutAccountsInput
    connect?: referralWhereUniqueInput
  }

  export type account_nftCreateNestedManyWithoutAccountInput = {
    create?: XOR<account_nftCreateWithoutAccountInput, account_nftUncheckedCreateWithoutAccountInput> | account_nftCreateWithoutAccountInput[] | account_nftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutAccountInput | account_nftCreateOrConnectWithoutAccountInput[]
    createMany?: account_nftCreateManyAccountInputEnvelope
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
  }

  export type referralUncheckedCreateNestedOneWithoutAccountInput = {
    create?: XOR<referralCreateWithoutAccountInput, referralUncheckedCreateWithoutAccountInput>
    connectOrCreate?: referralCreateOrConnectWithoutAccountInput
    connect?: referralWhereUniqueInput
  }

  export type account_nftUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<account_nftCreateWithoutAccountInput, account_nftUncheckedCreateWithoutAccountInput> | account_nftCreateWithoutAccountInput[] | account_nftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutAccountInput | account_nftCreateOrConnectWithoutAccountInput[]
    createMany?: account_nftCreateManyAccountInputEnvelope
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLanguageFieldUpdateOperationsInput = {
    set?: $Enums.Language
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type referralUpdateOneWithoutAccountNestedInput = {
    create?: XOR<referralCreateWithoutAccountInput, referralUncheckedCreateWithoutAccountInput>
    connectOrCreate?: referralCreateOrConnectWithoutAccountInput
    upsert?: referralUpsertWithoutAccountInput
    disconnect?: referralWhereInput | boolean
    delete?: referralWhereInput | boolean
    connect?: referralWhereUniqueInput
    update?: XOR<XOR<referralUpdateToOneWithWhereWithoutAccountInput, referralUpdateWithoutAccountInput>, referralUncheckedUpdateWithoutAccountInput>
  }

  export type referralUpdateOneWithoutAccountsNestedInput = {
    create?: XOR<referralCreateWithoutAccountsInput, referralUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: referralCreateOrConnectWithoutAccountsInput
    upsert?: referralUpsertWithoutAccountsInput
    disconnect?: referralWhereInput | boolean
    delete?: referralWhereInput | boolean
    connect?: referralWhereUniqueInput
    update?: XOR<XOR<referralUpdateToOneWithWhereWithoutAccountsInput, referralUpdateWithoutAccountsInput>, referralUncheckedUpdateWithoutAccountsInput>
  }

  export type account_nftUpdateManyWithoutAccountNestedInput = {
    create?: XOR<account_nftCreateWithoutAccountInput, account_nftUncheckedCreateWithoutAccountInput> | account_nftCreateWithoutAccountInput[] | account_nftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutAccountInput | account_nftCreateOrConnectWithoutAccountInput[]
    upsert?: account_nftUpsertWithWhereUniqueWithoutAccountInput | account_nftUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: account_nftCreateManyAccountInputEnvelope
    set?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    disconnect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    delete?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    update?: account_nftUpdateWithWhereUniqueWithoutAccountInput | account_nftUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: account_nftUpdateManyWithWhereWithoutAccountInput | account_nftUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: account_nftScalarWhereInput | account_nftScalarWhereInput[]
  }

  export type referralUncheckedUpdateOneWithoutAccountNestedInput = {
    create?: XOR<referralCreateWithoutAccountInput, referralUncheckedCreateWithoutAccountInput>
    connectOrCreate?: referralCreateOrConnectWithoutAccountInput
    upsert?: referralUpsertWithoutAccountInput
    disconnect?: referralWhereInput | boolean
    delete?: referralWhereInput | boolean
    connect?: referralWhereUniqueInput
    update?: XOR<XOR<referralUpdateToOneWithWhereWithoutAccountInput, referralUpdateWithoutAccountInput>, referralUncheckedUpdateWithoutAccountInput>
  }

  export type account_nftUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<account_nftCreateWithoutAccountInput, account_nftUncheckedCreateWithoutAccountInput> | account_nftCreateWithoutAccountInput[] | account_nftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutAccountInput | account_nftCreateOrConnectWithoutAccountInput[]
    upsert?: account_nftUpsertWithWhereUniqueWithoutAccountInput | account_nftUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: account_nftCreateManyAccountInputEnvelope
    set?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    disconnect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    delete?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    update?: account_nftUpdateWithWhereUniqueWithoutAccountInput | account_nftUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: account_nftUpdateManyWithWhereWithoutAccountInput | account_nftUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: account_nftScalarWhereInput | account_nftScalarWhereInput[]
  }

  export type account_nftCreateNestedManyWithoutNftInput = {
    create?: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput> | account_nftCreateWithoutNftInput[] | account_nftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutNftInput | account_nftCreateOrConnectWithoutNftInput[]
    createMany?: account_nftCreateManyNftInputEnvelope
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
  }

  export type account_nftUncheckedCreateNestedManyWithoutNftInput = {
    create?: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput> | account_nftCreateWithoutNftInput[] | account_nftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutNftInput | account_nftCreateOrConnectWithoutNftInput[]
    createMany?: account_nftCreateManyNftInputEnvelope
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type account_nftUpdateManyWithoutNftNestedInput = {
    create?: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput> | account_nftCreateWithoutNftInput[] | account_nftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutNftInput | account_nftCreateOrConnectWithoutNftInput[]
    upsert?: account_nftUpsertWithWhereUniqueWithoutNftInput | account_nftUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: account_nftCreateManyNftInputEnvelope
    set?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    disconnect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    delete?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    update?: account_nftUpdateWithWhereUniqueWithoutNftInput | account_nftUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: account_nftUpdateManyWithWhereWithoutNftInput | account_nftUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: account_nftScalarWhereInput | account_nftScalarWhereInput[]
  }

  export type account_nftUncheckedUpdateManyWithoutNftNestedInput = {
    create?: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput> | account_nftCreateWithoutNftInput[] | account_nftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutNftInput | account_nftCreateOrConnectWithoutNftInput[]
    upsert?: account_nftUpsertWithWhereUniqueWithoutNftInput | account_nftUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: account_nftCreateManyNftInputEnvelope
    set?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    disconnect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    delete?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
    update?: account_nftUpdateWithWhereUniqueWithoutNftInput | account_nftUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: account_nftUpdateManyWithWhereWithoutNftInput | account_nftUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: account_nftScalarWhereInput | account_nftScalarWhereInput[]
  }

  export type accountCreateNestedOneWithoutNftsInput = {
    create?: XOR<accountCreateWithoutNftsInput, accountUncheckedCreateWithoutNftsInput>
    connectOrCreate?: accountCreateOrConnectWithoutNftsInput
    connect?: accountWhereUniqueInput
  }

  export type nftCreateNestedOneWithoutAccountsInput = {
    create?: XOR<nftCreateWithoutAccountsInput, nftUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: nftCreateOrConnectWithoutAccountsInput
    connect?: nftWhereUniqueInput
  }

  export type account_nft_transactionCreateNestedManyWithoutAccount_nftInput = {
    create?: XOR<account_nft_transactionCreateWithoutAccount_nftInput, account_nft_transactionUncheckedCreateWithoutAccount_nftInput> | account_nft_transactionCreateWithoutAccount_nftInput[] | account_nft_transactionUncheckedCreateWithoutAccount_nftInput[]
    connectOrCreate?: account_nft_transactionCreateOrConnectWithoutAccount_nftInput | account_nft_transactionCreateOrConnectWithoutAccount_nftInput[]
    createMany?: account_nft_transactionCreateManyAccount_nftInputEnvelope
    connect?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
  }

  export type account_nft_transactionUncheckedCreateNestedManyWithoutAccount_nftInput = {
    create?: XOR<account_nft_transactionCreateWithoutAccount_nftInput, account_nft_transactionUncheckedCreateWithoutAccount_nftInput> | account_nft_transactionCreateWithoutAccount_nftInput[] | account_nft_transactionUncheckedCreateWithoutAccount_nftInput[]
    connectOrCreate?: account_nft_transactionCreateOrConnectWithoutAccount_nftInput | account_nft_transactionCreateOrConnectWithoutAccount_nftInput[]
    createMany?: account_nft_transactionCreateManyAccount_nftInputEnvelope
    connect?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
  }

  export type accountUpdateOneRequiredWithoutNftsNestedInput = {
    create?: XOR<accountCreateWithoutNftsInput, accountUncheckedCreateWithoutNftsInput>
    connectOrCreate?: accountCreateOrConnectWithoutNftsInput
    upsert?: accountUpsertWithoutNftsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutNftsInput, accountUpdateWithoutNftsInput>, accountUncheckedUpdateWithoutNftsInput>
  }

  export type nftUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<nftCreateWithoutAccountsInput, nftUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: nftCreateOrConnectWithoutAccountsInput
    upsert?: nftUpsertWithoutAccountsInput
    connect?: nftWhereUniqueInput
    update?: XOR<XOR<nftUpdateToOneWithWhereWithoutAccountsInput, nftUpdateWithoutAccountsInput>, nftUncheckedUpdateWithoutAccountsInput>
  }

  export type account_nft_transactionUpdateManyWithoutAccount_nftNestedInput = {
    create?: XOR<account_nft_transactionCreateWithoutAccount_nftInput, account_nft_transactionUncheckedCreateWithoutAccount_nftInput> | account_nft_transactionCreateWithoutAccount_nftInput[] | account_nft_transactionUncheckedCreateWithoutAccount_nftInput[]
    connectOrCreate?: account_nft_transactionCreateOrConnectWithoutAccount_nftInput | account_nft_transactionCreateOrConnectWithoutAccount_nftInput[]
    upsert?: account_nft_transactionUpsertWithWhereUniqueWithoutAccount_nftInput | account_nft_transactionUpsertWithWhereUniqueWithoutAccount_nftInput[]
    createMany?: account_nft_transactionCreateManyAccount_nftInputEnvelope
    set?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    disconnect?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    delete?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    connect?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    update?: account_nft_transactionUpdateWithWhereUniqueWithoutAccount_nftInput | account_nft_transactionUpdateWithWhereUniqueWithoutAccount_nftInput[]
    updateMany?: account_nft_transactionUpdateManyWithWhereWithoutAccount_nftInput | account_nft_transactionUpdateManyWithWhereWithoutAccount_nftInput[]
    deleteMany?: account_nft_transactionScalarWhereInput | account_nft_transactionScalarWhereInput[]
  }

  export type account_nft_transactionUncheckedUpdateManyWithoutAccount_nftNestedInput = {
    create?: XOR<account_nft_transactionCreateWithoutAccount_nftInput, account_nft_transactionUncheckedCreateWithoutAccount_nftInput> | account_nft_transactionCreateWithoutAccount_nftInput[] | account_nft_transactionUncheckedCreateWithoutAccount_nftInput[]
    connectOrCreate?: account_nft_transactionCreateOrConnectWithoutAccount_nftInput | account_nft_transactionCreateOrConnectWithoutAccount_nftInput[]
    upsert?: account_nft_transactionUpsertWithWhereUniqueWithoutAccount_nftInput | account_nft_transactionUpsertWithWhereUniqueWithoutAccount_nftInput[]
    createMany?: account_nft_transactionCreateManyAccount_nftInputEnvelope
    set?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    disconnect?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    delete?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    connect?: account_nft_transactionWhereUniqueInput | account_nft_transactionWhereUniqueInput[]
    update?: account_nft_transactionUpdateWithWhereUniqueWithoutAccount_nftInput | account_nft_transactionUpdateWithWhereUniqueWithoutAccount_nftInput[]
    updateMany?: account_nft_transactionUpdateManyWithWhereWithoutAccount_nftInput | account_nft_transactionUpdateManyWithWhereWithoutAccount_nftInput[]
    deleteMany?: account_nft_transactionScalarWhereInput | account_nft_transactionScalarWhereInput[]
  }

  export type account_nftCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<account_nftCreateWithoutTransactionsInput, account_nftUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: account_nftCreateOrConnectWithoutTransactionsInput
    connect?: account_nftWhereUniqueInput
  }

  export type account_nftUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<account_nftCreateWithoutTransactionsInput, account_nftUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: account_nftCreateOrConnectWithoutTransactionsInput
    upsert?: account_nftUpsertWithoutTransactionsInput
    connect?: account_nftWhereUniqueInput
    update?: XOR<XOR<account_nftUpdateToOneWithWhereWithoutTransactionsInput, account_nftUpdateWithoutTransactionsInput>, account_nftUncheckedUpdateWithoutTransactionsInput>
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

  export type NestedEnumLanguageFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageFilter<$PrismaModel> | $Enums.Language
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumLanguageWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Language | EnumLanguageFieldRefInput<$PrismaModel>
    in?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    notIn?: $Enums.Language[] | ListEnumLanguageFieldRefInput<$PrismaModel>
    not?: NestedEnumLanguageWithAggregatesFilter<$PrismaModel> | $Enums.Language
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLanguageFilter<$PrismaModel>
    _max?: NestedEnumLanguageFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type accountCreateWithoutReferralInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: referralCreateNestedOneWithoutAccountsInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutReferralInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutReferralInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutReferralInput, accountUncheckedCreateWithoutReferralInput>
  }

  export type accountCreateWithoutReferredByInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutReferredByInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutReferredByInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutReferredByInput, accountUncheckedCreateWithoutReferredByInput>
  }

  export type accountCreateManyReferredByInputEnvelope = {
    data: accountCreateManyReferredByInput | accountCreateManyReferredByInput[]
    skipDuplicates?: boolean
  }

  export type accountUpsertWithoutReferralInput = {
    update: XOR<accountUpdateWithoutReferralInput, accountUncheckedUpdateWithoutReferralInput>
    create: XOR<accountCreateWithoutReferralInput, accountUncheckedCreateWithoutReferralInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutReferralInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutReferralInput, accountUncheckedUpdateWithoutReferralInput>
  }

  export type accountUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountUpsertWithWhereUniqueWithoutReferredByInput = {
    where: accountWhereUniqueInput
    update: XOR<accountUpdateWithoutReferredByInput, accountUncheckedUpdateWithoutReferredByInput>
    create: XOR<accountCreateWithoutReferredByInput, accountUncheckedCreateWithoutReferredByInput>
  }

  export type accountUpdateWithWhereUniqueWithoutReferredByInput = {
    where: accountWhereUniqueInput
    data: XOR<accountUpdateWithoutReferredByInput, accountUncheckedUpdateWithoutReferredByInput>
  }

  export type accountUpdateManyWithWhereWithoutReferredByInput = {
    where: accountScalarWhereInput
    data: XOR<accountUpdateManyMutationInput, accountUncheckedUpdateManyWithoutReferredByInput>
  }

  export type accountScalarWhereInput = {
    AND?: accountScalarWhereInput | accountScalarWhereInput[]
    OR?: accountScalarWhereInput[]
    NOT?: accountScalarWhereInput | accountScalarWhereInput[]
    id?: StringFilter<"account"> | string
    balance?: FloatFilter<"account"> | number
    username?: StringFilter<"account"> | string
    language?: EnumLanguageFilter<"account"> | $Enums.Language
    telegramId?: StringNullableFilter<"account"> | string | null
    referredById?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
  }

  export type referralCreateWithoutAccountInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: accountCreateNestedManyWithoutReferredByInput
  }

  export type referralUncheckedCreateWithoutAccountInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: accountUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type referralCreateOrConnectWithoutAccountInput = {
    where: referralWhereUniqueInput
    create: XOR<referralCreateWithoutAccountInput, referralUncheckedCreateWithoutAccountInput>
  }

  export type referralCreateWithoutAccountsInput = {
    id?: string
    value: string
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutReferralInput
  }

  export type referralUncheckedCreateWithoutAccountsInput = {
    id?: string
    value: string
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type referralCreateOrConnectWithoutAccountsInput = {
    where: referralWhereUniqueInput
    create: XOR<referralCreateWithoutAccountsInput, referralUncheckedCreateWithoutAccountsInput>
  }

  export type account_nftCreateWithoutAccountInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    nft: nftCreateNestedOneWithoutAccountsInput
    transactions?: account_nft_transactionCreateNestedManyWithoutAccount_nftInput
  }

  export type account_nftUncheckedCreateWithoutAccountInput = {
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: account_nft_transactionUncheckedCreateNestedManyWithoutAccount_nftInput
  }

  export type account_nftCreateOrConnectWithoutAccountInput = {
    where: account_nftWhereUniqueInput
    create: XOR<account_nftCreateWithoutAccountInput, account_nftUncheckedCreateWithoutAccountInput>
  }

  export type account_nftCreateManyAccountInputEnvelope = {
    data: account_nftCreateManyAccountInput | account_nftCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type referralUpsertWithoutAccountInput = {
    update: XOR<referralUpdateWithoutAccountInput, referralUncheckedUpdateWithoutAccountInput>
    create: XOR<referralCreateWithoutAccountInput, referralUncheckedCreateWithoutAccountInput>
    where?: referralWhereInput
  }

  export type referralUpdateToOneWithWhereWithoutAccountInput = {
    where?: referralWhereInput
    data: XOR<referralUpdateWithoutAccountInput, referralUncheckedUpdateWithoutAccountInput>
  }

  export type referralUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountUpdateManyWithoutReferredByNestedInput
  }

  export type referralUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type referralUpsertWithoutAccountsInput = {
    update: XOR<referralUpdateWithoutAccountsInput, referralUncheckedUpdateWithoutAccountsInput>
    create: XOR<referralCreateWithoutAccountsInput, referralUncheckedCreateWithoutAccountsInput>
    where?: referralWhereInput
  }

  export type referralUpdateToOneWithWhereWithoutAccountsInput = {
    where?: referralWhereInput
    data: XOR<referralUpdateWithoutAccountsInput, referralUncheckedUpdateWithoutAccountsInput>
  }

  export type referralUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutReferralNestedInput
  }

  export type referralUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftUpsertWithWhereUniqueWithoutAccountInput = {
    where: account_nftWhereUniqueInput
    update: XOR<account_nftUpdateWithoutAccountInput, account_nftUncheckedUpdateWithoutAccountInput>
    create: XOR<account_nftCreateWithoutAccountInput, account_nftUncheckedCreateWithoutAccountInput>
  }

  export type account_nftUpdateWithWhereUniqueWithoutAccountInput = {
    where: account_nftWhereUniqueInput
    data: XOR<account_nftUpdateWithoutAccountInput, account_nftUncheckedUpdateWithoutAccountInput>
  }

  export type account_nftUpdateManyWithWhereWithoutAccountInput = {
    where: account_nftScalarWhereInput
    data: XOR<account_nftUpdateManyMutationInput, account_nftUncheckedUpdateManyWithoutAccountInput>
  }

  export type account_nftScalarWhereInput = {
    AND?: account_nftScalarWhereInput | account_nftScalarWhereInput[]
    OR?: account_nftScalarWhereInput[]
    NOT?: account_nftScalarWhereInput | account_nftScalarWhereInput[]
    accountId?: StringFilter<"account_nft"> | string
    nftId?: StringFilter<"account_nft"> | string
    createdAt?: DateTimeFilter<"account_nft"> | Date | string
    updatedAt?: DateTimeFilter<"account_nft"> | Date | string
  }

  export type account_nftCreateWithoutNftInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutNftsInput
    transactions?: account_nft_transactionCreateNestedManyWithoutAccount_nftInput
  }

  export type account_nftUncheckedCreateWithoutNftInput = {
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transactions?: account_nft_transactionUncheckedCreateNestedManyWithoutAccount_nftInput
  }

  export type account_nftCreateOrConnectWithoutNftInput = {
    where: account_nftWhereUniqueInput
    create: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput>
  }

  export type account_nftCreateManyNftInputEnvelope = {
    data: account_nftCreateManyNftInput | account_nftCreateManyNftInput[]
    skipDuplicates?: boolean
  }

  export type account_nftUpsertWithWhereUniqueWithoutNftInput = {
    where: account_nftWhereUniqueInput
    update: XOR<account_nftUpdateWithoutNftInput, account_nftUncheckedUpdateWithoutNftInput>
    create: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput>
  }

  export type account_nftUpdateWithWhereUniqueWithoutNftInput = {
    where: account_nftWhereUniqueInput
    data: XOR<account_nftUpdateWithoutNftInput, account_nftUncheckedUpdateWithoutNftInput>
  }

  export type account_nftUpdateManyWithWhereWithoutNftInput = {
    where: account_nftScalarWhereInput
    data: XOR<account_nftUpdateManyMutationInput, account_nftUncheckedUpdateManyWithoutNftInput>
  }

  export type accountCreateWithoutNftsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    referredBy?: referralCreateNestedOneWithoutAccountsInput
  }

  export type accountUncheckedCreateWithoutNftsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutNftsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutNftsInput, accountUncheckedCreateWithoutNftsInput>
  }

  export type nftCreateWithoutAccountsInput = {
    id?: string
    title: string
    sku: string
    price: number
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nftUncheckedCreateWithoutAccountsInput = {
    id?: string
    title: string
    sku: string
    price: number
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nftCreateOrConnectWithoutAccountsInput = {
    where: nftWhereUniqueInput
    create: XOR<nftCreateWithoutAccountsInput, nftUncheckedCreateWithoutAccountsInput>
  }

  export type account_nft_transactionCreateWithoutAccount_nftInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nft_transactionUncheckedCreateWithoutAccount_nftInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nft_transactionCreateOrConnectWithoutAccount_nftInput = {
    where: account_nft_transactionWhereUniqueInput
    create: XOR<account_nft_transactionCreateWithoutAccount_nftInput, account_nft_transactionUncheckedCreateWithoutAccount_nftInput>
  }

  export type account_nft_transactionCreateManyAccount_nftInputEnvelope = {
    data: account_nft_transactionCreateManyAccount_nftInput | account_nft_transactionCreateManyAccount_nftInput[]
    skipDuplicates?: boolean
  }

  export type accountUpsertWithoutNftsInput = {
    update: XOR<accountUpdateWithoutNftsInput, accountUncheckedUpdateWithoutNftsInput>
    create: XOR<accountCreateWithoutNftsInput, accountUncheckedCreateWithoutNftsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutNftsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutNftsInput, accountUncheckedUpdateWithoutNftsInput>
  }

  export type accountUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
  }

  export type accountUncheckedUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
  }

  export type nftUpsertWithoutAccountsInput = {
    update: XOR<nftUpdateWithoutAccountsInput, nftUncheckedUpdateWithoutAccountsInput>
    create: XOR<nftCreateWithoutAccountsInput, nftUncheckedCreateWithoutAccountsInput>
    where?: nftWhereInput
  }

  export type nftUpdateToOneWithWhereWithoutAccountsInput = {
    where?: nftWhereInput
    data: XOR<nftUpdateWithoutAccountsInput, nftUncheckedUpdateWithoutAccountsInput>
  }

  export type nftUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nftUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nft_transactionUpsertWithWhereUniqueWithoutAccount_nftInput = {
    where: account_nft_transactionWhereUniqueInput
    update: XOR<account_nft_transactionUpdateWithoutAccount_nftInput, account_nft_transactionUncheckedUpdateWithoutAccount_nftInput>
    create: XOR<account_nft_transactionCreateWithoutAccount_nftInput, account_nft_transactionUncheckedCreateWithoutAccount_nftInput>
  }

  export type account_nft_transactionUpdateWithWhereUniqueWithoutAccount_nftInput = {
    where: account_nft_transactionWhereUniqueInput
    data: XOR<account_nft_transactionUpdateWithoutAccount_nftInput, account_nft_transactionUncheckedUpdateWithoutAccount_nftInput>
  }

  export type account_nft_transactionUpdateManyWithWhereWithoutAccount_nftInput = {
    where: account_nft_transactionScalarWhereInput
    data: XOR<account_nft_transactionUpdateManyMutationInput, account_nft_transactionUncheckedUpdateManyWithoutAccount_nftInput>
  }

  export type account_nft_transactionScalarWhereInput = {
    AND?: account_nft_transactionScalarWhereInput | account_nft_transactionScalarWhereInput[]
    OR?: account_nft_transactionScalarWhereInput[]
    NOT?: account_nft_transactionScalarWhereInput | account_nft_transactionScalarWhereInput[]
    id?: StringFilter<"account_nft_transaction"> | string
    amount?: FloatFilter<"account_nft_transaction"> | number
    account_nftAccountId?: StringFilter<"account_nft_transaction"> | string
    account_nftNftId?: StringFilter<"account_nft_transaction"> | string
    createdAt?: DateTimeFilter<"account_nft_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"account_nft_transaction"> | Date | string
  }

  export type account_nftCreateWithoutTransactionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutNftsInput
    nft: nftCreateNestedOneWithoutAccountsInput
  }

  export type account_nftUncheckedCreateWithoutTransactionsInput = {
    accountId: string
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nftCreateOrConnectWithoutTransactionsInput = {
    where: account_nftWhereUniqueInput
    create: XOR<account_nftCreateWithoutTransactionsInput, account_nftUncheckedCreateWithoutTransactionsInput>
  }

  export type account_nftUpsertWithoutTransactionsInput = {
    update: XOR<account_nftUpdateWithoutTransactionsInput, account_nftUncheckedUpdateWithoutTransactionsInput>
    create: XOR<account_nftCreateWithoutTransactionsInput, account_nftUncheckedCreateWithoutTransactionsInput>
    where?: account_nftWhereInput
  }

  export type account_nftUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: account_nftWhereInput
    data: XOR<account_nftUpdateWithoutTransactionsInput, account_nftUncheckedUpdateWithoutTransactionsInput>
  }

  export type account_nftUpdateWithoutTransactionsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutNftsNestedInput
    nft?: nftUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type account_nftUncheckedUpdateWithoutTransactionsInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountCreateManyReferredByInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftCreateManyAccountInput = {
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nftUpdateWithoutAccountInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nft?: nftUpdateOneRequiredWithoutAccountsNestedInput
    transactions?: account_nft_transactionUpdateManyWithoutAccount_nftNestedInput
  }

  export type account_nftUncheckedUpdateWithoutAccountInput = {
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: account_nft_transactionUncheckedUpdateManyWithoutAccount_nftNestedInput
  }

  export type account_nftUncheckedUpdateManyWithoutAccountInput = {
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftCreateManyNftInput = {
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nftUpdateWithoutNftInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutNftsNestedInput
    transactions?: account_nft_transactionUpdateManyWithoutAccount_nftNestedInput
  }

  export type account_nftUncheckedUpdateWithoutNftInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transactions?: account_nft_transactionUncheckedUpdateManyWithoutAccount_nftNestedInput
  }

  export type account_nftUncheckedUpdateManyWithoutNftInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nft_transactionCreateManyAccount_nftInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nft_transactionUpdateWithoutAccount_nftInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nft_transactionUncheckedUpdateWithoutAccount_nftInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nft_transactionUncheckedUpdateManyWithoutAccount_nftInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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