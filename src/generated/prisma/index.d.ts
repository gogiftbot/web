
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
 * Model nft_description
 * 
 */
export type nft_description = $Result.DefaultSelection<Prisma.$nft_descriptionPayload>
/**
 * Model account_gift
 * 
 */
export type account_gift = $Result.DefaultSelection<Prisma.$account_giftPayload>
/**
 * Model account_nft
 * 
 */
export type account_nft = $Result.DefaultSelection<Prisma.$account_nftPayload>
/**
 * Model gift_case
 * 
 */
export type gift_case = $Result.DefaultSelection<Prisma.$gift_casePayload>
/**
 * Model account_nft_transaction
 * 
 */
export type account_nft_transaction = $Result.DefaultSelection<Prisma.$account_nft_transactionPayload>
/**
 * Model transaction
 * 
 */
export type transaction = $Result.DefaultSelection<Prisma.$transactionPayload>
/**
 * Model ton_transaction
 * 
 */
export type ton_transaction = $Result.DefaultSelection<Prisma.$ton_transactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Language: {
  RU: 'RU',
  EN: 'EN'
};

export type Language = (typeof Language)[keyof typeof Language]


export const TransactionType: {
  deposit: 'deposit',
  withdraw: 'withdraw'
};

export type TransactionType = (typeof TransactionType)[keyof typeof TransactionType]


export const TransactionStatus: {
  pending: 'pending',
  completed: 'completed',
  declined: 'declined'
};

export type TransactionStatus = (typeof TransactionStatus)[keyof typeof TransactionStatus]

}

export type Language = $Enums.Language

export const Language: typeof $Enums.Language

export type TransactionType = $Enums.TransactionType

export const TransactionType: typeof $Enums.TransactionType

export type TransactionStatus = $Enums.TransactionStatus

