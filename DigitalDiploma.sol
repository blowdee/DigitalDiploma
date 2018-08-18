pragma solidity ^0.4.4;

contract dd {
    
  struct Document {
    address issuer;
    address recipient;
    string owner;
    string title;
    uint256 block;
  }

  mapping(bytes32 => Document) documents;
  
  function concat(string _a, string _b) private pure returns (string){
    bytes memory bytes_a = bytes(_a);
    bytes memory bytes_b = bytes(_b);
    string memory length_ab = new string(bytes_a.length + bytes_b.length);
    bytes memory bytes_c = bytes(length_ab);
    uint k = 0;
    for (uint i = 0; i < bytes_a.length; i++) bytes_c[k++] = bytes_a[i];
    for (i = 0; i < bytes_b.length; i++) bytes_c[k++] = bytes_b[i];
    return string(bytes_c);
}

  function getDocument(bytes32 hash) public constant returns (address, address, string, string, uint256) {
    return (documents[hash].issuer, documents[hash].recipient, documents[hash].owner, documents[hash].title, documents[hash].block);
  }

  function issue(address recipient, string owner, string title, bytes32 hash) public payable {
    require(documents[hash].issuer == address(0));

    documents[hash].issuer = msg.sender;
    documents[hash].recipient = recipient;
    documents[hash].owner = owner;
    documents[hash].title = title;
    documents[hash].block = block.number;
  }

  function validate(address recipient, bytes32 hash) public constant returns (bool) {
    return documents[hash].recipient != address(0) && documents[hash].recipient == recipient;
  }
}
