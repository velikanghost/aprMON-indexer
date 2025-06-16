/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  AprMONVault,
  AprMONVault_Approval,
  AprMONVault_BurnableSharesUpdated,
  AprMONVault_Deposit,
  AprMONVault_FeeVaultUpdated,
  AprMONVault_Initialized,
  AprMONVault_LastProcessedBlockNumberUpdated,
  AprMONVault_LastProcessedRequestIdUpdated,
  AprMONVault_MinimumRedeemUpdated,
  AprMONVault_NextRequestIdUpdated,
  AprMONVault_OperatorSet,
  AprMONVault_OracleDataUpdate,
  AprMONVault_OracleOperatorUpdated,
  AprMONVault_OwnershipTransferred,
  AprMONVault_Paused,
  AprMONVault_Redeem,
  AprMONVault_RedeemRequest,
  AprMONVault_RedeemRequestUpdated,
  AprMONVault_RewardFeeUpdated,
  AprMONVault_RewardFeesAccumulatedUpdated,
  AprMONVault_StakePoolUpdated,
  AprMONVault_Sweeped,
  AprMONVault_TotalPendingDepositUpdated,
  AprMONVault_TotalStakedUpdated,
  AprMONVault_Transfer,
  AprMONVault_Unpaused,
  AprMONVault_WithdrawalFeeUpdated,
  AprMONVault_WithdrawalFeesAccumulatedUpdated,
  AprMONVault_WithdrawalWaitTimeUpdated,
} from "generated";

AprMONVault.Approval.handler(async ({ event, context }) => {
  const entity: AprMONVault_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.AprMONVault_Approval.set(entity);
});

AprMONVault.BurnableSharesUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_BurnableSharesUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    burnableShares: event.params.burnableShares,
  };

  context.AprMONVault_BurnableSharesUpdated.set(entity);
});

AprMONVault.Deposit.handler(async ({ event, context }) => {
  const entity: AprMONVault_Deposit = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    sender: event.params.sender,
    owner: event.params.owner,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.AprMONVault_Deposit.set(entity);
});

AprMONVault.FeeVaultUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_FeeVaultUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    protocolFeeVault: event.params.protocolFeeVault,
  };

  context.AprMONVault_FeeVaultUpdated.set(entity);
});

AprMONVault.Initialized.handler(async ({ event, context }) => {
  const entity: AprMONVault_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.AprMONVault_Initialized.set(entity);
});

AprMONVault.LastProcessedBlockNumberUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_LastProcessedBlockNumberUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lastProcessedBlockNumber: event.params.lastProcessedBlockNumber,
  };

  context.AprMONVault_LastProcessedBlockNumberUpdated.set(entity);
});

AprMONVault.LastProcessedRequestIdUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_LastProcessedRequestIdUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    lastProcessedRequestId: event.params.lastProcessedRequestId,
  };

  context.AprMONVault_LastProcessedRequestIdUpdated.set(entity);
});

AprMONVault.MinimumRedeemUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_MinimumRedeemUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    minimumRedeem: event.params.minimumRedeem,
  };

  context.AprMONVault_MinimumRedeemUpdated.set(entity);
});

AprMONVault.NextRequestIdUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_NextRequestIdUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    nextRequestId: event.params.nextRequestId,
  };

  context.AprMONVault_NextRequestIdUpdated.set(entity);
});

AprMONVault.OperatorSet.handler(async ({ event, context }) => {
  const entity: AprMONVault_OperatorSet = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    controller: event.params.controller,
    operator: event.params.operator,
    approved: event.params.approved,
  };

  context.AprMONVault_OperatorSet.set(entity);
});

AprMONVault.OracleDataUpdate.handler(async ({ event, context }) => {
  const entity: AprMONVault_OracleDataUpdate = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    blockNumber: event.params.blockNumber,
    totalPendingDeposit: event.params.totalPendingDeposit,
    totalStaked: event.params.totalStaked,
    burnableShares: event.params.burnableShares,
    lastProcessedRequestId: event.params.lastProcessedRequestId,
    rewardFeesAccumulated: event.params.rewardFeesAccumulated,
  };

  context.AprMONVault_OracleDataUpdate.set(entity);
});