export const TransactionStatus: typeof $Enums.TransactionStatus

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
   * `prisma.nft_description`: Exposes CRUD operations for the **nft_description** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nft_descriptions
    * const nft_descriptions = await prisma.nft_description.findMany()
    * ```
    */
  get nft_description(): Prisma.nft_descriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account_gift`: Exposes CRUD operations for the **account_gift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_gifts
    * const account_gifts = await prisma.account_gift.findMany()
    * ```
    */
  get account_gift(): Prisma.account_giftDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.gift_case`: Exposes CRUD operations for the **gift_case** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gift_cases
    * const gift_cases = await prisma.gift_case.findMany()
    * ```
    */
  get gift_case(): Prisma.gift_caseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account_nft_transaction`: Exposes CRUD operations for the **account_nft_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Account_nft_transactions
    * const account_nft_transactions = await prisma.account_nft_transaction.findMany()
    * ```
    */
  get account_nft_transaction(): Prisma.account_nft_transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transaction`: Exposes CRUD operations for the **transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Transactions
    * const transactions = await prisma.transaction.findMany()
    * ```
    */
  get transaction(): Prisma.transactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ton_transaction`: Exposes CRUD operations for the **ton_transaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ton_transactions
    * const ton_transactions = await prisma.ton_transaction.findMany()
    * ```
    */
  get ton_transaction(): Prisma.ton_transactionDelegate<ExtArgs, ClientOptions>;
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
    nft_description: 'nft_description',
    account_gift: 'account_gift',
    account_nft: 'account_nft',
    gift_case: 'gift_case',
    account_nft_transaction: 'account_nft_transaction',
    transaction: 'transaction',
    ton_transaction: 'ton_transaction'
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
      modelProps: "referral" | "account" | "nft" | "nft_description" | "account_gift" | "account_nft" | "gift_case" | "account_nft_transaction" | "transaction" | "ton_transaction"
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
      nft_description: {
        payload: Prisma.$nft_descriptionPayload<ExtArgs>
        fields: Prisma.nft_descriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.nft_descriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.nft_descriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>
          }
          findFirst: {
            args: Prisma.nft_descriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.nft_descriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>
          }
          findMany: {
            args: Prisma.nft_descriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>[]
          }
          create: {
            args: Prisma.nft_descriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>
          }
          createMany: {
            args: Prisma.nft_descriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.nft_descriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>[]
          }
          delete: {
            args: Prisma.nft_descriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>
          }
          update: {
            args: Prisma.nft_descriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>
          }
          deleteMany: {
            args: Prisma.nft_descriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.nft_descriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.nft_descriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>[]
          }
          upsert: {
            args: Prisma.nft_descriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$nft_descriptionPayload>
          }
          aggregate: {
            args: Prisma.Nft_descriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNft_description>
          }
          groupBy: {
            args: Prisma.nft_descriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Nft_descriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.nft_descriptionCountArgs<ExtArgs>
            result: $Utils.Optional<Nft_descriptionCountAggregateOutputType> | number
          }
        }
      }
      account_gift: {
        payload: Prisma.$account_giftPayload<ExtArgs>
        fields: Prisma.account_giftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.account_giftFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.account_giftFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>
          }
          findFirst: {
            args: Prisma.account_giftFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.account_giftFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>
          }
          findMany: {
            args: Prisma.account_giftFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>[]
          }
          create: {
            args: Prisma.account_giftCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>
          }
          createMany: {
            args: Prisma.account_giftCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.account_giftCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>[]
          }
          delete: {
            args: Prisma.account_giftDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>
          }
          update: {
            args: Prisma.account_giftUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>
          }
          deleteMany: {
            args: Prisma.account_giftDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.account_giftUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.account_giftUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>[]
          }
          upsert: {
            args: Prisma.account_giftUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$account_giftPayload>
          }
          aggregate: {
            args: Prisma.Account_giftAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount_gift>
          }
          groupBy: {
            args: Prisma.account_giftGroupByArgs<ExtArgs>
            result: $Utils.Optional<Account_giftGroupByOutputType>[]
          }
          count: {
            args: Prisma.account_giftCountArgs<ExtArgs>
            result: $Utils.Optional<Account_giftCountAggregateOutputType> | number
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
      gift_case: {
        payload: Prisma.$gift_casePayload<ExtArgs>
        fields: Prisma.gift_caseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gift_caseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gift_caseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>
          }
          findFirst: {
            args: Prisma.gift_caseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gift_caseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>
          }
          findMany: {
            args: Prisma.gift_caseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>[]
          }
          create: {
            args: Prisma.gift_caseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>
          }
          createMany: {
            args: Prisma.gift_caseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gift_caseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>[]
          }
          delete: {
            args: Prisma.gift_caseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>
          }
          update: {
            args: Prisma.gift_caseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>
          }
          deleteMany: {
            args: Prisma.gift_caseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gift_caseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.gift_caseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>[]
          }
          upsert: {
            args: Prisma.gift_caseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gift_casePayload>
          }
          aggregate: {
            args: Prisma.Gift_caseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGift_case>
          }
          groupBy: {
            args: Prisma.gift_caseGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gift_caseGroupByOutputType>[]
          }
          count: {
            args: Prisma.gift_caseCountArgs<ExtArgs>
            result: $Utils.Optional<Gift_caseCountAggregateOutputType> | number
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
      transaction: {
        payload: Prisma.$transactionPayload<ExtArgs>
        fields: Prisma.transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findFirst: {
            args: Prisma.transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          findMany: {
            args: Prisma.transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          create: {
            args: Prisma.transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          createMany: {
            args: Prisma.transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          delete: {
            args: Prisma.transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          update: {
            args: Prisma.transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          deleteMany: {
            args: Prisma.transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>[]
          }
          upsert: {
            args: Prisma.transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$transactionPayload>
          }
          aggregate: {
            args: Prisma.TransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransaction>
          }
          groupBy: {
            args: Prisma.transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.transactionCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCountAggregateOutputType> | number
          }
        }
      }
      ton_transaction: {
        payload: Prisma.$ton_transactionPayload<ExtArgs>
        fields: Prisma.ton_transactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ton_transactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ton_transactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>
          }
          findFirst: {
            args: Prisma.ton_transactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ton_transactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>
          }
          findMany: {
            args: Prisma.ton_transactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>[]
          }
          create: {
            args: Prisma.ton_transactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>
          }
          createMany: {
            args: Prisma.ton_transactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ton_transactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>[]
          }
          delete: {
            args: Prisma.ton_transactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>
          }
          update: {
            args: Prisma.ton_transactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>
          }
          deleteMany: {
            args: Prisma.ton_transactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ton_transactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ton_transactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>[]
          }
          upsert: {
            args: Prisma.ton_transactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ton_transactionPayload>
          }
          aggregate: {
            args: Prisma.Ton_transactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTon_transaction>
          }
          groupBy: {
            args: Prisma.ton_transactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ton_transactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ton_transactionCountArgs<ExtArgs>
            result: $Utils.Optional<Ton_transactionCountAggregateOutputType> | number
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
    nft_description?: nft_descriptionOmit
    account_gift?: account_giftOmit
    account_nft?: account_nftOmit
    gift_case?: gift_caseOmit
    account_nft_transaction?: account_nft_transactionOmit
    transaction?: transactionOmit
    ton_transaction?: ton_transactionOmit
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
    gifts: number
    transactions: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nfts?: boolean | AccountCountOutputTypeCountNftsArgs
    gifts?: boolean | AccountCountOutputTypeCountGiftsArgs
    transactions?: boolean | AccountCountOutputTypeCountTransactionsArgs
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
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_giftWhereInput
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
  }


  /**
   * Count Type NftCountOutputType
   */

  export type NftCountOutputType = {
    cases: number
    nftAccounts: number
    giftAccounts: number
  }

  export type NftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cases?: boolean | NftCountOutputTypeCountCasesArgs
    nftAccounts?: boolean | NftCountOutputTypeCountNftAccountsArgs
    giftAccounts?: boolean | NftCountOutputTypeCountGiftAccountsArgs
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
  export type NftCountOutputTypeCountCasesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gift_caseWhereInput
  }

  /**
   * NftCountOutputType without action
   */
  export type NftCountOutputTypeCountNftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_nftWhereInput
  }

  /**
   * NftCountOutputType without action
   */
  export type NftCountOutputTypeCountGiftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_giftWhereInput
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
   * Count Type Gift_caseCountOutputType
   */

  export type Gift_caseCountOutputType = {
    gifts: number
    accountGifts: number
  }

  export type Gift_caseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts?: boolean | Gift_caseCountOutputTypeCountGiftsArgs
    accountGifts?: boolean | Gift_caseCountOutputTypeCountAccountGiftsArgs
  }

  // Custom InputTypes
  /**
   * Gift_caseCountOutputType without action
   */
  export type Gift_caseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Gift_caseCountOutputType
     */
    select?: Gift_caseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Gift_caseCountOutputType without action
   */
  export type Gift_caseCountOutputTypeCountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nftWhereInput
  }

  /**
   * Gift_caseCountOutputType without action
   */
  export type Gift_caseCountOutputTypeCountAccountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_giftWhereInput
  }


  /**
   * Models
   */

  /**
   * Model referral
   */

  export type AggregateReferral = {
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
    _min: ReferralMinAggregateOutputType | null
    _max: ReferralMaxAggregateOutputType | null
  }

  export type ReferralAvgAggregateOutputType = {
    percent: number | null
  }

  export type ReferralSumAggregateOutputType = {
    percent: number | null
  }

  export type ReferralMinAggregateOutputType = {
    id: string | null
    value: string | null
    percent: number | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralMaxAggregateOutputType = {
    id: string | null
    value: string | null
    percent: number | null
    accountId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferralCountAggregateOutputType = {
    id: number
    value: number
    percent: number
    accountId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReferralAvgAggregateInputType = {
    percent?: true
  }

  export type ReferralSumAggregateInputType = {
    percent?: true
  }

  export type ReferralMinAggregateInputType = {
    id?: true
    value?: true
    percent?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralMaxAggregateInputType = {
    id?: true
    value?: true
    percent?: true
    accountId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferralCountAggregateInputType = {
    id?: true
    value?: true
    percent?: true
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
     * Select which fields to average
    **/
    _avg?: ReferralAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferralSumAggregateInputType
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
    _avg?: ReferralAvgAggregateInputType
    _sum?: ReferralSumAggregateInputType
    _min?: ReferralMinAggregateInputType
    _max?: ReferralMaxAggregateInputType
  }

  export type ReferralGroupByOutputType = {
    id: string
    value: string
    percent: number
    accountId: string
    createdAt: Date
    updatedAt: Date
    _count: ReferralCountAggregateOutputType | null
    _avg: ReferralAvgAggregateOutputType | null
    _sum: ReferralSumAggregateOutputType | null
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
    percent?: boolean
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
    percent?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type referralSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    percent?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referral"]>

  export type referralSelectScalar = {
    id?: boolean
    value?: boolean
    percent?: boolean
    accountId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type referralOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "value" | "percent" | "accountId" | "createdAt" | "updatedAt", ExtArgs["result"]["referral"]>
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
      percent: number
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
    readonly percent: FieldRef<"referral", 'Float'>
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
    avatarUrl: string | null
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
    avatarUrl: string | null
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
    avatarUrl: number
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
    avatarUrl?: true
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
    avatarUrl?: true
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
    avatarUrl?: true
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
    avatarUrl: string | null
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
    avatarUrl?: boolean
    referredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    referral?: boolean | account$referralArgs<ExtArgs>
    referredBy?: boolean | account$referredByArgs<ExtArgs>
    nfts?: boolean | account$nftsArgs<ExtArgs>
    gifts?: boolean | account$giftsArgs<ExtArgs>
    transactions?: boolean | account$transactionsArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type accountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    balance?: boolean
    username?: boolean
    language?: boolean
    telegramId?: boolean
    avatarUrl?: boolean
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
    avatarUrl?: boolean
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
    avatarUrl?: boolean
    referredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type accountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "balance" | "username" | "language" | "telegramId" | "avatarUrl" | "referredById" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type accountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referral?: boolean | account$referralArgs<ExtArgs>
    referredBy?: boolean | account$referredByArgs<ExtArgs>
    nfts?: boolean | account$nftsArgs<ExtArgs>
    gifts?: boolean | account$giftsArgs<ExtArgs>
    transactions?: boolean | account$transactionsArgs<ExtArgs>
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
      gifts: Prisma.$account_giftPayload<ExtArgs>[]
      transactions: Prisma.$transactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      balance: number
      username: string
      language: $Enums.Language
      telegramId: string | null
      avatarUrl: string | null
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
    gifts<T extends account$giftsArgs<ExtArgs> = {}>(args?: Subset<T, account$giftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends account$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, account$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly avatarUrl: FieldRef<"account", 'String'>
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
   * account.gifts
   */
  export type account$giftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    where?: account_giftWhereInput
    orderBy?: account_giftOrderByWithRelationInput | account_giftOrderByWithRelationInput[]
    cursor?: account_giftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_giftScalarFieldEnum | Account_giftScalarFieldEnum[]
  }

  /**
   * account.transactions
   */
  export type account$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    cursor?: transactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
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
  }

  export type NftSumAggregateOutputType = {
    price: number | null
  }

  export type NftMinAggregateOutputType = {
    id: string | null
    title: string | null
    sku: string | null
    price: number | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NftMaxAggregateOutputType = {
    id: string | null
    title: string | null
    sku: string | null
    price: number | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NftCountAggregateOutputType = {
    id: number
    title: number
    sku: number
    price: number
    isArchived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NftAvgAggregateInputType = {
    price?: true
  }

  export type NftSumAggregateInputType = {
    price?: true
  }

  export type NftMinAggregateInputType = {
    id?: true
    title?: true
    sku?: true
    price?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NftMaxAggregateInputType = {
    id?: true
    title?: true
    sku?: true
    price?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NftCountAggregateInputType = {
    id?: true
    title?: true
    sku?: true
    price?: true
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
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean | nft$descriptionArgs<ExtArgs>
    cases?: boolean | nft$casesArgs<ExtArgs>
    nftAccounts?: boolean | nft$nftAccountsArgs<ExtArgs>
    giftAccounts?: boolean | nft$giftAccountsArgs<ExtArgs>
    _count?: boolean | NftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nft"]>

  export type nftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sku?: boolean
    price?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nft"]>

  export type nftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    sku?: boolean
    price?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nft"]>

  export type nftSelectScalar = {
    id?: boolean
    title?: boolean
    sku?: boolean
    price?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type nftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "sku" | "price" | "isArchived" | "createdAt" | "updatedAt", ExtArgs["result"]["nft"]>
  export type nftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    description?: boolean | nft$descriptionArgs<ExtArgs>
    cases?: boolean | nft$casesArgs<ExtArgs>
    nftAccounts?: boolean | nft$nftAccountsArgs<ExtArgs>
    giftAccounts?: boolean | nft$giftAccountsArgs<ExtArgs>
    _count?: boolean | NftCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type nftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type nftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $nftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nft"
    objects: {
      description: Prisma.$nft_descriptionPayload<ExtArgs> | null
      cases: Prisma.$gift_casePayload<ExtArgs>[]
      nftAccounts: Prisma.$account_nftPayload<ExtArgs>[]
      giftAccounts: Prisma.$account_giftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      sku: string
      price: number
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
    description<T extends nft$descriptionArgs<ExtArgs> = {}>(args?: Subset<T, nft$descriptionArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    cases<T extends nft$casesArgs<ExtArgs> = {}>(args?: Subset<T, nft$casesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    nftAccounts<T extends nft$nftAccountsArgs<ExtArgs> = {}>(args?: Subset<T, nft$nftAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_nftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    giftAccounts<T extends nft$giftAccountsArgs<ExtArgs> = {}>(args?: Subset<T, nft$giftAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * nft.description
   */
  export type nft$descriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    where?: nft_descriptionWhereInput
  }

  /**
   * nft.cases
   */
  export type nft$casesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    where?: gift_caseWhereInput
    orderBy?: gift_caseOrderByWithRelationInput | gift_caseOrderByWithRelationInput[]
    cursor?: gift_caseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Gift_caseScalarFieldEnum | Gift_caseScalarFieldEnum[]
  }

  /**
   * nft.nftAccounts
   */
  export type nft$nftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * nft.giftAccounts
   */
  export type nft$giftAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    where?: account_giftWhereInput
    orderBy?: account_giftOrderByWithRelationInput | account_giftOrderByWithRelationInput[]
    cursor?: account_giftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_giftScalarFieldEnum | Account_giftScalarFieldEnum[]
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
   * Model nft_description
   */

  export type AggregateNft_description = {
    _count: Nft_descriptionCountAggregateOutputType | null
    _avg: Nft_descriptionAvgAggregateOutputType | null
    _sum: Nft_descriptionSumAggregateOutputType | null
    _min: Nft_descriptionMinAggregateOutputType | null
    _max: Nft_descriptionMaxAggregateOutputType | null
  }

  export type Nft_descriptionAvgAggregateOutputType = {
    roi: number | null
    iterations: number | null
  }

  export type Nft_descriptionSumAggregateOutputType = {
    roi: number | null
    iterations: number | null
  }

  export type Nft_descriptionMinAggregateOutputType = {
    id: string | null
    roi: number | null
    iterations: number | null
    isSoldOut: boolean | null
    isNew: boolean | null
    isHot: boolean | null
    nftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Nft_descriptionMaxAggregateOutputType = {
    id: string | null
    roi: number | null
    iterations: number | null
    isSoldOut: boolean | null
    isNew: boolean | null
    isHot: boolean | null
    nftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Nft_descriptionCountAggregateOutputType = {
    id: number
    roi: number
    iterations: number
    isSoldOut: number
    isNew: number
    isHot: number
    nftId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Nft_descriptionAvgAggregateInputType = {
    roi?: true
    iterations?: true
  }

  export type Nft_descriptionSumAggregateInputType = {
    roi?: true
    iterations?: true
  }

  export type Nft_descriptionMinAggregateInputType = {
    id?: true
    roi?: true
    iterations?: true
    isSoldOut?: true
    isNew?: true
    isHot?: true
    nftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Nft_descriptionMaxAggregateInputType = {
    id?: true
    roi?: true
    iterations?: true
    isSoldOut?: true
    isNew?: true
    isHot?: true
    nftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Nft_descriptionCountAggregateInputType = {
    id?: true
    roi?: true
    iterations?: true
    isSoldOut?: true
    isNew?: true
    isHot?: true
    nftId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Nft_descriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nft_description to aggregate.
     */
    where?: nft_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_descriptions to fetch.
     */
    orderBy?: nft_descriptionOrderByWithRelationInput | nft_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: nft_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned nft_descriptions
    **/
    _count?: true | Nft_descriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Nft_descriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Nft_descriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Nft_descriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Nft_descriptionMaxAggregateInputType
  }

  export type GetNft_descriptionAggregateType<T extends Nft_descriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateNft_description]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNft_description[P]>
      : GetScalarType<T[P], AggregateNft_description[P]>
  }




  export type nft_descriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: nft_descriptionWhereInput
    orderBy?: nft_descriptionOrderByWithAggregationInput | nft_descriptionOrderByWithAggregationInput[]
    by: Nft_descriptionScalarFieldEnum[] | Nft_descriptionScalarFieldEnum
    having?: nft_descriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Nft_descriptionCountAggregateInputType | true
    _avg?: Nft_descriptionAvgAggregateInputType
    _sum?: Nft_descriptionSumAggregateInputType
    _min?: Nft_descriptionMinAggregateInputType
    _max?: Nft_descriptionMaxAggregateInputType
  }

  export type Nft_descriptionGroupByOutputType = {
    id: string
    roi: number
    iterations: number
    isSoldOut: boolean
    isNew: boolean
    isHot: boolean
    nftId: string
    createdAt: Date
    updatedAt: Date
    _count: Nft_descriptionCountAggregateOutputType | null
    _avg: Nft_descriptionAvgAggregateOutputType | null
    _sum: Nft_descriptionSumAggregateOutputType | null
    _min: Nft_descriptionMinAggregateOutputType | null
    _max: Nft_descriptionMaxAggregateOutputType | null
  }

  type GetNft_descriptionGroupByPayload<T extends nft_descriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Nft_descriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Nft_descriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Nft_descriptionGroupByOutputType[P]>
            : GetScalarType<T[P], Nft_descriptionGroupByOutputType[P]>
        }
      >
    >


  export type nft_descriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nft_description"]>

  export type nft_descriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nft_description"]>

  export type nft_descriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nft_description"]>

  export type nft_descriptionSelectScalar = {
    id?: boolean
    roi?: boolean
    iterations?: boolean
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    nftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type nft_descriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "roi" | "iterations" | "isSoldOut" | "isNew" | "isHot" | "nftId" | "createdAt" | "updatedAt", ExtArgs["result"]["nft_description"]>
  export type nft_descriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }
  export type nft_descriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }
  export type nft_descriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nft?: boolean | nftDefaultArgs<ExtArgs>
  }

  export type $nft_descriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "nft_description"
    objects: {
      nft: Prisma.$nftPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      roi: number
      iterations: number
      isSoldOut: boolean
      isNew: boolean
      isHot: boolean
      nftId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nft_description"]>
    composites: {}
  }

  type nft_descriptionGetPayload<S extends boolean | null | undefined | nft_descriptionDefaultArgs> = $Result.GetResult<Prisma.$nft_descriptionPayload, S>

  type nft_descriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<nft_descriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Nft_descriptionCountAggregateInputType | true
    }

  export interface nft_descriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['nft_description'], meta: { name: 'nft_description' } }
    /**
     * Find zero or one Nft_description that matches the filter.
     * @param {nft_descriptionFindUniqueArgs} args - Arguments to find a Nft_description
     * @example
     * // Get one Nft_description
     * const nft_description = await prisma.nft_description.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends nft_descriptionFindUniqueArgs>(args: SelectSubset<T, nft_descriptionFindUniqueArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Nft_description that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {nft_descriptionFindUniqueOrThrowArgs} args - Arguments to find a Nft_description
     * @example
     * // Get one Nft_description
     * const nft_description = await prisma.nft_description.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends nft_descriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, nft_descriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nft_description that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_descriptionFindFirstArgs} args - Arguments to find a Nft_description
     * @example
     * // Get one Nft_description
     * const nft_description = await prisma.nft_description.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends nft_descriptionFindFirstArgs>(args?: SelectSubset<T, nft_descriptionFindFirstArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Nft_description that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_descriptionFindFirstOrThrowArgs} args - Arguments to find a Nft_description
     * @example
     * // Get one Nft_description
     * const nft_description = await prisma.nft_description.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends nft_descriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, nft_descriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nft_descriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_descriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nft_descriptions
     * const nft_descriptions = await prisma.nft_description.findMany()
     * 
     * // Get first 10 Nft_descriptions
     * const nft_descriptions = await prisma.nft_description.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nft_descriptionWithIdOnly = await prisma.nft_description.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends nft_descriptionFindManyArgs>(args?: SelectSubset<T, nft_descriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Nft_description.
     * @param {nft_descriptionCreateArgs} args - Arguments to create a Nft_description.
     * @example
     * // Create one Nft_description
     * const Nft_description = await prisma.nft_description.create({
     *   data: {
     *     // ... data to create a Nft_description
     *   }
     * })
     * 
     */
    create<T extends nft_descriptionCreateArgs>(args: SelectSubset<T, nft_descriptionCreateArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nft_descriptions.
     * @param {nft_descriptionCreateManyArgs} args - Arguments to create many Nft_descriptions.
     * @example
     * // Create many Nft_descriptions
     * const nft_description = await prisma.nft_description.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends nft_descriptionCreateManyArgs>(args?: SelectSubset<T, nft_descriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nft_descriptions and returns the data saved in the database.
     * @param {nft_descriptionCreateManyAndReturnArgs} args - Arguments to create many Nft_descriptions.
     * @example
     * // Create many Nft_descriptions
     * const nft_description = await prisma.nft_description.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nft_descriptions and only return the `id`
     * const nft_descriptionWithIdOnly = await prisma.nft_description.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends nft_descriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, nft_descriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Nft_description.
     * @param {nft_descriptionDeleteArgs} args - Arguments to delete one Nft_description.
     * @example
     * // Delete one Nft_description
     * const Nft_description = await prisma.nft_description.delete({
     *   where: {
     *     // ... filter to delete one Nft_description
     *   }
     * })
     * 
     */
    delete<T extends nft_descriptionDeleteArgs>(args: SelectSubset<T, nft_descriptionDeleteArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Nft_description.
     * @param {nft_descriptionUpdateArgs} args - Arguments to update one Nft_description.
     * @example
     * // Update one Nft_description
     * const nft_description = await prisma.nft_description.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends nft_descriptionUpdateArgs>(args: SelectSubset<T, nft_descriptionUpdateArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nft_descriptions.
     * @param {nft_descriptionDeleteManyArgs} args - Arguments to filter Nft_descriptions to delete.
     * @example
     * // Delete a few Nft_descriptions
     * const { count } = await prisma.nft_description.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends nft_descriptionDeleteManyArgs>(args?: SelectSubset<T, nft_descriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nft_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_descriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nft_descriptions
     * const nft_description = await prisma.nft_description.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends nft_descriptionUpdateManyArgs>(args: SelectSubset<T, nft_descriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nft_descriptions and returns the data updated in the database.
     * @param {nft_descriptionUpdateManyAndReturnArgs} args - Arguments to update many Nft_descriptions.
     * @example
     * // Update many Nft_descriptions
     * const nft_description = await prisma.nft_description.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nft_descriptions and only return the `id`
     * const nft_descriptionWithIdOnly = await prisma.nft_description.updateManyAndReturn({
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
    updateManyAndReturn<T extends nft_descriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, nft_descriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Nft_description.
     * @param {nft_descriptionUpsertArgs} args - Arguments to update or create a Nft_description.
     * @example
     * // Update or create a Nft_description
     * const nft_description = await prisma.nft_description.upsert({
     *   create: {
     *     // ... data to create a Nft_description
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Nft_description we want to update
     *   }
     * })
     */
    upsert<T extends nft_descriptionUpsertArgs>(args: SelectSubset<T, nft_descriptionUpsertArgs<ExtArgs>>): Prisma__nft_descriptionClient<$Result.GetResult<Prisma.$nft_descriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nft_descriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_descriptionCountArgs} args - Arguments to filter Nft_descriptions to count.
     * @example
     * // Count the number of Nft_descriptions
     * const count = await prisma.nft_description.count({
     *   where: {
     *     // ... the filter for the Nft_descriptions we want to count
     *   }
     * })
    **/
    count<T extends nft_descriptionCountArgs>(
      args?: Subset<T, nft_descriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Nft_descriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Nft_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Nft_descriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Nft_descriptionAggregateArgs>(args: Subset<T, Nft_descriptionAggregateArgs>): Prisma.PrismaPromise<GetNft_descriptionAggregateType<T>>

    /**
     * Group by Nft_description.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {nft_descriptionGroupByArgs} args - Group by arguments.
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
      T extends nft_descriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: nft_descriptionGroupByArgs['orderBy'] }
        : { orderBy?: nft_descriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, nft_descriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNft_descriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the nft_description model
   */
  readonly fields: nft_descriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for nft_description.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__nft_descriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    nft<T extends nftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, nftDefaultArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the nft_description model
   */
  interface nft_descriptionFieldRefs {
    readonly id: FieldRef<"nft_description", 'String'>
    readonly roi: FieldRef<"nft_description", 'Float'>
    readonly iterations: FieldRef<"nft_description", 'Int'>
    readonly isSoldOut: FieldRef<"nft_description", 'Boolean'>
    readonly isNew: FieldRef<"nft_description", 'Boolean'>
    readonly isHot: FieldRef<"nft_description", 'Boolean'>
    readonly nftId: FieldRef<"nft_description", 'String'>
    readonly createdAt: FieldRef<"nft_description", 'DateTime'>
    readonly updatedAt: FieldRef<"nft_description", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * nft_description findUnique
   */
  export type nft_descriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which nft_description to fetch.
     */
    where: nft_descriptionWhereUniqueInput
  }

  /**
   * nft_description findUniqueOrThrow
   */
  export type nft_descriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which nft_description to fetch.
     */
    where: nft_descriptionWhereUniqueInput
  }

  /**
   * nft_description findFirst
   */
  export type nft_descriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which nft_description to fetch.
     */
    where?: nft_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_descriptions to fetch.
     */
    orderBy?: nft_descriptionOrderByWithRelationInput | nft_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nft_descriptions.
     */
    cursor?: nft_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nft_descriptions.
     */
    distinct?: Nft_descriptionScalarFieldEnum | Nft_descriptionScalarFieldEnum[]
  }

  /**
   * nft_description findFirstOrThrow
   */
  export type nft_descriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which nft_description to fetch.
     */
    where?: nft_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_descriptions to fetch.
     */
    orderBy?: nft_descriptionOrderByWithRelationInput | nft_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for nft_descriptions.
     */
    cursor?: nft_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_descriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of nft_descriptions.
     */
    distinct?: Nft_descriptionScalarFieldEnum | Nft_descriptionScalarFieldEnum[]
  }

  /**
   * nft_description findMany
   */
  export type nft_descriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * Filter, which nft_descriptions to fetch.
     */
    where?: nft_descriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of nft_descriptions to fetch.
     */
    orderBy?: nft_descriptionOrderByWithRelationInput | nft_descriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing nft_descriptions.
     */
    cursor?: nft_descriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` nft_descriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` nft_descriptions.
     */
    skip?: number
    distinct?: Nft_descriptionScalarFieldEnum | Nft_descriptionScalarFieldEnum[]
  }

  /**
   * nft_description create
   */
  export type nft_descriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a nft_description.
     */
    data: XOR<nft_descriptionCreateInput, nft_descriptionUncheckedCreateInput>
  }

  /**
   * nft_description createMany
   */
  export type nft_descriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many nft_descriptions.
     */
    data: nft_descriptionCreateManyInput | nft_descriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * nft_description createManyAndReturn
   */
  export type nft_descriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * The data used to create many nft_descriptions.
     */
    data: nft_descriptionCreateManyInput | nft_descriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * nft_description update
   */
  export type nft_descriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a nft_description.
     */
    data: XOR<nft_descriptionUpdateInput, nft_descriptionUncheckedUpdateInput>
    /**
     * Choose, which nft_description to update.
     */
    where: nft_descriptionWhereUniqueInput
  }

  /**
   * nft_description updateMany
   */
  export type nft_descriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update nft_descriptions.
     */
    data: XOR<nft_descriptionUpdateManyMutationInput, nft_descriptionUncheckedUpdateManyInput>
    /**
     * Filter which nft_descriptions to update
     */
    where?: nft_descriptionWhereInput
    /**
     * Limit how many nft_descriptions to update.
     */
    limit?: number
  }

  /**
   * nft_description updateManyAndReturn
   */
  export type nft_descriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * The data used to update nft_descriptions.
     */
    data: XOR<nft_descriptionUpdateManyMutationInput, nft_descriptionUncheckedUpdateManyInput>
    /**
     * Filter which nft_descriptions to update
     */
    where?: nft_descriptionWhereInput
    /**
     * Limit how many nft_descriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * nft_description upsert
   */
  export type nft_descriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the nft_description to update in case it exists.
     */
    where: nft_descriptionWhereUniqueInput
    /**
     * In case the nft_description found by the `where` argument doesn't exist, create a new nft_description with this data.
     */
    create: XOR<nft_descriptionCreateInput, nft_descriptionUncheckedCreateInput>
    /**
     * In case the nft_description was found with the provided `where` argument, update it with this data.
     */
    update: XOR<nft_descriptionUpdateInput, nft_descriptionUncheckedUpdateInput>
  }

  /**
   * nft_description delete
   */
  export type nft_descriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
    /**
     * Filter which nft_description to delete.
     */
    where: nft_descriptionWhereUniqueInput
  }

  /**
   * nft_description deleteMany
   */
  export type nft_descriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which nft_descriptions to delete
     */
    where?: nft_descriptionWhereInput
    /**
     * Limit how many nft_descriptions to delete.
     */
    limit?: number
  }

  /**
   * nft_description without action
   */
  export type nft_descriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the nft_description
     */
    select?: nft_descriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the nft_description
     */
    omit?: nft_descriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: nft_descriptionInclude<ExtArgs> | null
  }


  /**
   * Model account_gift
   */

  export type AggregateAccount_gift = {
    _count: Account_giftCountAggregateOutputType | null
    _avg: Account_giftAvgAggregateOutputType | null
    _sum: Account_giftSumAggregateOutputType | null
    _min: Account_giftMinAggregateOutputType | null
    _max: Account_giftMaxAggregateOutputType | null
  }

  export type Account_giftAvgAggregateOutputType = {
    price: number | null
  }

  export type Account_giftSumAggregateOutputType = {
    price: number | null
  }

  export type Account_giftMinAggregateOutputType = {
    id: string | null
    price: number | null
    isSold: boolean | null
    isWithdraw: boolean | null
    accountId: string | null
    nftId: string | null
    caseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Account_giftMaxAggregateOutputType = {
    id: string | null
    price: number | null
    isSold: boolean | null
    isWithdraw: boolean | null
    accountId: string | null
    nftId: string | null
    caseId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Account_giftCountAggregateOutputType = {
    id: number
    price: number
    isSold: number
    isWithdraw: number
    accountId: number
    nftId: number
    caseId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Account_giftAvgAggregateInputType = {
    price?: true
  }

  export type Account_giftSumAggregateInputType = {
    price?: true
  }

  export type Account_giftMinAggregateInputType = {
    id?: true
    price?: true
    isSold?: true
    isWithdraw?: true
    accountId?: true
    nftId?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Account_giftMaxAggregateInputType = {
    id?: true
    price?: true
    isSold?: true
    isWithdraw?: true
    accountId?: true
    nftId?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Account_giftCountAggregateInputType = {
    id?: true
    price?: true
    isSold?: true
    isWithdraw?: true
    accountId?: true
    nftId?: true
    caseId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Account_giftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_gift to aggregate.
     */
    where?: account_giftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_gifts to fetch.
     */
    orderBy?: account_giftOrderByWithRelationInput | account_giftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: account_giftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned account_gifts
    **/
    _count?: true | Account_giftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Account_giftAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Account_giftSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Account_giftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Account_giftMaxAggregateInputType
  }

  export type GetAccount_giftAggregateType<T extends Account_giftAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount_gift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount_gift[P]>
      : GetScalarType<T[P], AggregateAccount_gift[P]>
  }




  export type account_giftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: account_giftWhereInput
    orderBy?: account_giftOrderByWithAggregationInput | account_giftOrderByWithAggregationInput[]
    by: Account_giftScalarFieldEnum[] | Account_giftScalarFieldEnum
    having?: account_giftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Account_giftCountAggregateInputType | true
    _avg?: Account_giftAvgAggregateInputType
    _sum?: Account_giftSumAggregateInputType
    _min?: Account_giftMinAggregateInputType
    _max?: Account_giftMaxAggregateInputType
  }

  export type Account_giftGroupByOutputType = {
    id: string
    price: number
    isSold: boolean
    isWithdraw: boolean
    accountId: string
    nftId: string
    caseId: string
    createdAt: Date
    updatedAt: Date
    _count: Account_giftCountAggregateOutputType | null
    _avg: Account_giftAvgAggregateOutputType | null
    _sum: Account_giftSumAggregateOutputType | null
    _min: Account_giftMinAggregateOutputType | null
    _max: Account_giftMaxAggregateOutputType | null
  }

  type GetAccount_giftGroupByPayload<T extends account_giftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Account_giftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Account_giftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Account_giftGroupByOutputType[P]>
            : GetScalarType<T[P], Account_giftGroupByOutputType[P]>
        }
      >
    >


  export type account_giftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    isSold?: boolean
    isWithdraw?: boolean
    accountId?: boolean
    nftId?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    case?: boolean | gift_caseDefaultArgs<ExtArgs>
    transaction?: boolean | account_gift$transactionArgs<ExtArgs>
  }, ExtArgs["result"]["account_gift"]>

  export type account_giftSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    isSold?: boolean
    isWithdraw?: boolean
    accountId?: boolean
    nftId?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    case?: boolean | gift_caseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_gift"]>

  export type account_giftSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    price?: boolean
    isSold?: boolean
    isWithdraw?: boolean
    accountId?: boolean
    nftId?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    case?: boolean | gift_caseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account_gift"]>

  export type account_giftSelectScalar = {
    id?: boolean
    price?: boolean
    isSold?: boolean
    isWithdraw?: boolean
    accountId?: boolean
    nftId?: boolean
    caseId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type account_giftOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "price" | "isSold" | "isWithdraw" | "accountId" | "nftId" | "caseId" | "createdAt" | "updatedAt", ExtArgs["result"]["account_gift"]>
  export type account_giftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    case?: boolean | gift_caseDefaultArgs<ExtArgs>
    transaction?: boolean | account_gift$transactionArgs<ExtArgs>
  }
  export type account_giftIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    case?: boolean | gift_caseDefaultArgs<ExtArgs>
  }
  export type account_giftIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    nft?: boolean | nftDefaultArgs<ExtArgs>
    case?: boolean | gift_caseDefaultArgs<ExtArgs>
  }

  export type $account_giftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "account_gift"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
      nft: Prisma.$nftPayload<ExtArgs>
      case: Prisma.$gift_casePayload<ExtArgs>
      transaction: Prisma.$transactionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      price: number
      isSold: boolean
      isWithdraw: boolean
      accountId: string
      nftId: string
      caseId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account_gift"]>
    composites: {}
  }

  type account_giftGetPayload<S extends boolean | null | undefined | account_giftDefaultArgs> = $Result.GetResult<Prisma.$account_giftPayload, S>

  type account_giftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<account_giftFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Account_giftCountAggregateInputType | true
    }

  export interface account_giftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['account_gift'], meta: { name: 'account_gift' } }
    /**
     * Find zero or one Account_gift that matches the filter.
     * @param {account_giftFindUniqueArgs} args - Arguments to find a Account_gift
     * @example
     * // Get one Account_gift
     * const account_gift = await prisma.account_gift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends account_giftFindUniqueArgs>(args: SelectSubset<T, account_giftFindUniqueArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account_gift that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {account_giftFindUniqueOrThrowArgs} args - Arguments to find a Account_gift
     * @example
     * // Get one Account_gift
     * const account_gift = await prisma.account_gift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends account_giftFindUniqueOrThrowArgs>(args: SelectSubset<T, account_giftFindUniqueOrThrowArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_gift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_giftFindFirstArgs} args - Arguments to find a Account_gift
     * @example
     * // Get one Account_gift
     * const account_gift = await prisma.account_gift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends account_giftFindFirstArgs>(args?: SelectSubset<T, account_giftFindFirstArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account_gift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_giftFindFirstOrThrowArgs} args - Arguments to find a Account_gift
     * @example
     * // Get one Account_gift
     * const account_gift = await prisma.account_gift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends account_giftFindFirstOrThrowArgs>(args?: SelectSubset<T, account_giftFindFirstOrThrowArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Account_gifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_giftFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Account_gifts
     * const account_gifts = await prisma.account_gift.findMany()
     * 
     * // Get first 10 Account_gifts
     * const account_gifts = await prisma.account_gift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const account_giftWithIdOnly = await prisma.account_gift.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends account_giftFindManyArgs>(args?: SelectSubset<T, account_giftFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account_gift.
     * @param {account_giftCreateArgs} args - Arguments to create a Account_gift.
     * @example
     * // Create one Account_gift
     * const Account_gift = await prisma.account_gift.create({
     *   data: {
     *     // ... data to create a Account_gift
     *   }
     * })
     * 
     */
    create<T extends account_giftCreateArgs>(args: SelectSubset<T, account_giftCreateArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Account_gifts.
     * @param {account_giftCreateManyArgs} args - Arguments to create many Account_gifts.
     * @example
     * // Create many Account_gifts
     * const account_gift = await prisma.account_gift.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends account_giftCreateManyArgs>(args?: SelectSubset<T, account_giftCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Account_gifts and returns the data saved in the database.
     * @param {account_giftCreateManyAndReturnArgs} args - Arguments to create many Account_gifts.
     * @example
     * // Create many Account_gifts
     * const account_gift = await prisma.account_gift.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Account_gifts and only return the `id`
     * const account_giftWithIdOnly = await prisma.account_gift.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends account_giftCreateManyAndReturnArgs>(args?: SelectSubset<T, account_giftCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account_gift.
     * @param {account_giftDeleteArgs} args - Arguments to delete one Account_gift.
     * @example
     * // Delete one Account_gift
     * const Account_gift = await prisma.account_gift.delete({
     *   where: {
     *     // ... filter to delete one Account_gift
     *   }
     * })
     * 
     */
    delete<T extends account_giftDeleteArgs>(args: SelectSubset<T, account_giftDeleteArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account_gift.
     * @param {account_giftUpdateArgs} args - Arguments to update one Account_gift.
     * @example
     * // Update one Account_gift
     * const account_gift = await prisma.account_gift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends account_giftUpdateArgs>(args: SelectSubset<T, account_giftUpdateArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Account_gifts.
     * @param {account_giftDeleteManyArgs} args - Arguments to filter Account_gifts to delete.
     * @example
     * // Delete a few Account_gifts
     * const { count } = await prisma.account_gift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends account_giftDeleteManyArgs>(args?: SelectSubset<T, account_giftDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_giftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Account_gifts
     * const account_gift = await prisma.account_gift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends account_giftUpdateManyArgs>(args: SelectSubset<T, account_giftUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Account_gifts and returns the data updated in the database.
     * @param {account_giftUpdateManyAndReturnArgs} args - Arguments to update many Account_gifts.
     * @example
     * // Update many Account_gifts
     * const account_gift = await prisma.account_gift.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Account_gifts and only return the `id`
     * const account_giftWithIdOnly = await prisma.account_gift.updateManyAndReturn({
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
    updateManyAndReturn<T extends account_giftUpdateManyAndReturnArgs>(args: SelectSubset<T, account_giftUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account_gift.
     * @param {account_giftUpsertArgs} args - Arguments to update or create a Account_gift.
     * @example
     * // Update or create a Account_gift
     * const account_gift = await prisma.account_gift.upsert({
     *   create: {
     *     // ... data to create a Account_gift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account_gift we want to update
     *   }
     * })
     */
    upsert<T extends account_giftUpsertArgs>(args: SelectSubset<T, account_giftUpsertArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Account_gifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_giftCountArgs} args - Arguments to filter Account_gifts to count.
     * @example
     * // Count the number of Account_gifts
     * const count = await prisma.account_gift.count({
     *   where: {
     *     // ... the filter for the Account_gifts we want to count
     *   }
     * })
    **/
    count<T extends account_giftCountArgs>(
      args?: Subset<T, account_giftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Account_giftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account_gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Account_giftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Account_giftAggregateArgs>(args: Subset<T, Account_giftAggregateArgs>): Prisma.PrismaPromise<GetAccount_giftAggregateType<T>>

    /**
     * Group by Account_gift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {account_giftGroupByArgs} args - Group by arguments.
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
      T extends account_giftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: account_giftGroupByArgs['orderBy'] }
        : { orderBy?: account_giftGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, account_giftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccount_giftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the account_gift model
   */
  readonly fields: account_giftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for account_gift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__account_giftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nft<T extends nftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, nftDefaultArgs<ExtArgs>>): Prisma__nftClient<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    case<T extends gift_caseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, gift_caseDefaultArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    transaction<T extends account_gift$transactionArgs<ExtArgs> = {}>(args?: Subset<T, account_gift$transactionArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the account_gift model
   */
  interface account_giftFieldRefs {
    readonly id: FieldRef<"account_gift", 'String'>
    readonly price: FieldRef<"account_gift", 'Float'>
    readonly isSold: FieldRef<"account_gift", 'Boolean'>
    readonly isWithdraw: FieldRef<"account_gift", 'Boolean'>
    readonly accountId: FieldRef<"account_gift", 'String'>
    readonly nftId: FieldRef<"account_gift", 'String'>
    readonly caseId: FieldRef<"account_gift", 'String'>
    readonly createdAt: FieldRef<"account_gift", 'DateTime'>
    readonly updatedAt: FieldRef<"account_gift", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * account_gift findUnique
   */
  export type account_giftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * Filter, which account_gift to fetch.
     */
    where: account_giftWhereUniqueInput
  }

  /**
   * account_gift findUniqueOrThrow
   */
  export type account_giftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * Filter, which account_gift to fetch.
     */
    where: account_giftWhereUniqueInput
  }

  /**
   * account_gift findFirst
   */
  export type account_giftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * Filter, which account_gift to fetch.
     */
    where?: account_giftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_gifts to fetch.
     */
    orderBy?: account_giftOrderByWithRelationInput | account_giftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_gifts.
     */
    cursor?: account_giftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_gifts.
     */
    distinct?: Account_giftScalarFieldEnum | Account_giftScalarFieldEnum[]
  }

  /**
   * account_gift findFirstOrThrow
   */
  export type account_giftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * Filter, which account_gift to fetch.
     */
    where?: account_giftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_gifts to fetch.
     */
    orderBy?: account_giftOrderByWithRelationInput | account_giftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for account_gifts.
     */
    cursor?: account_giftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_gifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of account_gifts.
     */
    distinct?: Account_giftScalarFieldEnum | Account_giftScalarFieldEnum[]
  }

  /**
   * account_gift findMany
   */
  export type account_giftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * Filter, which account_gifts to fetch.
     */
    where?: account_giftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of account_gifts to fetch.
     */
    orderBy?: account_giftOrderByWithRelationInput | account_giftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing account_gifts.
     */
    cursor?: account_giftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` account_gifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` account_gifts.
     */
    skip?: number
    distinct?: Account_giftScalarFieldEnum | Account_giftScalarFieldEnum[]
  }

  /**
   * account_gift create
   */
  export type account_giftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * The data needed to create a account_gift.
     */
    data: XOR<account_giftCreateInput, account_giftUncheckedCreateInput>
  }

  /**
   * account_gift createMany
   */
  export type account_giftCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many account_gifts.
     */
    data: account_giftCreateManyInput | account_giftCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * account_gift createManyAndReturn
   */
  export type account_giftCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * The data used to create many account_gifts.
     */
    data: account_giftCreateManyInput | account_giftCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * account_gift update
   */
  export type account_giftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * The data needed to update a account_gift.
     */
    data: XOR<account_giftUpdateInput, account_giftUncheckedUpdateInput>
    /**
     * Choose, which account_gift to update.
     */
    where: account_giftWhereUniqueInput
  }

  /**
   * account_gift updateMany
   */
  export type account_giftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update account_gifts.
     */
    data: XOR<account_giftUpdateManyMutationInput, account_giftUncheckedUpdateManyInput>
    /**
     * Filter which account_gifts to update
     */
    where?: account_giftWhereInput
    /**
     * Limit how many account_gifts to update.
     */
    limit?: number
  }

  /**
   * account_gift updateManyAndReturn
   */
  export type account_giftUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * The data used to update account_gifts.
     */
    data: XOR<account_giftUpdateManyMutationInput, account_giftUncheckedUpdateManyInput>
    /**
     * Filter which account_gifts to update
     */
    where?: account_giftWhereInput
    /**
     * Limit how many account_gifts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * account_gift upsert
   */
  export type account_giftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * The filter to search for the account_gift to update in case it exists.
     */
    where: account_giftWhereUniqueInput
    /**
     * In case the account_gift found by the `where` argument doesn't exist, create a new account_gift with this data.
     */
    create: XOR<account_giftCreateInput, account_giftUncheckedCreateInput>
    /**
     * In case the account_gift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<account_giftUpdateInput, account_giftUncheckedUpdateInput>
  }

  /**
   * account_gift delete
   */
  export type account_giftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    /**
     * Filter which account_gift to delete.
     */
    where: account_giftWhereUniqueInput
  }

  /**
   * account_gift deleteMany
   */
  export type account_giftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which account_gifts to delete
     */
    where?: account_giftWhereInput
    /**
     * Limit how many account_gifts to delete.
     */
    limit?: number
  }

  /**
   * account_gift.transaction
   */
  export type account_gift$transactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    where?: transactionWhereInput
  }

  /**
   * account_gift without action
   */
  export type account_giftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
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
   * Model gift_case
   */

  export type AggregateGift_case = {
    _count: Gift_caseCountAggregateOutputType | null
    _avg: Gift_caseAvgAggregateOutputType | null
    _sum: Gift_caseSumAggregateOutputType | null
    _min: Gift_caseMinAggregateOutputType | null
    _max: Gift_caseMaxAggregateOutputType | null
  }

  export type Gift_caseAvgAggregateOutputType = {
    price: number | null
  }

  export type Gift_caseSumAggregateOutputType = {
    price: number | null
  }

  export type Gift_caseMinAggregateOutputType = {
    id: string | null
    sku: string | null
    title: string | null
    price: number | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Gift_caseMaxAggregateOutputType = {
    id: string | null
    sku: string | null
    title: string | null
    price: number | null
    isArchived: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Gift_caseCountAggregateOutputType = {
    id: number
    sku: number
    title: number
    price: number
    isArchived: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Gift_caseAvgAggregateInputType = {
    price?: true
  }

  export type Gift_caseSumAggregateInputType = {
    price?: true
  }

  export type Gift_caseMinAggregateInputType = {
    id?: true
    sku?: true
    title?: true
    price?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Gift_caseMaxAggregateInputType = {
    id?: true
    sku?: true
    title?: true
    price?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Gift_caseCountAggregateInputType = {
    id?: true
    sku?: true
    title?: true
    price?: true
    isArchived?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Gift_caseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gift_case to aggregate.
     */
    where?: gift_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_cases to fetch.
     */
    orderBy?: gift_caseOrderByWithRelationInput | gift_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gift_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gift_cases
    **/
    _count?: true | Gift_caseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gift_caseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gift_caseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gift_caseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gift_caseMaxAggregateInputType
  }

  export type GetGift_caseAggregateType<T extends Gift_caseAggregateArgs> = {
        [P in keyof T & keyof AggregateGift_case]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGift_case[P]>
      : GetScalarType<T[P], AggregateGift_case[P]>
  }




  export type gift_caseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gift_caseWhereInput
    orderBy?: gift_caseOrderByWithAggregationInput | gift_caseOrderByWithAggregationInput[]
    by: Gift_caseScalarFieldEnum[] | Gift_caseScalarFieldEnum
    having?: gift_caseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gift_caseCountAggregateInputType | true
    _avg?: Gift_caseAvgAggregateInputType
    _sum?: Gift_caseSumAggregateInputType
    _min?: Gift_caseMinAggregateInputType
    _max?: Gift_caseMaxAggregateInputType
  }

  export type Gift_caseGroupByOutputType = {
    id: string
    sku: string
    title: string
    price: number
    isArchived: boolean
    createdAt: Date
    updatedAt: Date
    _count: Gift_caseCountAggregateOutputType | null
    _avg: Gift_caseAvgAggregateOutputType | null
    _sum: Gift_caseSumAggregateOutputType | null
    _min: Gift_caseMinAggregateOutputType | null
    _max: Gift_caseMaxAggregateOutputType | null
  }

  type GetGift_caseGroupByPayload<T extends gift_caseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gift_caseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gift_caseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gift_caseGroupByOutputType[P]>
            : GetScalarType<T[P], Gift_caseGroupByOutputType[P]>
        }
      >
    >


  export type gift_caseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    title?: boolean
    price?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gifts?: boolean | gift_case$giftsArgs<ExtArgs>
    accountGifts?: boolean | gift_case$accountGiftsArgs<ExtArgs>
    _count?: boolean | Gift_caseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gift_case"]>

  export type gift_caseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    title?: boolean
    price?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gift_case"]>

  export type gift_caseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sku?: boolean
    title?: boolean
    price?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gift_case"]>

  export type gift_caseSelectScalar = {
    id?: boolean
    sku?: boolean
    title?: boolean
    price?: boolean
    isArchived?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type gift_caseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sku" | "title" | "price" | "isArchived" | "createdAt" | "updatedAt", ExtArgs["result"]["gift_case"]>
  export type gift_caseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gifts?: boolean | gift_case$giftsArgs<ExtArgs>
    accountGifts?: boolean | gift_case$accountGiftsArgs<ExtArgs>
    _count?: boolean | Gift_caseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type gift_caseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type gift_caseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $gift_casePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gift_case"
    objects: {
      gifts: Prisma.$nftPayload<ExtArgs>[]
      accountGifts: Prisma.$account_giftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sku: string
      title: string
      price: number
      isArchived: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gift_case"]>
    composites: {}
  }

  type gift_caseGetPayload<S extends boolean | null | undefined | gift_caseDefaultArgs> = $Result.GetResult<Prisma.$gift_casePayload, S>

  type gift_caseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<gift_caseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Gift_caseCountAggregateInputType | true
    }

  export interface gift_caseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gift_case'], meta: { name: 'gift_case' } }
    /**
     * Find zero or one Gift_case that matches the filter.
     * @param {gift_caseFindUniqueArgs} args - Arguments to find a Gift_case
     * @example
     * // Get one Gift_case
     * const gift_case = await prisma.gift_case.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gift_caseFindUniqueArgs>(args: SelectSubset<T, gift_caseFindUniqueArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Gift_case that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {gift_caseFindUniqueOrThrowArgs} args - Arguments to find a Gift_case
     * @example
     * // Get one Gift_case
     * const gift_case = await prisma.gift_case.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gift_caseFindUniqueOrThrowArgs>(args: SelectSubset<T, gift_caseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift_case that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_caseFindFirstArgs} args - Arguments to find a Gift_case
     * @example
     * // Get one Gift_case
     * const gift_case = await prisma.gift_case.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gift_caseFindFirstArgs>(args?: SelectSubset<T, gift_caseFindFirstArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Gift_case that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_caseFindFirstOrThrowArgs} args - Arguments to find a Gift_case
     * @example
     * // Get one Gift_case
     * const gift_case = await prisma.gift_case.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gift_caseFindFirstOrThrowArgs>(args?: SelectSubset<T, gift_caseFindFirstOrThrowArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Gift_cases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_caseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gift_cases
     * const gift_cases = await prisma.gift_case.findMany()
     * 
     * // Get first 10 Gift_cases
     * const gift_cases = await prisma.gift_case.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gift_caseWithIdOnly = await prisma.gift_case.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends gift_caseFindManyArgs>(args?: SelectSubset<T, gift_caseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Gift_case.
     * @param {gift_caseCreateArgs} args - Arguments to create a Gift_case.
     * @example
     * // Create one Gift_case
     * const Gift_case = await prisma.gift_case.create({
     *   data: {
     *     // ... data to create a Gift_case
     *   }
     * })
     * 
     */
    create<T extends gift_caseCreateArgs>(args: SelectSubset<T, gift_caseCreateArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Gift_cases.
     * @param {gift_caseCreateManyArgs} args - Arguments to create many Gift_cases.
     * @example
     * // Create many Gift_cases
     * const gift_case = await prisma.gift_case.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gift_caseCreateManyArgs>(args?: SelectSubset<T, gift_caseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gift_cases and returns the data saved in the database.
     * @param {gift_caseCreateManyAndReturnArgs} args - Arguments to create many Gift_cases.
     * @example
     * // Create many Gift_cases
     * const gift_case = await prisma.gift_case.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gift_cases and only return the `id`
     * const gift_caseWithIdOnly = await prisma.gift_case.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gift_caseCreateManyAndReturnArgs>(args?: SelectSubset<T, gift_caseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Gift_case.
     * @param {gift_caseDeleteArgs} args - Arguments to delete one Gift_case.
     * @example
     * // Delete one Gift_case
     * const Gift_case = await prisma.gift_case.delete({
     *   where: {
     *     // ... filter to delete one Gift_case
     *   }
     * })
     * 
     */
    delete<T extends gift_caseDeleteArgs>(args: SelectSubset<T, gift_caseDeleteArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Gift_case.
     * @param {gift_caseUpdateArgs} args - Arguments to update one Gift_case.
     * @example
     * // Update one Gift_case
     * const gift_case = await prisma.gift_case.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gift_caseUpdateArgs>(args: SelectSubset<T, gift_caseUpdateArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Gift_cases.
     * @param {gift_caseDeleteManyArgs} args - Arguments to filter Gift_cases to delete.
     * @example
     * // Delete a few Gift_cases
     * const { count } = await prisma.gift_case.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gift_caseDeleteManyArgs>(args?: SelectSubset<T, gift_caseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gift_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_caseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gift_cases
     * const gift_case = await prisma.gift_case.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gift_caseUpdateManyArgs>(args: SelectSubset<T, gift_caseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gift_cases and returns the data updated in the database.
     * @param {gift_caseUpdateManyAndReturnArgs} args - Arguments to update many Gift_cases.
     * @example
     * // Update many Gift_cases
     * const gift_case = await prisma.gift_case.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Gift_cases and only return the `id`
     * const gift_caseWithIdOnly = await prisma.gift_case.updateManyAndReturn({
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
    updateManyAndReturn<T extends gift_caseUpdateManyAndReturnArgs>(args: SelectSubset<T, gift_caseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Gift_case.
     * @param {gift_caseUpsertArgs} args - Arguments to update or create a Gift_case.
     * @example
     * // Update or create a Gift_case
     * const gift_case = await prisma.gift_case.upsert({
     *   create: {
     *     // ... data to create a Gift_case
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gift_case we want to update
     *   }
     * })
     */
    upsert<T extends gift_caseUpsertArgs>(args: SelectSubset<T, gift_caseUpsertArgs<ExtArgs>>): Prisma__gift_caseClient<$Result.GetResult<Prisma.$gift_casePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Gift_cases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_caseCountArgs} args - Arguments to filter Gift_cases to count.
     * @example
     * // Count the number of Gift_cases
     * const count = await prisma.gift_case.count({
     *   where: {
     *     // ... the filter for the Gift_cases we want to count
     *   }
     * })
    **/
    count<T extends gift_caseCountArgs>(
      args?: Subset<T, gift_caseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gift_caseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gift_case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gift_caseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Gift_caseAggregateArgs>(args: Subset<T, Gift_caseAggregateArgs>): Prisma.PrismaPromise<GetGift_caseAggregateType<T>>

    /**
     * Group by Gift_case.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gift_caseGroupByArgs} args - Group by arguments.
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
      T extends gift_caseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gift_caseGroupByArgs['orderBy'] }
        : { orderBy?: gift_caseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, gift_caseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGift_caseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gift_case model
   */
  readonly fields: gift_caseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gift_case.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gift_caseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gifts<T extends gift_case$giftsArgs<ExtArgs> = {}>(args?: Subset<T, gift_case$giftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$nftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    accountGifts<T extends gift_case$accountGiftsArgs<ExtArgs> = {}>(args?: Subset<T, gift_case$accountGiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the gift_case model
   */
  interface gift_caseFieldRefs {
    readonly id: FieldRef<"gift_case", 'String'>
    readonly sku: FieldRef<"gift_case", 'String'>
    readonly title: FieldRef<"gift_case", 'String'>
    readonly price: FieldRef<"gift_case", 'Float'>
    readonly isArchived: FieldRef<"gift_case", 'Boolean'>
    readonly createdAt: FieldRef<"gift_case", 'DateTime'>
    readonly updatedAt: FieldRef<"gift_case", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * gift_case findUnique
   */
  export type gift_caseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * Filter, which gift_case to fetch.
     */
    where: gift_caseWhereUniqueInput
  }

  /**
   * gift_case findUniqueOrThrow
   */
  export type gift_caseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * Filter, which gift_case to fetch.
     */
    where: gift_caseWhereUniqueInput
  }

  /**
   * gift_case findFirst
   */
  export type gift_caseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * Filter, which gift_case to fetch.
     */
    where?: gift_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_cases to fetch.
     */
    orderBy?: gift_caseOrderByWithRelationInput | gift_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gift_cases.
     */
    cursor?: gift_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gift_cases.
     */
    distinct?: Gift_caseScalarFieldEnum | Gift_caseScalarFieldEnum[]
  }

  /**
   * gift_case findFirstOrThrow
   */
  export type gift_caseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * Filter, which gift_case to fetch.
     */
    where?: gift_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_cases to fetch.
     */
    orderBy?: gift_caseOrderByWithRelationInput | gift_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gift_cases.
     */
    cursor?: gift_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_cases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gift_cases.
     */
    distinct?: Gift_caseScalarFieldEnum | Gift_caseScalarFieldEnum[]
  }

  /**
   * gift_case findMany
   */
  export type gift_caseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * Filter, which gift_cases to fetch.
     */
    where?: gift_caseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gift_cases to fetch.
     */
    orderBy?: gift_caseOrderByWithRelationInput | gift_caseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gift_cases.
     */
    cursor?: gift_caseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gift_cases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gift_cases.
     */
    skip?: number
    distinct?: Gift_caseScalarFieldEnum | Gift_caseScalarFieldEnum[]
  }

  /**
   * gift_case create
   */
  export type gift_caseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * The data needed to create a gift_case.
     */
    data: XOR<gift_caseCreateInput, gift_caseUncheckedCreateInput>
  }

  /**
   * gift_case createMany
   */
  export type gift_caseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gift_cases.
     */
    data: gift_caseCreateManyInput | gift_caseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gift_case createManyAndReturn
   */
  export type gift_caseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * The data used to create many gift_cases.
     */
    data: gift_caseCreateManyInput | gift_caseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gift_case update
   */
  export type gift_caseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * The data needed to update a gift_case.
     */
    data: XOR<gift_caseUpdateInput, gift_caseUncheckedUpdateInput>
    /**
     * Choose, which gift_case to update.
     */
    where: gift_caseWhereUniqueInput
  }

  /**
   * gift_case updateMany
   */
  export type gift_caseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gift_cases.
     */
    data: XOR<gift_caseUpdateManyMutationInput, gift_caseUncheckedUpdateManyInput>
    /**
     * Filter which gift_cases to update
     */
    where?: gift_caseWhereInput
    /**
     * Limit how many gift_cases to update.
     */
    limit?: number
  }

  /**
   * gift_case updateManyAndReturn
   */
  export type gift_caseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * The data used to update gift_cases.
     */
    data: XOR<gift_caseUpdateManyMutationInput, gift_caseUncheckedUpdateManyInput>
    /**
     * Filter which gift_cases to update
     */
    where?: gift_caseWhereInput
    /**
     * Limit how many gift_cases to update.
     */
    limit?: number
  }

  /**
   * gift_case upsert
   */
  export type gift_caseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * The filter to search for the gift_case to update in case it exists.
     */
    where: gift_caseWhereUniqueInput
    /**
     * In case the gift_case found by the `where` argument doesn't exist, create a new gift_case with this data.
     */
    create: XOR<gift_caseCreateInput, gift_caseUncheckedCreateInput>
    /**
     * In case the gift_case was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gift_caseUpdateInput, gift_caseUncheckedUpdateInput>
  }

  /**
   * gift_case delete
   */
  export type gift_caseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
    /**
     * Filter which gift_case to delete.
     */
    where: gift_caseWhereUniqueInput
  }

  /**
   * gift_case deleteMany
   */
  export type gift_caseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gift_cases to delete
     */
    where?: gift_caseWhereInput
    /**
     * Limit how many gift_cases to delete.
     */
    limit?: number
  }

  /**
   * gift_case.gifts
   */
  export type gift_case$giftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: nftWhereInput
    orderBy?: nftOrderByWithRelationInput | nftOrderByWithRelationInput[]
    cursor?: nftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NftScalarFieldEnum | NftScalarFieldEnum[]
  }

  /**
   * gift_case.accountGifts
   */
  export type gift_case$accountGiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    where?: account_giftWhereInput
    orderBy?: account_giftOrderByWithRelationInput | account_giftOrderByWithRelationInput[]
    cursor?: account_giftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Account_giftScalarFieldEnum | Account_giftScalarFieldEnum[]
  }

  /**
   * gift_case without action
   */
  export type gift_caseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gift_case
     */
    select?: gift_caseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the gift_case
     */
    omit?: gift_caseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: gift_caseInclude<ExtArgs> | null
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
   * Model transaction
   */

  export type AggregateTransaction = {
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  export type TransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type TransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type TransactionMinAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    amount: number | null
    address: string | null
    accountId: string | null
    account_giftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.TransactionType | null
    status: $Enums.TransactionStatus | null
    amount: number | null
    address: string | null
    accountId: string | null
    account_giftId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TransactionCountAggregateOutputType = {
    id: number
    type: number
    status: number
    amount: number
    address: number
    accountId: number
    account_giftId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TransactionAvgAggregateInputType = {
    amount?: true
  }

  export type TransactionSumAggregateInputType = {
    amount?: true
  }

  export type TransactionMinAggregateInputType = {
    id?: true
    type?: true
    status?: true
    amount?: true
    address?: true
    accountId?: true
    account_giftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionMaxAggregateInputType = {
    id?: true
    type?: true
    status?: true
    amount?: true
    address?: true
    accountId?: true
    account_giftId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TransactionCountAggregateInputType = {
    id?: true
    type?: true
    status?: true
    amount?: true
    address?: true
    accountId?: true
    account_giftId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transaction to aggregate.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned transactions
    **/
    _count?: true | TransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionMaxAggregateInputType
  }

  export type GetTransactionAggregateType<T extends TransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransaction[P]>
      : GetScalarType<T[P], AggregateTransaction[P]>
  }




  export type transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: transactionWhereInput
    orderBy?: transactionOrderByWithAggregationInput | transactionOrderByWithAggregationInput[]
    by: TransactionScalarFieldEnum[] | TransactionScalarFieldEnum
    having?: transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCountAggregateInputType | true
    _avg?: TransactionAvgAggregateInputType
    _sum?: TransactionSumAggregateInputType
    _min?: TransactionMinAggregateInputType
    _max?: TransactionMaxAggregateInputType
  }

  export type TransactionGroupByOutputType = {
    id: string
    type: $Enums.TransactionType
    status: $Enums.TransactionStatus
    amount: number
    address: string | null
    accountId: string
    account_giftId: string | null
    createdAt: Date
    updatedAt: Date
    _count: TransactionCountAggregateOutputType | null
    _avg: TransactionAvgAggregateOutputType | null
    _sum: TransactionSumAggregateOutputType | null
    _min: TransactionMinAggregateOutputType | null
    _max: TransactionMaxAggregateOutputType | null
  }

  type GetTransactionGroupByPayload<T extends transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionGroupByOutputType[P]>
        }
      >
    >


  export type transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    address?: boolean
    accountId?: boolean
    account_giftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    tonTransaction?: boolean | transaction$tonTransactionArgs<ExtArgs>
    accountGift?: boolean | transaction$accountGiftArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    address?: boolean
    accountId?: boolean
    account_giftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    accountGift?: boolean | transaction$accountGiftArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    address?: boolean
    accountId?: boolean
    account_giftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    account?: boolean | accountDefaultArgs<ExtArgs>
    accountGift?: boolean | transaction$accountGiftArgs<ExtArgs>
  }, ExtArgs["result"]["transaction"]>

  export type transactionSelectScalar = {
    id?: boolean
    type?: boolean
    status?: boolean
    amount?: boolean
    address?: boolean
    accountId?: boolean
    account_giftId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "status" | "amount" | "address" | "accountId" | "account_giftId" | "createdAt" | "updatedAt", ExtArgs["result"]["transaction"]>
  export type transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    tonTransaction?: boolean | transaction$tonTransactionArgs<ExtArgs>
    accountGift?: boolean | transaction$accountGiftArgs<ExtArgs>
  }
  export type transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    accountGift?: boolean | transaction$accountGiftArgs<ExtArgs>
  }
  export type transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | accountDefaultArgs<ExtArgs>
    accountGift?: boolean | transaction$accountGiftArgs<ExtArgs>
  }

  export type $transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "transaction"
    objects: {
      account: Prisma.$accountPayload<ExtArgs>
      tonTransaction: Prisma.$ton_transactionPayload<ExtArgs> | null
      accountGift: Prisma.$account_giftPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.TransactionType
      status: $Enums.TransactionStatus
      amount: number
      address: string | null
      accountId: string
      account_giftId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["transaction"]>
    composites: {}
  }

  type transactionGetPayload<S extends boolean | null | undefined | transactionDefaultArgs> = $Result.GetResult<Prisma.$transactionPayload, S>

  type transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCountAggregateInputType | true
    }

  export interface transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['transaction'], meta: { name: 'transaction' } }
    /**
     * Find zero or one Transaction that matches the filter.
     * @param {transactionFindUniqueArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends transactionFindUniqueArgs>(args: SelectSubset<T, transactionFindUniqueArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {transactionFindUniqueOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends transactionFindFirstArgs>(args?: SelectSubset<T, transactionFindFirstArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindFirstOrThrowArgs} args - Arguments to find a Transaction
     * @example
     * // Get one Transaction
     * const transaction = await prisma.transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Transactions
     * const transactions = await prisma.transaction.findMany()
     * 
     * // Get first 10 Transactions
     * const transactions = await prisma.transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionWithIdOnly = await prisma.transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends transactionFindManyArgs>(args?: SelectSubset<T, transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Transaction.
     * @param {transactionCreateArgs} args - Arguments to create a Transaction.
     * @example
     * // Create one Transaction
     * const Transaction = await prisma.transaction.create({
     *   data: {
     *     // ... data to create a Transaction
     *   }
     * })
     * 
     */
    create<T extends transactionCreateArgs>(args: SelectSubset<T, transactionCreateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Transactions.
     * @param {transactionCreateManyArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends transactionCreateManyArgs>(args?: SelectSubset<T, transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Transactions and returns the data saved in the database.
     * @param {transactionCreateManyAndReturnArgs} args - Arguments to create many Transactions.
     * @example
     * // Create many Transactions
     * const transaction = await prisma.transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Transaction.
     * @param {transactionDeleteArgs} args - Arguments to delete one Transaction.
     * @example
     * // Delete one Transaction
     * const Transaction = await prisma.transaction.delete({
     *   where: {
     *     // ... filter to delete one Transaction
     *   }
     * })
     * 
     */
    delete<T extends transactionDeleteArgs>(args: SelectSubset<T, transactionDeleteArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Transaction.
     * @param {transactionUpdateArgs} args - Arguments to update one Transaction.
     * @example
     * // Update one Transaction
     * const transaction = await prisma.transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends transactionUpdateArgs>(args: SelectSubset<T, transactionUpdateArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Transactions.
     * @param {transactionDeleteManyArgs} args - Arguments to filter Transactions to delete.
     * @example
     * // Delete a few Transactions
     * const { count } = await prisma.transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends transactionDeleteManyArgs>(args?: SelectSubset<T, transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends transactionUpdateManyArgs>(args: SelectSubset<T, transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Transactions and returns the data updated in the database.
     * @param {transactionUpdateManyAndReturnArgs} args - Arguments to update many Transactions.
     * @example
     * // Update many Transactions
     * const transaction = await prisma.transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Transactions and only return the `id`
     * const transactionWithIdOnly = await prisma.transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Transaction.
     * @param {transactionUpsertArgs} args - Arguments to update or create a Transaction.
     * @example
     * // Update or create a Transaction
     * const transaction = await prisma.transaction.upsert({
     *   create: {
     *     // ... data to create a Transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Transaction we want to update
     *   }
     * })
     */
    upsert<T extends transactionUpsertArgs>(args: SelectSubset<T, transactionUpsertArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionCountArgs} args - Arguments to filter Transactions to count.
     * @example
     * // Count the number of Transactions
     * const count = await prisma.transaction.count({
     *   where: {
     *     // ... the filter for the Transactions we want to count
     *   }
     * })
    **/
    count<T extends transactionCountArgs>(
      args?: Subset<T, transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TransactionAggregateArgs>(args: Subset<T, TransactionAggregateArgs>): Prisma.PrismaPromise<GetTransactionAggregateType<T>>

    /**
     * Group by Transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {transactionGroupByArgs} args - Group by arguments.
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
      T extends transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: transactionGroupByArgs['orderBy'] }
        : { orderBy?: transactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the transaction model
   */
  readonly fields: transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends accountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, accountDefaultArgs<ExtArgs>>): Prisma__accountClient<$Result.GetResult<Prisma.$accountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tonTransaction<T extends transaction$tonTransactionArgs<ExtArgs> = {}>(args?: Subset<T, transaction$tonTransactionArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    accountGift<T extends transaction$accountGiftArgs<ExtArgs> = {}>(args?: Subset<T, transaction$accountGiftArgs<ExtArgs>>): Prisma__account_giftClient<$Result.GetResult<Prisma.$account_giftPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the transaction model
   */
  interface transactionFieldRefs {
    readonly id: FieldRef<"transaction", 'String'>
    readonly type: FieldRef<"transaction", 'TransactionType'>
    readonly status: FieldRef<"transaction", 'TransactionStatus'>
    readonly amount: FieldRef<"transaction", 'Float'>
    readonly address: FieldRef<"transaction", 'String'>
    readonly accountId: FieldRef<"transaction", 'String'>
    readonly account_giftId: FieldRef<"transaction", 'String'>
    readonly createdAt: FieldRef<"transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * transaction findUnique
   */
  export type transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findUniqueOrThrow
   */
  export type transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction findFirst
   */
  export type transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findFirstOrThrow
   */
  export type transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transaction to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of transactions.
     */
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction findMany
   */
  export type transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter, which transactions to fetch.
     */
    where?: transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of transactions to fetch.
     */
    orderBy?: transactionOrderByWithRelationInput | transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing transactions.
     */
    cursor?: transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` transactions.
     */
    skip?: number
    distinct?: TransactionScalarFieldEnum | TransactionScalarFieldEnum[]
  }

  /**
   * transaction create
   */
  export type transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a transaction.
     */
    data: XOR<transactionCreateInput, transactionUncheckedCreateInput>
  }

  /**
   * transaction createMany
   */
  export type transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * transaction createManyAndReturn
   */
  export type transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to create many transactions.
     */
    data: transactionCreateManyInput | transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction update
   */
  export type transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a transaction.
     */
    data: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
    /**
     * Choose, which transaction to update.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction updateMany
   */
  export type transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
  }

  /**
   * transaction updateManyAndReturn
   */
  export type transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * The data used to update transactions.
     */
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyInput>
    /**
     * Filter which transactions to update
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * transaction upsert
   */
  export type transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the transaction to update in case it exists.
     */
    where: transactionWhereUniqueInput
    /**
     * In case the transaction found by the `where` argument doesn't exist, create a new transaction with this data.
     */
    create: XOR<transactionCreateInput, transactionUncheckedCreateInput>
    /**
     * In case the transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<transactionUpdateInput, transactionUncheckedUpdateInput>
  }

  /**
   * transaction delete
   */
  export type transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
    /**
     * Filter which transaction to delete.
     */
    where: transactionWhereUniqueInput
  }

  /**
   * transaction deleteMany
   */
  export type transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which transactions to delete
     */
    where?: transactionWhereInput
    /**
     * Limit how many transactions to delete.
     */
    limit?: number
  }

  /**
   * transaction.tonTransaction
   */
  export type transaction$tonTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    where?: ton_transactionWhereInput
  }

  /**
   * transaction.accountGift
   */
  export type transaction$accountGiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the account_gift
     */
    select?: account_giftSelect<ExtArgs> | null
    /**
     * Omit specific fields from the account_gift
     */
    omit?: account_giftOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: account_giftInclude<ExtArgs> | null
    where?: account_giftWhereInput
  }

  /**
   * transaction without action
   */
  export type transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the transaction
     */
    select?: transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the transaction
     */
    omit?: transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: transactionInclude<ExtArgs> | null
  }


  /**
   * Model ton_transaction
   */

  export type AggregateTon_transaction = {
    _count: Ton_transactionCountAggregateOutputType | null
    _min: Ton_transactionMinAggregateOutputType | null
    _max: Ton_transactionMaxAggregateOutputType | null
  }

  export type Ton_transactionMinAggregateOutputType = {
    id: string | null
    from: string | null
    to: string | null
    lt: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Ton_transactionMaxAggregateOutputType = {
    id: string | null
    from: string | null
    to: string | null
    lt: string | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Ton_transactionCountAggregateOutputType = {
    id: number
    from: number
    to: number
    lt: number
    transactionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Ton_transactionMinAggregateInputType = {
    id?: true
    from?: true
    to?: true
    lt?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Ton_transactionMaxAggregateInputType = {
    id?: true
    from?: true
    to?: true
    lt?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Ton_transactionCountAggregateInputType = {
    id?: true
    from?: true
    to?: true
    lt?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Ton_transactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ton_transaction to aggregate.
     */
    where?: ton_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ton_transactions to fetch.
     */
    orderBy?: ton_transactionOrderByWithRelationInput | ton_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ton_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ton_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ton_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ton_transactions
    **/
    _count?: true | Ton_transactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ton_transactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ton_transactionMaxAggregateInputType
  }

  export type GetTon_transactionAggregateType<T extends Ton_transactionAggregateArgs> = {
        [P in keyof T & keyof AggregateTon_transaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTon_transaction[P]>
      : GetScalarType<T[P], AggregateTon_transaction[P]>
  }




  export type ton_transactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ton_transactionWhereInput
    orderBy?: ton_transactionOrderByWithAggregationInput | ton_transactionOrderByWithAggregationInput[]
    by: Ton_transactionScalarFieldEnum[] | Ton_transactionScalarFieldEnum
    having?: ton_transactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ton_transactionCountAggregateInputType | true
    _min?: Ton_transactionMinAggregateInputType
    _max?: Ton_transactionMaxAggregateInputType
  }

  export type Ton_transactionGroupByOutputType = {
    id: string
    from: string
    to: string
    lt: string | null
    transactionId: string
    createdAt: Date
    updatedAt: Date
    _count: Ton_transactionCountAggregateOutputType | null
    _min: Ton_transactionMinAggregateOutputType | null
    _max: Ton_transactionMaxAggregateOutputType | null
  }

  type GetTon_transactionGroupByPayload<T extends ton_transactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ton_transactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ton_transactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ton_transactionGroupByOutputType[P]>
            : GetScalarType<T[P], Ton_transactionGroupByOutputType[P]>
        }
      >
    >


  export type ton_transactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    lt?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ton_transaction"]>

  export type ton_transactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    lt?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ton_transaction"]>

  export type ton_transactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    from?: boolean
    to?: boolean
    lt?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ton_transaction"]>

  export type ton_transactionSelectScalar = {
    id?: boolean
    from?: boolean
    to?: boolean
    lt?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ton_transactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "from" | "to" | "lt" | "transactionId" | "createdAt" | "updatedAt", ExtArgs["result"]["ton_transaction"]>
  export type ton_transactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }
  export type ton_transactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }
  export type ton_transactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    transaction?: boolean | transactionDefaultArgs<ExtArgs>
  }

  export type $ton_transactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ton_transaction"
    objects: {
      transaction: Prisma.$transactionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      from: string
      to: string
      lt: string | null
      transactionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ton_transaction"]>
    composites: {}
  }

  type ton_transactionGetPayload<S extends boolean | null | undefined | ton_transactionDefaultArgs> = $Result.GetResult<Prisma.$ton_transactionPayload, S>

  type ton_transactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ton_transactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ton_transactionCountAggregateInputType | true
    }

  export interface ton_transactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ton_transaction'], meta: { name: 'ton_transaction' } }
    /**
     * Find zero or one Ton_transaction that matches the filter.
     * @param {ton_transactionFindUniqueArgs} args - Arguments to find a Ton_transaction
     * @example
     * // Get one Ton_transaction
     * const ton_transaction = await prisma.ton_transaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ton_transactionFindUniqueArgs>(args: SelectSubset<T, ton_transactionFindUniqueArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ton_transaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ton_transactionFindUniqueOrThrowArgs} args - Arguments to find a Ton_transaction
     * @example
     * // Get one Ton_transaction
     * const ton_transaction = await prisma.ton_transaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ton_transactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ton_transactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ton_transaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ton_transactionFindFirstArgs} args - Arguments to find a Ton_transaction
     * @example
     * // Get one Ton_transaction
     * const ton_transaction = await prisma.ton_transaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ton_transactionFindFirstArgs>(args?: SelectSubset<T, ton_transactionFindFirstArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ton_transaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ton_transactionFindFirstOrThrowArgs} args - Arguments to find a Ton_transaction
     * @example
     * // Get one Ton_transaction
     * const ton_transaction = await prisma.ton_transaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ton_transactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ton_transactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ton_transactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ton_transactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ton_transactions
     * const ton_transactions = await prisma.ton_transaction.findMany()
     * 
     * // Get first 10 Ton_transactions
     * const ton_transactions = await prisma.ton_transaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ton_transactionWithIdOnly = await prisma.ton_transaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ton_transactionFindManyArgs>(args?: SelectSubset<T, ton_transactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ton_transaction.
     * @param {ton_transactionCreateArgs} args - Arguments to create a Ton_transaction.
     * @example
     * // Create one Ton_transaction
     * const Ton_transaction = await prisma.ton_transaction.create({
     *   data: {
     *     // ... data to create a Ton_transaction
     *   }
     * })
     * 
     */
    create<T extends ton_transactionCreateArgs>(args: SelectSubset<T, ton_transactionCreateArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ton_transactions.
     * @param {ton_transactionCreateManyArgs} args - Arguments to create many Ton_transactions.
     * @example
     * // Create many Ton_transactions
     * const ton_transaction = await prisma.ton_transaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ton_transactionCreateManyArgs>(args?: SelectSubset<T, ton_transactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ton_transactions and returns the data saved in the database.
     * @param {ton_transactionCreateManyAndReturnArgs} args - Arguments to create many Ton_transactions.
     * @example
     * // Create many Ton_transactions
     * const ton_transaction = await prisma.ton_transaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ton_transactions and only return the `id`
     * const ton_transactionWithIdOnly = await prisma.ton_transaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ton_transactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ton_transactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ton_transaction.
     * @param {ton_transactionDeleteArgs} args - Arguments to delete one Ton_transaction.
     * @example
     * // Delete one Ton_transaction
     * const Ton_transaction = await prisma.ton_transaction.delete({
     *   where: {
     *     // ... filter to delete one Ton_transaction
     *   }
     * })
     * 
     */
    delete<T extends ton_transactionDeleteArgs>(args: SelectSubset<T, ton_transactionDeleteArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ton_transaction.
     * @param {ton_transactionUpdateArgs} args - Arguments to update one Ton_transaction.
     * @example
     * // Update one Ton_transaction
     * const ton_transaction = await prisma.ton_transaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ton_transactionUpdateArgs>(args: SelectSubset<T, ton_transactionUpdateArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ton_transactions.
     * @param {ton_transactionDeleteManyArgs} args - Arguments to filter Ton_transactions to delete.
     * @example
     * // Delete a few Ton_transactions
     * const { count } = await prisma.ton_transaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ton_transactionDeleteManyArgs>(args?: SelectSubset<T, ton_transactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ton_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ton_transactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ton_transactions
     * const ton_transaction = await prisma.ton_transaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ton_transactionUpdateManyArgs>(args: SelectSubset<T, ton_transactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ton_transactions and returns the data updated in the database.
     * @param {ton_transactionUpdateManyAndReturnArgs} args - Arguments to update many Ton_transactions.
     * @example
     * // Update many Ton_transactions
     * const ton_transaction = await prisma.ton_transaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ton_transactions and only return the `id`
     * const ton_transactionWithIdOnly = await prisma.ton_transaction.updateManyAndReturn({
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
    updateManyAndReturn<T extends ton_transactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ton_transactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ton_transaction.
     * @param {ton_transactionUpsertArgs} args - Arguments to update or create a Ton_transaction.
     * @example
     * // Update or create a Ton_transaction
     * const ton_transaction = await prisma.ton_transaction.upsert({
     *   create: {
     *     // ... data to create a Ton_transaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ton_transaction we want to update
     *   }
     * })
     */
    upsert<T extends ton_transactionUpsertArgs>(args: SelectSubset<T, ton_transactionUpsertArgs<ExtArgs>>): Prisma__ton_transactionClient<$Result.GetResult<Prisma.$ton_transactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ton_transactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ton_transactionCountArgs} args - Arguments to filter Ton_transactions to count.
     * @example
     * // Count the number of Ton_transactions
     * const count = await prisma.ton_transaction.count({
     *   where: {
     *     // ... the filter for the Ton_transactions we want to count
     *   }
     * })
    **/
    count<T extends ton_transactionCountArgs>(
      args?: Subset<T, ton_transactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ton_transactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ton_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ton_transactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ton_transactionAggregateArgs>(args: Subset<T, Ton_transactionAggregateArgs>): Prisma.PrismaPromise<GetTon_transactionAggregateType<T>>

    /**
     * Group by Ton_transaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ton_transactionGroupByArgs} args - Group by arguments.
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
      T extends ton_transactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ton_transactionGroupByArgs['orderBy'] }
        : { orderBy?: ton_transactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ton_transactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTon_transactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ton_transaction model
   */
  readonly fields: ton_transactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ton_transaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ton_transactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    transaction<T extends transactionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, transactionDefaultArgs<ExtArgs>>): Prisma__transactionClient<$Result.GetResult<Prisma.$transactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ton_transaction model
   */
  interface ton_transactionFieldRefs {
    readonly id: FieldRef<"ton_transaction", 'String'>
    readonly from: FieldRef<"ton_transaction", 'String'>
    readonly to: FieldRef<"ton_transaction", 'String'>
    readonly lt: FieldRef<"ton_transaction", 'String'>
    readonly transactionId: FieldRef<"ton_transaction", 'String'>
    readonly createdAt: FieldRef<"ton_transaction", 'DateTime'>
    readonly updatedAt: FieldRef<"ton_transaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ton_transaction findUnique
   */
  export type ton_transactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * Filter, which ton_transaction to fetch.
     */
    where: ton_transactionWhereUniqueInput
  }

  /**
   * ton_transaction findUniqueOrThrow
   */
  export type ton_transactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * Filter, which ton_transaction to fetch.
     */
    where: ton_transactionWhereUniqueInput
  }

  /**
   * ton_transaction findFirst
   */
  export type ton_transactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * Filter, which ton_transaction to fetch.
     */
    where?: ton_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ton_transactions to fetch.
     */
    orderBy?: ton_transactionOrderByWithRelationInput | ton_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ton_transactions.
     */
    cursor?: ton_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ton_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ton_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ton_transactions.
     */
    distinct?: Ton_transactionScalarFieldEnum | Ton_transactionScalarFieldEnum[]
  }

  /**
   * ton_transaction findFirstOrThrow
   */
  export type ton_transactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * Filter, which ton_transaction to fetch.
     */
    where?: ton_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ton_transactions to fetch.
     */
    orderBy?: ton_transactionOrderByWithRelationInput | ton_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ton_transactions.
     */
    cursor?: ton_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ton_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ton_transactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ton_transactions.
     */
    distinct?: Ton_transactionScalarFieldEnum | Ton_transactionScalarFieldEnum[]
  }

  /**
   * ton_transaction findMany
   */
  export type ton_transactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * Filter, which ton_transactions to fetch.
     */
    where?: ton_transactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ton_transactions to fetch.
     */
    orderBy?: ton_transactionOrderByWithRelationInput | ton_transactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ton_transactions.
     */
    cursor?: ton_transactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ton_transactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ton_transactions.
     */
    skip?: number
    distinct?: Ton_transactionScalarFieldEnum | Ton_transactionScalarFieldEnum[]
  }

  /**
   * ton_transaction create
   */
  export type ton_transactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * The data needed to create a ton_transaction.
     */
    data: XOR<ton_transactionCreateInput, ton_transactionUncheckedCreateInput>
  }

  /**
   * ton_transaction createMany
   */
  export type ton_transactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ton_transactions.
     */
    data: ton_transactionCreateManyInput | ton_transactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ton_transaction createManyAndReturn
   */
  export type ton_transactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * The data used to create many ton_transactions.
     */
    data: ton_transactionCreateManyInput | ton_transactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ton_transaction update
   */
  export type ton_transactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * The data needed to update a ton_transaction.
     */
    data: XOR<ton_transactionUpdateInput, ton_transactionUncheckedUpdateInput>
    /**
     * Choose, which ton_transaction to update.
     */
    where: ton_transactionWhereUniqueInput
  }

  /**
   * ton_transaction updateMany
   */
  export type ton_transactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ton_transactions.
     */
    data: XOR<ton_transactionUpdateManyMutationInput, ton_transactionUncheckedUpdateManyInput>
    /**
     * Filter which ton_transactions to update
     */
    where?: ton_transactionWhereInput
    /**
     * Limit how many ton_transactions to update.
     */
    limit?: number
  }

  /**
   * ton_transaction updateManyAndReturn
   */
  export type ton_transactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * The data used to update ton_transactions.
     */
    data: XOR<ton_transactionUpdateManyMutationInput, ton_transactionUncheckedUpdateManyInput>
    /**
     * Filter which ton_transactions to update
     */
    where?: ton_transactionWhereInput
    /**
     * Limit how many ton_transactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ton_transaction upsert
   */
  export type ton_transactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * The filter to search for the ton_transaction to update in case it exists.
     */
    where: ton_transactionWhereUniqueInput
    /**
     * In case the ton_transaction found by the `where` argument doesn't exist, create a new ton_transaction with this data.
     */
    create: XOR<ton_transactionCreateInput, ton_transactionUncheckedCreateInput>
    /**
     * In case the ton_transaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ton_transactionUpdateInput, ton_transactionUncheckedUpdateInput>
  }

  /**
   * ton_transaction delete
   */
  export type ton_transactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
    /**
     * Filter which ton_transaction to delete.
     */
    where: ton_transactionWhereUniqueInput
  }

  /**
   * ton_transaction deleteMany
   */
  export type ton_transactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ton_transactions to delete
     */
    where?: ton_transactionWhereInput
    /**
     * Limit how many ton_transactions to delete.
     */
    limit?: number
  }

  /**
   * ton_transaction without action
   */
  export type ton_transactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ton_transaction
     */
    select?: ton_transactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ton_transaction
     */
    omit?: ton_transactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ton_transactionInclude<ExtArgs> | null
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
    percent: 'percent',
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
    avatarUrl: 'avatarUrl',
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
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NftScalarFieldEnum = (typeof NftScalarFieldEnum)[keyof typeof NftScalarFieldEnum]


  export const Nft_descriptionScalarFieldEnum: {
    id: 'id',
    roi: 'roi',
    iterations: 'iterations',
    isSoldOut: 'isSoldOut',
    isNew: 'isNew',
    isHot: 'isHot',
    nftId: 'nftId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Nft_descriptionScalarFieldEnum = (typeof Nft_descriptionScalarFieldEnum)[keyof typeof Nft_descriptionScalarFieldEnum]


  export const Account_giftScalarFieldEnum: {
    id: 'id',
    price: 'price',
    isSold: 'isSold',
    isWithdraw: 'isWithdraw',
    accountId: 'accountId',
    nftId: 'nftId',
    caseId: 'caseId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Account_giftScalarFieldEnum = (typeof Account_giftScalarFieldEnum)[keyof typeof Account_giftScalarFieldEnum]


  export const Account_nftScalarFieldEnum: {
    accountId: 'accountId',
    nftId: 'nftId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Account_nftScalarFieldEnum = (typeof Account_nftScalarFieldEnum)[keyof typeof Account_nftScalarFieldEnum]


  export const Gift_caseScalarFieldEnum: {
    id: 'id',
    sku: 'sku',
    title: 'title',
    price: 'price',
    isArchived: 'isArchived',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Gift_caseScalarFieldEnum = (typeof Gift_caseScalarFieldEnum)[keyof typeof Gift_caseScalarFieldEnum]


  export const Account_nft_transactionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    account_nftAccountId: 'account_nftAccountId',
    account_nftNftId: 'account_nftNftId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Account_nft_transactionScalarFieldEnum = (typeof Account_nft_transactionScalarFieldEnum)[keyof typeof Account_nft_transactionScalarFieldEnum]


  export const TransactionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    status: 'status',
    amount: 'amount',
    address: 'address',
    accountId: 'accountId',
    account_giftId: 'account_giftId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum]


  export const Ton_transactionScalarFieldEnum: {
    id: 'id',
    from: 'from',
    to: 'to',
    lt: 'lt',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Ton_transactionScalarFieldEnum = (typeof Ton_transactionScalarFieldEnum)[keyof typeof Ton_transactionScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Language'
   */
  export type EnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language'>
    


  /**
   * Reference to a field of type 'Language[]'
   */
  export type ListEnumLanguageFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Language[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'TransactionType'
   */
  export type EnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType'>
    


  /**
   * Reference to a field of type 'TransactionType[]'
   */
  export type ListEnumTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionType[]'>
    


  /**
   * Reference to a field of type 'TransactionStatus'
   */
  export type EnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus'>
    


  /**
   * Reference to a field of type 'TransactionStatus[]'
   */
  export type ListEnumTransactionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransactionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type referralWhereInput = {
    AND?: referralWhereInput | referralWhereInput[]
    OR?: referralWhereInput[]
    NOT?: referralWhereInput | referralWhereInput[]
    id?: StringFilter<"referral"> | string
    value?: StringFilter<"referral"> | string
    percent?: FloatFilter<"referral"> | number
    accountId?: StringFilter<"referral"> | string
    createdAt?: DateTimeFilter<"referral"> | Date | string
    updatedAt?: DateTimeFilter<"referral"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    accounts?: AccountListRelationFilter
  }

  export type referralOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    percent?: SortOrder
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
    percent?: FloatFilter<"referral"> | number
    createdAt?: DateTimeFilter<"referral"> | Date | string
    updatedAt?: DateTimeFilter<"referral"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    accounts?: AccountListRelationFilter
  }, "id" | "accountId" | "value">

  export type referralOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    percent?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: referralCountOrderByAggregateInput
    _avg?: referralAvgOrderByAggregateInput
    _max?: referralMaxOrderByAggregateInput
    _min?: referralMinOrderByAggregateInput
    _sum?: referralSumOrderByAggregateInput
  }

  export type referralScalarWhereWithAggregatesInput = {
    AND?: referralScalarWhereWithAggregatesInput | referralScalarWhereWithAggregatesInput[]
    OR?: referralScalarWhereWithAggregatesInput[]
    NOT?: referralScalarWhereWithAggregatesInput | referralScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"referral"> | string
    value?: StringWithAggregatesFilter<"referral"> | string
    percent?: FloatWithAggregatesFilter<"referral"> | number
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
    avatarUrl?: StringNullableFilter<"account"> | string | null
    referredById?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    referral?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    referredBy?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    nfts?: Account_nftListRelationFilter
    gifts?: Account_giftListRelationFilter
    transactions?: TransactionListRelationFilter
  }

  export type accountOrderByWithRelationInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    referredById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    referral?: referralOrderByWithRelationInput
    referredBy?: referralOrderByWithRelationInput
    nfts?: account_nftOrderByRelationAggregateInput
    gifts?: account_giftOrderByRelationAggregateInput
    transactions?: transactionOrderByRelationAggregateInput
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
    avatarUrl?: StringNullableFilter<"account"> | string | null
    referredById?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
    referral?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    referredBy?: XOR<ReferralNullableScalarRelationFilter, referralWhereInput> | null
    nfts?: Account_nftListRelationFilter
    gifts?: Account_giftListRelationFilter
    transactions?: TransactionListRelationFilter
  }, "id" | "username">

  export type accountOrderByWithAggregationInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
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
    avatarUrl?: StringNullableWithAggregatesFilter<"account"> | string | null
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
    isArchived?: BoolFilter<"nft"> | boolean
    createdAt?: DateTimeFilter<"nft"> | Date | string
    updatedAt?: DateTimeFilter<"nft"> | Date | string
    description?: XOR<Nft_descriptionNullableScalarRelationFilter, nft_descriptionWhereInput> | null
    cases?: Gift_caseListRelationFilter
    nftAccounts?: Account_nftListRelationFilter
    giftAccounts?: Account_giftListRelationFilter
  }

  export type nftOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: nft_descriptionOrderByWithRelationInput
    cases?: gift_caseOrderByRelationAggregateInput
    nftAccounts?: account_nftOrderByRelationAggregateInput
    giftAccounts?: account_giftOrderByRelationAggregateInput
  }

  export type nftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: nftWhereInput | nftWhereInput[]
    OR?: nftWhereInput[]
    NOT?: nftWhereInput | nftWhereInput[]
    title?: StringFilter<"nft"> | string
    sku?: StringFilter<"nft"> | string
    price?: FloatFilter<"nft"> | number
    isArchived?: BoolFilter<"nft"> | boolean
    createdAt?: DateTimeFilter<"nft"> | Date | string
    updatedAt?: DateTimeFilter<"nft"> | Date | string
    description?: XOR<Nft_descriptionNullableScalarRelationFilter, nft_descriptionWhereInput> | null
    cases?: Gift_caseListRelationFilter
    nftAccounts?: Account_nftListRelationFilter
    giftAccounts?: Account_giftListRelationFilter
  }, "id">

  export type nftOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
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
    isArchived?: BoolWithAggregatesFilter<"nft"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"nft"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"nft"> | Date | string
  }

  export type nft_descriptionWhereInput = {
    AND?: nft_descriptionWhereInput | nft_descriptionWhereInput[]
    OR?: nft_descriptionWhereInput[]
    NOT?: nft_descriptionWhereInput | nft_descriptionWhereInput[]
    id?: StringFilter<"nft_description"> | string
    roi?: FloatFilter<"nft_description"> | number
    iterations?: IntFilter<"nft_description"> | number
    isSoldOut?: BoolFilter<"nft_description"> | boolean
    isNew?: BoolFilter<"nft_description"> | boolean
    isHot?: BoolFilter<"nft_description"> | boolean
    nftId?: StringFilter<"nft_description"> | string
    createdAt?: DateTimeFilter<"nft_description"> | Date | string
    updatedAt?: DateTimeFilter<"nft_description"> | Date | string
    nft?: XOR<NftScalarRelationFilter, nftWhereInput>
  }

  export type nft_descriptionOrderByWithRelationInput = {
    id?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    nft?: nftOrderByWithRelationInput
  }

  export type nft_descriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    nftId?: string
    AND?: nft_descriptionWhereInput | nft_descriptionWhereInput[]
    OR?: nft_descriptionWhereInput[]
    NOT?: nft_descriptionWhereInput | nft_descriptionWhereInput[]
    roi?: FloatFilter<"nft_description"> | number
    iterations?: IntFilter<"nft_description"> | number
    isSoldOut?: BoolFilter<"nft_description"> | boolean
    isNew?: BoolFilter<"nft_description"> | boolean
    isHot?: BoolFilter<"nft_description"> | boolean
    createdAt?: DateTimeFilter<"nft_description"> | Date | string
    updatedAt?: DateTimeFilter<"nft_description"> | Date | string
    nft?: XOR<NftScalarRelationFilter, nftWhereInput>
  }, "id" | "nftId">

  export type nft_descriptionOrderByWithAggregationInput = {
    id?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: nft_descriptionCountOrderByAggregateInput
    _avg?: nft_descriptionAvgOrderByAggregateInput
    _max?: nft_descriptionMaxOrderByAggregateInput
    _min?: nft_descriptionMinOrderByAggregateInput
    _sum?: nft_descriptionSumOrderByAggregateInput
  }

  export type nft_descriptionScalarWhereWithAggregatesInput = {
    AND?: nft_descriptionScalarWhereWithAggregatesInput | nft_descriptionScalarWhereWithAggregatesInput[]
    OR?: nft_descriptionScalarWhereWithAggregatesInput[]
    NOT?: nft_descriptionScalarWhereWithAggregatesInput | nft_descriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"nft_description"> | string
    roi?: FloatWithAggregatesFilter<"nft_description"> | number
    iterations?: IntWithAggregatesFilter<"nft_description"> | number
    isSoldOut?: BoolWithAggregatesFilter<"nft_description"> | boolean
    isNew?: BoolWithAggregatesFilter<"nft_description"> | boolean
    isHot?: BoolWithAggregatesFilter<"nft_description"> | boolean
    nftId?: StringWithAggregatesFilter<"nft_description"> | string
    createdAt?: DateTimeWithAggregatesFilter<"nft_description"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"nft_description"> | Date | string
  }

  export type account_giftWhereInput = {
    AND?: account_giftWhereInput | account_giftWhereInput[]
    OR?: account_giftWhereInput[]
    NOT?: account_giftWhereInput | account_giftWhereInput[]
    id?: StringFilter<"account_gift"> | string
    price?: FloatFilter<"account_gift"> | number
    isSold?: BoolFilter<"account_gift"> | boolean
    isWithdraw?: BoolFilter<"account_gift"> | boolean
    accountId?: StringFilter<"account_gift"> | string
    nftId?: StringFilter<"account_gift"> | string
    caseId?: StringFilter<"account_gift"> | string
    createdAt?: DateTimeFilter<"account_gift"> | Date | string
    updatedAt?: DateTimeFilter<"account_gift"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    nft?: XOR<NftScalarRelationFilter, nftWhereInput>
    case?: XOR<Gift_caseScalarRelationFilter, gift_caseWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, transactionWhereInput> | null
  }

  export type account_giftOrderByWithRelationInput = {
    id?: SortOrder
    price?: SortOrder
    isSold?: SortOrder
    isWithdraw?: SortOrder
    accountId?: SortOrder
    nftId?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: accountOrderByWithRelationInput
    nft?: nftOrderByWithRelationInput
    case?: gift_caseOrderByWithRelationInput
    transaction?: transactionOrderByWithRelationInput
  }

  export type account_giftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: account_giftWhereInput | account_giftWhereInput[]
    OR?: account_giftWhereInput[]
    NOT?: account_giftWhereInput | account_giftWhereInput[]
    price?: FloatFilter<"account_gift"> | number
    isSold?: BoolFilter<"account_gift"> | boolean
    isWithdraw?: BoolFilter<"account_gift"> | boolean
    accountId?: StringFilter<"account_gift"> | string
    nftId?: StringFilter<"account_gift"> | string
    caseId?: StringFilter<"account_gift"> | string
    createdAt?: DateTimeFilter<"account_gift"> | Date | string
    updatedAt?: DateTimeFilter<"account_gift"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    nft?: XOR<NftScalarRelationFilter, nftWhereInput>
    case?: XOR<Gift_caseScalarRelationFilter, gift_caseWhereInput>
    transaction?: XOR<TransactionNullableScalarRelationFilter, transactionWhereInput> | null
  }, "id">

  export type account_giftOrderByWithAggregationInput = {
    id?: SortOrder
    price?: SortOrder
    isSold?: SortOrder
    isWithdraw?: SortOrder
    accountId?: SortOrder
    nftId?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: account_giftCountOrderByAggregateInput
    _avg?: account_giftAvgOrderByAggregateInput
    _max?: account_giftMaxOrderByAggregateInput
    _min?: account_giftMinOrderByAggregateInput
    _sum?: account_giftSumOrderByAggregateInput
  }

  export type account_giftScalarWhereWithAggregatesInput = {
    AND?: account_giftScalarWhereWithAggregatesInput | account_giftScalarWhereWithAggregatesInput[]
    OR?: account_giftScalarWhereWithAggregatesInput[]
    NOT?: account_giftScalarWhereWithAggregatesInput | account_giftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"account_gift"> | string
    price?: FloatWithAggregatesFilter<"account_gift"> | number
    isSold?: BoolWithAggregatesFilter<"account_gift"> | boolean
    isWithdraw?: BoolWithAggregatesFilter<"account_gift"> | boolean
    accountId?: StringWithAggregatesFilter<"account_gift"> | string
    nftId?: StringWithAggregatesFilter<"account_gift"> | string
    caseId?: StringWithAggregatesFilter<"account_gift"> | string
    createdAt?: DateTimeWithAggregatesFilter<"account_gift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"account_gift"> | Date | string
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

  export type gift_caseWhereInput = {
    AND?: gift_caseWhereInput | gift_caseWhereInput[]
    OR?: gift_caseWhereInput[]
    NOT?: gift_caseWhereInput | gift_caseWhereInput[]
    id?: StringFilter<"gift_case"> | string
    sku?: StringFilter<"gift_case"> | string
    title?: StringFilter<"gift_case"> | string
    price?: FloatFilter<"gift_case"> | number
    isArchived?: BoolFilter<"gift_case"> | boolean
    createdAt?: DateTimeFilter<"gift_case"> | Date | string
    updatedAt?: DateTimeFilter<"gift_case"> | Date | string
    gifts?: NftListRelationFilter
    accountGifts?: Account_giftListRelationFilter
  }

  export type gift_caseOrderByWithRelationInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gifts?: nftOrderByRelationAggregateInput
    accountGifts?: account_giftOrderByRelationAggregateInput
  }

  export type gift_caseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: gift_caseWhereInput | gift_caseWhereInput[]
    OR?: gift_caseWhereInput[]
    NOT?: gift_caseWhereInput | gift_caseWhereInput[]
    sku?: StringFilter<"gift_case"> | string
    title?: StringFilter<"gift_case"> | string
    price?: FloatFilter<"gift_case"> | number
    isArchived?: BoolFilter<"gift_case"> | boolean
    createdAt?: DateTimeFilter<"gift_case"> | Date | string
    updatedAt?: DateTimeFilter<"gift_case"> | Date | string
    gifts?: NftListRelationFilter
    accountGifts?: Account_giftListRelationFilter
  }, "id">

  export type gift_caseOrderByWithAggregationInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: gift_caseCountOrderByAggregateInput
    _avg?: gift_caseAvgOrderByAggregateInput
    _max?: gift_caseMaxOrderByAggregateInput
    _min?: gift_caseMinOrderByAggregateInput
    _sum?: gift_caseSumOrderByAggregateInput
  }

  export type gift_caseScalarWhereWithAggregatesInput = {
    AND?: gift_caseScalarWhereWithAggregatesInput | gift_caseScalarWhereWithAggregatesInput[]
    OR?: gift_caseScalarWhereWithAggregatesInput[]
    NOT?: gift_caseScalarWhereWithAggregatesInput | gift_caseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"gift_case"> | string
    sku?: StringWithAggregatesFilter<"gift_case"> | string
    title?: StringWithAggregatesFilter<"gift_case"> | string
    price?: FloatWithAggregatesFilter<"gift_case"> | number
    isArchived?: BoolWithAggregatesFilter<"gift_case"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"gift_case"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"gift_case"> | Date | string
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

  export type transactionWhereInput = {
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    id?: StringFilter<"transaction"> | string
    type?: EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"transaction"> | $Enums.TransactionStatus
    amount?: FloatFilter<"transaction"> | number
    address?: StringNullableFilter<"transaction"> | string | null
    accountId?: StringFilter<"transaction"> | string
    account_giftId?: StringNullableFilter<"transaction"> | string | null
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    updatedAt?: DateTimeFilter<"transaction"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    tonTransaction?: XOR<Ton_transactionNullableScalarRelationFilter, ton_transactionWhereInput> | null
    accountGift?: XOR<Account_giftNullableScalarRelationFilter, account_giftWhereInput> | null
  }

  export type transactionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    address?: SortOrderInput | SortOrder
    accountId?: SortOrder
    account_giftId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    account?: accountOrderByWithRelationInput
    tonTransaction?: ton_transactionOrderByWithRelationInput
    accountGift?: account_giftOrderByWithRelationInput
  }

  export type transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    account_giftId?: string
    AND?: transactionWhereInput | transactionWhereInput[]
    OR?: transactionWhereInput[]
    NOT?: transactionWhereInput | transactionWhereInput[]
    type?: EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"transaction"> | $Enums.TransactionStatus
    amount?: FloatFilter<"transaction"> | number
    address?: StringNullableFilter<"transaction"> | string | null
    accountId?: StringFilter<"transaction"> | string
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    updatedAt?: DateTimeFilter<"transaction"> | Date | string
    account?: XOR<AccountScalarRelationFilter, accountWhereInput>
    tonTransaction?: XOR<Ton_transactionNullableScalarRelationFilter, ton_transactionWhereInput> | null
    accountGift?: XOR<Account_giftNullableScalarRelationFilter, account_giftWhereInput> | null
  }, "id" | "account_giftId">

  export type transactionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    address?: SortOrderInput | SortOrder
    accountId?: SortOrder
    account_giftId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: transactionCountOrderByAggregateInput
    _avg?: transactionAvgOrderByAggregateInput
    _max?: transactionMaxOrderByAggregateInput
    _min?: transactionMinOrderByAggregateInput
    _sum?: transactionSumOrderByAggregateInput
  }

  export type transactionScalarWhereWithAggregatesInput = {
    AND?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    OR?: transactionScalarWhereWithAggregatesInput[]
    NOT?: transactionScalarWhereWithAggregatesInput | transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"transaction"> | string
    type?: EnumTransactionTypeWithAggregatesFilter<"transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusWithAggregatesFilter<"transaction"> | $Enums.TransactionStatus
    amount?: FloatWithAggregatesFilter<"transaction"> | number
    address?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    accountId?: StringWithAggregatesFilter<"transaction"> | string
    account_giftId?: StringNullableWithAggregatesFilter<"transaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"transaction"> | Date | string
  }

  export type ton_transactionWhereInput = {
    AND?: ton_transactionWhereInput | ton_transactionWhereInput[]
    OR?: ton_transactionWhereInput[]
    NOT?: ton_transactionWhereInput | ton_transactionWhereInput[]
    id?: StringFilter<"ton_transaction"> | string
    from?: StringFilter<"ton_transaction"> | string
    to?: StringFilter<"ton_transaction"> | string
    lt?: StringNullableFilter<"ton_transaction"> | string | null
    transactionId?: StringFilter<"ton_transaction"> | string
    createdAt?: DateTimeFilter<"ton_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"ton_transaction"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
  }

  export type ton_transactionOrderByWithRelationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    lt?: SortOrderInput | SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    transaction?: transactionOrderByWithRelationInput
  }

  export type ton_transactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: ton_transactionWhereInput | ton_transactionWhereInput[]
    OR?: ton_transactionWhereInput[]
    NOT?: ton_transactionWhereInput | ton_transactionWhereInput[]
    from?: StringFilter<"ton_transaction"> | string
    to?: StringFilter<"ton_transaction"> | string
    lt?: StringNullableFilter<"ton_transaction"> | string | null
    createdAt?: DateTimeFilter<"ton_transaction"> | Date | string
    updatedAt?: DateTimeFilter<"ton_transaction"> | Date | string
    transaction?: XOR<TransactionScalarRelationFilter, transactionWhereInput>
  }, "id" | "transactionId">

  export type ton_transactionOrderByWithAggregationInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    lt?: SortOrderInput | SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ton_transactionCountOrderByAggregateInput
    _max?: ton_transactionMaxOrderByAggregateInput
    _min?: ton_transactionMinOrderByAggregateInput
  }

  export type ton_transactionScalarWhereWithAggregatesInput = {
    AND?: ton_transactionScalarWhereWithAggregatesInput | ton_transactionScalarWhereWithAggregatesInput[]
    OR?: ton_transactionScalarWhereWithAggregatesInput[]
    NOT?: ton_transactionScalarWhereWithAggregatesInput | ton_transactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ton_transaction"> | string
    from?: StringWithAggregatesFilter<"ton_transaction"> | string
    to?: StringWithAggregatesFilter<"ton_transaction"> | string
    lt?: StringNullableWithAggregatesFilter<"ton_transaction"> | string | null
    transactionId?: StringWithAggregatesFilter<"ton_transaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ton_transaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ton_transaction"> | Date | string
  }

  export type referralCreateInput = {
    id?: string
    value: string
    percent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutReferralInput
    accounts?: accountCreateNestedManyWithoutReferredByInput
  }

  export type referralUncheckedCreateInput = {
    id?: string
    value: string
    percent?: number
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: accountUncheckedCreateNestedManyWithoutReferredByInput
  }

  export type referralUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    percent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutReferralNestedInput
    accounts?: accountUpdateManyWithoutReferredByNestedInput
  }

  export type referralUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    percent?: FloatFieldUpdateOperationsInput | number
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountUncheckedUpdateManyWithoutReferredByNestedInput
  }

  export type referralCreateManyInput = {
    id?: string
    value: string
    percent?: number
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type referralUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    percent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type referralUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    percent?: FloatFieldUpdateOperationsInput | number
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
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    referredBy?: referralCreateNestedOneWithoutAccountsInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
    gifts?: account_giftCreateNestedManyWithoutAccountInput
    transactions?: transactionCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
    gifts?: account_giftUncheckedCreateNestedManyWithoutAccountInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUpdateManyWithoutAccountNestedInput
    transactions?: transactionUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUncheckedUpdateManyWithoutAccountNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountCreateManyInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nftCreateInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionCreateNestedOneWithoutNftInput
    cases?: gift_caseCreateNestedManyWithoutGiftsInput
    nftAccounts?: account_nftCreateNestedManyWithoutNftInput
    giftAccounts?: account_giftCreateNestedManyWithoutNftInput
  }

  export type nftUncheckedCreateInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionUncheckedCreateNestedOneWithoutNftInput
    cases?: gift_caseUncheckedCreateNestedManyWithoutGiftsInput
    nftAccounts?: account_nftUncheckedCreateNestedManyWithoutNftInput
    giftAccounts?: account_giftUncheckedCreateNestedManyWithoutNftInput
  }

  export type nftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUpdateOneWithoutNftNestedInput
    cases?: gift_caseUpdateManyWithoutGiftsNestedInput
    nftAccounts?: account_nftUpdateManyWithoutNftNestedInput
    giftAccounts?: account_giftUpdateManyWithoutNftNestedInput
  }

  export type nftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUncheckedUpdateOneWithoutNftNestedInput
    cases?: gift_caseUncheckedUpdateManyWithoutGiftsNestedInput
    nftAccounts?: account_nftUncheckedUpdateManyWithoutNftNestedInput
    giftAccounts?: account_giftUncheckedUpdateManyWithoutNftNestedInput
  }

  export type nftCreateManyInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nft_descriptionCreateInput = {
    id?: string
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nft: nftCreateNestedOneWithoutDescriptionInput
  }

  export type nft_descriptionUncheckedCreateInput = {
    id?: string
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nft_descriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nft?: nftUpdateOneRequiredWithoutDescriptionNestedInput
  }

  export type nft_descriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nft_descriptionCreateManyInput = {
    id?: string
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nft_descriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nft_descriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_giftCreateInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutGiftsInput
    nft: nftCreateNestedOneWithoutGiftAccountsInput
    case: gift_caseCreateNestedOneWithoutAccountGiftsInput
    transaction?: transactionCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftUncheckedCreateInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    accountId: string
    nftId: string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: transactionUncheckedCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutGiftsNestedInput
    nft?: nftUpdateOneRequiredWithoutGiftAccountsNestedInput
    case?: gift_caseUpdateOneRequiredWithoutAccountGiftsNestedInput
    transaction?: transactionUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUncheckedUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftCreateManyInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    accountId: string
    nftId: string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_giftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_giftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutNftsInput
    nft: nftCreateNestedOneWithoutNftAccountsInput
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
    nft?: nftUpdateOneRequiredWithoutNftAccountsNestedInput
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

  export type gift_caseCreateInput = {
    id?: string
    sku: string
    title: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gifts?: nftCreateNestedManyWithoutCasesInput
    accountGifts?: account_giftCreateNestedManyWithoutCaseInput
  }

  export type gift_caseUncheckedCreateInput = {
    id?: string
    sku: string
    title: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gifts?: nftUncheckedCreateNestedManyWithoutCasesInput
    accountGifts?: account_giftUncheckedCreateNestedManyWithoutCaseInput
  }

  export type gift_caseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: nftUpdateManyWithoutCasesNestedInput
    accountGifts?: account_giftUpdateManyWithoutCaseNestedInput
  }

  export type gift_caseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: nftUncheckedUpdateManyWithoutCasesNestedInput
    accountGifts?: account_giftUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type gift_caseCreateManyInput = {
    id?: string
    sku: string
    title: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gift_caseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gift_caseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
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

  export type transactionCreateInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutTransactionsInput
    tonTransaction?: ton_transactionCreateNestedOneWithoutTransactionInput
    accountGift?: account_giftCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    accountId: string
    account_giftId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tonTransaction?: ton_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutTransactionsNestedInput
    tonTransaction?: ton_transactionUpdateOneWithoutTransactionNestedInput
    accountGift?: account_giftUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    account_giftId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tonTransaction?: ton_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type transactionCreateManyInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    accountId: string
    account_giftId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    account_giftId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ton_transactionCreateInput = {
    id?: string
    from: string
    to: string
    lt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction: transactionCreateNestedOneWithoutTonTransactionInput
  }

  export type ton_transactionUncheckedCreateInput = {
    id?: string
    from: string
    to: string
    lt?: string | null
    transactionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ton_transactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    lt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUpdateOneRequiredWithoutTonTransactionNestedInput
  }

  export type ton_transactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    lt?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ton_transactionCreateManyInput = {
    id?: string
    from: string
    to: string
    lt?: string | null
    transactionId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ton_transactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    lt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ton_transactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    lt?: NullableStringFieldUpdateOperationsInput | string | null
    transactionId?: StringFieldUpdateOperationsInput | string
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
    percent?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referralAvgOrderByAggregateInput = {
    percent?: SortOrder
  }

  export type referralMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    percent?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referralMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    percent?: SortOrder
    accountId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type referralSumOrderByAggregateInput = {
    percent?: SortOrder
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

  export type Account_giftListRelationFilter = {
    every?: account_giftWhereInput
    some?: account_giftWhereInput
    none?: account_giftWhereInput
  }

  export type TransactionListRelationFilter = {
    every?: transactionWhereInput
    some?: transactionWhereInput
    none?: transactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type account_nftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type account_giftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type transactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type accountCountOrderByAggregateInput = {
    id?: SortOrder
    balance?: SortOrder
    username?: SortOrder
    language?: SortOrder
    telegramId?: SortOrder
    avatarUrl?: SortOrder
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
    avatarUrl?: SortOrder
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
    avatarUrl?: SortOrder
    referredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type accountSumOrderByAggregateInput = {
    balance?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Nft_descriptionNullableScalarRelationFilter = {
    is?: nft_descriptionWhereInput | null
    isNot?: nft_descriptionWhereInput | null
  }

  export type Gift_caseListRelationFilter = {
    every?: gift_caseWhereInput
    some?: gift_caseWhereInput
    none?: gift_caseWhereInput
  }

  export type gift_caseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type nftCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nftAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type nftMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nftMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    sku?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nftSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NftScalarRelationFilter = {
    is?: nftWhereInput
    isNot?: nftWhereInput
  }

  export type nft_descriptionCountOrderByAggregateInput = {
    id?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nft_descriptionAvgOrderByAggregateInput = {
    roi?: SortOrder
    iterations?: SortOrder
  }

  export type nft_descriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nft_descriptionMinOrderByAggregateInput = {
    id?: SortOrder
    roi?: SortOrder
    iterations?: SortOrder
    isSoldOut?: SortOrder
    isNew?: SortOrder
    isHot?: SortOrder
    nftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type nft_descriptionSumOrderByAggregateInput = {
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

  export type Gift_caseScalarRelationFilter = {
    is?: gift_caseWhereInput
    isNot?: gift_caseWhereInput
  }

  export type TransactionNullableScalarRelationFilter = {
    is?: transactionWhereInput | null
    isNot?: transactionWhereInput | null
  }

  export type account_giftCountOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    isSold?: SortOrder
    isWithdraw?: SortOrder
    accountId?: SortOrder
    nftId?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_giftAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type account_giftMaxOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    isSold?: SortOrder
    isWithdraw?: SortOrder
    accountId?: SortOrder
    nftId?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_giftMinOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    isSold?: SortOrder
    isWithdraw?: SortOrder
    accountId?: SortOrder
    nftId?: SortOrder
    caseId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type account_giftSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type NftListRelationFilter = {
    every?: nftWhereInput
    some?: nftWhereInput
    none?: nftWhereInput
  }

  export type nftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type gift_caseCountOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gift_caseAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type gift_caseMaxOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gift_caseMinOrderByAggregateInput = {
    id?: SortOrder
    sku?: SortOrder
    title?: SortOrder
    price?: SortOrder
    isArchived?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type gift_caseSumOrderByAggregateInput = {
    price?: SortOrder
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

  export type EnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type EnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type Ton_transactionNullableScalarRelationFilter = {
    is?: ton_transactionWhereInput | null
    isNot?: ton_transactionWhereInput | null
  }

  export type Account_giftNullableScalarRelationFilter = {
    is?: account_giftWhereInput | null
    isNot?: account_giftWhereInput | null
  }

  export type transactionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    accountId?: SortOrder
    account_giftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    accountId?: SortOrder
    account_giftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    address?: SortOrder
    accountId?: SortOrder
    account_giftId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type transactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type EnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type TransactionScalarRelationFilter = {
    is?: transactionWhereInput
    isNot?: transactionWhereInput
  }

  export type ton_transactionCountOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    lt?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ton_transactionMaxOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    lt?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ton_transactionMinOrderByAggregateInput = {
    id?: SortOrder
    from?: SortOrder
    to?: SortOrder
    lt?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type account_giftCreateNestedManyWithoutAccountInput = {
    create?: XOR<account_giftCreateWithoutAccountInput, account_giftUncheckedCreateWithoutAccountInput> | account_giftCreateWithoutAccountInput[] | account_giftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutAccountInput | account_giftCreateOrConnectWithoutAccountInput[]
    createMany?: account_giftCreateManyAccountInputEnvelope
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
  }

  export type transactionCreateNestedManyWithoutAccountInput = {
    create?: XOR<transactionCreateWithoutAccountInput, transactionUncheckedCreateWithoutAccountInput> | transactionCreateWithoutAccountInput[] | transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAccountInput | transactionCreateOrConnectWithoutAccountInput[]
    createMany?: transactionCreateManyAccountInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
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

  export type account_giftUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<account_giftCreateWithoutAccountInput, account_giftUncheckedCreateWithoutAccountInput> | account_giftCreateWithoutAccountInput[] | account_giftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutAccountInput | account_giftCreateOrConnectWithoutAccountInput[]
    createMany?: account_giftCreateManyAccountInputEnvelope
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
  }

  export type transactionUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<transactionCreateWithoutAccountInput, transactionUncheckedCreateWithoutAccountInput> | transactionCreateWithoutAccountInput[] | transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAccountInput | transactionCreateOrConnectWithoutAccountInput[]
    createMany?: transactionCreateManyAccountInputEnvelope
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
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

  export type account_giftUpdateManyWithoutAccountNestedInput = {
    create?: XOR<account_giftCreateWithoutAccountInput, account_giftUncheckedCreateWithoutAccountInput> | account_giftCreateWithoutAccountInput[] | account_giftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutAccountInput | account_giftCreateOrConnectWithoutAccountInput[]
    upsert?: account_giftUpsertWithWhereUniqueWithoutAccountInput | account_giftUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: account_giftCreateManyAccountInputEnvelope
    set?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    disconnect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    delete?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    update?: account_giftUpdateWithWhereUniqueWithoutAccountInput | account_giftUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: account_giftUpdateManyWithWhereWithoutAccountInput | account_giftUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
  }

  export type transactionUpdateManyWithoutAccountNestedInput = {
    create?: XOR<transactionCreateWithoutAccountInput, transactionUncheckedCreateWithoutAccountInput> | transactionCreateWithoutAccountInput[] | transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAccountInput | transactionCreateOrConnectWithoutAccountInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutAccountInput | transactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: transactionCreateManyAccountInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutAccountInput | transactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutAccountInput | transactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
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

  export type account_giftUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<account_giftCreateWithoutAccountInput, account_giftUncheckedCreateWithoutAccountInput> | account_giftCreateWithoutAccountInput[] | account_giftUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutAccountInput | account_giftCreateOrConnectWithoutAccountInput[]
    upsert?: account_giftUpsertWithWhereUniqueWithoutAccountInput | account_giftUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: account_giftCreateManyAccountInputEnvelope
    set?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    disconnect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    delete?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    update?: account_giftUpdateWithWhereUniqueWithoutAccountInput | account_giftUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: account_giftUpdateManyWithWhereWithoutAccountInput | account_giftUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
  }

  export type transactionUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<transactionCreateWithoutAccountInput, transactionUncheckedCreateWithoutAccountInput> | transactionCreateWithoutAccountInput[] | transactionUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: transactionCreateOrConnectWithoutAccountInput | transactionCreateOrConnectWithoutAccountInput[]
    upsert?: transactionUpsertWithWhereUniqueWithoutAccountInput | transactionUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: transactionCreateManyAccountInputEnvelope
    set?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    disconnect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    delete?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    connect?: transactionWhereUniqueInput | transactionWhereUniqueInput[]
    update?: transactionUpdateWithWhereUniqueWithoutAccountInput | transactionUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: transactionUpdateManyWithWhereWithoutAccountInput | transactionUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: transactionScalarWhereInput | transactionScalarWhereInput[]
  }

  export type nft_descriptionCreateNestedOneWithoutNftInput = {
    create?: XOR<nft_descriptionCreateWithoutNftInput, nft_descriptionUncheckedCreateWithoutNftInput>
    connectOrCreate?: nft_descriptionCreateOrConnectWithoutNftInput
    connect?: nft_descriptionWhereUniqueInput
  }

  export type gift_caseCreateNestedManyWithoutGiftsInput = {
    create?: XOR<gift_caseCreateWithoutGiftsInput, gift_caseUncheckedCreateWithoutGiftsInput> | gift_caseCreateWithoutGiftsInput[] | gift_caseUncheckedCreateWithoutGiftsInput[]
    connectOrCreate?: gift_caseCreateOrConnectWithoutGiftsInput | gift_caseCreateOrConnectWithoutGiftsInput[]
    connect?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
  }

  export type account_nftCreateNestedManyWithoutNftInput = {
    create?: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput> | account_nftCreateWithoutNftInput[] | account_nftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutNftInput | account_nftCreateOrConnectWithoutNftInput[]
    createMany?: account_nftCreateManyNftInputEnvelope
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
  }

  export type account_giftCreateNestedManyWithoutNftInput = {
    create?: XOR<account_giftCreateWithoutNftInput, account_giftUncheckedCreateWithoutNftInput> | account_giftCreateWithoutNftInput[] | account_giftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutNftInput | account_giftCreateOrConnectWithoutNftInput[]
    createMany?: account_giftCreateManyNftInputEnvelope
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
  }

  export type nft_descriptionUncheckedCreateNestedOneWithoutNftInput = {
    create?: XOR<nft_descriptionCreateWithoutNftInput, nft_descriptionUncheckedCreateWithoutNftInput>
    connectOrCreate?: nft_descriptionCreateOrConnectWithoutNftInput
    connect?: nft_descriptionWhereUniqueInput
  }

  export type gift_caseUncheckedCreateNestedManyWithoutGiftsInput = {
    create?: XOR<gift_caseCreateWithoutGiftsInput, gift_caseUncheckedCreateWithoutGiftsInput> | gift_caseCreateWithoutGiftsInput[] | gift_caseUncheckedCreateWithoutGiftsInput[]
    connectOrCreate?: gift_caseCreateOrConnectWithoutGiftsInput | gift_caseCreateOrConnectWithoutGiftsInput[]
    connect?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
  }

  export type account_nftUncheckedCreateNestedManyWithoutNftInput = {
    create?: XOR<account_nftCreateWithoutNftInput, account_nftUncheckedCreateWithoutNftInput> | account_nftCreateWithoutNftInput[] | account_nftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_nftCreateOrConnectWithoutNftInput | account_nftCreateOrConnectWithoutNftInput[]
    createMany?: account_nftCreateManyNftInputEnvelope
    connect?: account_nftWhereUniqueInput | account_nftWhereUniqueInput[]
  }

  export type account_giftUncheckedCreateNestedManyWithoutNftInput = {
    create?: XOR<account_giftCreateWithoutNftInput, account_giftUncheckedCreateWithoutNftInput> | account_giftCreateWithoutNftInput[] | account_giftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutNftInput | account_giftCreateOrConnectWithoutNftInput[]
    createMany?: account_giftCreateManyNftInputEnvelope
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type nft_descriptionUpdateOneWithoutNftNestedInput = {
    create?: XOR<nft_descriptionCreateWithoutNftInput, nft_descriptionUncheckedCreateWithoutNftInput>
    connectOrCreate?: nft_descriptionCreateOrConnectWithoutNftInput
    upsert?: nft_descriptionUpsertWithoutNftInput
    disconnect?: nft_descriptionWhereInput | boolean
    delete?: nft_descriptionWhereInput | boolean
    connect?: nft_descriptionWhereUniqueInput
    update?: XOR<XOR<nft_descriptionUpdateToOneWithWhereWithoutNftInput, nft_descriptionUpdateWithoutNftInput>, nft_descriptionUncheckedUpdateWithoutNftInput>
  }

  export type gift_caseUpdateManyWithoutGiftsNestedInput = {
    create?: XOR<gift_caseCreateWithoutGiftsInput, gift_caseUncheckedCreateWithoutGiftsInput> | gift_caseCreateWithoutGiftsInput[] | gift_caseUncheckedCreateWithoutGiftsInput[]
    connectOrCreate?: gift_caseCreateOrConnectWithoutGiftsInput | gift_caseCreateOrConnectWithoutGiftsInput[]
    upsert?: gift_caseUpsertWithWhereUniqueWithoutGiftsInput | gift_caseUpsertWithWhereUniqueWithoutGiftsInput[]
    set?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    disconnect?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    delete?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    connect?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    update?: gift_caseUpdateWithWhereUniqueWithoutGiftsInput | gift_caseUpdateWithWhereUniqueWithoutGiftsInput[]
    updateMany?: gift_caseUpdateManyWithWhereWithoutGiftsInput | gift_caseUpdateManyWithWhereWithoutGiftsInput[]
    deleteMany?: gift_caseScalarWhereInput | gift_caseScalarWhereInput[]
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

  export type account_giftUpdateManyWithoutNftNestedInput = {
    create?: XOR<account_giftCreateWithoutNftInput, account_giftUncheckedCreateWithoutNftInput> | account_giftCreateWithoutNftInput[] | account_giftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutNftInput | account_giftCreateOrConnectWithoutNftInput[]
    upsert?: account_giftUpsertWithWhereUniqueWithoutNftInput | account_giftUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: account_giftCreateManyNftInputEnvelope
    set?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    disconnect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    delete?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    update?: account_giftUpdateWithWhereUniqueWithoutNftInput | account_giftUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: account_giftUpdateManyWithWhereWithoutNftInput | account_giftUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
  }

  export type nft_descriptionUncheckedUpdateOneWithoutNftNestedInput = {
    create?: XOR<nft_descriptionCreateWithoutNftInput, nft_descriptionUncheckedCreateWithoutNftInput>
    connectOrCreate?: nft_descriptionCreateOrConnectWithoutNftInput
    upsert?: nft_descriptionUpsertWithoutNftInput
    disconnect?: nft_descriptionWhereInput | boolean
    delete?: nft_descriptionWhereInput | boolean
    connect?: nft_descriptionWhereUniqueInput
    update?: XOR<XOR<nft_descriptionUpdateToOneWithWhereWithoutNftInput, nft_descriptionUpdateWithoutNftInput>, nft_descriptionUncheckedUpdateWithoutNftInput>
  }

  export type gift_caseUncheckedUpdateManyWithoutGiftsNestedInput = {
    create?: XOR<gift_caseCreateWithoutGiftsInput, gift_caseUncheckedCreateWithoutGiftsInput> | gift_caseCreateWithoutGiftsInput[] | gift_caseUncheckedCreateWithoutGiftsInput[]
    connectOrCreate?: gift_caseCreateOrConnectWithoutGiftsInput | gift_caseCreateOrConnectWithoutGiftsInput[]
    upsert?: gift_caseUpsertWithWhereUniqueWithoutGiftsInput | gift_caseUpsertWithWhereUniqueWithoutGiftsInput[]
    set?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    disconnect?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    delete?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    connect?: gift_caseWhereUniqueInput | gift_caseWhereUniqueInput[]
    update?: gift_caseUpdateWithWhereUniqueWithoutGiftsInput | gift_caseUpdateWithWhereUniqueWithoutGiftsInput[]
    updateMany?: gift_caseUpdateManyWithWhereWithoutGiftsInput | gift_caseUpdateManyWithWhereWithoutGiftsInput[]
    deleteMany?: gift_caseScalarWhereInput | gift_caseScalarWhereInput[]
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

  export type account_giftUncheckedUpdateManyWithoutNftNestedInput = {
    create?: XOR<account_giftCreateWithoutNftInput, account_giftUncheckedCreateWithoutNftInput> | account_giftCreateWithoutNftInput[] | account_giftUncheckedCreateWithoutNftInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutNftInput | account_giftCreateOrConnectWithoutNftInput[]
    upsert?: account_giftUpsertWithWhereUniqueWithoutNftInput | account_giftUpsertWithWhereUniqueWithoutNftInput[]
    createMany?: account_giftCreateManyNftInputEnvelope
    set?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    disconnect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    delete?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    update?: account_giftUpdateWithWhereUniqueWithoutNftInput | account_giftUpdateWithWhereUniqueWithoutNftInput[]
    updateMany?: account_giftUpdateManyWithWhereWithoutNftInput | account_giftUpdateManyWithWhereWithoutNftInput[]
    deleteMany?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
  }

  export type nftCreateNestedOneWithoutDescriptionInput = {
    create?: XOR<nftCreateWithoutDescriptionInput, nftUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: nftCreateOrConnectWithoutDescriptionInput
    connect?: nftWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type nftUpdateOneRequiredWithoutDescriptionNestedInput = {
    create?: XOR<nftCreateWithoutDescriptionInput, nftUncheckedCreateWithoutDescriptionInput>
    connectOrCreate?: nftCreateOrConnectWithoutDescriptionInput
    upsert?: nftUpsertWithoutDescriptionInput
    connect?: nftWhereUniqueInput
    update?: XOR<XOR<nftUpdateToOneWithWhereWithoutDescriptionInput, nftUpdateWithoutDescriptionInput>, nftUncheckedUpdateWithoutDescriptionInput>
  }

  export type accountCreateNestedOneWithoutGiftsInput = {
    create?: XOR<accountCreateWithoutGiftsInput, accountUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: accountCreateOrConnectWithoutGiftsInput
    connect?: accountWhereUniqueInput
  }

  export type nftCreateNestedOneWithoutGiftAccountsInput = {
    create?: XOR<nftCreateWithoutGiftAccountsInput, nftUncheckedCreateWithoutGiftAccountsInput>
    connectOrCreate?: nftCreateOrConnectWithoutGiftAccountsInput
    connect?: nftWhereUniqueInput
  }

  export type gift_caseCreateNestedOneWithoutAccountGiftsInput = {
    create?: XOR<gift_caseCreateWithoutAccountGiftsInput, gift_caseUncheckedCreateWithoutAccountGiftsInput>
    connectOrCreate?: gift_caseCreateOrConnectWithoutAccountGiftsInput
    connect?: gift_caseWhereUniqueInput
  }

  export type transactionCreateNestedOneWithoutAccountGiftInput = {
    create?: XOR<transactionCreateWithoutAccountGiftInput, transactionUncheckedCreateWithoutAccountGiftInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAccountGiftInput
    connect?: transactionWhereUniqueInput
  }

  export type transactionUncheckedCreateNestedOneWithoutAccountGiftInput = {
    create?: XOR<transactionCreateWithoutAccountGiftInput, transactionUncheckedCreateWithoutAccountGiftInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAccountGiftInput
    connect?: transactionWhereUniqueInput
  }

  export type accountUpdateOneRequiredWithoutGiftsNestedInput = {
    create?: XOR<accountCreateWithoutGiftsInput, accountUncheckedCreateWithoutGiftsInput>
    connectOrCreate?: accountCreateOrConnectWithoutGiftsInput
    upsert?: accountUpsertWithoutGiftsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutGiftsInput, accountUpdateWithoutGiftsInput>, accountUncheckedUpdateWithoutGiftsInput>
  }

  export type nftUpdateOneRequiredWithoutGiftAccountsNestedInput = {
    create?: XOR<nftCreateWithoutGiftAccountsInput, nftUncheckedCreateWithoutGiftAccountsInput>
    connectOrCreate?: nftCreateOrConnectWithoutGiftAccountsInput
    upsert?: nftUpsertWithoutGiftAccountsInput
    connect?: nftWhereUniqueInput
    update?: XOR<XOR<nftUpdateToOneWithWhereWithoutGiftAccountsInput, nftUpdateWithoutGiftAccountsInput>, nftUncheckedUpdateWithoutGiftAccountsInput>
  }

  export type gift_caseUpdateOneRequiredWithoutAccountGiftsNestedInput = {
    create?: XOR<gift_caseCreateWithoutAccountGiftsInput, gift_caseUncheckedCreateWithoutAccountGiftsInput>
    connectOrCreate?: gift_caseCreateOrConnectWithoutAccountGiftsInput
    upsert?: gift_caseUpsertWithoutAccountGiftsInput
    connect?: gift_caseWhereUniqueInput
    update?: XOR<XOR<gift_caseUpdateToOneWithWhereWithoutAccountGiftsInput, gift_caseUpdateWithoutAccountGiftsInput>, gift_caseUncheckedUpdateWithoutAccountGiftsInput>
  }

  export type transactionUpdateOneWithoutAccountGiftNestedInput = {
    create?: XOR<transactionCreateWithoutAccountGiftInput, transactionUncheckedCreateWithoutAccountGiftInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAccountGiftInput
    upsert?: transactionUpsertWithoutAccountGiftInput
    disconnect?: transactionWhereInput | boolean
    delete?: transactionWhereInput | boolean
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutAccountGiftInput, transactionUpdateWithoutAccountGiftInput>, transactionUncheckedUpdateWithoutAccountGiftInput>
  }

  export type transactionUncheckedUpdateOneWithoutAccountGiftNestedInput = {
    create?: XOR<transactionCreateWithoutAccountGiftInput, transactionUncheckedCreateWithoutAccountGiftInput>
    connectOrCreate?: transactionCreateOrConnectWithoutAccountGiftInput
    upsert?: transactionUpsertWithoutAccountGiftInput
    disconnect?: transactionWhereInput | boolean
    delete?: transactionWhereInput | boolean
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutAccountGiftInput, transactionUpdateWithoutAccountGiftInput>, transactionUncheckedUpdateWithoutAccountGiftInput>
  }

  export type accountCreateNestedOneWithoutNftsInput = {
    create?: XOR<accountCreateWithoutNftsInput, accountUncheckedCreateWithoutNftsInput>
    connectOrCreate?: accountCreateOrConnectWithoutNftsInput
    connect?: accountWhereUniqueInput
  }

  export type nftCreateNestedOneWithoutNftAccountsInput = {
    create?: XOR<nftCreateWithoutNftAccountsInput, nftUncheckedCreateWithoutNftAccountsInput>
    connectOrCreate?: nftCreateOrConnectWithoutNftAccountsInput
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

  export type nftUpdateOneRequiredWithoutNftAccountsNestedInput = {
    create?: XOR<nftCreateWithoutNftAccountsInput, nftUncheckedCreateWithoutNftAccountsInput>
    connectOrCreate?: nftCreateOrConnectWithoutNftAccountsInput
    upsert?: nftUpsertWithoutNftAccountsInput
    connect?: nftWhereUniqueInput
    update?: XOR<XOR<nftUpdateToOneWithWhereWithoutNftAccountsInput, nftUpdateWithoutNftAccountsInput>, nftUncheckedUpdateWithoutNftAccountsInput>
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

  export type nftCreateNestedManyWithoutCasesInput = {
    create?: XOR<nftCreateWithoutCasesInput, nftUncheckedCreateWithoutCasesInput> | nftCreateWithoutCasesInput[] | nftUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: nftCreateOrConnectWithoutCasesInput | nftCreateOrConnectWithoutCasesInput[]
    connect?: nftWhereUniqueInput | nftWhereUniqueInput[]
  }

  export type account_giftCreateNestedManyWithoutCaseInput = {
    create?: XOR<account_giftCreateWithoutCaseInput, account_giftUncheckedCreateWithoutCaseInput> | account_giftCreateWithoutCaseInput[] | account_giftUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutCaseInput | account_giftCreateOrConnectWithoutCaseInput[]
    createMany?: account_giftCreateManyCaseInputEnvelope
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
  }

  export type nftUncheckedCreateNestedManyWithoutCasesInput = {
    create?: XOR<nftCreateWithoutCasesInput, nftUncheckedCreateWithoutCasesInput> | nftCreateWithoutCasesInput[] | nftUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: nftCreateOrConnectWithoutCasesInput | nftCreateOrConnectWithoutCasesInput[]
    connect?: nftWhereUniqueInput | nftWhereUniqueInput[]
  }

  export type account_giftUncheckedCreateNestedManyWithoutCaseInput = {
    create?: XOR<account_giftCreateWithoutCaseInput, account_giftUncheckedCreateWithoutCaseInput> | account_giftCreateWithoutCaseInput[] | account_giftUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutCaseInput | account_giftCreateOrConnectWithoutCaseInput[]
    createMany?: account_giftCreateManyCaseInputEnvelope
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
  }

  export type nftUpdateManyWithoutCasesNestedInput = {
    create?: XOR<nftCreateWithoutCasesInput, nftUncheckedCreateWithoutCasesInput> | nftCreateWithoutCasesInput[] | nftUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: nftCreateOrConnectWithoutCasesInput | nftCreateOrConnectWithoutCasesInput[]
    upsert?: nftUpsertWithWhereUniqueWithoutCasesInput | nftUpsertWithWhereUniqueWithoutCasesInput[]
    set?: nftWhereUniqueInput | nftWhereUniqueInput[]
    disconnect?: nftWhereUniqueInput | nftWhereUniqueInput[]
    delete?: nftWhereUniqueInput | nftWhereUniqueInput[]
    connect?: nftWhereUniqueInput | nftWhereUniqueInput[]
    update?: nftUpdateWithWhereUniqueWithoutCasesInput | nftUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: nftUpdateManyWithWhereWithoutCasesInput | nftUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: nftScalarWhereInput | nftScalarWhereInput[]
  }

  export type account_giftUpdateManyWithoutCaseNestedInput = {
    create?: XOR<account_giftCreateWithoutCaseInput, account_giftUncheckedCreateWithoutCaseInput> | account_giftCreateWithoutCaseInput[] | account_giftUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutCaseInput | account_giftCreateOrConnectWithoutCaseInput[]
    upsert?: account_giftUpsertWithWhereUniqueWithoutCaseInput | account_giftUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: account_giftCreateManyCaseInputEnvelope
    set?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    disconnect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    delete?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    update?: account_giftUpdateWithWhereUniqueWithoutCaseInput | account_giftUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: account_giftUpdateManyWithWhereWithoutCaseInput | account_giftUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
  }

  export type nftUncheckedUpdateManyWithoutCasesNestedInput = {
    create?: XOR<nftCreateWithoutCasesInput, nftUncheckedCreateWithoutCasesInput> | nftCreateWithoutCasesInput[] | nftUncheckedCreateWithoutCasesInput[]
    connectOrCreate?: nftCreateOrConnectWithoutCasesInput | nftCreateOrConnectWithoutCasesInput[]
    upsert?: nftUpsertWithWhereUniqueWithoutCasesInput | nftUpsertWithWhereUniqueWithoutCasesInput[]
    set?: nftWhereUniqueInput | nftWhereUniqueInput[]
    disconnect?: nftWhereUniqueInput | nftWhereUniqueInput[]
    delete?: nftWhereUniqueInput | nftWhereUniqueInput[]
    connect?: nftWhereUniqueInput | nftWhereUniqueInput[]
    update?: nftUpdateWithWhereUniqueWithoutCasesInput | nftUpdateWithWhereUniqueWithoutCasesInput[]
    updateMany?: nftUpdateManyWithWhereWithoutCasesInput | nftUpdateManyWithWhereWithoutCasesInput[]
    deleteMany?: nftScalarWhereInput | nftScalarWhereInput[]
  }

  export type account_giftUncheckedUpdateManyWithoutCaseNestedInput = {
    create?: XOR<account_giftCreateWithoutCaseInput, account_giftUncheckedCreateWithoutCaseInput> | account_giftCreateWithoutCaseInput[] | account_giftUncheckedCreateWithoutCaseInput[]
    connectOrCreate?: account_giftCreateOrConnectWithoutCaseInput | account_giftCreateOrConnectWithoutCaseInput[]
    upsert?: account_giftUpsertWithWhereUniqueWithoutCaseInput | account_giftUpsertWithWhereUniqueWithoutCaseInput[]
    createMany?: account_giftCreateManyCaseInputEnvelope
    set?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    disconnect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    delete?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    connect?: account_giftWhereUniqueInput | account_giftWhereUniqueInput[]
    update?: account_giftUpdateWithWhereUniqueWithoutCaseInput | account_giftUpdateWithWhereUniqueWithoutCaseInput[]
    updateMany?: account_giftUpdateManyWithWhereWithoutCaseInput | account_giftUpdateManyWithWhereWithoutCaseInput[]
    deleteMany?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
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

  export type accountCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<accountCreateWithoutTransactionsInput, accountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutTransactionsInput
    connect?: accountWhereUniqueInput
  }

  export type ton_transactionCreateNestedOneWithoutTransactionInput = {
    create?: XOR<ton_transactionCreateWithoutTransactionInput, ton_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ton_transactionCreateOrConnectWithoutTransactionInput
    connect?: ton_transactionWhereUniqueInput
  }

  export type account_giftCreateNestedOneWithoutTransactionInput = {
    create?: XOR<account_giftCreateWithoutTransactionInput, account_giftUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: account_giftCreateOrConnectWithoutTransactionInput
    connect?: account_giftWhereUniqueInput
  }

  export type ton_transactionUncheckedCreateNestedOneWithoutTransactionInput = {
    create?: XOR<ton_transactionCreateWithoutTransactionInput, ton_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ton_transactionCreateOrConnectWithoutTransactionInput
    connect?: ton_transactionWhereUniqueInput
  }

  export type EnumTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.TransactionType
  }

  export type EnumTransactionStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransactionStatus
  }

  export type accountUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<accountCreateWithoutTransactionsInput, accountUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: accountCreateOrConnectWithoutTransactionsInput
    upsert?: accountUpsertWithoutTransactionsInput
    connect?: accountWhereUniqueInput
    update?: XOR<XOR<accountUpdateToOneWithWhereWithoutTransactionsInput, accountUpdateWithoutTransactionsInput>, accountUncheckedUpdateWithoutTransactionsInput>
  }

  export type ton_transactionUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<ton_transactionCreateWithoutTransactionInput, ton_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ton_transactionCreateOrConnectWithoutTransactionInput
    upsert?: ton_transactionUpsertWithoutTransactionInput
    disconnect?: ton_transactionWhereInput | boolean
    delete?: ton_transactionWhereInput | boolean
    connect?: ton_transactionWhereUniqueInput
    update?: XOR<XOR<ton_transactionUpdateToOneWithWhereWithoutTransactionInput, ton_transactionUpdateWithoutTransactionInput>, ton_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type account_giftUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<account_giftCreateWithoutTransactionInput, account_giftUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: account_giftCreateOrConnectWithoutTransactionInput
    upsert?: account_giftUpsertWithoutTransactionInput
    disconnect?: account_giftWhereInput | boolean
    delete?: account_giftWhereInput | boolean
    connect?: account_giftWhereUniqueInput
    update?: XOR<XOR<account_giftUpdateToOneWithWhereWithoutTransactionInput, account_giftUpdateWithoutTransactionInput>, account_giftUncheckedUpdateWithoutTransactionInput>
  }

  export type ton_transactionUncheckedUpdateOneWithoutTransactionNestedInput = {
    create?: XOR<ton_transactionCreateWithoutTransactionInput, ton_transactionUncheckedCreateWithoutTransactionInput>
    connectOrCreate?: ton_transactionCreateOrConnectWithoutTransactionInput
    upsert?: ton_transactionUpsertWithoutTransactionInput
    disconnect?: ton_transactionWhereInput | boolean
    delete?: ton_transactionWhereInput | boolean
    connect?: ton_transactionWhereUniqueInput
    update?: XOR<XOR<ton_transactionUpdateToOneWithWhereWithoutTransactionInput, ton_transactionUpdateWithoutTransactionInput>, ton_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type transactionCreateNestedOneWithoutTonTransactionInput = {
    create?: XOR<transactionCreateWithoutTonTransactionInput, transactionUncheckedCreateWithoutTonTransactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTonTransactionInput
    connect?: transactionWhereUniqueInput
  }

  export type transactionUpdateOneRequiredWithoutTonTransactionNestedInput = {
    create?: XOR<transactionCreateWithoutTonTransactionInput, transactionUncheckedCreateWithoutTonTransactionInput>
    connectOrCreate?: transactionCreateOrConnectWithoutTonTransactionInput
    upsert?: transactionUpsertWithoutTonTransactionInput
    connect?: transactionWhereUniqueInput
    update?: XOR<XOR<transactionUpdateToOneWithWhereWithoutTonTransactionInput, transactionUpdateWithoutTonTransactionInput>, transactionUncheckedUpdateWithoutTonTransactionInput>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeFilter<$PrismaModel> | $Enums.TransactionType
  }

  export type NestedEnumTransactionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusFilter<$PrismaModel> | $Enums.TransactionStatus
  }

  export type NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionType | EnumTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionType[] | ListEnumTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.TransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumTransactionTypeFilter<$PrismaModel>
  }

  export type NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransactionStatus | EnumTransactionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TransactionStatus[] | ListEnumTransactionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTransactionStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransactionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTransactionStatusFilter<$PrismaModel>
    _max?: NestedEnumTransactionStatusFilter<$PrismaModel>
  }

  export type accountCreateWithoutReferralInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referredBy?: referralCreateNestedOneWithoutAccountsInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
    gifts?: account_giftCreateNestedManyWithoutAccountInput
    transactions?: transactionCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutReferralInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
    gifts?: account_giftUncheckedCreateNestedManyWithoutAccountInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAccountInput
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
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
    gifts?: account_giftCreateNestedManyWithoutAccountInput
    transactions?: transactionCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutReferredByInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
    gifts?: account_giftUncheckedCreateNestedManyWithoutAccountInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAccountInput
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUpdateManyWithoutAccountNestedInput
    transactions?: transactionUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutReferralInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUncheckedUpdateManyWithoutAccountNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAccountNestedInput
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
    avatarUrl?: StringNullableFilter<"account"> | string | null
    referredById?: StringNullableFilter<"account"> | string | null
    createdAt?: DateTimeFilter<"account"> | Date | string
    updatedAt?: DateTimeFilter<"account"> | Date | string
  }

  export type referralCreateWithoutAccountInput = {
    id?: string
    value: string
    percent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: accountCreateNestedManyWithoutReferredByInput
  }

  export type referralUncheckedCreateWithoutAccountInput = {
    id?: string
    value: string
    percent?: number
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
    percent?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutReferralInput
  }

  export type referralUncheckedCreateWithoutAccountsInput = {
    id?: string
    value: string
    percent?: number
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
    nft: nftCreateNestedOneWithoutNftAccountsInput
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

  export type account_giftCreateWithoutAccountInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    nft: nftCreateNestedOneWithoutGiftAccountsInput
    case: gift_caseCreateNestedOneWithoutAccountGiftsInput
    transaction?: transactionCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftUncheckedCreateWithoutAccountInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    nftId: string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: transactionUncheckedCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftCreateOrConnectWithoutAccountInput = {
    where: account_giftWhereUniqueInput
    create: XOR<account_giftCreateWithoutAccountInput, account_giftUncheckedCreateWithoutAccountInput>
  }

  export type account_giftCreateManyAccountInputEnvelope = {
    data: account_giftCreateManyAccountInput | account_giftCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type transactionCreateWithoutAccountInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tonTransaction?: ton_transactionCreateNestedOneWithoutTransactionInput
    accountGift?: account_giftCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutAccountInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    account_giftId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tonTransaction?: ton_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutAccountInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutAccountInput, transactionUncheckedCreateWithoutAccountInput>
  }

  export type transactionCreateManyAccountInputEnvelope = {
    data: transactionCreateManyAccountInput | transactionCreateManyAccountInput[]
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
    percent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: accountUpdateManyWithoutReferredByNestedInput
  }

  export type referralUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    percent?: FloatFieldUpdateOperationsInput | number
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
    percent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutReferralNestedInput
  }

  export type referralUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    percent?: FloatFieldUpdateOperationsInput | number
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

  export type account_giftUpsertWithWhereUniqueWithoutAccountInput = {
    where: account_giftWhereUniqueInput
    update: XOR<account_giftUpdateWithoutAccountInput, account_giftUncheckedUpdateWithoutAccountInput>
    create: XOR<account_giftCreateWithoutAccountInput, account_giftUncheckedCreateWithoutAccountInput>
  }

  export type account_giftUpdateWithWhereUniqueWithoutAccountInput = {
    where: account_giftWhereUniqueInput
    data: XOR<account_giftUpdateWithoutAccountInput, account_giftUncheckedUpdateWithoutAccountInput>
  }

  export type account_giftUpdateManyWithWhereWithoutAccountInput = {
    where: account_giftScalarWhereInput
    data: XOR<account_giftUpdateManyMutationInput, account_giftUncheckedUpdateManyWithoutAccountInput>
  }

  export type account_giftScalarWhereInput = {
    AND?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
    OR?: account_giftScalarWhereInput[]
    NOT?: account_giftScalarWhereInput | account_giftScalarWhereInput[]
    id?: StringFilter<"account_gift"> | string
    price?: FloatFilter<"account_gift"> | number
    isSold?: BoolFilter<"account_gift"> | boolean
    isWithdraw?: BoolFilter<"account_gift"> | boolean
    accountId?: StringFilter<"account_gift"> | string
    nftId?: StringFilter<"account_gift"> | string
    caseId?: StringFilter<"account_gift"> | string
    createdAt?: DateTimeFilter<"account_gift"> | Date | string
    updatedAt?: DateTimeFilter<"account_gift"> | Date | string
  }

  export type transactionUpsertWithWhereUniqueWithoutAccountInput = {
    where: transactionWhereUniqueInput
    update: XOR<transactionUpdateWithoutAccountInput, transactionUncheckedUpdateWithoutAccountInput>
    create: XOR<transactionCreateWithoutAccountInput, transactionUncheckedCreateWithoutAccountInput>
  }

  export type transactionUpdateWithWhereUniqueWithoutAccountInput = {
    where: transactionWhereUniqueInput
    data: XOR<transactionUpdateWithoutAccountInput, transactionUncheckedUpdateWithoutAccountInput>
  }

  export type transactionUpdateManyWithWhereWithoutAccountInput = {
    where: transactionScalarWhereInput
    data: XOR<transactionUpdateManyMutationInput, transactionUncheckedUpdateManyWithoutAccountInput>
  }

  export type transactionScalarWhereInput = {
    AND?: transactionScalarWhereInput | transactionScalarWhereInput[]
    OR?: transactionScalarWhereInput[]
    NOT?: transactionScalarWhereInput | transactionScalarWhereInput[]
    id?: StringFilter<"transaction"> | string
    type?: EnumTransactionTypeFilter<"transaction"> | $Enums.TransactionType
    status?: EnumTransactionStatusFilter<"transaction"> | $Enums.TransactionStatus
    amount?: FloatFilter<"transaction"> | number
    address?: StringNullableFilter<"transaction"> | string | null
    accountId?: StringFilter<"transaction"> | string
    account_giftId?: StringNullableFilter<"transaction"> | string | null
    createdAt?: DateTimeFilter<"transaction"> | Date | string
    updatedAt?: DateTimeFilter<"transaction"> | Date | string
  }

  export type nft_descriptionCreateWithoutNftInput = {
    id?: string
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nft_descriptionUncheckedCreateWithoutNftInput = {
    id?: string
    roi: number
    iterations: number
    isSoldOut?: boolean
    isNew?: boolean
    isHot?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nft_descriptionCreateOrConnectWithoutNftInput = {
    where: nft_descriptionWhereUniqueInput
    create: XOR<nft_descriptionCreateWithoutNftInput, nft_descriptionUncheckedCreateWithoutNftInput>
  }

  export type gift_caseCreateWithoutGiftsInput = {
    id?: string
    sku: string
    title: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accountGifts?: account_giftCreateNestedManyWithoutCaseInput
  }

  export type gift_caseUncheckedCreateWithoutGiftsInput = {
    id?: string
    sku: string
    title: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    accountGifts?: account_giftUncheckedCreateNestedManyWithoutCaseInput
  }

  export type gift_caseCreateOrConnectWithoutGiftsInput = {
    where: gift_caseWhereUniqueInput
    create: XOR<gift_caseCreateWithoutGiftsInput, gift_caseUncheckedCreateWithoutGiftsInput>
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

  export type account_giftCreateWithoutNftInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutGiftsInput
    case: gift_caseCreateNestedOneWithoutAccountGiftsInput
    transaction?: transactionCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftUncheckedCreateWithoutNftInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    accountId: string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: transactionUncheckedCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftCreateOrConnectWithoutNftInput = {
    where: account_giftWhereUniqueInput
    create: XOR<account_giftCreateWithoutNftInput, account_giftUncheckedCreateWithoutNftInput>
  }

  export type account_giftCreateManyNftInputEnvelope = {
    data: account_giftCreateManyNftInput | account_giftCreateManyNftInput[]
    skipDuplicates?: boolean
  }

  export type nft_descriptionUpsertWithoutNftInput = {
    update: XOR<nft_descriptionUpdateWithoutNftInput, nft_descriptionUncheckedUpdateWithoutNftInput>
    create: XOR<nft_descriptionCreateWithoutNftInput, nft_descriptionUncheckedCreateWithoutNftInput>
    where?: nft_descriptionWhereInput
  }

  export type nft_descriptionUpdateToOneWithWhereWithoutNftInput = {
    where?: nft_descriptionWhereInput
    data: XOR<nft_descriptionUpdateWithoutNftInput, nft_descriptionUncheckedUpdateWithoutNftInput>
  }

  export type nft_descriptionUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type nft_descriptionUncheckedUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    roi?: FloatFieldUpdateOperationsInput | number
    iterations?: IntFieldUpdateOperationsInput | number
    isSoldOut?: BoolFieldUpdateOperationsInput | boolean
    isNew?: BoolFieldUpdateOperationsInput | boolean
    isHot?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type gift_caseUpsertWithWhereUniqueWithoutGiftsInput = {
    where: gift_caseWhereUniqueInput
    update: XOR<gift_caseUpdateWithoutGiftsInput, gift_caseUncheckedUpdateWithoutGiftsInput>
    create: XOR<gift_caseCreateWithoutGiftsInput, gift_caseUncheckedCreateWithoutGiftsInput>
  }

  export type gift_caseUpdateWithWhereUniqueWithoutGiftsInput = {
    where: gift_caseWhereUniqueInput
    data: XOR<gift_caseUpdateWithoutGiftsInput, gift_caseUncheckedUpdateWithoutGiftsInput>
  }

  export type gift_caseUpdateManyWithWhereWithoutGiftsInput = {
    where: gift_caseScalarWhereInput
    data: XOR<gift_caseUpdateManyMutationInput, gift_caseUncheckedUpdateManyWithoutGiftsInput>
  }

  export type gift_caseScalarWhereInput = {
    AND?: gift_caseScalarWhereInput | gift_caseScalarWhereInput[]
    OR?: gift_caseScalarWhereInput[]
    NOT?: gift_caseScalarWhereInput | gift_caseScalarWhereInput[]
    id?: StringFilter<"gift_case"> | string
    sku?: StringFilter<"gift_case"> | string
    title?: StringFilter<"gift_case"> | string
    price?: FloatFilter<"gift_case"> | number
    isArchived?: BoolFilter<"gift_case"> | boolean
    createdAt?: DateTimeFilter<"gift_case"> | Date | string
    updatedAt?: DateTimeFilter<"gift_case"> | Date | string
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

  export type account_giftUpsertWithWhereUniqueWithoutNftInput = {
    where: account_giftWhereUniqueInput
    update: XOR<account_giftUpdateWithoutNftInput, account_giftUncheckedUpdateWithoutNftInput>
    create: XOR<account_giftCreateWithoutNftInput, account_giftUncheckedCreateWithoutNftInput>
  }

  export type account_giftUpdateWithWhereUniqueWithoutNftInput = {
    where: account_giftWhereUniqueInput
    data: XOR<account_giftUpdateWithoutNftInput, account_giftUncheckedUpdateWithoutNftInput>
  }

  export type account_giftUpdateManyWithWhereWithoutNftInput = {
    where: account_giftScalarWhereInput
    data: XOR<account_giftUpdateManyMutationInput, account_giftUncheckedUpdateManyWithoutNftInput>
  }

  export type nftCreateWithoutDescriptionInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: gift_caseCreateNestedManyWithoutGiftsInput
    nftAccounts?: account_nftCreateNestedManyWithoutNftInput
    giftAccounts?: account_giftCreateNestedManyWithoutNftInput
  }

  export type nftUncheckedCreateWithoutDescriptionInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    cases?: gift_caseUncheckedCreateNestedManyWithoutGiftsInput
    nftAccounts?: account_nftUncheckedCreateNestedManyWithoutNftInput
    giftAccounts?: account_giftUncheckedCreateNestedManyWithoutNftInput
  }

  export type nftCreateOrConnectWithoutDescriptionInput = {
    where: nftWhereUniqueInput
    create: XOR<nftCreateWithoutDescriptionInput, nftUncheckedCreateWithoutDescriptionInput>
  }

  export type nftUpsertWithoutDescriptionInput = {
    update: XOR<nftUpdateWithoutDescriptionInput, nftUncheckedUpdateWithoutDescriptionInput>
    create: XOR<nftCreateWithoutDescriptionInput, nftUncheckedCreateWithoutDescriptionInput>
    where?: nftWhereInput
  }

  export type nftUpdateToOneWithWhereWithoutDescriptionInput = {
    where?: nftWhereInput
    data: XOR<nftUpdateWithoutDescriptionInput, nftUncheckedUpdateWithoutDescriptionInput>
  }

  export type nftUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: gift_caseUpdateManyWithoutGiftsNestedInput
    nftAccounts?: account_nftUpdateManyWithoutNftNestedInput
    giftAccounts?: account_giftUpdateManyWithoutNftNestedInput
  }

  export type nftUncheckedUpdateWithoutDescriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cases?: gift_caseUncheckedUpdateManyWithoutGiftsNestedInput
    nftAccounts?: account_nftUncheckedUpdateManyWithoutNftNestedInput
    giftAccounts?: account_giftUncheckedUpdateManyWithoutNftNestedInput
  }

  export type accountCreateWithoutGiftsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    referredBy?: referralCreateNestedOneWithoutAccountsInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
    transactions?: transactionCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutGiftsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutGiftsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutGiftsInput, accountUncheckedCreateWithoutGiftsInput>
  }

  export type nftCreateWithoutGiftAccountsInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionCreateNestedOneWithoutNftInput
    cases?: gift_caseCreateNestedManyWithoutGiftsInput
    nftAccounts?: account_nftCreateNestedManyWithoutNftInput
  }

  export type nftUncheckedCreateWithoutGiftAccountsInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionUncheckedCreateNestedOneWithoutNftInput
    cases?: gift_caseUncheckedCreateNestedManyWithoutGiftsInput
    nftAccounts?: account_nftUncheckedCreateNestedManyWithoutNftInput
  }

  export type nftCreateOrConnectWithoutGiftAccountsInput = {
    where: nftWhereUniqueInput
    create: XOR<nftCreateWithoutGiftAccountsInput, nftUncheckedCreateWithoutGiftAccountsInput>
  }

  export type gift_caseCreateWithoutAccountGiftsInput = {
    id?: string
    sku: string
    title: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gifts?: nftCreateNestedManyWithoutCasesInput
  }

  export type gift_caseUncheckedCreateWithoutAccountGiftsInput = {
    id?: string
    sku: string
    title: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    gifts?: nftUncheckedCreateNestedManyWithoutCasesInput
  }

  export type gift_caseCreateOrConnectWithoutAccountGiftsInput = {
    where: gift_caseWhereUniqueInput
    create: XOR<gift_caseCreateWithoutAccountGiftsInput, gift_caseUncheckedCreateWithoutAccountGiftsInput>
  }

  export type transactionCreateWithoutAccountGiftInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutTransactionsInput
    tonTransaction?: ton_transactionCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutAccountGiftInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    tonTransaction?: ton_transactionUncheckedCreateNestedOneWithoutTransactionInput
  }

  export type transactionCreateOrConnectWithoutAccountGiftInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutAccountGiftInput, transactionUncheckedCreateWithoutAccountGiftInput>
  }

  export type accountUpsertWithoutGiftsInput = {
    update: XOR<accountUpdateWithoutGiftsInput, accountUncheckedUpdateWithoutGiftsInput>
    create: XOR<accountCreateWithoutGiftsInput, accountUncheckedCreateWithoutGiftsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutGiftsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutGiftsInput, accountUncheckedUpdateWithoutGiftsInput>
  }

  export type accountUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
    transactions?: transactionUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type nftUpsertWithoutGiftAccountsInput = {
    update: XOR<nftUpdateWithoutGiftAccountsInput, nftUncheckedUpdateWithoutGiftAccountsInput>
    create: XOR<nftCreateWithoutGiftAccountsInput, nftUncheckedCreateWithoutGiftAccountsInput>
    where?: nftWhereInput
  }

  export type nftUpdateToOneWithWhereWithoutGiftAccountsInput = {
    where?: nftWhereInput
    data: XOR<nftUpdateWithoutGiftAccountsInput, nftUncheckedUpdateWithoutGiftAccountsInput>
  }

  export type nftUpdateWithoutGiftAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUpdateOneWithoutNftNestedInput
    cases?: gift_caseUpdateManyWithoutGiftsNestedInput
    nftAccounts?: account_nftUpdateManyWithoutNftNestedInput
  }

  export type nftUncheckedUpdateWithoutGiftAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUncheckedUpdateOneWithoutNftNestedInput
    cases?: gift_caseUncheckedUpdateManyWithoutGiftsNestedInput
    nftAccounts?: account_nftUncheckedUpdateManyWithoutNftNestedInput
  }

  export type gift_caseUpsertWithoutAccountGiftsInput = {
    update: XOR<gift_caseUpdateWithoutAccountGiftsInput, gift_caseUncheckedUpdateWithoutAccountGiftsInput>
    create: XOR<gift_caseCreateWithoutAccountGiftsInput, gift_caseUncheckedCreateWithoutAccountGiftsInput>
    where?: gift_caseWhereInput
  }

  export type gift_caseUpdateToOneWithWhereWithoutAccountGiftsInput = {
    where?: gift_caseWhereInput
    data: XOR<gift_caseUpdateWithoutAccountGiftsInput, gift_caseUncheckedUpdateWithoutAccountGiftsInput>
  }

  export type gift_caseUpdateWithoutAccountGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: nftUpdateManyWithoutCasesNestedInput
  }

  export type gift_caseUncheckedUpdateWithoutAccountGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gifts?: nftUncheckedUpdateManyWithoutCasesNestedInput
  }

  export type transactionUpsertWithoutAccountGiftInput = {
    update: XOR<transactionUpdateWithoutAccountGiftInput, transactionUncheckedUpdateWithoutAccountGiftInput>
    create: XOR<transactionCreateWithoutAccountGiftInput, transactionUncheckedCreateWithoutAccountGiftInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutAccountGiftInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutAccountGiftInput, transactionUncheckedUpdateWithoutAccountGiftInput>
  }

  export type transactionUpdateWithoutAccountGiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutTransactionsNestedInput
    tonTransaction?: ton_transactionUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutAccountGiftInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tonTransaction?: ton_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type accountCreateWithoutNftsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    referredBy?: referralCreateNestedOneWithoutAccountsInput
    gifts?: account_giftCreateNestedManyWithoutAccountInput
    transactions?: transactionCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutNftsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
    gifts?: account_giftUncheckedCreateNestedManyWithoutAccountInput
    transactions?: transactionUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutNftsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutNftsInput, accountUncheckedCreateWithoutNftsInput>
  }

  export type nftCreateWithoutNftAccountsInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionCreateNestedOneWithoutNftInput
    cases?: gift_caseCreateNestedManyWithoutGiftsInput
    giftAccounts?: account_giftCreateNestedManyWithoutNftInput
  }

  export type nftUncheckedCreateWithoutNftAccountsInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionUncheckedCreateNestedOneWithoutNftInput
    cases?: gift_caseUncheckedCreateNestedManyWithoutGiftsInput
    giftAccounts?: account_giftUncheckedCreateNestedManyWithoutNftInput
  }

  export type nftCreateOrConnectWithoutNftAccountsInput = {
    where: nftWhereUniqueInput
    create: XOR<nftCreateWithoutNftAccountsInput, nftUncheckedCreateWithoutNftAccountsInput>
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
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
    gifts?: account_giftUpdateManyWithoutAccountNestedInput
    transactions?: transactionUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutNftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
    gifts?: account_giftUncheckedUpdateManyWithoutAccountNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type nftUpsertWithoutNftAccountsInput = {
    update: XOR<nftUpdateWithoutNftAccountsInput, nftUncheckedUpdateWithoutNftAccountsInput>
    create: XOR<nftCreateWithoutNftAccountsInput, nftUncheckedCreateWithoutNftAccountsInput>
    where?: nftWhereInput
  }

  export type nftUpdateToOneWithWhereWithoutNftAccountsInput = {
    where?: nftWhereInput
    data: XOR<nftUpdateWithoutNftAccountsInput, nftUncheckedUpdateWithoutNftAccountsInput>
  }

  export type nftUpdateWithoutNftAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUpdateOneWithoutNftNestedInput
    cases?: gift_caseUpdateManyWithoutGiftsNestedInput
    giftAccounts?: account_giftUpdateManyWithoutNftNestedInput
  }

  export type nftUncheckedUpdateWithoutNftAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUncheckedUpdateOneWithoutNftNestedInput
    cases?: gift_caseUncheckedUpdateManyWithoutGiftsNestedInput
    giftAccounts?: account_giftUncheckedUpdateManyWithoutNftNestedInput
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

  export type nftCreateWithoutCasesInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionCreateNestedOneWithoutNftInput
    nftAccounts?: account_nftCreateNestedManyWithoutNftInput
    giftAccounts?: account_giftCreateNestedManyWithoutNftInput
  }

  export type nftUncheckedCreateWithoutCasesInput = {
    id?: string
    title: string
    sku: string
    price: number
    isArchived?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: nft_descriptionUncheckedCreateNestedOneWithoutNftInput
    nftAccounts?: account_nftUncheckedCreateNestedManyWithoutNftInput
    giftAccounts?: account_giftUncheckedCreateNestedManyWithoutNftInput
  }

  export type nftCreateOrConnectWithoutCasesInput = {
    where: nftWhereUniqueInput
    create: XOR<nftCreateWithoutCasesInput, nftUncheckedCreateWithoutCasesInput>
  }

  export type account_giftCreateWithoutCaseInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutGiftsInput
    nft: nftCreateNestedOneWithoutGiftAccountsInput
    transaction?: transactionCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftUncheckedCreateWithoutCaseInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    accountId: string
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    transaction?: transactionUncheckedCreateNestedOneWithoutAccountGiftInput
  }

  export type account_giftCreateOrConnectWithoutCaseInput = {
    where: account_giftWhereUniqueInput
    create: XOR<account_giftCreateWithoutCaseInput, account_giftUncheckedCreateWithoutCaseInput>
  }

  export type account_giftCreateManyCaseInputEnvelope = {
    data: account_giftCreateManyCaseInput | account_giftCreateManyCaseInput[]
    skipDuplicates?: boolean
  }

  export type nftUpsertWithWhereUniqueWithoutCasesInput = {
    where: nftWhereUniqueInput
    update: XOR<nftUpdateWithoutCasesInput, nftUncheckedUpdateWithoutCasesInput>
    create: XOR<nftCreateWithoutCasesInput, nftUncheckedCreateWithoutCasesInput>
  }

  export type nftUpdateWithWhereUniqueWithoutCasesInput = {
    where: nftWhereUniqueInput
    data: XOR<nftUpdateWithoutCasesInput, nftUncheckedUpdateWithoutCasesInput>
  }

  export type nftUpdateManyWithWhereWithoutCasesInput = {
    where: nftScalarWhereInput
    data: XOR<nftUpdateManyMutationInput, nftUncheckedUpdateManyWithoutCasesInput>
  }

  export type nftScalarWhereInput = {
    AND?: nftScalarWhereInput | nftScalarWhereInput[]
    OR?: nftScalarWhereInput[]
    NOT?: nftScalarWhereInput | nftScalarWhereInput[]
    id?: StringFilter<"nft"> | string
    title?: StringFilter<"nft"> | string
    sku?: StringFilter<"nft"> | string
    price?: FloatFilter<"nft"> | number
    isArchived?: BoolFilter<"nft"> | boolean
    createdAt?: DateTimeFilter<"nft"> | Date | string
    updatedAt?: DateTimeFilter<"nft"> | Date | string
  }

  export type account_giftUpsertWithWhereUniqueWithoutCaseInput = {
    where: account_giftWhereUniqueInput
    update: XOR<account_giftUpdateWithoutCaseInput, account_giftUncheckedUpdateWithoutCaseInput>
    create: XOR<account_giftCreateWithoutCaseInput, account_giftUncheckedCreateWithoutCaseInput>
  }

  export type account_giftUpdateWithWhereUniqueWithoutCaseInput = {
    where: account_giftWhereUniqueInput
    data: XOR<account_giftUpdateWithoutCaseInput, account_giftUncheckedUpdateWithoutCaseInput>
  }

  export type account_giftUpdateManyWithWhereWithoutCaseInput = {
    where: account_giftScalarWhereInput
    data: XOR<account_giftUpdateManyMutationInput, account_giftUncheckedUpdateManyWithoutCaseInput>
  }

  export type account_nftCreateWithoutTransactionsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutNftsInput
    nft: nftCreateNestedOneWithoutNftAccountsInput
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
    nft?: nftUpdateOneRequiredWithoutNftAccountsNestedInput
  }

  export type account_nftUncheckedUpdateWithoutTransactionsInput = {
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountCreateWithoutTransactionsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralCreateNestedOneWithoutAccountInput
    referredBy?: referralCreateNestedOneWithoutAccountsInput
    nfts?: account_nftCreateNestedManyWithoutAccountInput
    gifts?: account_giftCreateNestedManyWithoutAccountInput
  }

  export type accountUncheckedCreateWithoutTransactionsInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    referredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    referral?: referralUncheckedCreateNestedOneWithoutAccountInput
    nfts?: account_nftUncheckedCreateNestedManyWithoutAccountInput
    gifts?: account_giftUncheckedCreateNestedManyWithoutAccountInput
  }

  export type accountCreateOrConnectWithoutTransactionsInput = {
    where: accountWhereUniqueInput
    create: XOR<accountCreateWithoutTransactionsInput, accountUncheckedCreateWithoutTransactionsInput>
  }

  export type ton_transactionCreateWithoutTransactionInput = {
    id?: string
    from: string
    to: string
    lt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ton_transactionUncheckedCreateWithoutTransactionInput = {
    id?: string
    from: string
    to: string
    lt?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ton_transactionCreateOrConnectWithoutTransactionInput = {
    where: ton_transactionWhereUniqueInput
    create: XOR<ton_transactionCreateWithoutTransactionInput, ton_transactionUncheckedCreateWithoutTransactionInput>
  }

  export type account_giftCreateWithoutTransactionInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutGiftsInput
    nft: nftCreateNestedOneWithoutGiftAccountsInput
    case: gift_caseCreateNestedOneWithoutAccountGiftsInput
  }

  export type account_giftUncheckedCreateWithoutTransactionInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    accountId: string
    nftId: string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_giftCreateOrConnectWithoutTransactionInput = {
    where: account_giftWhereUniqueInput
    create: XOR<account_giftCreateWithoutTransactionInput, account_giftUncheckedCreateWithoutTransactionInput>
  }

  export type accountUpsertWithoutTransactionsInput = {
    update: XOR<accountUpdateWithoutTransactionsInput, accountUncheckedUpdateWithoutTransactionsInput>
    create: XOR<accountCreateWithoutTransactionsInput, accountUncheckedCreateWithoutTransactionsInput>
    where?: accountWhereInput
  }

  export type accountUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: accountWhereInput
    data: XOR<accountUpdateWithoutTransactionsInput, accountUncheckedUpdateWithoutTransactionsInput>
  }

  export type accountUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    referredBy?: referralUpdateOneWithoutAccountsNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    referredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ton_transactionUpsertWithoutTransactionInput = {
    update: XOR<ton_transactionUpdateWithoutTransactionInput, ton_transactionUncheckedUpdateWithoutTransactionInput>
    create: XOR<ton_transactionCreateWithoutTransactionInput, ton_transactionUncheckedCreateWithoutTransactionInput>
    where?: ton_transactionWhereInput
  }

  export type ton_transactionUpdateToOneWithWhereWithoutTransactionInput = {
    where?: ton_transactionWhereInput
    data: XOR<ton_transactionUpdateWithoutTransactionInput, ton_transactionUncheckedUpdateWithoutTransactionInput>
  }

  export type ton_transactionUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    lt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ton_transactionUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    to?: StringFieldUpdateOperationsInput | string
    lt?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_giftUpsertWithoutTransactionInput = {
    update: XOR<account_giftUpdateWithoutTransactionInput, account_giftUncheckedUpdateWithoutTransactionInput>
    create: XOR<account_giftCreateWithoutTransactionInput, account_giftUncheckedCreateWithoutTransactionInput>
    where?: account_giftWhereInput
  }

  export type account_giftUpdateToOneWithWhereWithoutTransactionInput = {
    where?: account_giftWhereInput
    data: XOR<account_giftUpdateWithoutTransactionInput, account_giftUncheckedUpdateWithoutTransactionInput>
  }

  export type account_giftUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutGiftsNestedInput
    nft?: nftUpdateOneRequiredWithoutGiftAccountsNestedInput
    case?: gift_caseUpdateOneRequiredWithoutAccountGiftsNestedInput
  }

  export type account_giftUncheckedUpdateWithoutTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionCreateWithoutTonTransactionInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    account: accountCreateNestedOneWithoutTransactionsInput
    accountGift?: account_giftCreateNestedOneWithoutTransactionInput
  }

  export type transactionUncheckedCreateWithoutTonTransactionInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    accountId: string
    account_giftId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionCreateOrConnectWithoutTonTransactionInput = {
    where: transactionWhereUniqueInput
    create: XOR<transactionCreateWithoutTonTransactionInput, transactionUncheckedCreateWithoutTonTransactionInput>
  }

  export type transactionUpsertWithoutTonTransactionInput = {
    update: XOR<transactionUpdateWithoutTonTransactionInput, transactionUncheckedUpdateWithoutTonTransactionInput>
    create: XOR<transactionCreateWithoutTonTransactionInput, transactionUncheckedCreateWithoutTonTransactionInput>
    where?: transactionWhereInput
  }

  export type transactionUpdateToOneWithWhereWithoutTonTransactionInput = {
    where?: transactionWhereInput
    data: XOR<transactionUpdateWithoutTonTransactionInput, transactionUncheckedUpdateWithoutTonTransactionInput>
  }

  export type transactionUpdateWithoutTonTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutTransactionsNestedInput
    accountGift?: account_giftUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutTonTransactionInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    accountId?: StringFieldUpdateOperationsInput | string
    account_giftId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type accountCreateManyReferredByInput = {
    id?: string
    balance?: number
    username: string
    language?: $Enums.Language
    telegramId?: string | null
    avatarUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type accountUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUpdateManyWithoutAccountNestedInput
    transactions?: transactionUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referral?: referralUncheckedUpdateOneWithoutAccountNestedInput
    nfts?: account_nftUncheckedUpdateManyWithoutAccountNestedInput
    gifts?: account_giftUncheckedUpdateManyWithoutAccountNestedInput
    transactions?: transactionUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type accountUncheckedUpdateManyWithoutReferredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    balance?: FloatFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    language?: EnumLanguageFieldUpdateOperationsInput | $Enums.Language
    telegramId?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftCreateManyAccountInput = {
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_giftCreateManyAccountInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    nftId: string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type transactionCreateManyAccountInput = {
    id?: string
    type?: $Enums.TransactionType
    status?: $Enums.TransactionStatus
    amount: number
    address?: string | null
    account_giftId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_nftUpdateWithoutAccountInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nft?: nftUpdateOneRequiredWithoutNftAccountsNestedInput
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

  export type account_giftUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nft?: nftUpdateOneRequiredWithoutGiftAccountsNestedInput
    case?: gift_caseUpdateOneRequiredWithoutAccountGiftsNestedInput
    transaction?: transactionUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    nftId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUncheckedUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    nftId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type transactionUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tonTransaction?: ton_transactionUpdateOneWithoutTransactionNestedInput
    accountGift?: account_giftUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_giftId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tonTransaction?: ton_transactionUncheckedUpdateOneWithoutTransactionNestedInput
  }

  export type transactionUncheckedUpdateManyWithoutAccountInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTransactionTypeFieldUpdateOperationsInput | $Enums.TransactionType
    status?: EnumTransactionStatusFieldUpdateOperationsInput | $Enums.TransactionStatus
    amount?: FloatFieldUpdateOperationsInput | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_giftId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_nftCreateManyNftInput = {
    accountId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type account_giftCreateManyNftInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    accountId: string
    caseId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type gift_caseUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountGifts?: account_giftUpdateManyWithoutCaseNestedInput
  }

  export type gift_caseUncheckedUpdateWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accountGifts?: account_giftUncheckedUpdateManyWithoutCaseNestedInput
  }

  export type gift_caseUncheckedUpdateManyWithoutGiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type account_giftUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutGiftsNestedInput
    case?: gift_caseUpdateOneRequiredWithoutAccountGiftsNestedInput
    transaction?: transactionUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftUncheckedUpdateWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUncheckedUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftUncheckedUpdateManyWithoutNftInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    caseId?: StringFieldUpdateOperationsInput | string
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

  export type account_giftCreateManyCaseInput = {
    id?: string
    price: number
    isSold?: boolean
    isWithdraw?: boolean
    accountId: string
    nftId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type nftUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUpdateOneWithoutNftNestedInput
    nftAccounts?: account_nftUpdateManyWithoutNftNestedInput
    giftAccounts?: account_giftUpdateManyWithoutNftNestedInput
  }

  export type nftUncheckedUpdateWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: nft_descriptionUncheckedUpdateOneWithoutNftNestedInput
    nftAccounts?: account_nftUncheckedUpdateManyWithoutNftNestedInput
    giftAccounts?: account_giftUncheckedUpdateManyWithoutNftNestedInput
  }

  export type nftUncheckedUpdateManyWithoutCasesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isArchived?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type account_giftUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    account?: accountUpdateOneRequiredWithoutGiftsNestedInput
    nft?: nftUpdateOneRequiredWithoutGiftAccountsNestedInput
    transaction?: transactionUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftUncheckedUpdateWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    transaction?: transactionUncheckedUpdateOneWithoutAccountGiftNestedInput
  }

  export type account_giftUncheckedUpdateManyWithoutCaseInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    isWithdraw?: BoolFieldUpdateOperationsInput | boolean
    accountId?: StringFieldUpdateOperationsInput | string
    nftId?: StringFieldUpdateOperationsInput | string
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