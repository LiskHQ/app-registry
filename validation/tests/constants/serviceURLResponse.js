const mockServiceURLSuccessRes = {
	status: 200,
	data: {
		data: {
			version: '0.1.0',
			networkVersion: '1.0',
			chainID: '00000000',
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
			height: 43817,
			finalizedHeight: 43816,
			syncing: false,
			unconfirmedTransactions: 0,
			genesis: {
				block: {
					fromFile: './config/genesis_block.blob',
				},
				blockTime: 10,
				bftBatchSize: 103,
				maxTransactionsSize: 15360,
				chainID: '00000000',
			},
			registeredModules: [
				'auth',
				'dynamicReward',
				'fee',
				'interoperability',
				'pos',
				'random',
				'token',
				'validators',
			],
			moduleCommands: [
				'auth:registerMultisignature',
				'interoperability:registerMainchain',
				'interoperability:submitSidechainCrossChainUpdate',
				'interoperability:initializeStateRecovery',
				'interoperability:recoverState',
				'pos:registerValidator',
				'pos:reportMisbehavior',
				'pos:unlock',
				'pos:updateGeneratorKey',
				'pos:stake',
				'pos:changeCommission',
				'pos:claimRewards',
				'token:transfer',
				'token:transferCrossChain',
			],
			network: {
				version: '1.0',
				port: 7668,
				seedPeers: [],
			},
		},
		meta: {
			lastUpdate: 1681206583,
			lastBlockHeight: 43817,
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
		},
	},
};

const mockServiceURL500Res = {
	status: 500,
	data: {
		data: {
			message: 'Server error',
		},
	},
};

const mockServiceURLIncorrectRes = {
	status: 200,
	data: {
		data: {
			version: '0.1.0',
			networkVersion: '1.0',
			chainID: '00000001',
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
			height: 43817,
			finalizedHeight: 43816,
			syncing: false,
			unconfirmedTransactions: 0,
			genesis: {
				block: {
					fromFile: './config/genesis_block.blob',
				},
				blockTime: 10,
				bftBatchSize: 103,
				maxTransactionsSize: 15360,
				chainID: '00000001',
			},
			registeredModules: [
				'auth',
				'dynamicReward',
				'fee',
				'interoperability',
				'pos',
				'random',
				'token',
				'validators',
			],
			moduleCommands: [
				'auth:registerMultisignature',
				'interoperability:registerMainchain',
				'interoperability:submitSidechainCrossChainUpdate',
				'interoperability:initializeStateRecovery',
				'interoperability:recoverState',
				'pos:registerValidator',
				'pos:reportMisbehavior',
				'pos:unlock',
				'pos:updateGeneratorKey',
				'pos:stake',
				'pos:changeCommission',
				'pos:claimRewards',
				'token:transfer',
				'token:transferCrossChain',
			],
			network: {
				version: '1.0',
				port: 7668,
				seedPeers: [],
			},
		},
		meta: {
			lastUpdate: 1681206583,
			lastBlockHeight: 43817,
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
		},
	},
};

const mockServiceURLSuccessResWs = {
	jsonrpc: '2.0',
	result: {
		data: {
			version: '0.1.0',
			networkVersion: '1.0',
			chainID: '00000000',
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
			height: 43817,
			finalizedHeight: 43816,
			syncing: false,
			unconfirmedTransactions: 0,
			genesis: {
				block: {
					fromFile: './config/genesis_block.blob',
				},
				blockTime: 10,
				bftBatchSize: 103,
				maxTransactionsSize: 15360,
				chainID: '00000000',
			},
			registeredModules: [
				'auth',
				'dynamicReward',
				'fee',
				'interoperability',
				'pos',
				'random',
				'token',
				'validators',
			],
			moduleCommands: [
				'auth:registerMultisignature',
				'interoperability:registerMainchain',
				'interoperability:submitSidechainCrossChainUpdate',
				'interoperability:initializeStateRecovery',
				'interoperability:recoverState',
				'pos:registerValidator',
				'pos:reportMisbehavior',
				'pos:unlock',
				'pos:updateGeneratorKey',
				'pos:stake',
				'pos:changeCommission',
				'pos:claimRewards',
				'token:transfer',
				'token:transferCrossChain',
			],
			network: {
				version: '1.0',
				port: 7668,
				seedPeers: [],
			},
		},
		meta: {
			lastUpdate: 1681206583,
			lastBlockHeight: 43817,
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
		},
	},
};

