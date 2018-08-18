# DigitalDiploma
Bachelor's project using Ethereum blockchain and smart contracts

Open terminal and run the following:

<b>node</b>
Then:
> Web3 = require('web3') </br>
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545")); </br>
> code = fs.readFileSync('DigitalDiploma.sol').toString() </br>
> solc = require('solc') </br>
> compiledCode = solc.compile(code) </br>
> abiDefinition = JSON.parse(compiledCode.contracts[':DigitalDiploma'].interface) </br>
> ddContract = web3.eth.contract(abiDefinition) </br>
> byteCode = compiledCode.contracts[':DigitalDiploma'].bytecode </br>
> deployedContract = ddContract.new({data: byteCode, from: web3.eth.accounts[0], gas: 4700000}) </br>
> cInstance = ddContract.at(deployedContract.address)
