module.exports = function parseStringasArray(arrayString)
{
    return arrayString.split(',').map(tech => tech.trim())
}