const mockServiceURLIncorrectResWs = {
	jsonrpc: '2.0',
	result: {
		data: {
			version: '0.1.0',
			networkVersion: '1.0',
			chainID: '00000001',
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
			height: 43817,
			finalizedHeight: 43816,
			syncing: false,
			unconfirmedTransactions: 0,
			genesis: {
				block: {
					fromFile: './config/genesis_block.blob',
				},
				blockTime: 10,
				bftBatchSize: 103,
				maxTransactionsSize: 15360,
				chainID: '00000001',
			},
			registeredModules: [
				'auth',
				'dynamicReward',
				'fee',
				'interoperability',
				'pos',
				'random',
				'token',
				'validators',
			],
			moduleCommands: [
				'auth:registerMultisignature',
				'interoperability:registerMainchain',
				'interoperability:submitSidechainCrossChainUpdate',
				'interoperability:initializeStateRecovery',
				'interoperability:recoverState',
				'pos:registerValidator',
				'pos:reportMisbehavior',
				'pos:unlock',
				'pos:updateGeneratorKey',
				'pos:stake',
				'pos:changeCommission',
				'pos:claimRewards',
				'token:transfer',
				'token:transferCrossChain',
			],
			network: {
				version: '1.0',
				port: 7668,
				seedPeers: [],
			},
		},
		meta: {
			lastUpdate: 1681206583,
			lastBlockHeight: 43817,
			lastBlockID: 'aa71164271f84ca47c632c5b8e311ce3c97b627d79449488589aa79417175030',
		},
	},
};

const mockNodeURLSuccessResWs = {
	chainID: '00000000',
};

const mockNodeURLIncorrectResWs = {
	chainID: '04000000',
};

