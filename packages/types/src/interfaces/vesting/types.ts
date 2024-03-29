// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

import type { Struct } from '@polkadot/types-codec';
import type { Balance, BlockNumber } from '@polkadot/types/interfaces/runtime';

/** @name VestingInfo */
export interface VestingInfo extends Struct {
  readonly locked: Balance;
  readonly perBlock: Balance;
  readonly startingBlock: BlockNumber;
}

export type PHANTOM_VESTING = 'vesting';