AprMONVault.OracleOperatorUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_OracleOperatorUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    oracle: event.params.oracle,
  };

  context.AprMONVault_OracleOperatorUpdated.set(entity);
});

AprMONVault.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: AprMONVault_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.AprMONVault_OwnershipTransferred.set(entity);
});

AprMONVault.Paused.handler(async ({ event, context }) => {
  const entity: AprMONVault_Paused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.AprMONVault_Paused.set(entity);
});

AprMONVault.Redeem.handler(async ({ event, context }) => {
  const entity: AprMONVault_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    controller: event.params.controller,
    receiver: event.params.receiver,
    requestId: event.params.requestId,
    shares: event.params.shares,
    assets: event.params.assets,
    fee: event.params.fee,
  };

  context.AprMONVault_Redeem.set(entity);
});

AprMONVault.RedeemRequest.handler(async ({ event, context }) => {
  const entity: AprMONVault_RedeemRequest = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    controller: event.params.controller,
    owner: event.params.owner,
    requestId: event.params.requestId,
    sender: event.params.sender,
    shares: event.params.shares,
    assets: event.params.assets,
  };

  context.AprMONVault_RedeemRequest.set(entity);
});

AprMONVault.RedeemRequestUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_RedeemRequestUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    requestId: event.params.requestId,
    redeemData_0: event.params.redeemData
        [0]
    ,
    redeemData_1: event.params.redeemData
        [1]
    ,
    redeemData_2: event.params.redeemData
        [2]
    ,
    redeemData_3: event.params.redeemData
        [3]
    ,
    redeemData_4: event.params.redeemData
        [4]
    ,
  };

  context.AprMONVault_RedeemRequestUpdated.set(entity);
});

AprMONVault.RewardFeeUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_RewardFeeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rewardFee: event.params.rewardFee,
  };

  context.AprMONVault_RewardFeeUpdated.set(entity);
});

AprMONVault.RewardFeesAccumulatedUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_RewardFeesAccumulatedUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    rewardFeesAccumulated: event.params.rewardFeesAccumulated,
  };

  context.AprMONVault_RewardFeesAccumulatedUpdated.set(entity);
});

AprMONVault.StakePoolUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_StakePoolUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stakePool: event.params.stakePool,
  };

  context.AprMONVault_StakePoolUpdated.set(entity);
});

AprMONVault.Sweeped.handler(async ({ event, context }) => {
  const entity: AprMONVault_Sweeped = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    recipient: event.params.recipient,
    amount: event.params.amount,
  };

  context.AprMONVault_Sweeped.set(entity);
});

AprMONVault.TotalPendingDepositUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_TotalPendingDepositUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    totalPendingDeposit: event.params.totalPendingDeposit,
  };

  context.AprMONVault_TotalPendingDepositUpdated.set(entity);
});

AprMONVault.TotalStakedUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_TotalStakedUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    totalStaked: event.params.totalStaked,
  };

  context.AprMONVault_TotalStakedUpdated.set(entity);
});

AprMONVault.Transfer.handler(async ({ event, context }) => {
  const entity: AprMONVault_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.AprMONVault_Transfer.set(entity);
});

AprMONVault.Unpaused.handler(async ({ event, context }) => {
  const entity: AprMONVault_Unpaused = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    account: event.params.account,
  };

  context.AprMONVault_Unpaused.set(entity);
});

AprMONVault.WithdrawalFeeUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_WithdrawalFeeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawalFee: event.params.withdrawalFee,
  };

  context.AprMONVault_WithdrawalFeeUpdated.set(entity);
});

AprMONVault.WithdrawalFeesAccumulatedUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_WithdrawalFeesAccumulatedUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawalFeesAccumulated: event.params.withdrawalFeesAccumulated,
  };

  context.AprMONVault_WithdrawalFeesAccumulatedUpdated.set(entity);
});

AprMONVault.WithdrawalWaitTimeUpdated.handler(async ({ event, context }) => {
  const entity: AprMONVault_WithdrawalWaitTimeUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    withdrawalWaitTime: event.params.withdrawalWaitTime,
  };

  context.AprMONVault_WithdrawalWaitTimeUpdated.set(entity);
});
