// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract sample {
  constructor() public {
  }
  string temp;
  function get() public view returns (string memory) {
    return temp;
  }

    function set(string memory _x) public {
    temp = _x;
  }

      uint256 number;
    struct product{
        string name;
        // uint price;
        uint id;
        address manufacturer;
    }

    product[] public products;
    mapping(address => uint) public manu_to_ind;

    function additem(string memory _name) public{
        product memory P;
        P.name = _name;
        P.id = 600;
        P.manufacturer = msg.sender;
        products.push(P);
    }

   function getproduct(uint ind) public view returns(string memory n, uint i, address a){
        string memory n = products[ind].name;
        uint i = products[ind].id;
        address a = products[ind].manufacturer;
        return (n, i, a);
    }
}
