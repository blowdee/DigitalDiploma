# DigitalDiploma
Bachelor's project using Ethereum blockchain and smart contracts

Open terminal and run the following:

node

> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> code = fs.readFileSync('DigitalDiploma.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)
> abiDefinition = JSON.parse(compiledCode.contracts[':DigitalDiploma'].interface)
> ddContract = web3.eth.contract(abiDefinition)
> byteCode = compiledCode.contracts[':DigitalDiploma'].bytecode
> deployedContract = ddContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
> cInstance = ddContract.at(deployedContract.address)
