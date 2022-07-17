async function deploy() {
    //...existing code...
    const [deployer] = await ethers.getSigners()
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const helloWorldContract = await HelloWorld.attach(deployer)
    console.log("HelloWorld address:", helloWorldContract.address);
    saveDAppFiles(helloWorldContract);
}

// Store metadata for the dApp
function saveDAppFiles(contract) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../../vpos-web/src/contracts";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    // Store the contract address
    const addressFileName = contractsDir + "/helloworld-address.json";
    fs.writeFileSync(
        addressFileName,
        JSON.stringify({ Contract: contract.address }, undefined, 2)
    );
    console.log("Stored address in ", addressFileName);

    // Store the contract artifact (including the ABI)
    const ContractArtifact = artifacts.readArtifactSync("HelloWorld");
    const artifactFileName = contractsDir + "/HelloWorld.json";
    fs.writeFileSync(
        artifactFileName,
        JSON.stringify(ContractArtifact, null, 2)
    );
    console.log("Stored artifact in ", artifactFileName);
}

deploy()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });