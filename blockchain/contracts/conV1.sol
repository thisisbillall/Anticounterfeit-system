// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract conV1 {

    struct Product{
        string name;
        address next_addr;
        uint date;
        uint expiry;
        uint mrp;
        uint packof;
    }

    mapping(bytes32 => Product) public Products;

    modifier exists(bytes32 _id) {
        require ((Products[_id].date) != 0, "Invalid Id, Product id does not exist on this blockchain!"); 
        _;
    }

    //events
    event created(bytes32 ret_id);
    event removed(bool ret_value);
    event added_next(bool ret_value);
    event verify(bool ret_value);
    event details(Product ret_data);

    function create(string memory _name, address _addr, uint _expiry, uint _mrp, uint _packof) public{
        Product memory P1 = Product(_name, _addr, block.timestamp, _expiry, _mrp, _packof);
        bytes32 id = keccak256(abi.encodePacked(block.timestamp, _name, _addr, _expiry, _mrp, _packof));
        Products[id] = P1;
        emit created(id);
    }

    function remove(bytes32 _id) public exists(_id){
        delete Products[_id];
        emit removed(true);
    }

    function add_next(bytes32 _id, address _addr) public exists(_id){
        Products[_id].next_addr = _addr;
        emit added_next(true);
    }

    function verify_user(bytes32 _id, address _addr) public exists(_id){
        bool temp = (Products[_id].next_addr == _addr) ? true : false;
        emit verify(temp);
    }

    function get_details(bytes32 _id) public exists(_id){
        emit details(Products[_id]);
    }
}