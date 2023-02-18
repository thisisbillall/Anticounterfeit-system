pragma solidity >=0.7.0 <0.9.0;

contract sample {

    struct Product{
        string name;
        address next_addr;
        uint date;
        uint expiry;
        uint mrp;
        uint packof;
    }

    bytes32 public ID;
    mapping(bytes32 => Product) public Products;

    modifier exists(bytes32 _id) {
        require ((Products[_id].date) != 0, "Invalid Id"); 
        _;
    }

    // creates new product, returns it's hashed value.
    function create(string memory _name, address _addr, uint _expiry, uint _mrp, uint _packof) public returns(bytes32){
        Product memory P1 = Product(_name, _addr, block.timestamp, _expiry, _mrp, _packof);
        bytes32 id = keccak256(abi.encodePacked(block.timestamp, _name));
        Products[id] = P1;
        return id;
    }

    function remove(bytes32 _id) public exists(_id) returns(bool){
        delete Products[_id];
        return true;
    }

    // intermediate user
    function add_next(bytes32 _id, address _addr) public exists(_id) returns (bool){
        Products[_id].next_addr = _addr;
    }

    function verify_user(bytes32 _id, address _addr) public exists(_id) returns(bool){
        return Products[_id].next_addr == _addr;
    }

    // view details
    function get_details(bytes32 _id) public exists(_id) returns(Product memory){
        return Products[_id];
    }
}