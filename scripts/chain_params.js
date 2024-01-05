import { reactive } from 'vue';

// In most BTC-derived coins, the below parameters can be found in the 'src/chainparams.cpp' Mainnet configuration.
// These below params share the same names as the CPP params, so finding and editing these is easy-peasy!
// <[network_byte] [32_byte_payload] [0x01] [4_byte_checksum]>
export const PRIVKEY_BYTE_LENGTH = 38;

export const COIN_DECIMALS = 8;
export const COIN = 10 ** 8;

/** The maximum gap (absence of transactions within a range of derived addresses) before an account search ends */
export const MAX_ACCOUNT_GAP = 20;

/* Internal tweaking parameters */
// A new encryption password must be 'at least' this long.
export const MIN_PASS_LENGTH = 6;

/** BIP21 coin prefix */
export const BIP21_PREFIX = 'aipg';

/* chainparams */
export const cChainParams = reactive({
    current: null,
    main: {
        name: 'mainnet',
        collateralInSats: 10000 * COIN,
        isTestnet: false,
        TICKER: 'AIPG',
        PUBKEY_PREFIX: ['A'],
        STAKING_PREFIX: 'A',
        PUBKEY_ADDRESS: 23,
        STAKING_ADDRESS: 23,
        SECRET_KEY: 212,
        BIP44_TYPE: 119,
        BIP44_TYPE_LEDGER: 77,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 51472,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'AIPG-blockbook', url: 'https://localhost:5500' },
        ],
        Nodes: [{ name: 'Duddino', url: 'https://rpc.duddino.com/mainnet' }],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        coinbaseMaturity: 100,
        budgetCycleBlocks: 43200,
        proposalFee: 50 * COIN,
        proposalFeeConfirmRequirement: 6,
        maxPaymentCycles: 6,
        maxPayment: 10 * 43200 * COIN, // 43200 blocks of 10 AIPG
        defaultColdStakingAddress: 'AdgQDpS8jDRJDX8yK8m9KnTMarsE84zdsy', // Labs Cold Pool
    },
    testnet: {
        name: 'testnet',
        collateralInSats: 10000 * COIN,
        isTestnet: true,
        TICKER: 'tAIPG',
        PUBKEY_PREFIX: ['a', 'a'],
        STAKING_PREFIX: 'a',
        PUBKEY_ADDRESS: 23,
        STAKING_ADDRESS: 23,
        SECRET_KEY: 239,
        BIP44_TYPE: 1,
        BIP44_TYPE_LEDGER: 1,
        PROTOCOL_VERSION: 70926,
        MASTERNODE_PORT: 51474,
        // A list of Labs-trusted explorers
        Explorers: [
            // Display name      Blockbook-compatible API base
            { name: 'AIPG-blockbook', url: 'https://localhost:5500' },
        ],
        Nodes: [{ name: 'Duddino', url: 'https://rpc.duddino.com/testnet' }],
        Consensus: {
            // Network upgrades
            UPGRADE_V6_0: undefined,
        },
        coinbaseMaturity: 15,
        budgetCycleBlocks: 144,
        proposalFee: 50 * COIN,
        proposalFeeConfirmRequirement: 3,
        maxPaymentCycles: 20,
        maxPayment: 10 * 144 * COIN, // 144 blocks of 10 tAIPG
        defaultColdStakingAddress: 'amNziUEPyhnUkiVdfsiNX93H6rSJnios44', // Sparrow's Testnet Cold Pool
    },
});
// Set default chain
cChainParams.current = cChainParams.main;
