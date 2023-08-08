 const cekDouble = async(value) => {
    const duplikat = await students.findOne({name : value});
    if(duplikat){
        throw new Error('Nama sudah ada!');
    }
    return true;
};

module.exports = cekDouble;