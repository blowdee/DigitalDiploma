web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
abi = JSON.parse('[ { "constant": false, "inputs": [ { "name": "recipient", "type": "address" }, { "name": "owner", "type": "string" }, { "name": "title", "type": "string" } ], "name": "issue", "outputs": [ { "name": "", "type": "bytes32" } ], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": true, "inputs": [ { "name": "recipient", "type": "address" }, { "name": "hash", "type": "bytes32" } ], "name": "validate", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "hash", "type": "bytes32" } ], "name": "getDocument", "outputs": [ { "name": "", "type": "address" }, { "name": "", "type": "address" }, { "name": "", "type": "string" }, { "name": "", "type": "string" }, { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" } ]')
ddContract = web3.eth.contract(abi);
contractInstance = ddContract.at('0xc0527b993fd7f4da8e778c1f094ab19d0685e073');

function get() {
  $('#result').empty();
  content = $('#content').val();
  res = contractInstance.getDocument.call(content);
  $(document).ready(function(){
    if(res[0] === "0x0000000000000000000000000000000000000000"){
      $('<p>No certificate found</p>').appendTo('#result');
    }
    else{
      $('<p>Issuer: ' + res[0] + '</p><p>Recipient: ' + res[1] + '</p><p>Owner: ' + res[2] + '</p><p>Title: ' + res[3] + '</p>').appendTo('#result');
    }
  })
}
