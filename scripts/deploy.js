async function deploy() {
    //...existing code...
    const [deployer] = await ethers.getSigners()
    const AvaxBox = await ethers.getContractFactory("Avaxbox");
    const avaboxContract = await AvaxBox.attach(deployer)
    console.log("Avaxbox address:", avaboxContract.address);
    saveDAppFiles(avaboxContract);
}

// Store metadata for the dApp
function saveDAppFiles(contract) {
    const fs = require("fs");
    const contractsDir = __dirname + "/../../vpos-web/src/contracts";

    if (!fs.existsSync(contractsDir)) {
        fs.mkdirSync(contractsDir);
    }

    // Store the contract address
    const addressFileName = contractsDir + "/avaxbox-address.json";
    fs.writeFileSync(
        addressFileName,
        JSON.stringify({ Contract: contract.address }, undefined, 2)
    );
    console.log("Stored address in ", addressFileName);

    // Store the contract artifact (including the ABI)
    const ContractArtifact = artifacts.readArtifactSync("Avaxbox");
    const artifactFileName = contractsDir + "/AvaxBox.json";
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