import assert from "assert";
import { 
  TestHelpers,
  AprMONVault_Approval
} from "generated";
const { MockDb, AprMONVault } = TestHelpers;

describe("AprMONVault contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AprMONVault contract Approval event
  const event = AprMONVault.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("AprMONVault_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AprMONVault.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAprMONVaultApproval = mockDbUpdated.entities.AprMONVault_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAprMONVaultApproval: AprMONVault_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAprMONVaultApproval, expectedAprMONVaultApproval, "Actual AprMONVaultApproval should be the same as the expectedAprMONVaultApproval");
  });
});