const mockImageResolutionResponse = {
	data: { type: 'Buffer', data: [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, 0, 64, 0, 0, 0, 64, 8, 6, 0, 0, 0, 170, 105, 113, 222, 0, 0, 3, 146, 73, 68, 65, 84, 120, 1, 237, 155, 61, 108, 211, 64, 24, 134, 63, 231, 71, 2, 117, 98, 66, 234, 24, 54, 42, 117, 201, 20, 1, 18, 67, 194, 86, 4, 75, 59, 36, 42, 99, 24, 171, 70, 130, 137, 14, 48, 49, 192, 134, 68, 186, 129, 146, 1, 22, 42, 101, 195, 217, 0, 101, 105, 151, 74, 101, 35, 99, 165, 78, 93, 26, 21, 169, 113, 66, 94, 91, 14, 174, 235, 59, 59, 189, 31, 15, 231, 71, 138, 170, 56, 142, 211, 123, 238, 252, 253, 92, 90, 235, 225, 214, 217, 148, 12, 38, 71, 134, 147, 9, 32, 195, 201, 4, 144, 225, 100, 2, 200, 112, 50, 1, 100, 56, 153, 0, 50, 156, 84, 5, 60, 185, 159, 167, 213, 146, 69, 105, 146, 154, 128, 219, 183, 44, 87, 192, 246, 122, 145, 150, 110, 164, 39, 33, 53, 1, 245, 90, 222, 149, 224, 138, 120, 144, 222, 66, 76, 229, 147, 49, 232, 90, 57, 63, 127, 254, 244, 94, 193, 61, 150, 6, 169, 8, 216, 217, 44, 92, 122, 190, 116, 211, 91, 17, 105, 160, 93, 64, 173, 156, 163, 210, 114, 46, 226, 120, 58, 1, 81, 187, 128, 147, 83, 246, 107, 245, 90, 129, 116, 163, 93, 192, 225, 112, 226, 62, 162, 88, 45, 229, 220, 204, 160, 19, 109, 2, 252, 180, 7, 118, 123, 99, 230, 121, 141, 106, 65, 107, 90, 212, 38, 0, 65, 174, 185, 230, 69, 251, 63, 199, 83, 218, 251, 233, 68, 158, 135, 128, 168, 51, 45, 106, 249, 164, 202, 74, 110, 158, 246, 182, 215, 189, 251, 188, 211, 31, 211, 232, 111, 244, 134, 52, 86, 129, 174, 180, 168, 69, 0, 102, 222, 7, 247, 57, 162, 253, 232, 124, 38, 225, 251, 132, 249, 30, 95, 148, 106, 148, 11, 192, 125, 31, 158, 77, 148, 191, 96, 239, 215, 152, 134, 199, 236, 128, 168, 35, 45, 42, 21, 16, 12, 124, 225, 227, 126, 225, 211, 238, 57, 204, 247, 235, 232, 19, 148, 10, 240, 235, 253, 40, 252, 163, 72, 137, 131, 163, 104, 9, 58, 250, 4, 101, 87, 15, 215, 251, 65, 78, 78, 167, 244, 237, 199, 255, 165, 143, 85, 192, 10, 136, 232, 19, 84, 174, 2, 101, 2, 194, 245, 126, 144, 142, 125, 121, 192, 97, 33, 65, 144, 22, 155, 143, 213, 21, 71, 74, 4, 176, 234, 125, 128, 193, 246, 15, 174, 46, 121, 4, 68, 188, 22, 125, 61, 117, 125, 130, 18, 1, 188, 154, 254, 101, 251, 34, 242, 56, 210, 98, 155, 83, 33, 170, 234, 19, 164, 11, 168, 115, 138, 24, 123, 223, 97, 206, 50, 24, 28, 241, 251, 132, 106, 89, 254, 124, 73, 189, 34, 6, 222, 168, 177, 3, 95, 183, 239, 196, 94, 163, 107, 179, 207, 121, 190, 38, 63, 45, 74, 21, 192, 219, 212, 192, 125, 207, 155, 125, 31, 172, 0, 157, 125, 130, 180, 171, 5, 235, 253, 48, 24, 120, 199, 142, 159, 125, 31, 94, 159, 32, 123, 251, 76, 154, 128, 96, 189, 31, 102, 145, 193, 3, 94, 159, 128, 85, 32, 179, 79, 144, 34, 0, 105, 143, 23, 248, 162, 210, 94, 28, 186, 250, 4, 97, 1, 94, 93, 207, 158, 145, 36, 129, 143, 69, 92, 159, 32, 3, 97, 1, 188, 122, 191, 219, 31, 39, 10, 124, 44, 120, 219, 103, 193, 134, 74, 4, 33, 1, 113, 245, 190, 189, 63, 33, 81, 222, 127, 29, 43, 237, 19, 132, 4, 240, 234, 253, 179, 115, 239, 33, 3, 214, 117, 16, 16, 27, 143, 196, 22, 177, 208, 187, 15, 135, 236, 229, 125, 103, 217, 18, 110, 98, 48, 187, 175, 54, 139, 220, 180, 55, 18, 148, 44, 36, 0, 181, 59, 47, 194, 227, 246, 16, 185, 79, 33, 16, 34, 89, 32, 198, 44, 154, 98, 195, 8, 7, 193, 143, 61, 118, 186, 2, 216, 224, 188, 142, 4, 244, 20, 172, 248, 2, 80, 45, 138, 14, 30, 8, 11, 192, 18, 124, 177, 123, 193, 141, 246, 144, 80, 45, 39, 151, 128, 193, 55, 56, 210, 176, 173, 206, 235, 28, 23, 65, 74, 33, 4, 9, 104, 115, 121, 18, 90, 179, 234, 173, 178, 98, 205, 191, 18, 15, 62, 130, 145, 28, 123, 136, 188, 193, 227, 51, 88, 45, 245, 117, 176, 100, 254, 181, 56, 6, 243, 97, 107, 177, 142, 205, 31, 16, 126, 86, 238, 230, 104, 231, 89, 49, 209, 185, 178, 144, 218, 90, 225, 23, 123, 253, 41, 249, 210, 68, 126, 127, 243, 217, 27, 16, 228, 181, 54, 10, 220, 107, 203, 30, 60, 144, 190, 195, 128, 202, 13, 197, 75, 18, 222, 125, 113, 220, 251, 25, 131, 127, 219, 228, 175, 28, 95, 148, 108, 148, 108, 137, 217, 179, 212, 216, 141, 137, 208, 72, 97, 131, 223, 206, 124, 240, 188, 92, 15, 161, 16, 165, 2, 101, 187, 194, 232, 233, 89, 18, 252, 252, 157, 164, 208, 193, 185, 246, 129, 120, 186, 99, 161, 244, 91, 7, 72, 8, 23, 74, 193, 252, 221, 218, 80, 95, 232, 196, 97, 101, 255, 51, 100, 56, 153, 0, 50, 156, 76, 0, 25, 78, 38, 128, 12, 39, 19, 64, 134, 147, 9, 32, 195, 249, 7, 98, 29, 122, 41, 82, 55, 112, 195, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130] },
};

