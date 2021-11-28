const CONTRACT_ADDRESS = '0x1365097c2786617D7CA58e161090c393Ee12022D';

const transformCharacterData = (characterData) => {
    return {
        name: characterData.name,
        imageURI: characterData.imageURI,
        hp: characterData.hp.toNumber(),
        maxHp: characterData.maxHp.toNumber(),
        attackDamage: characterData.attackDamage.toNumber(),
    };
};

export {CONTRACT_ADDRESS, transformCharacterData};