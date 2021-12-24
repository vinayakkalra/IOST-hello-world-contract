// @dev to create a new account
// iwallet --account admin --chain_id 1020 account create <name> --initial_balance 1000

// @dev Please refer to the below cmd commands to publish and call a contract
// iwallet --account admin --chain_id 1020 publish helloworld.js helloworld.js.abi
// ContractFzphiAoGbBmNZV7fZVqoUo6t9dzSQ7T7ssgpSsjQ1yVC
// iwallet --account admin --chain_id 1020 call "ContractFzphiAoGbBmNZV7fZVqoUo6t9dzSQ7T7ssgpSsjQ1yVC" "hello" '["developer"]' 

class HelloWorld {
    init() { } // needs to provide an init function that will be called during deployment
    hello(someone) {
        return "hello, " + someone
    }
}

module.exports = HelloWorld;