const mockIncorrectImageResolutionResponse = {
	data: { type: 'Buffer', data: [60, 63, 120, 109, 108, 32, 118, 101, 114, 115, 105, 111, 110, 61, 34, 49, 46, 48, 34, 32, 101, 110, 99, 111, 100, 105, 110, 103, 61, 34, 105, 115, 111, 45, 56, 56, 53, 57, 45, 49, 34, 63, 62, 13, 10, 60, 33, 45, 45, 32, 85, 112, 108, 111, 97, 100, 101, 100, 32, 116, 111, 58, 32, 83, 86, 71, 32, 82, 101, 112, 111, 44, 32, 119, 119, 119, 46, 115, 118, 103, 114, 101, 112, 111, 46, 99, 111, 109, 44, 32, 71, 101, 110, 101, 114, 97, 116, 111, 114, 58, 32, 83, 86, 71, 32, 82, 101, 112, 111, 32, 77, 105, 120, 101, 114, 32, 84, 111, 111, 108, 115, 32, 45, 45, 62, 13, 10, 60, 33, 68, 79, 67, 84, 89, 80, 69, 32, 115, 118, 103, 32, 80, 85, 66, 76, 73, 67, 32, 34, 45, 47, 47, 87, 51, 67, 47, 47, 68, 84, 68, 32, 83, 86, 71, 32, 49, 46, 49, 47, 47, 69, 78, 34, 32, 34, 104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 119, 51, 46, 111, 114, 103, 47, 71, 114, 97, 112, 104, 105, 99, 115, 47, 83, 86, 71, 47, 49, 46, 49, 47, 68, 84, 68, 47, 115, 118, 103, 49, 49, 46, 100, 116, 100, 34, 62, 13, 10, 60, 115, 118, 103, 32, 102, 105, 108, 108, 61, 34, 35, 48, 48, 48, 48, 48, 48, 34, 32, 118, 101, 114, 115, 105, 111, 110, 61, 34, 49, 46, 49, 34, 32, 105, 100, 61, 34, 67, 97, 112, 97, 95, 49, 34, 32, 120, 109, 108, 110, 115, 61, 34, 104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 119, 51, 46, 111, 114, 103, 47, 50, 48, 48, 48, 47, 115, 118, 103, 34, 32, 120, 109, 108, 110, 115, 58, 120, 108, 105, 110, 107, 61, 34, 104, 116, 116, 112, 58, 47, 47, 119, 119, 119, 46, 119, 51, 46, 111, 114, 103, 47, 49, 57, 57, 57, 47, 120, 108, 105, 110, 107, 34, 32, 13, 10, 9, 32, 119, 105, 100, 116, 104, 61, 34, 56, 48, 48, 112, 120, 34, 32, 104, 101, 105, 103, 104, 116, 61, 34, 56, 48, 48, 112, 120, 34, 32, 118, 105, 101, 119, 66, 111, 120, 61, 34, 48, 32, 48, 32, 52, 50, 53, 46, 52, 54, 54, 32, 52, 50, 53, 46, 52, 54, 55, 34, 13, 10, 9, 32, 120, 109, 108, 58, 115, 112, 97, 99, 101, 61, 34, 112, 114, 101, 115, 101, 114, 118, 101, 34, 62, 13, 10, 60, 103, 62, 13, 10, 9, 60, 103, 62, 13, 10, 9, 9, 60, 103, 62, 13, 10, 9, 9, 9, 60, 112, 97, 116, 104, 32, 100, 61, 34, 77, 51, 49, 56, 46, 49, 53, 44, 50, 51, 48, 46, 49, 57, 53, 108, 55, 55, 46, 57, 51, 52, 45, 55, 55, 46, 57, 51, 55, 99, 51, 49, 46, 56, 57, 52, 45, 51, 49, 46, 56, 57, 50, 44, 51, 49, 46, 56, 57, 52, 45, 56, 51, 46, 55, 56, 50, 45, 48, 46, 48, 48, 52, 45, 49, 49, 53, 46, 54, 55, 52, 108, 45, 49, 50, 46, 54, 54, 45, 49, 50, 46, 54, 54, 13, 10, 9, 9, 9, 9, 99, 45, 51, 49, 46, 56, 57, 51, 45, 51, 49, 46, 56, 57, 54, 45, 56, 51, 46, 55, 56, 45, 51, 49, 46, 56, 57, 54, 45, 49, 49, 53, 46, 54, 55, 52, 45, 48, 46, 48, 48, 52, 108, 45, 55, 55, 46, 57, 51, 55, 44, 55, 55, 46, 57, 51, 52, 99, 45, 49, 55, 46, 53, 56, 56, 44, 49, 55, 46, 53, 56, 56, 45, 50, 53, 46, 52, 53, 55, 44, 52, 49, 46, 50, 54, 52, 45, 50, 51, 46, 54, 52, 54, 44, 54, 52, 46, 51, 49, 49, 13, 10, 9, 9, 9, 9, 99, 45, 50, 51, 46, 48, 52, 53, 45, 49, 46, 56, 49, 51, 45, 52, 54, 46, 55, 50, 50, 44, 54, 46, 48, 53, 54, 45, 54, 52, 46, 51, 48, 56, 44, 50, 51, 46, 54, 52, 55, 76, 50, 51, 46, 57, 50, 44, 50, 54, 55, 46, 55, 52, 56, 99, 45, 51, 49, 46, 56, 57, 52, 44, 51, 49, 46, 56, 56, 57, 45, 51, 49, 46, 56, 57, 52, 44, 56, 51, 46, 55, 55, 57, 44, 48, 44, 49, 49, 53, 46, 54, 55, 52, 108, 49, 50, 46, 54, 54, 52, 44, 49, 50, 46, 54, 54, 50, 13, 10, 9, 9, 9, 9, 99, 51, 49, 46, 56, 57, 51, 44, 51, 49, 46, 56, 57, 51, 44, 56, 51, 46, 55, 56, 51, 44, 51, 49, 46, 56, 57, 51, 44, 49, 49, 53, 46, 54, 55, 52, 44, 48, 108, 55, 55, 46, 57, 51, 53, 45, 55, 55, 46, 57, 51, 54, 99, 49, 55, 46, 53, 57, 50, 45, 49, 55, 46, 53, 57, 44, 50, 53, 46, 52, 53, 57, 45, 52, 49, 46, 50, 54, 54, 44, 50, 51, 46, 54, 52, 55, 45, 54, 52, 46, 51, 48, 57, 13, 10, 9, 9, 9, 9, 67, 50, 55, 54, 46, 56, 56, 52, 44, 50, 53, 53, 46, 54, 53, 52, 44, 51, 48, 48, 46, 53, 54, 44, 50, 52, 55, 46, 55, 56, 51, 44, 51, 49, 56, 46, 49, 53, 44, 50, 51, 48, 46, 49, 57, 53, 122, 32, 77, 50, 48, 50, 46, 54, 53, 51, 44, 50, 57, 48, 46, 54, 48, 53, 108, 45, 55, 55, 46, 57, 51, 54, 44, 55, 55, 46, 57, 51, 56, 99, 45, 49, 54, 46, 55, 48, 53, 44, 49, 54, 46, 55, 48, 51, 45, 52, 51, 46, 56, 56, 57, 44, 49, 54, 46, 55, 48, 51, 45, 54, 48, 46, 53, 57, 44, 48, 13, 10, 9, 9, 9, 9, 108, 45, 49, 50, 46, 54, 54, 54, 45, 49, 50, 46, 54, 54, 54, 99, 45, 49, 54, 46, 55, 48, 53, 45, 49, 54, 46, 55, 48, 49, 45, 49, 54, 46, 55, 48, 51, 45, 52, 51, 46, 56, 56, 53, 44, 48, 45, 54, 48, 46, 53, 57, 52, 108, 55, 55, 46, 57, 51, 54, 45, 55, 55, 46, 57, 51, 50, 99, 49, 52, 46, 49, 52, 45, 49, 52, 46, 49, 52, 49, 44, 51, 53, 46, 55, 55, 57, 45, 49, 54, 46, 51, 48, 54, 44, 53, 50, 46, 50, 50, 54, 45, 54, 46, 53, 49, 54, 108, 45, 51, 50, 46, 51, 48, 50, 44, 51, 50, 46, 51, 48, 55, 13, 10, 9, 9, 9, 9, 99, 45, 55, 46, 54, 48, 54, 44, 55, 46, 54, 48, 52, 45, 55, 46, 54, 48, 54, 44, 49, 57, 46, 57, 51, 56, 44, 48, 44, 50, 55, 46, 53, 52, 49, 99, 55, 46, 54, 48, 53, 44, 55, 46, 54, 48, 55, 44, 49, 57, 46, 57, 51, 55, 44, 55, 46, 54, 48, 55, 44, 50, 55, 46, 53, 52, 49, 44, 48, 108, 51, 50, 46, 51, 48, 54, 45, 51, 50, 46, 51, 48, 51, 13, 10, 9, 9, 9, 9, 67, 50, 49, 56, 46, 57, 53, 57, 44, 50, 53, 52, 46, 56, 50, 56, 44, 50, 49, 54, 46, 55, 57, 53, 44, 50, 55, 54, 46, 52, 54, 57, 44, 50, 48, 50, 46, 54, 53, 51, 44, 50, 57, 48, 46, 54, 48, 53, 122, 32, 77, 50, 51, 56, 46, 51, 56, 50, 44, 50, 48, 57, 46, 49, 54, 57, 108, 51, 50, 46, 50, 57, 57, 45, 51, 50, 46, 51, 48, 54, 99, 55, 46, 54, 48, 56, 45, 55, 46, 54, 48, 50, 44, 55, 46, 54, 48, 56, 45, 49, 57, 46, 57, 51, 53, 44, 48, 45, 50, 55, 46, 53, 51, 56, 13, 10, 9, 9, 9, 9, 99, 45, 55, 46, 54, 48, 52, 45, 55, 46, 54, 49, 45, 49, 57, 46, 57, 51, 54, 45, 55, 46, 54, 49, 45, 50, 55, 46, 53, 52, 49, 45, 48, 46, 48, 48, 52, 108, 45, 51, 50, 46, 51, 48, 51, 44, 51, 50, 46, 51, 48, 51, 99, 45, 57, 46, 55, 57, 49, 45, 49, 54, 46, 52, 52, 54, 45, 55, 46, 54, 50, 55, 45, 51, 56, 46, 48, 56, 55, 44, 54, 46, 53, 49, 52, 45, 53, 50, 46, 50, 50, 54, 108, 55, 55, 46, 57, 51, 53, 45, 55, 55, 46, 57, 51, 53, 13, 10, 9, 9, 9, 9, 99, 49, 54, 46, 55, 48, 55, 45, 49, 54, 46, 55, 48, 55, 44, 52, 51, 46, 56, 57, 45, 49, 54, 46, 55, 48, 55, 44, 54, 48, 46, 53, 57, 52, 44, 48, 108, 49, 50, 46, 54, 54, 52, 44, 49, 50, 46, 54, 54, 52, 99, 49, 54, 46, 55, 48, 53, 44, 49, 54, 46, 55, 48, 53, 44, 49, 54, 46, 55, 48, 53, 44, 52, 51, 46, 56, 56, 54, 44, 48, 44, 54, 48, 46, 53, 57, 49, 108, 45, 55, 55, 46, 57, 51, 54, 44, 55, 55, 46, 57, 51, 55, 13, 10, 9, 9, 9, 9, 67, 50, 55, 54, 46, 52, 54, 56, 44, 50, 49, 54, 46, 55, 57, 55, 44, 50, 53, 52, 46, 56, 50, 56, 44, 50, 49, 56, 46, 57, 53, 57, 44, 50, 51, 56, 46, 51, 56, 50, 44, 50, 48, 57, 46, 49, 54, 57, 122, 34, 47, 62, 13, 10, 9, 9, 9, 60, 112, 97, 116, 104, 32, 100, 61, 34, 77, 51, 52, 51, 46, 52, 54, 54, 44, 50, 54, 49, 46, 52, 54, 53, 99, 45, 52, 53, 46, 50, 56, 55, 44, 48, 45, 56, 50, 44, 51, 54, 46, 55, 49, 51, 45, 56, 50, 44, 56, 50, 115, 51, 54, 46, 55, 49, 51, 44, 56, 50, 44, 56, 50, 44, 56, 50, 99, 52, 53, 46, 50, 56, 54, 44, 48, 44, 56, 50, 45, 51, 54, 46, 55, 49, 51, 44, 56, 50, 45, 56, 50, 83, 51, 56, 56, 46, 55, 53, 51, 44, 50, 54, 49, 46, 52, 54, 53, 44, 51, 52, 51, 46, 52, 54, 54, 44, 50, 54, 49, 46, 52, 54, 53, 122, 13, 10, 9, 9, 9, 9, 32, 77, 51, 55, 50, 46, 53, 48, 53, 44, 51, 51, 51, 46, 53, 54, 52, 108, 45, 53, 54, 46, 48, 52, 54, 44, 53, 54, 46, 49, 48, 52, 99, 45, 48, 46, 50, 51, 57, 44, 48, 46, 50, 51, 56, 45, 48, 46, 53, 51, 54, 44, 48, 46, 52, 49, 45, 48, 46, 56, 54, 50, 44, 48, 46, 52, 57, 54, 108, 45, 50, 50, 46, 51, 49, 53, 44, 53, 46, 56, 53, 99, 45, 48, 46, 54, 52, 57, 44, 48, 46, 49, 54, 56, 45, 49, 46, 51, 52, 55, 45, 48, 46, 48, 50, 45, 49, 46, 56, 50, 50, 45, 48, 46, 52, 57, 52, 13, 10, 9, 9, 9, 9, 99, 45, 48, 46, 52, 55, 55, 45, 48, 46, 52, 55, 57, 45, 48, 46, 54, 54, 54, 45, 49, 46, 49, 55, 50, 45, 48, 46, 52, 57, 54, 45, 49, 46, 56, 50, 52, 108, 53, 46, 56, 50, 54, 45, 50, 50, 46, 51, 49, 56, 99, 48, 46, 48, 56, 52, 45, 48, 46, 51, 50, 54, 44, 48, 46, 50, 53, 54, 45, 48, 46, 54, 50, 55, 44, 48, 46, 52, 57, 52, 45, 48, 46, 56, 54, 51, 108, 53, 54, 46, 48, 52, 55, 45, 53, 54, 46, 49, 48, 52, 13, 10, 9, 9, 9, 9, 99, 48, 46, 55, 52, 50, 45, 48, 46, 55, 52, 50, 44, 49, 46, 57, 52, 53, 45, 48, 46, 55, 52, 52, 44, 50, 46, 54, 56, 56, 45, 48, 46, 48, 48, 50, 108, 52, 46, 53, 52, 56, 44, 52, 46, 53, 52, 49, 99, 48, 46, 55, 51, 57, 44, 48, 46, 55, 52, 44, 48, 46, 55, 52, 49, 44, 49, 46, 57, 52, 51, 44, 48, 44, 50, 46, 54, 56, 56, 108, 45, 51, 55, 46, 52, 51, 51, 44, 51, 55, 46, 52, 55, 49, 108, 52, 46, 55, 48, 57, 44, 52, 46, 55, 48, 51, 108, 51, 55, 46, 52, 51, 53, 45, 51, 55, 46, 52, 55, 49, 13, 10, 9, 9, 9, 9, 99, 48, 46, 55, 51, 57, 45, 48, 46, 55, 52, 50, 44, 49, 46, 57, 52, 45, 48, 46, 55, 52, 50, 44, 50, 46, 54, 56, 50, 45, 48, 46, 48, 48, 50, 108, 52, 46, 53, 53, 44, 52, 46, 53, 52, 49, 67, 51, 55, 51, 46, 50, 53, 44, 51, 51, 49, 46, 54, 49, 55, 44, 51, 55, 51, 46, 50, 53, 44, 51, 51, 50, 46, 56, 50, 50, 44, 51, 55, 50, 46, 53, 48, 53, 44, 51, 51, 51, 46, 53, 54, 52, 122, 32, 77, 51, 57, 53, 46, 52, 55, 50, 44, 51, 49, 48, 46, 53, 55, 52, 108, 45, 49, 55, 44, 49, 55, 46, 48, 49, 56, 13, 10, 9, 9, 9, 9, 99, 45, 48, 46, 55, 51, 57, 44, 48, 46, 55, 52, 52, 45, 49, 46, 57, 52, 50, 44, 48, 46, 55, 52, 52, 45, 50, 46, 54, 56, 53, 44, 48, 46, 48, 48, 50, 108, 45, 49, 54, 46, 52, 56, 57, 45, 49, 54, 46, 52, 55, 53, 99, 45, 48, 46, 55, 52, 52, 45, 48, 46, 55, 52, 45, 48, 46, 55, 52, 52, 45, 49, 46, 57, 52, 51, 45, 48, 46, 48, 48, 50, 45, 50, 46, 54, 56, 56, 108, 49, 55, 45, 49, 55, 46, 48, 50, 13, 10, 9, 9, 9, 9, 99, 48, 46, 55, 52, 49, 45, 48, 46, 55, 52, 44, 49, 46, 57, 52, 52, 45, 48, 46, 55, 52, 44, 50, 46, 54, 56, 56, 45, 48, 46, 48, 48, 50, 108, 49, 54, 46, 52, 56, 55, 44, 49, 54, 46, 52, 55, 55, 67, 51, 57, 54, 46, 50, 49, 54, 44, 51, 48, 56, 46, 54, 50, 57, 44, 51, 57, 54, 46, 50, 49, 54, 44, 51, 48, 57, 46, 56, 51, 50, 44, 51, 57, 53, 46, 52, 55, 50, 44, 51, 49, 48, 46, 53, 55, 52, 122, 34, 47, 62, 13, 10, 9, 9, 60, 47, 103, 62, 13, 10, 9, 60, 47, 103, 62, 13, 10, 60, 47, 103, 62, 13, 10, 60, 47, 115, 118, 103, 62] },
};

module.exports = {
	mockServiceURLSuccessRes,
	mockServiceURL500Res,
	mockServiceURLIncorrectRes,
	mockServiceURLSuccessResWs,
	mockServiceURLIncorrectResWs,
	mockNodeURLSuccessResWs,
	mockNodeURLIncorrectResWs,
	mockImageResolutionResponse,
	mockIncorrectImageResolutionResponse,
};
