# IOST Hello World Contract

This is a repo included in the IOST developer tutorial series. Here, we create a simple Hello world contract and deploy on IOST local node.

Before doing the below steps, please make sure that your local IOST node is running. Please refer [here](https://github.com/vinayakkalra/IOST-setup-dev) if you dont know how to do that

To compile this contract run :

> iwallet compile HelloWorld.js

To publish the contract run:

> iwallet --account admin --chain_id 1020 publish HelloWorld.js HelloWorld.js.abi

To interact with the hello function in the contract run:

> iwallet --account admin --chain_id 1020 call "<contract address from above>" "hello" '["developer"]'
