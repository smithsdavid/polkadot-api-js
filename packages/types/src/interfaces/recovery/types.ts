// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct, Vec, u16 } from '@polkadot/types-codec';
import type { AccountId, Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name ActiveRecovery */
export interface ActiveRecovery extends Struct {
  readonly created: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
}

/** @name RecoveryConfig */
export interface RecoveryConfig extends Struct {
  readonly delayPeriod: BlockNumber;
  readonly deposit: Balance;
  readonly friends: Vec<AccountId>;
  readonly threshold: u16;
}

export type PHANTOM_RECOVERY = 'recovery';
